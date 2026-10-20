"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { BENEFITS } from "@/lib/constants/landing";
import GlowCard from "@/components/ui/GlowCard";
import { TrendingUp } from "lucide-react";

export default function BenefitsSection() {
    return (
        <section aria-label="Bénéfices pour votre entreprise" className="relative overflow-hidden py-28 sm:py-36">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                            <TrendingUp size={14} />
                            Rentabilité & Sérénité
                        </div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            L&apos;impact immédiat sur{" "}
                            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
                                votre bilan.
                            </span>
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Des résultats mesurables dès le premier mois d&apos;utilisation, constatés par nos utilisateurs sur le terrain.
                        </p>
                    </motion.div>
                </div>

                {/* Grid 3 Benefits */}
                <div className="grid gap-8 md:grid-cols-3">
                    {BENEFITS.map(({ icon: Icon, title, text, iconColor }, i) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.8, ease: EASE_OUT_EXPO }}
                        >
                            <GlowCard
                                glowColor="rgba(16, 185, 129, 0.25)"
                                className="group flex h-full flex-col justify-between !p-10 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div>
                                    <div
                                        className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 shadow-md ring-1 ring-emerald-200/50 backdrop-blur-md transition-transform duration-300 group-hover:scale-110 dark:bg-emerald-500/10 dark:ring-emerald-500/20 ${iconColor}`}
                                    >
                                        <Icon size={30} strokeWidth={1.75} />
                                    </div>

                                    <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                                        {text}
                                    </p>
                                </div>
                            </GlowCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
