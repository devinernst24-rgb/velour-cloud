"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const variants = [
  { name: "Ivory White", price: 44.99, variantId: "48065754792103" },
  { name: "Soft Grey",   price: 44.99, variantId: "48065759314087" },
  { name: "Misty Blue",  price: 44.99, variantId: "48065759346855" },
];

const upsells = [
  { label: "3-Oil Bundle", price: 14.99, id: "upsell-3oil" },
  { label: "5-Oil Bundle", price: 22.99, id: "upsell-5oil" },
];

export default function AddToCart() {
  const { addItem, isLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedUpsell, setSelectedUpsell] = useState<string | null>(null);

  async function handleAddToCart() {
    await addItem(selectedVariant.variantId, 1);
  }

  const total =
    selectedVariant.price +
    (selectedUpsell
      ? upsells.find((u) => u.id === selectedUpsell)?.price ?? 0
      : 0);

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-3">
          Colour
        </p>
        <div className="flex flex-wrap gap-3">
          {variants.map((v) => (
            <button
              key={v.variantId}
              onClick={() => setSelectedVariant(v)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                selectedVariant.variantId === v.variantId
                  ? "bg-plum text-cream border-plum"
                  : "bg-transparent text-plum border-plum/30 hover:border-plum/60"
              }`}
            >
              {v.name} — ${v.price.toFixed(2)} CAD
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-3">
          Complete the ritual
        </p>
        <div className="flex flex-wrap gap-3">
          {upsells.map((u) => (
            <button
              key={u.id}
              onClick={() =>
                setSelectedUpsell(selectedUpsell === u.id ? null : u.id)
              }
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                selectedUpsell === u.id
                  ? "bg-lilac text-plum border-lilac"
                  : "bg-transparent text-plum border-plum/30 hover:border-lilac"
              }`}
            >
              {u.label} +${u.price.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      <div className="pt-2">
        <p className="text-2xl font-semibold text-plum mb-4">
          ${total.toFixed(2)} CAD
        </p>
        <button
          onClick={handleAddToCart}
          disabled={isLoading}
          className="w-full bg-plum text-cream py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors disabled:opacity-60"
        >
          {isLoading ? "Adding..." : "Add to Cart"}
        </button>
        <p className="text-xs text-slate-mist mt-3 text-center">
          Free shipping on orders over $35 CAD
        </p>
      </div>
    </div>
  );
}
