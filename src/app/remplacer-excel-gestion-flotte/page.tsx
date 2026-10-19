import type { Metadata } from "next";
import Link from "next/link";
import {
  FileSpreadsheet,
  ArrowRight,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Fuel,
  CheckCircle2,
  XCircle,
  HelpCircle,
  UploadCloud,
  QrCode,
  Bell,
  Car,
} from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";

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

const EXCEL_PAINS = [
  {
    icon: Clock,
    title: "Fichiers dispersés et versions obsolètes",
    description:
      "Des tableurs renommés au fil des mois ('parc_auto_2024_v2_final.xlsx'), stockés sur des postes différents ou modifiés en simultané, créant des pertes d'informations critiques.",
  },
  {
    icon: AlertTriangle,
    title: "Saisies manuelles et risque d'erreurs",
    description:
      "Une formule accidentellement écrasée ou un mauvais décalage de ligne fausse l'intégralité du calcul de vos coûts d'entretien ou de votre consommation moyenne.",
  },
  {
    icon: Bell,
    title: "Aucune alerte pour les contrôles et entretiens",
    description:
      "Un tableur est passif : il ne vous notifie pas lorsqu'une date de contrôle technique approche ou qu'un seuil kilométrique de révision est franchi, risquant l'amende ou la panne.",
  },
  {
    icon: Car,
    title: "Kilométrages réels impossibles à fiabiliser",
    description:
      "Sans saisie directe par les conducteurs, les compteurs ne sont mis à jour que tous les 6 mois, provoquant de mauvaises surprises sur les forfaits kilométriques en LLD/LOA.",
  },
  {
    icon: Fuel,
    title: "Factures et justificatifs carburant égarés",
    description:
      "Tickets de caisse perdus dans les boîtes à gants, reçus froissés et TVA non récupérée : le rapprochement entre tickets physiques et tableur devient un calvaire comptable.",
  },
  {
    icon: ShieldAlert,
    title: "Traçabilité incertaine des conducteurs et amendes",
    description:
      "En cas d'infraction routière reçue par courrier, retrouver quel collaborateur utilisait le véhicule à l'heure précise nécessite d'éplucher des agendas approximatifs.",
  },
];

const COMPARISON_ROWS = [
  {
    feature: "Centralisation des données du parc",
    excel: "Fichiers locaux ou partagés, souvent désynchronisés",
    floticar: "Plateforme web sécurisée, accessible 24/7 en équipe",
  },
  {
    feature: "Alertes automatiques (CT, révisions)",
    excel: "Aucune alerte (nécessite une veille manuelle quotidienne)",
    floticar: "Notifications proactives par email avant chaque échéance",
  },
  {
    feature: "Relevé kilométrique par les conducteurs",
    excel: "Feuilles volantes ou emails transmis avec retard",
    floticar: "Scan QR Code mobile rapide à la prise en main du véhicule",
  },
  {
    feature: "Signalement d'anomalies & chocs",
    excel: "Découvert tardivement lors de la restitution du véhicule",
    floticar: "Déclaration mobile immédiate avec photos par le conducteur",
  },
  {
    feature: "Historique d'attribution des véhicules",
    excel: "Calendrier informel, difficile à prouver légalement",
    floticar: "Historique d'assignation horodaté pour désigner sans doute",
  },
  {
    feature: "Centralisation des documents officiels",
    excel: "Dossiers Windows éparpillés, cartes grises introuvables",
    floticar: "Papiers, assurances et factures attachés à chaque fiche véhicule",
  },
  {
    feature: "Migration depuis vos fichiers existants",
    excel: "Ressaisies manuelles chronophages",
    floticar: "Import gratuit et structuré de vos tableurs par Floticar",
  },
];

