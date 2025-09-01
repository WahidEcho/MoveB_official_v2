import ServiceBlock from "./components/ServiceBlock";
import CtaStrip from "@/components/home/CtaStrip";

export const metadata = {
  title: "Services | Move Beyond",
  description:
    "Consulting-first sports & events partner with elite operations and modern digital capabilities.",
};

const services = [
  {
    id: "consulting",
    title: "Sports & Events Consulting",
    text:
      "Strategic insight for federations, governments, clubs, and investors. We guide projects from feasibility to execution.",
    bullets: [
      "Audits & strategy roadmaps",
      "Governance frameworks & compliance",
      "Feasibility studies & financial models",
      "Bid/tender preparation & partner mapping",
    ],
    image: "/services/consulting.jpg",
    cta: { label: "Request a Proposal", href: "/rfp" },
  },
  {
    id: "operations",
    title: "Event Operations & Delivery",
    text: "End-to-end operational mastery to ensure venues, people, and logistics align seamlessly.",
    bullets: [
      "Master schedules & critical path",
      "Venue readiness & accreditation",
      "Security & government liaison",
      "Transport, hospitality, workforce planning",
    ],
    image: "/services/operations.jpg",
    cta: { label: "Talk to an Expert", href: "/contact" },
  },
  {
    id: "digital",
    title: "Digital Solutions",
    text:
      "Our Pass App and digital dashboards give you control over ticketing, entry, finance, and live analytics.",
    bullets: [
      "Pass App (ticketing, entry, membership)",
      "Real-time analytics & dashboards",
      "Finance & revenue visibility",
      "Systems integration",
    ],
    image: "/services/digital.jpg",
    cta: { label: "Explore Pass App", href: "/pass-app" },
  },
  {
    id: "brand",
    title: "Brand & Media",
    text: "We help your brand shine with digital presence, media operations, and VIP protocol.",
    bullets: [
      "Websites & apps",
      "Media ops & comms workflows",
      "Content & storytelling",
      "VIP & protocol management",
    ],
    image: "/services/brand.jpg",
    cta: { label: "Contact Us", href: "/contact" },
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="py-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Our Services</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl mx-auto">
          Consulting-first sports & events partner with elite operations and modern digital capabilities.
        </p>
      </section>
      <div className="space-y-20">
        {services.map((s, i) => (
          <ServiceBlock key={s.id} service={s} reverse={i % 2 === 1} />
        ))}
      </div>
      <CtaStrip />
    </main>
  );
}


