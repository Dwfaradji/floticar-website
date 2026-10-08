"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CERTIFS } from "@/lib/constants/landing";
import { ShieldCheck } from "lucide-react";

export default function SecuritySection() {
    return (
        <section className="relative overflow-hidden bg-[#030409] py-32 border-y border-white/5">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
                
                <div className="lg:w-1/3">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
                            <ShieldCheck size={14} />
                            Infrastructure
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-6">
                            Sécurité de niveau bancaire.
                        </h2>
                        <p className="text-lg text-gray-400">
                            Vos données sont le cœur de votre entreprise. Nous avons bâti Floticar sur les standards de sécurité et de confidentialité les plus stricts au monde.
                        </p>
                    </motion.div>
                </div>

                <div className="lg:w-2/3 w-full">
                    <motion.div 
                        variants={stagger} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                        {CERTIFS.map(({ icon: Icon, text }, i) => (
                            <motion.div
                                key={text}
                                variants={fadeUp}
                                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    <Icon size={18} />
                                </div>
                                <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
