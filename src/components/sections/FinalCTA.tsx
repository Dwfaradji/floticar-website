"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Section from "../ui/Section";
import Badge from "../ui/Badge";

export default function FinalCTA() {
    const router = useRouter();

    return (
        <Section ariaLabel="Demande de démo Floticar" className="relative overflow-hidden !py-36 text-center" maxWidth="max-w-2xl">
            {/* Background glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 70% 90% at 50% 100%, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
            />
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{ background: "radial-gradient(ellipse 40% 40% at 50% 100%, rgba(99,179,237,0.12) 0%, transparent 60%)" }}
            />

            <div className="mx-auto">
                <Badge className="!mb-6 border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-400/20 dark:bg-blue-900/30 dark:text-blue-300">
                    <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-500 dark:bg-blue-400" />
                    Sans engagement · Démo gratuite
                </Badge>

                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
                    Prêt à optimiser{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
                        votre flotte ?
                    </span>
                </h2>
                <p className="mb-12 text-lg text-gray-600 dark:text-slate-400">
                    Contactez-nous pour une démonstration personnalisée. Nous vous répondons sous 24h.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.button
                        onClick={() => router.push("/demande-de-demo")}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-blue-900/50 transition"
                        aria-label="Demander une démo Floticar"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            Demander une démo
                            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.button>

                    <motion.button
                        onClick={() => router.push("/contact")}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-2xl border border-gray-200 bg-white/80 px-8 py-4 text-base font-semibold text-gray-700 shadow-sm backdrop-blur-sm transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:shadow-none dark:hover:border-white/20 dark:hover:bg-white/10"
                    >
                        Nous contacter
                    </motion.button>
                </div>

                <p className="mt-8 text-xs text-gray-500 dark:text-slate-500">
                    Sans engagement · Réponse sous 24h · Données sécurisées
                </p>
            </div>
        </Section>
    );
}
