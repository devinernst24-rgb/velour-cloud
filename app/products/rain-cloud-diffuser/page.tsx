import type { Metadata } from "next";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

export const metadata: Metadata = {
  title: "Mini USB Aromatherapy Diffuser (40ml) — $24.99 CAD | Velour Cloud",
  description:
    "Palm-sized ultrasonic aromatherapy diffuser. Near-silent, USB-powered, auto shut-off. $24.99 CAD with free shipping in Canada.",
};

const features = [
  {
    title: "Ultrasonic cool mist",
    description:
      "Ultra-fine mist disperses your essential oils evenly without heat — preserving full scent integrity.",
  },
  {
    title: "Near-silent operation",
    description:
      "Under 30 dB, ideal for bedrooms, home offices, nurseries, and meditation spaces.",
  },
  {
    title: "Universal USB power",
    description:
      "Plugs into any USB port — laptop, power bank, wall adapter, or smart hub.",
  },
  {
    title: "Aromatherapy-ready",
    description:
      "Compatible with all water-soluble essential oils. Lavender, eucalyptus, citrus — your mood, your choice.",
  },
  {
    title: "Auto shut-off safety",
    description:
      "Automatically powers off when water level is critically low, so you can set it and forget it.",
  },
  {
    title: "Dual mist modes",
    description:
      "Continuous or intermittent mist for customised output and extended run time.",
  },
  {
    title: "5 colour options",
    description:
      "White, Pink, Blue, Green, and Gray — designed to complement any aesthetic.",
  },
];

const specs = [
  ["Dimensions", "~10 cm (H) x 8 cm (W)"],
  ["Water Capacity", "40 mL"],
  ["Mist Modes", "Continuous / Intermittent"],
  ["Noise Level", "< 30 dB"],
  ["Power", "USB (cable included)"],
  ["Auto Shut-Off", "Yes (low water)"],
  ["Material", "BPA-free ABS plastic"],
  ["Coverage", "Up to 10 m²"],
  ["Run Time", "Up to 4 hours (continuous) / 6 hours (intermittent)"],
  ["Available Colours", "White, Pink, Blue, Green, Gray"],
];

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Velour Cloud™ Mini USB Aromatherapy Diffuser (40ml)",
  description:
    "Palm-sized ultrasonic aromatherapy diffuser. Near-silent, USB-powered, auto shut-off. Free shipping in Canada.",
  brand: {
    "@type": "Brand",
    name: "Velour Cloud",
  },
  image: "https://velourcloud.com/images/product-hero.png",
  offers: {
    "@type": "Offer",
    priceCurrency: "CAD",
    price: "24.99",
    availability: "https://schema.org/InStock",
    url: "https://velourcloud.com/products/rain-cloud-diffuser",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "127",
  },
};

export default function ProductPage() {
  return (
    <div className="bg-cream min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src="/images/product-hero.png"
                alt="Velour Cloud Rain Diffuser"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["/images/product-white.png", "/images/product-pink.png", "/images/product-blue.png"].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square relative">
                  <Image src={src} alt={`Variant ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-4">
              Velour Cloud
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-4xl md:text-5xl font-semibold text-plum mb-3 leading-tight"
            >
              Velour Cloud™ Mini USB Aromatherapy Diffuser (40ml)
            </h1>

            {/* Star rating + review count */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-sm tracking-tighter" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <a
                href="/#reviews"
                className="text-xs text-plum/50 hover:text-plum/80 transition-colors"
              >
                (127 reviews)
              </a>
            </div>

            <p className="text-sm text-plum/70 leading-relaxed mb-8">
              A palm-sized USB diffuser that turns any desk, nightstand, or shelf
              into a soft, scented escape. Near-silent ultrasonic mist, auto
              shut-off, and five beautiful colours to match your space.
            </p>

            <AddToCart />

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { icon: "🔒", label: "Secure Checkout" },
                { icon: "🚚", label: "Free shipping in Canada" },
                { icon: "↩", label: "30-day returns" },
                { icon: "🌿", label: "Aromatherapy-grade" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="flex items-center gap-1.5 bg-cream border border-lilac/30 rounded-full px-3 py-1.5 text-xs font-medium text-plum"
                >
                  <span>{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-3xl font-semibold text-plum mb-8"
            >
              Features
            </h2>
            <ul className="space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-lilac/40 flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-3 h-3 text-plum"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-plum">{f.title}</p>
                    <p className="text-sm text-plum/60 mt-0.5">{f.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-3xl font-semibold text-plum mb-8"
            >
              Specifications
            </h2>
            <div className="rounded-2xl overflow-hidden border border-lilac/30">
              {specs.map(([label, value], i) => (
                <div
                  key={label}
                  className={`grid grid-cols-2 px-5 py-3.5 text-sm ${
                    i % 2 === 0 ? "bg-white/40" : "bg-transparent"
                  }`}
                >
                  <span className="font-medium text-plum">{label}</span>
                  <span className="text-plum/70">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-6"
          >
            What&apos;s in the box?
          </h2>
          <div className="rounded-2xl border border-lilac/30 bg-white/40 overflow-hidden">
            {[
              "1× Velour Cloud Mini USB Diffuser",
              "1× USB cable",
              "1× Essential oil tester sachet",
              "1× User manual",
            ].map((item, i) => (
              <div
                key={item}
                className={`flex items-center gap-3 px-6 py-3.5 text-sm ${
                  i % 2 === 0 ? "bg-white/30" : ""
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-lilac shrink-0" />
                <span className="text-plum/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-6"
          >
            About the Diffuser
          </h2>
          <div className="space-y-4 text-sm text-plum/70 leading-relaxed">
            <p>
              Some spaces just feel different. Calmer. More intentional. Like
              the air itself has been considered. The Velour Cloud Mini USB
              Diffuser was designed for exactly that feeling.
            </p>
            <p>
              Small enough to sit on your palm, powerful enough to transform a
              room. It releases a cool, ultra-fine aroma mist through ultrasonic
              technology — no heat, no noise, just a quiet stream of scented air
              that fills your space in minutes.
            </p>
            <p>
              Use it at your desk while you focus. On your nightstand as you
              wind down. In any room that needs a little more intention and a
              little less noise.
            </p>
            <p>
              It auto-shuts off when the water runs low and takes less than 60
              seconds to set up. Plug it into any USB port, fill to the line,
              add your favourite oil, and let it do what it does best.
            </p>
            <p className="font-medium text-plum">
              Your space is a reflection of how you want to feel. Make it
              beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
