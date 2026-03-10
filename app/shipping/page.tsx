import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Info — Velour Cloud",
  description: "Free shipping on orders over $35 CAD. Arrives in 10-20 business days.",
};

export default function ShippingPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-6">
          Policies
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-5xl font-semibold text-plum mb-12"
        >
          Shipping Information
        </h1>

        <div className="space-y-10 text-sm text-plum/70 leading-relaxed">
          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Processing Time
            </h2>
            <p>
              Orders are processed within 2-4 business days. You will receive a
              confirmation email with tracking information once your order ships.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Delivery Estimates
            </h2>
            <div className="rounded-2xl overflow-hidden border border-lilac/30">
              {[
                ["Canada & USA", "10–20 business days"],
                ["International", "14–28 business days"],
              ].map(([region, time], i) => (
                <div
                  key={region}
                  className={`grid grid-cols-2 px-5 py-4 ${
                    i % 2 === 0 ? "bg-white/40" : "bg-transparent"
                  }`}
                >
                  <span className="font-medium text-plum">{region}</span>
                  <span>{time}</span>
                </div>
              ))}
            </div>
            <p className="mt-4">
              Delivery estimates begin from the date of shipment, not the date
              of purchase.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Shipping Rates
            </h2>
            <div className="rounded-2xl overflow-hidden border border-lilac/30">
              {[
                ["Orders over $35 CAD", "Free shipping"],
                ["Orders under $35 CAD", "$4.99 CAD flat rate"],
              ].map(([condition, rate], i) => (
                <div
                  key={condition}
                  className={`grid grid-cols-2 px-5 py-4 ${
                    i % 2 === 0 ? "bg-white/40" : "bg-transparent"
                  }`}
                >
                  <span className="font-medium text-plum">{condition}</span>
                  <span>{rate}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Order Tracking
            </h2>
            <p>
              Once shipped, track your order at{" "}
              <a
                href="https://www.17track.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-mist underline underline-offset-2"
              >
                17track.net
              </a>{" "}
              using the tracking number provided in your shipment email.
              Tracking updates may take 48–72 hours to appear after the number
              is issued.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Questions?
            </h2>
            <p>
              Contact us at{" "}
              <a
                href="mailto:hello@velourcloud.com"
                className="text-slate-mist underline underline-offset-2"
              >
                hello@velourcloud.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
