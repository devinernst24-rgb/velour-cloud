import { NextRequest, NextResponse } from "next/server";

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
  "diffuser-white": { name: "Velour Cloud™ Smart Scent Diffuser — White", price: 24.99 },
  "diffuser-pink":  { name: "Velour Cloud™ Smart Scent Diffuser — Pink",  price: 24.99 },
  "diffuser-blue":  { name: "Velour Cloud™ Smart Scent Diffuser — Blue",  price: 24.99 },
  "diffuser-green": { name: "Velour Cloud™ Smart Scent Diffuser — Green", price: 24.99 },
  "diffuser-gray":  { name: "Velour Cloud™ Smart Scent Diffuser — Gray",  price: 24.99 },
  "upsell-3oil":    { name: "3-Pack Fragrance Refill Set",                 price: 14.99 },
  "upsell-5oil":    { name: "6-Pack Fragrance Refill Set",                 price: 24.99 },
};

const ALLOWED_ORIGINS = [
  "https://velourcloud.com",
  "https://www.velourcloud.com",
  "http://localhost:3000",
];

// Build URL-encoded form body for Stripe API (no SDK, native fetch)
function encodeStripeBody(params: Record<string, unknown>, prefix = ""): string {
  const parts: string[] = [];
  for (const [k, v] of Object.entries(params)) {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (v === null || v === undefined) continue;
    if (typeof v === "object" && !Array.isArray(v)) {
      parts.push(encodeStripeBody(v as Record<string, unknown>, key));
    } else if (Array.isArray(v)) {
      v.forEach((item, i) => {
        if (typeof item === "object" && item !== null) {
          parts.push(encodeStripeBody(item as Record<string, unknown>, `${key}[${i}]`));
        } else {
          parts.push(`${encodeURIComponent(`${key}[${i}]`)}=${encodeURIComponent(String(item))}`);
        }
      });
    } else {
      parts.push(`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`);
    }
  }
  return parts.join("&");
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
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

  const lineItems: Array<{
    price_data: { currency: string; product_data: { name: string }; unit_amount: number };
    quantity: number;
  }> = [];

  for (const item of items) {
    const product = PRODUCT_CATALOG[item.variantId as string];
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

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velourcloud.com";
  const itemsSummary = items
    .map((i: { variantId: string; quantity: number }) =>
      `${PRODUCT_CATALOG[i.variantId]?.name} x${i.quantity}`
    )
    .join(", ");

  const stripeParams: Record<string, unknown> = {
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
    "metadata[source]": "velourcloud.com",
    "metadata[items]": itemsSummary,
    success_url: `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/products/rain-cloud-diffuser`,
  };

  try {
    const encoded = encodeStripeBody(stripeParams);
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2023-10-16",
      },
      body: encoded,
    });

    const data = await res.json() as { url?: string; error?: { message: string } };

    if (!res.ok || !data.url) {
      return NextResponse.json(
        { error: data?.error?.message ?? "Stripe session creation failed" },
        { status: 502 }
      );
    }

    return NextResponse.json({ url: data.url });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
