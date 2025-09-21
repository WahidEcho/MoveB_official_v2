"use client";
import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { src: "/about/carousel/Levels.jpg", title: "Levels Academy", caption: "Conflict‑free scheduling & finance clarity" },
  { src: "/about/carousel/BankDuCaire.jpg", title: "Festival", caption: "Immersive fan quests & sponsor activations" },
  { src: "/about/carousel/Insomnia.jpg", title: "Illusionaire VR Activation", caption: "Immersive fan quests & sponsor activations" },
  { src: "/about/carousel/BankDuCaire2.jpg", title: "Concerts & Mega‑events", caption: "Accreditation, production, and on‑site operations" },
  { src: "/about/carousel/ExploreX.jpg", title: "ExploreX", caption: "Digital engagement & interactive experiences" },
  { src: "/about/carousel/Unipal.jpg", title: "Unipal", caption: "Student engagement activations" },
  { src: "/about/carousel/Unipal2.jpg", title: "Unipal (On‑site)", caption: "Live ops & brand zones" },
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
              <figure key={s.src} className="relative min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="relative aspect-[16/9]">
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




