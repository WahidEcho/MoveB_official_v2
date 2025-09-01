import TimelineOps from "@/components/services/TimelineOps";
import KpiCounters from "@/components/services/KpiCounters";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Event Operations & Delivery | Move Beyond",
  description:
    "Seamless end‑to‑end operations—venue readiness, accreditation, security, transport, workforce.",
};

export default function EventOpsPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="relative py-20 text-center">
        <div
          className="absolute inset-0 -z-10 opacity-25 bg-[url('/services/stadium.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-[var(--mb-bg-0)]/70" aria-hidden="true" />
        <h1 className="font-display text-4xl md:text-6xl font-bold">Event Operations & Delivery</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl mx-auto">
          Seamless end‑to‑end operations—from venue readiness to hospitality and workforce.
        </p>
      </section>
      <TimelineOps />
      <KpiCounters />
      <section className="container mx-auto px-6 pb-6">
        <h2 className="sr-only">Operations Deliverables</h2>
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1">
          <li>Master schedules & day‑of run sheets</li>
          <li>Readiness reports & accreditation plans</li>
          <li>Operational playbooks & command room SOPs</li>
        </ul>
      </section>
      <CtaStrip
        title="Need flawless delivery?"
        primary={{ label: "Talk to an Expert", href: "/contact" }}
        secondary={{ label: "Request a Proposal", href: "/rfp" }}
      />
    </main>
  );
}


