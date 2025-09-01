import Image from "next/image";
export default function CaseCard({ href, title, sub, img }:{ href:string; title:string; sub:string; img:string }) {
  return (
    <a href={href} className="group block rounded-3xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition">
      <div className="relative h-56">
        <Image src={img} alt={title} fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--mb-bg-0)]/70 via-transparent" aria-hidden="true"/>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-[var(--mb-muted)] mt-1">{sub}</p>
      </div>
    </a>
  );
}

