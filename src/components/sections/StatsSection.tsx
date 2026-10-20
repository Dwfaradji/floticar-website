"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants/landing";
import { EASE_OUT_EXPO } from "@/lib/animations";

export default function StatsSection() {
    return (
        <section aria-label="Chiffres clés" className="relative z-20 -mt-10 px-6">
            <div className="mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white/80 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 dark:border-white/10 dark:bg-gray-950/70 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)]"
                >
                    {/* Subtle top ambient light */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"
                    />

                    <div className="grid grid-cols-2 gap-8 divide-y divide-gray-100 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-y-0 md:divide-gray-200/60 dark:divide-white/5 dark:md:divide-white/10">
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
                                className="group flex flex-col items-center justify-center px-4 pt-6 text-center md:pt-0"
                            >
                                <span className="bg-gradient-to-br from-gray-900 via-blue-900 to-gray-700 bg-clip-text text-3xl font-extrabold tracking-tighter text-transparent transition-all duration-300 group-hover:scale-105 sm:text-4xl lg:text-5xl dark:from-white dark:via-cyan-200 dark:to-blue-300">
                                    {s.value}
                                </span>
                                <span className="mt-2 text-xs font-semibold tracking-wide text-gray-500 uppercase sm:text-sm dark:text-gray-400">
                                    {s.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
