export default function Values() {
  const values = ["Clarity", "Efficiency", "Insight-Driven", "Learning-First", "Partnership"];
  return (
    <section aria-labelledby="values">
      <h2 id="values" className="font-display text-3xl md:text-4xl font-semibold mb-6">Core Values</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 text-sm">
        {values.map((v) => (
          <div key={v} className="rounded-xl border border-[var(--mb-border)] p-4 bg-[var(--mb-surface)]">
            {v}
          </div>
        ))}
      </div>
    </section>
  );
}



