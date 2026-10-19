"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, TrendingDown, Clock, ShieldCheck, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const FEATURES = [
    {
        icon: TrendingDown,
        title: "Maîtrise du TCO",
        desc: "Analysez avec précision le Coût Total de Possession de vos véhicules (TCO). Identifiez les postes de dépenses à optimiser (carburant, entretien, pénalités).",
    },
    {
        icon: Clock,
        title: "Gain de temps administratif",
        desc: "Fini les fichiers Excel obsolètes. Centralisez vos cartes grises, contrats d'assurance et procès-verbaux de contrôle technique en un seul endroit sécurisé.",
    },
    {
        icon: ShieldCheck,
        title: "Prévention des litiges",
        desc: "Digitalisez les états des lieux avec vos collaborateurs. Attribuez et suivez les amendes facilement pour éviter toute majoration coûteuse.",
    },
];

const BENEFITS = [
    "Suivi kilométrique en temps réel pour anticiper les fins de contrats en LLD/LOA",
    "Automatisation des rappels d'entretien (révisions, contrôle technique)",
    "Calcul automatisé des avantages en nature pour les véhicules de fonction",
    "Application mobile pour responsabiliser vos conducteurs"
];

export default function PMETPEPage() {
    return (
        <main className="flex flex-col overflow-x-hidden pt-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gray-50 px-6 py-24 dark:bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-50 dark:from-blue-900/20 dark:to-emerald-900/20" />
                
                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 mx-auto max-w-4xl text-center"
                >
                    <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                        <Briefcase size={16} /> Spécialisé PME & TPE
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                        La gestion de flotte pour <span className="text-blue-600 dark:text-blue-400">réduire vos coûts</span>.
                    </motion.h1>
                    
                    <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Un parc automobile mal géré est un gouffre financier silencieux. Floticar structure votre gestion de véhicules d&apos;entreprise pour maximiser votre rentabilité.
                    </motion.p>
                    
                    <motion.div variants={fadeUp} className="flex justify-center gap-4">
                        <Link href="/demande-de-demo" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-700">
                            Tester gratuitement <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* PROBLEM / SOLUTION SECTION */}
            <section className="px-6 py-24 dark:bg-[#030409]">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Arrêtez de perdre de l&apos;argent avec Excel.
                            </h2>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                La gestion sur tableur engendre des erreurs coûteuses : amendes majorées, dépassements kilométriques facturés au prix fort, ou usure prématurée par manque d&apos;entretien. Floticar vous protège.
                            </p>
                            <ul className="space-y-4">
                                {BENEFITS.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-950"
                        >
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                            <TrendingUp className="mb-6 h-12 w-12 text-blue-600 dark:text-blue-400" />
                            <h3 className="mb-4 text-xl font-bold dark:text-white">Retour sur Investissement (ROI)</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Nos clients PME constatent en moyenne une <strong className="text-gray-900 dark:text-white">réduction de 15% à 20%</strong> de leur TCO global sur la première année, tout en gagnant plusieurs jours de travail administratif par mois.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="bg-gray-50 px-6 py-24 dark:bg-gray-900/50">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Pensé pour les dirigeants et responsables administratifs
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                            Prenez des décisions éclairées grâce à des données fiables et centralisées.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {FEATURES.map((feat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
                            >
                                <feat.icon className="mb-6 h-10 w-10 text-blue-600 dark:text-blue-400" />
                                <h3 className="mb-3 text-lg font-bold dark:text-white">{feat.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
