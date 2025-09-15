const steps = ["Buy", "Digital Pass (with perks)", "Scan", "Redeem", "Live dashboard"];
export default function FlowSteps() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-4">Flow</h3>
      <div className="flex flex-wrap gap-3">
        {steps.map((s, i) => (
          <span key={s} className="rounded-full border border-[var(--mb-border)] bg-[var(--mb-surface)] px-4 py-2">
            {i + 1}. {s}
          </span>
        ))}
      </div>
    </section>
  );
}







