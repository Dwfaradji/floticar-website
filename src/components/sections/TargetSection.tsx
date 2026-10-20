"use client";

import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { TARGETS } from "@/lib/constants/landing";
import GlowCard from "@/components/ui/GlowCard";

export default function TargetSection() {
    return (
        <section aria-label="Secteurs d'activité cibles" className="relative overflow-hidden py-28 sm:py-36">
            {/* Ambient Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[150px] dark:bg-indigo-600/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
                    {/* Left: Sticky Text */}
                    <div className="lg:sticky lg:top-36 lg:col-span-5">
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-600 uppercase dark:text-indigo-400">
                                <Compass size={14} />
                                Multi-secteurs
                            </div>
                            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                                Conçu pour les acteurs du{" "}
                                <span className="bg-gradient-to-r from-indigo-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    mouvement.
                                </span>
                            </h2>
                            <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                                Que vous opériez une dizaine ou des centaines de véhicules, Floticar s&apos;adapte à votre échelle avec une précision chirurgicale et des règles métier dédiées.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right: Stacked Sleek Cards */}
                    <div className="lg:col-span-7">
                        <div className="space-y-4">
                            {TARGETS.map(({ icon: Icon, title, desc, href }, idx) => (
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.7, ease: EASE_OUT_EXPO }}
                                >
                                    <Link href={href} className="group block">
                                        <GlowCard
                                            glowColor="rgba(99, 102, 241, 0.25)"
                                            className="flex items-center justify-between gap-6 !p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-indigo-500/40"
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-200/50 transition-transform duration-300 group-hover:scale-110 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/20">
                                                    <Icon size={26} strokeWidth={1.75} />
                                                </div>
                                                <div>
                                                    <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                                        {title}
                                                    </h3>
                                                    <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                                        {desc}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:shadow-md dark:bg-white/5 dark:text-gray-400">
                                                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                                            </div>
                                        </GlowCard>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
