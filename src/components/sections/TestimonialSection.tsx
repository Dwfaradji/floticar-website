"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialSection() {
    return (
        <section aria-label="Témoignage client Floticar" className="relative overflow-hidden bg-white/[0.02] px-6 py-28">
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[80px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mx-auto max-w-3xl text-center"
            >
                <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                </div>

                <blockquote className="mb-8 text-xl font-medium leading-relaxed text-gray-900 dark:text-white sm:text-2xl">
                    &ldquo;Depuis que nous utilisons Floticar, nous avons réduit nos coûts de flotte de
                    <span className="font-extrabold text-blue-600 dark:text-blue-300"> 18&nbsp;%</span> en six mois. La visibilité
                    sur nos dépenses est incomparable.&rdquo;
                </blockquote>

                <div className="inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 dark:from-blue-500 dark:to-blue-700 text-sm font-bold text-white">
                        JD
                    </div>
                    <p className="text-left text-sm text-gray-600 dark:text-slate-400">
                        <span className="font-semibold text-gray-900 dark:text-white">J. Dupont</span>
                        <br />
                        Responsable de flotte · PME de services (Île-de-France)
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
