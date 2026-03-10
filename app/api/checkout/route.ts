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

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

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
    success_url: `${siteUrl}/`,
    cancel_url: `${siteUrl}/products/rain-cloud-diffuser`,
  });

  return NextResponse.json({ url: session.url });
}
