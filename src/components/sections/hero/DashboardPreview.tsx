"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { Bell, Fuel, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { EASE_OUT_EXPO } from "@/lib/animations";

type DashboardPreviewProps = {
    /** Position normalisée du curseur dans le hero (-0.5 → 0.5), déjà lissée par un ressort. */
    pointerX: MotionValue<number>;
    pointerY: MotionValue<number>;
};

type FloatingCard = {
    icon: LucideIcon;
    iconClass: string;
    title: string;
    subtitle: string;
    position: string;
    /** Profondeur de parallaxe : plus c'est grand, plus la carte suit la souris. */
    depth: number;
    delay: number;
    floatClass: string;
};

const FLOATING_CARDS: FloatingCard[] = [
    {
        icon: Bell, iconClass: "bg-amber-500/15 text-amber-400",
        title: "Contrôle technique", subtitle: "AB-123-CD · dans 7 jours",
        position: "-left-10 top-[18%]", depth: 50, delay: 1.6, floatClass: "motion-safe:animate-float",
    },
    {
        icon: Fuel, iconClass: "bg-emerald-500/15 text-emerald-400",
        title: "Plein enregistré", subtitle: "52 L · scanné via QR code",
        position: "-right-12 top-[38%]", depth: 70, delay: 1.8, floatClass: "motion-safe:animate-float-slow",
    },
    {
        icon: Wrench, iconClass: "bg-blue-500/15 text-blue-400",
        title: "Entretien planifié", subtitle: "Révision des 30 000 km",
        position: "left-[12%] -bottom-8", depth: 35, delay: 2, floatClass: "motion-safe:animate-float",
    },
];

function FloatingInfoCard({ card, pointerX, pointerY }: { card: FloatingCard } & DashboardPreviewProps) {
    const x = useTransform(pointerX, (v) => v * card.depth);
    const y = useTransform(pointerY, (v) => v * card.depth);
    const Icon = card.icon;

    return (
        <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.8, ease: EASE_OUT_EXPO }}
            className={`absolute z-20 hidden lg:block ${card.position}`}
        >
            <div className={`flex items-center gap-3 rounded-2xl border border-white/15 bg-gray-900/70 py-3 pr-5 pl-3 shadow-2xl shadow-black/40 backdrop-blur-xl ${card.floatClass}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.iconClass}`}>
                    <Icon size={18} />
                </div>
                <div>
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                    <p className="text-xs text-gray-400">{card.subtitle}</p>
                </div>
            </div>
        </motion.div>
    );
}

/**
 * Aperçu du dashboard en 3D : il se redresse au fil du scroll
 * et s'incline légèrement en suivant la souris.
 */
export default function DashboardPreview({ pointerX, pointerY }: DashboardPreviewProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });

    const scrollTilt = useTransform(scrollYProgress, [0, 1], [28, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
    const rotateX = useTransform([scrollTilt, pointerY], ([tilt, py]: number[]) => tilt - py * 8);
    const rotateY = useTransform(pointerX, (px) => px * 10);
    const glowOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 0.8]);

    return (
        <div ref={ref} className="relative mx-auto w-full max-w-6xl px-2 sm:px-6" style={{ perspective: 1600 }}>
            {/* Lueur sous l'écran */}
            <motion.div
                aria-hidden="true"
                style={{ opacity: glowOpacity }}
                className="absolute inset-x-[10%] top-[20%] bottom-0 -z-10 rounded-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 blur-[100px]"
            />

            <motion.div
                initial={{ opacity: 0, y: 120 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 1.4, ease: EASE_OUT_EXPO }}
                style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                className="relative"
            >
                {/* Cadre type navigateur */}
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-gray-900/60 p-1.5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] ring-1 ring-white/10 backdrop-blur-xl sm:rounded-3xl sm:p-2">
                    <div className="flex items-center gap-2 px-3 py-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                        <div className="mx-auto hidden rounded-md bg-white/5 px-16 py-1 text-[11px] text-gray-400 sm:block">
                            app.floticar.com
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl">
                        <Image
                            src="/images/dashboard-preview.png"
                            alt="Tableau de bord Floticar : alertes, maintenance, véhicules et dépenses de la flotte"
                            width={1920}
                            height={954}
                            priority
                            sizes="(max-width: 1280px) 100vw, 1152px"
                            className="h-auto w-full"
                        />
                        {/* Reflet lumineux qui balaie l'écran à l'apparition */}
                        <motion.div
                            aria-hidden="true"
                            initial={{ x: "-120%" }}
                            animate={{ x: "120%" }}
                            transition={{ delay: 2.2, duration: 1.6, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                            style={{ skewX: -20 }}
                        />
                    </div>
                </div>

                {FLOATING_CARDS.map((card) => (
                    <FloatingInfoCard key={card.title} card={card} pointerX={pointerX} pointerY={pointerY} />
                ))}
            </motion.div>
        </div>
    );
}
