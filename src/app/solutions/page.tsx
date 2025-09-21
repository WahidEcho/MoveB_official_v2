import CaseCard from "./components/CaseCard";

export const metadata = {
  title: "Solutions | Move Beyond",
  description: "Sports & events consulting, operations, and digital solutions.",
};

const cases = [
  { href: "/solutions/saas-academy-management-platform", title: "SaaS Academy Management Platform", sub: "Conflict‑free scheduling and faster ops with real‑time finance", img: "/case-studies/levels/cover.jpg", logo: "/case-studies/levels/levelslogo.png", coverLogo: true },
  { href: "/solutions/illusionaire", title: "Illusionaire (VR Activation)", sub: "Virtual Illusionaire: a playable VR tour of the festival", img: "/case-studies/illusionaire/cover.jpg" },
  { href: "/solutions/bue-qr-ticketing", title: "BUE | Passaire QR Ticketing", sub: "Frictionless access with online QR and live tracking", img: "/case-studies/bue/cover.jpg" },
];

export default function SolutionsIndex() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="py-20 container mx-auto px-6">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Solutions</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl">Selected solutions across consulting, operations, and digital activations.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <CaseCard key={c.href} {...c} />
          ))}
        </div>
      </section>
    </main>
  );
}


