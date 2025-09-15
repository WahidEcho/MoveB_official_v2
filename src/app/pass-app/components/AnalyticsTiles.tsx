import { Card } from "@/components/ui/card";

const tiles = [
  { label: "Attendance funnel", value: "Issued → Checked‑in 82%" },
  { label: "Spend per head", value: "$17.40" },
  { label: "Repeat visits", value: "34%" },
  { label: "Busiest hour", value: "19:00–20:00" },
  { label: "Export", value: "Settlement CSV / PDF" },
];

export default function AnalyticsTiles() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tiles.map((t) => (
          <Card key={t.label} className="p-6 bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
            <div className="text-sm text-[var(--mb-muted)]">{t.label}</div>
            <div className="text-2xl font-semibold mt-2">{t.value}</div>
          </Card>
        ))}
      </div>
    </section>
  );
}







