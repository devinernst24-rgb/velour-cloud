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
    default: "Velour Cloud — Aesthetic Rain Diffuser & Night Light",
    template: "%s | Velour Cloud",
  },
  description:
    "Your room, reimagined. The Rain Cloud Aroma Diffuser fills your space with scented mist and a dreamy LED glow. Free shipping on orders over $35.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    siteName: "Velour Cloud",
    title: "Velour Cloud — Your room, reimagined.",
    description:
      "Your room, reimagined. The Rain Cloud Aroma Diffuser fills your space with scented mist and a dreamy LED glow. Free shipping on orders over $35.",
    url: BASE_URL,
    images: [
      {
        url: "/images/product-hero.png",
        width: 1200,
        height: 630,
        alt: "Velour Cloud Rain Cloud Diffuser",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Velour Cloud — Your room, reimagined.",
    description:
      "The Rain Cloud Aroma Diffuser fills your space with scented mist and a dreamy LED glow. Free shipping on orders over $35.",
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
          Free shipping on orders over $35 CAD &nbsp;·&nbsp; Use code{" "}
          <span className="font-semibold">CLOUD10</span> for 10% off your first
          order
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
