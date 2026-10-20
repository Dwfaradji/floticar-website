"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileSpreadsheet,
  ArrowRight,
  AlertTriangle,
  Clock,
  ShieldAlert,
  Fuel,
  CheckCircle2,
  XCircle,
  UploadCloud,
  QrCode,
  Bell,
  Car,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

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

export default function RemplacerExcelContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
      </div>

      {/* HERO SECTION */}
      <section className="px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <FileSpreadsheet size={14} /> Alternative moderne aux tableurs
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Remplacez Excel pour gérer votre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                flotte automobile.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Gérer ses véhicules sur un tableur fonctionne au début. Puis viennent les formules écrasées, les oublis de contrôle technique, les justificatifs égarés et les heures perdues. Découvrez une plateforme pensée pour centraliser votre parc sans complexité.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Demander une démonstration</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Consulter nos tarifs
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Migration offerte de vos fichiers Excel actuels • Sans engagement • Déploiement en moins de 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHY EXCEL FAILS (POINTS DE DOULEUR) */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                L&apos;illusion de la gratuité d&apos;Excel
              </h2>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                Un tableur semble économique au premier abord car il ne coûte pas d&apos;abonnement logiciel. Mais le temps passé en saisie et les coûts d&apos;incidents non anticipés en font souvent la solution la plus chère.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EXCEL_PAINS.map((pain, idx) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor="rgba(244, 63, 94, 0.25)" className="h-full !p-8 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/30">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 shadow-sm ring-1 ring-rose-500/20 dark:text-rose-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2.5 text-lg font-bold text-gray-900 dark:text-white">
                      {pain.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {pain.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TABLEAU COMPARATIF */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Sparkles size={14} /> Comparatif direct
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Tableur Excel vs Solution Floticar
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Ce qui change concrètement au quotidien pour votre responsable de parc et vos conducteurs.
              </p>
            </motion.div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white/80 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/80">
            <div className="grid grid-cols-12 border-b border-gray-200/80 bg-gray-50/80 p-5 text-xs font-bold tracking-wider text-gray-600 uppercase dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-300">
              <div className="col-span-4">Fonctionnalité</div>
              <div className="col-span-4">Tableur Excel</div>
              <div className="col-span-4 text-blue-600 dark:text-cyan-400">Floticar</div>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {COMPARISON_ROWS.map((row) => (
                <div key={row.feature} className="grid grid-cols-12 items-center p-5 text-sm transition hover:bg-blue-50/30 dark:hover:bg-white/[0.02]">
                  <div className="col-span-4 pr-3 font-bold text-gray-900 dark:text-white">
                    {row.feature}
                  </div>
                  <div className="col-span-4 flex items-start gap-2 pr-3 text-xs text-gray-500 sm:text-sm dark:text-gray-400">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-rose-500" />
                    <span>{row.excel}</span>
                  </div>
                  <div className="col-span-4 flex items-start gap-2 text-xs font-semibold text-gray-900 sm:text-sm dark:text-gray-200">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-cyan-500" />
                    <span>{row.floticar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW FLOTICAR SOLVES THIS */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Une transition simple et progressive
              </h2>
              <p className="text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Pas besoin de changer toutes vos habitudes du jour au lendemain. Floticar s&apos;adapte à votre organisation sans matériel coûteux à installer.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: UploadCloud,
                title: "1. Import gratuit de vos données",
                desc: "Transmettez-nous votre tableur actuel. Nous nettoyons et intégrons vos données (véhicules, conducteurs, dates clés) directement dans votre compte sous 24h.",
                color: "text-blue-500",
                glow: "rgba(59, 130, 246, 0.25)",
              },
              {
                icon: QrCode,
                title: "2. QR Code véhicule pour le terrain",
                desc: "Chaque véhicule dispose de son QR Code. Vos conducteurs scannent avec leur smartphone pour déclarer leur kilométrage ou signaler un défaut avec photo.",
                color: "text-cyan-500",
                glow: "rgba(6, 182, 212, 0.25)",
              },
              {
                icon: Bell,
                title: "3. Pilotage automatique & alertes",
                desc: "Vous recevez les alertes de contrôle technique et d'entretien par email. Vos tableaux de bord calculent vos dépenses sans aucune formule à maintenir.",
                color: "text-indigo-500",
                glow: "rgba(99, 102, 241, 0.25)",
              },
            ].map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.7, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={step.glow} className="h-full !p-8 transition-all duration-300 hover:-translate-y-1.5">
                    <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 ${step.color} ring-1 ring-current/20 dark:bg-white/5`}>
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {step.desc}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION ACCORDION */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes sur la transition d&apos;Excel
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Tout ce que vous devez savoir avant de digitaliser la gestion de votre flotte.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-500/40 bg-white shadow-xl shadow-blue-500/5 dark:border-cyan-400/30 dark:bg-white/[0.04]"
                      : "border-gray-200/80 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02]"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                          : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                      >
                        <div className="border-t border-gray-100 px-6 pt-4 pb-6 text-sm leading-relaxed text-gray-600 dark:border-white/5 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
