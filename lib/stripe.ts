import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2026-02-25.clover",
  });
}

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
  variantName?: string;
}

export async function createCheckoutSession(items: CartItem[]) {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items: items.map((item) => ({
      price_data: {
        currency: "cad",
        product_data: {
          name: item.variantName ? `${item.name} — ${item.variantName}` : item.name,
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/products/rain-cloud-diffuser`,
  });

  return session;
}
