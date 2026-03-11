"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  variantId: string;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  cartCount: number;
  subtotal: number;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity: number, name: string, price: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  checkout: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

const STORAGE_KEY = "cart_items";

function saveToStorage(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {}
}

function loadFromStorage(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as CartItem[];
  } catch {}
  return [];
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setItems(loadFromStorage());
  }, []);

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function addItem(variantId: string, quantity: number, name: string, price: number) {
    setItems((prev) => {
      const existing = prev.find((i) => i.variantId === variantId);
      let next: CartItem[];
      if (existing) {
        next = prev.map((i) =>
          i.variantId === variantId ? { ...i, quantity: i.quantity + quantity } : i
        );
      } else {
        next = [...prev, { id: variantId, variantId, name, price, quantity }];
      }
      saveToStorage(next);
      return next;
    });
    setIsOpen(true);
  }

  function removeItem(id: string) {
    setItems((prev) => {
      const next = prev.filter((i) => i.id !== id);
      saveToStorage(next);
      return next;
    });
  }

  function updateQuantity(id: string, qty: number) {
    setItems((prev) => {
      const next =
        qty <= 0
          ? prev.filter((i) => i.id !== id)
          : prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i));
      saveToStorage(next);
      return next;
    });
  }

  async function checkout() {
    setIsLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json() as { url?: string };
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error("Checkout error:", err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <CartContext.Provider
      value={{
        items,
        cartCount,
        subtotal,
        isOpen,
        isLoading,
        openCart,
        closeCart,
        addItem,
        removeItem,
        updateQuantity,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
