import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ — Velour Cloud",
  description:
    "Questions about shipping, returns, essential oils, LED modes, and more.",
};

const faqs = [
  {
    question: "How long does the fragrance pod last?",
    answer:
      "Pod life depends on your spray interval and fragrance concentration. On the 30-minute setting, a filled pod typically lasts 2-4 weeks. At the 15-minute interval it will run through fragrance faster. We recommend topping up the pod weekly for consistent scent.",
  },
  {
    question: "Are the pods refillable? What do I put in them?",
    answer:
      "Yes — the pods are fully refillable. Fill with water and add 5-10 drops of any water-soluble essential oil or fragrance oil. Popular choices include lavender, sweet orange, eucalyptus, cedarwood, and vanilla. Avoid undiluted carrier oils or thick synthetic perfumes as these can clog the spray mechanism.",
  },
  {
    question: "How do I charge the diffuser?",
    answer:
      "The Velour Cloud Smart Scent Diffuser charges via the included USB-C cable. A full charge typically takes 1-2 hours and provides several days of use depending on your spray interval. The LED indicator will show when it's charging and when it's fully charged.",
  },
  {
    question: "What are the spray interval options?",
    answer:
      "You can choose from four auto-spray intervals: 15, 23, 30, or 45 minutes. The diffuser sprays automatically at your chosen interval without any manual input. The 30 or 45 minute setting is ideal for a subtle background scent, while 15 minutes gives a more pronounced fragrance presence.",
  },
  {
    question: "How do I wall-mount the diffuser?",
    answer:
      "The package includes a wall hook and mounting hardware. Choose a spot on a flat wall, secure the hook with the included hardware (or a single screw), and hang the diffuser. Because it's rechargeable, there are no cords — just a clean, minimal look on your wall.",
  },
  {
    question: "Is it noisy?",
    answer:
      "The auto-spray mechanism is near-silent. You may hear a very faint click when it sprays, but it is not disruptive. It is suitable for bedrooms, home offices, nurseries, and anywhere else you need quiet.",
  },
  {
    question: "What area does it cover?",
    answer:
      "The Velour Cloud Smart Scent Diffuser covers up to 50m². It performs well in large living rooms, open-concept spaces, and master bedrooms. For smaller rooms, we recommend the 30 or 45 minute interval for a more subtle scent.",
  },
  {
    question: "What fragrances are compatible with it?",
    answer:
      "Any water-soluble essential oil or fragrance oil works. We recommend 5-10 drops per fill. Avoid thick oils, carrier oils, or alcohol-based perfumes. Our 3-Pack and 6-Pack Fragrance Refill Sets are pre-formulated for use with the diffuser and available as an add-on at checkout.",
  },
  {
    question: "What warranty do you offer?",
    answer:
      "We offer a 30-day satisfaction guarantee. If your diffuser arrives damaged or stops working within 30 days of delivery, email us at hello@velourcloud.com and we will send a replacement at no cost. We stand behind our product.",
  },
  {
    question: "How long does shipping take to Canada?",
    answer:
      "Orders ship from our warehouse and typically arrive within 7-14 business days to Canada. Express shipping (3-7 business days) is available at checkout for $9.99 CAD. You will receive a tracking number by email once your order ships.",
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
