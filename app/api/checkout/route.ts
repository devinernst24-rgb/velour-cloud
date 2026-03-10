import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Server-side authoritative pricing — never trust client price
const PRODUCT_CATALOG: Record<string, { name: string; price: number }> = {
  "48065754792103": { name: "Velour Cloud Rain Diffuser — Ivory White", price: 44.99 },
  "48065759314087": { name: "Velour Cloud Rain Diffuser — Soft Grey", price: 44.99 },
  "48065759346855": { name: "Velour Cloud Rain Diffuser — Misty Blue", price: 44.99 },
  "upsell-3oil": { name: "Essential Oil Bundle (3-pack)", price: 14.99 },
  "upsell-5oil": { name: "Essential Oil Bundle (5-pack)", price: 22.99 },
};

const ALLOWED_ORIGINS = [
  "https://velourcloud.com",
  "https://www.velourcloud.com",
  "http://localhost:3000",
];

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ url: null, error: "Stripe not configured" });
  }

  const origin = req.headers.get("origin") || "";
  if (!ALLOWED_ORIGINS.includes(origin)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const body = await req.json();
  const items = body?.items;

  if (!Array.isArray(items) || items.length === 0) {
    return NextResponse.json({ error: "Invalid cart" }, { status: 400 });
  }

  const lineItems = [];
  for (const item of items) {
    const product = PRODUCT_CATALOG[item.variantId];
    const quantity = Number(item.quantity);
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: "Invalid item" }, { status: 400 });
    }
    lineItems.push({
      price_data: {
        currency: "cad",
        product_data: { name: product.name },
        unit_amount: Math.round(product.price * 100),
      },
      quantity,
    });
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2026-02-25.clover" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velourcloud.com";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    currency: "cad",
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ["CA", "US", "GB", "AU", "NZ"] },
    phone_number_collection: { enabled: true },
    customer_creation: "always",
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 0, currency: "cad" },
          display_name: "Free shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 7 },
            maximum: { unit: "business_day", value: 14 },
          },
        },
      },
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: { amount: 999, currency: "cad" },
          display_name: "Express shipping",
          delivery_estimate: {
            minimum: { unit: "business_day", value: 3 },
            maximum: { unit: "business_day", value: 7 },
          },
        },
      },
    ],
    metadata: {
      source: "velourcloud.com",
      items: items.map((i: {variantId: string; quantity: number}) => `${PRODUCT_CATALOG[i.variantId]?.name} x${i.quantity}`).join(", "),
    },
    success_url: `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/products/rain-cloud-diffuser`,
  });

  return NextResponse.json({ url: session.url });
}
