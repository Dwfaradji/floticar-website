"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function FinalCTA() {
    const router = useRouter();

    return (
        <section aria-label="Demande de démo Floticar" className="relative overflow-hidden px-6 py-36 text-center">
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

            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mx-auto max-w-2xl"
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="mb-6 flex justify-center"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/8 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-300">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400" />
                        Sans engagement · Démo gratuite
                    </span>
                </motion.div>

                <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    Prêt à optimiser{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        votre flotte ?
                    </span>
                </h2>
                <p className="mb-12 text-lg text-slate-400">
                    Contactez-nous pour une démonstration personnalisée. Nous vous répondons sous 24h.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-4">
                    <motion.button
                        onClick={() => router.push("/contact")}
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.97 }}
                        className="group relative flex items-center gap-2.5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-10 py-4 text-base font-bold text-white shadow-2xl shadow-blue-900/50 transition"
                        aria-label="Demander un devis Floticar"
                    >
                        <span className="relative z-10 flex items-center gap-2.5">
                            Demander un devis
                            <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 transition-opacity group-hover:opacity-100" />
                    </motion.button>

                    <motion.button
                        onClick={() => router.push("/contact")}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
                    >
                        Nous contacter
                    </motion.button>
                </div>

                <p className="mt-8 text-xs text-slate-600">
                    Sans engagement · Réponse sous 24h · Données sécurisées
                </p>
            </motion.div>
        </section>
    );
}
