"use client";

import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/animations";

export default function TestimonialSection() {
    return (
        <section aria-label="Témoignage client" className="relative overflow-hidden py-28 sm:py-36">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[140px] dark:bg-cyan-500/10" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                    className="relative overflow-hidden rounded-[3rem] border border-gray-200/80 bg-white/70 p-10 text-center shadow-[0_20px_60px_rgba(0,0,0,0.04)] backdrop-blur-2xl sm:p-16 md:p-20 dark:border-white/10 dark:bg-gray-950/50 dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                >
                    {/* Floating quote watermark */}
                    <Quote
                        aria-hidden="true"
                        className="pointer-events-none absolute top-8 left-8 h-20 w-20 text-blue-500/10 dark:text-white/5"
                    />

                    {/* Star Badge */}
                    <div className="mb-8 inline-flex items-center gap-1.5 rounded-full border border-amber-200/80 bg-amber-50/80 px-4 py-2 shadow-sm backdrop-blur-sm dark:border-amber-400/20 dark:bg-amber-400/10">
                        {Array.from({ length: 5 }, (_, i) => (
                            <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                        ))}
                        <span className="ml-1 text-xs font-bold text-amber-700 dark:text-amber-300">5.0 / 5</span>
                    </div>

                    <blockquote className="mb-10 text-xl leading-relaxed font-bold tracking-tight text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
                        &ldquo;Floticar a radicalement transformé notre gestion quotidienne. Nos coûts de flotte ont chuté de{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 bg-clip-text text-transparent">
                            18% en six mois
                        </span>
                        , et la sérénité de l&apos;équipe n&apos;a pas de prix.&rdquo;
                    </blockquote>

                    <div className="flex flex-col items-center justify-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-black text-white shadow-lg shadow-blue-500/25">
                            JQ
                        </div>
                        <div>
                            <div className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">Julien Quiniou</div>
                            <div className="text-xs font-semibold text-gray-500 sm:text-sm dark:text-gray-400">
                                Directeur Logistique · Île-de-France
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
