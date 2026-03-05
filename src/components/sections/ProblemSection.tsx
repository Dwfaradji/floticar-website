"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { PAINS } from "@/lib/constants/landing";
import Section from "../ui/Section";
import SectionHeader from "../ui/SectionHeader";

export default function ProblemSection() {
    return (
        <Section ariaLabel="Problèmes courants de gestion de flotte">
            <SectionHeader
                badge="Le problème"
                title={
                    <>
                        Les entreprises perdent du temps{" "}
                        <span className="text-gray-500 dark:text-slate-500">et de l&apos;argent</span>
                    </>
                }
                description="Sans outil dédié, la gestion d'une flotte génère des coûts cachés et une charge administrative considérable."
            />

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {PAINS.map(({ icon: Icon, title, desc }) => (
                    <motion.div
                        key={title}
                        variants={fadeUp}
                        whileHover={{ y: -4, borderColor: "rgba(239,68,68,0.3)" }}
                        className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 dark:border-white/5 dark:bg-white/[0.02] dark:shadow-none"
                    >
                        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-red-600 ring-1 ring-red-200 transition group-hover:bg-red-200 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/10 dark:group-hover:bg-red-500/15">
                            <Icon size={22} />
                        </div>
                        <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">{title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600 dark:text-slate-500">{desc}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
