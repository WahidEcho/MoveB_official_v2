
export default function PassAppTeaser() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold">Pass App</h2>
            <p className="mt-3 text-[var(--mb-muted)] max-w-2xl">Digital passes for ticketing, entry, vouchers, memberships, finance, and analytics.</p>
            <div className="mt-5 flex gap-3">
              <a className="px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] text-white" href="/pass-app">Explore</a>
              <a className="px-5 py-3 rounded-xl border border-[var(--mb-border)]" href="/contact?type=demo">Request a Demo</a>
            </div>
          </div>
          <div className="lg:pl-4">
            <h3 className="font-display text-3xl md:text-4xl font-semibold">Built for real gates</h3>
            <ul className="mt-4 space-y-3 text-[var(--mb-muted)]">
              <li>Instant QR validation</li>
              <li>Anti‑fraud checks & revocation</li>
              <li>Offline queue for poor connectivity</li>
              <li>Role‑based access for stewards</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


