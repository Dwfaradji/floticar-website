"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeartPulse,
  Users,
  CalendarClock,
  ShieldCheck,
  CheckCircle2,
  Car,
  ArrowRight,
  FileCheck,
  AlertCircle,
  Building2,
  Sparkles,
  ChevronDown,
  Stethoscope,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const MEDICO_FEATURES = [
  {
    icon: Users,
    title: "Véhicules partagés en 2 clics",
    description:
      "Vos équipes éducatives, soignantes et coordinatrices réservent un véhicule en 30 secondes pour leurs visites à domicile ou l'accompagnement des usagers.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: CalendarClock,
    title: "Contrôles techniques & sécurité stricts",
    description:
      "Ne risquez jamais la sécurité d'une personne accompagnée. Soyez notifié automatiquement des échéances de contrôle technique, révision et visite des équipements TPMR.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Traçabilité des carnets de bord",
    description:
      "Fini le calvaire du cahier papier raturé. Chaque déplacement est consigné (kilométrage, motif de prise en charge, état du véhicule) directement sur smartphone.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: AlertCircle,
    title: "Signalement photo immédiat d'incidents",
    description:
      "Une anomalie ou un voyant ? L'éducateur ou soignant prend une photo lors de la restitution. La direction technique ou logistique est alertée en temps réel.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: FileCheck,
    title: "Suivi multi-sites et multi-budgets",
    description:
      "Ventilez les coûts et l'utilisation de vos véhicules selon vos structures : IME, SESSAD, ESAT, MAS, DITEP ou pôles administratifs d'association.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  {
    icon: Stethoscope,
    title: "Zéro traceur GPS intrusif",
    description:
      "Une solution éthique et bienveillante basée sur des QR Codes dans chaque véhicule. Respect total de la vie privée des soignants et secret professionnel.",
    glow: "rgba(236, 72, 153, 0.25)",
  },
];

const BENEFITS = [
  "Gestion fine des affectations par établissement (SESSAD, IME, ESAT, DITEP)",
  "Suivi rigoureux des frais de carburant et péages sans perte de justificatifs",
  "Rapports prêts pour les audits ARS, Conseils Départementaux et financeurs",
  "Tableau de bord centralisé pour le chef de service ou le responsable logistique",
  "Responsabilisation des équipes sans aucune intrusion GPS",
];

const CLUSTERS = [
  {
    href: "/secteurs/ime",
    title: "Instituts Médico-Éducatifs (IME)",
    badge: "Minibus & Tournées",
    description:
      "Planification des tournées de ramassage, contrôle des véhicules adaptés TPMR, vérification quotidienne des ceintures et carnets de bord numériques.",
    glow: "rgba(59, 130, 246, 0.3)",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    href: "/secteurs/sessad",
    title: "SESSAD & Soins à Domicile",
    badge: "Pool de Citadines",
    description:
      "Rotation fluide des citadines de pool partagées entre éducateurs spécialisés, psychologues et soignants itinérants pour les visites en école et à domicile.",
    glow: "rgba(16, 185, 129, 0.3)",
    gradient: "from-emerald-600 to-teal-600",
  },
];

const FAQS = [
  {
    question: "Floticar est-il conforme au RGPD et au respect de la vie privée des soignants ?",
    answer:
      "Absolument. Contrairement aux solutions traditionnelles qui installent des boîtiers GPS intrusifs qui géolocalisent les collaborateurs en continu, Floticar fonctionne par scan de QR Code à la prise et restitution du véhicule. Aucune géolocalisation en temps réel n'est effectuée, ce qui garantit la sérénité des équipes et le plein respect des recommandations de la CNIL.",
  },
  {
    question: "Est-ce adapté aux structures gérant plusieurs sites ou établissements ?",
    answer:
      "Oui. Floticar a été conçu pour les associations gestionnaires multi-établissements (IME, SESSAD, ESAT, FAM, MAS...). Vous pouvez affecter des véhicules à des sites précis, définir des gestionnaires par pôle et avoir une vision consolidée au niveau du siège associatif.",
  },
  {
    question: "Les éducateurs et intervenants occasionnels peuvent-ils s'en servir facilement ?",
    answer:
      "Oui, en moins de 30 secondes chrono ! Un QR Code collé sur le tableau de bord permet à l'intervenant d'ouvrir l'interface mobile sans téléchargement préalable d'application lourde. Il indique son kilométrage, valide le départ et part en intervention.",
  },
  {
    question: "Comment Floticar aide-t-il lors des contrôles et audits des autorités de tutelle ?",
    answer:
      "Les financeurs (ARS, Conseils Départementaux) demandent régulièrement des comptes sur l'utilisation du parc automobile et la sécurité des transports. Floticar génère des rapports complets en PDF ou Excel démontrant la conformité des contrôles techniques et le suivi d'entretien.",
  },
];

