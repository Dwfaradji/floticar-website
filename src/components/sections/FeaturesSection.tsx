"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { FEATURES, FEATURE_COLOR_MAP } from "@/lib/constants/landing";
import GlowCard from "@/components/ui/GlowCard";
import { Check, Sparkles } from "lucide-react";

const GLOW_RGB_MAP: Record<string, string> = {
    blue: "rgba(59, 130, 246, 0.25)",
    cyan: "rgba(6, 182, 212, 0.25)",
    emerald: "rgba(16, 185, 129, 0.25)",
    amber: "rgba(245, 158, 11, 0.25)",
    violet: "rgba(139, 92, 246, 0.25)",
    pink: "rgba(236, 72, 153, 0.25)",
};

export default function FeaturesSection() {
    return (
        <section
            aria-label="Fonctionnalités de Floticar"
            id="fonctionnalites"
            className="relative overflow-hidden py-28 sm:py-36"
        >
            {/* Ambient Background Light */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/5 blur-[160px] dark:bg-blue-600/10" />
            </div>

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
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                            <Sparkles size={14} />
                            Fonctionnalités clés
                        </div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            La boîte à outils{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                parfaite.
                            </span>
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Chaque fonctionnalité a été pensée pour répondre à un besoin précis, sans surplus inutile. Une interface épurée pour une efficacité maximale.
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map(({ icon: Icon, color, title, desc, points }, idx) => {
                        const c = FEATURE_COLOR_MAP[color];
                        const glowColor = GLOW_RGB_MAP[color] || "rgba(59, 130, 246, 0.25)";

                        return (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.7, ease: EASE_OUT_EXPO }}
                            >
                                <GlowCard
                                    glowColor={glowColor}
                                    className="group flex h-full flex-col justify-between !p-8 transition-all duration-300 hover:-translate-y-1.5"
                                >
                                    <div>
                                        {/* Icon Container with glowing ring */}
                                        <div
                                            className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${c.bg} ${c.text} ${c.ring} shadow-sm backdrop-blur-xl transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <Icon size={26} strokeWidth={1.75} />
                                        </div>

                                        <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900 transition-colors dark:text-white">
                                            {title}
                                        </h3>

                                        <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                            {desc}
                                        </p>
                                    </div>

                                    {/* Feature checklist / pills */}
                                    <div className="border-t border-gray-100 pt-5 dark:border-white/5">
                                        <ul className="flex flex-wrap gap-2">
                                            {points.map((pt) => (
                                                <li
                                                    key={pt}
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-gray-100 dark:bg-white/[0.04] dark:text-gray-300 dark:group-hover:bg-white/[0.08]"
                                                >
                                                    <Check size={12} className={c.text} />
                                                    <span>{pt}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </GlowCard>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
