"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

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
          ref={containerRef}
          initial={{opacity:0,scale:0.98}}
          whileInView={{opacity:1,scale:1}}
          whileHover={{scale:1.02, y:-4}}
          viewport={{once:true, margin:"-20%"}}
          transition={{duration:0.5, delay:0.1}}
          className={`relative h-64 md:h-80 rounded-2xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] cursor-pointer group service-card ${reverse ? "lg:order-1" : "lg:order-2"}`}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Full-size SVG container */}
          <motion.div
            className="absolute inset-0 w-full h-full service-image"
            whileHover={{scale:1.05}}
            transition={{duration:0.3}}
          >
            <Image src={img} alt="" fill className="object-cover w-full h-full" />
          </motion.div>
          
          {/* Mouse cursor follower */}
          <motion.div
            className="absolute w-8 h-8 rounded-full pointer-events-none z-20"
            style={{
              background: `radial-gradient(circle, rgba(96,165,250,0.6) 0%, rgba(96,165,250,0.3) 50%, transparent 100%)`,
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 1 : 0, 
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 360 : 0
            }}
            transition={{ duration: 0.3, rotate: { duration: 2, repeat: Infinity, ease: "linear" } }}
          />
          
          {/* Cursor trail effect */}
          <motion.div
            className="absolute w-4 h-4 rounded-full pointer-events-none z-15"
            style={{
              background: `rgba(34, 211, 238, 0.4)`,
              left: `${mousePosition.x}%`,
              top: `${mousePosition.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: isHovered ? 0.7 : 0, 
              scale: isHovered ? 1.5 : 0
            }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />
          
          {/* Interactive hover overlay with gradient following cursor */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(96,165,250,0.15) 0%, rgba(34,211,238,0.1) 30%, transparent 70%)`
            }}
            transition={{duration:0.3}}
          />
          
          {/* Enhanced floating particles that follow mouse */}
          <motion.div
            className="absolute w-2 h-2 bg-[var(--mb-primary-2)] rounded-full opacity-0 group-hover:opacity-70 pointer-events-none"
            style={{
              left: `${Math.min(mousePosition.x + 10, 90)}%`,
              top: `${Math.min(mousePosition.y - 10, 90)}%`,
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{duration:2, repeat:Infinity, ease:"easeInOut"}}
          />
          <motion.div
            className="absolute w-1.5 h-1.5 bg-[var(--mb-accent)] rounded-full opacity-0 group-hover:opacity-60 pointer-events-none"
            style={{
              left: `${Math.max(mousePosition.x - 15, 10)}%`,
              top: `${Math.min(mousePosition.y + 15, 85)}%`,
            }}
            animate={{
              y: [0, -8, 0],
              x: [0, -3, 0],
              rotate: [0, 180, 360]
            }}
            transition={{duration:2.5, repeat:Infinity, ease:"easeInOut", delay:0.5}}
          />
          <motion.div
            className="absolute w-1 h-1 bg-[var(--mb-primary)] rounded-full opacity-0 group-hover:opacity-50 pointer-events-none"
            style={{
              left: `${mousePosition.x + 5}%`,
              top: `${mousePosition.y + 20}%`,
            }}
            animate={{
              y: [0, -6, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{duration:3, repeat:Infinity, ease:"easeInOut", delay:1}}
          />
          
          {/* Corner accent lights that react to mouse */}
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x/5}% ${mousePosition.y/5}%, rgba(96,165,250,0.3) 0%, transparent 70%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0.3,
              scale: isHovered ? 1.2 : 1
            }}
            transition={{duration:0.4}}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none"
            style={{
              background: `radial-gradient(circle at ${100-mousePosition.x/5}% ${100-mousePosition.y/5}%, rgba(34,211,238,0.25) 0%, transparent 70%)`,
            }}
            animate={{
              opacity: isHovered ? 1 : 0.2,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{duration:0.4, delay:0.1}}
          />
        </motion.div>
      </div>
    </section>
  );
}


