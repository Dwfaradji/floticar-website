"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { CheckCircle2, Cpu, Sparkles, Workflow } from "lucide-react";

const STEPS = [
    {
        num: "01",
        title: "Connectez votre flotte",
        desc: "Importez vos données véhicules et conducteurs via notre outil d'onboarding intelligent en quelques clics.",
        tag: "Import gratuit < 24h",
        icon: Workflow,
    },
    {
        num: "02",
        title: "Configurez vos alertes",
        desc: "Définissez vos règles de maintenance, échéances de contrôle technique et seuils de consommation carburant.",
        tag: "Sur-mesure",
        icon: Cpu,
    },
    {
        num: "03",
        title: "Pilotez en toute sérénité",
        desc: "La plateforme travaille pour vous. Recevez uniquement les notifications prédictives qui nécessitent votre attention.",
        tag: "100% Automatisé",
        icon: Sparkles,
    },
];

export default function HowItWorksSection() {
    return (
        <section aria-label="Comment fonctionne Floticar" className="relative overflow-hidden py-28 sm:py-36">
            {/* Ambient Background Light */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[160px] dark:bg-cyan-500/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-24 max-w-3xl text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-cyan-600 uppercase dark:text-cyan-400">
                            <Sparkles size={14} />
                            Prise en main express
                        </div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            Déployé en quelques heures,{" "}
                            <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                pas en mois.
                            </span>
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Un processus d&apos;intégration fluide pour que vous puissiez vous concentrer immédiatement sur ce qui compte vraiment.
                        </p>
                    </motion.div>
                </div>

                {/* Steps Container */}
                <div className="relative">
                    {/* Glowing connecting line on desktop */}
                    <div
                        aria-hidden="true"
                        className="absolute top-20 right-[15%] left-[15%] hidden h-0.5 bg-gradient-to-r from-blue-500/20 via-cyan-400 to-blue-500/20 md:block dark:from-white/5 dark:via-cyan-400/40 dark:to-white/5"
                    />

                    <div className="grid gap-8 md:grid-cols-3">
                        {STEPS.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={step.num}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.8, ease: EASE_OUT_EXPO }}
                                    className="group relative flex flex-col items-center text-center"
                                >
                                    {/* Number & Icon Disc */}
                                    <div className="relative mb-8 flex h-24 w-24 items-center justify-center rounded-3xl border border-gray-200/80 bg-white shadow-xl ring-4 shadow-blue-500/5 ring-blue-50 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/50 group-hover:shadow-cyan-500/20 dark:border-white/10 dark:bg-gray-950 dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] dark:ring-white/5 dark:group-hover:ring-cyan-500/20">
                                        <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-3xl font-black text-transparent">
                                            {step.num}
                                        </span>

                                        {/* Sub-badge icon */}
                                        <div className="absolute -right-2 -bottom-2 flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                                            <Icon size={16} />
                                        </div>
                                    </div>

                                    {/* Badge tag */}
                                    <span className="mb-3 inline-flex items-center gap-1 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600 dark:bg-blue-500/10 dark:text-cyan-400">
                                        <CheckCircle2 size={12} />
                                        {step.tag}
                                    </span>

                                    <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-blue-600 sm:text-2xl dark:text-white dark:group-hover:text-cyan-400">
                                        {step.title}
                                    </h3>

                                    <p className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                        {step.desc}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
