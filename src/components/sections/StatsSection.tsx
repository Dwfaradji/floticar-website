"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants/landing";

export default function StatsSection() {
    return (
        <section className="relative z-20 my-5 ">
            <div className="flex w-full justify-center bg-white dark:bg-transparent">
                <div className=" w-full max-w-5xl rounded-[2rem] border border-gray-200/50  p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0a0a0a]/80 dark:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.02)]">
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-4 md:divide-x md:divide-gray-200/50 dark:md:divide-white/10">
                        {STATS.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="flex flex-col items-center justify-center px-4 text-center"
                            >
                                <p className="bg-gradient-to-br from-gray-900 to-gray-600 bg-clip-text text-4xl font-extrabold tracking-tighter text-transparent dark:from-white dark:to-gray-400">
                                    {s.value}
                                </p>
                                <p className="mt-2 text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">
                                    {s.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
