import type { Metadata } from "next";
import Image from "next/image";
import AddToCart from "@/components/AddToCart";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Velour Cloud™ Aroma Diffuser — 24.99 CAD | Velour Cloud",
  description:
    "USB-powered automatic spray diffuser. Fill the refillable pod, plug in, press the button — it handles the rest. 4 spray speeds. Wall-mount or desktop. 24.99 CAD free shipping.",
};

const features = [
  {
    icon: "🌫",
    title: "Auto-Spray on Timed Intervals",
    description:
      "4 speeds from every 15 to every 45 minutes. Each burst sprays for 5 seconds, then waits — consistent fragrance on your schedule.",
  },
  {
    icon: "🔌",
    title: "USB-A Powered",
    description:
      "Plug in and go. No charging, no batteries — just plug it into any USB-A port or adapter and it's ready.",
  },
  {
    icon: "💧",
    title: "Refillable Pod",
    description:
      "Fill with water and add a few drops of your favourite essential oil or fragrance. Snap it in and you're set.",
  },
  {
    icon: "🌙",
    title: "Ambient Light",
    description:
      "Built-in glow adds a soft, ambient atmosphere. Toggle it on or off with a 3-second hold of the button.",
  },
  {
    icon: "🧲",
    title: "Wall-Mount or Desktop",
    description:
      "Includes wall-mount hardware so you can install it in any room, or simply set it on any surface.",
  },
  {
    icon: "🎛",
    title: "4 Spray Speeds",
    description:
      "Choose your interval: every 15, 23, 30, or 45 minutes. Short press to power on/off, long press (3s) to toggle the light.",
  },
];

const specs = [
  ["Power", "USB-A (must stay plugged in)"],
  ["Spray Intervals", "15 / 23 / 30 / 45 minutes"],
  ["Spray Duration", "5 seconds per burst"],
  ["Mounting", "Wall-mount or desktop"],
  ["Pod", "Refillable water + fragrance"],
  ["Ambient Light", "Yes (long press 3s to toggle)"],
  ["Controls", "Short press: on/off — Long press 3s: light"],
];

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
      "Mounted it beside my front door and it runs on the 15-minute setting all day. The USB plug is so convenient — just leave it plugged in and it runs all day. Love this thing.",
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
      "I was skeptical about auto-spray but it fills my whole living room. Wall-mount looks so clean — no clutter, just a sleek little diffuser doing its thing. 10/10.",
  },
];

