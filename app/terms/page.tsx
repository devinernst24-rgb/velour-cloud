import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Velour Cloud",
  description:
    "By shopping with Velour Cloud, you agree to our terms of service.",
};

export default function TermsPage() {
  return (
    <div className="bg-cream min-h-screen">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-mist mb-6">
          Legal
        </p>
        <h1
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-5xl font-semibold text-plum mb-4"
        >
          Terms of Service
        </h1>
        <p className="text-xs text-plum/50 mb-12">Last updated: January 2026</p>

        <div className="space-y-10 text-sm text-plum/70 leading-relaxed">
          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Acceptance of Terms
            </h2>
            <p>
              By accessing or purchasing from Velour Cloud, you agree to be
              bound by these Terms of Service. If you do not agree, please do
              not use our website or purchase our products.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Pricing & Currency
            </h2>
            <p>
              All prices on the Velour Cloud website are listed in Canadian
              Dollars (CAD) unless otherwise stated. Prices are subject to
              change without notice. We reserve the right to refuse or cancel
              any order in cases of pricing errors.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Warranty
            </h2>
            <p>
              Velour Cloud products come with a 30-day limited warranty covering
              manufacturing defects. This warranty does not cover damage caused
              by misuse, accidents, or normal wear and tear. To make a warranty
              claim, contact us at hello@velourcloud.com within 30 days of
              receiving your product with proof of purchase and a description of
              the defect.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by applicable law, Velour Cloud
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising from your use of our
              products or website, including but not limited to loss of profits,
              data, or goodwill.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Governing Law
            </h2>
            <p>
              These Terms of Service are governed by and construed in accordance
              with the laws of the Province of Ontario, Canada, without regard
              to its conflict of law provisions. Any disputes arising under
              these terms shall be subject to the exclusive jurisdiction of the
              courts of Ontario, Canada.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
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
