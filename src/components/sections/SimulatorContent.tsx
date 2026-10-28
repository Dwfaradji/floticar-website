"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Fuel,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Wrench,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FleetSimulatorTool from "@/components/simulator/FleetSimulatorTool";

const SAVING_PILLARS = [
  {
    icon: FileSpreadsheet,
    title: "Temps administratif (-55 % à -70 %)",
    desc: "Suppression de la ressaisie des carnets de bord papier dans Excel, des relances conducteurs et des recherches d'historique lors des contrôles.",
    badge: "Impact immédiat",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Fuel,
    title: "Budget carburant & roulage (-6 % à -9 %)",
    desc: "Détection rapide des écarts de consommation, suivi des pleins par photo mobile et rééquilibrage des kilomètres entre véhicules (prévention LLD/LOA).",
    badge: "Poste n°1 du TCO",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    icon: Wrench,
    title: "Maintenance préventive (-10 % à -15 %)",
    desc: "Passage d'une maintenance subie à des alertes automatiques J-30 avant chaque révision, vidange ou changement de pneumatiques.",
    badge: "Moins de pannes",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
  },
  {
    icon: ShieldCheck,
    title: "Oublis, amendes & immobilisations (-65 %)",
    desc: "Zéro contrôle technique dépassé, traçabilité des conducteurs par QR Code mobile et réduction drastique des immobilisations imprévues.",
    badge: "Conformité 100 %",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

const SIMULATOR_FAQ = [
  {
    question: "Sur quelles données reposent les calculs du simulateur Floticar ?",
    answer:
      "Le moteur de calcul combine vos propres paramètres (nombre de véhicules, kilométrage annuel, temps administratif hebdomadaire, mode de gestion actuel) avec les moyennes observées par l'Observatoire du TCO et les retours d'expérience des PME, associations et établissements médico-sociaux équipés de Floticar.",
  },
  {
    question: "Dois-je connaître mon budget carburant ou entretien exact pour faire la simulation ?",
    answer:
      "Non. Si vous n'avez pas ces montants sous les yeux, le simulateur peut calculer automatiquement une estimation réaliste à partir de la taille de votre parc et de votre kilométrage moyen (sur une base de 7,5 L/100 km et 450 € d'entretien annuel par véhicule).",
  },
  {
    question: "Le simulateur est-il gratuit et sans obligation d'inscription ?",
    answer:
      "Oui, l'accès aux résultats complets (comparaison des 3 scénarios, décomposition par poste, calcul du seuil de rentabilité et export PDF) est 100 % libre et ne nécessite aucune adresse e-mail obligatoire.",
  },
  {
    question: "En combien de temps l'abonnement Floticar est-il rentabilisé ?",
    answer:
      "Dans la majorité des flottes de 10 à 100 véhicules gérées auparavant sur Excel ou carnets papier, Floticar est amorti en 1,5 à 3 mois grâce aux seules économies de temps administratif et à la première pénalité ou réparation lourde évitée.",
  },
];

export default function SimulatorContent() {
  return (
    <div className="relative isolate overflow-hidden pt-28 pb-32 sm:pt-36">
      {/* Lueurs d'arrière-plan */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-500/15 blur-[150px] motion-safe:animate-aurora" />
      </div>

      {/* EN-TÊTE SEO & PROPOSITION DE VALEUR */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <Calculator size={14} />
              Simulateur ROI &amp; Coûts de Flotte Automobile
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Calculez vos{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                économies de flotte
              </span>{" "}
              en 2 minutes
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Mesurez l&apos;impact financier d&apos;une gestion centralisée sur votre parc automobile :
              réduction du temps administratif, maîtrise du carburant, entretiens préventifs et
              suppression des oublis de contrôle technique.
            </p>
          </motion.div>
        </div>

        {/* COMPOSANT INTERACTIF DU SIMULATEUR */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE_OUT_EXPO }}
        >
          <FleetSimulatorTool />
        </motion.div>
      </section>

      {/* SECTION PÉDAGOGIQUE : LES 4 PILIERS D'ÉCONOMIES */}
      <section className="mx-auto mt-28 max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-700 uppercase dark:text-cyan-400">
            <TrendingUp size={14} />
            Méthodologie de calcul transparente
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Comment Floticar réduit le coût réel de votre parc ?
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-400">
            Notre simulateur évalue 4 postes de dépenses où les tableurs Excel et les carnets papier
            génèrent le plus de pertes financières invisibles.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SAVING_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <GlowCard
                key={idx}
                enableTilt={false}
                className="flex flex-col justify-between !p-7 transition-all duration-300 hover:border-blue-500/30"
              >
                <div>
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${pillar.bg} ${pillar.color}`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {pillar.desc}
                  </p>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </section>

      {/* SECTION FAQ DU SIMULATEUR */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Questions fréquentes sur la simulation ROI
          </h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
            Tout savoir sur nos hypothèses économiques et le calcul de rentabilité.
          </p>
        </div>

        <div className="space-y-4">
          {SIMULATOR_FAQ.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]"
            >
              <h3 className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                {item.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL VERS DÉMO & TARIFS */}
      <section className="mx-auto mt-24 max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-14 dark:border-cyan-500/20 dark:from-blue-950/40 dark:via-cyan-950/20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
            <Sparkles size={14} />
            Passez de l&apos;estimation à l&apos;action
          </div>

          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Validez ces gains sur votre propre flotte
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Réservez une démonstration personnalisée de 15 minutes ou testez Floticar gratuitement
            pendant 14 jours sur vos véhicules réels.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demande-de-demo"
              className="group relative inline-flex h-13 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-sm font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] sm:w-auto sm:text-base"
            >
              <span>Demander une démo personnalisée</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white/80 px-8 text-sm font-bold text-gray-900 transition-all hover:bg-gray-100 sm:w-auto sm:text-base dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              <span>Consulter les tarifs Floticar</span>
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-5 text-xs text-gray-500 dark:text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 size={14} className="text-emerald-500" /> Essai 14 jours sans engagement
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} className="text-cyan-500" /> Déploiement en 24h
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