const faqItems = [
  {
    question: "Does it need to stay plugged in?",
    answer:
      "Yes — the Velour Cloud Aroma Diffuser is USB-A powered and must stay plugged in during use. There is no internal battery. Plug it into any USB-A port, wall adapter, or power bank.",
  },
  {
    question: "What are the 4 spray speeds?",
    answer:
      "Speed 1: sprays 5 seconds every 15 minutes. Speed 2: sprays 5 seconds every 23 minutes. Speed 3: sprays 5 seconds every 30 minutes. Speed 4: sprays 5 seconds every 45 minutes. Press the button to cycle through speeds.",
  },
  {
    question: "How do I control the ambient light?",
    answer:
      "Hold the button for 3 seconds to toggle the ambient light on or off. A short press turns the diffuser on or off.",
  },
  {
    question: "What goes in the pod?",
    answer:
      "Fill the refillable pod with water, then add a few drops of your favourite essential oil or fragrance. Any water-soluble fragrance works — you're not limited to our refills.",
  },
  {
    question: "Can I wall-mount it?",
    answer:
      "Yes. Wall-mount hardware is included in the box. You can also place it on any flat surface — desk, shelf, nightstand.",
  },
  {
    question: "What's included in the box?",
    answer:
      "Velour Cloud™ Aroma Diffuser, USB-A cable, wall-mount hardware, refillable fragrance pod, and user guide.",
  },
];

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Velour Cloud™ Aroma Diffuser",
  description:
    "USB-powered automatic spray diffuser. Fill the refillable pod with water and your favourite fragrance, plug in, press the button — it handles the rest.",
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
    url: "https://velourcloud.com/products/aroma-diffuser",
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
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-24 space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src="/images/product-hero.png"
                alt="Velour Cloud Aroma Diffuser"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[
                { src: "/images/product-white.png", alt: "White variant" },
                { src: "/images/product-pink.png", alt: "Pink variant" },
                { src: "/images/product-blue.png", alt: "Blue variant" },
                { src: "/images/product-variants.jpg", alt: "Fragrance refill pod variety" },
              ].map(({ src, alt }, i) => (
                <div key={i} className="rounded-xl overflow-hidden aspect-square relative">
                  <Image src={src} alt={alt} fill className="object-cover" />
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
              Velour Cloud™ Aroma Diffuser
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-yellow-400 text-sm tracking-tighter" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <a
                href="#reviews"
                className="text-xs text-plum/50 hover:text-plum/80 transition-colors"
              >
                (127 reviews)
              </a>
            </div>

            <p className="text-sm text-plum/70 leading-relaxed mb-8">
              USB-powered automatic spray diffuser. Fill the refillable pod with
              water and your favourite fragrance, plug in, press the button — it
              handles the rest. Fills your room with fragrance on a timed
              interval so you never have to think about it.
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

        {/* Features + Specs */}
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
                  <span className="mt-0.5 text-base shrink-0">{f.icon}</span>
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

        {/* How it works */}
        <div className="mt-20">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Fill the Pod",
                description:
                  "Fill the refillable water pod with water and add a few drops of your favourite fragrance. Snap it in place — no mess, no fuss.",
              },
              {
                number: "02",
                title: "Plug in and Choose Your Speed",
                description:
                  "Plug into any USB-A port, press the button to power on, and press again to cycle through the 4 spray intervals — 15, 23, 30, or 45 minutes. Wall-mount it or set it on a surface.",
              },
              {
                number: "03",
                title: "Set and Forget",
                description:
                  "Your space fills with fragrance on a perfect schedule. The diffuser handles the rest — no timers, no reminders.",
              },
            ].map((step) => (
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
                <p className="text-sm text-plum/70 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Fragrances */}
        <div className="mt-20">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            Available Fragrances
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: "A", name: "Lavender & Bergamot", notes: "Cedar & amber base" },
              { code: "B", name: "Bluebell & Lily of the Valley", notes: "Amber base" },
              { code: "C", name: "Fresh Floral", notes: "Tuberose, water lily & amber" },
              { code: "D", name: "Peach & Apple", notes: "Sandalwood & musk base" },
              { code: "E", name: "Eucalyptus & Bamboo", notes: "Cedar & ambergris base" },
              { code: "F", name: "Gardenia & Pear", notes: "Bergamot & white rose base" },
            ].map(({ code, name, notes }) => (
              <div
                key={code}
                className="flex items-start gap-4 rounded-2xl border border-lilac/30 bg-white/40 px-5 py-4"
              >
                <span
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="w-8 h-8 rounded-full bg-lilac/30 flex items-center justify-center shrink-0 text-base font-semibold text-plum mt-0.5"
                >
                  {code}
                </span>
                <div>
                  <p className="text-sm font-semibold text-plum">{name}</p>
                  <p className="text-xs text-plum/55 mt-0.5">{notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What's in the box */}
        <div className="mt-20 max-w-3xl">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-6"
          >
            What&apos;s in the box?
          </h2>
          <div className="rounded-2xl border border-lilac/30 bg-white/40 overflow-hidden">
            {[
              "1× Velour Cloud™ Aroma Diffuser",
              "1× USB-A cable",
              "1× Wall-mount hardware",
              "1× Refillable fragrance pod",
              "1× User guide",
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

        {/* About */}
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
              the air itself has been considered. The Velour Cloud Aroma
              Diffuser was designed for exactly that feeling — automatically.
            </p>
            <p>
              Fill the refillable water + fragrance pod with your scent of
              choice, plug in via USB-A, and press the button to choose one of
              4 spray intervals. Every 15, 23, 30, or 45 minutes, it sprays a
              5-second burst — then waits. No timers, no reminders, no manual
              spraying.
            </p>
            <p>
              Wall-mount it in your entryway, living room, or bedroom — or set
              it on any surface. The built-in ambient light adds a soft glow you
              can toggle with a long press. Just plug in and let it do its
              thing.
            </p>
            <p className="font-medium text-plum">
              Your space is a reflection of how you want to feel. Set it once.
              Make it beautiful.
            </p>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-20" id="reviews">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            What people are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-2xl border border-lilac/30 bg-white/40 px-6 py-5 flex flex-col gap-4"
              >
                <div className="flex gap-0.5 text-yellow-400 text-sm">
                  ★★★★★
                </div>
                <p className="text-sm text-plum/70 leading-relaxed italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div>
                  <p className="text-sm font-semibold text-plum">{r.name}</p>
                  <p className="text-xs text-plum/50">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20 max-w-3xl">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            Frequently Asked Questions
          </h2>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </div>
  );
}
