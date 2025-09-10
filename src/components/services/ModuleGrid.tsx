import { Cpu, BarChart3, CreditCard, Link2 } from "lucide-react";

const modules = [
  {
    icon: Cpu,
    title: "Pass App",
    lead: "Ticketing, entry, memberships",
    details: ["QR/Barcode entry", "Membership renewals", "Vouchers & perks"],
  },
  {
    icon: BarChart3,
    title: "Live Analytics",
    lead: "Dashboards & KPIs",
    details: ["Attendance funnels", "Repeat rates", "Heat times"],
  },
  {
    icon: CreditCard,
    title: "Finance",
    lead: "P&L snapshots, settlement",
    details: ["Revenue by event", "Refunds & expenses", "Exports"],
  },
  {
    icon: Link2,
    title: "Integrations",
    lead: "APIs & data pipes",
    details: ["ERP/CRM hooks", "SSO/roles", "Data warehouse"],
  },
];

export default function ModuleGrid() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map(({ icon: Icon, title, lead, details }) => (
          <div
            key={title}
            className="group rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] backdrop-blur p-5 overflow-hidden transition hover:shadow-[0_0_24px_rgba(0,194,255,0.25)]"
          >
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="mt-2 text-sm text-[var(--mb-muted)]">{lead}</p>
            <ul className="mt-3 space-y-2 max-h-0 group-hover:max-h-40 transition-[max-height] duration-500 ease-out">
              {details.map((d) => (
                <li key={d} className="text-sm">
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-3 h-0 group-hover:h-10 transition-[height] duration-500 ease-out">
              <a
                href="/pass-app"
                className="inline-block text-sm underline underline-offset-4 text-[var(--mb-text)] opacity-0 group-hover:opacity-100 transition"
              >
                Learn more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}





