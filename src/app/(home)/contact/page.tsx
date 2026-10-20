"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, Zap, Lock, Users, Send, AlertCircle } from "lucide-react";
import { checkEmailRules } from "@/lib/email-rules";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    icon: Zap,
    title: "Réponse garantie sous 24h",
    desc: "Notre équipe technique et commerciale vous répond rapidement pour vous aider à démarrer sans friction.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    glow: "rgba(59, 130, 246, 0.25)",
  },
  {
    icon: Users,
    title: "Accompagnement sur-mesure",
    desc: "Chaque flotte est unique. Nous configurons Floticar selon vos contraintes métier spécifiques.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  {
    icon: Lock,
    title: "Données 100% souveraines",
    desc: "Vos informations sont chiffrées de bout en bout et hébergées exclusivement en France (RGPD).",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    glow: "rgba(99, 102, 241, 0.25)",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Custom validation
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Le nom est requis.";
    const emailCheck = checkEmailRules(form.email);
    if (!form.email.trim()) newErrors.email = "L'email est requis.";
    else if (!emailCheck.valid) newErrors.email = emailCheck.reason ?? "";
    if (!form.message.trim()) newErrors.message = "Le message est requis.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { 
        setStatus("success"); 
        setForm({ name: "", email: "", message: "", website: "" }); 
        setErrorMessage("");
      } else { 
        const data = await res.json().catch(() => ({}));
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi.");
        setStatus("error"); 
      }
    } catch { 
      setErrorMessage("Impossible de joindre le serveur. Vérifiez votre connexion.");
      setStatus("error"); 
    }
  };

  return (
    <main className="relative isolate min-h-screen overflow-hidden pt-28 pb-32 sm:pt-36">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
      </div>

      {/* HERO */}
      <section className="px-6 text-center">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <Mail size={14} /> Contact & Support
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              Parlons de votre{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                flotte automobile.
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Posez vos questions, sollicitez un audit gratuit de votre organisation ou échangez avec un expert sur vos projets d&apos;optimisation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURE CARDS */}
      <section className="mt-16 px-6">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, color, bg, glow }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease: EASE_OUT_EXPO }}
            >
              <GlowCard glowColor={glow} className="h-full !p-8 transition-all duration-300 hover:-translate-y-1.5">
                <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg} ${color} shadow-sm ring-1 ring-current/20`}>
                  <Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{desc}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="mt-16 px-6">
        <div className="mx-auto max-w-2xl">
          <GlowCard glowColor="rgba(56, 189, 248, 0.25)" className="!p-8 shadow-2xl sm:!p-12">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center py-8 text-center"
                >
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h2 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Message transmis avec succès !</h2>
                  <p className="mb-8 text-base text-gray-600 dark:text-gray-400">
                    Merci pour votre message. Notre équipe prendra contact avec vous dans les 24 heures ouvrées.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:bg-blue-500"
                  >
                    Envoyer un autre message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Honeypot field */}
                  <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  
                  <div className="mb-6">
                    <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Envoyez-nous un message</h2>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Remplissez ces informations et nous reviendrons vers vous au plus vite.</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Votre nom complet</label>
                      <input
                        id="name"
                        type="text" name="name" placeholder="Jean Dupont"
                        autoComplete="name"
                        value={form.name} onChange={handleChange}
                        required
                        className={`input-field focus:input-field-focus ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      />
                      {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Email professionnel</label>
                      <input
                        id="email"
                        type="email" name="email" placeholder="jean@entreprise.com"
                        autoComplete="email"
                        value={form.email} onChange={handleChange}
                        required
                        className={`input-field focus:input-field-focus ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      />
                      {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Votre message</label>
                      <textarea
                        id="message"
                        name="message" placeholder="Décrivez votre besoin, la taille de votre flotte ou vos questions..."
                        value={form.message} onChange={handleChange}
                        rows={4}
                        required
                        className={`input-field focus:input-field-focus resize-none ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                      />
                      {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
                    </div>

                    {status === "error" && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-start gap-2 text-sm font-medium text-red-500"
                      >
                        <AlertCircle size={16} className="mt-0.5 shrink-0" /> <span>{errorMessage}</span>
                      </motion.p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 py-4 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-cyan-500/35 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                      />
                      {status === "loading" ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      ) : (
                        <>
                          <span className="relative">Envoyer ma demande</span>
                          <Send size={16} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="pt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                      Réponse garantie sous 24h · Données confidentielles & conformes RGPD
                    </p>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </GlowCard>
        </div>
      </section>
    </main>
  );
}
