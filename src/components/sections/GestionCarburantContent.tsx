"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Fuel,
  BarChart3,
  TrendingDown,
  Receipt,
  Camera,
  ShieldCheck,
  ArrowRight,
  ChevronDown,
  Sparkles,
  CreditCard,
  CheckCircle2,
  AlertCircle,
  FileText,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const FUEL_PAINS = [
  {
    icon: TrendingDown,
    title: "Le 2ème poste de coût le plus lourd",
    description:
      "Le carburant représente entre 20% et 30% du TCO de votre flotte. Sans pilotage analytique, des milliers d'euros partent en fumée chaque année.",
    glow: "rgba(239, 68, 68, 0.25)",
  },
  {
    icon: Receipt,
    title: "Tickets perdus et TVA non récupérée",
    description:
      "Les reçus thermiques s'effacent ou s'égarent dans les boîtes à gants. Résultat : vous perdez le bénéfice de la déduction fiscale sur la TVA.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: Fuel,
    title: "Surconsommation invisible par véhicule",
    description:
      "Pneus sous-gonflés, filtres encrassés ou conduite nerveuse : sans suivi au L/100 km, les dérives mécaniques restent indétectables.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: CreditCard,
    title: "Rapprochement bancaire fastidieux",
    description:
      "Vos équipes comptables perdent des heures à croiser relevés de cartes pétrolières, notes de frais et utilisations effectives des véhicules.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
];

const FUEL_SOLUTIONS = [
  {
    icon: Camera,
    title: "Dématérialisation par photo en station",
    description:
      "À la pompe, le conducteur prend en photo son reçu de caisse. Le ticket est archivé avec date, volume, montant HT/TTC et immatriculation.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: BarChart3,
    title: "Calcul automatique de la consommation L/100 km",
    description:
      "En croisant les litres ajoutés et les kilomètres déclarés, Floticar calcule la consommation réelle et alerte en cas d'écart anormal.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: Receipt,
    title: "Export comptable prêt pour la TVA",
    description:
      "Ventilation instantanée par énergie (diesel, essence, électricité, AdBlue) avec justificatifs numériques certifiés pour votre expert-comptable.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Contrôle anti-fraude & cohérence réservoir",
    description:
      "Détectez immédiatement un volume de carburant supérieur à la capacité physique du réservoir ou un plein effectué le week-end non autorisé.",
    glow: "rgba(236, 72, 153, 0.25)",
  },
];

const METRICS = [
  {
    value: "100%",
    label: "de TVA récupérée sur le carburant",
    subtext: "Zéro reçu fiscal égaré dans la boîte à gants",
    color: "text-blue-600 dark:text-cyan-400",
  },
  {
    value: "-15%",
    label: "de consommation de carburant",
    subtext: "grâce à la détection des dérives et à l'éco-conduite",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    value: "2h/sem",
    label: "gagnées par la comptabilité",
    subtext: "sur le rapprochement bancaire et les cartes pétrolières",
    color: "text-teal-600 dark:text-teal-400",
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
  {
    question: "Peut-on gérer les véhicules électriques et les recharges ?",
    answer:
      "Absolument. Floticar gère aussi bien le carburant thermique (diesel, SP95/98, E85) que l'AdBlue et les sessions de recharge pour véhicules 100% électriques et hybrides rechargeables.",
  },
];

export default function GestionCarburantContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-teal-500/15 to-emerald-500/10 blur-[160px] motion-safe:animate-aurora" />
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
              <Fuel size={14} /> Maîtrise Analytique du Carburant & TCO
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Gestion du carburant de votre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                flotte automobile.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Le carburant est votre poste de dépense le plus imprévisible. Dématérialisez les tickets de caisse par photo, analysez les consommations réelles aux 100 km et récupérez 100% de votre TVA sans paperasse.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Découvrir le module carburant</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Consulter les tarifs
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Compatible toutes cartes pétrolières • Export comptable FEC • Zéro reçu égaré
            </p>
          </motion.div>
        </div>
      </section>

      {/* SIMULATEUR TICKET / CONSO PREVIEW */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <GlowCard
              glowColor="rgba(16, 185, 129, 0.3)"
              className="relative overflow-hidden !p-8 sm:!p-10"
            >
              <div className="flex flex-col justify-between gap-6 border-b border-gray-200/80 pb-6 sm:flex-row sm:items-center dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/25">
                    <Fuel size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        Plein Station TotalEnergies — Gazole B7
                      </span>
                      <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Validé & Rapproché
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                      Citroën Berlingo (ET-942-LM) • 18/10/2026 à 14h22
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Total TTC</span>
                  <span className="font-mono text-2xl font-extrabold text-gray-900 dark:text-white">
                    94,40 €
                  </span>
                </div>
              </div>

              {/* Data grid */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4.5 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Volume injecté</div>
                  <div className="mt-1 font-mono text-xl font-bold text-gray-900 dark:text-white">
                    52,15 Litres
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 size={12} /> Réservoir 55L (Conforme)
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4.5 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-xs text-gray-500 dark:text-gray-400">Consommation moyenne</div>
                  <div className="mt-1 font-mono text-xl font-bold text-gray-900 dark:text-white">
                    5,8 L / 100 km
                  </div>
                  <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">
                    899 km parcourus depuis dernier plein
                  </p>
                </div>

                <div className="rounded-2xl border border-gray-200/80 bg-gray-50/70 p-4.5 dark:border-white/5 dark:bg-white/[0.02]">
                  <div className="text-xs text-gray-500 dark:text-gray-400">TVA Récupérable (100%)</div>
                  <div className="mt-1 font-mono text-xl font-bold text-emerald-600 dark:text-emerald-400">
                    15,73 €
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-[11px] text-gray-500 dark:text-gray-400">
                    <FileText size={12} /> Reçu photo archivé
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* METRICS ROI */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <GlowCard glowColor="rgba(16, 185, 129, 0.2)" className="flex h-full flex-col justify-center !p-7 text-center">
                  <div className={`text-4xl font-extrabold sm:text-5xl ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                    {metric.label}
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {metric.subtext}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DÉFIS CARBURANT */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-600 uppercase dark:text-red-400">
                <AlertCircle size={14} /> Pertes Financières
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Où s&apos;évapore le budget carburant de votre entreprise
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Sans rapprochement rigoureux, les gaspillages et les abus de consommation passent totalement sous les radars.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FUEL_PAINS.map((pain, idx) => {
              const Icon = pain.icon;
              return (
                <motion.div
                  key={pain.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={pain.glow} className="h-full !p-7 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
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

      {/* SOLUTIONS FLOTICAR */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">
                <Sparkles size={14} /> Contrôle & Traçabilité
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Comment Floticar vous redonne la maîtrise de vos dépenses
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Une technologie collaborative pour responsabiliser vos conducteurs et soulager le pôle comptable.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FUEL_SOLUTIONS.map((sol, idx) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={sol.glow} className="h-full !p-7 transition-all duration-300 hover:-translate-y-1.5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2.5 text-base font-bold text-gray-900 dark:text-white">
                      {sol.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {sol.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes sur la gestion du carburant
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Tout ce qu&apos;il faut savoir pour optimiser votre trésorerie et simplifier vos déclarations.
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
