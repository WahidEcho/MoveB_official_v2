"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/passapp/01.jpg", caption: "Pass App — overview" },
  { src: "/passapp/02.jpg", caption: "Smart ticketing" },
  { src: "/passapp/03.jpg", caption: "Fast entry scanning" },
  { src: "/passapp/04.jpg", caption: "Live tracking & headcount" },
  { src: "/passapp/05.jpg", caption: "Vouchers & perks" },
  { src: "/passapp/06.jpg", caption: "Finance & P&L snapshots" },
  { src: "/passapp/07.jpg", caption: "Analytics dashboards" },
  { src: "/passapp/08.jpg", caption: "Membership hub" },
  { src: "/passapp/09.jpg", caption: "Admin controls" },
];

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()]);
  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-4">Pass App in Pictures</h3>
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)]">
          <div className="flex">
            {slides.map((s) => (
              <figure key={s.src} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[16/10]">
                  <Image src={s.src} alt={s.caption} fill className="object-cover" unoptimized />
                </div>
                <figcaption className="p-3 text-sm text-[var(--mb-muted)]">{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button aria-label="Previous" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2"> <ChevronLeft className="w-5 h-5" /> </button>
        <button aria-label="Next" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2"> <ChevronRight className="w-5 h-5" /> </button>
      </div>
    </section>
  );
}





