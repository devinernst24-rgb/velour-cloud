"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import { createCart, addToCart, getCart, getCheckoutUrl } from "@/lib/shopify";

interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    priceV2: { amount: string; currencyCode: string };
    product: { title: string };
  };
}

interface Cart {
  id: string;
  checkoutUrl: string;
  lines: CartLine[];
  totalAmount: string;
}

interface CartContextType {
  cart: Cart | null;
  cartCount: number;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (variantId: string, quantity: number) => Promise<void>;
  checkout: () => Promise<void>;
}

const CartContext = createContext<CartContextType | null>(null);

function parseCart(rawCart: {
  id: string;
  checkoutUrl: string;
  lines: { edges: { node: CartLine }[] };
  cost: { totalAmount: { amount: string } };
}): Cart {
  return {
    id: rawCart.id,
    checkoutUrl: rawCart.checkoutUrl,
    lines: rawCart.lines.edges.map((e) => e.node),
    totalAmount: rawCart.cost.totalAmount.amount,
  };
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const cartId = localStorage.getItem("shopify_cart_id");
    if (cartId) {
      getCart(cartId)
        .then((raw) => {
          if (raw) setCart(parseCart(raw));
        })
        .catch(() => {});
    }
  }, []);

  const getOrCreateCart = useCallback(async (): Promise<string> => {
    if (cart?.id) return cart.id;
    const stored = localStorage.getItem("shopify_cart_id");
    if (stored) return stored;
    const newCart = await createCart();
    localStorage.setItem("shopify_cart_id", newCart.id);
    return newCart.id;
  }, [cart]);

  const addItem = useCallback(
    async (variantId: string, quantity: number) => {
      setIsLoading(true);
      try {
        const cartId = await getOrCreateCart();
        const raw = await addToCart(cartId, variantId, quantity);
        setCart(parseCart(raw));
        localStorage.setItem("shopify_cart_id", cartId);
        setIsOpen(true);
      } catch (err) {
        console.warn("Cart unavailable — Shopify token not yet configured.", err);
        // Graceful no-op until Storefront token is added to env vars
      } finally {
        setIsLoading(false);
      }
    },
    [getOrCreateCart]
  );

  const checkout = useCallback(async () => {
    if (!cart?.id) return;
    const url = await getCheckoutUrl(cart.id);
    window.location.href = url;
  }, [cart]);

  const cartCount = cart?.lines.reduce((sum, l) => sum + l.quantity, 0) ?? 0;

  return (
    <CartContext.Provider
      value={{
        cart,
        cartCount,
        isOpen,
        isLoading,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addItem,
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
