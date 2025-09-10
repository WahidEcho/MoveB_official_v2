import Trust from "@/components/home/Trust";
import EnhancedHero from "@/components/home/EnhancedHero";
import ServicesTeaser from "@/components/home/ServicesTeaser";
import KpiCounters from "@/components/services/KpiCounters";
import CtaStrip from "@/components/home/CtaStrip";
import CaseTeaser from "@/components/home/CaseTeaser";
import PassAppTeaser from "@/components/home/PassAppTeaser";
import LogoStrip from "@/components/home/LogoStrip";
import Testimonials from "@/components/home/Testimonials";
import HomeFlow from "@/components/home/HomeFlow";
export default function Home() {
  return (
    <main>
      <EnhancedHero />
      <div className="space-y-6">
        {/* Sections */}
        <Trust />
        <ServicesTeaser />
        <KpiCounters />
        <CaseTeaser />
        <PassAppTeaser />
        <HomeFlow />
        <Testimonials />
        <LogoStrip />
        <CtaStrip />
      </div>
    </main>
  );
}
