"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { BENEFITS } from "@/lib/constants/landing";

export default function BenefitsSection() {
    return (
        <section aria-label="Bénéfices de Floticar" className="px-6 py-28">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="mx-auto max-w-5xl"
            >
                <div className="mb-16 text-center">
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        Les bénéfices
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Pourquoi choisir Floticar ?
                    </motion.h2>
                </div>

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
            </motion.div>
        </section>
    );
}
