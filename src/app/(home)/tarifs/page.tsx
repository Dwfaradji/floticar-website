import { Metadata } from "next";
import PricingSection from "@/components/sections/PricingSection";

export const metadata: Metadata = {
  title: "Tarifs transparents gestion de flotte",
  description: "Découvrez nos offres tarifaires claires et transparentes, adaptées à la taille de votre flotte automobile. Sans frais cachés ni engagement.",
  alternates: {
    canonical: "https://floticar.com/tarifs",
  },
};

export default function TarifsPage() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <PricingSection />
    </main>
  );
}
