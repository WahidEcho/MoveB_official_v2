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
          
          {/* Mobile App Mockup */}
          <div className="relative max-w-[280px] mx-auto">
            <div className="relative aspect-[9/19.5] rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-800 shadow-2xl">
              <div className="rounded-[2rem] overflow-hidden h-full bg-black relative">
                {/* Status Bar */}
                <div className="absolute top-2 left-6 right-6 flex justify-between items-center text-white text-sm z-10">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <div className="flex gap-1">
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white"></div>
                      <div className="w-1 h-1 rounded-full bg-white opacity-60"></div>
                      <div className="w-1 h-1 rounded-full bg-white opacity-30"></div>
                    </div>
                    <svg className="w-4 h-4" fill="white" viewBox="0 0 24 24">
                      <path d="M2 17h20v2H2zm1.15-4.05L4 11.47l.85 1.48s1.54-.7 2.86-.7c1.32 0 2.86.7 2.86.7L11.42 11s-1.54-.7-2.86-.7c-1.32 0-2.86.7-2.86.7zm6.7-1.48c-1.32 0-2.86.7-2.86.7l.85 1.48s1.54-.7 2.86-.7c1.32 0 2.86.7 2.86.7l.85-1.48s-1.54-.7-2.86-.7z"/>
                    </svg>
                  </div>
                </div>
                
                {/* App Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-teal-900/50">
                  <div className="absolute inset-0 bg-black/60"></div>
                  {/* Geometric pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-purple-400 rotate-45 transform"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-blue-400 rotate-12 transform"></div>
                    <div className="absolute top-1/2 right-1/3 w-16 h-16 border border-teal-400 -rotate-12 transform"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="relative z-10 h-full flex flex-col justify-center items-center px-8">
                  <h2 className="text-white text-3xl font-bold text-center mb-8">Passaire App</h2>
                  
                  {/* Business ID Input */}
                  <div className="w-full mb-6">
                    <div className="bg-black/40 border border-gray-600 rounded-xl px-4 py-3">
                      <span className="text-gray-400 text-sm">Business ID</span>
                    </div>
                  </div>
                  
                  {/* Enter Button */}
                  <button className="w-full bg-white text-black font-semibold py-3 rounded-xl">
                    Enter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}







