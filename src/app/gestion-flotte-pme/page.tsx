import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  TrendingDown,
  Clock,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Car,
  FileText,
  AlertOctagon,
  Users,
  Building2,
  HelpCircle,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

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

const PME_CHALLENGES = [
  {
    icon: TrendingDown,
    title: "Coûts de possession opaques (TCO)",
    description:
      "Sans tableau de bord consolidé, il est impossible de savoir quel véhicule coûte le plus cher entre leasing, carburant, entretiens imprévus et pneumatiques.",
  },
  {
    icon: Clock,
    title: "Gestion administrative déléguée sans outil",
    description:
      "Dans 80% des PME, la flotte est gérée par le dirigeant, l'Office Manager ou le comptable, pour qui c'est une charge mentale chronophage supplémentaire.",
  },
  {
    icon: AlertOctagon,
    title: "Amendes pour non-désignation de conducteur",
    description:
      "En France, l'employeur est légalement tenu de désigner l'auteur d'une infraction routière sous 45 jours sous peine d'une amende forfaitaire de 450 € à 1 875 € par avis.",
  },
  {
    icon: Car,
    title: "Surcoûts kilométriques en fin de leasing (LLD/LOA)",
    description:
      "Les kilomètres supplémentaires en fin de contrat sont facturés au prix fort. Sans suivi régulier, la régularisation de fin de contrat impacte lourdement la trésorerie.",
  },
];

const PME_FEATURES = [
  {
    icon: BarChart3,
    title: "Maîtrise du TCO et des dépenses réelles",
    description:
      "Analysez vos dépenses de carburant, factures de révision et frais annexes par véhicule ou par service. Détectez immédiatement les véhicules surconsommateurs.",
  },
  {
    icon: ShieldCheck,
    title: "Gestion des amendes & conformité légale",
    description:
      "Historique horodaté des assignations de conducteurs. Retrouvez en deux clics qui conduisait le véhicule au moment précis du flash pour une désignation sereine sur l'ANTAI.",
  },
  {
    icon: Car,
    title: "Suivi kilométrique préventif",
    description:
      "Anticipez vos fins de contrat de location longue durée. Ajustez vos contrats avant le terme pour éviter les pénalités kilométriques excessives.",
  },
  {
    icon: FileText,
    title: "Centralisation des documents obligatoires",
    description:
      "Fini les classeurs perdus : cartes grises, attestations d'assurance, procès-verbaux de contrôle technique et factures sont archivés dans la fiche de chaque véhicule.",
  },
  {
    icon: Users,
    title: "Application mobile pour vos collaborateurs",
    description:
      "Vos conducteurs accèdent à l'essentiel par QR Code : relevé kilométrique à chaque prise de service, déclaration d'anomalie avec photos et carnet de bord numérique.",
  },
  {
    icon: Building2,
    title: "Organisation multi-sites ou par agences",
    description:
      "Attribuez vos véhicules par entité, filiale ou dépôt, avec des droits d'accès différenciés pour les chefs de service et la direction.",
  },
];

const FAQS = [
  {
    question: "Floticar est-il adapté à une flotte de 5 à 50 véhicules ?",
    answer:
      "Oui, c'est le cœur de cible de Floticar. Les logiciels de télématique traditionnels sont souvent trop complexes et imposent des boîtiers GPS coûteux. Floticar offre une solution logicielle légère, intuitive et prête à l'emploi.",
  },
  {
    question: "Comment Floticar nous protège-t-il contre les amendes de non-désignation ?",
    answer:
      "Grâce au module de gestion des conducteurs, vous disposez d'un historique complet et horodaté de chaque attribution de véhicule. Lorsqu'un avis d'amende arrive, vous identifiez le conducteur responsable en quelques secondes.",
  },
  {
    question: "Doit-on installer des boîtiers électroniques dans les véhicules ?",
    answer:
      "Non, aucun boîtier physique obligatoire n'est requis pour faire fonctionner Floticar. L'identification s'effectue simplement via les QR Codes véhicules et la plateforme web/mobile, ce qui élimine tout frais d'installation ou d'immobilisation de véhicule.",
  },
  {
    question: "Combien de temps faut-il pour mettre en place la solution dans notre PME ?",
    answer:
      "Le déploiement se fait en moins de 24 heures. Nous importons gratuitement vos listes actuelles de véhicules et conducteurs pour que votre équipe puisse commencer immédiatement.",
  },
];

export default function GestionFlottePMEPage() {
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
    name: "Floticar — Solution gestion véhicules PME",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/gestion-flotte-pme",
    description:
      "Logiciel de gestion de flotte automobile pour PME et TPE : suivi véhicules, TCO, amendes, contrôle technique et conducteurs.",
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <Briefcase size={16} /> Solution dédiée PME & TPE
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Solution de gestion de véhicules pour{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              PME et TPE
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Gérez votre parc automobile d&apos;entreprise sans perdre de temps : réduisez votre TCO, anticipez les contrôles techniques, suivez vos dépenses de carburant et sécurisez la désignation de vos conducteurs.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démonstration gratuite <ArrowRight size={18} />
            </Link>
            <Link
              href="/remplacer-excel-gestion-flotte"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Vous utilisez Excel ? Voir notre comparatif
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            Conforme RGPD • Données hébergées en France • Mise en route en 24h
          </p>
        </div>
      </section>

      {/* CHALLENGES DES PME */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Les enjeux opérationnels
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Pourquoi la gestion de flotte est un casse-tête en PME
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Sans outil dédié, le suivi des véhicules d&apos;entreprise engendre des risques financiers et juridiques sous-estimés.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PME_CHALLENGES.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                    {challenge.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {challenge.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES PME */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Fonctionnalités clés
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Tout ce dont votre PME a besoin pour piloter ses véhicules
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Une solution complète, sans modules superflus, conçue pour être prise en main en 10 minutes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PME_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-gray-100 bg-white px-6 py-20 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes des gestionnaires de PME
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Les réponses à vos interrogations sur la gestion de parc en entreprise.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
              >
                <h3 className="flex items-center gap-2.5 text-base font-semibold text-gray-900 dark:text-white">
                  <HelpCircle size={18} className="shrink-0 text-blue-600 dark:text-blue-400" />
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </main>
  );
}
