"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, LayoutDashboard, ShieldAlert, Sparkles, Users } from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";

const SHOWCASE_ITEMS = [
    {
        id: "dashboard",
        title: "Tableau de bord de précision",
        shortTitle: "Pilotage & KPI",
        icon: LayoutDashboard,
        description: "Visualisez toutes vos données en temps réel sur une interface d'une clarté absolue. L'information clé vient à vous, sans bruit visuel inutile.",
        image: "/images/photo-hero.jpg",
        points: [
            "Indicateurs de performance (KPIs) en temps réel",
            "Suivi détaillé de l'état du parc automobile",
            "Analytique avancée et ventilation des coûts",
        ],
    },
    {
        id: "maintenance",
        title: "Maintenance préventive automatisée",
        shortTitle: "Maintenance & Alertes",
        icon: ShieldAlert,
        description: "Anticipez plutôt que de réagir. Nos algorithmes surveillent l'usure de votre flotte et planifient les interventions automatiquement.",
        image: "/images/photo-maintenance.jpg",
        points: [
            "Alertes prédictives d'entretien et contrôles techniques",
            "Historique inaltérable des interventions",
            "Gestion centralisée de vos fiches d'entretien",
        ],
    },
    {
        id: "drivers",
        title: "Réseau de conducteurs unifié",
        shortTitle: "Conducteurs & Assignations",
        icon: Users,
        description: "Gérez les assignations avec une fluidité déconcertante. Une vue panoramique sur vos équipes, leurs véhicules et leurs permis.",
        image: "/images/photo-hero.jpg",
        points: [
            "Gestion des fiches et coordonnées conducteurs",
            "Attribution et déclaration instantanées",
            "Historique complet des assignations et traçabilité",
        ],
    },
];

export default function ShowcaseSection() {
    const [activeTab, setActiveTab] = useState(SHOWCASE_ITEMS[0].id);
    const activeItem = SHOWCASE_ITEMS.find((item) => item.id === activeTab) || SHOWCASE_ITEMS[0];

    return (
        <section aria-label="Aperçu interactif de la plateforme" id="plateforme" className="relative overflow-hidden py-28 sm:py-36">
            {/* Ambient Background glow */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 right-1/4 h-[500px] w-[600px] rounded-full bg-blue-500/10 blur-[150px] dark:bg-cyan-500/10" />
            </div>

            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                            <Sparkles size={14} />
                            Expérience produit
                        </div>
                        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl dark:text-white">
                            Une conception{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                                millimétrée.
                            </span>
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-400">
                            Oubliez les logiciels complexes des années 2000. Floticar introduit l&apos;ergonomie grand public moderne dans le monde professionnel.
                        </p>
                    </motion.div>
                </div>

                {/* Interactive Interface */}
                <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-14">
                    {/* Left: Interactive Tabs & Content */}
                    <div className="flex w-full flex-col gap-3 lg:w-[42%]">
                        {SHOWCASE_ITEMS.map((item) => {
                            const isActive = activeTab === item.id;
                            const Icon = item.icon;

                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => setActiveTab(item.id)}
                                    className={`relative flex items-start gap-4 rounded-3xl p-6 text-left transition-all duration-300 ${
                                        isActive
                                            ? "border border-blue-500/30 bg-white shadow-xl shadow-blue-500/5 dark:border-white/15 dark:bg-white/[0.04] dark:shadow-none"
                                            : "border border-transparent hover:border-gray-200 hover:bg-gray-50/80 dark:hover:border-white/5 dark:hover:bg-white/[0.01]"
                                    }`}
                                >
                                    {/* Active Tab indicator highlight */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabGlow"
                                            className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-blue-500/30 dark:ring-cyan-400/30"
                                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                        />
                                    )}

                                    <div
                                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                                            isActive
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                                                : "bg-gray-100 text-gray-500 dark:bg-white/5 dark:text-gray-400"
                                        }`}
                                    >
                                        <Icon size={22} strokeWidth={1.75} />
                                    </div>

                                    <div className="flex-1">
                                        <h3
                                            className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
                                                isActive
                                                    ? "text-gray-900 dark:text-white"
                                                    : "text-gray-600 dark:text-gray-400"
                                            }`}
                                        >
                                            {item.shortTitle}
                                        </h3>
                                        <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                            {item.description}
                                        </p>

                                        {isActive && (
                                            <motion.ul
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="mt-4 space-y-2 border-t border-gray-100 pt-4 dark:border-white/5"
                                            >
                                                {item.points.map((pt) => (
                                                    <li key={pt} className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                                                        <CheckCircle2 size={14} className="shrink-0 text-cyan-600 dark:text-cyan-400" />
                                                        <span>{pt}</span>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Right: Dynamic Showcase Display */}
                    <div className="w-full lg:w-[58%]">
                        <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white/60 p-3 shadow-2xl backdrop-blur-xl sm:p-4 dark:border-white/10 dark:bg-gray-950/60">
                            {/* Browser style dots */}
                            <div className="mb-3 flex items-center gap-2 px-2 pt-1">
                                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                                <span className="ml-3 text-xs font-medium text-gray-400">Floticar Platform</span>
                            </div>

                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-gray-900 sm:rounded-3xl">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeItem.id}
                                        initial={{ opacity: 0, scale: 0.96, filter: "blur(8px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 1.04, filter: "blur(8px)" }}
                                        transition={{ duration: 0.45, ease: EASE_OUT_EXPO }}
                                        className="relative h-full w-full"
                                    >
                                        <Image
                                            src={activeItem.image}
                                            alt={activeItem.title}
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 1024px) 100vw, 55vw"
                                            priority
                                        />
                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
