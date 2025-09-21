export default function StatBar({ stats }:{ stats:{label:string; value:string}[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(s=> (
        <div key={s.label} className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-5 text-center">
          <div className="text-3xl font-bold">{s.value}</div>
          <div className="text-sm text-[var(--mb-muted)] mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}






