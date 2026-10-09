"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { FEATURES, FEATURE_COLOR_MAP } from "@/lib/constants/landing";

export default function FeaturesSection() {
    return (
        <section
            aria-label="Fonctionnalités de Floticar"
            id="fonctionnalites"
            className="bg-[#fafafa] py-32 dark:bg-[#030409]"
        >
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                            La boîte à outils parfaite.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Chaque fonctionnalité a été pensée pour répondre à un besoin précis, sans surplus inutile. Une interface épurée pour une efficacité maximale.
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {FEATURES.map(({ icon: Icon, color, title, desc }) => {
                        const c = FEATURE_COLOR_MAP[color];
                        
                        return (
                            <motion.article
                                key={title}
                                variants={fadeUp}
                                className="group relative overflow-hidden rounded-[2rem] border border-gray-200/60 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20 dark:hover:bg-white/[0.04] dark:hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]"
                            >
                                <div className={`absolute -top-20 -right-20 h-64 w-64 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-150 group-hover:blur-[100px] ${c.bg} opacity-20 dark:opacity-[0.07]`} />

                                <div className="relative z-10">
                                    <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${c.bg} ${c.text} ${c.ring} shadow-sm backdrop-blur-xl`}>
                                        <Icon size={26} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {title}
                                    </h3>
                                    <p className="text-base leading-relaxed font-medium text-gray-500 dark:text-gray-400">
                                        {desc}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
