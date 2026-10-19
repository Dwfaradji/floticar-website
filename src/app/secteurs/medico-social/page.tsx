"use client";

import { motion } from "framer-motion";
import { ArrowRight, HeartPulse, Users, CalendarClock, ShieldCheck, CheckCircle2, Car } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/sections/FinalCTA";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const FEATURES = [
    {
        icon: Users,
        title: "Véhicules partagés simplifiés",
        desc: "Vos équipes éducatives et soignantes peuvent réserver un véhicule en 2 clics pour leurs visites à domicile ou l'accompagnement des usagers.",
    },
    {
        icon: CalendarClock,
        title: "Suivi des contrôles stricts",
        desc: "Soyez alerté automatiquement des échéances d'entretien et de contrôle technique pour garantir la sécurité totale de vos usagers.",
    },
    {
        icon: ShieldCheck,
        title: "Traçabilité des carnets de bord",
        desc: "Finis les carnets papier illisibles. Chaque trajet est documenté (kilométrage, motif, état du véhicule) directement depuis l'application mobile.",
    },
];

const BENEFITS = [
    "Gestion fine des affectations par établissement (SESSAD, IME, DITEP...)",
    "Suivi des frais de carburant et de péage pour les flottes d'association",
    "Déclaration rapide des incidents de carrosserie par les conducteurs",
    "Tableau de bord centralisé pour le chef de service ou le responsable logistique"
];

export default function MedicoSocialPage() {
    return (
        <main className="flex flex-col overflow-x-hidden pt-20">
            {/* HERO SECTION */}
            <section className="relative overflow-hidden bg-gray-50 px-6 py-24 dark:bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-emerald-50 opacity-50 dark:from-blue-900/20 dark:to-emerald-900/20" />
                
                <motion.div 
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="relative z-10 mx-auto max-w-4xl text-center"
                >
                    <motion.div variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700 dark:border-blue-800 dark:bg-blue-900/50 dark:text-blue-300">
                        <HeartPulse size={16} /> Spécialisé Médico-Social & Associations
                    </motion.div>
                    
                    <motion.h1 variants={fadeUp} className="mb-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
                        La gestion de flotte pour les <span className="text-blue-600 dark:text-blue-400">IME, SESSAD et ESAT</span>.
                    </motion.h1>
                    
                    <motion.p variants={fadeUp} className="mx-auto mb-10 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                        Gagnez du temps sur la logistique pour vous concentrer sur l&apos;essentiel : l&apos;accompagnement de vos usagers. Floticar simplifie la réservation et le suivi de vos véhicules de service.
                    </motion.p>
                    
                    <motion.div variants={fadeUp} className="flex justify-center gap-4">
                        <Link href="/demande-de-demo" className="flex items-center gap-2 rounded-full bg-blue-600 px-8 py-3.5 font-semibold text-white transition-all hover:bg-blue-700">
                            Voir une démo <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* PROBLEM / SOLUTION SECTION */}
            <section className="px-6 py-24 dark:bg-[#030409]">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Une réponse concrète aux défis du secteur associatif.
                            </h2>
                            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                                Nous savons que la gestion d&apos;un parc automobile dans le médico-social est complexe : carnets de bord papier, véhicules partagés entre plusieurs éducateurs, gestion multi-sites... Floticar digitalise tout cela de manière intuitive.
                            </p>
                            <ul className="space-y-4">
                                {BENEFITS.map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-xl dark:border-gray-800 dark:bg-gray-950"
                        >
                            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                            <Car className="mb-6 h-12 w-12 text-blue-600 dark:text-blue-400" />
                            <h3 className="mb-4 text-xl font-bold dark:text-white">Le saviez-vous ?</h3>
                            <p className="text-gray-600 dark:text-gray-400">
                                Un établissement médico-social utilisant un logiciel centralisé réduit de <strong className="text-gray-900 dark:text-white">25%</strong> le temps passé par les chefs de service sur la gestion logistique des véhicules, libérant ainsi des ressources précieuses pour la coordination d&apos;équipe.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FEATURES SECTION */}
            <section className="bg-gray-50 px-6 py-24 dark:bg-gray-900/50">
                <div className="mx-auto max-w-6xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Des fonctionnalités pensées pour vos équipes
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                            Une interface simple à prendre en main, même pour le personnel peu à l&apos;aise avec l&apos;informatique.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {FEATURES.map((feat, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-800 dark:bg-gray-950"
                            >
                                <feat.icon className="mb-6 h-10 w-10 text-blue-600 dark:text-blue-400" />
                                <h3 className="mb-3 text-lg font-bold dark:text-white">{feat.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{feat.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTEURS SPÉCIFIQUES MÉDICO-SOCIAL (TOPIC CLUSTER) */}
            <section className="border-t border-gray-100 bg-white px-6 py-20 dark:border-gray-800 dark:bg-[#030409]">
                <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                        <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-blue-400">
                            Pôle Médico-Social
                        </span>
                        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                            Des solutions adaptées à vos structures
                        </h2>
                        <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                            Découvrez nos modules configurés pour répondre aux spécificités de chaque type d&apos;établissement.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        <Link
                            href="/secteurs/ime"
                            className="group relative rounded-2xl border border-gray-200 bg-gray-50/50 p-8 transition-all hover:border-blue-300 hover:bg-blue-50/20 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-blue-800"
                        >
                            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                Instituts Médico-Éducatifs (IME) →
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Gestion des tournées de minibus, contrôle de sécurité strict, suivi des véhicules TPMR adaptés et carnets de bord numériques.
                            </p>
                        </Link>

                        <Link
                            href="/secteurs/sessad"
                            className="group relative rounded-2xl border border-gray-200 bg-gray-50/50 p-8 transition-all hover:border-emerald-300 hover:bg-emerald-50/20 dark:border-gray-800 dark:bg-gray-900/40 dark:hover:border-emerald-800"
                        >
                            <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                                SESSAD (Services d&apos;Éducation & Soins) →
                            </h3>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                                Rotation fluide des citadines de pool partagées entre éducateurs et soignants itinérants pour les visites d&apos;écoles et domiciles.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </main>
    );
}
