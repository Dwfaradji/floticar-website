"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { PAINS } from "@/lib/constants/landing";

import { AlertCircle } from "lucide-react";

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden bg-gray-900 py-32 dark:bg-[#030409]">
            {/* Dark background, extremely premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-[#030409] dark:to-[#0a0a0a]" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                            <AlertCircle size={14} />
                            Le constat
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Gérer une flotte ne devrait pas être un gouffre financier.
                        </h2>
                        <p className="text-lg text-gray-400">
                            Sans outil centralisé, l&apos;information se perd. Les entretiens sont oubliés, les coûts de carburant s&apos;envolent, et la charge mentale de votre équipe explose.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PAINS.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:bg-white/10"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20 transition-transform duration-500 group-hover:scale-110">
                                <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{title}</h3>
                            <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
