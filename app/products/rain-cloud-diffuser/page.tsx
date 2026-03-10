import type { Metadata } from "next";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";

export const metadata: Metadata = {
  title: "Rain Cloud Diffuser — 7-Color LED Aroma Mist | Velour Cloud",
  description:
    "Cool mist humidifier + aromatherapy diffuser + 7-colour night light. Whisper-quiet, auto shut-off, USB-C. $44.99 CAD. Free shipping over $35.",
};

const features = [
  {
    title: "Rainfall mist effect",
    description:
      "Ultra-fine cool mist simulates the calming feeling of gentle rain.",
  },
  {
    title: "7-colour LED night light",
    description:
      "Cycles through soft hues or holds a single colour; adjustable brightness.",
  },
  {
    title: "Aromatherapy-ready",
    description:
      "Compatible with all water-soluble essential oils for scented diffusion.",
  },
  {
    title: "Whisper-quiet operation",
    description:
      "Under 30 dB, ideal for bedrooms, nurseries, offices.",
  },
  {
    title: "Auto shut-off safety",
    description:
      "Automatically powers off when water level is critically low.",
  },
  {
    title: "Dual mist modes",
    description:
      "Continuous or intermittent mist for customised humidity output.",
  },
  {
    title: "Gift-ready design",
    description:
      "Minimal packaging, compact, beautiful enough to live on any surface.",
  },
];

const specs = [
  ["Dimensions", "~12 cm (H) x 10 cm (W)"],
  ["Water Capacity", "130 mL"],
  ["LED Colors", "7 + white"],
  ["Mist Modes", "Continuous / Intermittent"],
  ["Noise Level", "< 30 dB"],
  ["Power", "USB-C (cable included)"],
  ["Auto Shut-Off", "Yes (low water)"],
  ["Material", "ABS plastic, soft silicone cloud cap"],
  ["Coverage", "Up to 20 m²"],
  ["Run Time", "Up to 5 hours (continuous) / 8 hours (intermittent)"],
];

export default function ProductPage() {
  return (
    <div className="bg-cream min-h-screen">
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
              {["/images/product-white.png", "/images/product-grey.png", "/images/product-blue.png"].map((src, i) => (
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
              className="text-4xl md:text-5xl font-semibold text-plum mb-4 leading-tight"
            >
              Velour Cloud Rain Diffuser — 7-Color LED Aroma Mist Light
            </h1>
            <p className="text-sm text-plum/70 leading-relaxed mb-8">
              Turn your room into a rainfall dream. Our Rain Cloud Diffuser fills
              the air with scented mist and a soft glow that shifts through 7
              dreamy colours. It&apos;s part humidifier, part night light, part vibe
              upgrade.
            </p>

            <AddToCart />

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { icon: "🔒", label: "Secure Checkout" },
                { icon: "🚚", label: "Free shipping over $35" },
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
              "1× Rain Cloud Diffuser",
              "1× USB-C cable",
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
              Some rooms just feel different. Softer. Quieter. Like the air
              itself has been curated. The Velour Cloud Rain Diffuser was designed
              for exactly that feeling.
            </p>
            <p>
              Shaped like a cloud that floats on a misty base, it releases a
              cool, ultra-fine aroma mist that humidifies your space while
              diffusing your favourite essential oil blend. The 7-colour LED glow
              cycles through soft, dreamy hues — or locks on the one that matches
              your mood.
            </p>
            <p>
              Use it while you wind down before bed. While you journal in the
              morning. While you work from home and need the space to feel less
              like a desk and more like a retreat.
            </p>
            <p>
              It&apos;s whisper-quiet, auto-shuts off when the water runs low, and
              takes less than 60 seconds to set up. No wires to hide, no
              complicated settings — just fill, drop in your oil, and let it do
              what it does best.
            </p>
            <p className="font-medium text-plum">
              Your room is a reflection of how you want to feel. Make it
              beautiful.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
