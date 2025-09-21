export default function InsightsTeaser() {
  const posts = [
    { slug: "/insights/policy-and-governance", title: "Policy as a Competitive Advantage", summary: "Why clear governance accelerates delivery" },
    { slug: "/insights/ops-checklist", title: "Event Ops Checklist", summary: "Readiness from accreditation to transport" },
  ];
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl md:text-4xl font-semibold">Insights</h2>
          <a href="/insights" className="text-sm underline underline-offset-4">See all</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 gap-6">
          {posts.map((p) => (
            <a key={p.slug} href={p.slug} className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6 backdrop-blur hover:shadow-[0_0_24px_rgba(6,86,255,0.25)] transition">
              <div className="text-lg font-semibold">{p.title}</div>
              <div className="text-sm text-[var(--mb-muted)] mt-1">{p.summary}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}







