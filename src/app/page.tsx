import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TerminalSimulator from "@/components/TerminalSimulator";
import Features from "@/components/Features";
import ArchitectureSection from "@/components/ArchitectureSection";
import BuildPlanModes from "@/components/BuildPlanModes";
import ModelGrid from "@/components/ModelGrid";
import DocsSection from "@/components/DocsSection";
import DeveloperCard from "@/components/DeveloperCard";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TerminalSimulator />
        <Features />
        <ArchitectureSection />
        <BuildPlanModes />
        <ModelGrid />
        <DocsSection />
        <DeveloperCard />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
