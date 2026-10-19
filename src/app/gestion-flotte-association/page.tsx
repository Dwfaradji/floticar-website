import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  Car,
  Heart,
  QrCode,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  HelpCircle,
  Camera,
  BellRing,
  PiggyBank,
  Receipt,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Logiciel de Gestion de Flotte pour Associations",
  description:
    "Solution simple et collaborative de gestion de véhicules pour les associations : pool de véhicules partagés, carnet de bord dématérialisé, suivi des entretiens et du carburant.",
  alternates: {
    canonical: "https://floticar.com/gestion-flotte-association",
  },
  openGraph: {
    title: "Logiciel de gestion de flotte pour associations | Floticar",
    description:
      "Simplifiez le partage de vos véhicules associatifs : responsabilisez vos conducteurs, dématérialisez les carnets de bord et maîtrisez votre budget sans matériel lourd.",
    url: "https://floticar.com/gestion-flotte-association",
    type: "website",
  },
};

const ASSOC_CHALLENGES = [
  {
    icon: Users,
    title: "Multiplicité des conducteurs et bénévoles",
    description:
      "Salariés, bénévoles, volontaires en service civique : les véhicules associatifs passent de main en main. Savoir qui a utilisé quel véhicule devient vite un casse-tête.",
  },
  {
    icon: FileCheck2,
    title: "Le calvaire du carnet de bord papier",
    description:
      "Le cahier qui traîne dans la boîte à gants est souvent raturé, incomplet ou égaré. Impossible d'exploiter des relevés kilométriques illisibles pour la comptabilité.",
  },
  {
    icon: BellRing,
    title: "Entretiens et contrôles techniques oubliés",
    description:
      "Comme le véhicule n'est attribué à personne en propre, personne ne se sent responsable de la vidange ou du contrôle technique, jusqu'au jour de la panne ou de l'amende.",
  },
  {
    icon: PiggyBank,
    title: "Budgets associatifs contraints",
    description:
      "Les associations et fondations ne peuvent pas investir dans des solutions télématiques lourdes avec des abonnements GPS onéreux et des frais d'installation.",
  },
];

const ASSOC_FEATURES = [
  {
    icon: QrCode,
    title: "Prise en main par QR Code en 30 secondes",
    description:
      "Un QR Code collé sur le tableau de bord permet à chaque conducteur de scanner avec son smartphone à la prise et à la restitution du véhicule, sans créer de compte complexe.",
  },
  {
    icon: Camera,
    title: "État des lieux photo à la restitution",
    description:
      "Un voyant allumé ? Une rayure sur une aile ? Le bénévole ou salarié prend une photo directement depuis son téléphone. Le responsable est prévenu immédiatement.",
  },
  {
    icon: ShieldCheck,
    title: "Responsabiliser sans fliquer",
    description:
      "Aucun traceur GPS invasif dans la voiture. Floticar privilégie la traçabilité collaborative et la transparence bienveillante, indispensable dans le monde associatif.",
  },
  {
    icon: BellRing,
    title: "Alertes d'échéances pour le responsable",
    description:
      "Recevez des alertes automatiques par email avant les dates d'entretien, de révision constructeur et de contrôle technique pour garantir la sécurité des personnes transportées.",
  },
  {
    icon: Receipt,
    title: "Centralisation des justificatifs de carburant",
    description:
      "Photographiez les tickets d'essence et de péage pour éviter les pertes et simplifier le travail du trésorier lors des clôtures comptables et des audits de subventions.",
  },
  {
    icon: Car,
    title: "Fiche complète par véhicule",
    description:
      "Carte grise, attestation d'assurance, contrôle technique, historique des réparations : tout le dossier administratif est consultable en ligne à tout moment.",
  },
];

const FAQS = [
  {
    question: "Floticar nécessite-t-il d'installer du matériel ou un boîtier GPS ?",
    answer:
      "Non, aucun boîtier électronique n'est requis. Floticar fonctionne à 100% via le web et l'application mobile grâce à des QR Codes uniques associés à chaque véhicule. Cela évite les frais de pose, les immobilisations et respecte la vie privée des intervenants.",
  },
  {
    question: "Des bénévoles occasionnels peuvent-ils utiliser l'application sans formation ?",
    answer:
      "Oui. L'interface mobile a été conçue pour être utilisable immédiatement : un bénévole scanne le QR Code du véhicule avec l'appareil photo de son smartphone, indique son prénom/nom, le kilométrage et démarre. Moins de 30 secondes suffisent.",
  },
  {
    question: "Proposez-vous des tarifs adaptés aux petites associations ?",
    answer:
      "Oui. Floticar propose une tarification flexible et accessible à partir de quelques véhicules, sans engagement de durée, ce qui permet à chaque structure d'ajuster son abonnement selon l'évolution de ses activités.",
  },
  {
    question: "Comment Floticar nous aide-t-il à justifier nos subventions ?",
    answer:
      "Les financeurs et collectivités exigent souvent des bilans précis sur l'utilisation du matériel subventionné. Floticar vous permet d'exporter en un clic des rapports clairs sur les kilomètres parcourus et les coûts opérationnels de votre parc.",
  },
];

export default function GestionFlotteAssociationPage() {
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
    name: "Floticar — Logiciel de gestion de flotte pour associations",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    url: "https://floticar.com/gestion-flotte-association",
    description:
      "Logiciel de gestion de parc automobile pensé pour les associations : partage de véhicules, carnet de bord numérique, suivi des entretiens et carburant.",
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
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-gray-50 px-6 py-20 dark:from-emerald-950/20 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
            <Heart size={16} /> Spécial Associations & Équipes partagées
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Logiciel de gestion de véhicules pour les{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-blue-400">
              associations
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Fini les carnets papier illisibles et les clés égarées. Facilitez le partage de vos véhicules entre salariés et bénévoles, anticipez les révisions et gardez le contrôle sur vos dépenses sans aucun matériel complexe.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-700 hover:shadow-xl sm:w-auto"
            >
              Demander une démo dédiée aux associations <ArrowRight size={18} />
            </Link>
            <Link
              href="/secteurs/medico-social"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-700 transition hover:bg-gray-50 sm:w-auto dark:border-gray-800 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Vous êtes une structure médico-sociale ?
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            Sans engagement • Sans installation de boîtier • Données protégées en France
          </p>
        </div>
      </section>

      {/* DÉFIS ASSOCIATIFS */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Réalité du terrain
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Les défis du partage de véhicules en association
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Entre plannings mouvants et multiplicité des intervenants, sécuriser la logistique automobile est indispensable pour préserver vos ressources.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ASSOC_CHALLENGES.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-6 transition hover:border-emerald-200 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-emerald-900"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
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
            <span className="text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              Fonctionnalités adaptées
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Une organisation fluide au service de vos missions
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Des outils simples pour que vos équipes se concentrent sur leurs actions plutôt que sur la paperasse.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {ASSOC_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
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
              Questions fréquentes des associations
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Tout pour bien démarrer la gestion de votre flotte associative.
            </p>
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
