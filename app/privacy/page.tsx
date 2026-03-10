import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Velour Cloud",
  description: "Your privacy matters. Velour Cloud does not sell your data.",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>
        <p className="text-xs text-plum/50 mb-12">Last updated: January 2026</p>

        <div className="space-y-10 text-sm text-plum/70 leading-relaxed">
          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Information We Collect
            </h2>
            <p>
              When you place an order or sign up to our email list, we collect
              personal information including your name, email address, shipping
              address, and payment details. We also collect analytics data
              related to how you interact with our website (pages visited,
              browser type, device type) to help us improve your experience.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              How We Use Your Information
            </h2>
            <p>
              We use your information to process and fulfill your orders,
              communicate with you about your purchases, and send you marketing
              emails if you have opted in. We use analytics data to understand
              how customers find and use our site so we can improve it.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Data Sharing
            </h2>
            <p>
              We do not sell your personal data to third parties. We share
              information only with service providers necessary to operate our
              business — including payment processors (Stripe, Shopify) and
              shipping partners — and only to the extent required to provide
              those services.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Email Communications
            </h2>
            <p>
              If you sign up to our email list, you consent to receiving
              marketing communications from Velour Cloud. You may unsubscribe at
              any time by clicking the unsubscribe link in any email we send, or
              by contacting us at hello@velourcloud.com.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Your Rights (GDPR & PIPEDA)
            </h2>
            <p>
              Depending on your location, you may have the right to access,
              correct, or delete the personal data we hold about you. To
              exercise these rights, contact us at hello@velourcloud.com. For
              residents of the EU/EEA, these rights are guaranteed under GDPR.
              For residents of Canada, these rights are guaranteed under PIPEDA.
            </p>
          </section>

          <section>
            <h2
              style={{ fontFamily: "var(--font-cormorant), serif" }}
              className="text-2xl font-semibold text-plum mb-4"
            >
              Security
            </h2>
            <p>
              Our website uses SSL (Secure Sockets Layer) encryption to protect
              your personal and payment information during transmission. Payment
              processing is handled by PCI-compliant third-party providers.
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
              For privacy-related questions, contact us at{" "}
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
