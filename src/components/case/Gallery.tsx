"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery({ images }:{ images:{src:string; caption?:string}[] }) {
  const [ref, api] = useEmblaCarousel({ loop:true, align:"start" }, [Autoplay()]);
  const prev = useCallback(()=>api?.scrollPrev(),[api]);
  const next = useCallback(()=>api?.scrollNext(),[api]);
  return (
    <div className="relative">
      <div ref={ref} className="overflow-hidden rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)]">
        <div className="flex">
          {images.map(img => (
            <figure key={img.src} className="min-w-0 grow-0 shrink-0 basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[16/10]">
                <Image src={img.src} alt={img.caption ?? "Case image"} fill className="object-cover" unoptimized />
              </div>
              {img.caption && <figcaption className="p-3 text-sm text-[var(--mb-muted)]">{img.caption}</figcaption>}
            </figure>
          ))}
        </div>
      </div>
      <button aria-label="Previous" onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2"><ChevronLeft className="w-5 h-5"/></button>
      <button aria-label="Next" onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] p-2"><ChevronRight className="w-5 h-5"/></button>
    </div>
  );
}





