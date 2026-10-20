"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Calendar, Zap, Shield, AlertCircle, ArrowRight, Sparkles } from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import { checkEmailRules } from "@/lib/email-rules";
import GlowCard from "@/components/ui/GlowCard";

const FEATURES = [
    {
        icon: Calendar,
        title: "Session personnalisée 1-to-1",
        desc: "Découvrez comment Floticar s'adapte à la taille et aux problématiques réelles de votre flotte.",
        color: "text-blue-500",
        bg: "bg-blue-500/10",
    },
    {
        icon: Zap,
        title: "Démonstration express en 15 min",
        desc: "15 minutes suffisent pour visualiser l'essentiel : fiches, entretiens, carburant et amendes.",
        color: "text-cyan-500",
        bg: "bg-cyan-500/10",
    },
    {
        icon: Shield,
        title: "Conseils d'experts sans engagement",
        desc: "Échangez directement avec un spécialiste de la gestion de flotte pour estimer vos gains potentiels.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10",
    },
];

export default function DemoRequestPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        fleetSize: "",
        message: "",
        website: "" // honeypot
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [consent, setConsent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        if (!form.company.trim()) newErrors.company = "L'entreprise est requise.";
        if (!form.fleetSize) newErrors.fleetSize = "Veuillez sélectionner une taille.";
        if (!form.message.trim()) newErrors.message = "Veuillez décrire votre besoin.";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        setErrors({});
        
        setStatus("loading");
        try {
            const res = await fetch("/api/demo", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, subject: "Demande de Démo" }),
            });
            if (res.ok) {
                setStatus("success");
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
        <main className="relative isolate min-h-screen overflow-hidden pt-28 pb-24 sm:pt-36">
            {/* Background Aurora */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-10 left-1/3 h-[500px] w-[700px] rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-400/15 to-indigo-600/10 blur-[150px] motion-safe:animate-aurora" />
            </div>

            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">

                    {/* Left Content */}
                    <div className="lg:col-span-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: { staggerChildren: 0.12, delayChildren: 0.05 }
                                }
                            }}
                        >
                            <motion.div variants={fadeUp}>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                                    <Sparkles size={14} /> Réservez votre démonstration
                                </div>
                            </motion.div>

                            <motion.h1
                                variants={fadeUp}
                                className="mb-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white"
                            >
                                Prêt à transformer votre{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                    gestion de flotte ?
                                </span>
                            </motion.h1>

                            <motion.p variants={fadeUp} className="mb-10 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
                                Découvrez en direct comment Floticar simplifie vos processus, supprime les tableurs fragiles et réduit vos coûts de fonctionnement dès le premier mois.
                            </motion.p>

                            <div className="space-y-4">
                                {FEATURES.map((feature, i) => (
                                    <motion.div key={i} variants={fadeUp}>
                                        <GlowCard
                                            glowColor="rgba(59, 130, 246, 0.2)"
                                            enableTilt={false}
                                            className="flex items-start gap-4 !p-5 transition-all duration-300 hover:border-blue-500/30"
                                        >
                                            <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${feature.bg} ${feature.color} ring-1 ring-current/20`}>
                                                <feature.icon size={22} strokeWidth={1.75} />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                                                <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{feature.desc}</p>
                                            </div>
                                        </GlowCard>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                variants={fadeUp}
                                className="mt-10 flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white/70 p-5 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/50"
                            >
                                <div className="flex -space-x-2">
                                    {["bg-blue-600", "bg-cyan-500", "bg-indigo-600"].map((bg, i) => (
                                        <div
                                            key={i}
                                            className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-bold text-white ${bg} dark:border-gray-950`}
                                        >
                                            {["FC", "AM", "TL"][i]}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
                                    Rejoignez <span className="font-bold text-gray-900 dark:text-white">50+ entreprises</span> qui font confiance à Floticar.
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT_EXPO }}
                        className="lg:col-span-6"
                    >
                        <GlowCard glowColor="rgba(56, 189, 248, 0.25)" className="!p-8 shadow-2xl sm:!p-10">
                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.92 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center py-10 text-center"
                                    >
                                        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-emerald-500/10 text-emerald-500 ring-1 ring-emerald-500/20">
                                            <CheckCircle size={40} />
                                        </div>
                                        <h2 className="mb-3 text-2xl font-extrabold text-gray-900 dark:text-white">Demande reçue avec succès !</h2>
                                        <p className="mb-8 text-base text-gray-600 dark:text-gray-400">
                                            Merci pour votre confiance. Un expert Floticar prendra contact avec vous sous 24h pour organiser votre démonstration personnalisée.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={() => setStatus("idle")}
                                            className="rounded-full bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:bg-blue-500"
                                        >
                                            Retourner au formulaire
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                        {/* Honeypot field */}
                                        <input type="text" name="website" value={form.website} onChange={handleChange} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

                                        <div className="mb-6">
                                            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Planifier votre démo</h2>
                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Remplissez ce formulaire pour convenir d&apos;un créneau avec notre équipe.</p>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Nom complet</label>
                                                <input
                                                    id="name"
                                                    type="text" name="name" required placeholder="Jean Dupont"
                                                    autoComplete="name"
                                                    value={form.name} onChange={handleChange}
                                                    className={`input-field focus:input-field-focus ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                                />
                                                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Email professionnel</label>
                                                <input
                                                    id="email"
                                                    type="email" name="email" required placeholder="jean@entreprise.com"
                                                    autoComplete="email"
                                                    value={form.email} onChange={handleChange}
                                                    className={`input-field focus:input-field-focus ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                                />
                                                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
                                            </div>
                                        </div>

                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div>
                                                <label htmlFor="company" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Entreprise / Organisation</label>
                                                <input
                                                    id="company"
                                                    type="text" name="company" required placeholder="Ex: Floticar SAS"
                                                    autoComplete="organization"
                                                    value={form.company} onChange={handleChange}
                                                    className={`input-field focus:input-field-focus ${errors.company ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                                />
                                                {errors.company && <p className="mt-1.5 text-xs text-red-500">{errors.company}</p>}
                                            </div>
                                            <div>
                                                <label htmlFor="fleetSize" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                                                    Taille de votre parc <span className="font-normal text-gray-500 normal-case dark:text-gray-400">(min. 10 véhicules)</span>
                                                </label>
                                                <select
                                                    id="fleetSize"
                                                    name="fleetSize" required
                                                    value={form.fleetSize} onChange={handleChange}
                                                    className={`input-field focus:input-field-focus ${errors.fleetSize ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                                                >
                                                    <option value="">Sélectionnez...</option>
                                                    <option value="10-25">10 - 25 véhicules</option>
                                                    <option value="26-50">26 - 50 véhicules</option>
                                                    <option value="51-200">51 - 200 véhicules</option>
                                                    <option value="200+">Plus de 200 véhicules</option>
                                                </select>
                                                {errors.fleetSize && <p className="mt-1.5 text-xs text-red-500">{errors.fleetSize}</p>}
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">Vos attentes / Problématique</label>
                                            <textarea
                                                id="message"
                                                name="message" rows={3} placeholder="Dites-nous en plus sur vos véhicules et vos objectifs..."
                                                value={form.message} onChange={handleChange}
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
                                            disabled={status === "loading" || !consent}
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
                                                    <span className="relative">Réserver ma démo gratuite</span>
                                                    <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </button>

                                        <div className="pt-2">
                                            <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
                                                <input 
                                                    type="checkbox" 
                                                    id="consent" 
                                                    checked={consent}
                                                    onChange={(e) => setConsent(e.target.checked)}
                                                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600 dark:border-gray-700 dark:bg-gray-800"
                                                />
                                                <span className="text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                                                    J&apos;accepte que mes données soient traitées conformément à la <a href="/privacy" className="text-blue-600 hover:underline dark:text-cyan-400">Politique de Confidentialité</a>.
                                                </span>
                                            </label>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </GlowCard>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
