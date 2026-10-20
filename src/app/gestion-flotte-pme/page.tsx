import type { Metadata } from "next";
import GestionPmeContent from "@/components/sections/GestionPmeContent";

export const metadata: Metadata = {
  title: "Solution de Gestion de Véhicules pour PME & TPE",
  description:
    "Découvrez la solution de gestion de flotte automobile pensée pour les PME : réduisez votre TCO, suivez les entretiens, maîtrisez le carburant et simplifiez la désignation des conducteurs.",
  alternates: {
    canonical: "https://floticar.com/gestion-flotte-pme",
  },
  openGraph: {
    title: "Solution de gestion de véhicules pour PME & TPE | Floticar",
    description:
      "Logiciel de gestion de parc automobile adapté aux PME et TPE. Suivez vos véhicules, conducteurs et coûts sans perte de temps.",
    url: "https://floticar.com/gestion-flotte-pme",
    type: "website",
  },
};

const PME_FAQS = [
  {
    question: "Combien de temps faut-il pour mettre en place Floticar dans une PME ?",
    answer:
      "Moins de 24 heures. Vous nous transmettez vos fichiers actuels (Excel, exports comptables) et nous intégrons l'intégralité de vos véhicules, conducteurs et alertes sans que vous n'ayez à faire de saisie manuelle.",
  },
  {
    question: "Floticar nécessite-t-il l'installation de boîtiers OBD ou de traceurs GPS ?",
    answer:
      "Non, aucun boîtier physique ni matériel intrusif n'est nécessaire. Floticar fonctionne grâce à un QR Code apposé dans chaque véhicule et notre application mobile conducteur. Cela évite les coûts d'installation et respecte la vie privée des collaborateurs.",
  },
  {
    question: "Quelle est la rentabilité moyenne pour une flotte de 10 à 30 véhicules ?",
    answer:
      "Nos clients PME constatent une réduction moyenne de 15% à 20% de leurs coûts d'exploitation dès les premiers mois, principalement grâce à la suppression des amendes pour non-désignation, l'anticipation des entretiens et le contrôle des dérives carburant.",
  },
];

export default function GestionFlottePmePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: PME_FAQS.map((faq) => ({
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
    name: "Floticar — Gestion de flotte pour PME",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/gestion-flotte-pme",
    description:
      "Logiciel de gestion de flotte automobile adapté aux PME et TPE : suivi des véhicules, entretiens, carburant, amendes et conducteurs.",
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
      <GestionPmeContent />
    </main>
  );
}
