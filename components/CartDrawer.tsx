"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, subtotal, isOpen, isLoading, closeCart, removeItem, checkout } =
    useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-plum/40 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-cream shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-lilac/30">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-2xl font-semibold text-plum"
          >
            Your Cart
          </h2>
          <button
            onClick={closeCart}
            className="text-plum/60 hover:text-plum transition-colors"
            aria-label="Close cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <p className="text-plum/60 text-sm">Your cart is empty.</p>
              <button
                onClick={closeCart}
                className="text-sm font-medium text-slate-mist underline underline-offset-2"
              >
                Continue shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-4 items-start border-b border-lilac/20 pb-5"
                >
                  <div className="w-16 h-16 rounded-xl bg-lilac/30 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-7 h-7 text-slate-mist"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-plum truncate">
                      {item.name}
                    </p>
                    <p className="text-xs text-plum/60 mt-0.5">
                      Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <p className="text-sm font-medium text-plum">
                      ${(item.price * item.quantity).toFixed(2)} CAD
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-plum/40 hover:text-plum/70 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="px-6 py-5 border-t border-lilac/30 space-y-4">
            <div className="flex justify-between text-sm font-medium text-plum">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)} CAD</span>
            </div>
            <p className="text-xs text-plum/50">
              Shipping calculated at checkout.
            </p>
            <button
              onClick={checkout}
              disabled={isLoading}
              className="w-full bg-plum text-cream py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors disabled:opacity-60"
            >
              {isLoading ? "Loading..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
