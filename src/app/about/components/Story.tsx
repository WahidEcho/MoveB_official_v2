"use client";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

const paragraphs = [
  "Egypt’s sports momentum has accelerated—new academies, clubs, and events reshaped expectations.",
  "While supporting Levels Academy—one of Egypt's top multi-sport academies—we saw the urgent need for a centralized, intelligent tool handling reservations, staff, tasks, and revenues.",
  "With Belal (events) and Mohamed (systems), we founded Move Beyond to deliver clarity, efficiency, and technology for sports operations across MENA & the Gulf.",
  "We’ve lived the challenges—and built the solution we wished existed.",
];

export default function Story() {
  return (
    <section aria-labelledby="our-story">
      <h2 id="our-story" className="font-display text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
      <Card className="bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
        <div className="p-6 md:p-10 space-y-5 text-[var(--mb-muted)] leading-relaxed">
          {paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              {p}
            </motion.p>
          ))}
        </div>
      </Card>
    </section>
  );
}



