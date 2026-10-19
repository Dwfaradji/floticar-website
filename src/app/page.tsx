import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProblemSection from "@/components/sections/ProblemSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import TargetSection from "@/components/sections/TargetSection";
import SecuritySection from "@/components/sections/SecuritySection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import FinalCTA from "@/components/sections/FinalCTA";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingCTASection from "@/components/sections/PricingCTASection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://floticar.com",
  },
};

export default function FleetLandingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <ProblemSection />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ShowcaseSection />
      <BenefitsSection />
      <PricingCTASection />
      <TargetSection />
      <SecuritySection />
      <TestimonialSection />
      <HomeFaqSection />
      <BlogPreviewSection />
      <FinalCTA />
    </main>
  );
}
