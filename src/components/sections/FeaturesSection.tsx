"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { fadeUp, stagger } from "@/lib/animations";
import { FEATURES, FEATURE_COLOR_MAP } from "@/lib/constants/landing";

export default function FeaturesSection() {
    return (
        <section
            aria-label="Fonctionnalités de Floticar"
            id="fonctionnalites"
            className="bg-white/[0.01] px-6 py-28"
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="mx-auto max-w-6xl"
            >
                <div className="mb-16 text-center">
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
                        La solution
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Tout ce dont votre flotte a besoin
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-sm text-slate-400">
                        Une plateforme web pour les gestionnaires et une application mobile pour les conducteurs — intégrées et synchronisées en temps réel.
                    </motion.p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {FEATURES.map(({ icon: Icon, color, title, desc, points }) => {
                        const c = FEATURE_COLOR_MAP[color];
                        return (
                            <motion.article
                                key={title}
                                variants={fadeUp}
                                whileHover={{ y: -5 }}
                                className={`group relative rounded-2xl border border-white/5 bg-white/[0.02] p-7 shadow-lg transition-all duration-300 hover:border-white/10 hover:bg-white/[0.04] hover:shadow-xl ${c.glow}`}
                            >
                                <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${c.bg} ${c.text} ${c.ring}`}>
                                    <Icon size={23} />
                                </div>
                                <h3 className="mb-2.5 text-base font-bold text-white">{title}</h3>
                                <p className="mb-5 text-sm leading-relaxed text-slate-400">{desc}</p>
                                <ul className="space-y-2">
                                    {points.map((pt) => (
                                        <li key={pt} className="flex items-center gap-2 text-xs text-slate-400">
                                            <CheckCircle2 size={12} className={`shrink-0 ${c.text}`} />
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </motion.article>
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
}
