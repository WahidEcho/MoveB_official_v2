import StrategicPillars from "@/components/services/StrategicPillars";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Sports & Events Consulting | Move Beyond",
  description: "Strategy, governance, feasibility, and partnerships for elite sports & events.",
};

export default function ConsultingPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="py-20 text-center bg-gradient-to-b from-[var(--mb-bg-0)] to-[var(--mb-bg-1)]">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Sports & Events Consulting</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl mx-auto">
          We bring clarity and strategy to federations, governments, and clubs, helping them navigate governance, feasibility, and partnerships.
        </p>
      </section>
      <StrategicPillars />
      <section className="container mx-auto px-6 pb-6">
        <h2 className="sr-only">Consulting Deliverables</h2>
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1">
          <li>Strategic audits & roadmaps</li>
          <li>Governance models & compliance frameworks</li>
          <li>Feasibility studies & financial models</li>
          <li>Bid preparation & partner mapping</li>
        </ul>
      </section>
      <CtaStrip />
    </main>
  );
}


