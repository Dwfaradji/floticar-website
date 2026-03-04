"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TARGETS } from "@/lib/constants/landing";

export default function TargetSection() {
    return (
        <section aria-label="Secteurs cibles de Floticar" className="bg-white/[0.015] px-6 py-28">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="mx-auto max-w-5xl"
            >
                <div className="mb-16 text-center">
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
                        Pour qui ?
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Conçu pour les entreprises qui bougent
                    </motion.h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                    {TARGETS.map(({ emoji, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            whileHover={{ y: -4, borderColor: "rgba(59,130,246,0.25)" }}
                            className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center transition-all duration-300"
                        >
                            <span className="mb-5 block text-5xl">{emoji}</span>
                            <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                            <p className="text-sm leading-relaxed text-slate-400">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
