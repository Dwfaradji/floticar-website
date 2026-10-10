"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Minus, HelpCircle } from "lucide-react";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/animations";

const PLANS = [
  {
    name: "Essentiel",
    badge: "Le plus populaire",
    desc: "Idéal pour digitaliser votre gestion et gagner en visibilité.",
    price: "12,90€",
    period: "/ véhicule / mois",
    features: [
      "Fiches véhicules complètes",
      "Gestion des conducteurs",
      "Suivi des maintenances",
      "Tableau de bord basique",
      "Support par email",
    ],
    buttonText: "Commencer l'essai gratuit",
    buttonStyle: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100",
    href: "/demande-de-demo",
    popular: true,
  },
  {
    name: "Premium",
    badge: "Sur-mesure",
    desc: "Pour les grandes flottes nécessitant un pilotage fin et des automatisations.",
    price: "Sur devis",
    period: "",
    features: [
      "Toutes les fonctionnalités Essentiel",
      "Gestion des amendes & infractions",
      "Alertes prédictives & KPIs avancés",
      "Rôles multiples (RBAC)",
      "Support téléphonique & Account Manager",
    ],
    buttonText: "Demander un devis",
    buttonStyle: "bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 dark:bg-transparent dark:text-white dark:border-white/20 dark:hover:bg-white/5",
    href: "/contact",
    popular: false,
  },
];

const COMPARISON = [
  {
    category: "Véhicules & Conducteurs",
    features: [
      { name: "Inventaire des véhicules", essentiel: true, premium: true },
      { name: "Gestion des conducteurs", essentiel: true, premium: true },
      { name: "Historique d'assignations", essentiel: true, premium: true },
      { name: "Gestion des contrats", essentiel: true, premium: true },
      { name: "Gestion des amendes", essentiel: false, premium: true },
    ]
  },
  {
    category: "Maintenance & Dépenses",
    features: [
      { name: "Suivi des interventions", essentiel: true, premium: true },
      { name: "Suivi du carburant", essentiel: true, premium: true },
      { name: "Alertes automatiques (CT, révisions)", essentiel: true, premium: true },
      { name: "Tickets dématérialisés", essentiel: false, premium: true },
      { name: "Maintenance prédictive", essentiel: false, premium: true },
    ]
  },
  {
    category: "Gouvernance & Support",
    features: [
      { name: "Tableau de bord global", essentiel: true, premium: true },
      { name: "Rapports d'export (CSV, PDF)", essentiel: true, premium: true },
      { name: "Accès par rôles (RBAC)", essentiel: false, premium: true },
      { name: "Support Client", essentiel: "Email", premium: "Téléphone 24/7" },
    ]
  }
];



