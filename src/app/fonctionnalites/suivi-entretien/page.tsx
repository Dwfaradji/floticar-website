import type { Metadata } from "next";
import SuiviEntretienContent from "@/components/sections/SuiviEntretienContent";

export const metadata: Metadata = {
  title: "Logiciel de Suivi d'Entretien de Flotte Automobile & Alertes CT",
  description:
    "Automatisez la maintenance de votre parc de véhicules : alertes automatiques de contrôle technique et révision, carnet d'entretien numérique et GED des factures.",
  alternates: {
    canonical: "https://floticar.com/fonctionnalites/suivi-entretien",
  },
  openGraph: {
    title: "Logiciel de suivi d'entretien de flotte automobile | Floticar",
    description:
      "Ne manquez plus aucune échéance mécanique : alertes prédictives, suivi du contrôle technique et centralisation des factures de garage.",
    url: "https://floticar.com/fonctionnalites/suivi-entretien",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Comment Floticar sait-il quand un véhicule a atteint son kilométrage d'entretien ?",
    answer:
      "Grâce aux relevés kilométriques réguliers effectués par vos conducteurs lors de chaque prise ou restitution par QR Code mobile. Notre algorithme calcule également la moyenne kilométrique mensuelle pour projeter précisément la date d'échéance.",
  },
  {
    question: "Peut-on personnaliser les types d'alertes d'entretien ?",
    answer:
      "Oui. Vous pouvez configurer des alertes personnalisées pour chaque catégorie de véhicule : vidange moteur, révision constructeur, contrôle technique, contrôle pollution annuel pour les utilitaires, éthylotest antidémarrage (EAD), ou hayon élévateur TPMR.",
  },
  {
    question: "Les conducteurs peuvent-ils signaler un problème pendant leur trajet ?",
    answer:
      "Tout à fait. En scannant le QR Code présent dans le véhicule, le conducteur a accès à un bouton 'Signaler une anomalie' : il sélectionne le type de problème, ajoute un commentaire et une photo du voyant ou de la pièce endommagée. Le gestionnaire de parc est immédiatement notifié.",
  },
  {
    question: "Puis-je importer mon historique d'entretien existant depuis Excel ?",
    answer:
      "Oui. Nous proposons un outil d'importation simple et gratuit pour migrer vos données de véhicules, dates de dernier contrôle technique et kilométrages depuis votre ancien tableur Excel ou logiciel de gestion.",
  },
];

export default function SuiviEntretienPage() {
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
    name: "Floticar — Module de suivi d'entretien de flotte automobile",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/fonctionnalites/suivi-entretien",
    description:
      "Module de gestion et maintenance préventive de parc automobile : alertes de contrôle technique, révisions constructeur et carnet de santé numérique.",
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
      <SuiviEntretienContent />
    </main>
  );
}
