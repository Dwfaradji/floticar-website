"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TRUST_SIGNALS } from "@/lib/constants/landing";

export default function HeroSection() {
    const router = useRouter();

    return (
        <section
            aria-label="Présentation de Floticar"
            className="relative flex min-h-[95vh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-24 text-center"
        >

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-5xl"
            >
                {/* Badge */}
                <motion.div variants={fadeUp} className="mb-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-400/20 bg-blue-50 dark:bg-blue-900/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-700 dark:text-blue-300 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500 dark:bg-blue-400" />
                        Solution SaaS · PME · Déploiement rapide
                    </span>
                </motion.div>

                {/* Logo */}
                <motion.div variants={fadeUp} className="mb-8 flex justify-center">
                    <motion.div
                        whileHover={{ scale: 1.04, rotate: 3 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="relative h-50 w-50 drop-shadow-2xl md:h-80 md:w-80"
                    >
                        {/* Light Mode Logo */}
                        <div className="absolute inset-0 block dark:hidden">
                            <Image
                                src="/images/logo-light-transparent.png"
                                alt="Floticar"
                                fill
                                className="object-contain drop-shadow-sm"
                                priority
                            />
                        </div>
                        {/* Dark Mode Logo */}
                        <div className="absolute inset-0 hidden dark:block">
                            <Image
                                src="/images/logo-dark-transparent.png"
                                alt="Floticar"
                                fill
                                className="object-contain drop-shadow-sm"
                                priority
                            />
                        </div>
                    </motion.div>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    variants={fadeUp}
                    className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl"
                >
                    Gérez votre{" "}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-blue-600 dark:from-blue-400 via-blue-500 dark:via-cyan-400 to-cyan-500 dark:to-blue-300 bg-clip-text text-transparent">
                            Flotte Automobile
                        </span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-blue-500 dark:from-blue-400 to-cyan-500 dark:to-cyan-400 opacity-60"
                        />
                    </span>{" "}
                    sans complexité
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-slate-400 sm:text-xl"
                >
                    Floticar centralise la gestion des véhicules, conducteurs, entretiens et dépenses dans une
                    seule plateforme moderne. Accessible partout, sur web et mobile.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <motion.button
                        onClick={() => router.push("/demande-de-demo")}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 text-base font-bold text-white shadow-xl shadow-blue-900/40 transition"
                        aria-label="Demander une démonstration de Floticar"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            Demander une démo
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.button>

                    <motion.button
                        onClick={() => router.push("/contact")}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-white/5 px-8 py-4 text-base font-semibold text-gray-700 dark:text-white backdrop-blur-sm transition hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 shadow-sm dark:shadow-none"
                        aria-label="En savoir plus sur Floticar"
                    >
                        En savoir plus
                    </motion.button>
                </motion.div>

                {/* Trust signals */}
                <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                    {TRUST_SIGNALS.map((t) => (
                        <span key={t} className="flex items-center gap-1.5 text-xs text-slate-500">
                            <CheckCircle2 size={12} className="text-emerald-500" />
                            {t}
                        </span>
                    ))}
                </motion.div>

                {/* Dashboard mockup */}
                <motion.div variants={fadeUp} className="mt-20" style={{ perspective: "1400px" }}>
                    <motion.div
                        initial={{ rotateX: 14, opacity: 0.5 }}
                        whileInView={{ rotateX: 0, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-3xl border border-gray-200 dark:border-white/8 shadow-2xl shadow-blue-900/10 dark:shadow-blue-900/20 bg-white dark:bg-transparent"
                    >
                        {/* Top bar glass */}
                        <div className="flex items-center gap-2 border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/[0.04] px-5 py-3.5">
                            <div className="flex gap-1.5">
                                {(["bg-red-400/90", "bg-yellow-400/90", "bg-green-400/90"] as const).map((c) => (
                                    <div key={c} className={`h-3 w-3 rounded-full ${c}`} />
                                ))}
                            </div>
                            <div className="mx-auto flex h-6 items-center rounded-md border border-gray-200 dark:border-white/8 bg-white dark:bg-white/5 px-3 text-xs text-gray-500 dark:text-slate-500">
                                app.floticar.com/dashboard
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-white dark:from-[#05070f] to-transparent" />
                        <Image
                            src="/images/dashboard-preview.png"
                            alt="Tableau de bord Floticar — interface de gestion de flotte"
                            width={1200}
                            height={680}
                            className="w-full"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
