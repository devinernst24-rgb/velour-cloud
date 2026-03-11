"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
  const { cartCount, openCart } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-sm border-b border-lilac/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold tracking-wide text-plum"
            >
              Velour Cloud
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/products/aroma-diffuser" },
              { label: "About", href: "/about" },
              { label: "FAQ", href: "/faq" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-plum/80 hover:text-plum transition-colors tracking-wide"
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={openCart}
            className="relative flex items-center gap-1 text-plum hover:text-slate-mist transition-colors"
            aria-label="Open cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-plum text-[10px] font-semibold text-cream">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
