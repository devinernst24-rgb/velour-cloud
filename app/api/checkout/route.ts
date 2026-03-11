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
  "diffuser":           { name: "Velour Cloud™ Aroma Diffuser",   price: 23.99 },
  "cartridge-lavender": { name: "Lavender Refill Cartridge",       price: 11.99 },
  "cartridge-rose":     { name: "Rose Refill Cartridge",           price: 11.99 },
};

const ALLOWED_ORIGINS = [
  "https://velourcloud.com",
  "https://www.velourcloud.com",
  "http://localhost:3000",
];

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

  // Validate all items first
  const validatedItems: Array<{ name: string; unitAmount: number; quantity: number }> = [];
  for (const item of items) {
    const product = PRODUCT_CATALOG[item.variantId as string];
    const quantity = Number(item.quantity);
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
      return NextResponse.json({ error: "Invalid item" }, { status: 400 });
    }
    validatedItems.push({
      name: product.name,
      unitAmount: Math.round(product.price * 100),
      quantity,
    });
  }

  const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://velourcloud.com").trim();
  const itemsSummary = items
    .map((i: { variantId: string; quantity: number }) =>
      `${PRODUCT_CATALOG[i.variantId]?.name} x${i.quantity}`
    )
    .join(", ");

  // Build form body using URLSearchParams (safe, standard encoding)
  const params = new URLSearchParams();
  params.append("mode", "payment");
  params.append("currency", "usd");
  params.append("payment_method_types[]", "card");
  params.append("customer_creation", "always");
  params.append("success_url", `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`);
  params.append("cancel_url", `${siteUrl}/products/aroma-diffuser`);
  params.append("shipping_address_collection[allowed_countries][]", "CA");
  params.append("shipping_address_collection[allowed_countries][]", "US");
  params.append("shipping_address_collection[allowed_countries][]", "GB");
  params.append("shipping_address_collection[allowed_countries][]", "AU");
  params.append("phone_number_collection[enabled]", "true");
  params.append("metadata[source]", "velourcloud.com");
  params.append("metadata[items]", itemsSummary);

  // Free shipping option
  params.append("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
  params.append("shipping_options[0][shipping_rate_data][display_name]", "Free shipping");
  params.append("shipping_options[0][shipping_rate_data][fixed_amount][amount]", "0");
  params.append("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "usd");
  params.append("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][unit]", "business_day");
  params.append("shipping_options[0][shipping_rate_data][delivery_estimate][minimum][value]", "7");
  params.append("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][unit]", "business_day");
  params.append("shipping_options[0][shipping_rate_data][delivery_estimate][maximum][value]", "14");

  // Express shipping option
  params.append("shipping_options[1][shipping_rate_data][type]", "fixed_amount");
  params.append("shipping_options[1][shipping_rate_data][display_name]", "Express shipping");
  params.append("shipping_options[1][shipping_rate_data][fixed_amount][amount]", "999");
  params.append("shipping_options[1][shipping_rate_data][fixed_amount][currency]", "usd");
  params.append("shipping_options[1][shipping_rate_data][delivery_estimate][minimum][unit]", "business_day");
  params.append("shipping_options[1][shipping_rate_data][delivery_estimate][minimum][value]", "3");
  params.append("shipping_options[1][shipping_rate_data][delivery_estimate][maximum][unit]", "business_day");
  params.append("shipping_options[1][shipping_rate_data][delivery_estimate][maximum][value]", "7");

  // Line items
  validatedItems.forEach((item, i) => {
    params.append(`line_items[${i}][price_data][currency]`, "usd");
    params.append(`line_items[${i}][price_data][product_data][name]`, item.name);
    params.append(`line_items[${i}][price_data][unit_amount]`, String(item.unitAmount));
    params.append(`line_items[${i}][quantity]`, String(item.quantity));
  });

  try {
    const res = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2023-10-16",
      },
      body: params.toString(),
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
