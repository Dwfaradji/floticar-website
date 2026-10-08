"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const STEPS = [
  {
    num: "01",
    title: "Connectez votre flotte",
    desc: "Importez vos données véhicules et conducteurs en un clic via notre outil d'onboarding intelligent.",
  },
  {
    num: "02",
    title: "Configurez vos alertes",
    desc: "Définissez vos règles de maintenance, budgets et plafonds de consommation.",
  },
  {
    num: "03",
    title: "Pilotez en toute sérénité",
    desc: "La plateforme travaille pour vous. Recevez uniquement les notifications qui nécessitent votre attention.",
  },
];

export default function HowItWorksSection() {
    return (
        <section className="bg-gray-50 dark:bg-[#0a0a0a] py-32 border-b border-gray-200/50 dark:border-white/5 relative overflow-hidden">
            <div className="absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px] pointer-events-none" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="mb-24 text-center max-w-3xl mx-auto">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-6">
                            Déployé en quelques heures.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            Un processus d'intégration fluide pour que vous puissiez vous concentrer sur ce qui compte vraiment.
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-12 md:gap-8 md:grid-cols-3 relative"
                >
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-600/10 via-blue-600/30 to-blue-600/10 dark:from-white/5 dark:via-white/10 dark:to-white/5" />

                    {STEPS.map((step, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="relative text-center flex flex-col items-center">
                            <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl shadow-blue-900/5 ring-1 ring-gray-200/50 dark:bg-[#030409] dark:ring-white/10 dark:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
                                <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-cyan-500">{step.num}</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="text-base font-medium leading-relaxed text-gray-500 dark:text-gray-400 max-w-xs mx-auto">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