export default function PricingSection() {
  return (
    <div className="bg-gray-50 pt-20 pb-32 dark:bg-[#030409]">
      {/* Hero Pricing */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
              Un modèle tarifaire pensé pour <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">votre rentabilité.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-500 dark:text-gray-400">
            {`  Chez Floticar, nous croyons qu'un logiciel de gestion doit vous faire gagner de l'argent, pas vous en coûter. 
              C'est pourquoi notre tarification est transparente, sans coûts cachés, et s'adapte au véhicule près. 
              Digitalisez votre flotte dès aujourd'hui.`}
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2"
        >
          {PLANS.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={`relative flex flex-col justify-between overflow-hidden rounded-[2rem] border p-10 transition-all duration-300 ${
                plan.popular
                  ? "border-blue-200 bg-white shadow-[0_30px_60px_-15px_rgba(59,130,246,0.15)] dark:border-blue-500/30 dark:bg-[#0a0a0a] dark:shadow-[0_0_50px_rgba(59,130,246,0.1)]"
                  : "border-gray-200 bg-white/60 shadow-xl shadow-gray-200/20 backdrop-blur-xl dark:border-white/10 dark:bg-[#0a0a0a]/50 dark:shadow-none"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 rounded-tr-[2rem] rounded-bl-3xl bg-gradient-to-br from-blue-600 to-cyan-500 px-6 py-2 text-xs font-bold tracking-wider text-white uppercase shadow-lg">
                  {plan.badge}
                </div>
              )}

              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">{plan.desc}</p>
                
                <div className="mt-8 mb-8 flex items-baseline gap-2">
                  <span className="text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">{plan.period}</span>}
                </div>

                <div className="mb-10 space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-cyan-400" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={plan.href}
                className={`flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition-all duration-300 ${plan.buttonStyle}`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ROI Text Block */}
      <section className="mx-auto mt-32 max-w-4xl px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
            Un investissement rentabilisé en quelques semaines
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
            <p>
             { `La gestion manuelle d'une flotte automobile via des tableurs engendre des coûts invisibles colossaux : retards d'entretien provoquant des pannes lourdes, oublis de restitution entraînant des pénalités kilométriques, ou encore amendes majorées par manque de réactivité.`}
            </p>
            <p>
              En passant sur Floticar, <strong>nos clients constatent en moyenne une réduction de 15% à 20% de leur TCO</strong> (Coût Total de Possession). Pour seulement 12,90€ par mois par véhicule, le logiciel se rembourse de lui-même dès la première pénalité évitée ou le premier litige résolu.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto mt-32 max-w-5xl px-6">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 dark:text-white">Comparez nos offres en détail</h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-gray-500 dark:text-gray-400">
            Découvrez avec précision les outils inclus dans chaque formule pour choisir celle qui correspond le mieux à la taille de votre organisation.
          </p>
          
          <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/20 dark:border-white/10 dark:bg-[#0a0a0a] dark:shadow-none">
            <table className="w-full min-w-[800px] text-left">
              <thead>
                <tr className="border-b border-gray-200 dark:border-white/10">
                  <th className="w-1/2 p-6 text-sm font-medium text-gray-500 dark:text-gray-400">Fonctionnalités</th>
                  <th className="w-1/4 border-l border-gray-200 p-6 text-center text-lg font-bold text-gray-900 dark:border-white/10 dark:text-white">Essentiel</th>
                  <th className="w-1/4 border-l border-gray-200 p-6 text-center text-lg font-bold text-blue-600 dark:border-white/10 dark:text-blue-400">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                {COMPARISON.map((section, idx) => (
                  <React.Fragment key={idx}>
                    <tr className="bg-gray-50 dark:bg-white/[0.02]">
                      <td colSpan={3} className="p-4 px-6 text-xs font-bold tracking-wider text-gray-900 uppercase dark:text-white">
                        {section.category}
                      </td>
                    </tr>
                    {section.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="transition-colors hover:bg-gray-50/50 dark:hover:bg-white/[0.01]">
                        <td className="p-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-300">{feat.name}</td>
                        <td className="border-l border-gray-200 p-4 text-center dark:border-white/10">
                          {typeof feat.essentiel === "boolean" ? (
                            feat.essentiel ? <CheckCircle2 className="mx-auto h-5 w-5 text-gray-900 dark:text-white" /> : <Minus className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-700" />
                          ) : (
                            <span className="text-sm font-medium text-gray-900 dark:text-white">{feat.essentiel}</span>
                          )}
                        </td>
                        <td className="border-l border-gray-200 p-4 text-center dark:border-white/10">
                          {typeof feat.premium === "boolean" ? (
                            feat.premium ? <CheckCircle2 className="mx-auto h-5 w-5 text-blue-600 dark:text-blue-400" /> : <Minus className="mx-auto h-5 w-5 text-gray-300 dark:text-gray-700" />
                          ) : (
                            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{feat.premium}</span>
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
      <section className="mx-auto mt-32 max-w-2xl px-6 text-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-xl shadow-gray-200/20 dark:border-white/10 dark:bg-[#0a0a0a] dark:shadow-none">
            <HelpCircle className="mx-auto mb-4 h-12 w-12 text-blue-600 dark:text-blue-400" />
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Vous avez encore des questions ?</h2>
            <p className="mb-8 text-base text-gray-500 dark:text-gray-400">
              Retrouvez toutes nos réponses sur le paiement, la sécurité des données et la configuration initiale.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-2xl bg-gray-100 px-8 py-4 text-sm font-semibold text-gray-900 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-200 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
            >
              Consulter la FAQ complète
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
