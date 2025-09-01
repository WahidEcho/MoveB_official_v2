import Image from "next/image";
import Section from "@/components/case/Section";
import StatBar from "@/components/case/StatBar";
import Gallery from "@/components/case/Gallery";
import Breadcrumbs from "@/components/case/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = { title:"BUE | Passaire QR Ticketing | Case Study", description:"Frictionless access with online QR and live flow tracking." };

export default function BUECase() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/case-studies/bue/cover.jpg" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-[var(--mb-bg-0)]/60" />
        </div>
        <div className="container mx-auto px-6">
          <Breadcrumbs current="BUE | Passaire QR Ticketing" />
          <h1 className="font-display text-4xl md:text-6xl font-bold">BUE | Passaire QR Ticketing</h1>
          <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-3xl">Faster gates, cleaner data, and live attendee flow.</p>
        </div>
      </section>

      <Section title="Client Profile">
        <p className="text-[var(--mb-muted)] max-w-3xl">University event with multiple entry gates and mixed audience (students, guests, VIP).</p>
      </Section>

      <Section title="Challenge">
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1 max-w-3xl">
          <li>Manual guest lists and paper badges slowed lines.</li>
          <li>QR codes weren’t reliably delivered to attendees.</li>
          <li>Managers lacked a live overview of gate load and attendee movement.</li>
        </ul>
      </Section>

      <Section title="Solution — Passaire QR + Live Flow">
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1 max-w-3xl">
          <li>Online registration issuing secure QR codes by email/WhatsApp reply.</li>
          <li>Gate scanning with offline queue → instant check‑in & revocation controls.</li>
          <li>Live flow tracking shows where and when attendees route during the event.</li>
          <li>Capacity & heat moments visualized for staffing decisions.</li>
        </ul>
      </Section>

      <Section title="Results">
        <StatBar stats={[
          {label:"Faster gate processing", value:"72%"},
          {label:"QR validation latency", value:"< 2s"},
          {label:"Code delivery success", value:"100%"},
          {label:"Operational oversight", value:"Live"},
        ]}/>
      </Section>

      <Section title="Gallery">
        <Gallery images={[
          {src:"/case-studies/bue/01.jpg"}, {src:"/case-studies/bue/02.jpg"},
          {src:"/case-studies/bue/03.jpg"}, {src:"/case-studies/bue/04.jpg"},
          {src:"/case-studies/bue/05.jpg"}, {src:"/case-studies/bue/06.jpg"},
        ]}/>
      </Section>

      <CtaStrip title="Need frictionless access?" primary={{label:"Request a Proposal", href:"/rfp"}} secondary={{label:"Talk to an Expert", href:"/contact"}}/>
    </main>
  );
}

