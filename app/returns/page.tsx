import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds — Velour Cloud",
  description: "30-day return policy on unused, unopened items.",
};

export default function ReturnsPage() {
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
          Returns & Refunds
        </h1>

        <div className="space-y-10 text-sm text-plum/70 leading-relaxed">
          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              30-Day Return Policy
            </h2>
            <p>
              We accept returns on unused, unopened items in their original
              condition within 30 days of delivery. To initiate a return, email
              us at{" "}
              <a
                href="mailto:hello@velourcloud.com"
                className="text-slate-mist underline underline-offset-2"
              >
                hello@velourcloud.com
              </a>{" "}
              with your order number within 30 days of receiving your order.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Return Shipping
            </h2>
            <p>
              Return shipping costs are the responsibility of the buyer. We
              recommend using a trackable shipping method to ensure the return
              reaches us safely. Velour Cloud is not responsible for items lost
              in transit during return shipment.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Refunds
            </h2>
            <p>
              Once we receive and inspect your returned item, refunds are
              processed to your original payment method within 5-7 business
              days. You will receive an email confirmation once your refund has
              been issued.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Damaged or Defective Items
            </h2>
            <p>
              If your item arrives damaged or defective, email us at{" "}
              <a
                href="mailto:hello@velourcloud.com"
                className="text-slate-mist underline underline-offset-2"
              >
                hello@velourcloud.com
              </a>{" "}
              within 7 days of delivery with your order number and photos of
              the damage. We will arrange a replacement or full refund at no
              additional cost to you.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Non-Returnable Items
            </h2>
            <p>
              Items that have been opened, used, or are not in their original
              condition are not eligible for return. Essential oil bundles are
              final sale once opened.
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
