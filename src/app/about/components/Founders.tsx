export default function Founders() {
  const founders = [
    { name: "Belal Helbawey", role: "CEO (Events & Operations)" },
    { name: "Mohamed Wahid", role: "CTO (Systems & Digital)" },
  ];
  return (
    <section aria-labelledby="founders">
      <h2 id="founders" className="font-display text-3xl md:text-4xl font-semibold mb-6">Founders</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {founders.map((f) => (
          <div key={f.name} className="rounded-2xl border border-[var(--mb-border)] p-6 bg-[var(--mb-surface)]">
            <h3 className="font-display text-xl">{f.name}</h3>
            <p className="text-[var(--mb-muted)]">{f.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}



