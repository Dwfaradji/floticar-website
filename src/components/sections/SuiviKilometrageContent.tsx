"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gauge,
  TrendingDown,
  AlertTriangle,
  QrCode,
  ShieldCheck,
  ArrowRight,
  Clock,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const KILO_CHALLENGES = [
  {
    icon: AlertTriangle,
    title: "Pénalités de fin de contrat LLD/LOA",
    description:
      "Les kilomètres excédentaires sont facturés entre 0,10 € et 0,30 € le km. Dépasser de 15 000 km sur 5 véhicules peut vous coûter plus de 15 000 € à la restitution.",
    glow: "rgba(239, 68, 68, 0.25)",
  },
  {
    icon: Clock,
    title: "Relevés papier tardifs ou inexistants",
    description:
      "Courir après les conducteurs en fin de mois pour qu'ils notent leur compteur sur un tableau Excel est inefficace et conduit à des données obsolètes ou estimées.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: Gauge,
    title: "Échéances d'entretien ratées",
    description:
      "Les vidanges, courroies et révisions constructeur sont calibrées sur le kilométrage réel. Sans suivi fiable, le risque de casse mécanique augmente considérablement.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Justification des trajets URSSAF",
    description:
      "En cas de contrôle, l'URSSAF exige de distinguer l'usage professionnel des trajets personnels pour valider les avantages en nature et exonérations.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
];

const KILO_FEATURES = [
  {
    icon: QrCode,
    title: "Relevé par QR Code en 15 secondes",
    description:
      "À chaque prise de véhicule ou fin de tournée, le conducteur scanne le QR Code sur le tableau de bord et indique son kilométrage. Aucune application lourde à installer.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: TrendingDown,
    title: "Alerte de dérive kilométrique LLD",
    description:
      "Floticar compare le kilométrage réel à la courbe prévisionnelle de vos contrats de leasing pour vous permettre d'ajuster l'avenant avant la fin du bail.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: Gauge,
    title: "Déclenchement automatique des révisions",
    description:
      "Dès qu'un palier kilométrique est atteint (ex. 30 000 km), une alerte est envoyée au gestionnaire pour planifier le passage au garage sans délai.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Respect de la vie privée (sans mouchard GPS)",
    description:
      "Pas de géolocalisation permanente intrusive. Les conducteurs déclarent leur compteur en toute confiance, en conformité totale avec la CNIL et le RGPD.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
];

const METRICS = [
  {
    value: "0 €",
    label: "de frais d'installation de boîtier",
    subtext: "Fonctionne instantanément sur smartphone par QR Code",
    color: "text-blue-600 dark:text-cyan-400",
  },
  {
    value: "-100%",
    label: "de mauvaise surprise à restitution",
    subtext: "Projection continue des dépassements LLD / LOA",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    value: "15s",
    label: "par relevé conducteur",
    subtext: "Adoption immédiate sans formation préalable",
    color: "text-teal-600 dark:text-teal-400",
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
  {
    question: "Comment Floticar détecte-t-il les erreurs de saisie de compteur ?",
    answer:
      "Notre système applique un contrôle de cohérence automatique : si un conducteur saisit un kilométrage inférieur au précédent relevé ou anormalement supérieur (ex. 10 000 km en 24h), un avertissement visuel immédiat lui demande confirmation et prévient le gestionnaire.",
  },
];

export default function SuiviKilometrageContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-emerald-500/10 blur-[160px] motion-safe:animate-aurora" />
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
              <Gauge size={14} /> Suivi Kilométrique Précis & Fiable
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Suivi du kilométrage de votre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                flotte automobile.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Fini les compteurs relevés au hasard et les pénalités financières en fin de leasing. Collectez les kilomètres réels de vos véhicules via QR Code mobile et planifiez vos entretiens au moment exact.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Découvrir le module kilométrique</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/remplacer-excel-gestion-flotte"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Remplacer vos tableurs Excel
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Sans matériel ni boîtier OBD • Conforme RGPD • Export Excel instantané
            </p>
          </motion.div>
        </div>
      </section>

      {/* SIMULATEUR / PREVIEW TRAJECTOIRE LLD */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.3)"
              className="relative overflow-hidden !p-8 sm:!p-10"
            >
              <div className="flex flex-col justify-between gap-6 border-b border-gray-200/80 pb-6 sm:flex-row sm:items-center dark:border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25">
                    <Gauge size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        Contrat LLD 36 mois / 90 000 km
                      </span>
                      <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        Dans les clous
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                      Mois 20 sur 36 • Renault Kangoo (FG-721-RP)
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Compteur actuel</span>
                  <span className="font-mono text-2xl font-extrabold text-gray-900 dark:text-white">
                    48 320 km
                  </span>
                </div>
              </div>

              {/* Progress gauge */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between text-xs font-semibold text-gray-600 dark:text-gray-300">
                  <span>Trajectoire théorique : 50 000 km</span>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">
                    Écart : -1 680 km (Marge sécurisée)
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-white/5">
                  <div className="h-full w-[53%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />
                </div>
                <div className="flex justify-between text-[11px] text-gray-400">
                  <span>0 km (Départ)</span>
                  <span>90 000 km (Fin de contrat)</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 p-4 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-400">
                ✨ Prochaine révision planifiée automatiquement à 60 000 km — Notification gestionnaire prévue dans 4 mois.
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
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
                <GlowCard glowColor="rgba(59, 130, 246, 0.2)" className="flex h-full flex-col justify-center !p-7 text-center">
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

      {/* DÉFIS DU KILOMÉTRAGE */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-red-600 uppercase dark:text-red-400">
                <AlertTriangle size={14} /> Risques Financiers
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Pourquoi un suivi kilométrique approximatif coûte si cher
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Sans relevés fréquents et automatisés, les dérives s&apos;accumulent en silence jusqu&apos;à la facture de clôture.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KILO_CHALLENGES.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={challenge.glow} className="h-full !p-7 transition-all duration-300 hover:-translate-y-1">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2 text-base font-bold text-gray-900 dark:text-white">
                      {challenge.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {challenge.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITÉS */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Sparkles size={14} /> La Solution Floticar
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Un relevé kilométrique sans effort pour le terrain et le bureau
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                La simplicité du QR Code élimine les frictions et responsabilise vos conducteurs.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {KILO_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={feat.glow} className="h-full !p-7 transition-all duration-300 hover:-translate-y-1.5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                      <Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2.5 text-base font-bold text-gray-900 dark:text-white">
                      {feat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {feat.description}
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
              Questions fréquentes sur le suivi kilométrique
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Des réponses concrètes pour fiabiliser le suivi de vos compteurs sans contrainte.
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
