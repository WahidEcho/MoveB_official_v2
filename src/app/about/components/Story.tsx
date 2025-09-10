"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const paragraphs = [
  "Egypt’s sports momentum has accelerated — new academies, clubs, and events are reshaping expectations and raising the standard for operations.",
  "While supporting Levels Academy, we saw the need for a centralized, intelligent operations layer: reservations without conflicts, clear staff ownership, task execution, and revenue visibility.",
  "Belal brings event operations and delivery; Mohamed brings systems architecture and product engineering. Together we founded Move Beyond to deliver clarity, efficiency, and technology across MENA & the Gulf.",
  "We’ve lived the challenges — and built the solution we wished existed.",
];

export default function Story() {
  return (
    <section aria-labelledby="our-story">
      <h2 id="our-story" className="font-display text-3xl md:text-4xl font-semibold mb-6">Our Story</h2>
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 items-start">
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
        <div className="relative rounded-2xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] aspect-[4/3]">
          <Image src="/about/story.jpg" alt="Founding and early operations" fill className="object-cover" />
        </div>
      </div>
    </section>
  );
}




