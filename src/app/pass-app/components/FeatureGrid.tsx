import { Card } from "@/components/ui/card";
import { Ticket, ScanLine, Activity, Gift, Wallet, BarChart3 } from "lucide-react";

const items = [
  { icon: Ticket, title: "Smart ticketing", text: "Digital tickets & passes with fraud checks." },
  { icon: ScanLine, title: "Fast entry", text: "QR/Barcode scanning with offline queue." },
  { icon: Activity, title: "Live tracking & headcount", text: "Real‑time attendance & capacity views." },
  { icon: Gift, title: "Vouchers & perks", text: "Drinks, gifts, discounts—single/multi‑use rules." },
  { icon: Wallet, title: "Finance & P&L snapshots", text: "Transparent revenue, refunds, expenses." },
  { icon: BarChart3, title: "Analytics", text: "Funnels, repeat rates, peak hours." },
];

export default function FeatureGrid() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <Card key={title} className="p-6 bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition">
            <Icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-[var(--mb-muted)]">{text}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}





