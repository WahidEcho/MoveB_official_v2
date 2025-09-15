import { Card } from "@/components/ui/card";

const faqs = [
  { q: "What’s the difference between tickets and memberships?", a: "Tickets are one-off entitlements; memberships persist with renewals, tiers, and perks." },
  { q: "Does scanning work offline?", a: "Yes. We queue validations and sync when back online." },
  { q: "How do vouchers prevent fraud?", a: "We enforce single/multi-use rules, time windows, zones, and partner IDs—every redemption is logged." },
  { q: "Can I export finance reports?", a: "Yes—CSV and PDF settlement snapshots per event or venue." },
  { q: "Does it support multi-venue events?", a: "Yes, with capacity per venue and global headcount." },
  { q: "Is Arabic/RTL supported?", a: "The site is i18n-ready; Arabic/RTL can be enabled." },
];

export default function FAQ() {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        {faqs.map((item) => (
          <Card key={item.q} className="p-6 bg-[var(--mb-surface)] border-[var(--mb-border)] backdrop-blur">
            <h4 className="text-lg font-semibold">{item.q}</h4>
            <p className="mt-2 text-[var(--mb-muted)]">{item.a}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}







