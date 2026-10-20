"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ChevronDown, CheckCircle, Clock,
  DollarSign, BarChart2, Truck, HelpCircle, Send, Sparkles, AlertCircle
} from "lucide-react";
import { checkEmailRules } from "@/lib/email-rules";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

const faqs = [
  { category: "Productivité", icon: Clock, question: "Comment Floticar peut me faire gagner du temps ?", answer: "Toutes vos informations de flotte centralisées et accessibles en quelques clics, plus besoin de chercher dans plusieurs fichiers ou applications." },
  { category: "Productivité", icon: Clock, question: "Puis-je automatiser le suivi des véhicules ?", answer: "Oui, les alertes et notifications automatiques vous permettent de suivre vos véhicules sans effort." },
  { category: "Productivité", icon: Clock, question: "Comment réduire les tâches administratives ?", answer: "Floticar regroupe la maintenance, les dépenses et les rapports dans un tableau de bord simple, pour réduire les tâches répétitives." },
  { category: "Économie", icon: DollarSign, question: "Comment Floticar aide à réduire les coûts ?", answer: "Analyse précise des dépenses, du carburant et de la maintenance pour identifier les économies possibles." },
  { category: "Économie", icon: DollarSign, question: "Puis-je suivre les consommations de carburant ?", answer: "Oui, Floticar suit chaque plein et fournit des rapports détaillés par véhicule et par période." },
  { category: "Économie", icon: DollarSign, question: "Floticar me permet-il d'éviter les frais imprévus ?", answer: "Oui, grâce aux alertes de maintenance et de contrôle technique, vous anticipez les coûts avant qu'ils ne surviennent." },
  { category: "Contrôle", icon: BarChart2, question: "Puis-je suivre l'activité de ma flotte en temps réel ?", answer: "Oui, visualisez l'emplacement et les trajets de vos véhicules sur une carte interactive." },
  { category: "Contrôle", icon: BarChart2, question: "Comment obtenir des rapports détaillés ?", answer: "Floticar génère des rapports personnalisés que vous pouvez exporter pour les réunions et audits." },
  { category: "Sécurité", icon: Shield, question: "Mes données sont-elles sécurisées ?", answer: "Toutes les données sont chiffrées et hébergées sur des serveurs sécurisés conformes RGPD." },
  { category: "Sécurité", icon: Shield, question: "Qui a accès aux données de ma flotte ?", answer: "Seuls les utilisateurs que vous avez autorisés peuvent accéder aux informations sensibles." },
  { category: "Sécurité", icon: Shield, question: "Où sont stockées mes données ?", answer: "Vos informations sont hébergées exclusivement sur des serveurs sécurisés situés en France. Nous utilisons un cryptage de bout en bout (AES-256) et réalisons des sauvegardes quotidiennes." },
  { category: "Business", icon: DollarSign, question: "Floticar est-il rentable pour ma flotte ?", answer: "Nos clients constatent en moyenne une réduction de 15 à 25 % des coûts opérationnels grâce à une meilleure gestion." },
  { category: "Business", icon: DollarSign, question: "Y a-t-il une période d'engagement ou des frais cachés ?", answer: "Non, chez Floticar, la transparence est notre priorité. Nos offres sont sans engagement. Vous êtes libre d'annuler ou de modifier votre abonnement à tout moment." },
  { category: "Business", icon: DollarSign, question: "Comment est calculé le prix si ma flotte évolue en cours de mois ?", answer: "La facturation s'ajuste automatiquement (au prorata) chaque mois en fonction du nombre exact de véhicules actifs dans votre plateforme. Si vous vendez un véhicule le 15 du mois, vous ne paierez que pour 15 jours." },
  { category: "Business", icon: DollarSign, question: "Comment fonctionne l'essai gratuit de 14 jours ?", answer: "Vous avez accès à l'intégralité des fonctionnalités de l'offre Essentiel pendant 14 jours, sans carte bancaire. Ensuite, vous pourrez souscrire à un abonnement." },
  { category: "Support", icon: Truck, question: "Comment contacter le support ?", answer: "Par email ou via le formulaire de contact, réponse sous 24h." },
  { category: "Support", icon: HelpCircle, question: "Puis-je importer mes données actuelles (fichiers Excel) ?", answer: "Absolument. Lors de l'onboarding, nous importons gratuitement et structurons l'ensemble de votre parc et de vos conducteurs sur la plateforme à partir de vos fichiers Excel." },
];

