import Image from "next/image";

export default function DeviceShowcase() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[9/16] max-w-[320px] mx-auto rounded-[2rem] border border-[var(--mb-border)] bg-[var(--mb-surface)] overflow-hidden">
          <Image src="/passapp/01.jpg" alt="Pass App device view" fill className="object-cover" unoptimized />
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Built for real gates</h3>
          <ul className="mt-4 space-y-2 text-[var(--mb-muted)]">
            <li>Instant QR validation</li>
            <li>Anti‑fraud checks & revocation</li>
            <li>Offline queue for poor connectivity</li>
            <li>Role‑based access for stewards</li>
          </ul>
        </div>
      </div>
    </section>
  );
}








