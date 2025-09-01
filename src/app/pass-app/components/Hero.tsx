"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-b from-[var(--mb-bg-0)] to-[var(--mb-bg-1)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Pass App</h1>
          <p className="mt-5 text-lg text-[var(--mb-muted)] max-w-2xl">
            Digital passes that unlock ticketing, entry, vouchers, memberships, and transparent finance—in one system.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <a href="/contact?type=demo">Request a Demo</a>
            </Button>
            <Button asChild variant="outline" className="backdrop-blur">
              <a href="/services/digital">Explore Integrations</a>
            </Button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] blur-3xl opacity-25" aria-hidden="true" />
          <div className="h-[360px] rounded-3xl border border-[var(--mb-border)] bg-[var(--mb-surface-2)] backdrop-blur flex items-center justify-center">
            <span className="text-[var(--mb-muted)]">Device mock placeholder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



