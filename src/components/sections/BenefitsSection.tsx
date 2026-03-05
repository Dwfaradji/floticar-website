"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { BENEFITS } from "@/lib/constants/landing";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function BenefitsSection() {
    return (
        <Section ariaLabel="Bénéfices de Floticar" maxWidth="max-w-5xl">
            <SectionHeader
                badge="Les bénéfices"
                title="Pourquoi choisir Floticar ?"
            />

            <div className="grid gap-6 sm:grid-cols-3">
                {BENEFITS.map(({ icon: Icon, color, iconColor, title, text }) => (
                    <motion.div
                        key={title}
                        variants={fadeUp}
                        whileHover={{ y: -6 }}
                        className={`rounded-2xl border bg-gradient-to-b p-8 transition-all duration-300 ${color}`}
                    >
                        <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-white/5 ${iconColor}`}>
                            <Icon size={24} />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-400">{text}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
