import type { Metadata } from "next";
import SimulatorContent from "@/components/sections/SimulatorContent";

export const metadata: Metadata = {
  title: "Simulateur d'Économies et ROI de Flotte Automobile",
  description:
    "Calculez gratuitement en 2 minutes combien votre entreprise ou association peut économiser sur la gestion de sa flotte automobile (carburant, entretien, temps administratif) avec Floticar.",
  keywords: [
    "simulateur coût flotte automobile",
    "calculateur ROI gestion de flotte",
    "économies flotte véhicules",
    "calcul TCO flotte PME",
    "simulateur Floticar",
    "réduire budget carburant entretien flotte",
  ],
  alternates: {
    canonical: "https://floticar.com/simulateur",
  },
  openGraph: {
    title: "Simulateur d'Économies et ROI de Flotte Automobile | Floticar",
    description:
      "Estimez vos économies annuelles sur le carburant, l'entretien et le suivi administratif de vos véhicules en moins de 2 minutes.",
    url: "https://floticar.com/simulateur",
    siteName: "Floticar",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simulateur d'économies de flotte Floticar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simulateur d'Économies de Flotte Automobile | Floticar",
    description:
      "Calculez vos gains annuels potentiels sur votre parc de véhicules en 7 questions rapides.",
    images: ["/og-image.png"],
  },
};

const simulatorJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Simulateur d'économies de flotte Floticar",
  url: "https://floticar.com/simulateur",
  applicationCategory: "BusinessApplication",
  operatingSystem: "All",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  description:
    "Outil gratuit permettant aux PME, associations et établissements médico-sociaux d'estimer leurs économies annuelles et leur retour sur investissement avec le logiciel de gestion de flotte Floticar.",
};

export default function SimulateurPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(simulatorJsonLd) }}
      />
      <SimulatorContent />
    </main>
  );
}

