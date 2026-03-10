import { NextRequest, NextResponse } from "next/server";
import { createCheckoutSession, CartItem } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const { items }: { items: CartItem[] } = await req.json();

  if (!items || items.length === 0) {
    return NextResponse.json({ error: "No items provided" }, { status: 400 });
  }

  const session = await createCheckoutSession(items);
  return NextResponse.json({ url: session.url });
}
