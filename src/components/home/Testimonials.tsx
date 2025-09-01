"use client";
import { useState } from "react";
import { CardGlass } from "@/components/common/CardGlass";

const quotes = [
  {
    quote:
      "Pass App made our gates fly — zero bottlenecks and live dashboards for finance.",
    name: "Academy Manager",
    org: "Levels Academy",
  },
  {
    quote:
      "Their ops team delivered flawlessly — accreditation, access, and logistics were tight.",
    name: "Event Director",
    org: "Insomnia Festival",
  },
  {
    quote:
      "From consulting to technology, one team owned the full delivery.",
    name: "Federation Rep",
    org: "Regional Federation",
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % quotes.length);
  const prev = () => setIdx((i) => (i - 1 + quotes.length) % quotes.length);
  const { quote, name, org } = quotes[idx];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">What Our Partners Say</h2>
        <CardGlass className="mt-6 p-8">
          <div className="flex items-center justify-between gap-4">
            <button aria-label="Previous" className="px-3 py-2 rounded-lg border border-[var(--mb-border)]" onClick={prev}>
              ‹
            </button>
            <div className="text-center max-w-3xl mx-auto">
              <div className="text-lg md:text-xl">“{quote}”</div>
              <div className="mt-3 text-sm text-[var(--mb-muted)]">
                {name} • {org}
              </div>
            </div>
            <button aria-label="Next" className="px-3 py-2 rounded-lg border border-[var(--mb-border)]" onClick={next}>
              ›
            </button>
          </div>
        </CardGlass>
      </div>
    </section>
  );
}


