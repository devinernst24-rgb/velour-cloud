"use client";

import { useState, FormEvent } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="bg-plum py-20 px-4">
      <div className="mx-auto max-w-xl text-center">
        <h2
          style={{ fontFamily: "var(--font-cormorant), serif" }}
          className="text-4xl md:text-5xl font-semibold text-cream mb-3"
        >
          Get 10% off your first order
        </h2>
        <p className="text-cream/60 text-sm mb-8">
          Join the Velour Cloud list for your discount code, early access, and ritual inspo.
        </p>
        {status === "success" ? (
          <p className="text-lilac font-medium">
            You&apos;re in. Check your inbox for your 10% code.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 px-5 py-3.5 rounded-full bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:border-lilac"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-7 py-3.5 rounded-full bg-lilac text-plum font-semibold text-sm hover:bg-lilac/90 transition-colors disabled:opacity-60 whitespace-nowrap"
            >
              {status === "loading" ? "..." : "Get 10% Off"}
            </button>
          </form>
        )}
        {status === "error" && (
          <p className="text-red-400 text-xs mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
