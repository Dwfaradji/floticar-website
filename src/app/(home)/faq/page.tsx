"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, ChevronDown, CheckCircle, Clock,
  DollarSign, BarChart2, Truck, HelpCircle, Send,
} from "lucide-react";

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
  { category: "Business", icon: DollarSign, question: "Floticar est-il rentable pour ma flotte ?", answer: "Nos clients constatent en moyenne une réduction de 15 à 25 % des coûts opérationnels grâce à une meilleure gestion." },
  { category: "Support", icon: Truck, question: "Comment contacter le support ?", answer: "Par email ou via le formulaire de contact, réponse sous 24h." },
];

const categoryColors: Record<string, string> = {
  Productivité: "bg-blue-500", Économie: "bg-emerald-500",
  Contrôle: "bg-violet-500", Sécurité: "bg-orange-500",
  Business: "bg-cyan-500", Support: "bg-pink-500",
};

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Toutes");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const categories = ["Toutes", ...Array.from(new Set(faqs.map((f) => f.category)))];
  const filtered = selectedCategory === "Toutes" ? faqs : faqs.filter((f) => f.category === selectedCategory);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, category: selectedCategory }),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-12 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-100/50 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          <HelpCircle size={12} /> FAQ
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-foreground mb-3 text-4xl font-bold tracking-tight md:text-5xl">
          Questions fréquentes
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="mx-auto max-w-xl text-gray-500 dark:text-gray-400">
          Retrouvez les réponses aux questions les plus courantes sur Floticar.
        </motion.p>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-6 pb-8">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button key={cat} onClick={() => { setSelectedCategory(cat); setOpenIndex(null); }}
              className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-200 ${selectedCategory === cat
                ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                : "border border-gray-200 bg-white/80 text-gray-500 hover:border-blue-200 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400"
                }`}
            >
              {cat !== "Toutes" && (
                <span className={`h-2 w-2 rounded-full ${categoryColors[cat] ?? "bg-gray-400"}`} />
              )}
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="px-6 pb-16">
        <motion.div className="mx-auto max-w-3xl space-y-3"
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden" animate="show"
        >
          {filtered.map((faq, i) => {
            const Icon = faq.icon;
            const isOpen = openIndex === i;
            return (
              <motion.div key={i}
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } }}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${isOpen ? "border-blue-200 bg-white shadow-md shadow-blue-50 dark:border-blue-800 dark:bg-gray-900/80" : "border-gray-100 bg-white/80 hover:border-gray-200 dark:border-gray-800 dark:bg-gray-900/50"}`}
              >
                <button onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-white ${categoryColors[faq.category] ?? "bg-gray-400"}`}>
                      <Icon size={15} />
                    </div>
                    <span className={`text-sm font-semibold ${isOpen ? "text-blue-700 dark:text-blue-400" : "text-foreground"}`}>
                      {faq.question}
                    </span>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="shrink-0">
                    <ChevronDown size={16} className={isOpen ? "text-blue-600" : "text-gray-400"} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div key="content"
                      initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <p className="px-5 pt-0 pb-5 pl-16 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* QUESTION FORM */}
      <section className="px-6 pb-24">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mx-auto max-w-xl rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-xl shadow-gray-100 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 dark:shadow-none"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="ok" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-3 py-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle size={28} />
                </div>
                <p className="text-lg font-bold text-gray-900">Message envoyé !</p>
                <p className="text-sm text-gray-500">Nous vous contacterons sous 24h.</p>
                <button onClick={() => setStatus("idle")} className="mt-2 rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700">
                  Poser une autre question
                </button>
              </motion.div>
            ) : (
              <motion.div key="form">
                <h2 className="text-foreground mb-1 text-lg font-bold">Votre question n&apos;est pas listée ?</h2>
                <p className="mb-5 text-sm text-gray-500 dark:text-gray-400">Posez-la directement, nous vous répondrons sous 24h.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" name="name" placeholder="Votre nom" value={form.name} onChange={handleChange} required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-800 dark:bg-gray-900/50" />
                  <input type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-800 dark:bg-gray-900/50" />
                  <textarea name="message" placeholder={`Votre question sur ${selectedCategory}...`} value={form.message} onChange={handleChange} rows={3}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm transition outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 dark:border-gray-800 dark:bg-gray-900/50" />
                  {status === "error" && <p className="text-sm text-red-500">Une erreur est survenue. Réessayez.</p>}
                  <button type="submit" disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60">
                    {status === "loading"
                      ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      : <><Send size={14} /> Envoyer ma question</>}
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
