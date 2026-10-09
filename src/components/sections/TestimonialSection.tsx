"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialSection() {
    return (
        <section className="relative overflow-hidden bg-white py-32 dark:bg-[#030409]">
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl px-6">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative rounded-[3rem] border border-gray-200/50 bg-white/40 p-12 text-center shadow-[0_20px_60px_rgba(0,0,0,0.03)] backdrop-blur-2xl md:p-20 dark:border-white/10 dark:bg-white/[0.02] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
                >
                    <div className="absolute -top-6 left-1/2 flex -translate-x-1/2 gap-1 rounded-full border border-gray-200 bg-white px-4 py-2 shadow-sm dark:border-white/10 dark:bg-[#0a0a0a]">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                    </div>

                    <blockquote className="mb-10 text-2xl leading-tight font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                        &ldquo;Floticar a radicalement transformé notre gestion quotidienne. Nos coûts de flotte ont chuté de <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">18% en six mois</span>, et la sérénité de l&apos;équipe n&apos;a pas de prix.&rdquo;
                    </blockquote>

                    <div className="flex flex-col items-center justify-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-gray-900 to-gray-700 text-lg font-bold text-white shadow-lg dark:from-white dark:to-gray-300 dark:text-gray-900">
                            JD
                        </div>
                        <div>
                            <div className="text-lg font-bold text-gray-900 dark:text-white">Julien Dupont</div>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">Directeur des Opérations · PME Île-de-France</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
