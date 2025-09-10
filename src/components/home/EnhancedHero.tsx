"use client";
import { motion } from "framer-motion";
import { QrCode } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

export default function EnhancedHero() {
  const { theme } = useTheme();
  const videoSrc = theme === "dark" ? "/passapp/phone-dark.webm" : "/passapp/phone-light.webm";
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Animated mesh background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
      >
        <div className="absolute -top-40 -left-40 w-[720px] h-[720px] rounded-full blur-3xl opacity-60 bg-[conic-gradient(from_0deg,rgba(96,165,250,0.35),rgba(37,99,235,0.6),rgba(124,58,237,0.35),rgba(96,165,250,0.35))] animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-48 -right-48 w-[680px] h-[680px] rounded-full blur-3xl opacity-50 bg-[radial-gradient(circle_at_30%_30%,rgba(37,99,235,0.55),transparent_60%)] animate-[pulseGlow_8s_ease-in-out_infinite]" />
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-4xl md:text-6xl font-bold">Strategic Sports & Events Consultancy</h1>
          <p className="mt-6 text-lg text-[var(--mb-muted)] max-w-2xl">
            We help federations, clubs, and brands deliver world-class sports experiences—powered by smart tech.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] shadow-[0_0_24px_rgba(96,165,250,0.25)] hover:shadow-[0_0_36px_rgba(96,165,250,0.35)] transition-shadow" href="/rfp">Request a Proposal</a>
            <a className="inline-flex items-center justify-center rounded-xl px-6 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)] backdrop-blur hover:border-[color-mix(in_oklab,var(--mb-primary)_40%,transparent)] transition" href="/contact?type=demo">Book a Demo</a>
          </div>
        </motion.div>

        {/* Visual panel with floating QR overlay */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
          <div className="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] blur-3xl opacity-25" />
          <div className="h-[360px] rounded-3xl border border-[var(--mb-border)] bg-[var(--mb-surface-2)] backdrop-blur relative overflow-hidden transform-gpu scale-[0.7] mx-auto">
            {/* subtle animated grid lines */}
            <div className="pointer-events-none absolute inset-0 opacity-25">
              <div className="absolute inset-0 [background:linear-gradient(transparent_95%,rgba(37,99,235,0.15)_98%),linear-gradient(90deg,transparent_95%,rgba(96,165,250,0.15)_98%)] bg-[length:24px_24px]" />
            </div>
          </div>

          {/* Overlay video above the panel and QR card, full resolution without cropping */}
          <video
            key={theme}
            className="absolute inset-0 z-20 w-full h-full object-contain pointer-events-none"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Floating QR overlay */}
          <motion.div
            className="absolute -bottom-6 -left-6 z-30 rounded-2xl border border-[var(--mb-border)] bg-white/80 backdrop-blur p-3 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="relative w-28 h-28 rounded-xl bg-white overflow-hidden flex items-center justify-center">
              <QrCode className="w-16 h-16 text-[#0B1220] opacity-100" />
              {/* scanning line */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-[scan_2.4s_ease-in-out_infinite]" />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-wide text-[var(--mb-muted)]">Live Scan</div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes pulseGlow { 0%,100% { opacity: .45; transform: scale(1); } 50% { opacity: .7; transform: scale(1.05); } }
        @keyframes scan { 0% { top: 10%; } 50% { top: 80%; } 100% { top: 10%; } }
      `}</style>
    </section>
  );
}


