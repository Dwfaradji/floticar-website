import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ProblemSection from "@/components/sections/ProblemSection";
import ShowcaseSection from "@/components/sections/ShowcaseSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TargetSection from "@/components/sections/TargetSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import SecuritySection from "@/components/sections/SecuritySection";
import PricingCTASection from "@/components/sections/PricingCTASection";
import HomeFaqSection from "@/components/sections/HomeFaqSection";
import BlogPreviewSection from "@/components/sections/BlogPreviewSection";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://floticar.com",
  },
};

export default function FleetLandingPage() {
  return (
    <main className="flex flex-col overflow-x-hidden transition-colors duration-300">
      <HeroSection />
      <StatsSection />
      <ProblemSection />
      <ShowcaseSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TargetSection />
      <TestimonialSection />
      <SecuritySection />
      <PricingCTASection />
      <HomeFaqSection />
      <BlogPreviewSection />
      <FinalCTA />
    </main>
  );
}
