"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { FEATURES, FEATURE_COLOR_MAP } from "@/lib/constants/landing";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function FeaturesSection() {
    return (
        <Section
            ariaLabel="Fonctionnalités de Floticar"
            id="fonctionnalites"
            className="bg-white/[0.01]"
        >
            <SectionHeader
                badge="La solution"
                title="Tout ce dont votre flotte a besoin"
                description="Une plateforme web pour les gestionnaires et une application mobile pour les conducteurs — intégrées et synchronisées en temps réel."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {FEATURES.map(({ icon: Icon, color, title, desc, points }) => {
                    const c = FEATURE_COLOR_MAP[color];
                    return (
                        <motion.article
                            key={title}
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            className={`group relative rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md dark:border-white/5 dark:bg-white/[0.02] dark:shadow-lg dark:hover:border-white/10 dark:hover:bg-white/[0.04] dark:hover:shadow-xl ${c.glow}`}
                        >
                            <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${c.bg} ${c.text} ${c.ring}`}>
                                <Icon size={23} />
                            </div>
                            <h3 className="mb-2.5 text-base font-bold text-gray-900 dark:text-white">{title}</h3>
                            <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-slate-400">{desc}</p>
                            <ul className="space-y-2">
                                {points.map((pt) => (
                                    <li key={pt} className="flex items-center gap-2 text-xs text-gray-500 dark:text-slate-400">
                                        <CheckCircle2 size={12} className={`shrink-0 ${c.text}`} />
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                        </motion.article>
                    );
                })}
            </div>
        </Section>
    );
}
