"use client";

import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { TRUST_SIGNALS } from "@/lib/constants/landing";

export default function HeroSection() {
    const router = useRouter();

    return (
        <section className="relative flex min-h-[100vh] w-full flex-col items-center justify-center overflow-hidden px-6">

            {/* Full Screen Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="h-full w-full object-cover object-center"
                >
                    <source src="/video/video_presentation.mp4" type="video/mp4" />
                </video>

                {/* Gradient Overlays for Text Legibility */}
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-transparent to-transparent" />
            </div>

            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 mx-auto mt-20 flex max-w-5xl flex-col items-center text-center"
            >
                {/* Premium Badge */}
                <motion.div variants={fadeUp} className="mb-8">
                    <div className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-1.5 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-all hover:border-white/40 hover:bg-black/40">
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span>Floticar v1.0 est disponible</span>

                    </div>
                </motion.div>

                {/* H1 */}
                <motion.h1
                    variants={fadeUp}
                    className="mb-8 max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.1]"
                >
                    Le logiciel de gestion de flotte,{" "}
                    <br className="hidden md:block" />
                    pensé pour{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        les PME et associations.
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={fadeUp}
                    className="mb-12 max-w-2xl text-lg font-medium tracking-tight text-gray-200 sm:text-xl"
                >
                    Pilotez vos véhicules, anticipez vos entretiens et optimisez vos coûts avec une plateforme d&apos;une élégance et d&apos;une puissance absolues.
                </motion.p>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
                >
                    <button
                        onClick={() => router.push("/demande-de-demo")}
                        className="group relative flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-8 text-base font-semibold text-white transition-all hover:scale-105 hover:bg-blue-500 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] sm:w-auto"
                    >
                        Demander une démo
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <button
                        onClick={() => router.push("/contact")}
                        className="flex h-14 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:shadow-sm sm:w-auto"
                    >
                        Contacter l&apos;équipe
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
            <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-10 h-32 bg-gradient-to-t from-[#fafafa] to-transparent dark:from-[#030409]" />
        </section>
    );
}
