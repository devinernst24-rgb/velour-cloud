import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://velourcloud.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Velour Cloud Mini USB Diffuser | $24.99 CAD",
    template: "%s | Velour Cloud",
  },
  description:
    "Transform your space with the Velour Cloud Mini USB Diffuser. Near-silent, wall-mountable, and now $24.99 CAD with free shipping in Canada.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Velour Cloud",
    title: "Velour Cloud Mini USB Diffuser | $24.99 CAD",
    description:
      "Transform your space with the Velour Cloud Mini USB Diffuser. Near-silent, wall-mountable, and now $24.99 CAD with free shipping in Canada.",
    url: BASE_URL,
    images: [
      {
        url: "/images/product-hero.png",
        width: 1200,
        height: 630,
        alt: "Velour Cloud Mini USB Diffuser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velour Cloud Mini USB Diffuser | $24.99 CAD",
    description:
      "Transform your space with the Velour Cloud Mini USB Diffuser. Near-silent, wall-mountable, and now $24.99 CAD with free shipping in Canada.",
    images: ["/images/product-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body
        style={{ fontFamily: "var(--font-dm-sans), system-ui, sans-serif" }}
        className="bg-cream text-plum antialiased"
      >
        <div
          className="w-full text-center py-2 px-4 text-xs font-medium tracking-wide"
          style={{ backgroundColor: "#2D2A35", color: "#EDE6DC" }}
        >
          Free Shipping in Canada 🇨🇦 | Now $24.99 (Was $39.99)
        </div>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
