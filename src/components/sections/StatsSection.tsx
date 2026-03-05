"use client";


import { motion } from "framer-motion";
import { STATS } from "@/lib/constants/landing";

export default function StatsSection() {
    return (
        <section
            aria-label="Chiffres clés de Floticar"
            className="border-y border-gray-100 dark:border-white/[0.04] bg-gray-50/50 dark:bg-white/[0.015] px-6 py-14"
        >
            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 sm:grid-cols-4">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-slate-300 bg-clip-text text-3xl font-extrabold text-transparent">
                            {s.value}
                        </p>
                        <p className="mt-1.5 text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-slate-500">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
