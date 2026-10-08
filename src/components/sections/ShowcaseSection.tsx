"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, LayoutDashboard, ShieldAlert, Users } from "lucide-react";

const SHOWCASE_ITEMS = [
  {
    id: "dashboard",
    title: "Tableau de bord de précision",
    shortTitle: "Pilotage & KPI",
    icon: LayoutDashboard,
    description: "Visualisez toutes vos données en temps réel sur une interface d'une clarté absolue. L'information vient à vous, sans bruit visuel.",
    image: "/images/photo-office.jpg",
    points: [
      "Indicateurs de performance (KPIs) en temps réel",
      "Cartographie et localisation des véhicules",
      "Analytique avancée des coûts",
    ],
  },
  {
    id: "maintenance",
    title: "Maintenance préventive automatisée",
    shortTitle: "Maintenance",
    icon: ShieldAlert,
    description: "Anticipez plutôt que de réagir. Nos algorithmes surveillent l'usure de votre flotte et planifient les interventions automatiquement.",
    image: "/images/photo-maintenance.jpg",
    points: [
      "Alertes prédictives d'entretien",
      "Historique inaltérable des interventions",
      "Synchronisation avec vos garages partenaires",
    ],
  },
  {
    id: "drivers",
    title: "Réseau de conducteurs unifié",
    shortTitle: "Conducteurs",
    icon: Users,
    description: "Gérez les assignations avec une fluidité déconcertante. Une vue panoramique sur vos équipes et leurs véhicules attribués.",
    image: "/images/photo-hero.jpg",
    points: [
      "Attribution instantanée par glisser-déposer",
      "Contrôle automatisé de la validité des permis",
      "Système de communication intégré",
    ],
  },
];

export default function ShowcaseSection() {
    const [activeTab, setActiveTab] = useState(SHOWCASE_ITEMS[0].id);

    const activeItem = SHOWCASE_ITEMS.find((item) => item.id === activeTab) || SHOWCASE_ITEMS[0];

    return (
        <section aria-label="Aperçu de la plateforme" id="plateforme" className="bg-gray-50 dark:bg-[#030409] py-32 border-y border-gray-200/50 dark:border-white/5">
            <div className="mx-auto max-w-7xl px-6">
                
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white mb-6">
                        Une conception <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">millimétrée.</span>
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400">
                        Oubliez les logiciels complexes des années 2000. Floticar introduit l'ergonomie grand public dans le monde de l'entreprise.
                    </p>
                </div>

                {/* Interactive Interface */}
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                    
                    {/* Left: Interactive Tabs & Content */}
                    <div className="w-full lg:w-[45%] flex flex-col gap-8">
                        {/* Tab Selector */}
                        <div className="flex flex-col gap-2">
                            {SHOWCASE_ITEMS.map((item) => {
                                const isActive = activeTab === item.id;
                                const Icon = item.icon;
                                
                                return (
                                    <button
                                        key={item.id}
                                        onClick={() => setActiveTab(item.id)}
                                        className={`group relative flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300 ${
                                            isActive 
                                                ? "bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:bg-white/10 dark:shadow-[0_8px_30px_rgba(255,255,255,0.05)] border border-gray-200/50 dark:border-white/10" 
                                                : "hover:bg-gray-100/50 dark:hover:bg-white/5 border border-transparent"
                                        }`}
                                    >
                                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                                            isActive 
                                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 dark:bg-blue-500" 
                                                : "bg-gray-100 text-gray-500 group-hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:group-hover:bg-white/10"
                                        }`}>
                                            <Icon size={22} strokeWidth={isActive ? 2 : 1.5} />
                                        </div>
                                        <div>
                                            <h4 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"}`}>
                                                {item.shortTitle}
                                            </h4>
                                            {isActive && (
                                                <motion.p 
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: "auto" }}
                                                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                                                >
                                                    {item.description}
                                                </motion.p>
                                            )}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Dynamic Image Showcase */}
                    <div className="w-full lg:w-[55%]">
                        <div className="relative aspect-[4/3] w-full max-w-[800px] mx-auto lg:mx-0">
                            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-tr from-blue-600/10 to-cyan-500/10 blur-3xl z-0" />
                            
                            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-gray-200/80 bg-white/40 p-2 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5 z-10 flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeItem.id}
                                        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="relative h-full w-full overflow-hidden rounded-[1.5rem]"
                                    >
                                        <Image
                                            src={activeItem.image}
                                            alt={activeItem.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                            priority
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Animated Points for active tab */}
                        <div className="mt-10 lg:pl-4">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeItem.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-4"
                                >
                                    {activeItem.points.map((point, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="h-5 w-5 text-blue-600 dark:text-blue-400 shrink-0" />
                                            <span className="text-base font-medium text-gray-700 dark:text-gray-300">{point}</span>
                                        </div>
                                    ))}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
