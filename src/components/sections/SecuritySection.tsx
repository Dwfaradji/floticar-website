"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { CERTIFS } from "@/lib/constants/landing";
import { ShieldCheck } from "lucide-react";
import GlowCard from "@/components/ui/GlowCard";

export default function SecuritySection() {
    return (
        <section aria-label="Sécurité et conformité des données" className="relative overflow-hidden py-28 sm:py-36">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[160px] dark:bg-blue-600/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
                    {/* Left Description */}
                    <div className="lg:col-span-5">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                                <ShieldCheck size={14} />
                                Souveraineté & Chiffrement
                            </div>
                            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                                Sécurité de niveau{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                    bancaire.
                                </span>
                            </h2>
                            <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                                Vos données sont le cœur de votre entreprise. Nous avons bâti Floticar sur les standards de sécurité, de souveraineté et de confidentialité les plus stricts au monde.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Grid of Certifs */}
                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {CERTIFS.map(({ icon: Icon, text }, idx) => (
                                <motion.div
                                    key={text}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                                >
                                    <GlowCard
                                        glowColor="rgba(59, 130, 246, 0.2)"
                                        enableTilt={false}
                                        className="group flex items-center gap-4 !p-5 transition-all duration-300 hover:border-blue-500/40"
                                    >
                                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-200/50 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/20">
                                            <Icon size={20} strokeWidth={1.75} />
                                        </div>
                                        <span className="text-sm font-semibold text-gray-800 transition-colors group-hover:text-blue-600 dark:text-gray-200 dark:group-hover:text-white">
                                            {text}
                                        </span>
                                    </GlowCard>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
