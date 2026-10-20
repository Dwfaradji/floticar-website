import type { Metadata } from "next";
import GestionCarburantContent from "@/components/sections/GestionCarburantContent";

export const metadata: Metadata = {
  title: "Gestion du Carburant et des Dépenses de Flotte Automobile",
  description:
    "Maîtrisez votre poste carburant : dématérialisez les tickets d'essence par photo, détectez les surconsommations et simplifiez la récupération de la TVA.",
  alternates: {
    canonical: "https://floticar.com/gestion-carburant-flotte",
  },
  openGraph: {
    title: "Gestion du carburant et des dépenses de flotte | Floticar",
    description:
      "Optimisez la consommation de carburant de vos véhicules professionnels : suivi des pleins, tickets dématérialisés et contrôle des dépenses sans lourdeur administrative.",
    url: "https://floticar.com/gestion-carburant-flotte",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Floticar est-il compatible avec les cartes carburant (Total, Edenred, DKV, etc.) ?",
    answer:
      "Oui. Floticar vous permet d'enregistrer et de centraliser les dépenses qu'elles proviennent de cartes pétrolières professionnelles ou d'avances de frais des collaborateurs.",
  },
  {
    question: "Comment Floticar détecte-t-il les véhicules qui consomment trop ?",
    answer:
      "À chaque plein, le système calcule le ratio litres / kilomètres parcourus depuis le plein précédent. Si un véhicule dépasse de manière anormale sa moyenne habituelle, le gestionnaire est alerté pour vérifier l'état du véhicule (pression des pneus, révision moteur).",
  },
  {
    question: "La photo du ticket est-elle valable pour l'administration fiscale ?",
    answer:
      "Oui, la dématérialisation des pièces comptables est reconnue par l'administration fiscale française dès lors que le justificatif numérique est lisible et archivé avec sa date, son montant HT/TTC et le taux de TVA applicable.",
  },
];

export default function GestionCarburantPage() {
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
    name: "Floticar — Gestion du carburant de flotte automobile",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/gestion-carburant-flotte",
    description:
      "Logiciel de gestion du carburant pour flotte automobile : dématérialisation des tickets d'essence, suivi des consommations et récupération de la TVA.",
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
      <GestionCarburantContent />
    </main>
  );
}
