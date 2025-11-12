import 'jsr:@supabase/functions-js/edge-runtime.d.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.49.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
);

interface EmailRequest {
  email: string;
  name: string;
  productId: string;
  productTitle: string;
  downloadUrl: string;
  amount: number;
}

Deno.serve(async (req: Request) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 200,
        headers: corsHeaders,
      });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', {
        status: 405,
        headers: corsHeaders,
      });
    }

    const { email, name, productId, productTitle, downloadUrl, amount }: EmailRequest = await req.json();

    if (!email || !productId || !productTitle) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const emailHtml = generatePurchaseEmail({
      name,
      productTitle,
      downloadUrl,
      amount,
    });

    const { data, error } = await supabase.from('email_queue').insert({
      to_email: email,
      subject: `Votre e-book NegoPros: ${productTitle}`,
      html_content: emailHtml,
      status: 'pending',
      metadata: {
        productId,
        productTitle,
        amount,
      },
    });

    if (error) {
      console.error('Error queuing email:', error);
      return new Response(
        JSON.stringify({ error: 'Failed to queue email' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email queued successfully' }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error: any) {
    console.error('Error in send-purchase-email function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});

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

          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0A2647 0%, #2563EB 100%); padding: 40px 30px; text-align: center;">
              <h1 style="color: #D4AF37; margin: 0; font-size: 28px;">NegoPros</h1>
              <p style="color: #ffffff; margin: 10px 0 0 0; font-size: 16px;">Merci pour votre achat !</p>
            </td>
          </tr>

          <!-- Content -->
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
                <a href="${downloadUrl}"
                   style="display: inline-block; background-color: #2563EB; color: #ffffff; text-decoration: none; padding: 15px 40px; border-radius: 6px; font-size: 16px; font-weight: bold;">
                  Télécharger mon e-book
                </a>
              </div>

              <p style="color: #666; font-size: 14px; line-height: 1.6; margin: 20px 0;">
                <strong>Remarque :</strong> Ce lien de téléchargement est valable pendant 30 jours. Nous vous recommandons de sauvegarder votre e-book sur votre appareil.
              </p>

              <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;" />

              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0 0 20px 0;">
                Besoin d'aide ou de conseils personnalisés ? N'hésitez pas à nous contacter.
              </p>

              <p style="color: #0A2647; font-size: 16px; line-height: 1.6; margin: 0;">
                Cordialement,<br>
                <strong>L'équipe NegoPros</strong>
              </p>
            </td>
          </tr>

          <!-- Footer -->
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
