"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Mail, Zap, Lock, Users, Send, AlertCircle } from "lucide-react";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const features = [
  {
    icon: Zap,
    title: "Réponse sous 24h",
    desc: "Notre équipe s'engage à vous répondre rapidement pour vous aider à démarrer.",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    icon: Users,
    title: "Accompagnement personnalisé",
    desc: "Chaque flotte est unique. Nous adaptons notre solution à vos besoins.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
  {
    icon: Lock,
    title: "Données confidentielles",
    desc: "Vos informations sont protégées et ne seront jamais partagées.",
    color: "from-violet-500 to-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputBase = "w-full rounded-xl border bg-white dark:bg-gray-900/50 px-4 py-3.5 text-sm text-gray-800 dark:text-gray-100 placeholder-gray-400 outline-none transition-all duration-200";

  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-16 pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        </div>
        <motion.div
          initial="hidden" animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div variants={fadeUp}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-600"
          >
            <Mail size={12} /> Contactez-nous
          </motion.div>
          <motion.h1 variants={fadeUp}
            className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl"
          >
            Parlons de votre <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">flotte</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base text-gray-500 dark:text-gray-400 md:text-lg">
            Posez vos questions, demandez une démo ou obtenez plus d&apos;informations sur nos solutions de gestion de flotte.
          </motion.p>
        </motion.div>
      </section>

      {/* FEATURE CARDS */}
      <section className="px-6 pb-16">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3"
        >
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <motion.div key={title} variants={fadeUp}
              className={`rounded-2xl border p-5 ${bg} dark:bg-gray-900/40 dark:border-gray-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-md`}
            >
              <div className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-sm`}>
                <Icon size={18} />
              </div>
              <h3 className="mb-1.5 font-semibold text-foreground">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* FORM */}
      <section className="px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="mx-auto max-w-xl"
        >
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div key="success"
                initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 bg-gradient-to-b from-emerald-50 dark:from-emerald-900/10 to-white dark:to-gray-950 p-12 text-center shadow-lg dark:shadow-none"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle size={32} />
                </div>
                <h2 className="text-xl font-bold text-foreground">Message envoyé !</h2>
                <p className="text-gray-500 dark:text-gray-400">Merci pour votre intérêt. Nous vous contacterons sous 24h.</p>
                <button onClick={() => setStatus("idle")}
                  className="mt-2 rounded-xl bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700">
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit}
                className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm p-8 shadow-xl shadow-gray-100 dark:shadow-none"
              >
                <h2 className="mb-6 text-xl font-bold text-foreground">Envoyez-nous un message</h2>
                <div className="space-y-4">
                  {[
                    { name: "name", type: "text", label: "Votre nom", placeholder: "Jean Dupont" },
                    { name: "email", type: "email", label: "Email professionnel", placeholder: "jean@entreprise.com" },
                  ].map(({ name, type, label, placeholder }) => (
                    <div key={name}>
                      <label className="mb-1.5 block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</label>
                      <input
                        type={type} name={name} placeholder={placeholder}
                        value={form[name as keyof typeof form]} onChange={handleChange}
                        onFocus={() => setFocused(name)} onBlur={() => setFocused(null)}
                        required
                        className={`${inputBase} ${focused === name ? "border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900/30" : "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"}`}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Votre message</label>
                    <textarea
                      name="message" placeholder="Décrivez votre flotte ou votre besoin..."
                      value={form.message} onChange={handleChange}
                      onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                      rows={4}
                      className={`${inputBase} resize-none ${focused === "message" ? "border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900/30" : "border-gray-200 hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"}`}
                    />
                  </div>

                  {status === "error" && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                      className="flex items-center gap-2 text-sm text-red-500">
                      <AlertCircle size={14} /> Une erreur est survenue. Veuillez réessayer.
                    </motion.p>
                  )}

                  <button type="submit" disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 py-3.5 text-sm font-semibold text-white shadow-md shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Envoi en cours...
                      </span>
                    ) : (
                      <><Send size={15} /> Envoyer ma demande</>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                    Réponse sous 24h · Sans engagement · Données confidentielles
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
