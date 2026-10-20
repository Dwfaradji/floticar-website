"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface GlowCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    glowColor?: string; // hex ou rgba
    enableTilt?: boolean;
}

export default function GlowCard({
    children,
    className = "",
    glowColor = "rgba(59, 130, 246, 0.2)",
    enableTilt = true,
    ...props
}: GlowCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const reduceMotion = useReducedMotion();
    const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
    const [rotate, setRotate] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || reduceMotion) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });

        if (enableTilt) {
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6; // max 6deg tilt
            const rotateY = ((x - centerX) / centerX) * 6;
            setRotate({ x: rotateX, y: rotateY });
        }
    };

    const handleMouseLeave = () => {
        setMousePos(null);
        setRotate({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={
                enableTilt && !reduceMotion
                    ? { rotateX: rotate.x, rotateY: rotate.y }
                    : undefined
            }
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            style={{ transformStyle: "preserve-3d" }}
            className={`relative overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/70 p-8 shadow-sm backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] ${className}`}
            {...props}
        >
            {/* Spotlight border glow */}
            {mousePos && !reduceMotion && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -inset-px rounded-[2rem] transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
                        opacity: 1,
                        maskImage: "linear-gradient(black, black) content-box, linear-gradient(black, black)",
                        maskComposite: "exclude",
                        WebkitMaskComposite: "xor",
                    }}
                />
            )}

            {/* Ambient internal spotlight */}
            {mousePos && !reduceMotion && (
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 rounded-[2rem] transition-opacity duration-300"
                    style={{
                        background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 80%)`,
                        opacity: 0.4,
                    }}
                />
            )}

            <div className="relative z-10 h-full">{children}</div>
        </motion.div>
    );
}
