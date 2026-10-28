"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Minus, HelpCircle, Sparkles, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

const PLANS = [
  {
    name: "Essentiel",
    badge: "Le plus populaire",
    desc: "Idéal pour digitaliser votre gestion et gagner immédiatement en visibilité.",
    price: "12,90€",
    period: "/ véhicule / mois",
    features: [
      "Fiches véhicules complètes & documents",
      "Gestion des conducteurs & assignations",
      "Suivi préventif des maintenances",
      "Tableau de bord de pilotage en temps réel",
      "Support prioritaire par email & chat",
    ],
    buttonText: "Commencer l'essai gratuit 14 jours",
    buttonStyle: "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-cyan-500/30",
    href: "/demande-de-demo",
    popular: true,
    glow: "rgba(59, 130, 246, 0.3)",
  },
  {
    name: "Premium",
    badge: "Sur-mesure",
    desc: "Pour les parcs exigeants nécessitant des automatisations avancées et un compte dédié.",
    price: "Sur devis",
    period: "selon vos besoins",
    features: [
      "Toutes les fonctionnalités de l'offre Essentiel",
      "Gestion complète des amendes & infractions",
      "Alertes prédictives & KPIs analytiques avancés",
      "Gestion fine des rôles & permissions (RBAC)",
      "Account Manager dédié & Support téléphonique 24/7",
    ],
    buttonText: "Demander un devis personnalisé",
    buttonStyle: "border border-gray-200 bg-white text-gray-900 hover:border-blue-400 hover:bg-gray-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
    href: "/contact",
    popular: false,
    glow: "rgba(139, 92, 246, 0.25)",
  },
];

const COMPARISON = [
  {
    category: "Véhicules & Conducteurs",
    features: [
      { name: "Inventaire complet du parc", essentiel: true, premium: true },
      { name: "Gestion des conducteurs & coordonnées", essentiel: true, premium: true },
      { name: "Historique d'assignations inaltérable", essentiel: true, premium: true },
      { name: "Gestion des contrats LLD / LOA", essentiel: true, premium: true },
      { name: "Module automatisé de gestion des amendes", essentiel: false, premium: true },
    ]
  },
  {
    category: "Maintenance & Dépenses",
    features: [
      { name: "Suivi des révisions & contrôles techniques", essentiel: true, premium: true },
      { name: "Suivi des pleins de carburant & consommations", essentiel: true, premium: true },
      { name: "Alertes automatiques par email & notifications", essentiel: true, premium: true },
      { name: "Tickets de caisse & justificatifs dématérialisés", essentiel: false, premium: true },
      { name: "Algorithme de maintenance prédictive", essentiel: false, premium: true },
    ]
  },
  {
    category: "Gouvernance & Sécurité",
    features: [
      { name: "Tableau de bord global & KPIs", essentiel: true, premium: true },
      { name: "Rapports d'export (CSV, PDF comptables)", essentiel: true, premium: true },
      { name: "Droits d'accès par rôles (RBAC multi-utilisateurs)", essentiel: false, premium: true },
      { name: "Accompagnement & Support", essentiel: "Email réactif", premium: "Téléphone 24/7 & Dédié" },
    ]
  }
];

