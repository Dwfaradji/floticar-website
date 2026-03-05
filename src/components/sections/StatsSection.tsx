"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants/landing";
import Section from "../ui/Section";

export default function StatsSection() {
    return (
        <Section
            ariaLabel="Chiffres clés de Floticar"
            className="border-y border-gray-100 bg-gray-50/50 !py-14 dark:border-white/[0.04] dark:bg-white/[0.015]"
            maxWidth="max-w-4xl"
        >
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
                {STATS.map((s, i) => (
                    <motion.div
                        key={s.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="bg-gradient-to-b from-gray-900 to-gray-500 bg-clip-text text-3xl font-extrabold text-transparent dark:from-white dark:to-slate-300">
                            {s.value}
                        </p>
                        <p className="mt-1.5 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-slate-500">{s.label}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
