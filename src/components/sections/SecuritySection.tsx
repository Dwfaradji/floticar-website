"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CERTIFS } from "@/lib/constants/landing";

export default function SecuritySection() {
    return (
        <section aria-label="Sécurité et conformité RGPD de Floticar" className="px-6 py-28">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="mx-auto max-w-4xl"
            >
                <div className="mb-14 text-center">
                    <motion.p variants={fadeUp} className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-400">
                        Sécurité
                    </motion.p>
                    <motion.h2 variants={fadeUp} className="mb-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Vos données, protégées
                    </motion.h2>
                    <motion.p variants={fadeUp} className="mx-auto max-w-xl text-sm text-slate-400">
                        Floticar est conçu avec les meilleurs standards de sécurité du secteur SaaS.
                    </motion.p>
                </div>

                <motion.div variants={stagger} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {CERTIFS.map(({ icon: Icon, text }) => (
                        <motion.div
                            key={text}
                            variants={fadeUp}
                            whileHover={{ borderColor: "rgba(59,130,246,0.3)", backgroundColor: "rgba(59,130,246,0.04)" }}
                            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3.5 text-left text-sm text-slate-300 transition-all duration-200"
                        >
                            <Icon size={15} className="shrink-0 text-blue-400" />
                            {text}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
