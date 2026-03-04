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
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
                        Le problème
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Les entreprises perdent du temps{" "}
                        <span className="text-slate-500">et de l&apos;argent</span>
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-xl text-sm text-slate-500">
                        Sans outil dédié, la gestion d&apos;une flotte génère des coûts cachés et une charge administrative considérable.
                    </motion.p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {PAINS.map(({ icon: Icon, title, desc }) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)" }}
                            className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all duration-300"
                        >
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/10 text-red-400 ring-1 ring-red-500/10 transition group-hover:bg-red-500/15">
                                <Icon size={22} />
                            </div>
                            <h3 className="mb-2 font-semibold text-white">{title}</h3>
                            <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
