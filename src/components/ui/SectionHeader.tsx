"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import Badge from "./Badge";
import { ReactNode } from "react";

interface SectionHeaderProps {
    badge?: string;
    title: ReactNode;
    description?: ReactNode;
    align?: "center" | "left";
    className?: string;
}

export default function SectionHeader({
    badge,
    title,
    description,
    align = "center",
    className = "",
}: SectionHeaderProps) {
    return (
        <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}>
            {badge && (
                <motion.div variants={fadeUp}>
                    <Badge>{badge}</Badge>
                </motion.div>
            )}
            <motion.h2
                variants={fadeUp}
                className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    variants={fadeUp}
                    className={`mt-4 text-sm leading-relaxed text-gray-600 dark:text-slate-400 ${align === "center" ? "mx-auto max-w-xl" : "max-w-2xl"}`}
                >
                    {description}
                </motion.p>
            )}
        </div>
    );
}
