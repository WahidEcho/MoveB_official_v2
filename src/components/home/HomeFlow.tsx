"use client";
import { CardGlass } from "@/components/common/CardGlass";
import { ShoppingCart, QrCode, Scan, Ticket, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";

// Pass App flow
const steps = [
  { title: "Buy", text: "Purchase online or via partner channels.", icon: ShoppingCart },
  { title: "Digital Pass", text: "Instant QR pass with perks delivered.", icon: QrCode },
  { title: "Scan", text: "Fast validation at gates and checkpoints.", icon: Scan },
  { title: "Redeem", text: "Use vouchers and entitlements on‑site.", icon: Ticket },
  { title: "Live dashboard", text: "Track entries, spend, and finance in real time.", icon: BarChart3 },
];

export default function HomeFlow() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center">How It Works</h2>
        <p className="text-center text-[var(--mb-muted)] mt-2">Pass App flow in 5 steps</p>

        {/* Numbered rail with subtle motion */}
        <div className="relative mt-10">
          <div className="h-0.5 w-full bg-[var(--mb-border)]" />
          <div className="grid grid-cols-5 gap-6 mt-[-18px]">
            {steps.map((_, i) => (
              <div key={i} className="flex justify-center">
                <motion.div
                  initial={{ y: 8, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="w-16 h-16 rounded-full bg-[radial-gradient(circle_at_30%_30%,var(--mb-primary-2)_0%,var(--mb-primary)_60%,transparent_100%)] border border-[var(--mb-border)] flex items-center justify-center text-[var(--mb-text)] font-semibold"
                >
                  {i + 1}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards with staggered motion */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map(({ title, text, icon: Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 + 0.1 }}
            >
              <CardGlass className="p-6 h-full text-center">
                <Icon className="w-8 h-8 mx-auto text-[var(--mb-primary-2)]" />
                <div className="mt-4 text-lg font-semibold">{title}</div>
                <p className="mt-2 text-sm text-[var(--mb-muted)]">{text}</p>
              </CardGlass>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


