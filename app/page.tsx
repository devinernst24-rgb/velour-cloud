import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";
import TrustBadges from "@/components/TrustBadges";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Velour Cloud Mini USB Diffuser | $24.99 CAD",
  description:
    "Transform your space with the Velour Cloud Mini USB Diffuser. Near-silent, wall-mountable, and now $24.99 CAD with free shipping in Canada.",
};

const reviews = [
  {
    name: "Samantha L.",
    location: "Toronto, ON",
    quote:
      "I keep this on my desk while I work from home. It's so quiet I forget it's on — until I notice how calm and focused I feel. The pink one matches my whole setup perfectly.",
  },
  {
    name: "Jade T.",
    location: "Vancouver, BC",
    quote:
      "I was sceptical but this thing is literally on my TikTok For You Page every week so I finally caved. Zero regrets. It's quiet, it smells amazing with lavender oil, and it looks so minimal on my nightstand. 10/10.",
  },
  {
    name: "Priya K.",
    location: "Calgary, AB",
    quote:
      "Bought two — one for my bedroom and one as a gift. The packaging is really clean and it arrived way faster than I expected. The mist output is strong for how small it is. Genuinely love this thing.",
  },
  {
    name: "Natalie B.",
    location: "Ottawa, ON",
    quote:
      "Such a cute little diffuser! I plug it into my laptop USB and it just runs quietly all day. The white one looks so clean on my desk. Way better than I expected for the price.",
  },
  {
    name: "Chloe M.",
    location: "Montreal, QC",
    quote:
      "Got the blue one and it's honestly a vibe. Super easy to use, the mist comes out strong, and it auto-shuts off so I don't have to worry about it overnight. Already recommended it to three friends.",
  },
];

const steps = [
  {
    number: "01",
    title: "Fill",
    description:
      "Pour water up to the fill line (about 40 mL). No filters, no complicated tanks.",
  },
  {
    number: "02",
    title: "Add Your Oil",
    description:
      "Drop 3-5 drops of your favourite essential oil into the water. You choose the mood.",
  },
  {
    number: "03",
    title: "Plug In & Breathe",
    description:
      "Connect to any USB port, press the button, and let the soft mist do its thing.",
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
              Calm Your Space in Seconds
            </h1>
            <p className="text-base md:text-lg text-plum/70 leading-relaxed max-w-xl mb-10">
              A palm-sized ultrasonic diffuser that turns any desk, nightstand,
              or wall into a soft, scented escape. Near-silent, beautifully
              minimal, and made for modern Canadian living.
            </p>
            <Link
              href="/products/rain-cloud-diffuser"
              className="inline-flex items-center gap-2 bg-plum text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors"
            >
              Reimagine My Room
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
            Soft Living, Elevated
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
