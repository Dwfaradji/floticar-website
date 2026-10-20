import type { Metadata } from "next";
import ApplicationMobileContent from "@/components/sections/ApplicationMobileContent";

export const metadata: Metadata = {
  title: "Application Mobile Conducteur Gestion de Flotte (QR Code & Photos)",
  description:
    "L'application mobile de gestion de flotte pour vos conducteurs : relevé kilométrique en 15s par QR Code, état des lieux photo contradictoire et déclaration des tickets d'essence sans boîtier GPS invasif.",
  alternates: {
    canonical: "https://floticar.com/fonctionnalites/application-mobile",
  },
  openGraph: {
    title: "Application mobile conducteur gestion de flotte | Floticar",
    description:
      "Facilitez la vie de vos conducteurs avec l'application mobile Floticar : QR Code de véhicule, photos d'accrocs et carnets de bord numériques sans géolocalisation abusive.",
    url: "https://floticar.com/fonctionnalites/application-mobile",
    type: "website",
  },
};

const FAQS = [
  {
    question: "Les conducteurs doivent-ils télécharger une application sur l'App Store ou Google Play ?",
    answer:
      "Non, ce n'est pas obligatoire ! Floticar utilise la technologie PWA (Progressive Web App). En scannant le QR Code avec l'appareil photo natif de leur smartphone, l'interface s'ouvre instantanément. Ils peuvent également l'ajouter en un clic sur leur écran d'accueil comme une application classique.",
  },
  {
    question: "Comment l'application garantit-elle le respect de la vie privée des salariés ?",
    answer:
      "Floticar n'enregistre aucune position GPS en continu pendant les trajets. Seules les données utiles à la gestion de flotte sont collectées au moment du scan : le kilométrage saisi, l'heure de départ/retour et les éventuelles photos déclarées par le conducteur. Vos équipes sont sereines et la conformité RGPD/CNIL est irréprochable.",
  },
  {
    question: "L'application fonctionne-t-elle si le conducteur n'a pas de réseau au sous-sol ou en zone blanche ?",
    answer:
      "Oui. L'interface mobile Floticar intègre un mode hors-ligne : le conducteur peut renseigner son compteur et prendre sa photo d'anomalie même sans 4G/5G. Dès que le smartphone retrouve du réseau, les données sont automatiquement synchronisées avec le tableau de bord du gestionnaire.",
  },
  {
    question: "Des intervenants ou bénévoles occasionnels peuvent-ils l'utiliser ?",
    answer:
      "Tout à fait. La force du QR Code est de permettre à un chauffeur intérimaire, un bénévole d'association ou un soignant remplaçant de s'identifier en quelques secondes sans configuration complexe de compte utilisateur.",
  },
];

export default function ApplicationMobilePage() {
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
    name: "Floticar Mobile — Application conducteur gestion de flotte",
    applicationCategory: "BusinessApplication",
    operatingSystem: "iOS, Android, Web PWA",
    url: "https://floticar.com/fonctionnalites/application-mobile",
    description:
      "Application mobile pour conducteurs de flotte : carnet de bord par QR Code, photos d'accrocs, relevés kilométriques et reçus de carburant.",
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
      <ApplicationMobileContent />
    </main>
  );
}
