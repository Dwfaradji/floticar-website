import type { Metadata } from "next";
import Link from "next/link";
import {
  Bus,
  ShieldCheck,
  ArrowRight,
  Clock,
  CalendarCheck,
  Camera,
  Car,
  HelpCircle,
  ChevronLeft,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Logiciel de Gestion de Flotte pour IME (Institut Médico-Éducatif)",
  description:
    "Solution de gestion de véhicules et minibus pour IME : suivi des tournées d'usagers, alertes de contrôle technique, sécurité des transports et carnets de bord numériques.",
  alternates: {
    canonical: "https://floticar.com/secteurs/ime",
  },
  openGraph: {
    title: "Gestion de flotte pour IME (Institut Médico-Éducatif) | Floticar",
    description:
      "Optimisez la gestion de vos minibus et véhicules de service en IME : sécurité des enfants et jeunes accompagnés, traçabilité des trajets et conformité des entretiens.",
    url: "https://floticar.com/secteurs/ime",
    type: "website",
  },
};

const IME_PAINS = [
  {
    icon: ShieldCheck,
    title: "Exigence absolue de sécurité",
    description:
      "Le transport quotidien d'enfants et de jeunes usagers exige des véhicules irréprochables : révisions à jour, pneumatiques contrôlés et vérification des équipements de sécurité.",
  },
  {
    icon: CalendarCheck,
    title: "Gestion complexe des tournées en minibus",
    description:
      "Les tournées du matin et du soir mobilisent plusieurs minibus partagés entre chauffeurs et éducateurs. Les conflits d'affectation retardent les départs.",
  },
  {
    icon: Clock,
    title: "Perte de temps sur les carnets papier",
    description:
      "Relever manuellement les kilomètres, noter les anomalies sur un carnet de bord qui reste dans la boîte à gants et centraliser les factures pour la direction est fastidieux.",
  },
  {
    icon: Car,
    title: "Suivi des véhicules adaptés (TPMR)",
    description:
      "Les véhicules équipés de rampes ou d'aménagements pour fauteuils roulants nécessitent une surveillance accrue des équipements pour éviter toute panne immobilisante.",
  },
];

const IME_SOLUTIONS = [
  {
    icon: ShieldCheck,
    title: "Alertes automatiques d'entretien & CT",
    description:
      "Soyez notifié bien avant l'échéance du contrôle technique et des révisions constructeurs pour qu'aucun minibus ne roule hors délai réglementaire.",
  },
  {
    icon: Camera,
    title: "État des lieux mobile avant chaque tournée",
    description:
      "Le chauffeur ou l'éducateur scanne le QR Code du minibus, vérifie l'état général et signale tout voyant ou accroc avec photo en moins d'une minute.",
  },
  {
    icon: CalendarCheck,
    title: "Planning et attribution claire des véhicules",
    description:
      "Visualisez instantanément quel véhicule est affecté à quelle tournée ou sortie éducative pour éviter tout chevauchement.",
  },
  {
    icon: Bus,
    title: "Dossier centralisé par véhicule",
    description:
      "Carte grise, assurance, contrôles techniques et historique des réparations accessibles en ligne par le chef de service ou le responsable technique.",
  },
];

const FAQS = [
  {
    question: "Floticar est-il facile à utiliser pour les éducateurs et chauffeurs de l'IME ?",
    answer:
      "Oui. Aucune compétence technique n'est requise. Un QR Code placé dans chaque véhicule permet d'accéder directement au carnet de bord mobile pour noter le kilométrage et signaler un problème avec photo.",
  },
  {
    question: "Comment Floticar garantit-il la sécurité des jeunes transportés ?",
    answer:
      "En automatisant les alertes de maintenance préventive (plaquettes, pneus, révisions, CT) et en permettant aux conducteurs de faire remonter immédiatement le moindre voyant ou bruit anormal aux équipes logistiques.",
  },
  {
    question: "Pouvons-nous gérer à la fois des véhicules légers et des minibus 9 places ?",
    answer:
      "Absolument. Floticar gère l'ensemble de votre parc : citadines pour les déplacements individuels, breaks, utilitaires techniques et minibus de transport collectif.",
  },
];

export default function IMEPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-gray-50 px-6 py-20 dark:from-blue-950/20 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 flex items-center justify-center gap-2">
            <Link
              href="/secteurs/medico-social"
              className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300"
            >
              <ChevronLeft size={14} /> Pôle Médico-Social
            </Link>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Gestion de flotte pour les{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              IME (Instituts Médico-Éducatifs)
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Sécurisez le transport quotidien de vos jeunes usagers. Simplifiez la gestion des minibus et véhicules de service, anticipez chaque contrôle technique et libérez vos équipes éducatives des contraintes administratives.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démo pour votre IME <ArrowRight size={18} />
            </Link>
            <Link
              href="/secteurs/sessad"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Découvrir la solution pour SESSAD
            </Link>
          </div>
        </div>
      </section>

      {/* DÉFIS IME */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Enjeux de sécurité
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Les exigences logistiques d&apos;un Institut Médico-Éducatif
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              La gestion d&apos;un parc de minibus en établissement médico-social ne tolère aucune approximation sur la sécurité et le suivi d&apos;entretien.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {IME_PAINS.map((pain) => {
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

      {/* SOLUTIONS IME */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Réponses Floticar
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Une organisation claire pour la direction et les professionnels
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {IME_SOLUTIONS.map((sol) => {
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
              Questions fréquentes des IME
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
