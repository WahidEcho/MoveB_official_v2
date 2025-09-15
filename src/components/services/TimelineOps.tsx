import { Card } from "@/components/ui/card";
import { Building2, BadgeCheck, Shield, Bus, Users, Crown } from "lucide-react";

const items = [
  { icon: Building2, title: "Venue Readiness", text: "Site checks, readiness, load‑in/out plans." },
  { icon: BadgeCheck, title: "Accreditation & Access", text: "Zones, passes, validation workflows." },
  { icon: Shield, title: "Security & Safety Liaison", text: "Perimeters, emergency, compliance." },
  { icon: Bus, title: "Transport & Logistics", text: "Routes, last‑mile, parking strategy." },
  { icon: Users, title: "Volunteers & Workforce", text: "Recruit, schedule, brief, support." },
  { icon: Crown, title: "Hospitality & Protocol", text: "VIP, delegations, guest journeys." },
];

export default function TimelineOps() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="relative ml-3 before:absolute before:left-[10px] before:top-0 before:bottom-0 before:w-[2px] before:bg-[var(--mb-border)]">
        <div className="space-y-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="relative pl-10">
              <div className="absolute left-0 top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-[var(--mb-primary)] to-[var(--mb-primary-2)] shadow" />
              <Card className="bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-[var(--mb-primary-2)]" />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="mt-1 text-[var(--mb-muted)]">{text}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







