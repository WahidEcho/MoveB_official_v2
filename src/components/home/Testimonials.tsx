"use client";
import { useEffect, useRef, useState } from "react";
import { CardGlass } from "@/components/common/CardGlass";
import { AnimatePresence, motion } from "framer-motion";

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
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIdx((i) => (i + 1) % quotes.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const { quote, name, org } = quotes[idx];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">What Our Partners Say</h2>
        <CardGlass className="mt-6 p-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="flex items-center justify-between gap-4">
            <button aria-label="Previous" className="px-3 py-2 rounded-lg border border-[var(--mb-border)]" onClick={() => setIdx((i) => (i - 1 + quotes.length) % quotes.length)}>
              ‹
            </button>
            <div className="relative text-center max-w-3xl mx-auto min-h-[84px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="w-full"
                >
                  <div className="text-lg md:text-xl">“{quote}”</div>
                  <div className="mt-3 text-sm text-[var(--mb-muted)]">
                    {name} • {org}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <button aria-label="Next" className="px-3 py-2 rounded-lg border border-[var(--mb-border)]" onClick={() => setIdx((i) => (i + 1) % quotes.length)}>
              ›
            </button>
          </div>
        </CardGlass>
      </div>
    </section>
  );
}



