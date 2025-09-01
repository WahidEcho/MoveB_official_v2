import { CardGlass } from "@/components/common/CardGlass";

export default function ImpactTeaser() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <CardGlass className="p-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-semibold text-white">50% faster operations</div>
              <div className="text-[var(--mb-muted)] mt-1">Levels Academy</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">Zero double-bookings</div>
              <div className="text-[var(--mb-muted)] mt-1">Conflict-free scheduling</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-white">Real-time finance</div>
              <div className="text-[var(--mb-muted)] mt-1">Live dashboards</div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <a href="/case-studies" className="underline underline-offset-4">See Case Studies</a>
          </div>
        </CardGlass>
      </div>
    </section>
  );
}


