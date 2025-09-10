import Image from "next/image";
import Section from "@/components/case/Section";
import StatBar from "@/components/case/StatBar";
import Gallery from "@/components/case/Gallery";
import Breadcrumbs from "@/components/case/Breadcrumbs";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = { title:"Insomnia VR Activation | Case Study", description:"Virtual Insomnia — a festival you can explore, play, and perform in." };

export default function InsomniaCase() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <section className="relative py-20">
        <div className="absolute inset-0 -z-10">
          <Image src="/case-studies/insomnia/cover.jpg" alt="" fill className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-[var(--mb-bg-0)]/60" />
        </div>
        <div className="container mx-auto px-6">
          <Breadcrumbs current="Insomnia VR Activation" />
          <h1 className="font-display text-4xl md:text-6xl font-bold">Insomnia VR Activation</h1>
          <p className="mt-4 text-lg text-[var(--mb-muted)] max-w-3xl">Virtual Insomnia — a festival you can explore, play, and perform in.</p>
        </div>
      </section>

      <Section title="Client Profile">
        <p className="text-[var(--mb-muted)] max-w-3xl">Insomnia gaming & pop‑culture festival; esports, anime, fan arts, music, and interactive sponsors.</p>
      </Section>

      <Section title="Challenge">
        <p className="text-[var(--mb-muted)] max-w-3xl">Not everyone could reach the venue, and headline experiences had long lines. The brand wanted an activation that lived beyond event dates and ignited social buzz.</p>
      </Section>

      <Section title="Solution — Virtual Insomnia">
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-2 max-w-3xl">
          <li><strong>Playable zones:</strong> fan art galleries, anime meet‑ups, mini‑games, and sponsor quests inside a stylized VR twin of the festival.</li>
          <li><strong>Logo Quest:</strong> “Find all the logos” scavenger hunt for partner discounts.</li>
          <li><strong>Dance‑offs:</strong> join Just Dance partners for score‑based challenges.</li>
          <li><strong>Sing‑it‑all‑out:</strong> Spotify‑style booth for duets and clips worth sharing.</li>
          <li><strong>Tournament Hub:</strong> spectate brackets, check schedules, jump into mini‑challenges.</li>
        </ul>
      </Section>

      <Section title="Results">
        <StatBar stats={[
          {label:"Virtual interactions (week)", value:"40K+"},
          {label:"Avg. session time", value:"11m 20s"},
          {label:"Promo‑code redemption", value:"23%"},
          {label:"Social lift vs prev.", value:"1.8×"},
        ]}/>
      </Section>

      <Section title="Process & Engagement Hooks">
        <ul className="list-disc pl-6 text-[var(--mb-muted)] space-y-1 max-w-3xl">
          <li>Moodboards → 3D scene blocking → quest logic → reward codes.</li>
          <li>Comfort settings for first‑timers (snap turn, vignette).</li>
          <li>Photo spots with branded frames for shareable moments.</li>
        </ul>
      </Section>

      <Section title="Gallery">
        <Gallery images={[
          {src:"/case-studies/insomnia/01.jpg"}, {src:"/case-studies/insomnia/02.jpg"},
          {src:"/case-studies/insomnia/03.jpg"}, {src:"/case-studies/insomnia/04.jpg"},
          {src:"/case-studies/insomnia/05.jpg"}, {src:"/case-studies/insomnia/06.jpg"},
          {src:"/case-studies/insomnia/07.jpg"}, {src:"/case-studies/insomnia/08.jpg"},
        ]}/>
      </Section>

      <CtaStrip title="Want a crowd‑stopping activation?" primary={{label:"Request a Proposal", href:"/rfp"}} secondary={{label:"Talk to an Expert", href:"/contact"}}/>
    </main>
  );
}



