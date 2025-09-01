"use client";
import { useState } from "react";
import { Gift, Clock, MapPin } from "lucide-react";

const vouchers = [
  { title: "Free Drink", rules: ["Single‑use", "Valid today", "Zone A kiosks"], icon: Gift },
  { title: "Gift Item", rules: ["Single‑use", "Valid this weekend", "Merch stand"], icon: MapPin },
  { title: "10% Discount", rules: ["Multi‑use", "Valid 7 days", "All vendors"], icon: Clock },
];

export default function VoucherShowcase() {
  const [redeemed, setRedeemed] = useState<number | null>(null);
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-4">Vouchers & Perks</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vouchers.map((v, i) => (
          <div key={v.title} className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
            <div className="flex items-center gap-2">
              <v.icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
              <h4 className="text-lg font-semibold">{v.title}</h4>
            </div>
            <ul className="mt-3 space-y-1 text-[var(--mb-muted)]">
              {v.rules.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <button
              onClick={() => setRedeemed(i)}
              className="mt-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] text-white"
            >
              {redeemed === i ? "Redeemed ✓" : "Redeem"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}



