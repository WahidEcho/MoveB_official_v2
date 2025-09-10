export default function Values() {
  const values = [
    { name: "Clarity", desc: "Transparent ops and decision-making." },
    { name: "Efficiency", desc: "Do more with fewer resources." },
    { name: "Insight", desc: "Data-first and measurable outcomes." },
    { name: "Learning", desc: "Iterate and improve continuously." },
    { name: "Partnership", desc: "Long-term value with clients." },
  ];
  return (
    <section aria-labelledby="values">
      <h2 id="values" className="font-display text-3xl md:text-4xl font-semibold mb-6">Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
        {values.map((v) => (
          <div key={v.name} className="rounded-xl border border-[var(--mb-border)] p-4 bg-[var(--mb-surface)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(96,165,250,0.25)]">
            <div className="text-base font-semibold">{v.name}</div>
            <div className="mt-1 text-[var(--mb-muted)]">{v.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}




