export default function CtaStrip() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface-2)] p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl">Ready to plan or deliver your next event?</h3>
            <p className="text-[var(--mb-muted)] mt-1">Talk to our consulting team or request a proposal.</p>
          </div>
          <div className="flex gap-3">
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]" href="/rfp">Request a Proposal</a>
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)]" href="/contact">Contact</a>
            <a className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[var(--mb-border)] text-[var(--mb-text)] bg-[var(--mb-surface)]" href="/contact?type=demo">Book a Demo</a>
          </div>
        </div>
      </div>
    </section>
  );
}



