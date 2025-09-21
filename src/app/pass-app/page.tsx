import Hero from "./components/Hero";
import EventSolution from "./components/EventSolution";
import GuestRegistration from "./components/GuestRegistration";
import UserRoles from "./components/UserRoles";
import ManagerDashboard from "./components/ManagerDashboard";
import PassAppPictures from "./components/PassAppPictures";
import BuiltForGates from "./components/BuiltForGates";
import PassAppFlow from "./components/PassAppFlow";
import FeatureGrid from "./components/FeatureGrid";
import DeviceShowcase from "./components/DeviceShowcase";
import FlowSteps from "./components/FlowSteps";
import VoucherShowcase from "./components/VoucherShowcase";
import AnalyticsTiles from "./components/AnalyticsTiles";
import Carousel from "./components/Carousel";
import FAQ from "./components/FAQ";
import CtaStrip from "@/components/common/CtaStrip";

export const metadata = {
  title: "Pass App | Move Beyond",
  description: "Digital passes for ticketing, entry, vouchers, memberships, finance, and analytics.",
};

export default function PassAppPage() {
  return (
    <main className="min-h-screen bg-[var(--mb-bg-0)] text-[var(--mb-text)]">
      <Hero />
      <EventSolution />
      <GuestRegistration />
      <UserRoles />
      <ManagerDashboard />
      {/* <PassAppPictures /> */}
      {/* <BuiltForGates /> */}
      <PassAppFlow />
      <FeatureGrid />
      {/* <DeviceShowcase /> */}
      {/* <FlowSteps /> */}
      {/* <VoucherShowcase /> */}
      {/* <AnalyticsTiles /> */}
      {/* <Carousel /> */}
      <FAQ />
      <CtaStrip
        title="Ready to see Pass App live?"
        primary={{ label: "Request a Demo", href: "/contact?type=demo" }}
        secondary={{ label: "Explore Integrations", href: "/services/digital" }}
      />
    </main>
  );
}


