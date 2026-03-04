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
            {/* Ambient background */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/10 blur-[120px]" />
                <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px]" />
                <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-blue-700/8 blur-[80px]" />
            </div>

            {/* Grid overlay */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]"
            />

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="mx-auto max-w-5xl"
            >
                {/* Badge */}
                <motion.div variants={fadeUp} className="mb-6 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300 backdrop-blur-sm">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
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
                        <Image
                            src="/images/logo-dark-transparent.png"
                            alt="Floticar"
                            fill
                            className="object-contain drop-shadow-sm"
                            priority
                        />
                    </motion.div>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    variants={fadeUp}
                    className="mb-6 text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl"
                >
                    Gérez votre{" "}
                    <span className="relative inline-block">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                            Flotte Automobile
                        </span>
                        <motion.span
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-60"
                        />
                    </span>{" "}
                    sans complexité
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
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
                        onClick={() => router.push("/contact")}
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
                        className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
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
                        className="relative overflow-hidden rounded-3xl border border-white/8 shadow-2xl shadow-blue-900/20"
                    >
                        {/* Top bar glass */}
                        <div className="flex items-center gap-2 border-b border-white/5 bg-white/[0.04] px-5 py-3.5">
                            <div className="flex gap-1.5">
                                {(["bg-red-400/70", "bg-yellow-400/70", "bg-green-400/70"] as const).map((c) => (
                                    <div key={c} className={`h-3 w-3 rounded-full ${c}`} />
                                ))}
                            </div>
                            <div className="mx-auto flex h-6 items-center rounded-md border border-white/8 bg-white/5 px-3 text-xs text-slate-500">
                                app.floticar.com/dashboard
                            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-40 bg-gradient-to-t from-[#05070f] to-transparent" />
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
