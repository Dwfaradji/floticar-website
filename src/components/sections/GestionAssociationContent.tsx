"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Car,
  Heart,
  QrCode,
  ShieldCheck,
  FileCheck2,
  ArrowRight,
  Camera,
  BellRing,
  PiggyBank,
  Receipt,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const ASSOC_CHALLENGES = [
  {
    icon: Users,
    title: "Multiplicité des conducteurs et bénévoles",
    description:
      "Salariés, bénévoles, volontaires en service civique : les véhicules associatifs passent de main en main. Savoir qui a utilisé quel véhicule devient vite un casse-tête.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: FileCheck2,
    title: "Le calvaire du carnet de bord papier",
    description:
      "Le cahier qui traîne dans la boîte à gants est souvent raturé, incomplet ou égaré. Impossible d'exploiter des relevés kilométriques illisibles pour la comptabilité.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: BellRing,
    title: "Entretiens et contrôles techniques oubliés",
    description:
      "Comme le véhicule n'est attribué à personne en propre, personne ne se sent responsable de la vidange ou du contrôle technique, jusqu'au jour de la panne ou de l'amende.",
    glow: "rgba(239, 68, 68, 0.25)",
  },
  {
    icon: PiggyBank,
    title: "Budgets associatifs contraints",
    description:
      "Les associations et fondations ne peuvent pas investir dans des solutions télématiques lourdes avec des abonnements GPS onéreux et des frais d'installation.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
];

const ASSOC_FEATURES = [
  {
    icon: QrCode,
    title: "Prise en main par QR Code en 30 secondes",
    description:
      "Un QR Code collé sur le tableau de bord permet à chaque conducteur de scanner avec son smartphone à la prise et à la restitution du véhicule, sans créer de compte complexe.",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  {
    icon: Camera,
    title: "État des lieux photo à la restitution",
    description:
      "Un voyant allumé ? Une rayure sur une aile ? Le bénévole ou salarié prend une photo directement depuis son téléphone. Le responsable est prévenu immédiatement.",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: ShieldCheck,
    title: "Responsabiliser sans fliquer",
    description:
      "Aucun traceur GPS invasif dans la voiture. Floticar privilégie la traçabilité collaborative et la transparence bienveillante, indispensable dans le monde associatif.",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: BellRing,
    title: "Alertes d'échéances pour le responsable",
    description:
      "Recevez des alertes automatiques par email avant les dates d'entretien, de révision constructeur et de contrôle technique pour garantir la sécurité des personnes transportées.",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  {
    icon: Receipt,
    title: "Centralisation des justificatifs de carburant",
    description:
      "Photographiez les tickets d'essence et de péage pour éviter les pertes et simplifier le travail du trésorier lors des clôtures comptables et des audits de subventions.",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  {
    icon: Car,
    title: "Fiche complète par véhicule",
    description:
      "Carte grise, attestation d'assurance, contrôle technique, historique des réparations : tout le dossier administratif est consultable en ligne à tout moment.",
    glow: "rgba(236, 72, 153, 0.25)",
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

export default function GestionAssociationContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-emerald-500/15 via-teal-400/15 to-blue-600/10 blur-[160px] motion-safe:animate-aurora" />
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
              <Heart size={14} /> Spécial Associations & Équipes partagées
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Logiciel de gestion de véhicules pour les{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 bg-clip-text text-transparent">
                associations.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Fini les carnets papier illisibles et les clés égarées. Facilitez le partage de vos véhicules entre salariés et bénévoles, anticipez les révisions et gardez le contrôle sur votre budget sans aucun matériel lourd ni intrusif.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-600 via-teal-500 to-blue-600 px-8 text-base font-bold text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-teal-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Demander une démo dédiée aux associations</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/secteurs/medico-social"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Vous êtes une structure médico-sociale ?
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              Sans engagement • Sans installation de boîtier • Données protégées en France
            </p>
          </motion.div>
        </div>
      </section>

      {/* DÉFIS ASSOCIATIFS */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                <Users size={14} /> Réalité du terrain
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Les défis du partage de véhicules en association
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Entre plannings mouvants et multiplicité des intervenants, sécuriser la logistique automobile est indispensable pour préserver vos ressources associatives.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ASSOC_CHALLENGES.map((challenge, idx) => {
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
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-sm ring-1 ring-emerald-500/20 dark:text-emerald-400">
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
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                <Sparkles size={14} /> Fonctionnalités adaptées
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Une organisation fluide au service de vos missions
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                La technologie doit vous libérer du temps administratif pour que vous puissiez vous concentrer sur vos actions sociales et solidaires.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ASSOC_FEATURES.map((feat, idx) => {
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
                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 shadow-sm ring-1 ring-emerald-500/20 dark:text-emerald-400">
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
              Questions fréquentes des gestionnaires associatifs
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Des réponses claires pour vous aider à adopter la solution sereinement.
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
                      ? "border-emerald-500/40 bg-white shadow-xl shadow-emerald-500/5 dark:border-emerald-400/30 dark:bg-white/[0.04]"
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
                          ? "rotate-180 bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
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
