"use client";
import Image from "next/image";
import { useState } from "react";

// Expect these logo files under /public/Logos/
const logos = [
  "/Logos/bme2.png",
  "/Logos/bue2.png",
  "/Logos/circlek2.png",
  "/Logos/coventry2.png",
  "/Logos/explorex.png",
  "/Logos/insomnia.png",
  "/Logos/nove.png",
  "/Logos/tca2.png",
  "/Logos/unipal.png",
];

export default function LogoStrip() {
  const [paused, setPaused] = useState(false);
  // Duplicate to give a seamless loop feel (50% shift)
  const slides = [...logos, ...logos];

  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <div
              className="flex items-center gap-5 will-change-transform"
              style={{
                animation: "logo-scroll 8s linear infinite",
                animationPlayState: paused ? "paused" : "running",
              }}
            >
              {slides.map((src, i) => (
                <div key={`${src}-${i}`} className="shrink-0 basis-auto">
                  <div className="relative w-[400px] h-[200px] opacity-75 hover:opacity-100 transition" aria-label="logo">
                    <Image src={src} alt="Partner logo" fill className="object-contain" unoptimized />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


