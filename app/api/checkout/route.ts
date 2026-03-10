import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

interface CartItem {
  variantId: string;
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ url: null, error: "Stripe not configured" });
  }

  const { items }: { items: CartItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No items provided" }, { status: 400 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2026-02-25.clover" });

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://velourcloud.com";

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    currency: "cad",
    line_items: items.map((item) => ({
      price_data: {
        currency: "cad",
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    // Collect shipping address for order fulfillment
    shipping_address_collection: {
      allowed_countries: ["CA", "US", "GB", "AU", "NZ"],
    },
    // Collect phone number for courier notifications
    phone_number_collection: { enabled: true },
    // Collect email for receipts + follow-up
    customer_creation: "always",
    // Shipping options
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
    // Order metadata for tracking
    metadata: {
      source: "velourcloud.com",
      items: items.map((i) => `${i.name} x${i.quantity}`).join(", "),
    },
    success_url: `${siteUrl}/order-success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${siteUrl}/products/rain-cloud-diffuser`,
  });

  return NextResponse.json({ url: session.url });
}
