import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import Stripe from 'npm:stripe@17.7.0';
import { createClient } from 'npm:@supabase/Bolt Database-js@2.49.1';

const stripeSecret = Deno.env.get('STRIPE_SECRET_KEY')!;
const stripeWebhookSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
const stripe = new Stripe(stripeSecret, {
  appInfo: {
    name: 'Bolt Integration',
    version: '1.0.0',
  },
});

const Bolt Database = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);

Deno.serve(async (req) => {
  try {
    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 204 });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    // get the signature from the header
    const signature = req.headers.get('stripe-signature');

    if (!signature) {
      return new Response('No signature found', { status: 400 });
    }

    // get the raw body
    const body = await req.text();

    // verify the webhook signature
    let event: Stripe.Event;

    try {
      event = await stripe.webhooks.constructEventAsync(body, signature, stripeWebhookSecret);
    } catch (error: any) {
      console.error(`Webhook signature verification failed: ${error.message}`);
      return new Response(`Webhook signature verification failed: ${error.message}`, { status: 400 });
    }

    EdgeRuntime.waitUntil(handleEvent(event));

    return Response.json({ received: true });
  } catch (error: any) {
    console.error('Error processing webhook:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});

async function handleEvent(event: Stripe.Event) {
  const stripeData = event?.data?.object ?? {};

  if (!stripeData) {
    return;
  }

  if (!('customer' in stripeData)) {
    return;
  }

  // for one time payments, we only listen for the checkout.session.completed event
  if (event.type === 'payment_intent.succeeded' && event.data.object.invoice === null) {
    return;
  }

  const { customer: customerId } = stripeData;

  if (!customerId || typeof customerId !== 'string') {
    console.error(`No customer received on event: ${JSON.stringify(event)}`);
  } else {
    let isSubscription = true;

    if (event.type === 'checkout.session.completed') {
      const { mode } = stripeData as Stripe.Checkout.Session;

      isSubscription = mode === 'subscription';

      console.info(`Processing ${isSubscription ? 'subscription' : 'one-time payment'} checkout session`);
    }

    const { mode, payment_status } = stripeData as Stripe.Checkout.Session;

    if (isSubscription) {
      console.info(`Starting subscription sync for customer: ${customerId}`);
      await syncCustomerFromStripe(customerId);
    } else if (mode === 'payment' && payment_status === 'paid') {
      try {
        // Extract the necessary information from the session
        const {
          id: checkout_session_id,
          payment_intent,
          amount_subtotal,
          amount_total,
          currency,
        } = stripeData as Stripe.Checkout.Session;

        // Insert the order into the stripe_orders table
        const { error: orderError } = await supabase.from('stripe_orders').insert({
          checkout_session_id,
          payment_intent_id: payment_intent,
          customer_id: customerId,
          amount_subtotal,
          amount_total,
          currency,
          payment_status,
          status: 'completed', // assuming we want to mark it as completed since payment is successful
        });

        if (orderError) {
          console.error('Error inserting order:', orderError);
          return;
        }
        console.info(`Successfully processed one-time payment for session: ${checkout_session_id}`);

        // Send purchase confirmation email
        const session = stripeData as Stripe.Checkout.Session;
        const customer = await stripe.customers.retrieve(customerId as string);

        if (customer && !customer.deleted && customer.email) {
          const productId = session.metadata?.productId || 'unknown';
          const productTitle = session.metadata?.productTitle || 'E-book NegoPros';

          // Generate correct download URL based on productId
          let downloadUrl = 'https://negopros.fr/';
          if (productId === 'negociation-pme') {
            downloadUrl = 'https://negopros.fr/ebook_negociation_pme_2025.pdf';
          } else if (productId === 'negociation-achats') {
            downloadUrl = 'https://negopros.fr/ebook_negociation_acheteur_2025.pdf';
          }

          // Queue the email
          const { error: emailError } = await supabase.from('email_queue').insert({
            to_email: customer.email,
            subject: `Votre e-book NegoPros: ${productTitle}`,
            html_content: generatePurchaseEmail({
              name: customer.name || '',
              productTitle,
              downloadUrl,
              amount: amount_total || 0,
            }),
            status: 'pending',
            metadata: {
              productId,
              productTitle,
              amount: amount_total,
              customerId,
            },
          });

          if (emailError) {
            console.error('Error queuing purchase email:', emailError);
          } else {
            console.info(`Purchase confirmation email queued for: ${customer.email}`);
          }
        }
      } catch (error) {
        console.error('Error processing one-time payment:', error);
      }
    }
  }
}

// based on the excellent https://github.com/t3dotgg/stripe-recommendations
async function syncCustomerFromStripe(customerId: string) {
  try {
    // fetch latest subscription data from Stripe
    const subscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 1,
      status: 'all',
      expand: ['data.default_payment_method'],
    });

    // TODO verify if needed
    if (subscriptions.data.length === 0) {
      console.info(`No active subscriptions found for customer: ${customerId}`);
      const { error: noSubError } = await supabase.from('stripe_subscriptions').upsert(
        {
          customer_id: customerId,
          subscription_status: 'not_started',
        },
        {
          onConflict: 'customer_id',
        },
      );

      if (noSubError) {
        console.error('Error updating subscription status:', noSubError);
        throw new Error('Failed to update subscription status in database');
      }
    }

    // assumes that a customer can only have a single subscription
    const subscription = subscriptions.data[0];

    // store subscription state
    const { error: subError } = await supabase.from('stripe_subscriptions').upsert(
      {
        customer_id: customerId,
        subscription_id: subscription.id,
        price_id: subscription.items.data[0].price.id,
        current_period_start: subscription.current_period_start,
        current_period_end: subscription.current_period_end,
        cancel_at_period_end: subscription.cancel_at_period_end,
        ...(subscription.default_payment_method && typeof subscription.default_payment_method !== 'string'
          ? {
              payment_method_brand: subscription.default_payment_method.card?.brand ?? null,
              payment_method_last4: subscription.default_payment_method.card?.last4 ?? null,
            }
          : {}),
        status: subscription.status,
      },
      {
        onConflict: 'customer_id',
      },
    );

    if (subError) {
      console.error('Error syncing subscription:', subError);
      throw new Error('Failed to sync subscription in database');
    }
    console.info(`Successfully synced subscription for customer: ${customerId}`);
  } catch (error) {
    console.error(`Failed to sync subscription for customer ${customerId}:`, error);
    throw error;
  }
}

