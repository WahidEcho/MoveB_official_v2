import ServicesHero from "./components/ServicesHero";
import HalfBlock from "./components/HalfBlock";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Services | Move Beyond",
  description:
    "Move Beyond delivers digital innovation, event management, and sports consultancy for academies, federations, and organizers.",
};

const services = [
  {
    title: "Custom Websites & Apps",
    text: "Tailored digital platforms for sports organizations.",
    bullets: [
      "High-performance websites for academies, clubs & federations",
      "Mobile apps for scheduling, communication & fan engagement",
      "E-commerce integrations (registrations, payments, merchandise)",
      "Multilingual and accessible design",
    ],
    why: "Your digital presence is the front door of your academy or event. We make it fast, elegant, and effective.",
    img: "/services/webapps.jpg",
  },
  {
    title: "Pass App (Ticketing & Access)",
    text: "Our proprietary Pass App redefines ticketing, entry, and memberships.",
    bullets: [
      "QR-based ticketing & secure access",
      "Membership & subscription management",
      "Vouchers & perks (gifts, discounts, drinks)",
      "Real-time entry tracking & analytics",
      "Finance & revenue dashboards",
    ],
    why: "Trusted at events like BUE, Pass App ensures smooth gates, transparent data, and happy attendees.",
    img: "/services/passapp.jpg",
  },
  {
    title: "SaaS Academy Management Platform",
    text: "An all-in-one system designed for sports academies.",
    bullets: [
      "Scheduling & reservations (conflict-free)",
      "Staff & coach management",
      "Finance tracking (payments, expenses, revenue snapshots)",
      "Attendance & performance analytics",
      "Parent-friendly communication & invoicing",
    ],
    why: "Proven with Levels Academy, this platform saves time, eliminates double-bookings, and boosts financial clarity.",
    img: "/services/saas.jpg",
  },
  {
    title: "Event Management & Production",
    text: "End-to-end support for sports and entertainment events.",
    bullets: [
      "Concept design & planning",
      "Venue booking & logistics coordination",
      "Accreditation & access control",
      "Security liaison, staffing & volunteer management",
      "Stage design, lighting, sound & AV systems",
      "Live streaming & broadcast support",
      "Fan engagement zones & sponsor activations",
      "On-site technical & operational management",
    ],
    why: "From intimate academy showcases to large-scale concerts and mega-sporting events, we ensure flawless operations and world-class production.",
    img: "/services/events.jpg",
  },
  {
    title: "Sports Tech Integration & VR Activations",
    text: "Cutting-edge solutions to elevate events and fan engagement.",
    bullets: [
      "VR activations (immersive event experiences, sponsor quests, interactive fan zones)",
      "Digital fan engagement campaigns",
      "Integrations with existing ticketing or federation systems",
      "Custom dashboards for operations & live monitoring",
    ],
    why: "From Insomnia VR Activation to multi-venue monitoring, we merge creativity with technology to create unforgettable experiences.",
    img: "/services/vr.jpg",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <ServicesHero />
      <div className="space-y-6">
        {services.map((s, i) => (
          <HalfBlock key={s.title} {...s} reverse={i % 2 === 1} />
        ))}
      </div>
      <CtaStrip title="Ready to Move Beyond?" primary={{label:"Request a Proposal", href:"/rfp"}} secondary={{label:"Book a Demo", href:"/contact?type=demo"}} />
    </main>
  );
}


