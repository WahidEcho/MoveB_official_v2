import MosaicCards from "@/components/services/MosaicCards";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Brand & Media | Move Beyond",
  description: "Websites, apps, media ops, communications, content, VIP protocol.",
};

export default function BrandMediaPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="relative py-20 text-center">
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--mb-accent)]/40 via-[var(--mb-primary)]/20 to-[var(--mb-primary-2)]/30"
          aria-hidden="true"
        />
        <h1 className="font-display text-4xl md:text-6xl font-bold">Brand & Media</h1>
        <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-2xl mx-auto">
          Make the right impression—online and on site—through modern digital presence, media workflows, and VIP protocol.
        </p>
      </section>
      <MosaicCards />
      <section className="container mx-auto px-6 pb-6">
        <h2 className="sr-only">Brand & Media Deliverables</h2>
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1">
          <li>Digital brand strategy & guidelines</li>
          <li>Website/app builds with accessibility & multilingual support</li>
          <li>Content campaigns & media operations</li>
          <li>VIP protocol design & management</li>
        </ul>
      </section>
      <CtaStrip title="Let’s elevate your brand" primary={{ label: "Contact Us", href: "/contact" }} secondary={{ label: "Request a Proposal", href: "/rfp" }} />
    </main>
  );
}


