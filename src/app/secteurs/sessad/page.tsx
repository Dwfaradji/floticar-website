import type { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Clock,
  ShieldCheck,
  ArrowRight,
  Camera,
  Calendar,
  MapPin,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Logiciel de Gestion de Flotte pour SESSAD",
  description:
    "Solution de gestion des véhicules de service pour SESSAD : rotation des véhicules partagés entre éducateurs et soignants, carnet de bord numérique et suivi des visites à domicile.",
  alternates: {
    canonical: "https://floticar.com/secteurs/sessad",
  },
  openGraph: {
    title: "Gestion de flotte pour SESSAD | Floticar",
    description:
      "Facilitez la mobilité de vos équipes itinérantes en SESSAD : réservation fluide des citadines de pool, relevé kilométrique mobile et sérénité au quotidien.",
    url: "https://floticar.com/secteurs/sessad",
    type: "website",
  },
};

const SESSAD_PAINS = [
  {
    icon: Clock,
    title: "Rotation intense des véhicules de pool",
    description:
      "Un véhicule partagé peut être utilisé par 3 professionnels différents dans la même journée (éducateur le matin, psychomotricien l'après-midi, psychologue en fin de journée).",
  },
  {
    icon: MapPin,
    title: "Itinérance quotidienne en école et à domicile",
    description:
      "Les interventions en milieu ordinaire (écoles, domiciles, crèches) imposent des déplacements fréquents avec des contraintes d'horaires strictes.",
  },
  {
    icon: Car,
    title: "Tensions liées aux réservations et à l'état du véhicule",
    description:
      "Trouver un véhicule avec le réservoir vide, un pneu sous-gonflé ou découvrir qu'un collègue est parti avec les clés génère un stress inutile pour les équipes.",
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité des petits accrocs urbains",
    description:
      "Le stationnement répété en ville multiplie les rayures et petits chocs de carrosserie. Sans carnet d'état des lieux rapide, impossible de dater les incidents.",
  },
];

const SESSAD_SOLUTIONS = [
  {
    icon: Clock,
    title: "Prise en main express par QR Code",
    description:
      "Le professionnel scanne le QR Code du véhicule avant de partir : saisie du kilométrage et confirmation de départ en 20 secondes sans formalités lourdes.",
  },
  {
    icon: Camera,
    title: "Signalement d'anomalies avec photos",
    description:
      "Une anomalie constatée ? Le professionnel prend une photo qui alerte directement la coordination logistique, dégageant sa responsabilité en toute transparence.",
  },
  {
    icon: Calendar,
    title: "Disponibilité claire du parc en temps réel",
    description:
      "Chaque membre de l'équipe sait quel véhicule est disponible pour ses rendez-vous extérieurs, éliminant les conflits d'agendas.",
  },
  {
    icon: ShieldCheck,
    title: "Véhicules fiabilisés et entretenus",
    description:
      "Rappels automatiques de contrôle technique et d'entretien pour que les équipes soignantes et éducatives roulent en toute sécurité.",
  },
];

const FAQS = [
  {
    question: "Les professionnels du SESSAD doivent-ils remplir un cahier à chaque visite ?",
    answer:
      "Non, le carnet papier est remplacé par le scan d'un QR Code présent dans le véhicule. En 2 clics sur son smartphone, l'intervenant note son kilométrage de départ et de retour.",
  },
  {
    question: "Comment gérer les imprévus ou les retards entre deux tournées ?",
    answer:
      "L'interface permet de voir rapidement l'état d'utilisation des véhicules du pool, évitant les mauvaises surprises avant de partir en rendez-vous extérieur.",
  },
  {
    question: "Floticar respecte-t-il la confidentialité des tournées et des usagers ?",
    answer:
      "Oui. Floticar n'enregistre aucune donnée médicale sur les usagers accompagnés. Seuls le véhicule, le kilométrage et l'état matériel sont suivis, dans le respect total du RGPD et du secret professionnel.",
  },
];

export default function SESSADPage() {
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

  return (
    <main className="flex flex-col overflow-x-hidden pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/60 via-white to-gray-50 px-6 py-20 dark:from-emerald-950/20 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Link
              href="/secteurs/medico-social"
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300"
            >
              <ChevronLeft size={14} /> Pôle Médico-Social
            </Link>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Gestion de flotte pour les{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400">
              SESSAD
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Facilitez les déplacements de vos équipes soignantes et éducatives en milieu ordinaire. Fluidifiez le partage des citadines de pool, éliminez les carnets papier et assurez un suivi d&apos;entretien irréprochable.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démo dédiée SESSAD <ArrowRight size={18} />
            </Link>
            <Link
              href="/secteurs/ime"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Découvrir la solution pour IME
            </Link>
          </div>
        </div>
      </section>

      {/* DÉFIS SESSAD */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Mobilité & Itinérance
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Les contraintes de déplacement des professionnels du SESSAD
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Entre écoles, crèches et visites à domicile, vos équipes ont besoin de véhicules disponibles, propres et fiables.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {SESSAD_PAINS.map((pain) => {
              const Icon = pain.icon;
              return (
                <div
                  key={pain.title}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition hover:border-emerald-200 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-emerald-900"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
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

      {/* SOLUTIONS SESSAD */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Praticité au quotidien
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Une solution légère pour fluidifier la rotation des véhicules
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {SESSAD_SOLUTIONS.map((sol) => {
              const Icon = sol.icon;
              return (
                <div
                  key={sol.title}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
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
              Questions fréquentes des SESSAD
            </h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-gray-50/50 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/40"
              >
                <h3 className="flex items-center gap-2.5 text-base font-semibold text-gray-900 dark:text-white">
                  <HelpCircle size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
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
