"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Wrench,
  BellRing,
  FileCheck,
  ShieldAlert,
  ArrowRight,
  AlertTriangle,
  History,
  TrendingDown,
  ChevronDown,
  Sparkles,
  Gauge,
  Car,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const MAINTENANCE_FEATURES = [
  {
    icon: BellRing,
    title: "Alertes intelligentes & prédictives",
    description:
      "Soyez notifié par email ou notification mobile avant chaque échéance : contrôle technique, révision constructeur, courroie ou visite médicale des conducteurs.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: FileCheck,
    title: "Historique & GED des factures",
    description:
      "Fini les classeurs perdus. Centralisez devis, factures de garage, rapports de CT et garanties directement rattachés à la fiche de chaque véhicule.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: ShieldAlert,
    title: "Signalement d'avaries avec photo",
    description:
      "Vos conducteurs signalent instantanément un voyant allumé ou un claquement suspect avec photo depuis leur smartphone. Vous traitez l'incident sans délai.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: Gauge,
    title: "Double déclencheur Date & Kilométrage",
    description:
      "Une révision tous les 20 000 km ou tous les ans ? Floticar croise les relevés kilométriques mobiles et les dates pour déclencher l'alerte au moment exact.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  {
    icon: TrendingDown,
    title: "Réduction des coûts d'immobilisation",
    description:
      "La maintenance préventive élimine les pannes de dernière minute qui bloquent vos collaborateurs et coûtent jusqu'à 3x plus cher en dépannage d'urgence.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: History,
    title: "Valorisation à la revente",
    description:
      "Un carnet d'entretien numérique 100% à jour et documenté augmente la valeur de revente de votre flotte de 10 à 15% lors du renouvellement.",
    glow: "rgba(236, 72, 153, 0.25)",
  },
];

const METRICS = [
  {
    value: "-40%",
    label: "de pannes immobilisantes",
    subtext: "grâce aux révisions planifiées à temps",
    color: "text-blue-600 dark:text-cyan-400",
  },
  {
    value: "0 €",
    label: "d'amende pour CT dépassé",
    subtext: "alertes automatiques 30 et 15 jours avant",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    value: "+15%",
    label: "de valeur résiduelle",
    subtext: "sur le marché de l'occasion lors du rachat",
    color: "text-teal-600 dark:text-teal-400",
  },
];

const FAQS = [
  {
    question: "Comment Floticar sait-il quand un véhicule a atteint son kilométrage d'entretien ?",
    answer:
      "Grâce aux relevés kilométriques réguliers effectués par vos conducteurs lors de chaque prise ou restitution par QR Code mobile. Notre algorithme calcule également la moyenne kilométrique mensuelle pour projeter précisément la date d'échéance.",
  },
  {
    question: "Peut-on personnaliser les types d'alertes d'entretien ?",
    answer:
      "Oui. Vous pouvez configurer des alertes personnalisées pour chaque catégorie de véhicule : vidange moteur, révision constructeur, contrôle technique, contrôle pollution annuel pour les utilitaires, éthylotest antidémarrage (EAD), ou hayon élévateur TPMR.",
  },
  {
    question: "Les conducteurs peuvent-ils signaler un problème pendant leur trajet ?",
    answer:
      "Tout à fait. En scannant le QR Code présent dans le véhicule, le conducteur a accès à un bouton 'Signaler une anomalie' : il sélectionne le type de problème, ajoute un commentaire et une photo du voyant ou de la pièce endommagée. Le gestionnaire de parc est immédiatement notifié.",
  },
  {
    question: "Puis-je importer mon historique d'entretien existant depuis Excel ?",
    answer:
      "Oui. Nous proposons un outil d'importation simple et gratuit pour migrer vos données de véhicules, dates de dernier contrôle technique et kilométrages depuis votre ancien tableur Excel ou logiciel de gestion.",
  },
];

export default function SuiviEntretienContent() {
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
              <Wrench size={14} /> Maintenance Prédictive & Conformité
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Automatisez le suivi d&apos;entretien de votre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                flotte automobile.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Ne ratez plus jamais un contrôle technique ou une révision constructeur. Floticar anticipe la maintenance de votre parc pour garantir la sécurité de vos équipes et éradiquer les pannes coûteuses.
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
                <span className="relative">Découvrir le module entretien</span>
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
              Sans engagement • Import Excel en 2 minutes • Alertes automatiques incluses
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTERACTIVE CARNET DE SANTÉ PREVIEW */}
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/25">
                    <Car size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        Peugeot 208 — Service Commercial
                      </span>
                      <span className="rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                        En service
                      </span>
                    </div>
                    <span className="font-mono text-xs text-gray-500 dark:text-gray-400">
                      Immat: GA-384-TZ • 68 450 km
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-amber-600 dark:text-amber-400">
                    <AlertTriangle size={13} /> 1 échéance urgente
                  </span>
                </div>
              </div>

              {/* Status items */}
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 p-4.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-amber-700 uppercase dark:text-amber-400">
                      Contrôle Technique
                    </span>
                    <span className="rounded-md bg-amber-500/20 px-2 py-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300">
                      J-14
                    </span>
                  </div>
                  <div className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                    Échéance le 12/11/2026
                  </div>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Rendez-vous pré-réservé chez DEKRA
                  </p>
                </div>

                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-emerald-700 uppercase dark:text-emerald-400">
                      Vidange & Filtres
                    </span>
                    <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:text-emerald-300">
                      À jour
                    </span>
                  </div>
                  <div className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                    Prochaine à 80 000 km
                  </div>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Reste 11 550 km (estimation: 4 mois)
                  </p>
                </div>

                <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-4.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-blue-700 uppercase dark:text-cyan-400">
                      Pneumatiques
                    </span>
                    <span className="rounded-md bg-blue-500/20 px-2 py-0.5 text-[10px] font-bold text-blue-800 dark:text-cyan-300">
                      Conforme
                    </span>
                  </div>
                  <div className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                    Pneus 4 saisons (usure 30%)
                  </div>
                  <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                    Dernière vérification pression le 15/10
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* METRICS ROI HIGHLIGHT */}
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

      {/* FEATURES SECTION */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Sparkles size={14} /> Fonctionnalités Clés
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Un carnet de santé numérique complet pour chaque véhicule
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Floticar surveille vos échéances en arrière-plan pour que vous n&apos;ayez plus jamais à y penser.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MAINTENANCE_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={feat.glow} className="h-full !p-8 transition-all duration-300 hover:-translate-y-1.5">
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                      <Icon size={24} strokeWidth={1.75} />
                    </div>
                    <h3 className="mb-2.5 text-lg font-bold text-gray-900 dark:text-white">
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
              Questions fréquentes sur la maintenance
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Tout ce que vous devez savoir pour automatiser l&apos;entretien de votre parc.
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
