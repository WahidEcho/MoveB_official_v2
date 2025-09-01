import ModuleGrid from "@/components/services/ModuleGrid";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Digital Solutions | Move Beyond",
  description: "Pass App, ticketing, entry, analytics, finance, dashboards, integrations.",
};

export default function DigitalPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="py-20 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-bold">Digital Solutions</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl mx-auto">
          Our platforms put you in control—ticketing, finance, entry, analytics.
        </p>
      </section>
      <ModuleGrid />
      <section className="container mx-auto px-6 pb-6">
        <h2 className="sr-only">Digital Deliverables</h2>
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1">
          <li>Ticketing & access setup (Pass App)</li>
          <li>Finance dashboards & settlement views</li>
          <li>Command centers & live KPIs</li>
          <li>API integrations with existing systems</li>
        </ul>
      </section>
      <CtaStrip
        title="See the Pass App in action"
        primary={{ label: "Explore Pass App", href: "/pass-app" }}
        secondary={{ label: "Talk to an Expert", href: "/contact" }}
      />
    </main>
  );
}


