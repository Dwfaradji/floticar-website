"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Calendar, Zap, Shield, AlertCircle, ArrowRight } from "lucide-react";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const FEATURES = [
    {
        icon: Calendar,
        title: "Session personnalisée",
        desc: "Découvrez comment Floticar s'adapte à la taille et aux besoins de votre flotte.",
    },
    {
        icon: Zap,
        title: "Démo rapide",
        desc: "15 minutes suffisent pour voir l'essentiel de nos fonctionnalités clés.",
    },
    {
        icon: Shield,
        title: "Conseils d'experts",
        desc: "Échangez avec nos spécialistes sur vos problématiques de gestion quotidiennes.",
    },
];

import Badge from "@/components/ui/Badge";

export default function DemoRequestPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        company: "",
        fleetSize: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const res = await fetch("/api/contact", { // Reusing current contact API for demo requests
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...form, subject: "Demande de Démo" }),
            });
            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen pt-24 pb-20">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        animate="show"
                        variants={{ show: { transition: { staggerChildren: 0.15 } } }}
                    >
                        <motion.div variants={fadeUp}>
                            <Badge className="!mb-6 border-blue-100 bg-blue-50 text-blue-600 dark:border-blue-900/30 dark:bg-blue-900/20 dark:text-blue-400">
                                <Zap size={12} className="mr-2" /> Réservez votre démo
                            </Badge>
                        </motion.div>
                        <motion.h1 variants={fadeUp} className="text-foreground mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                            Prêt à transformer votre <span className="text-blue-600 dark:text-blue-400">gestion de flotte</span> ?
                        </motion.h1>
                        <motion.p variants={fadeUp} className="mb-8 text-lg text-gray-500 dark:text-gray-400">
                            Découvrez en direct comment Floticar peut réduire vos coûts opérationnels, simplifier vos processus et sécuriser vos données.
                        </motion.p>

                        <div className="space-y-6">
                            {FEATURES.map((feature, i) => (
                                <motion.div key={i} variants={fadeUp} className="flex gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                        <feature.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-foreground font-semibold">{feature.title}</h3>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={fadeUp} className="mt-10 rounded-2xl border border-gray-100 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/30">
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-800" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                                    Rejoignez <span className="text-foreground font-bold">50+ entreprises</span> qui font confiance à Floticar.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative">
                            {/* Decorative backgrounds */}
                            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-blue-100/40 to-emerald-100/40 blur-2xl dark:from-blue-900/20 dark:to-emerald-900/20" />

                            <div className="rounded-3xl border border-gray-100 bg-white/80 p-8 shadow-2xl backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80 dark:shadow-none">
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="flex flex-col items-center py-10 text-center"
                                        >
                                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                                                <CheckCircle size={40} />
                                            </div>
                                            <h2 className="text-foreground mb-3 text-2xl font-bold">Demande reçue !</h2>
                                            <p className="mb-8 text-gray-500 dark:text-gray-400">
                                                Merci pour votre confiance. Notre équipe vous contactera dans les plus brefs délais pour fixer un créneau.
                                            </p>
                                            <button
                                                onClick={() => setStatus("idle")}
                                                className="flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                                            >
                                                Retourner au formulaire
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <form onSubmit={handleSubmit} className="space-y-4">
                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="name" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Nom complet</label>
                                                    <input
                                                        id="name"
                                                        type="text" name="name" required placeholder="Jean Dupont"
                                                        autoComplete="name"
                                                        value={form.name} onChange={handleChange}
                                                        className="input-field focus:input-field-focus"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="email" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Email pro</label>
                                                    <input
                                                        id="email"
                                                        type="email" name="email" required placeholder="jean@entreprise.com"
                                                        autoComplete="email"
                                                        value={form.email} onChange={handleChange}
                                                        className="input-field focus:input-field-focus"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="company" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Entreprise</label>
                                                    <input
                                                        id="company"
                                                        type="text" name="company" required placeholder="Ex: Floticar SAS"
                                                        autoComplete="organization"
                                                        value={form.company} onChange={handleChange}
                                                        className="input-field focus:input-field-focus"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="fleetSize" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Taille de flotte</label>
                                                    <select
                                                        id="fleetSize"
                                                        name="fleetSize" required
                                                        value={form.fleetSize} onChange={handleChange}
                                                        className="input-field focus:input-field-focus appearance-none"
                                                    >
                                                        <option value="">Sélectionnez...</option>
                                                        <option value="1-10">1 - 10 véhicules</option>
                                                        <option value="11-50">11 - 50 véhicules</option>
                                                        <option value="51-200">51 - 200 véhicules</option>
                                                        <option value="200+">Plus de 200 véhicules</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="mb-1.5 block text-xs font-semibold tracking-wider text-gray-500 uppercase dark:text-gray-400">Votre besoin (optionnel)</label>
                                                <textarea
                                                    id="message"
                                                    name="message" rows={3} placeholder="Dites-nous en plus sur vos attentes..."
                                                    value={form.message} onChange={handleChange}
                                                    className="input-field focus:input-field-focus resize-none"
                                                />
                                            </div>

                                            {status === "error" && (
                                                <p className="flex items-center gap-2 text-sm text-red-500">
                                                    <AlertCircle size={14} /> Une erreur est survenue. Veuillez réessayer.
                                                </p>
                                            )}

                                            <button
                                                type="submit"
                                                disabled={status === "loading"}
                                                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-blue-600 py-4 text-sm font-bold text-white transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 disabled:opacity-70"
                                            >
                                                {status === "loading" ? (
                                                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                                ) : (
                                                    <>
                                                        Demander ma démo <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </button>

                                            <p className="mt-4 text-center text-xs text-gray-500 dark:text-gray-400">
                                                En envoyant ce formulaire, vous acceptez d&apos;être recontacté par notre équipe. Données confidentielles.
                                            </p>
                                        </form>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
