import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Outcomes from "@/components/Outcomes";
import Program from "@/components/Program";
import AboutMentor from "@/components/AboutMentor";
import AboutHub from "@/components/AboutHub";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  const [heroVariant, setHeroVariant] = useState<"a" | "b">("a");

  useEffect(() => {
    // Check URL parameter for A/B test variant
    const params = new URLSearchParams(window.location.search);
    const variant = params.get("v");
    if (variant === "b") {
      setHeroVariant("b");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Hero variant={heroVariant} />
      <TargetAudience />
      <Outcomes />
      <Program />
      <AboutMentor />
      <AboutHub />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
