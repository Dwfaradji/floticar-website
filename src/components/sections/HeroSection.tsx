"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TRUST_SIGNALS } from "@/lib/constants/landing";

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative min-h-[100vh] w-full overflow-hidden flex flex-col items-center justify-center px-6">

            {/* Full Screen Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/photo-hero.jpg"
                    alt="Floticar Manager"
                    fill
                    className="object-cover object-center"
                    priority
                />

                {/* Gradient Overlays for Text Legibility */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-transparent" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto max-w-5xl flex flex-col items-center text-center mt-20"
            >
                {/* Premium Badge */}
                <motion.div variants={fadeUp} className="mb-8">
                    <div className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-all hover:bg-black/40 hover:border-white/40">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span>Floticar v1.0 est disponible</span>

                    </div>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    variants={fadeUp}
                    className="mb-8 max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.1]"
                >
                    La gestion de flotte,{" "}
                    <br className="hidden md:block" />
                    repensée pour{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                        l'excellence.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mb-12 max-w-2xl text-lg font-medium tracking-tight text-gray-200 sm:text-xl"
                >
                    Pilotez vos véhicules, anticipez vos entretiens et optimisez vos coûts avec une plateforme d'une élégance et d'une puissance absolues.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
                >
                    <button
                        onClick={() => router.push("/demande-de-demo")}
                        className="group relative flex h-14 w-full sm:w-auto items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]"
                    >
                        Demander une démo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                        onClick={() => router.push("/contact")}
                        className="flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-sm"
                    >
                        Contacter l'équipe
                    </button>
                </motion.div>

                {/* Trust Signals Underneath */}
                <motion.div variants={fadeUp} className="mt-20 flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-300">
                    {TRUST_SIGNALS.map((signal, idx) => (
                        <span key={idx} className="flex items-center gap-2">
                            <Sparkles className="h-4 w-4 text-cyan-400 opacity-70" />
                            {signal}
                        </span>
                    ))}
                </motion.div>
            </motion.div>

            {/* Subtle bottom fade to transition to the next section cleanly */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] dark:from-[#030409] to-transparent z-10 pointer-events-none" />
        </section>
    );
}
