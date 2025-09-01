import { ShieldCheck, Users2, Cpu, Globe2 } from "lucide-react";
import { CardGlass } from "@/components/common/CardGlass";

const items = [
  { title: "Government Liaison", icon: ShieldCheck, hint: "Compliance & permits" },
  { title: "Elite Event Ops", icon: Users2, hint: "Workforce & logistics" },
  { title: "Data & Digital", icon: Cpu, hint: "Dashboards & finance" },
  { title: "MENA & Gulf Focus", icon: Globe2, hint: "Regional expertise" },
];

export default function Trust() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map(({ title, icon: Icon, hint }) => (
            <CardGlass key={title} className="relative p-4">
              <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] opacity-15 blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface-2)]">
                  <Icon className="w-5 h-5 text-[var(--mb-primary)]" />
                </div>
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-xs text-[var(--mb-muted)]">{hint}</div>
                </div>
              </div>
            </CardGlass>
          ))}
        </div>
      </div>
    </section>
  );
}



