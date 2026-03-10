import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";
import TrustBadges from "@/components/TrustBadges";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Velour Cloud — Aesthetic Rain Diffuser & Night Light",
  description:
    "Transform your space with the Rain Cloud Aroma Diffuser. Soft mist, 7-colour LED glow, and aromatherapy in one dreamy device. Free shipping over $35 CAD.",
};

const reviews = [
  {
    name: "Maya R.",
    location: "Vancouver, BC",
    quote:
      "I got this for my desk while working from home and honestly it transformed my whole vibe. The mist is so soft and the purple LED is absolutely gorgeous. Already ordered one for my sister.",
  },
  {
    name: "Jade T.",
    location: "Toronto, ON",
    quote:
      "I was sceptical but this thing is literally on my TikTok For You Page every week so I finally caved. Zero regrets. It's quiet, it smells amazing with lavender oil, and it looks like a cloud straight out of a Studio Ghibli film. 10/10.",
  },
  {
    name: "Priya K.",
    location: "Calgary, AB",
    quote:
      "Bought two — one for my bedroom and one as a gift. The packaging is really clean and it arrived way faster than I expected. The mist output is strong for how small it is. Genuinely love this thing.",
  },
];

const steps = [
  {
    number: "01",
    title: "Fill",
    description:
      "Pour water up to the fill line (about 130 mL). No filters, no complicated tanks.",
  },
  {
    number: "02",
    title: "Add Your Oil",
    description:
      "Drop 3-5 drops of your favourite essential oil into the water. You choose the mood.",
  },
  {
    number: "03",
    title: "Let It Rain",
    description:
      "Power on, choose your LED colour, and let the mist do its thing.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-cream via-cream to-lilac/20 min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-mist mb-6">
              Velour Cloud
            </p>
            <h1
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-6xl md:text-7xl lg:text-8xl font-semibold text-plum leading-[1.05] tracking-tight mb-6"
            >
              Your calm starts here.
            </h1>
            <p className="text-base md:text-lg text-plum/70 leading-relaxed max-w-xl mb-10">
              The Rain Cloud Diffuser fills your space with scented mist and a
              dreamy LED glow — so every night feels like a soft reset.
            </p>
            <Link
              href="/products/rain-cloud-diffuser"
              className="inline-flex items-center gap-2 bg-plum text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors"
            >
              Shop the Diffuser
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
          <div className="relative w-full h-full">
            <Image
              src="/images/lifestyle-1.png"
              alt="Velour Cloud Rain Diffuser lifestyle"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/10 to-transparent" />
          </div>
        </div>
      </section>

      {/* Full-width lifestyle image section */}
      <section className="relative w-full" style={{ height: "60vh", minHeight: "360px" }}>
        <Image
          src="/images/lifestyle-1.png"
          alt="Velour Cloud Rain Diffuser — ambient lifestyle"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center">
          <p
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl md:text-4xl font-semibold text-cream drop-shadow-md"
          >
            Your room, reimagined.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-4xl md:text-5xl font-semibold text-plum mb-3"
            >
              What people are saying
            </h2>
            <p className="text-sm text-slate-mist">
              Real reviews from real cloud people.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-cream to-lilac/10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-4xl md:text-5xl font-semibold text-plum mb-3"
            >
              How it works
            </h2>
            <p className="text-sm text-slate-mist">
              Less than 60 seconds from unboxing to cloud.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-lilac/30 flex items-center justify-center">
                  <span
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                    className="text-lg font-semibold text-plum"
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="text-2xl font-semibold text-plum"
                >
                  {step.title}
                </h3>
                <p className="text-sm text-plum/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-cream">
        <div className="mx-auto max-w-3xl">
          <TrustBadges />
        </div>
      </section>

      <EmailCapture />
    </>
  );
}
