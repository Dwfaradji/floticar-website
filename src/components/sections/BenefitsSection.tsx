"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { BENEFITS } from "@/lib/constants/landing";

export default function BenefitsSection() {
    return (
        <section className="bg-white dark:bg-[#030409] py-32">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-6">
                            L'impact immédiat sur votre bilan.
                        </h2>
                    </motion.div>
                </div>

                <div className="grid gap-8 sm:grid-cols-3">
                    {BENEFITS.map(({ icon: Icon, title, text, color, iconColor }, i) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className={`group relative overflow-hidden rounded-[2rem] border p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${color}`}
                        >
                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/50 blur-[50px] transition-all duration-700 group-hover:scale-150 dark:bg-white/5" />
                            
                            <div className={`mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm backdrop-blur-md dark:bg-black/20 ${iconColor}`}>
                                <Icon size={28} strokeWidth={1.5} />
                            </div>
                            
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-base font-medium leading-relaxed text-gray-600 dark:text-gray-300">{text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
