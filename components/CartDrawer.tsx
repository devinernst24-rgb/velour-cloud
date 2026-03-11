"use client";

import { useCart } from "@/context/CartContext";

export default function CartDrawer() {
  const { items, subtotal, isOpen, isLoading, closeCart, removeItem, updateQuantity, checkout } =
    useCart();

  return (
    <>
      <div
        onClick={closeCart}
        style={{ display: isOpen ? "block" : "none" }}
        className="fixed inset-0 bg-black/50 z-40"
      />

      <div
        className="fixed right-0 top-0 h-full w-80 bg-white z-50 flex flex-col transition-transform duration-300"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(100%)" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Your Cart</h2>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <p className="text-sm text-gray-500 text-center mt-8">Your cart is empty</p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex items-start gap-3 border-b border-gray-100 pb-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded border border-gray-300 text-gray-700 text-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm text-gray-700 w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded border border-gray-300 text-gray-700 text-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1 shrink-0">
                    <p className="text-sm font-medium text-gray-900">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="px-5 py-4 border-t border-gray-200 space-y-3">
            <div className="flex justify-between text-sm font-medium text-gray-900">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)} USD</span>
            </div>
            <button
              onClick={checkout}
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-3 rounded text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Checkout"}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
