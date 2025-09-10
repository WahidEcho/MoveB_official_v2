import AboutHero from "./components/AboutHero";
import Story from "./components/Story";
import Timeline from "./components/Timeline";
import GalleryCarousel from "./components/GalleryCarousel";
import LogoWall from "./components/LogoWall";
import MissionVision from "./components/MissionVision";
import Values from "./components/Values";
import Founders from "./components/Founders";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "About | Move Beyond",
  description:
    "Sports-first consultancy + digital innovation. Built in Egypt for a region on the rise.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <AboutHero />
      <div className="container mx-auto px-6 space-y-16 pb-24">
        <Story />
        <Timeline />
        <GalleryCarousel />
        <LogoWall />
        <MissionVision />
        <Values />
        <Founders />
      </div>
      <CtaStrip />
    </main>
  );
}