const categoryColors: Record<string, string> = {
  Productivité: "bg-blue-500", Économie: "bg-emerald-500",
  Contrôle: "bg-violet-500", Sécurité: "bg-orange-500",
  Business: "bg-cyan-500", Support: "bg-pink-500",
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [emailError, setEmailError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const categories = ["Toutes", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered = selectedCategory === "Toutes" ? faqs : faqs.filter((f) => f.category === selectedCategory);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (e.target.name === "email") setEmailError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailCheck = checkEmailRules(form.email);
    if (!emailCheck.valid) { setEmailError(emailCheck.reason ?? ""); return; }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, category: selectedCategory }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else {
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Une erreur est survenue. Réessayez.");
        setStatus("error");
      }
    } catch { setErrorMessage("Une erreur est survenue. Réessayez."); setStatus("error"); }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden pt-28 pb-32 sm:pt-36">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
      </div>

      {/* HERO */}
      <section className="px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
            <HelpCircle size={14} /> Centre d&apos;aide & Questions
          </div>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
            Questions{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              fréquentes.
            </span>
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
            Retrouvez toutes les réponses aux questions les plus courantes sur le fonctionnement, les tarifs et la sécurité de Floticar.
          </p>
        </motion.div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="mt-12 px-6">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => { setSelectedCategory(cat); setOpenIndex(null); }}
                className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 ${
                  isSelected
                    ? "scale-105 bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/25"
                    : "border border-gray-200/80 bg-white/70 text-gray-600 backdrop-blur-md hover:border-blue-400 hover:text-blue-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300 dark:hover:border-white/20"
                }`}
              >
                {cat !== "Toutes" && (
                  <span className={`h-2 w-2 rounded-full ${categoryColors[cat] ?? "bg-gray-400"}`} />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="mt-14 px-6 pb-20">
        <div className="mx-auto max-w-3xl space-y-4">
          {filtered.map((faq, i) => {
            const Icon = faq.icon;
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.5, ease: EASE_OUT_EXPO }}
                className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/40 bg-white shadow-xl shadow-blue-500/5 dark:border-cyan-400/30 dark:bg-white/[0.04]"
                    : "border-gray-200/80 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${categoryColors[faq.category] ?? "bg-gray-500"}`}>
                      <Icon size={16} />
                    </div>
                    <span className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                      {faq.question}
                    </span>
                  </div>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white shadow-md shadow-blue-600/30"
                        : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                    }`}
                  >
                    <ChevronDown size={16} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_OUT_EXPO }}
                    >
                      <div className="border-t border-gray-100 px-6 pt-4 pb-6 pl-16 text-sm leading-relaxed text-gray-600 dark:border-white/5 dark:text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* QUESTION FORM */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-xl">
          <GlowCard glowColor="rgba(56, 189, 248, 0.25)" className="!p-8 shadow-2xl sm:!p-10">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Question transmise !</h2>
                  <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">Notre équipe vous apportera une réponse personnalisée sous 24h.</p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-full bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow-md shadow-blue-500/25 transition hover:bg-blue-500"
                  >
                    Poser une autre question
                  </button>
                </motion.div>
              ) : (
                <motion.div key="form">
                  <div className="mb-6">
                    <div className="mb-2 inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-cyan-600 uppercase dark:text-cyan-400">
                      <Sparkles size={13} /> Support direct
                    </div>
                    <h2 className="text-xl font-extrabold text-gray-900 sm:text-2xl dark:text-white">
                      Votre question n&apos;est pas listée ?
                    </h2>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Posez-la directement, nos spécialistes vous répondront sous 24h ouvrées.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text" name="name" placeholder="Votre nom complet" value={form.name} onChange={handleChange} required
                        className="input-field focus:input-field-focus"
                      />
                    </div>
                    <div>
                      <input
                        type="email" name="email" placeholder="Votre email professionnel" value={form.email} onChange={handleChange} required
                        className={`input-field focus:input-field-focus ${emailError ? "border-red-500" : ""}`}
                      />
                      {emailError && <p className="mt-1.5 text-xs text-red-500">{emailError}</p>}
                    </div>
                    <div>
                      <textarea
                        name="message" placeholder={`Votre question concernant ${selectedCategory}...`} value={form.message} onChange={handleChange} rows={3} required
                        className="input-field focus:input-field-focus resize-none"
                      />
                    </div>

                    {status === "error" && (
                      <p className="flex items-center gap-1.5 text-xs font-semibold text-red-500">
                        <AlertCircle size={14} /> {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.02] disabled:opacity-60"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                      />
                      {status === "loading" ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      ) : (
                        <>
                          <span className="relative">Envoyer ma question</span>
                          <Send size={14} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </GlowCard>
        </div>
      </section>
    </main>
  );
}
