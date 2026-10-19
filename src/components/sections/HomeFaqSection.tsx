"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const HOME_FAQS = [
  {
    question: "Floticar nécessite-t-il l'installation de boîtiers OBD ou de traceurs GPS ?",
    answer: "Non, aucun boîtier physique ni matériel intrusif n'est nécessaire. Floticar fonctionne grâce à un QR Code apposé dans chaque véhicule et notre application mobile conducteur. Vos chauffeurs et collaborateurs scannent le véhicule en quelques secondes pour déclarer leur prise en main, relever leur kilométrage, enregistrer un plein ou photographier une anomalie en temps réel."
  },
  {
    question: "Comment se déroule la migration de mes données depuis mes fichiers Excel ?",
    answer: "La transition est totalement transparente et garantie sous 24h. Lors de votre inscription, notre équipe technique récupère vos fichiers Excel actuels, nettoie et structure vos fiches véhicules, conducteurs et contrats, puis configure votre espace Floticar sans aucune interruption de votre activité."
  },
  {
    question: "Floticar est-il adapté aux petites flottes de 3 à 15 véhicules ?",
    answer: "Absolument. Floticar a été conçu spécifiquement pour les PME, TPE, artisans et associations qui ne disposent pas d'un gestionnaire de flotte à plein temps. Dès le premier véhicule, la plateforme centralise vos documents, calcule vos consommations et vous alerte automatiquement pour éviter les amendes et retards de contrôle technique."
  },
  {
    question: "Y a-t-il une période d'engagement ou des frais cachés ?",
    answer: "Aucun engagement. Toutes nos offres sont résiliables ou ajustables à tout moment. Votre facturation s'adapte mensuellement au prorata du nombre réel de véhicules actifs dans votre parc, sans aucun frais d'installation ni surcoût caché."
  },
  {
    question: "Où sont stockées nos données et la solution est-elle conforme au RGPD ?",
    answer: "La totalité de vos données est hébergée en France sur des serveurs sécurisés et souverains. L'accès est strictement protégé par des protocoles de chiffrement conformes aux exigences du RGPD et de l'ANSSI, garantissant la confidentialité des informations de vos conducteurs et permis de conduire."
  }
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
    <section 
      aria-label="Foire aux questions"
      className="relative overflow-hidden border-t border-gray-200/50 bg-gray-50 py-32 dark:border-white/5 dark:bg-[#030409]"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-4xl px-6">
        {/* HEADER */}
        <div className="mb-16 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-sm backdrop-blur-sm dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300"
          >
            <HelpCircle size={14} className="text-blue-600 dark:text-blue-400" />
            Questions fréquentes
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
          >
            Tout ce que vous devez savoir{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              avant de commencer.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-4 max-w-xl text-base text-gray-500 sm:text-lg dark:text-gray-400"
          >
            Des réponses claires et transparentes pour vous lancer en toute sérénité.
          </motion.p>
        </div>

        {/* ACCORDION */}
        <div className="space-y-4">
          {HOME_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.question}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl border border-gray-200/80 bg-white transition-colors duration-200 hover:border-blue-300 dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-blue-500/30"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                    {faq.question}
                  </span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-transform duration-300 dark:bg-white/5 dark:text-gray-400 ${isOpen ? "rotate-180 bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400" : ""}`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="border-t border-gray-100 px-6 pt-4 pb-6 text-sm leading-relaxed text-gray-600 sm:text-base dark:border-white/5 dark:text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM HELPFUL NOTE */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4 text-center text-sm text-gray-500 dark:text-gray-400"
        >
          <span>Vous avez une question spécifique sur votre parc ?</span>
          <Link
            href="/faq"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Consulter toute la FAQ <ArrowRight size={14} />
          </Link>
          <span className="text-gray-300 dark:text-gray-700">•</span>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1 font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Parler à un conseiller Floticar <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