function generatePurchaseEmail({
  name,
  productTitle,
  downloadUrl,
  amount,
}: {
  name: string;
  productTitle: string;
  downloadUrl: string;
  amount: number;
}): string {
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Confirmation d'achat - NegoPros</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f4f4; padding: 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <tr>
            <td style="background: linear-gradient(135deg, #0A2647 0%, #2563EB 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 28px;">NegoPros</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Merci pour votre achat !</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px 30px;">
              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                ${name ? `Bonjour ${name},` : 'Bonjour,'}
              </p>
              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Nous vous confirmons la réception de votre paiement de <strong>${(amount / 100).toFixed(2)}€</strong> pour :
              </p>
              <div style="background-color: #f8f9fa; border-left: 4px solid #2563EB; padding: 20px; margin: 20px 0;">
                <h2 style="color: #0A2647; margin: 0 0 10px 0; font-size: 18px;">${productTitle}</h2>
                <p style="color: #666; margin: 0; font-size: 14px;">E-book au format PDF</p>
              </div>
              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 20px 0;">
                Votre e-book est maintenant disponible au téléchargement :
              </p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${downloadUrl}" style="display: inline-block; background-color: #2563EB; color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                  Télécharger mon e-book
                </a>
              </div>
              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0;">
                <strong>Remarque :</strong> Ce lien de téléchargement est valable pendant 30 jours.
              </p>
              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />
              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Besoin d'aide ? N'hésitez pas à nous contacter.
              </p>
              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0;">
                Cordialement,<br>
                <strong>L'équipe NegoPros</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 30px; text-align: center;">
              <p style="color: #666; font-size: 14px; margin: 0 0 10px 0;">
                <strong>NegoPros</strong><br>
                Toulouse Nord - St Jory<br>
                Email: gerardpavez@gmail.com | Tél: 0614393577
              </p>
              <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
                © ${new Date().getFullYear()} NegoPros. Tous droits réservés.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