export default function PricingSection() {
  return (
    <div className="relative isolate overflow-hidden pt-12 pb-36">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-500/15 blur-[160px] motion-safe:animate-aurora" />
      </div>

      {/* Hero Pricing */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <Sparkles size={14} />
              Sans engagement · Sans frais d&apos;installation
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Un modèle tarifaire pensé pour{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                votre rentabilité.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Chez Floticar, un logiciel de gestion doit vous faire gagner du temps et de l&apos;argent, pas alourdir vos charges. Notre tarification s&apos;ajuste au véhicule près chaque mois.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8, ease: EASE_OUT_EXPO }}
            >
              <GlowCard
                glowColor={plan.glow}
                className={`group relative flex h-full flex-col justify-between !p-8 transition-all duration-300 hover:-translate-y-1.5 sm:!p-10 ${
                  plan.popular ? "ring-2 ring-blue-500/40 dark:ring-cyan-400/40" : ""
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 rounded-tr-[2rem] rounded-bl-2xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-1.5 text-xs font-bold tracking-wider text-white uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                      {plan.name}
                    </h2>
                    {!plan.popular && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 dark:bg-white/5 dark:text-gray-400">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="min-h-[40px] text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {plan.desc}
                  </p>

                  <div className="my-8 flex items-baseline gap-2 border-y border-gray-100 py-6 dark:border-white/5">
                    <span className="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl dark:text-white">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  <div className="mb-10 space-y-3.5">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600 dark:text-cyan-400" />
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={plan.href}
                  className={`group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl px-6 py-4 text-base font-bold transition-all duration-300 hover:scale-[1.02] ${plan.buttonStyle}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"
                  />
                  <span className="relative">{plan.buttonText}</span>
                  <ArrowRight size={16} className="relative transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROI Text Block */}
      <section className="mx-auto mt-28 max-w-4xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
          className="relative overflow-hidden rounded-[2.5rem] border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-teal-500/5 to-transparent p-8 shadow-xl backdrop-blur-xl sm:p-12 dark:border-emerald-500/30 dark:from-emerald-950/30"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
            <TrendingUp size={14} />
            Retour sur investissement immédiat
          </div>

          <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Un investissement rentabilisé dès le premier mois
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
            <p>
              La gestion manuelle d&apos;une flotte via des tableurs engendre des coûts invisibles colossaux : retards d&apos;entretien provoquant des pannes lourdes, oublis de restitution entraînant des pénalités kilométriques, ou encore amendes majorées par manque de réactivité.
            </p>
            <p className="font-semibold text-gray-900 dark:text-white">
              En passant sur Floticar, nos clients constatent en moyenne une réduction de 15% à 20% de leur TCO (Coût Total de Possession). Pour seulement 12,90€ par mois et par véhicule, le logiciel se rembourse de lui-même dès la première pénalité évitée.
            </p>
            <div className="pt-2">
              <Link
                href="/simulateur"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02] hover:bg-emerald-500"
              >
                <span>Calculer le ROI exact de ma flotte</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto mt-28 max-w-5xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Comparez nos offres en détail
            </h2>
            <p className="mx-auto max-w-2xl text-base text-gray-600 dark:text-gray-400">
              Découvrez avec précision les outils inclus dans chaque formule pour choisir celle qui correspond le mieux à la taille de votre organisation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-[2rem] border border-gray-200/80 bg-white/80 shadow-xl backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/80">
            <table className="w-full min-w-[700px] text-left">
              <thead>
                <tr className="border-b border-gray-200/80 dark:border-white/10">
                  <th className="w-1/2 p-6 text-sm font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">Fonctionnalités</th>
                  <th className="w-1/4 border-l border-gray-200/80 p-6 text-center text-lg font-bold text-gray-900 dark:border-white/10 dark:text-white">Essentiel</th>
                  <th className="w-1/4 border-l border-gray-200/80 p-6 text-center text-lg font-bold text-blue-600 dark:border-white/10 dark:text-cyan-400">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {COMPARISON.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-gray-50/80 dark:bg-white/[0.02]">
                      <td colSpan={3} className="p-4 px-6 text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="transition-colors hover:bg-blue-50/30 dark:hover:bg-white/[0.02]">
                        <td className="p-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">{feat.name}</td>
                        <td className="border-l border-gray-100 p-4 text-center dark:border-white/5">
                          {typeof feat.essentiel === "boolean" ? (
                            feat.essentiel ? (
                              <CheckCircle2 className="mx-auto h-5 w-5 text-gray-900 dark:text-white" />
                            ) : (
                              <Minus className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-700" />
                            )
                          ) : (
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">{feat.essentiel}</span>
                          )}
                        </td>
                        <td className="border-l border-gray-100 p-4 text-center dark:border-white/5">
                          {typeof feat.premium === "boolean" ? (
                            feat.premium ? (
                              <CheckCircle2 className="mx-auto h-5 w-5 text-cyan-500" />
                            ) : (
                              <Minus className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-700" />
                            )
                          ) : (
                            <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">{feat.premium}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </section>

      {/* FAQ CTA */}
      <section className="mx-auto mt-28 max-w-2xl px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          <GlowCard glowColor="rgba(59, 130, 246, 0.25)" className="!p-10 text-center">
            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-blue-600 dark:text-cyan-400" />
            <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">Vous avez encore des questions ?</h2>
            <p className="mb-8 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Retrouvez toutes nos réponses sur le paiement, la sécurité des données, l&apos;import de vos données Excel et la configuration initiale.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-100 px-8 py-3.5 text-sm font-bold text-gray-900 transition-all duration-300 hover:scale-[1.03] hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
            >
              <span>Consulter la FAQ complète</span>
              <ArrowRight size={14} />
            </Link>
          </GlowCard>
        </motion.div>
      </section>
    </div>
  );
}
