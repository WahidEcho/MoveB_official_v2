"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users2, Building2, BadgeCheck } from "lucide-react";

function useCounter(target: number, duration = 1200, active = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, active]);
  return value;
}

export default function KpiCounters() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-25% 0px -25% 0px" });
  const attendees = useCounter(10000, 1200, inView);
  const venues = useCounter(20, 900, inView);
  const staff = useCounter(500, 1000, inView);

  return (
    <section ref={sectionRef} aria-label="Key operational KPIs" className="py-10">
      <div className="container mx-auto px-6 grid sm:grid-cols-3 gap-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.0 }}
          className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6"
        >
          <Users2 className="w-6 h-6 mx-auto text-[var(--mb-primary-2)] mb-2" />
          <div className="text-4xl font-bold">{attendees.toLocaleString()}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Attendees Served</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6"
        >
          <Building2 className="w-6 h-6 mx-auto text-[var(--mb-primary-2)] mb-2" />
          <div className="text-4xl font-bold">{venues}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Venues Managed</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6"
        >
          <BadgeCheck className="w-6 h-6 mx-auto text-[var(--mb-primary-2)] mb-2" />
          <div className="text-4xl font-bold">{staff}+</div>
          <div className="mt-1 text-[var(--mb-muted)]">Staff Accredited</div>
        </motion.div>
      </div>
    </section>
  );
}




