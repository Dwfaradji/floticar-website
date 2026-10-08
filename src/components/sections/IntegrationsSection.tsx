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
        <section className="bg-white dark:bg-[#030409] py-24 border-y border-gray-100 dark:border-white/5 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mb-16 text-center max-w-2xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white mb-4">
                            Connecté à votre écosystème
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Floticar s'intègre nativement avec les outils que vous utilisez déjà tous les jours. Pas de double saisie, pas de friction.
                        </p>
                    </motion.div>
                </div>

                <div className="relative">
                    {/* Gradient masks for smooth fading at edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent dark:from-[#030409] z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent dark:from-[#030409] z-10" />
                    
                    <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
                        {INTEGRATIONS.map((integration, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-3 text-2xl font-bold tracking-tighter text-gray-300 dark:text-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors cursor-default"
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
