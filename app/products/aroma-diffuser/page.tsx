import type { Metadata } from "next";
import AddToCart from "@/components/AddToCart";
import FAQAccordion from "@/components/FAQAccordion";
import ProductGallery from "@/components/ProductGallery";

export const metadata: Metadata = {
  title: "Velour Cloud™ Aroma Diffuser — $23.99 USD | Velour Cloud",
  description:
    "A sleek, wireless aroma diffuser designed for modern spaces. Runs on refillable scent cartridges and fills your room with a soft, consistent fragrance — no cords, no clutter, no complicated setup.",
};

const features = [
  {
    icon: "🔋",
    title: "Wireless & USB Rechargeable",
    description:
      "Built-in rechargeable battery lets you use it anywhere, no constant plug required.",
  },
  {
    icon: "🌫",
    title: "4 Timed Spray Modes",
    description:
      "Choose intervals of 15, 23, 30, or 45 minutes for consistent, automatic fragrance.",
  },
  {
    icon: "💧",
    title: "Refillable Fragrance Cartridge",
    description:
      "Simply add water and your favourite fragrance for a personalized scent experience.",
  },
  {
    icon: "🧱",
    title: "Wall-Mount or Desktop",
    description:
      "Sleek design works mounted on the wall or placed on any flat surface.",
  },
  {
    icon: "✨",
    title: "Soft Ambient LED Glow",
    description:
      "Subtle built-in lighting adds a modern touch to any space.",
  },
  {
    icon: "🎛",
    title: "Simple One-Touch Controls",
    description:
      "Short press to power on/off, long press (3 seconds) to toggle the ambient light.",
  },
];

const specs = [
  ["Power", "Built-in rechargeable battery"],
  ["Spray Intervals", "15, 23, 30, or 45 minutes"],
  ["Spray Duration", "5 seconds per cycle"],
  ["Mounting", "Wall-mount or desktop placement"],
  ["Cartridge", "Refillable fragrance cartridge"],
  ["Ambient Light", "Soft LED glow (toggle on/off)"],
  ["Controls", "Short press: power on/off | Long press (3 sec): toggle light"],
  ["Charging", "USB rechargeable"],
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
      "Mounted it beside my front door and it runs on the 15-minute setting all day. The rechargeable battery is so convenient — just charge it and it runs all day. Love this thing.",
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
      "No — it runs on a built-in rechargeable battery. Charge it via USB and use it anywhere.",
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
    question: "How do the scent cartridges work?",
    answer:
      "Each cartridge comes pre-filled with our signature scent. Snap it into the diffuser and it's ready to go. When the scent runs low, you can refill it with your own favourite fragrance — any water-soluble essential oil or fragrance works.",
  },
  {
    question: "Can I wall-mount it?",
    answer:
      "Yes. Wall-mount hardware is included in the box. You can also place it on any flat surface — desk, shelf, nightstand.",
  },
  {
    question: "What's included in the box?",
    answer:
      "Velour Cloud™ Aroma Diffuser, USB charging cable, wall-mount hardware, scent cartridge (based on your selection), and user guide.",
  },
];

const jsonLd = {
  "@context": "https://schema.org/",
  "@type": "Product",
  name: "Velour Cloud™ Aroma Diffuser",
  description:
    "Wireless rechargeable automatic spray diffuser. Fill the refillable fragrance cartridge with your favourite scent, press the button — it handles the rest.",
  brand: {
    "@type": "Brand",
    name: "Velour Cloud",
  },
  image: "https://velourcloud.com/images/product-hero.png",
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "23.99",
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
    <div className="bg-cream min-h-screen pb-24 lg:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ProductGallery />

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
              A sleek, wireless aroma diffuser designed for modern spaces. Runs on refillable scent
              cartridges and fills your room with a soft, consistent fragrance — no cords, no clutter,
              no complicated setup.
            </p>

            <AddToCart />

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                { icon: "🔒", label: "Secure Checkout" },
                { icon: "🚚", label: "Free worldwide shipping" },
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
                title: "Fill the Cartridge",
                description:
                  "Fill the cartridge with water and your favourite fragrance.",
              },
              {
                number: "02",
                title: "Choose Your Spray Speed",
                description:
                  "Choose your spray speed (15, 23, 30, or 45 minute intervals).",
              },
              {
                number: "03",
                title: "Set and Enjoy",
                description:
                  "Set it and enjoy — it handles the rest automatically.",
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

        {/* Scent Cartridges */}
        <div className="mt-20">
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            Scent Cartridges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
            {[
              { name: "Lavender Refill Cartridge", notes: "Soft floral · calm & grounding", price: "$11.99 USD" },
              { name: "Rose Refill Cartridge", notes: "Romantic floral · warm & uplifting", price: "$11.99 USD" },
            ].map(({ name, notes, price }) => (
              <div
                key={name}
                className="flex items-start gap-4 rounded-2xl border border-lilac/30 bg-white/40 px-5 py-4"
              >
                <span className="w-8 h-8 rounded-full bg-lilac/30 flex items-center justify-center shrink-0 text-base mt-0.5">
                  🌸
                </span>
                <div>
                  <p className="text-sm font-semibold text-plum">{name}</p>
                  <p className="text-xs text-plum/55 mt-0.5">{notes}</p>
                  <p className="text-xs text-slate-mist mt-1 font-medium">{price}</p>
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
              "1× USB charging cable",
              "1× Wall-mount hardware",
              "1× Rose fragrance cartridge",
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
              Fill the refillable fragrance cartridge with your scent of
              choice and press the button to choose one of 4 spray intervals.
              Every 15, 23, 30, or 45 minutes, it sprays a 5-second burst —
              then waits. No timers, no reminders, no manual spraying.
            </p>
            <p>
              Wall-mount it in your entryway, living room, or bedroom — or set
              it on any surface. The built-in ambient light adds a soft glow you
              can toggle with a long press. Charge it via USB and let it do its
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
