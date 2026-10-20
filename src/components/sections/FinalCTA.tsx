"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";

export default function FinalCTA() {
    return (
        <section aria-label="Passer à l'action" className="relative isolate overflow-hidden py-36 sm:py-48">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 via-cyan-400/20 to-indigo-600/20 blur-[140px] motion-safe:animate-aurora" />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                >
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                        <Sparkles size={14} />
                        Démarrez dès aujourd&apos;hui
                    </div>

                    <h2 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                        Prêt à passer à la{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                            vitesse supérieure ?
                        </span>
                    </h2>

                    <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed font-medium text-gray-600 sm:text-xl dark:text-gray-300">
                        Rejoignez les dizaines d&apos;entreprises qui ont déjà optimisé leur gestion de flotte avec Floticar. Déploiement en moins de 24 heures.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link
                            href="/demande-de-demo"
                            className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-10 text-base font-bold text-white shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 sm:w-auto"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                            />
                            <span className="relative">Demander ma démo</span>
                            <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-10 text-base font-bold text-gray-900 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        >
                            Parler à un conseiller
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
