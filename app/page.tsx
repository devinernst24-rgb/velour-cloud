import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ReviewCard from "@/components/ReviewCard";
import TrustBadges from "@/components/TrustBadges";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "Velour Cloud Auto Fragrance Diffuser | 24.99 CAD",
  description:
    "Rechargeable auto-spray fragrance diffuser. Wall-mount or desktop. Covers 50m2. Set it once - your space stays fresh. 24.99 CAD free shipping.",
};

const reviews = [
  {
    name: "Samantha L.",
    location: "Toronto, ON",
    quote:
      "I wall-mounted mine in the hallway and set the 23-minute interval. Walk in the door and the whole place just smells incredible. Never have to think about it — it just goes.",
  },
  {
    name: "Jade T.",
    location: "Vancouver, BC",
    quote:
      "The auto-spray is a game changer. I set the 30-min interval for my bedroom and honestly forgot it was even running until my friend asked what smelled so good. Refillable pod is super easy too.",
  },
  {
    name: "Priya K.",
    location: "Calgary, AB",
    quote:
      "Mounted it beside my front door and it runs on the 15-minute setting all day. The USB-C charging is so convenient — topped it up once and it lasted the whole week. Love this thing.",
  },
  {
    name: "Natalie B.",
    location: "Ottawa, ON",
    quote:
      "The refillable pod design is brilliant. I swap out the fragrance depending on my mood. Set it to 45 minutes for my office so it's subtle but consistent. Totally worth it.",
  },
  {
    name: "Chloe M.",
    location: "Montreal, QC",
    quote:
      "I was skeptical about auto-spray but it covers my whole living room (big open concept). Wall-mount looks so clean — no cords visible, just a sleek little diffuser doing its thing. 10/10.",
  },
];

const steps = [
  {
    number: "01",
    title: "Fill the Pod",
    description:
      "Fill the refillable water pod with water and add a few drops of your favourite fragrance. Snap it in place — no mess, no fuss.",
  },
  {
    number: "02",
    title: "Set Your Interval",
    description:
      "Choose from 6 spray speeds — from every 10 minutes to continuous. Wall-mount it or set it on a surface. The diffuser does the rest.",
  },
  {
    number: "03",
    title: "Enjoy the Atmosphere",
    description:
      "Your space fills with a warm, ambient scent on a perfect schedule. Recharge via USB-C when needed and keep going.",
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
              Your Room. Reimagined.
            </h1>
            <p className="text-base md:text-lg text-plum/70 leading-relaxed max-w-xl mb-10">
              A rechargeable automatic fragrance diffuser that scents your space
              on your schedule. Refillable, wall-mountable, effortless.
            </p>
            <Link
              href="/products/rain-cloud-diffuser"
              className="inline-flex items-center gap-2 bg-plum text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors"
            >
              Refresh My Space
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
            Smells Like Main Character Energy
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
