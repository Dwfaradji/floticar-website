"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/animations";

export type HeadlineSegment = {
    text: string;
    /** Mot(s) mis en avant avec le dégradé animé. */
    highlight?: boolean;
    /** Retour à la ligne après ce segment (desktop uniquement). */
    breakAfter?: boolean;
};

const container = (delay: number): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren: 0.07, delayChildren: delay } },
});

const word: Variants = {
    hidden: { opacity: 0, y: "0.6em", rotateX: -40, filter: "blur(12px)" },
    visible: {
        opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)",
        transition: { duration: 0.9, ease: EASE_OUT_EXPO },
    },
};

const HIGHLIGHT_CLASSES =
    "bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] bg-clip-text text-transparent motion-safe:animate-gradient-x";

/**
 * Titre révélé mot par mot (flou → net, légère rotation 3D).
 * Le texte reste dans le DOM tel quel : aucun impact SEO.
 */
export default function AnimatedHeadline({
    segments,
    className = "",
    delay = 0,
}: {
    segments: HeadlineSegment[];
    className?: string;
    delay?: number;
}) {
    return (
        <motion.h1
            className={className}
            style={{ perspective: 800 }}
            variants={container(delay)}
            initial="hidden"
            animate="visible"
        >
            {segments.map((segment, si) => (
                <Fragment key={si}>
                    {segment.text.split(" ").map((w, wi) => (
                        <Fragment key={wi}>
                            <motion.span
                                variants={word}
                                className={`inline-block origin-bottom will-change-transform ${segment.highlight ? HIGHLIGHT_CLASSES : ""}`}
                            >
                                {w}
                            </motion.span>{" "}
                        </Fragment>
                    ))}
                    {segment.breakAfter && <br className="hidden md:block" />}
                </Fragment>
            ))}
        </motion.h1>
    );
}
