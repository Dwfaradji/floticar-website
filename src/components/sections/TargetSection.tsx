"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { TARGETS } from "@/lib/constants/landing";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function TargetSection() {
    return (
        <Section ariaLabel="Secteurs cibles de Floticar" className="bg-white/[0.015]" maxWidth="max-w-5xl">
            <SectionHeader
                badge="Pour qui ?"
                title="Conçu pour les entreprises qui bougent"
            />

            <div className="grid gap-5 sm:grid-cols-3">
                {TARGETS.map(({ emoji, title, desc }) => (
                    <motion.div
                        key={title}
                        variants={fadeUp}
                        whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.25)" }}
                        className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none"
                    >
                        <span className="mb-5 block text-5xl">{emoji}</span>
                        <h3 className="mb-3 text-lg font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
