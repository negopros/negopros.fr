import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import Stripe from "npm:stripe@17.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2024-12-18.acacia",
    });

    const { productId, productName, price, email, successUrl, cancelUrl } = await req.json();

    if (!productId || !email) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const origin = req.headers.get("origin") || "https://negopros.com";

    let sessionConfig: any = {
      payment_method_types: ["card"],
      mode: "payment",
      customer_email: email,
      metadata: {
        productId,
        email,
      },
    };

    if (productId === 'coaching_audit_express') {
      sessionConfig.line_items = [{
        price_data: {
          currency: "eur",
          product_data: {
            name: "Coaching 1h / Audit Négociation Express",
            description: "Audit complet d'une négociation en cours avec recommandations stratégiques",
          },
          unit_amount: 15000,
        },
        quantity: 1,
      }];
      sessionConfig.success_url = successUrl || `${origin}/reserver?payment=success&session_id={CHECKOUT_SESSION_ID}`;
      sessionConfig.cancel_url = cancelUrl || `${origin}/reserver?payment=cancelled`;
    } else if (productId === 'coaching_3_seances') {
      sessionConfig.line_items = [{
        price_data: {
          currency: "eur",
          product_data: {
            name: "Forfait 3 séances Coaching",
            description: "Coaching approfondi en négociation sur 3 séances",
          },
          unit_amount: 40000,
        },
        quantity: 1,
      }];
      sessionConfig.success_url = successUrl || `${origin}/reserver?payment=success&session_id={CHECKOUT_SESSION_ID}`;
      sessionConfig.cancel_url = cancelUrl || `${origin}/reserver?payment=cancelled`;
    } else if (productId === 'coaching_6_seances') {
      sessionConfig.line_items = [{
        price_data: {
          currency: "eur",
          product_data: {
            name: "Forfait 6 séances Coaching",
            description: "Coaching intensif en négociation sur 6 séances",
          },
          unit_amount: 75000,
        },
        quantity: 1,
      }];
      sessionConfig.success_url = successUrl || `${origin}/reserver?payment=success&session_id={CHECKOUT_SESSION_ID}`;
      sessionConfig.cancel_url = cancelUrl || `${origin}/reserver?payment=cancelled`;
    } else {
      if (!productName || !price) {
        return new Response(
          JSON.stringify({ error: "Missing productName or price for ebook" }),
          {
            status: 400,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      sessionConfig.line_items = [{
        price_data: {
          currency: "eur",
          product_data: {
            name: productName,
            description: "Ebook NegoPros",
          },
          unit_amount: Math.round(price * 100),
        },
        quantity: 1,
      }];
      sessionConfig.success_url = successUrl || `${origin}/ebooks?success=true&product=${productId}`;
      sessionConfig.cancel_url = cancelUrl || `${origin}/ebooks?canceled=true`;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return new Response(
      JSON.stringify({ url: session.url }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});