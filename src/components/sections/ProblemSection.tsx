"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { PAINS } from "@/lib/constants/landing";
import { AlertCircle, ArrowRight, FileSpreadsheet } from "lucide-react";

export default function ProblemSection() {
    return (
        <section className="relative overflow-hidden bg-gray-900 py-32 dark:bg-[#030409]">
            {/* Dark background, extremely premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 dark:from-[#030409] dark:to-[#0a0a0a]" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-20 flex max-w-3xl flex-col items-center text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-sm font-medium text-red-400">
                            <AlertCircle size={14} />
                            Le constat
                        </div>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            Gérer une flotte ne devrait pas être un gouffre financier.
                        </h2>
                        <p className="text-lg text-gray-400">
                            Sans outil centralisé, l&apos;information se perd. Les entretiens sont oubliés, les coûts de carburant s&apos;envolent, et la charge mentale de votre équipe explose.
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {PAINS.map(({ icon: Icon, title, desc }, i) => (
                        <motion.div
                            key={title}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-white/5 p-8 backdrop-blur-md transition-all duration-500 hover:border-red-500/30 hover:bg-white/10"
                        >
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20 transition-transform duration-500 group-hover:scale-110">
                                <Icon size={24} strokeWidth={1.5} />
                            </div>
                            <h3 className="mb-3 text-xl font-bold tracking-tight text-white">{title}</h3>
                            <p className="text-sm leading-relaxed text-gray-400 transition-colors group-hover:text-gray-300">{desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* EXCEL TRANSITION CALLOUT BANNER */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-12 overflow-hidden rounded-[2rem] border border-blue-500/20 bg-gradient-to-r from-blue-950/40 via-blue-900/20 to-cyan-950/30 p-8 backdrop-blur-md transition-all hover:border-blue-500/40"
                >
                    <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                        <div className="flex items-start gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/20">
                                <FileSpreadsheet size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">
                                    Vous gérez encore votre parc automobile sur un fichier Excel ?
                                </h3>
                                <p className="mt-1 max-w-2xl text-sm leading-relaxed text-gray-300">
                                    Dépassements kilométriques imprévus, contrôles techniques oubliés, formules cassées... Découvrez comment Floticar prend le relais avec un import gratuit de vos données sous 24h.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/remplacer-excel-gestion-flotte"
                            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500"
                        >
                            Remplacer mon Excel gratuitement <ArrowRight size={16} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
