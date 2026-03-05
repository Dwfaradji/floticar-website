"use client";

import { motion } from "framer-motion";
import { stagger } from "@/lib/animations";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
    ariaLabel: string;
    className?: string;
    maxWidth?: "max-w-2xl" | "max-w-3xl" | "max-w-4xl" | "max-w-5xl" | "max-w-6xl" | "max-w-7xl";
}

export default function Section({
    children,
    id,
    ariaLabel,
    className = "",
    maxWidth = "max-w-6xl",
}: SectionProps) {
    return (
        <section
            id={id}
            aria-label={ariaLabel}
            className={`px-6 py-28 ${className}`}
        >
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className={`mx-auto ${maxWidth}`}
            >
                {children}
            </motion.div>
        </section>
    );
}
