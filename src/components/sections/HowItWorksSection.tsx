"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const STEPS = [
  {
    num: "01",
    title: "Connectez votre flotte",
    desc: "Importez vos données véhicules et conducteurs via notre outil d'onboarding intelligent.",
  },
  {
    num: "02",
    title: "Configurez vos alertes",
    desc: "Définissez vos règles de maintenance.",
  },
  {
    num: "03",
    title: "Pilotez en toute sérénité",
    desc: "La plateforme travaille pour vous. Recevez uniquement les notifications qui nécessitent votre attention.",
  },
];

export default function HowItWorksSection() {
    return (
        <section className="relative overflow-hidden border-b border-gray-200/50 bg-gray-50 py-32 dark:border-white/5 dark:bg-[#0a0a0a]">
            <div className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
            
            <div className="relative z-10 mx-auto max-w-7xl px-6">
                <div className="mx-auto mb-24 max-w-3xl text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
                            Déployé en quelques heures.
                        </h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400">
                            {`Un processus d'intégration fluide pour que vous puissiez vous concentrer sur ce qui compte vraiment.`}
                        </p>
                    </motion.div>
                </div>

                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative grid gap-12 md:grid-cols-3 md:gap-8"
                >
                    {/* Connecting line for desktop */}
                    <div className="absolute top-12 right-[15%] left-[15%] hidden h-0.5 bg-gradient-to-r from-blue-600/10 via-blue-600/30 to-blue-600/10 md:block dark:from-white/5 dark:via-white/10 dark:to-white/5" />

                    {STEPS.map((step, idx) => (
                        <motion.div key={idx} variants={fadeUp} className="relative flex flex-col items-center text-center">
                            <div className="relative z-10 mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-xl ring-1 shadow-blue-900/5 ring-gray-200/50 dark:bg-[#030409] dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] dark:ring-white/10">
                                <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-3xl font-bold text-transparent">{step.num}</span>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{step.title}</h3>
                            <p className="mx-auto max-w-xs text-base leading-relaxed font-medium text-gray-500 dark:text-gray-400">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
