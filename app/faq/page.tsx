import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Velour Cloud",
  description:
    "Questions about shipping, returns, essential oils, LED modes, and more.",
};

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "Orders are shipped from our supplier warehouse and typically arrive within 10-20 business days to Canada and the US. You'll receive a tracking number by email once your order ships, usually within 2-4 business days of purchase.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer 30-day returns on unused, unopened items in original condition. Email us at hello@velourcloud.com within 30 days of delivery. Return shipping costs are covered by the buyer. Refunds are processed within 5-7 business days.",
  },
  {
    question: "How does the Rain Cloud Diffuser work?",
    answer:
      "It's an ultrasonic cool-mist humidifier. Fill the reservoir with water (up to 130 mL), add a few drops of water-soluble essential oil, and press the power button. The LED light is a separate function you can toggle on/off or cycle through 7 colours.",
  },
  {
    question: "Is it safe to use around children and pets?",
    answer:
      "Yes — the diffuser uses cool mist with no heating element. It has an auto shut-off feature that activates when water runs low. Always check that any essential oils you choose are pet-safe, as some oils can be harmful to cats and dogs in high concentrations.",
  },
  {
    question: "What essential oils can I use with it?",
    answer:
      "The diffuser is compatible with any water-soluble essential oils. Popular choices include lavender, sweet orange, peppermint, eucalyptus, chamomile, and cedarwood. Do not use undiluted carrier oils or synthetic perfumes — these can clog the ultrasonic disc.",
  },
  {
    question: "How do the LED modes work?",
    answer:
      "Press the light button once to turn on the LED. Cycle through 7 colours or hold on a single colour. Press again to toggle brightness (two levels). Press and hold to turn the light off while keeping the mist running. Light and mist operate independently.",
  },
  {
    question: "What type of water should I use?",
    answer:
      "We recommend distilled or filtered water for best results. Tap water works but can leave white mineral deposits over time. If you notice white residue, wipe the interior with a damp cloth or use a cotton swab with white vinegar, then rinse thoroughly.",
  },
  {
    question: "Do you offer gift packaging?",
    answer:
      "Every Velour Cloud order ships in clean, minimal packaging that's presentable as a gift. If you'd like to include a personalised gift message, add a note in the order comments at checkout and we'll include a handwritten-style card.",
  },
  {
    question: "How do I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. Track your package at 17track.net using that number. Tracking updates can take 48-72 hours to appear after the tracking number is issued.",
  },
  {
    question: "Do you have a discount code or first-order offer?",
    answer:
      "Yes! Sign up to our email list and you'll receive 10% off your first order automatically. We also run seasonal sales and TikTok-exclusive codes — follow us @velourcloud for drops.",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-6">
          Support
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-5xl md:text-6xl font-semibold text-plum mb-4"
        >
          Frequently asked questions
        </h1>
        <p className="text-sm text-plum/60 mb-12">
          Can&apos;t find your answer?{" "}
          <a
            href="mailto:hello@velourcloud.com"
            className="text-slate-mist underline underline-offset-2"
          >
            Email us
          </a>
          .
        </p>
        <FAQAccordion items={faqs} />
      </div>
    </div>
  );
}
