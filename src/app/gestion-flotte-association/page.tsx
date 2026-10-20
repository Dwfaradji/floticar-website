import type { Metadata } from "next";
import GestionAssociationContent from "@/components/sections/GestionAssociationContent";

export const metadata: Metadata = {
  title: "Logiciel de Gestion de Flotte pour Associations",
  description:
    "Solution simple et collaborative de gestion de véhicules pour les associations : pool de véhicules partagés, carnet de bord dématérialisé, suivi des entretiens et du carburant.",
  alternates: {
    canonical: "https://floticar.com/gestion-flotte-association",
  },
  openGraph: {
    title: "Logiciel de gestion de flotte pour associations | Floticar",
    description:
      "Simplifiez le partage de vos véhicules associatifs : responsabilisez vos conducteurs, dématérialisez les carnets de bord et maîtrisez votre budget sans matériel lourd.",
    url: "https://floticar.com/gestion-flotte-association",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Floticar nécessite-t-il d'installer du matériel ou un boîtier GPS ?",
    answer:
      "Non, aucun boîtier électronique n'est requis. Floticar fonctionne à 100% via le web et l'application mobile grâce à des QR Codes uniques associés à chaque véhicule. Cela évite les frais de pose, les immobilisations et respecte la vie privée des intervenants.",
  },
  {
    question: "Des bénévoles occasionnels peuvent-ils utiliser l'application sans formation ?",
    answer:
      "Oui. L'interface mobile a été conçue pour être utilisable immédiatement : un bénévole scanne le QR Code du véhicule avec l'appareil photo de son smartphone, indique son prénom/nom, le kilométrage et démarre. Moins de 30 secondes suffisent.",
  },
  {
    question: "Proposez-vous des tarifs adaptés aux petites associations ?",
    answer:
      "Oui. Floticar propose une tarification flexible et accessible à partir de quelques véhicules, sans engagement de durée, ce qui permet à chaque structure d'ajuster son abonnement selon l'évolution de ses activités.",
  },
  {
    question: "Comment Floticar nous aide-t-il à justifier nos subventions ?",
    answer:
      "Les financeurs et collectivités exigent souvent des bilans précis sur l'utilisation du matériel subventionné. Floticar vous permet d'exporter en un clic des rapports clairs sur les kilomètres parcourus et les coûts opérationnels de votre parc.",
  },
];

export default function GestionFlotteAssociationPage() {
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
    name: "Floticar — Logiciel de gestion de flotte pour associations",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/gestion-flotte-association",
    description:
      "Logiciel de gestion de parc automobile pensé pour les associations : partage de véhicules, carnet de bord numérique, suivi des entretiens et carburant.",
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
      <GestionAssociationContent />
    </main>
  );
}
