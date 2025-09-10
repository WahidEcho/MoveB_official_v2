import { CardGlass } from "@/components/common/CardGlass";
import { ArrowRight, Users2, Ticket, Cpu, Megaphone } from "lucide-react";

const services = [
  { title: "Sports & Events Consulting", icon: Users2, href: "/services/consulting", blurb: "Strategy, governance, feasibility, partnerships." },
  { title: "Event Operations & Delivery", icon: Ticket, href: "/services/event-operations", blurb: "Venue readiness, logistics, accreditation, workforce." },
  { title: "Digital Solutions", icon: Cpu, href: "/services/digital", blurb: "Pass App, ticketing, finance, analytics, dashboards." },
  { title: "Brand & Media", icon: Megaphone, href: "/services/brand-media", blurb: "Websites, comms, content, VIP protocol." },
];

export default function ServicesTeaser() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">What We Do</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ title, icon: Icon, href, blurb }) => (
            <a key={title} href={href} className="group">
              <CardGlass className="p-6 h-full transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
                <h3 className="mt-4 text-lg font-semibold relative">
                  {title}
                  {/* underline trace */}
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-0 group-hover:w-full bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] rounded-full transition-all duration-500" />
                </h3>
                <p className="mt-2 text-sm text-[var(--mb-muted)]">{blurb}</p>
                <div className="mt-4 inline-flex items-center text-[var(--mb-text)]">
                  Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </CardGlass>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}


