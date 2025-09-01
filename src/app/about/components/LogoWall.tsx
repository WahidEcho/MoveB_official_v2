"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";

const logos = [
  { src: "/about/logos/gov-eg.svg", name: "Government Partner (EG)" },
  { src: "/about/logos/levels.svg", name: "Levels Academy" },
  { src: "/about/logos/ihf.svg", name: "IHF Club World Cup" },
  { src: "/about/logos/epl.svg", name: "EPL Egypt System" },
  { src: "/about/logos/layali.svg", name: "Layali Misr" },
  { src: "/about/logos/judo.svg", name: "Arab Judo" },
  { src: "/about/logos/clubx.svg", name: "Club X" },
  { src: "/about/logos/fedy.svg", name: "Federation Y" },
  { src: "/about/logos/megaz.svg", name: "Mega Event Z" },
];

export default function LogoWall() {
  return (
    <section aria-labelledby="logos">
      <h2 id="logos" className="font-display text-3xl md:text-4xl font-semibold mb-6">Who We’ve Worked With</h2>
      <Card className="bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
        <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
          {logos.map((l) => (
            <div key={l.name} className="opacity-70 hover:opacity-100 transition" aria-label={l.name}>
              <div className="relative w-28 h-12">
                <Image src={l.src} alt={l.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}



