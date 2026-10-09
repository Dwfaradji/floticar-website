"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const INTEGRATIONS = [
    { name: "TotalEnergies", logo: "⛽" },
    { name: "TomTom", logo: "🗺️" },
    { name: "Salesforce", logo: "☁️" },
    { name: "Slack", logo: "💬" },
    { name: "Qonto", logo: "🏦" },
    { name: "Google Fleet", logo: "📍" },
];

export default function IntegrationsSection() {
    return (
        <section className="relative overflow-hidden border-y border-gray-100 bg-white py-24 dark:border-white/5 dark:bg-[#030409]">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Connecté à votre écosystème
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Floticar s&apos;intègre nativement avec les outils que vous utilisez déjà tous les jours. Pas de double saisie, pas de friction.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Gradient masks for smooth fading at edges */}
                    <div className="absolute top-0 bottom-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#030409]" />
                    <div className="absolute top-0 right-0 bottom-0 z-10 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#030409]" />
                    
                    <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all duration-700 hover:grayscale-0 md:gap-16">
                        {INTEGRATIONS.map((integration, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex cursor-default items-center gap-3 text-2xl font-bold tracking-tighter text-gray-300 transition-colors hover:text-gray-900 dark:text-gray-700 dark:hover:text-white"
                            >
                                <span className="text-3xl">{integration.logo}</span>
                                {integration.name}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
