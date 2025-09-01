"use client";
import { useEffect, useState } from "react";

function useCounter(target: number, duration = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export default function KpiCounters() {
  const attendees = useCounter(10000);
  const venues = useCounter(20, 900);
  const staff = useCounter(500, 1000);

  return (
    <section aria-label="Key operational KPIs" className="py-10">
      <div className="container mx-auto px-6 grid sm:grid-cols-3 gap-6 text-center">
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
          <div className="text-4xl font-bold">{attendees.toLocaleString()}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Attendees Served</div>
        </div>
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
          <div className="text-4xl font-bold">{venues}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Venues Managed</div>
        </div>
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
          <div className="text-4xl font-bold">{staff}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Staff Accredited</div>
        </div>
      </div>
    </section>
  );
}



