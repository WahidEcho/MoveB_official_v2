import Image from "next/image";
export default function CaseCard({ href, title, sub, img, logo, coverLogo }:{ href:string; title:string; sub:string; img:string; logo?: string; coverLogo?: boolean }) {
  return (
    <a href={href} className="group block rounded-3xl overflow-hidden border border-[var(--mb-border)] bg-[var(--mb-surface)] hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition relative">
      {/* Logo badge when not using full-cover logo */}
      {!coverLogo && logo && (
        <div className="absolute z-10 top-3 left-3 w-12 h-12 rounded-2xl bg-white/90 backdrop-blur border border-[var(--mb-border)] shadow-[0_6px_20px_rgba(0,0,0,0.12)] grid place-items-center overflow-hidden">
          <div className="relative w-9 h-9">
            <Image src={logo} alt="Logo" fill className="object-contain" unoptimized />
          </div>
        </div>
      )}
      <div className="relative h-56">
        {coverLogo && logo ? (
          <>
            <div className="absolute inset-0" style={{ background: "var(--mb-card-logo-bg)" }} />
            <Image src={logo} alt={title} fill className="object-contain p-6" unoptimized />
          </>
        ) : (
          <>
            <Image src={img} alt={title} fill className="object-cover" unoptimized />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--mb-bg-0)]/70 via-transparent" aria-hidden="true"/>
          </>
        )}
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-[var(--mb-muted)] mt-1">{sub}</p>
      </div>
    </a>
  );
}


