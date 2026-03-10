import Link from "next/link";

export const metadata = {
  title: "Order Confirmed | Velour Cloud",
};

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-20">
      <div className="max-w-lg mx-auto text-center">
        <div className="text-6xl mb-6">🌧️</div>
        <h1
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-4xl text-plum mb-4"
        >
          Order Confirmed
        </h1>
        <p className="text-slate-mist mb-2">
          Thank you for your order. You&apos;ll receive a confirmation email shortly.
        </p>
        <p className="text-slate-mist text-sm mb-8">
          Estimated delivery: 7–14 business days. We&apos;ll send tracking info once your order ships.
        </p>

        {/* Next order discount */}
        <div className="bg-plum/5 border border-plum/15 rounded-2xl px-6 py-5 mb-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-lilac mb-1">
            Your reward
          </p>
          <p className="text-plum text-sm font-medium">
            Use <span className="font-bold text-plum bg-lilac/30 px-1.5 py-0.5 rounded">CLOUD10</span> on your next order for 10% off.
          </p>
          <p className="text-plum/50 text-xs mt-1">Valid for 60 days. No minimum spend.</p>
        </div>

        {/* Give $5 Get $5 referral teaser */}
        <div className="bg-lilac/15 border border-lilac/30 rounded-2xl px-6 py-5 mb-6 text-left">
          <p className="text-xs font-semibold uppercase tracking-widest text-plum/60 mb-1">
            Refer a friend
          </p>
          <p className="text-plum font-semibold mb-1">Give $5, Get $5 ☁️</p>
          <p className="text-plum/60 text-sm">
            When a friend makes their first order with your link, they get $5 off — and so do you.
            Referral links coming soon.
          </p>
        </div>

        {/* Share your cloud */}
        <div className="mb-10">
          <p className="text-plum font-semibold mb-1">Share your cloud ☁️</p>
          <p className="text-plum/50 text-sm mb-4">
            Show us your setup and tag us for a chance to be featured.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.tiktok.com/@velourcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-plum text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-plum/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.8a8.18 8.18 0 0 0 4.78 1.52V6.9a4.85 4.85 0 0 1-1.01-.21z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.instagram.com/velourcloud"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-plum text-cream px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-plum/90 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              Instagram
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block bg-plum text-cream px-8 py-3 rounded-full text-sm font-semibold tracking-wide hover:bg-plum/90 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
