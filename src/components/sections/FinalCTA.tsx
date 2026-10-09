"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    const router = useRouter();

    return (
        <section className="relative overflow-hidden py-40">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/50 dark:to-blue-900/10" />
            
            {/* Glowing background meshes */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-400/20 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h2 className="mb-6 text-5xl font-bold tracking-tighter text-gray-900 sm:text-6xl md:text-7xl dark:text-white">
                        Prêt à passer à la{" "}
                        <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                            vitesse supérieure ?
                        </span>
                    </h2>
                    <p className="mx-auto mb-12 max-w-2xl text-xl font-medium text-gray-500 dark:text-gray-400">
                        Rejoignez les dizaines d&apos;entreprises qui ont déjà optimisé leur gestion de flotte avec Floticar.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <button
                            onClick={() => router.push("/demande-de-demo")}
                            className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-10 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-blue-700 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] sm:w-auto"
                        >
                            Créer mon espace
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </button>
                        <button
                            onClick={() => router.push("/contact")}
                            className="flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white px-10 text-base font-semibold text-gray-900 transition-all hover:bg-gray-50 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
                        >
                            Parler à un expert
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