const FAQS = [
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

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 px-6 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] opacity-30" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            <FileSpreadsheet size={16} /> Alternative moderne aux tableurs
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Remplacez Excel pour gérer votre{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
              flotte automobile
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 sm:text-xl dark:text-gray-300">
            Gérer ses véhicules sur un tableur fonctionne au début. Puis viennent les formules écrasées, les oublis de contrôle technique, les justificatifs égarés et les heures perdues. Découvrez une plateforme simple, pensée pour centraliser votre parc sans complexité.
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
              Consulter nos tarifs
            </Link>
          </div>

          <p className="mt-4 text-xs text-gray-400 dark:text-gray-500">
            Migration offerte de vos fichiers Excel actuels • Sans engagement • Déploiement en moins de 24h
          </p>
        </div>
      </section>

      {/* WHY EXCEL FAILS (POINTS DE DOULEUR) */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              L&apos;illusion de la gratuité d&apos;Excel
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Un tableur semble économique au premier abord car il ne coûte pas d&apos;abonnement logiciel. Mais le temps passé en saisie et les coûts d&apos;incidents non anticipés en font souvent la solution la plus chère.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {EXCEL_PAINS.map((pain) => {
              const Icon = pain.icon;
              return (
                <div
                  key={pain.title}
                  className="rounded-2xl border border-gray-200/80 bg-gray-50/50 p-7 transition-all duration-200 hover:border-red-200 hover:bg-red-50/20 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-red-900/40"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950/60 dark:text-red-400">
                    <Icon size={22} />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
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

      {/* TABLEAU COMPARATIF */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-24 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
              Comparatif direct
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Tableur Excel vs Solution Floticar
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Ce qui change concrètement au quotidien pour votre responsable de parc et vos conducteurs.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <div className="grid grid-cols-12 border-b border-gray-200 bg-gray-100/70 p-4 text-xs font-bold tracking-wider text-gray-600 uppercase dark:border-gray-800 dark:bg-gray-800/60 dark:text-gray-300">
              <div className="col-span-4 sm:col-span-4">Fonctionnalité</div>
              <div className="col-span-4 sm:col-span-4">Tableur Excel</div>
              <div className="col-span-4 text-blue-600 sm:col-span-4 dark:text-blue-400">Floticar</div>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-gray-800">
              {COMPARISON_ROWS.map((row) => (
                <div key={row.feature} className="grid grid-cols-12 items-center p-4 text-sm transition hover:bg-gray-50/60 dark:hover:bg-gray-800/40">
                  <div className="col-span-4 pr-2 font-semibold text-gray-900 dark:text-white">
                    {row.feature}
                  </div>
                  <div className="col-span-4 flex items-start gap-2 pr-2 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-red-500" />
                    <span>{row.excel}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-2 text-xs font-medium text-gray-800 sm:text-sm dark:text-gray-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span>{row.floticar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW FLOTICAR SOLVES THIS */}
      <section className="border-t border-gray-100 bg-white px-6 py-24 dark:border-gray-800 dark:bg-[#030409]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Une transition simple et progressive
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Pas besoin de changer toutes vos habitudes du jour au lendemain. Floticar s&apos;adapte à votre organisation sans matériel coûteux à installer.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-900/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                <UploadCloud size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                1. Import gratuit de votre fichier
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Transmettez-nous votre tableur actuel. Nous nettoyons et intégrons vos données (véhicules, conducteurs, dates clés) directement dans votre compte.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-900/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 text-cyan-600 dark:bg-cyan-950 dark:text-cyan-400">
                <QrCode size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                2. QR Code véhicule pour le terrain
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Chaque véhicule dispose de son QR Code. Vos conducteurs scannent avec leur smartphone pour déclarer leur kilométrage ou signaler un défaut avec photo.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-8 dark:border-gray-800 dark:bg-gray-900/40">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                <Bell size={24} />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                3. Pilotage automatique & alertes
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                Vous recevez les alertes de contrôle technique et d&apos;entretien par email. Vos tableaux de bord calculent vos dépenses sans aucune formule à maintenir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="border-t border-gray-100 bg-gray-50/60 px-6 py-20 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes sur la fin d&apos;Excel
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Tout ce que vous devez savoir avant de digitaliser la gestion de votre flotte.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
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
