export default function CtaStrip({
  title = "Ready to Move Beyond?",
  primary = { label: "Request a Proposal", href: "/rfp" },
  secondary = { label: "Contact Us", href: "/contact" },
}: {
  title?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl md:text-3xl font-semibold">{title}</h3>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            className="px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)] text-white"
            href={primary.href}
          >
            {primary.label}
          </a>
          <a
            className="px-6 py-4 rounded-xl border border-[var(--mb-border)] text-[var(--mb-text)] backdrop-blur"
            href={secondary.href}
          >
            {secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}



