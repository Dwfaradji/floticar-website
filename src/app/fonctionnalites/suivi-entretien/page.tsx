"use client";

import { motion } from "framer-motion";
import { ArrowRight, Wrench, BellRing, FileCheck, ShieldAlert, CheckCircle2, Settings } from "lucide-react";
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
        icon: BellRing,
        title: "Alertes automatiques",
        desc: "Soyez notifié avant chaque échéance importante : contrôle technique, révision constructeur, remplacement de courroie ou visite médicale du conducteur.",
    },
    {
        icon: FileCheck,
        title: "Historique centralisé",
        desc: "Retrouvez toutes les factures d'intervention, devis et rapports de contrôle technique liés à un véhicule en un seul clic.",
    },
    {
        icon: ShieldAlert,
        title: "Gestion des pannes",
        desc: "Vos conducteurs signalent instantanément une avarie depuis leur mobile. Vous pouvez déclencher et suivre l'intervention sans délai.",
    },
];

const BENEFITS = [
    "Augmente la durée de vie de vos véhicules grâce à un entretien régulier",
    "Évite les amendes liées au retard de contrôle technique",
    "Réduit drastiquement le risque de pannes immobilisantes",
    "Maintient la valeur de revente de votre parc automobile"
];

export default function SuiviEntretienPage() {
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
                        <Wrench size={16} /> Fonctionnalité Floticar
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                        <span className="text-blue-600 dark:text-blue-400">Automatisez</span> le suivi d'entretien de votre flotte.
                    </motion.h1>
                    
                    <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Ne ratez plus aucune révision ni contrôle technique. Floticar anticipe la maintenance de vos véhicules pour garantir la sécurité de vos conducteurs et éviter les pannes coûteuses.
                    </motion.p>
                    
                    <motion.div variants={fadeUp} className="flex justify-center gap-4">
                        <Link href="/demande-de-demo" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-700">
                            Voir comment ça marche <ArrowRight size={18} />
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
                                Prévenir plutôt que guérir.
                            </h2>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                La majorité des surcoûts d'une flotte automobile provient d'un manque de maintenance préventive. Un véhicule immobilisé, c'est un collaborateur à l'arrêt et une perte d'exploitation.
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
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                            <Settings className="mb-6 h-12 w-12 text-blue-600 dark:text-blue-400 animate-[spin_4s_linear_infinite]" />
                            <h3 className="mb-4 text-xl font-bold dark:text-white">L'importance de l'anticipation</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Un entretien repoussé augmente de <strong className="text-gray-900 dark:text-white">40%</strong> la probabilité d'une panne majeure. Avec Floticar, planifiez vos interventions aux périodes de faible activité pour ne jamais bloquer votre entreprise.
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
                            Un carnet de santé numérique pour chaque véhicule
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                            Fini les oublis. Votre logiciel travaille pour vous en arrière-plan.
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
