"use client";

import { useRef } from "react";
import type { PointerEvent } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { EASE_OUT_EXPO, staggerContainer } from "@/lib/animations";
import { TRUST_SIGNALS } from "@/lib/constants/landing";
import AnimatedHeadline from "./hero/AnimatedHeadline";
import type { HeadlineSegment } from "./hero/AnimatedHeadline";
import HeroBackground from "./hero/HeroBackground";
import DashboardPreview from "./hero/DashboardPreview";

const HEADLINE: HeadlineSegment[] = [
    { text: "Le logiciel de gestion de flotte,", breakAfter: true },
    { text: "pensé pour" },
    { text: "les PME et associations.", highlight: true },
];

const HEADLINE_DURATION = 0.9; // délai avant l'apparition du texte secondaire

const fadeIn = {
    hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: EASE_OUT_EXPO } },
};

const SPRING = { stiffness: 120, damping: 20, mass: 0.5 };

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const reduceMotion = useReducedMotion();

    // Curseur : position brute (px) pour le halo, normalisée + lissée pour la 3D
    const spotX = useMotionValue(-1000);
    const spotY = useMotionValue(-1000);
    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const pointerX = useSpring(rawX, SPRING);
    const pointerY = useSpring(rawY, SPRING);

    // Le contenu texte s'estompe et remonte quand on scrolle
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
    const contentY = useTransform(scrollYProgress, [0, 0.35], [0, -80]);
    const contentOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

    const handlePointerMove = (e: PointerEvent<HTMLElement>) => {
        if (reduceMotion || !sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        spotX.set(e.clientX - rect.left);
        spotY.set(e.clientY - rect.top);
        rawX.set((e.clientX - rect.left) / rect.width - 0.5);
        rawY.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handlePointerLeave = () => {
        rawX.set(0);
        rawY.set(0);
    };

    return (
        <section
            ref={sectionRef}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            className="relative isolate w-full overflow-hidden pb-24 sm:pb-32"
        >
            <HeroBackground spotX={spotX} spotY={spotY} scrollProgress={scrollYProgress} />

            <motion.div
                style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
                className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-28 text-center sm:pt-36"
            >
                {/* Badge */}
                <motion.div initial="hidden" animate="visible" variants={fadeIn} className="mb-8">
                    <div className="relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                        <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,255,255,0.18)_50%,transparent_65%)] bg-[length:200%_100%] motion-safe:animate-shimmer"
                        />
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75 motion-safe:animate-ping" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
                        </span>
                        <span className="relative">Floticar v1.0 est disponible</span>
                    </div>
                </motion.div>

                <AnimatedHeadline
                    segments={HEADLINE}
                    delay={0.2}
                    className="mb-8 max-w-4xl text-5xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5rem] lg:leading-[1.05]"
                />

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer(0.12, HEADLINE_DURATION)}
                    className="flex flex-col items-center"
                >
                    <motion.p variants={fadeIn} className="mb-10 max-w-2xl text-lg font-medium tracking-tight text-gray-300 sm:text-xl">
                        Pilotez vos véhicules, anticipez vos entretiens et optimisez vos coûts avec une plateforme d&apos;une élégance et d&apos;une puissance absolues.
                    </motion.p>

                    <motion.div variants={fadeIn} className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
                        <Link
                            href="/demande-de-demo"
                            className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-8 text-base font-semibold text-white shadow-[0_0_40px_-8px_rgba(59,130,246,0.7)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_60px_-6px_rgba(34,211,238,0.8)] sm:w-auto"
                        >
                            <span
                                aria-hidden="true"
                                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                            />
                            <span className="relative">Demander une démo</span>
                            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/contact"
                            className="inline-flex h-14 w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/10 sm:w-auto"
                        >
                            Contacter l&apos;équipe
                        </Link>
                    </motion.div>

                    <motion.ul
                        variants={fadeIn}
                        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-medium sm:text-sm"
                    >
                        {TRUST_SIGNALS.map((signal) => (
                            <li
                                key={signal}
                                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-950/60 px-4 py-1.5 text-slate-200 shadow-sm backdrop-blur-md transition-all hover:border-white/20 hover:text-white"
                            >
                                <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-400" />
                                <span>{signal}</span>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>
            </motion.div>

            <div className="relative z-10 mt-16 sm:mt-20">
                <DashboardPreview pointerX={pointerX} pointerY={pointerY} />
            </div>

            {/* Petite étincelle décorative */}
            <Sparkles aria-hidden="true" className="pointer-events-none absolute top-40 right-[12%] z-0 hidden h-6 w-6 text-cyan-300/60 motion-safe:animate-float lg:block" />
        </section>
    );
}
