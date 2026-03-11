"use client";

import { useState, useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

const DEVICE_PRICE = 23.99;

const scentOptions = [
  { id: "lavender", label: "Lavender", cartridgeId: "cartridge-lavender" as const },
  { id: "rose", label: "Rose", cartridgeId: "cartridge-rose" as const },
  { id: "none", label: "No Scent", cartridgeId: null },
];

const upsells = [
  { label: "Lavender Refill Cartridge", price: 11.99, id: "cartridge-lavender" },
  { label: "Rose Refill Cartridge", price: 11.99, id: "cartridge-rose" },
  { label: "Lavender + Rose Bundle", price: 19.99, id: "cartridge-bundle" },
];

export default function AddToCart() {
  const { addItem, isLoading } = useCart();
  const [selectedScent, setSelectedScent] = useState(scentOptions[0]);
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

  function handleAddToCart() {
    addItem("diffuser", 1, "Velour Cloud™ Aroma Diffuser", DEVICE_PRICE);
    if (selectedScent.cartridgeId) {
      const cartridge = upsells.find((u) => u.id === selectedScent.cartridgeId);
      if (cartridge) {
        addItem(cartridge.id, 1, cartridge.label, cartridge.price);
      }
    }
    const upsell = upsells.find((u) => u.id === selectedUpsell);
    if (upsell) {
      addItem(upsell.id, 1, upsell.label, upsell.price);
    }
  }

  const scentCartridge = selectedScent.cartridgeId
    ? upsells.find((u) => u.id === selectedScent.cartridgeId)
    : null;
  const selectedUpsellItem = upsells.find((u) => u.id === selectedUpsell);
  const total =
    DEVICE_PRICE +
    (scentCartridge?.price ?? 0) +
    (selectedUpsellItem?.price ?? 0);

  return (
    <>
      <div className="space-y-6">
        {/* Urgency signal */}
        <p className="text-xs text-plum/50">
          🔥 {viewers} people are viewing this right now
        </p>

        {/* Scent selector */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-3">
            Included Scent
          </p>
          <div className="flex flex-wrap gap-3">
            {scentOptions.map((s) => (
              <button
                key={s.id}
                onClick={() => setSelectedScent(s)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all ${
                  selectedScent.id === s.id
                    ? "bg-plum text-cream border-plum"
                    : "bg-transparent text-plum border-plum/30 hover:border-plum/60"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Upsells */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-2">
            Add a Refill Pack
          </p>
          <p className="text-xs text-plum/60 mb-3 leading-relaxed">
            Keep your space smelling fresh on repeat. Each cartridge comes pre-filled with our
            signature scent — and you can refill it anytime with your own favourite fragrance.
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
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl font-bold text-plum">
              ${total.toFixed(2)} USD
            </span>
            <span className="text-base text-plum/40 line-through">
              $39.99
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

          <p className="text-xs text-slate-mist mt-3 text-center">
            Free shipping worldwide · Estimated delivery 7–14 business days
          </p>

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
              Velour Cloud™ Aroma Diffuser
            </p>
            <p className="text-cream/60 text-xs">
              ${DEVICE_PRICE.toFixed(2)} USD
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
