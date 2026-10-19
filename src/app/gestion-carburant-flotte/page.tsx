import type { Metadata } from "next";
import Link from "next/link";
import {
  Fuel,
  BarChart3,
  TrendingDown,
  Receipt,
  Camera,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  CreditCard,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Gestion du Carburant et des Dépenses de Flotte",
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

const FUEL_PAINS = [
  {
    icon: TrendingDown,
    title: "Le 2ème poste de coût le plus lourd",
    description:
      "Le carburant représente entre 20% et 30% du Coût Total de Possession (TCO) d'une flotte. Une absence de pilotage se traduit par des milliers d'euros de surcoûts par an.",
  },
  {
    icon: Receipt,
    title: "Tickets de caisse perdus et TVA non récupérée",
    description:
      "Les reçus thermiques s'effacent, se déchirent ou se perdent dans les boîtes à gants. Résultat : l'entreprise perd le droit à la déduction de la TVA sur ses pleins.",
  },
  {
    icon: Fuel,
    title: "Surconsommation invisible par véhicule",
    description:
      "Pneus sous-gonflés, filtres encrassés ou conduite agressive : sans calcul de la consommation réelle aux 100 km, les anomalies mécaniques passent inaperçues.",
  },
  {
    icon: CreditCard,
    title: "Rapprochement bancaire fastidieux",
    description:
      "Le service comptable passe des heures à réconcilier les relevés de cartes bancaires ou de cartes pétrolières avec les utilisations effectives des véhicules.",
  },
];

const FUEL_SOLUTIONS = [
  {
    icon: Camera,
    title: "Dématérialisation des tickets par photo",
    description:
      "À la pompe, le conducteur prend en photo son ticket de caisse via l'interface mobile Floticar. Le reçu est instantanément rattaché au véhicule et à la date du plein.",
  },
  {
    icon: BarChart3,
    title: "Calcul automatique de la consommation (L/100 km)",
    description:
      "En croisant les litres ajoutés et le kilométrage déclaré, Floticar calcule la consommation moyenne et alerte en cas d'écart anormal avec la norme constructeur.",
  },
  {
    icon: Receipt,
    title: "Export comptable prêt pour la TVA",
    description:
      "Toutes les dépenses sont ventilées par type de carburant (diesel, essence, électrique, AdBlue) avec les justificatifs téléchargeables pour votre expert-comptable.",
  },
  {
    icon: ShieldCheck,
    title: "Contrôle des abus et anomalies",
    description:
      "Identifiez rapidement les incohérences de volume par rapport à la capacité du réservoir ou les pleins effectués en dehors des périodes autorisées.",
  },
];

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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-gray-50 px-6 py-20 dark:from-blue-950/20 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <Fuel size={16} /> Optimisation du budget carburant
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Gestion du carburant de votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              flotte automobile
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Le carburant est votre poste de dépense le plus imprévisible. Dématérialisez les tickets de caisse par photo, suivez les consommations réelles aux 100 km et récupérez 100% de la TVA sans perte de temps.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démonstration <ArrowRight size={18} />
            </Link>
            <Link
              href="/tarifs"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Découvrir nos tarifs
            </Link>
          </div>
        </div>
      </section>

      {/* DÉFIS CARBURANT */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Pertes financières
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Où s&apos;évapore le budget carburant de votre entreprise
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FUEL_PAINS.map((pain) => {
              const Icon = pain.icon;
              return (
                <div
                  key={pain.title}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-900"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                    <Icon size={20} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                    {pain.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {pain.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOLUTIONS FLOTICAR */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Contrôle & Traçabilité
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Comment Floticar vous redonne la maîtrise de vos dépenses
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {FUEL_SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                    {sol.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {sol.description}
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
              Questions fréquentes sur la gestion du carburant
            </h2>
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
