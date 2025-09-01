"use client";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/about/carousel/gpa-visit.svg", title: "GPA Visit – Cairo", caption: "Ops planning & stakeholder liaison (2025)" },
  { src: "/about/carousel/levels.svg", title: "Levels Academy", caption: "Scheduling & finance visibility improvements" },
  { src: "/about/carousel/ihf.svg", title: "IHF Club World Cup", caption: "Venue readiness & day‑of delivery" },
  { src: "/about/carousel/epl.svg", title: "EPL Announcement", caption: "Venue preparation & protocol" },
  { src: "/about/carousel/layali.svg", title: "Layali Misr Concerts", caption: "Crowd flow & access planning" },
  { src: "/about/carousel/judo.svg", title: "Arab Judo Championship", caption: "Competition ops support" },
];

export default function GalleryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay()]);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  return (
    <section aria-labelledby="gallery">
      <h2 id="gallery" className="font-display text-3xl md:text-4xl font-semibold mb-6">Latest Events & Work</h2>
      <div className="relative">
        <div
          className="overflow-hidden rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] backdrop-blur"
          ref={emblaRef}
        >
          <div className="flex">
            {slides.map((s) => (
              <figure
                key={s.src}
                className="relative min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>
                <figcaption className="p-4 text-sm">
                  <div className="font-semibold">{s.title}</div>
                  <div className="text-[var(--mb-muted)]">{s.caption}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <button
          aria-label="Previous"
          onClick={scrollPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2 backdrop-blur"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          aria-label="Next"
          onClick={scrollNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2 backdrop-blur"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}



