"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp } from "@/lib/animations";

export default function PricingCTASection() {
    return (
        <section className="border-y border-gray-200/50 bg-gray-50 py-24 dark:border-white/5 dark:bg-[#030409]">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Curieux de connaître nos <span className="text-blue-600 dark:text-blue-400">tarifs</span> ?
                    </h2>
                    <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500 dark:text-gray-400">
                        Un modèle de tarification simple, sans frais cachés, qui s'adapte parfaitement à la taille de votre flotte automobile.
                    </p>
                    <Link
                        href="/tarifs"
                        className="inline-flex items-center justify-center rounded-full bg-gray-900 px-8 py-4 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                    >
                        Découvrir nos tarifs
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
