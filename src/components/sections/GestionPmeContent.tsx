"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  TrendingDown,
  Clock,
  ShieldCheck,
  ArrowRight,
  BarChart3,
  Car,
  FileText,
  AlertOctagon,
  Users,
  Building2,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const PME_CHALLENGES = [
  {
    icon: TrendingDown,
    title: "Coûts de possession opaques (TCO)",
    description:
      "Sans tableau de bord consolidé, il est impossible de savoir quel véhicule coûte le plus cher entre leasing, carburant, entretiens imprévus et pneumatiques.",
    glow: "rgba(244, 63, 94, 0.25)",
  },
  {
    icon: Clock,
    title: "Gestion administrative déléguée sans outil",
    description:
      "Dans 80% des PME, la flotte est gérée par le dirigeant, l'Office Manager ou le comptable, pour qui c'est une charge mentale chronophage supplémentaire.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: AlertOctagon,
    title: "Amendes pour non-désignation de conducteur",
    description:
      "En France, l'employeur est légalement tenu de désigner l'auteur d'une infraction routière sous 45 jours sous peine d'une amende forfaitaire de 450 € à 1 875 € par avis.",
    glow: "rgba(239, 68, 68, 0.25)",
  },
  {
    icon: Car,
    title: "Surcoûts kilométriques en fin de leasing (LLD/LOA)",
    description:
      "Les kilomètres supplémentaires en fin de contrat sont facturés au prix fort. Sans suivi régulier, la régularisation de fin de contrat impacte lourdement la trésorerie.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
];

const PME_FEATURES = [
  {
    icon: BarChart3,
    title: "Maîtrise du TCO et des dépenses réelles",
    description:
      "Analysez vos dépenses de carburant, factures de révision et frais annexes par véhicule ou par service. Détectez immédiatement les véhicules surconsommateurs.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Gestion des amendes & conformité légale",
    description:
      "Historique horodaté des assignations de conducteurs. Retrouvez en deux clics qui conduisait le véhicule au moment précis du flash pour une désignation sereine sur l'ANTAI.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: Car,
    title: "Suivi kilométrique préventif",
    description:
      "Anticipez vos fins de contrat de location longue durée. Ajustez vos contrats avant le terme pour éviter les pénalités kilométriques excessives.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: FileText,
    title: "Centralisation des documents obligatoires",
    description:
      "Fini les classeurs perdus : cartes grises, attestations d'assurance, procès-verbaux de contrôle technique et factures sont archivés dans la fiche de chaque véhicule.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: Users,
    title: "Application mobile pour vos collaborateurs",
    description:
      "Vos conducteurs accèdent à l'essentiel par QR Code : relevé kilométrique à chaque prise de service, déclaration d'anomalie avec photos et carnet de bord numérique.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  {
    icon: Building2,
    title: "Organisation multi-sites ou par agences",
    description:
      "Attribuez vos véhicules par entité, filiale ou dépôt, avec des droits d'accès différenciés pour les chefs de service et la direction.",
    glow: "rgba(236, 72, 153, 0.25)",
  },
];

const PME_FAQS = [
  {
    question: "Combien de temps faut-il pour mettre en place Floticar dans une PME ?",
    answer:
      "Moins de 24 heures. Vous nous transmettez vos fichiers actuels (Excel, exports comptables) et nous intégrons l'intégralité de vos véhicules, conducteurs et alertes sans que vous n'ayez à faire de saisie manuelle.",
  },
  {
    question: "Floticar nécessite-t-il l'installation de boîtiers OBD ou de traceurs GPS ?",
    answer:
      "Non, aucun boîtier physique ni matériel intrusif n'est nécessaire. Floticar fonctionne grâce à un QR Code apposé dans chaque véhicule et notre application mobile conducteur. Cela évite les coûts d'installation et respecte la vie privée des collaborateurs.",
  },
  {
    question: "Quelle est la rentabilité moyenne pour une flotte de 10 à 30 véhicules ?",
    answer:
      "Nos clients PME constatent une réduction moyenne de 15% à 20% de leurs coûts d'exploitation dès les premiers mois, principalement grâce à la suppression des amendes pour non-désignation, l'anticipation des entretiens et le contrôle des dérives carburant.",
  },
];

export default function GestionPmeContent() {
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
              <Briefcase size={14} /> Solution dédiée PME & TPE
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Solution de gestion de véhicules pour{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                PME et TPE.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Gérez votre parc automobile d&apos;entreprise sans perdre de temps : réduisez votre TCO, anticipez les contrôles techniques, suivez vos dépenses de carburant et sécurisez la désignation de vos conducteurs.
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
                <span className="relative">Demander une démonstration gratuite</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/remplacer-excel-gestion-flotte"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Vous utilisez Excel ? Voir notre comparatif
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Conforme RGPD • Données hébergées en France • Mise en route en 24h
            </p>
          </motion.div>
        </div>
      </section>

      {/* CHALLENGES DES PME */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
                <TrendingDown size={14} /> Les enjeux opérationnels
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Pourquoi la gestion de flotte est un casse-tête en PME
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Sans outil dédié, le suivi des véhicules d&apos;entreprise engendre des risques financiers et juridiques sous-estimés.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PME_CHALLENGES.map((challenge, idx) => {
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
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-blue-600 shadow-sm ring-1 ring-current/20 dark:bg-white/5 dark:text-cyan-400">
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

      {/* FEATURES PME */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Sparkles size={14} /> Fonctionnalités clés
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Tout ce dont votre PME a besoin pour piloter ses véhicules
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Une suite complète d&apos;outils conçue spécifiquement pour libérer du temps aux équipes dirigeantes et opérationnelles.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PME_FEATURES.map((feat, idx) => {
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

      {/* FAQS */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes des dirigeants de PME
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Des réponses concrètes pour vous aider à franchir le pas de la digitalisation.
            </p>
          </div>

          <div className="space-y-4">
            {PME_FAQS.map((faq) => (
              <GlowCard key={faq.question} glowColor="rgba(59, 130, 246, 0.2)" className="!p-7">
                <h3 className="flex items-center gap-2.5 text-base font-bold text-gray-900 dark:text-white">
                  <HelpCircle size={18} className="shrink-0 text-blue-600 dark:text-cyan-400" />
                  {faq.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
