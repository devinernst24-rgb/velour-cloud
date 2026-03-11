import type { Metadata } from "next";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

export const metadata: Metadata = {
  title: "Velour Cloud Smart Scent Diffuser — 24.99 CAD | Velour Cloud",
  description:
    "Rechargeable auto-spray fragrance diffuser with refillable pod. Wall-mount or desktop. Covers 50m2. 4 spray intervals. 24.99 CAD free shipping.",
};

const features = [
  {
    title: "Rechargeable lithium battery",
    description:
      "Built-in USB-C rechargeable battery — no cords needed during use. Charge once, fragrance your space for days.",
  },
  {
    title: "4 auto-spray intervals",
    description:
      "Set to 15, 23, 30, or 45 minutes. The diffuser sprays automatically on your schedule so you never have to think about it.",
  },
  {
    title: "Refillable fragrance pod",
    description:
      "The water + fragrance pod snaps in and out in seconds. Swap scents anytime — lavender, citrus, cedar, whatever sets the mood.",
  },
  {
    title: "Wall-mount or desktop",
    description:
      "Includes a wall hook so you can mount it cord-free, or set it on any surface. Fits any room, any aesthetic.",
  },
  {
    title: "Covers up to 50m²",
    description:
      "Powerful enough to scent a large room — living rooms, open-concept spaces, home offices, bedrooms.",
  },
  {
    title: "Warm amber LED glow",
    description:
      "A soft, warm amber light adds ambient atmosphere. Toggle it on or off to match the vibe.",
  },
  {
    title: "Near-silent operation",
    description:
      "Ultra-quiet auto-spray mechanism — you'll smell it before you hear it. Ideal for bedrooms, offices, and nurseries.",
  },
];

const specs = [
  ["Battery", "Rechargeable lithium (USB-C)"],
  ["Spray Intervals", "15 / 23 / 30 / 45 minutes"],
  ["Pod Capacity", "Refillable water + fragrance pod"],
  ["Coverage", "Up to 50 m²"],
  ["Mounting", "Wall-mount (hook included) or desktop"],
  ["LED", "Warm amber glow (on/off)"],
  ["Noise Level", "Near-silent"],
  ["Charging", "USB-C cable included"],
  ["Material", "BPA-free ABS plastic"],
  ["Available Colours", "White, Pink, Blue, Green, Gray"],
];

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Velour Cloud Smart Scent Diffuser",
  description:
    "Rechargeable auto-spray fragrance diffuser with refillable pod. Wall-mount or desktop. Covers 50m2. Free shipping in Canada.",
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
              Velour Cloud Smart Scent Diffuser
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
              A rechargeable automatic fragrance diffuser with a refillable water
              pod. Set your spray interval — 15, 23, 30, or 45 minutes — then
              wall-mount it or place it on any surface. Covers up to 50m² with a
              warm amber glow. Set it once and your space stays fresh all day.
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
              "1× Velour Cloud Smart Scent Diffuser",
              "1× USB-C charging cable",
              "1× Refillable fragrance pod",
              "1× Wall hook + mounting hardware",
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
              the air itself has been considered. The Velour Cloud Smart Scent
              Diffuser was designed for exactly that feeling — automatically.
            </p>
            <p>
              Fill the refillable pod with water and your fragrance of choice,
              set your spray interval, and it handles the rest. No timers, no
              reminders, no manual spraying. Just consistent, beautiful scent on
              your schedule.
            </p>
            <p>
              Wall-mount it in your entryway, living room, or bedroom for a
              cord-free look — or set it on a surface wherever you need it most.
              The rechargeable lithium battery means you&apos;re not tethered to
              an outlet. Charge once via USB-C and enjoy days of automatic
              fragrance.
            </p>
            <p>
              With coverage up to 50m² and a warm amber LED glow, it transforms
              any space into something that feels intentional, curated, and
              unmistakably yours.
            </p>
            <p className="font-medium text-plum">
              Your space is a reflection of how you want to feel. Set it once.
              Make it beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
