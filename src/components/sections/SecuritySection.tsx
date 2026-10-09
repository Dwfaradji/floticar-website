"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { CERTIFS } from "@/lib/constants/landing";
import { ShieldCheck } from "lucide-react";

export default function SecuritySection() {
    return (
        <section className="relative overflow-hidden border-y border-white/5 bg-[#030409] py-32">
            <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[800px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />
            
            <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 lg:flex-row">
                
                <div className="lg:w-1/3">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400">
                            <ShieldCheck size={14} />
                            Infrastructure
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Sécurité de niveau bancaire.
                        </h2>
                        <p className="text-lg text-gray-400">
                            Vos données sont le cœur de votre entreprise. Nous avons bâti Floticar sur les standards de sécurité et de confidentialité les plus stricts au monde.
                        </p>
                    </motion.div>
                </div>

                <div className="w-full lg:w-2/3">
                    <motion.div 
                        variants={stagger} 
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                    >
                        {CERTIFS.map(({ icon: Icon, text }) => (
                            <motion.div
                                key={text}
                                variants={fadeUp}
                                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.04]"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110">
                                    <Icon size={18} />
                                </div>
                                <span className="font-medium text-gray-300 transition-colors group-hover:text-white">{text}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
