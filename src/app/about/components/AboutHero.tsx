"use client";
import { motion } from "framer-motion";
import Badge from "@/components/ui/badge";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* animated background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]">
        <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-3xl opacity-50 bg-[conic-gradient(from_0deg,rgba(96,165,250,0.35),rgba(37,99,235,0.55),rgba(124,58,237,0.35),rgba(96,165,250,0.35))] animate-[spin_28s_linear_infinite]" />
        <div className="absolute -bottom-48 -right-48 w-[680px] h-[680px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.55),transparent_60%)] animate-[pulseGlow_10s_ease-in-out_infinite]" />
      </div>
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
          Where sports, events, and digital innovation meet.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4"
        >
          <Badge>
            Founded in Egypt, Move Beyond empowers sports academies, federations, and event organizers with the tools, strategies, and experiences they need to thrive in a fast-changing region.
          </Badge>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <a href="/case-studies" className="inline-flex items-center rounded-xl px-6 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] shadow-[0_0_24px_rgba(96,165,250,0.25)] hover:shadow-[0_0_36px_rgba(96,165,250,0.35)] transition-shadow">View Case Studies</a>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes pulseGlow { 0%,100% { opacity:.45; transform: scale(1); } 50% { opacity:.7; transform: scale(1.05); } }
      `}</style>
    </section>
  );
}




