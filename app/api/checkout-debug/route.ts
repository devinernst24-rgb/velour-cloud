import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "MISSING";
  const secretKey = process.env.STRIPE_SECRET_KEY || "";

  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append("currency", "cad");
  params.append("payment_method_types[]", "card");
  params.append("success_url", siteUrl + "/order-success?session_id={CHECKOUT_SESSION_ID}");
  params.append("cancel_url", siteUrl + "/products/rain-cloud-diffuser");
  params.append("line_items[0][price_data][currency]", "cad");
  params.append("line_items[0][price_data][product_data][name]", "Test Product");
  params.append("line_items[0][price_data][unit_amount]", "2499");
  params.append("line_items[0][quantity]", "1");

  const bodyStr = params.toString();

  const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + secretKey,
      "Content-Type": "application/x-www-form-urlencoded",
      "Stripe-Version": "2023-10-16",
    },
    body: bodyStr,
  });

  const data = await res.json();
  return NextResponse.json({ siteUrl, bodyPreview: bodyStr.slice(0,300), stripeStatus: res.status, stripeData: data });
}
