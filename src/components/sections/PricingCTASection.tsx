"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, DollarSign } from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";

export default function PricingCTASection() {
    return (
        <section aria-label="Tarifs Floticar" className="relative overflow-hidden py-24 sm:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-blue-500/30 bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent p-10 text-center shadow-2xl backdrop-blur-2xl sm:p-16 dark:border-cyan-500/20 dark:from-blue-950/40 dark:via-cyan-950/20"
                >
                    {/* Glowing highlight orb */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-3xl"
                    />

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                        <DollarSign size={14} />
                        Transparence totale
                    </div>

                    <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                        Curieux de connaître nos{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                            tarifs ?
                        </span>
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                        Un modèle de tarification simple, sans engagement et sans frais cachés, qui s&apos;ajuste automatiquement à la taille de votre flotte au fil des mois.
                    </p>

                    <div className="mb-10 flex flex-wrap justify-center gap-4 text-xs font-semibold text-gray-600 sm:text-sm dark:text-gray-300">
                        <span className="flex items-center gap-1.5">
                            <Check size={16} className="text-cyan-500" /> Sans engagement
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check size={16} className="text-cyan-500" /> Essai gratuit 14 jours
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check size={16} className="text-cyan-500" /> Facturation au prorata
                        </span>
                    </div>

                    <Link
                        href="/tarifs"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30"
                    >
                        <span>Découvrir nos tarifs détaillés</span>
                        <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
