"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { PAINS } from "@/lib/constants/landing";
import { AlertCircle, ArrowRight, FileSpreadsheet, Sparkles } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

export default function ProblemSection() {
    return (
        <section aria-label="Constat sur la gestion de flotte" className="relative overflow-hidden py-28 sm:py-36">
            {/* Background elements */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[140px] dark:bg-red-500/10" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
                            <AlertCircle size={14} />
                            Le constat
                        </div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            Gérer une flotte ne devrait pas être un{" "}
                            <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-rose-500 bg-clip-text text-transparent">
                                gouffre financier.
                            </span>
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Sans outil centralisé, l&apos;information se perd. Les entretiens sont oubliés, les coûts de carburant s&apos;envolent, et la charge mentale de votre équipe explose.
                        </p>
                    </motion.div>
                </div>

                {/* Grid 4 Pains */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PAINS.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.7, ease: EASE_OUT_EXPO }}
                        >
                            <GlowCard
                                glowColor="rgba(244, 63, 94, 0.25)"
                                className="group h-full !p-7 transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/30"
                            >
                                <div className="mb-6 flex h-13 w-13 items-center justify-center rounded-2xl bg-rose-500/10 text-rose-600 ring-1 ring-rose-500/20 transition-transform duration-300 group-hover:scale-110 dark:text-rose-400">
                                    <Icon size={24} strokeWidth={1.75} />
                                </div>
                                <h3 className="mb-3 text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
                                    {title}
                                </h3>
                                <p className="text-sm leading-relaxed text-gray-600 transition-colors dark:text-gray-400">
                                    {desc}
                                </p>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>

                {/* Transition Excel Callout */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8, ease: EASE_OUT_EXPO }}
                    className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-blue-500/20 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-indigo-500/5 p-8 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:border-blue-500/40 sm:p-10 dark:border-blue-500/30 dark:from-blue-950/40 dark:via-blue-900/20 dark:to-cyan-950/30"
                >
                    {/* Glowing highlight */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -top-24 right-0 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl"
                    />

                    <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="flex items-start gap-5">
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg ring-4 shadow-blue-500/25 ring-blue-500/10">
                                <FileSpreadsheet size={26} />
                            </div>
                            <div>
                                <div className="mb-1 flex items-center gap-2">
                                    <Sparkles size={14} className="text-cyan-600 dark:text-cyan-400" />
                                    <span className="text-xs font-bold tracking-wider text-cyan-700 uppercase dark:text-cyan-300">
                                        Migration sans effort
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
                                    Vous gérez encore votre parc automobile sur un fichier Excel ?
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                                    Dépassements kilométriques imprévus, contrôles techniques oubliés, formules cassées... Découvrez comment Floticar prend le relais avec un import gratuit de vos données sous 24h.
                                </p>
                            </div>
                        </div>

                        <Link
                            href="/remplacer-excel-gestion-flotte"
                            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:scale-[1.03] hover:bg-blue-500 hover:shadow-blue-500/40"
                        >
                            <span>Remplacer mon Excel gratuitement</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
