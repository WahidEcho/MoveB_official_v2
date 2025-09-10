import Link from "next/link";
import Image from "next/image";
import CtaStrip from "@/components/common/CtaStrip";
import { CalendarDays, Users2, BarChart3, ShieldCheck, Languages, Palette } from "lucide-react";

export const metadata = { title: "Levels Sports Academy Case Study" };

export default function LevelsAcademyPage() {
  const features = [
    { icon: CalendarDays, title: "Visual Court Calendar", text: "Day/Week/Month scheduling with drag‑and‑drop." },
    { icon: Users2, title: "Client Profiles & Booking Logs", text: "Unified client history and attendance." },
    { icon: BarChart3, title: "Real‑Time Analytics", text: "Revenue, attendance, and usage KPIs." },
    { icon: ShieldCheck, title: "Multi‑User Admin Access", text: "Roles, permissions, and activity trails." },
    { icon: Languages, title: "Dual Language Support", text: "Arabic & English responsive UI." },
    { icon: Palette, title: "Custom Branding & Subdomain", text: "White‑label branding per academy." },
  ];

  const results = [
    { title: "Booking process", text: "Manual spreadsheets → visual scheduling." },
    { title: "Player insights", text: "Attendance and payments tracked in one place." },
    { title: "Staff coordination", text: "Multiple secure logins with permissions." },
    { title: "Transparency", text: "Live analytics dashboard for ops KPIs." },
    { title: "Brand image", text: "Custom branded, professional system." },
  ];

  return (
    <main className="pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/case-studies/levels/cover.jpg" alt="Levels Academy courts" fill className="object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <nav aria-label="Breadcrumb" className="text-xs text-[var(--mb-muted)]">
              <ol className="flex gap-2">
                <li><Link href="/">Home</Link></li>
                <li>/</li>
                <li><Link href="/case-studies">Case Studies</Link></li>
                <li>/</li>
                <li aria-current="page" className="text-[var(--mb-text)]">Levels Sports Academy</li>
              </ol>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 max-w-4xl">How Levels Sports Academy Transformed Operations with Move Beyond</h1>
            <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-3xl">A smart, internal booking and analytics platform built for scalable sports management.</p>
            <div className="mt-8">
              <a href="#impact" className="inline-flex items-center rounded-xl px-6 py-3 text-white bg-gradient-to-r from-[var(--mb-primary)] to-[var(--mb-primary-2)]">See How It Works</a>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative w-[400px] h-[400px]">
              <Image src="/case-studies/levels/levelslogo.png" alt="Levels Academy logo" fill className="object-contain" unoptimized />
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="container mx-auto px-6 py-16" id="challenge">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">The Challenge</h2>
        <p className="mt-4 max-w-4xl text-[var(--mb-muted)]">Levels faced operational inefficiencies from manual bookings, scattered client tracking, and no real‑time revenue monitoring.</p>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-6 py-8" id="solution">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">The Solution by Move Beyond</h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-3 text-[var(--mb-muted)]">
          <li>Internal‑use court scheduling platform</li>
          <li>Visual calendar (day/week/month views)</li>
          <li>Client database with booking history</li>
          <li>Staff roles and permission‑based login</li>
          <li>Arabic & English responsive system</li>
          <li>No public access — admin‑only booking system</li>
          <li>Fully cloud‑based, accessible on all devices</li>
        </ul>
      </section>

      {/* Features Implemented */}
      <section className="container mx-auto px-6 py-8">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Features Implemented</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
              <Icon className="w-6 h-6 text-[var(--mb-primary-2)]" />
              <div className="mt-3 font-semibold">{title}</div>
              <div className="mt-1 text-[var(--mb-muted)]">{text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="container mx-auto px-6 py-8" id="impact">
        <h2 className="font-display text-3xl md:text-4xl font-semibold">Results Delivered</h2>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.title} className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6">
              <div className="font-semibold">{r.title}</div>
              <div className="mt-1 text-[var(--mb-muted)]">{r.text}</div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Testimonial */}
      <section className="container mx-auto px-6 py-8">
        <div className="rounded-2xl border border-[var(--mb-border)] bg-[var(--mb-surface)] p-6 md:p-10">
          <blockquote className="text-xl md:text-2xl">"The system helped us finally centralize everything — courts, clients, and finance — in one smart tool. Move Beyond made our operations smoother and more professional."</blockquote>
          <div className="mt-3 text-[var(--mb-muted)]">— Levels Academy Management</div>
        </div>
      </section>

      {/* Gallery Carousel - constrained inside white rounded rectangle */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-[var(--mb-border)] shadow-[0_12px_40px_rgba(0,0,0,0.08)] aspect-[1/.6]">
            <div className="flex h-full animate-[smoothSlidePct_45s_linear_infinite]">
              {["/case-studies/levels/lvl1.jpg","/case-studies/levels/lvl2.jpg","/case-studies/levels/lvl3.jpg","/case-studies/levels/lvl1.jpg","/case-studies/levels/lvl2.jpg","/case-studies/levels/lvl3.jpg"].map((src,i)=> (
                <div key={i} className="relative shrink-0 basis-full h-full">
                  <Image src={src} alt={`Levels slide ${i+1}`} fill className="object-cover" unoptimized />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaStrip
        title="Ready to Transform Your Academy?"
        primary={{ label: "Book a Demo", href: "/contact?type=demo" }}
        secondary={{ label: "See How It Works", href: "#impact" }}
      />
    </main>
  );
}


