"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TARGETS } from "@/lib/constants/landing";

export default function TargetSection() {
    return (
        <section className="relative overflow-hidden border-y border-gray-200/50 bg-white py-32 dark:border-white/5 dark:bg-[#030409]">
            {/* Background glowing mesh */}
            <div className="pointer-events-none absolute top-1/2 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-20 px-6 lg:flex-row">
                
                {/* Left: Sticky Text */}
                <div className="w-full self-start lg:sticky lg:top-40 lg:w-1/3">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                            Conçu pour les acteurs du <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">mouvement.</span>
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Que vous opériez une dizaine ou des centaines de véhicules, Floticar s&apos;adapte à votre échelle avec une précision chirurgicale.
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
                        {TARGETS.map(({ icon: Icon, title, desc }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="group flex flex-col items-start gap-8 rounded-[2rem] border border-gray-200/50 bg-gray-50/50 p-8 transition-all duration-500 hover:border-blue-500/30 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] sm:flex-row sm:items-center dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-white/10 dark:hover:bg-white/[0.04] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
                            >
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-gray-200/50 transition-transform duration-500 group-hover:scale-110 dark:bg-[#0a0a0a] dark:ring-white/10">
                                    <Icon size={32} className="text-gray-400 transition-colors duration-500 group-hover:text-blue-500" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                                    <p className="text-base leading-relaxed font-medium text-gray-500 dark:text-gray-400">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
