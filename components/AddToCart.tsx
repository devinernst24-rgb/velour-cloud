"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

const DEVICE_PRICE = 23.99;
const COMPARE_AT = 39.99;

const cartridgeOptions = [
  { id: "cartridge-rose", label: "Rose Cartridge", price: 11.99 },
  { id: "cartridge-lavender", label: "Lavender Cartridge", price: 11.99 },
];

export default function AddToCart() {
  const { addItem, isLoading } = useCart();
  const [selectedCartridge, setSelectedCartridge] = useState<string | null>(null);

  const cartridge = cartridgeOptions.find((c) => c.id === selectedCartridge);
  const total = DEVICE_PRICE + (cartridge?.price ?? 0);

  function handleAddToCart() {
    addItem("diffuser", 1, "Velour Cloud™ Aroma Diffuser", DEVICE_PRICE);
    if (cartridge) {
      addItem(cartridge.id, 1, cartridge.label, cartridge.price);
    }
  }

  return (
    <div className="space-y-6">
      {/* Price */}
      <div>
        <div className="flex items-center gap-3 mb-1">
          <span className="text-2xl font-bold text-plum">${total.toFixed(2)} USD</span>
          <span className="text-base text-plum/40 line-through">${COMPARE_AT.toFixed(2)}</span>
        </div>
        <p className="text-xs text-slate-mist">Includes 1 Rose fragrance cartridge</p>
      </div>

      {/* Cartridge toggles */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-2">
          Add a Replacement Cartridge
        </p>
        <div className="flex flex-wrap gap-3">
          {cartridgeOptions.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCartridge(selectedCartridge === c.id ? null : c.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                selectedCartridge === c.id
                  ? "bg-lilac text-plum border-lilac"
                  : "bg-transparent text-plum border-plum/30 hover:border-lilac"
              }`}
            >
              {c.label} +${c.price.toFixed(2)}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart button */}
      <button
        onClick={handleAddToCart}
        disabled={isLoading}
        className="w-full bg-plum text-cream py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors disabled:opacity-60"
      >
        Add to Cart
      </button>
    </div>
  );
}
