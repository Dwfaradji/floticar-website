import type { Metadata } from "next";
import RemplacerExcelContent from "@/components/sections/RemplacerExcelContent";

export const metadata: Metadata = {
  title: "Remplacer Excel pour la gestion de votre flotte",
  description:
    "Vous gérez vos véhicules sur un tableur ? Découvrez pourquoi remplacer Excel par Floticar : fini les oublis de contrôle technique, les erreurs de saisie et les justificatifs égarés.",
  alternates: {
    canonical: "https://floticar.com/remplacer-excel-gestion-flotte",
  },
  openGraph: {
    title: "Remplacer Excel pour la gestion de votre flotte automobile | Floticar",
    description:
      "Pourquoi et comment passer d'Excel à un logiciel de gestion de flotte centralisé ? Comparez les deux solutions et découvrez notre accompagnement d'import gratuit.",
    url: "https://floticar.com/remplacer-excel-gestion-flotte",
    type: "website",
  },
};

const FAQS_SCHEMA = [
  {
    question: "Pourquoi les entreprises finissent-elles toutes par abandonner Excel pour leur flotte ?",
    answer:
      "Excel est un formidable outil de calcul, mais ce n'est pas une base de données collaborative ni un outil de gestion logistique. Dès qu'une structure dépasse 5 à 10 véhicules, la multiplicité des conducteurs, des factures, des dates de contrôles techniques et des relevés kilométriques rend le tableur ingérable et source de surcoûts invisibles.",
  },
  {
    question: "Comment se déroule la migration de mes données depuis mon fichier Excel actuel ?",
    answer:
      "Vous ne perdez aucun historique. Lors de votre mise en route sur Floticar, vous nous transmettez vos fichiers Excel actuels. Notre équipe se charge d'extraire, nettoyer et importer gratuitement l'ensemble de vos véhicules, conducteurs et données administratives pour que votre espace soit opérationnel sous 24h.",
  },
  {
    question: "Mes conducteurs doivent-ils installer une application complexe ?",
    answer:
      "Non. Les conducteurs n'ont pas besoin d'identifiants compliqués. Un QR Code placé dans chaque véhicule leur permet d'accéder instantanément à l'interface mobile pour saisir le kilométrage au départ ou signaler une anomalie avec photos en moins d'une minute.",
  },
  {
    question: "Floticar est-il rentable pour une flotte de seulement 8 à 15 véhicules ?",
    answer:
      "Absolument. C'est précisément à cette échelle que le gain de temps administratif est le plus frappant. Éviter un seul dépassement kilométrique sur un contrat de location ou une seule amende non désignée rentabilise immédiatement l'abonnement mensuel.",
  },
];

export default function RemplacerExcelPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS_SCHEMA.map((faq) => ({
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
    name: "Floticar — Alternative Excel pour flotte automobile",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/remplacer-excel-gestion-flotte",
    description:
      "Solution SaaS pour remplacer vos tableurs Excel de suivi de flotte : centralisation des véhicules, alertes d'entretien automatiques, conducteurs et justificatifs.",
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
      <RemplacerExcelContent />
    </main>
  );
}
