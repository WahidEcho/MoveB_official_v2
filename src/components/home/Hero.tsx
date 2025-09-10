"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Move Beyond: Strategic Sports & Events Consultancy</h1>
          <p className="mt-6 text-lg text-[var(--mb-muted)] max-w-2xl">
            We help federations, governments, clubs, and brands plan, deliver, and digitize world-class sports experiences—backed by operations expertise and modern technology.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]" href="/rfp">Request a Proposal</a>
            <a className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)] backdrop-blur" href="/contact">Talk to an Expert</a>
          </div>
          <div className="mt-5 text-sm text-[var(--mb-muted)]">Government Liaison • Elite Event Ops • Data & Digital • MENA & Gulf Focus</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] blur-3xl opacity-25" />
          <div className="h-[360px] rounded-3xl border border-[var(--mb-border)] bg-[var(--mb-surface-2)] backdrop-blur flex items-center justify-center">
            <span className="text-[var(--mb-muted)]">Hero Visual / Animated Mesh Placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




