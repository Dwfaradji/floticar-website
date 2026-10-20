import type { Metadata } from "next";
import MedicoSocialContent from "@/components/sections/MedicoSocialContent";

export const metadata: Metadata = {
  title: "Logiciel de Gestion de Flotte Médico-Sociale (IME, SESSAD, ESAT)",
  description:
    "Solution de gestion de véhicules adaptée aux établissements médico-sociaux et de santé : partage de pool, carnets de bord dématérialisés, sécurité des personnes accompagnées et zéro géolocalisation abusive.",
  alternates: {
    canonical: "https://floticar.com/secteurs/medico-social",
  },
  openGraph: {
    title: "Logiciel de gestion de flotte médico-sociale | Floticar",
    description:
      "Gagnez du temps sur la logistique automobile de vos IME, SESSAD et ESAT. Traçabilité des déplacements et suivi des entretiens sans traceur intrusif.",
    url: "https://floticar.com/secteurs/medico-social",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Floticar est-il conforme au RGPD et au respect de la vie privée des soignants ?",
    answer:
      "Absolument. Contrairement aux solutions traditionnelles qui installent des boîtiers GPS intrusifs qui géolocalisent les collaborateurs en continu, Floticar fonctionne par scan de QR Code à la prise et restitution du véhicule. Aucune géolocalisation en temps réel n'est effectuée, ce qui garantit la sérénité des équipes et le plein respect des recommandations de la CNIL.",
  },
  {
    question: "Est-ce adapté aux structures gérant plusieurs sites ou établissements ?",
    answer:
      "Oui. Floticar a été conçu pour les associations gestionnaires multi-établissements (IME, SESSAD, ESAT, FAM, MAS...). Vous pouvez affecter des véhicules à des sites précis, définir des gestionnaires par pôle et avoir une vision consolidée au niveau du siège associatif.",
  },
  {
    question: "Les éducateurs et intervenants occasionnels peuvent-ils s'en servir facilement ?",
    answer:
      "Oui, en moins de 30 secondes chrono ! Un QR Code collé sur le tableau de bord permet à l'intervenant d'ouvrir l'interface mobile sans téléchargement préalable d'application lourde. Il indique son kilométrage, valide le départ et part en intervention.",
  },
  {
    question: "Comment Floticar aide-t-il lors des contrôles et audits des autorités de tutelle ?",
    answer:
      "Les financeurs (ARS, Conseils Départementaux) demandent régulièrement des comptes sur l'utilisation du parc automobile et la sécurité des transports. Floticar génère des rapports complets en PDF ou Excel démontrant la conformité des contrôles techniques et le suivi d'entretien.",
  },
];

export default function MedicoSocialPage() {
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
    name: "Floticar — Logiciel de gestion de flotte médico-sociale",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/secteurs/medico-social",
    description:
      "Logiciel de gestion de parc automobile adapté aux IME, SESSAD, ESAT et structures médico-sociales : pool partagé, carnet de bord dématérialisé et sécurité.",
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
      <MedicoSocialContent />
    </main>
  );
}
