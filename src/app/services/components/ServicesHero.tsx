"use client";
import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_70%_at_50%_30%,black,transparent)]">
        <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-3xl opacity-50 bg-[conic-gradient(from_0deg,rgba(96,165,250,0.35),rgba(37,99,235,0.55),rgba(124,58,237,0.35),rgba(96,165,250,0.35))] animate-[spin_28s_linear_infinite]" />
        <div className="absolute -bottom-48 -right-48 w-[680px] h-[680px] rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.55),transparent_60%)] animate-[pulseGlow_10s_ease-in-out_infinite]" />
      </div>
      <div className="container mx-auto px-6 relative">
        <motion.h1 initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="font-display text-4xl md:text-6xl font-bold">Our Services</motion.h1>
        <motion.p initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.08}} className="mt-5 text-lg md:text-xl text-[var(--mb-muted)] max-w-3xl">
          Move Beyond delivers a unique mix of digital innovation, event management, and sports consultancy — built for academies, federations, and event organizers.
        </motion.p>
        <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.16}} className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="/rfp" className="inline-flex items-center rounded-xl px-6 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] shadow-[0_0_24px_rgba(96,165,250,0.25)] hover:shadow-[0_0_36px_rgba(96,165,250,0.35)] transition-shadow">Request a Proposal</a>
          <a href="/contact?type=demo" className="inline-flex items-center rounded-xl px-6 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)] backdrop-blur hover:border-[color-mix(in_oklab,var(--mb-primary)_40%,transparent)] transition">Book a Demo</a>
        </motion.div>
      </div>
      <style jsx>{`
        @keyframes pulseGlow { 0%,100% { opacity:.45; transform: scale(1); } 50% { opacity:.7; transform: scale(1.05); } }
      `}</style>
    </section>
  );
}






