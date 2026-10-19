import type { Metadata } from "next";
import Link from "next/link";
import {
  Gauge,
  TrendingDown,
  AlertTriangle,
  QrCode,
  ShieldCheck,
  ArrowRight,
  HelpCircle,
  Clock,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Suivi du Kilométrage de Flotte Automobile",
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

const KILO_CHALLENGES = [
  {
    icon: AlertTriangle,
    title: "Pénalités de fin de contrat LLD/LOA",
    description:
      "Les kilomètres excédentaires sont facturés entre 0,10 € et 0,30 € le kilomètre par les loueurs. Dépasser de 15 000 km sur 5 véhicules peut coûter plus de 15 000 € à restitution.",
  },
  {
    icon: Clock,
    title: "Relevés papier tardifs ou inexistants",
    description:
      "Courir après les conducteurs en fin de mois pour qu'ils notent leur compteur sur un tableau Excel est inefficace et conduit à des données obsolètes ou estimées.",
  },
  {
    icon: Gauge,
    title: "Échéances d'entretien ratées",
    description:
      "Les vidanges, courroies et révisions constructeur sont calibrées sur le kilométrage réel. Sans suivi fiable, le risque de panne mécanique grave augmente considérablement.",
  },
  {
    icon: ShieldCheck,
    title: "Justification des trajets URSSAF",
    description:
      "En cas de contrôle, l'URSSAF exige de distinguer l'usage professionnel des trajets personnels pour les véhicules de fonction et de service afin de valider les avantages en nature.",
  },
];

const KILO_FEATURES = [
  {
    icon: QrCode,
    title: "Relevé par QR Code mobile en 15 secondes",
    description:
      "À chaque prise de véhicule ou fin de journée, le conducteur scanne le QR Code sur le tableau de bord et indique son kilométrage. Aucune application lourde à télécharger.",
  },
  {
    icon: TrendingDown,
    title: "Alerte de dépassement kilométrique contractuel",
    description:
      "Floticar compare le kilométrage réel à la trajectoire théorique de vos contrats de leasing pour vous permettre d'ajuster l'avenant avant la fin du bail.",
  },
  {
    icon: Gauge,
    title: "Déclenchement automatique des révisions",
    description:
      "Dès qu'un palier kilométrique est atteint (ex. 30 000 km), une alerte est envoyée au gestionnaire pour planifier le passage au garage sans retard.",
  },
  {
    icon: ShieldCheck,
    title: "Respect de la vie privée (sans mouchard GPS)",
    description:
      "Pas de géolocalisation permanente intrusive. Les conducteurs déclarent leur compteur en toute confiance, conformément aux recommandations de la CNIL et du RGPD.",
  },
];

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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-gray-50 px-6 py-20 dark:from-blue-950/20 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <Gauge size={16} /> Suivi kilométrique fiabilisé
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Suivi du kilométrage de votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              flotte automobile
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Fini les compteurs relevés au hasard et les pénalités financières en fin de leasing. Collectez les kilomètres réels de vos véhicules via QR Code mobile et planifiez vos entretiens au bon moment.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démonstration <ArrowRight size={18} />
            </Link>
            <Link
              href="/remplacer-excel-gestion-flotte"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Remplacer votre tableau Excel
            </Link>
          </div>
        </div>
      </section>

      {/* DÉFIS DU KILOMÉTRAGE */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Risques financiers
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Pourquoi un suivi kilométrique approximatif coûte si cher
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {KILO_CHALLENGES.map((challenge) => {
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

      {/* FONCTIONNALITÉS */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              La réponse Floticar
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Un relevé kilométrique sans effort pour le terrain et le bureau
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {KILO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
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
              Questions fréquentes sur le suivi kilométrique
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
