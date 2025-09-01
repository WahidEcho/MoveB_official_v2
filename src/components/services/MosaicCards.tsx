import { MonitorSmartphone, PenTool, Camera, Share2, Crown } from "lucide-react";

const items = [
  { icon: MonitorSmartphone, title: "Websites & Apps", text: "High‑performance, multilingual experiences." },
  { icon: PenTool, title: "Content & Storytelling", text: "Narratives that inspire and convert." },
  { icon: Camera, title: "Media Ops", text: "Press flows, mixed zones, accreditation." },
  { icon: Share2, title: "Comms Workflow", text: "Channels, roles, approval governance." },
  { icon: Crown, title: "VIP Protocol", text: "Flawless guest journeys and protocol." },
];

export default function MosaicCards() {
  return (
    <section className="container mx-auto px-6 py-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(({ icon: Icon, title, text }) => (
          <div
            key={title}
            className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6 backdrop-blur hover:translate-y-[-2px] transition"
          >
            <Icon className="w-6 h-6 text-[var(--mb-accent)]" />
            <h3 className="mt-3 text-lg font-semibold">{title}</h3>
            <p className="text-[var(--mb-muted)] mt-1">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



