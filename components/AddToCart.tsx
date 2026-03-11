"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

const variants = [
  { name: "Velour Cloud™ Mini USB Diffuser — White", price: 24.99, variantId: "diffuser-white" },
  { name: "Velour Cloud™ Mini USB Diffuser — Pink",  price: 24.99, variantId: "diffuser-pink" },
  { name: "Velour Cloud™ Mini USB Diffuser — Blue",  price: 24.99, variantId: "diffuser-blue" },
  { name: "Velour Cloud™ Mini USB Diffuser — Green", price: 24.99, variantId: "diffuser-green" },
  { name: "Velour Cloud™ Mini USB Diffuser — Gray",  price: 24.99, variantId: "diffuser-gray" },
];

const variantLabels: Record<string, string> = {
  "diffuser-white": "White",
  "diffuser-pink":  "Pink",
  "diffuser-blue":  "Blue",
  "diffuser-green": "Green",
  "diffuser-gray":  "Gray",
};

const upsells = [
  { label: "3-Pack Fragrance Refills", price: 14.99, id: "upsell-3oil" },
  { label: "6-Pack Fragrance Refills", price: 24.99, id: "upsell-5oil" },
];

export default function AddToCart() {
  const { addItem, isLoading } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);
  const [selectedUpsell, setSelectedUpsell] = useState<string | null>(null);
  const [viewers, setViewers] = useState(47);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const addToCartBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setViewers(Math.floor(Math.random() * (61 - 32 + 1)) + 32);
  }, []);

  useEffect(() => {
    const el = addToCartBtnRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyBar(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  async function handleAddToCart() {
    addItem(
      selectedVariant.variantId,
      1,
      selectedVariant.name,
      selectedVariant.price
    );
    const upsell = upsells.find((u) => u.id === selectedUpsell);
    if (upsell) {
      addItem(upsell.id, 1, upsell.label, upsell.price);
    }
  }

  const total =
    selectedVariant.price +
    (selectedUpsell
      ? upsells.find((u) => u.id === selectedUpsell)?.price ?? 0
      : 0);

  return (
    <>
      <div className="space-y-6">
        {/* Urgency signal */}
        <p className="text-xs text-plum/50">
          🔥 {viewers} people are viewing this right now
        </p>

        {/* Variant selector */}
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
                {variantLabels[v.variantId]} — ${v.price.toFixed(2)} CAD
              </button>
            ))}
          </div>
        </div>

        {/* Upsells */}
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

        {/* Price + Add to Cart */}
        <div className="pt-2">
          {/* Compare-at price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-plum">
              ${total.toFixed(2)} CAD
            </span>
            <span className="text-base text-plum/40 line-through">
              $39.99 CAD
            </span>
            <span className="bg-plum text-cream text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide">
              Sale
            </span>
          </div>

          <button
            ref={addToCartBtnRef}
            onClick={handleAddToCart}
            disabled={isLoading}
            className="w-full bg-plum text-cream py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors disabled:opacity-60"
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>

          {/* Shipping disclosure */}
          <p className="text-xs text-slate-mist mt-3 text-center">
            🇨🇦 Free shipping in Canada · Estimated delivery 7–14 business days
          </p>

          {/* CLOUD10 discount callout */}
          <p className="text-xs text-lilac mt-1.5 text-center font-medium">
            💜 First order? Use code <span className="text-plum font-semibold">CLOUD10</span> for 10% off
          </p>
        </div>
      </div>

      {/* Sticky mobile Add to Cart bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-plum transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-3 safe-area-pb">
          <div className="flex-1 min-w-0">
            <p className="text-cream text-xs font-semibold truncate">
              Mini USB Diffuser
            </p>
            <p className="text-cream/60 text-xs">
              ${selectedVariant.price.toFixed(2)} CAD
            </p>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
            className="bg-cream text-plum px-6 py-2.5 rounded-full text-sm font-semibold shrink-0 hover:bg-cream/90 transition-colors disabled:opacity-60"
          >
            {isLoading ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </>
  );
}
