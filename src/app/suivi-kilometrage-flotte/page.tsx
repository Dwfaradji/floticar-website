import type { Metadata } from "next";
import SuiviKilometrageContent from "@/components/sections/SuiviKilometrageContent";

export const metadata: Metadata = {
  title: "Suivi du Kilométrage de Flotte Automobile & Gestion LLD",
  description:
    "Fiabilisez le relevé kilométrique de votre parc automobile : anticipez les dépassements de contrats LLD/LOA, collectez les compteurs par QR Code mobile et optimisez vos coûts.",
  alternates: {
    canonical: "https://floticar.com/suivi-kilometrage-flotte",
  },
  openGraph: {
    title: "Suivi du kilométrage de flotte automobile | Floticar",
    description:
      "Automatisez la collecte des kilométrages de vos véhicules d'entreprise sans boîtier invasif. Maîtrisez vos contrats de location et vos révisions.",
    url: "https://floticar.com/suivi-kilometrage-flotte",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Faut-il installer un boîtier télématique ou une prise OBD dans la voiture ?",
    answer:
      "Non. Floticar privilégie une saisie mobile collaborative via QR Code. Vos conducteurs transmettent leur compteur en quelques secondes depuis leur smartphone. Cela évite les frais d'achat de boîtiers (souvent 15 à 30 € par véhicule et par mois) et les coûts d'installation chez un garagiste.",
  },
  {
    question: "Comment éviter qu'un conducteur n'oublie de déclarer son kilométrage ?",
    answer:
      "Le QR Code placé à l'intérieur du véhicule crée un réflexe simple à la prise en main. De plus, des rappels périodiques par notification peuvent être configurés pour s'assurer que chaque véhicule est relevé au moins une fois par semaine.",
  },
  {
    question: "Puis-je exporter l'historique kilométrique pour mon loueur ou mon comptable ?",
    answer:
      "Oui. Vous pouvez exporter en un clic au format Excel ou PDF l'ensemble des relevés kilométriques par véhicule, par conducteur ou par période.",
  },
];

export default function SuiviKilometragePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Floticar — Suivi kilométrage flotte automobile",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/suivi-kilometrage-flotte",
    description:
      "Logiciel de suivi du kilométrage pour flotte automobile : relevé mobile QR Code, anticipation des pénalités LLD et alertes de révisions.",
  };

  return (
    <main className="flex flex-col overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <SuiviKilometrageContent />
    </main>
  );
}
