"use client";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const items = [
  { href: "/solutions/saas-academy-management-platform", title: "SaaS Academy Management Platform", sub: "Conflict‑free scheduling and faster ops with real‑time finance", img: "/case-studies/levels/cover.jpg", logo: "/case-studies/levels/levelslogo.png", coverLogo: true },
  { href: "/solutions/illusionaire", title: "Illusionaire VR Activation", sub: "Playable VR tour of the festival", img: "/case-studies/illusionaire/cover.jpg" },
  { href: "/solutions/bue-qr-ticketing", title: "BUE | Passaire QR", sub: "Frictionless access with online QR", img: "/case-studies/bue/cover.jpg" },
];

export default function CaseTeaser() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", dragFree: true, loop: true });
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Recent Solutions</h2>
          <div className="flex items-center gap-3">
            <button aria-label="Previous" onClick={scrollPrev} className="h-9 w-9 grid place-items-center rounded-lg border border-[var(--mb-border)] bg-[var(--mb-surface)]">‹</button>
            <button aria-label="Next" onClick={scrollNext} className="h-9 w-9 grid place-items-center rounded-lg border border-[var(--mb-border)] bg-[var(--mb-surface)]">›</button>
            <a href="/solutions" className="text-sm underline underline-offset-4">See all</a>
          </div>
        </div>

        <div className="mt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {items.map(({ href, title, sub, img, logo, coverLogo }) => (
                <a key={href} href={href} className="group relative shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[32%] rounded-3xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition">
                  <div className="relative h-56">
                    {coverLogo && logo ? (
                      <>
                        <div className="absolute inset-0" style={{ background: "var(--mb-card-logo-bg)" }} />
                        <Image src={logo} alt={title} fill className="object-contain p-6" unoptimized />
                      </>
                    ) : (
                      <>
                        <Image src={img} alt={title} fill className="object-cover" unoptimized />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--mb-bg-0)]/80 via-transparent" aria-hidden="true"/>
                        {logo && (
                          <div className="absolute top-3 left-3 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur border border-[var(--mb-border)] shadow-[0_6px_20px_rgba(0,0,0,0.12)] grid place-items-center overflow-hidden">
                            <Image src={logo} alt="Logo" width={36} height={36} className="object-contain" unoptimized />
                          </div>
                        )}
                      </>
                    )}
                    {/* Hover slide-in text */}
                    <div className="absolute inset-x-0 bottom-0 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 p-5">
                      <h3 className="text-xl font-semibold">{title}</h3>
                      <p className="text-[var(--mb-muted)] mt-1 text-sm">{sub}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



