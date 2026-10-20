"use client";

import { motion, useMotionTemplate, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";

type HeroBackgroundProps = {
    /** Position du curseur en px dans la section (pour le halo lumineux). */
    spotX: MotionValue<number>;
    spotY: MotionValue<number>;
    /** Progression du scroll dans le hero (0 → 1), pour la parallaxe de la vidéo. */
    scrollProgress: MotionValue<number>;
};

/**
 * Fond du hero : vidéo existante + parallaxe au scroll, aurores animées,
 * grille masquée et halo lumineux qui suit la souris.
 */
export default function HeroBackground({ spotX, spotY, scrollProgress }: HeroBackgroundProps) {
    const videoY = useTransform(scrollProgress, [0, 1], ["0%", "25%"]);
    const videoScale = useTransform(scrollProgress, [0, 1], [1, 1.15]);
    const spotlight = useMotionTemplate`radial-gradient(650px circle at ${spotX}px ${spotY}px, rgba(56, 189, 248, 0.16), transparent 65%)`;

    return (
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[115svh] overflow-hidden">
            {/* Vidéo (conservée) avec parallaxe */}
            <motion.div style={{ y: videoY, scale: videoScale }} className="absolute inset-0">
                <video autoPlay loop muted playsInline className="h-full w-full object-cover object-center">
                    <source src="/video/video_presentation.mp4" type="video/mp4" />
                </video>
            </motion.div>

            {/* Voiles de lisibilité */}
            <div className="absolute inset-0 bg-[#030409]/55" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#030409]/70 via-[#030409]/45 to-[#030409]/90" />

            {/* Aurores */}
            <div className="absolute -top-1/4 -left-1/4 h-[70%] w-[60%] rounded-full bg-blue-600/30 mix-blend-screen blur-[120px] motion-safe:animate-aurora" />
            <div className="absolute top-1/4 -right-1/4 h-[60%] w-[55%] rounded-full bg-cyan-400/20 mix-blend-screen blur-[120px] motion-safe:animate-aurora-reverse" />
            <div className="absolute -bottom-1/4 left-1/4 h-[50%] w-[50%] rounded-full bg-indigo-500/20 mix-blend-screen blur-[140px] motion-safe:animate-aurora" />

            {/* Grille fine, estompée vers les bords */}
            <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "72px 72px",
                    maskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black 30%, transparent 100%)",
                    WebkitMaskImage: "radial-gradient(ellipse 70% 55% at 50% 35%, black 30%, transparent 100%)",
                }}
            />

            {/* Halo qui suit la souris */}
            <motion.div className="absolute inset-0" style={{ background: spotlight }} />

            {/* Fondu vers la section suivante */}
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent sm:h-56" />
        </div>
    );
}
