"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const milestones = [
  { year: "2023", title: "Concept & Pilots", text: "Early pilots with local academies to validate operations & tooling." },
  { year: "2024", title: "First Deployments", text: "Event operations for major activations; first academy rollouts." },
  { year: "2025", title: "Consultancy + Product", text: "Formal consulting practice; Pass App deployments; multi-venue ops." },
  { year: "2026+", title: "Regional Expansion", text: "Federations and mega-events across MENA & the Gulf." },
];

export default function Timeline() {
  return (
    <section aria-labelledby="timeline">
      <h2 id="timeline" className="font-display text-3xl md:text-4xl font-semibold mb-6">Milestones</h2>
      <div className="relative ml-3 before:absolute before:left-[10px] before:top-0 before:bottom-0 before:w-[2px] before:bg-[var(--mb-border)]">
        <div className="space-y-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.05 }}
              className="relative pl-10"
            >
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] shadow" />
              <Card className="bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-[var(--mb-muted)]">
                    <Calendar className="w-4 h-4" />
                    {m.year}
                  </div>
                  <h3 className="mt-1 text-xl font-semibold">{m.title}</h3>
                  <p className="mt-1 text-[var(--mb-muted)]">{m.text}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}





