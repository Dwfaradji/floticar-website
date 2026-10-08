"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TARGETS } from "@/lib/constants/landing";

export default function TargetSection() {
    return (
        <section className="bg-white dark:bg-[#030409] py-32 border-y border-gray-200/50 dark:border-white/5 relative overflow-hidden">
            {/* Background glowing mesh */}
            <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 translate-x-1/3 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col lg:flex-row gap-20 items-center">
                
                {/* Left: Sticky Text */}
                <div className="w-full lg:w-1/3 lg:sticky lg:top-40 self-start">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-6">
                            Conçu pour les acteurs du <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">mouvement.</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Que vous opériez une dizaine ou des centaines de véhicules, Floticar s'adapte à votre échelle avec une précision chirurgicale.
                        </p>
                    </motion.div>
                </div>

                {/* Right: Stacked Sleek Cards */}
                <div className="w-full lg:w-2/3">
                    <motion.div 
                        variants={stagger}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        {TARGETS.map(({ icon: Icon, title, desc }, i) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="group flex flex-col sm:flex-row items-start sm:items-center gap-8 rounded-[2rem] border border-gray-200/50 bg-gray-50/50 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/[0.04] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
                            >
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/50 transition-transform duration-500 group-hover:scale-110 dark:bg-[#0a0a0a] dark:ring-white/10">
                                    <Icon size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                                    <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
