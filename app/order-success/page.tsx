import Link from "next/link";

export const metadata = {
  title: "Order Confirmed | Velour Cloud",
};

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center py-20">
        <div className="text-6xl mb-6">🌧️</div>
        <h1 className="font-cormorant text-4xl text-plum mb-4">
          Order Confirmed
        </h1>
        <p className="text-slate-mist mb-2">
          Thank you for your order. You&apos;ll receive a confirmation email shortly.
        </p>
        <p className="text-slate-mist text-sm mb-10">
          Estimated delivery: 7–14 business days. We&apos;ll send tracking info once your order ships.
        </p>
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
