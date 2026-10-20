"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";

const HOME_FAQS = [
    {
        question: "Floticar nécessite-t-il l'installation de boîtiers OBD ou de traceurs GPS ?",
        answer: "Non, aucun boîtier physique ni matériel intrusif n'est nécessaire. Floticar fonctionne grâce à un QR Code apposé dans chaque véhicule et notre application mobile conducteur. Vos chauffeurs et collaborateurs scannent le véhicule en quelques secondes pour déclarer leur prise en main, relever leur kilométrage, enregistrer un plein ou photographier une anomalie en temps réel.",
    },
    {
        question: "Comment se déroule la migration de mes données depuis mes fichiers Excel ?",
        answer: "La transition est totalement transparente et garantie sous 24h. Lors de votre inscription, notre équipe technique récupère vos fichiers Excel actuels, nettoie et structure vos fiches véhicules, conducteurs et contrats, puis configure votre espace Floticar sans aucune interruption de votre activité.",
    },
    {
        question: "Floticar est-il adapté aux petites flottes de 3 à 15 véhicules ?",
        answer: "Absolument. Floticar a été conçu spécifiquement pour les PME, TPE, artisans et associations qui ne disposent pas d'un gestionnaire de flotte à plein temps. Dès le premier véhicule, la plateforme centralise vos documents, calcule vos consommations et vous alerte automatiquement pour éviter les amendes et retards de contrôle technique.",
    },
    {
        question: "Y a-t-il une période d'engagement ou des frais cachés ?",
        answer: "Aucun engagement. Toutes nos offres sont résiliables ou ajustables à tout moment. Votre facturation s'adapte mensuellement au prorata du nombre réel de véhicules actifs dans votre parc, sans aucun frais d'installation ni surcoût caché.",
    },
    {
        question: "Où sont stockées nos données et la solution est-elle conforme au RGPD ?",
        answer: "La totalité de vos données est hébergée en France sur des serveurs sécurisés et souverains. L'accès est strictement protégé par des protocoles de chiffrement conformes aux exigences du RGPD et de l'ANSSI, garantissant la confidentialité des informations de vos conducteurs et permis de conduire.",
    },
];

export default function HomeFaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleIndex = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: HOME_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <section aria-label="Foire aux questions" className="relative overflow-hidden py-28 sm:py-36">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="mx-auto max-w-4xl px-6">
                {/* Header */}
                <div className="mb-20 text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                            <HelpCircle size={14} />
                            Foire aux questions
                        </div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            Tout ce que vous devez savoir{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                avant de commencer.
                            </span>
                        </h2>
                        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Des réponses claires et transparentes pour vous lancer en toute sérénité.
                        </p>
                    </motion.div>
                </div>

                {/* Accordion List */}
                <div className="space-y-4">
                    {HOME_FAQS.map((faq, idx) => {
                        const isOpen = openIndex === idx;
                        return (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                                    isOpen
                                        ? "border-blue-500/40 bg-white shadow-xl shadow-blue-500/5 dark:border-cyan-400/30 dark:bg-white/[0.04]"
                                        : "border-gray-200/80 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
                                }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => toggleIndex(idx)}
                                    className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-7"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                                        {faq.question}
                                    </span>
                                    <div
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                                            isOpen
                                                ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                                                : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                                        }`}
                                    >
                                        <ChevronDown size={18} />
                                    </div>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                                        >
                                            <div className="border-t border-gray-100 px-6 pt-4 pb-7 text-sm leading-relaxed text-gray-600 sm:px-7 sm:text-base dark:border-white/5 dark:text-gray-300">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Helpful Links */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-14 flex flex-wrap items-center justify-center gap-4 text-center text-sm text-gray-600 dark:text-gray-400"
                >
                    <span>Vous avez une question spécifique sur votre parc ?</span>
                    <Link
                        href="/faq"
                        className="inline-flex items-center gap-1 font-bold text-blue-600 transition hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                        Consulter toute la FAQ <ArrowRight size={14} />
                    </Link>
                    <span className="text-gray-300 dark:text-gray-700">•</span>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 font-bold text-blue-600 transition hover:text-blue-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                    >
                        Parler à un conseiller <ArrowRight size={14} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