export default function MedicoSocialContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-emerald-500/15 to-teal-600/10 blur-[160px] motion-safe:animate-aurora" />
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
              <HeartPulse size={14} /> Pôle Médico-Social & Établissements de Santé
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              La gestion de flotte pour les{" "}
              <span className="bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-500 bg-clip-text text-transparent">
                IME, SESSAD et ESAT.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Gagnez un temps précieux sur la logistique automobile pour vous concentrer sur l&apos;essentiel : l&apos;accompagnement et la sécurité des personnes accueillies. Simplifiez la réservation de véhicules et fiabilisez vos carnets de bord.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-teal-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Découvrir la démo Médico-Social</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/gestion-flotte-association"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Découvrir l&apos;offre associations
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Sans installation de traceur • Conforme RGPD • Données hébergées en France
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS HIGHLIGHT */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.3)"
              className="relative overflow-hidden !p-8 sm:!p-10"
            >
              <div className="grid gap-8 text-center sm:grid-cols-3 sm:divide-x sm:divide-gray-200 dark:sm:divide-white/10">
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold text-blue-600 sm:text-4xl dark:text-cyan-400">
                    -25%
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    de temps logistique
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    pour les chefs de service et coordinations
                  </p>
                </div>

                <div className="space-y-1 sm:pl-8">
                  <div className="text-3xl font-extrabold text-emerald-600 sm:text-4xl dark:text-emerald-400">
                    100%
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Carnet de bord dématérialisé
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    zéro carnet papier perdu en boîte à gants
                  </p>
                </div>

                <div className="space-y-1 sm:pl-8">
                  <div className="text-3xl font-extrabold text-teal-600 sm:text-4xl dark:text-teal-400">
                    0 boîtier
                  </div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Éthique & bienveillant
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    aucun fliquage GPS des soignants et éducateurs
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / SOLUTION DUAL SECTION */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Building2 size={14} /> Réalité Médico-Sociale
              </div>
              <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Une réponse concrète aux exigences du secteur associatif et de santé.
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                Entre les déplacements imprévus des soignants, les navettes d&apos;usagers, le partage de véhicules multi-professionnels et la responsabilité pénale des directions, gérer une flotte sur un cahier papier est devenu un risque majeur.
              </p>

              <div className="space-y-4">
                {BENEFITS.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08, duration: 0.5 }}
                    className="flex items-start gap-3.5 rounded-2xl border border-gray-100 bg-white/60 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.02]"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              <GlowCard
                glowColor="rgba(16, 185, 129, 0.3)"
                className="relative overflow-hidden !p-8 sm:!p-10"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30">
                  <Car size={28} />
                </div>

                <div className="mb-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Impact Constate sur le terrain
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Libérez vos chefs de service de la logistique
                </h3>

                <p className="text-sm leading-relaxed text-gray-600 sm:text-base dark:text-gray-300">
                  Dans un établissement médico-social type de 15 véhicules, le chef de service ou la secrétaire générale passe en moyenne <strong className="text-gray-900 dark:text-white">6 à 8 heures par semaine</strong> à chercher qui a les clés, vérifier si le contrôle technique est dépassé ou ressaisir des tickets d&apos;essence.
                </p>

                <div className="mt-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50/70 p-4 text-xs font-medium text-gray-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-400">
                  💡 Floticar automatise toutes ces tâches : les plannings sont clairs, les alertes tombent au bon moment, et vous retrouvez la maîtrise de vos véhicules.
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CLUSTERS SECTORIELS SPECIFIQUES */}
      <section className="px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-teal-600 uppercase dark:text-teal-400">
                <Sparkles size={14} /> Déclinaisons Établissements
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Des configurations sur-mesure selon vos structures
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Chaque structure médico-sociale a ses spécificités. Floticar s&apos;adapte aux réalités de chaque établissement.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {CLUSTERS.map((cluster, idx) => (
              <motion.div
                key={cluster.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
              >
                <Link href={cluster.href} className="group block h-full">
                  <GlowCard
                    glowColor={cluster.glow}
                    className="flex h-full flex-col justify-between !p-8 transition-all duration-300 group-hover:-translate-y-1.5 sm:!p-10"
                  >
                    <div>
                      <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-cyan-300">
                        {cluster.badge}
                      </div>
                      <h3 className="mb-3 text-2xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-cyan-400">
                        {cluster.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {cluster.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center gap-2 text-sm font-bold text-blue-600 transition-transform duration-300 group-hover:translate-x-1 dark:text-cyan-400">
                      Explorer la solution dédiée <ArrowRight size={16} />
                    </div>
                  </GlowCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES CLÉS */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Users size={14} /> Fonctionnalités Médico-Sociales
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Des outils pensés pour les soignants et la logistique
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Une interface fluide, accessible sans formation complexe, même pour les intervenants occasionnels.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MEDICO_FEATURES.map((feat, idx) => {
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
              Questions fréquentes du secteur médico-social
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Des réponses concrètes pour rassurer vos équipes et votre conseil d&apos;administration.
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
