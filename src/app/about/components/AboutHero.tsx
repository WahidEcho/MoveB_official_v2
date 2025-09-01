"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/badge";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[var(--mb-bg-0)] to-[var(--mb-bg-1)]">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl md:text-6xl font-bold"
        >
          About Move Beyond
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-5 text-lg md:text-xl text-[var(--mb-muted)] max-w-3xl"
        >
          Sports-first consultancy + digital innovation. Built in Egypt for a region on the rise.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <Badge>
            We blend elite event operations with modern systems engineering
          </Badge>
        </motion.div>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] blur-3xl opacity-25"
      />
    </section>
  );
}



