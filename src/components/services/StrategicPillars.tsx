import { Card } from "@/components/ui/card";
import { Compass, Scale, FileText, Users } from "lucide-react";

const pillars = [
  { icon: Compass, title: "Strategy & Roadmaps", text: "Audits, vision, long‑term planning." },
  { icon: Scale, title: "Governance & Compliance", text: "Transparent models, risk frameworks." },
  { icon: FileText, title: "Feasibility & Financial Models", text: "Market sizing, P&L, investment cases." },
  { icon: Users, title: "Bids & Partnerships", text: "Tender prep, sponsor mapping, alliances." },
];

export default function StrategicPillars() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((p) => (
          <Card
            key={p.title}
            className="bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur p-6 hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition"
          >
            <p.icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="text-[var(--mb-muted)] mt-1">{p.text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}





