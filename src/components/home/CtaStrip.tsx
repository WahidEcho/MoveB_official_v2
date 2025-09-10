"use client";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

export default function CtaStrip() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Parallax background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
        style={{ y }}
      >
        <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(96,165,250,0.5),transparent_60%)]" />
        <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full blur-3xl bg-[conic-gradient(from_0deg,rgba(37,99,235,0.4),rgba(96,165,250,0.2),transparent)]" />
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface-2)] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl">Ready to plan or deliver your next event?</h3>
            <p className="text-[var(--mb-muted)] mt-1">Talk to our consulting team or request a proposal.</p>
          </div>
          <div className="flex gap-3">
            <a className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] relative overflow-hidden" href="/rfp">
              <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-[rgba(96,165,250,0.6)] transition" />
              <span className="relative">Request a Proposal</span>
            </a>
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)]" href="/contact">Contact</a>
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)]" href="/contact?type=demo">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}



