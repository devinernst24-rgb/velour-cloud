import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Velour Cloud — Our Story",
  description:
    "Velour Cloud was built for people who believe your space should feel as good as you want to feel.",
};

const values = [
  {
    name: "Intentionality",
    description:
      "Every product we offer has been chosen because it does one thing really well: makes your space feel better.",
  },
  {
    name: "Accessibility",
    description:
      "Aesthetics should not be a luxury. Premium-feeling does not have to mean premium-priced.",
  },
  {
    name: "Quiet Comfort",
    description:
      "We celebrate the small, private rituals — the ones that are just for you.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-6">
          Our Story
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-5xl md:text-6xl font-semibold text-plum mb-16 leading-tight"
        >
          Built for the ritual.
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-3xl font-semibold text-plum mb-6"
            >
              How it started
            </h2>
            <div className="space-y-4 text-sm text-plum/70 leading-relaxed">
              <p>
                I&apos;ve always been someone who needs my space to feel right before
                I can function. Not perfect — just intentional. A candle, a
                specific playlist, the way the light hits at 6pm.
              </p>
              <p>
                A couple of winters ago, I was deep in a work-from-home spiral
                — long hours, dry air, and a bedroom that felt more like a
                storage unit than a sanctuary. I stumbled across a tiny
                cloud-shaped humidifier on a late-night scroll and impulsively
                ordered it. It arrived in a nondescript brown box. I didn&apos;t care.
              </p>
              <p>
                The moment I turned it on — the soft mist, the glow — something
                in me unclenched. I couldn&apos;t stop thinking about how something
                so small could shift the entire feeling of a room.
              </p>
              <p>
                So I built Velour Cloud around that exact idea: that the little
                rituals — the ones you do just for yourself — are worth
                investing in. This shop is for everyone who gets that.
              </p>
              <p className="font-medium text-plum">
                — The Velour Cloud Team
              </p>
            </div>
          </div>

          <div className="bg-lilac/20 rounded-2xl p-8">
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-3xl font-semibold text-plum mb-5"
            >
              Our mission
            </h2>
            <p className="text-sm text-plum/70 leading-relaxed">
              We believe your space should feel as good as you want to feel.
              Velour Cloud exists to make calming, intentional home rituals
              accessible, beautiful, and affordable.
            </p>
          </div>
        </div>

        <div>
          <h2
            style={{ fontFamily: "var(--font-cormorant), serif" }}
            className="text-3xl font-semibold text-plum mb-8"
          >
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div
                key={v.name}
                className="p-6 rounded-2xl bg-white/50 border border-lilac/20"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-3">
                  0{i + 1}
                </p>
                <h3
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                  className="text-xl font-semibold text-plum mb-3"
                >
                  {v.name}
                </h3>
                <p className="text-sm text-plum/70 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
