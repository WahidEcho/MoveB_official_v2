import CaseCard from "@/app/case-studies/components/CaseCard";

const items = [
  { href: "/case-studies/levels-academy", title: "Levels Academy", sub: "Conflict‑free scheduling and faster ops with real‑time finance", img: "/case-studies/levels/cover.jpg" },
  { href: "/case-studies/insomnia-vr-activation", title: "Insomnia VR Activation", sub: "Playable VR tour of the festival", img: "/case-studies/insomnia/cover.jpg" },
  { href: "/case-studies/bue-qr-ticketing", title: "BUE | Passaire QR", sub: "Frictionless access with online QR", img: "/case-studies/bue/cover.jpg" },
];

export default function CaseTeaser() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Recent Case Studies</h2>
          <a href="/case-studies" className="text-sm underline underline-offset-4">See all</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <CaseCard key={c.href} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}


