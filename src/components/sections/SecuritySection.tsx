"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CERTIFS } from "@/lib/constants/landing";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function SecuritySection() {
    return (
        <Section ariaLabel="Sécurité et conformité RGPD de Floticar" maxWidth="max-w-4xl">
            <SectionHeader
                badge="Sécurité"
                title="Vos données, protégées"
                description="Floticar est conçu avec les meilleurs standards de sécurité du secteur SaaS."
            />

            <motion.div variants={stagger} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {CERTIFS.map(({ icon: Icon, text }) => (
                    <motion.div
                        key={text}
                        variants={fadeUp}
                        whileHover={{ borderColor: "rgba(59,130,246,0.3)", backgroundColor: "rgba(59,130,246,0.04)" }}
                        className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-left text-sm text-gray-700 shadow-sm transition-all duration-200 dark:border-white/[0.06] dark:bg-white/[0.02] dark:text-slate-300 dark:shadow-none"
                    >
                        <Icon size={15} className="shrink-0 text-blue-600 dark:text-blue-400" />
                        {text}
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
