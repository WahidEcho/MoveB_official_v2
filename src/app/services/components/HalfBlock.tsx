"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HalfBlock({
  title,
  text,
  bullets,
  why,
  img,
  reverse = false,
}: {
  title: string;
  text: string;
  bullets: string[];
  why: string;
  img: string;
  reverse?: boolean;
}) {
  return (
    <section className="py-10">
      <div className={`container mx-auto px-6 grid lg:grid-cols-2 gap-8 items-center`}>
        <motion.div
          initial={{opacity:0,y:20}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true, margin:"-20%"}}
          transition={{duration:0.5}}
          className={reverse ? "lg:order-2" : "lg:order-1"}
        >
          <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
          <p className="mt-3 text-[var(--mb-muted)]">{text}</p>
          <ul className="mt-4 space-y-2 text-sm list-disc pl-5 text-[var(--mb-muted)]">
            {bullets.map((b)=> <li key={b}>{b}</li>)}
          </ul>
          <div className="mt-4 rounded-xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-4 text-sm">{why}</div>
        </motion.div>
        <motion.div
          initial={{opacity:0,scale:0.98}}
          whileInView={{opacity:1,scale:1}}
          viewport={{once:true, margin:"-20%"}}
          transition={{duration:0.5, delay:0.1}}
          className={`relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] ${reverse ? "lg:order-1" : "lg:order-2"}`}
        >
          <Image src={img} alt="" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  );
}


