"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  text: string;
  bullets: string[];
  image: string;
  cta: { label: string; href: string };
}

export default function ServiceBlock({ service, reverse }: { service: Service; reverse?: boolean }) {
  return (
    <section className="container mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={reverse ? "lg:order-2" : ""}
      >
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] backdrop-blur group">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width:768px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            unoptimized
            priority={false}
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-display text-2xl md:text-3xl font-semibold">{service.title}</h2>
        <div className="mt-2 h-1 w-16 bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] rounded-full" />
        <p className="mt-4 text-[var(--mb-muted)]">{service.text}</p>
        <ul className="mt-6 space-y-3">
          {service.bullets.map((b) => (
            <li key={b} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--mb-primary-2)] mt-1" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Button asChild className="mt-6">
          <a href={service.cta.href}>{service.cta.label}</a>
        </Button>
      </motion.div>
    </section>
  );
}
