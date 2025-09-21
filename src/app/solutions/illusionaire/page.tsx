import { Metadata } from "next";
import ErrorBoundary from "@/components/common/ErrorBoundary";
import IllusionaireHero from "./components/IllusionaireHero";
import VirtualExperience from "./components/VirtualExperience";
import Immersive360Gallery from "./components/Immersive360Gallery";
import SoundscapeVisualization from "./components/SoundscapeVisualization";
import NightJourney from "./components/NightJourney";
import TechShowcase from "./components/TechShowcase";
import ImpactMetrics from "./components/ImpactMetrics";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata: Metadata = {
  title: "Illusionaire Virtual Experience | Move Beyond",
  description: "Step into the night. An immersive virtual experience that blends reality with dreams, technology with artistry.",
};

export default function IllusionairePage() {
  return (
    <ErrorBoundary>
      <main className="min-h-screen overflow-hidden text-black dark:text-white">
        {/* Cinematic Hero */}
        <ErrorBoundary>
          <IllusionaireHero />
        </ErrorBoundary>
        
        {/* Virtual Experience Overview */}
        <ErrorBoundary>
          <VirtualExperience />
        </ErrorBoundary>
        
        {/* 360° Immersive Gallery */}
        <ErrorBoundary>
          <Immersive360Gallery />
        </ErrorBoundary>
        
        {/* Sound & Visual Journey */}
        <ErrorBoundary>
          <SoundscapeVisualization />
        </ErrorBoundary>
        
        {/* Night Journey Experience */}
        <ErrorBoundary>
          <NightJourney />
        </ErrorBoundary>
        
        {/* Technology Showcase */}
        <ErrorBoundary>
          <TechShowcase />
        </ErrorBoundary>
        
        {/* Impact & Metrics */}
        <ErrorBoundary>
          <ImpactMetrics />
        </ErrorBoundary>
        
        {/* CTA */}
        <ErrorBoundary>
          <CtaStrip
            title="Ready to create your own immersive experience?"
            primary={{ label: "Start Your Journey", href: "/contact?type=vr" }}
            secondary={{ label: "Explore More Solutions", href: "/solutions" }}
            titleClassName="insomnia-text-invert"
          />
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  );
}
