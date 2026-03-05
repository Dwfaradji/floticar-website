"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 rounded-lg border border-transparent bg-gray-100/50" />
        );
    }

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="group relative flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white/60 px-3 py-2 text-sm font-medium text-gray-600 transition-all hover:bg-white hover:text-blue-600 hover:shadow-sm dark:border-gray-800 dark:bg-gray-950/60 dark:text-gray-400 dark:hover:bg-gray-900 dark:hover:text-blue-400"
            aria-label="Toggle theme"
        >
            <div className="relative flex h-5 w-5 items-center justify-center">
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 1 : 0,
                        rotate: isDark ? 0 : -45,
                        opacity: isDark ? 1 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute text-blue-400"
                >
                    <Sun size={18} />
                </motion.div>
                <motion.div
                    initial={false}
                    animate={{
                        scale: isDark ? 0 : 1,
                        rotate: isDark ? 45 : 0,
                        opacity: isDark ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute"
                >
                    <Moon size={18} />
                </motion.div>
            </div>

            <span className="shrink-0 transition-colors">
                {isDark ? "Mode Clair" : "Mode Sombre"}
            </span>
        </button>
    );
}
