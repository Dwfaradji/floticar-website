"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { PAINS } from "@/lib/constants/landing";

export default function ProblemSection() {
    return (
        <section aria-label="Problèmes courants de gestion de flotte" className="px-6 py-28">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="mx-auto max-w-6xl"
            >
                <div className="mb-16 text-center">
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        Le problème
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        Les entreprises perdent du temps{" "}
                        <span className="text-gray-500 dark:text-slate-500">et de l&apos;argent</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-sm text-gray-600 dark:text-slate-500">
                        Sans outil dédié, la gestion d&apos;une flotte génère des coûts cachés et une charge administrative considérable.
                    </motion.p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {PAINS.map(({ icon: Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)" }}
                            className="group rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-white/[0.02] p-6 shadow-sm dark:shadow-none transition-all duration-300"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 dark:bg-red-500/10 text-red-600 dark:text-red-400 ring-1 ring-red-200 dark:ring-red-500/10 transition group-hover:bg-red-200 dark:group-hover:bg-red-500/15">
                                <Icon size={22} />
                            </div>
                            <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-500">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
