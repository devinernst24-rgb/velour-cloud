import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Velour Cloud",
  description: "Get in touch with Velour Cloud. We typically respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-stone-900 mb-2">Contact Us</h1>
        <p className="text-stone-500 mb-8">
          Questions about your order or our products? We typically respond within 24 hours.
        </p>

        <div className="bg-stone-50 rounded-2xl p-8 mb-8">
          <div className="mb-6">
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-1">Email</p>
            <a
              href="mailto:hello@velourcloud.com"
              className="text-stone-800 font-medium hover:text-stone-600 transition-colors"
            >
              hello@velourcloud.com
            </a>
          </div>
          <div className="mb-6">
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-1">Response Time</p>
            <p className="text-stone-700">Within 24 hours, Monday–Friday</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-wider mb-1">Instagram / TikTok</p>
            <p className="text-stone-700">@velourcloud</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6">
          <h2 className="font-semibold text-stone-800 mb-2">Order issue?</h2>
          <p className="text-stone-600 text-sm">
            Email us at{" "}
            <a href="mailto:hello@velourcloud.com" className="underline">
              hello@velourcloud.com
            </a>{" "}
            with your order number and we&apos;ll make it right under our 30-day guarantee.
          </p>
        </div>
      </div>
    </main>
  );
}
