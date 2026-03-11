import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Simple in-memory rate limiter (resets on cold start — sufficient for serverless)
const checkoutRateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const entry = checkoutRateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    checkoutRateLimit.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }
  if (entry.count >= limit) return true;
  entry.count++;
  return false;
}

// Server-side authoritative pricing — never trust client price
const PRODUCT_CATALOG: Record<string, { name: string; price: number }> = {
  "diffuser-white": { name: "Velour Cloud™ Mini USB Diffuser — White", price: 24.99 },
  "diffuser-pink": { name: "Velour Cloud™ Mini USB Diffuser — Pink", price: 24.99 },
  "diffuser-blue": { name: "Velour Cloud™ Mini USB Diffuser — Blue", price: 24.99 },
  "diffuser-green": { name: "Velour Cloud™ Mini USB Diffuser — Green", price: 24.99 },
  "diffuser-gray": { name: "Velour Cloud™ Mini USB Diffuser — Gray", price: 24.99 },
  "upsell-3oil": { name: "3-Pack Fragrance Refill Set", price: 14.99 },
  "upsell-5oil": { name: "6-Pack Fragrance Refill Set", price: 24.99 },
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

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip, 5, 60_000)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const stripe = new Stripe(secretKey, { apiVersion: "2023-10-16" });
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velourcloud.com";

  let session;
  try {
    session = await stripe.checkout.sessions.create({
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
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Stripe error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }

  return NextResponse.json({ url: session.url });
}
