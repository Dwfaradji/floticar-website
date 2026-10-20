"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  QrCode,
  Camera,
  FileCheck2,
  AlertTriangle,
  FileText,
  ArrowRight,
  ChevronDown,
  Sparkles,
  CheckCircle2,
  MapPin,
  Fuel,
} from "lucide-react";
import { EASE_OUT_EXPO, fadeUp } from "@/lib/animations";
import GlowCard from "@/components/ui/GlowCard";
import FinalCTA from "@/components/sections/FinalCTA";

const MOBILE_FEATURES = [
  {
    icon: QrCode,
    title: "1. Commencer un trajet en 15 secondes",
    description:
      "Le conducteur clique sur 'Commencer un trajet' et scanne le QR Code collé sur le pare-brise. Il indique son kilométrage de départ et démarre sans aucune friction.",
    glow: "rgba(99, 102, 241, 0.25)",
    badge: "Bouton Déplacement",
  },
  {
    icon: Fuel,
    title: "2. Mettre du carburant & photo du ticket",
    description:
      "À la station, un clic sur 'Mettre du carburant' permet de photographier le reçu. Le litrage, le montant et la TVA sont automatiquement archivés pour la comptabilité.",
    glow: "rgba(245, 158, 11, 0.25)",
    badge: "Bouton Carburant",
  },
  {
    icon: Camera,
    title: "3. Photos du véhicule & état des lieux",
    description:
      "Un voyant allumé ou un accroc sur une aile ? Le conducteur clique sur 'Photos du véhicule' pour consigner l'état de la carrosserie avant et après chaque tournée.",
    glow: "rgba(6, 182, 212, 0.25)",
    badge: "Bouton Carrosserie",
  },
  {
    icon: FileCheck2,
    title: "Carnet de bord 100% numérique",
    description:
      "Fini le calvaire du cahier papier raturé et égaré en boîte à gants. Chaque rotation est horodatée, certifiée et visible en temps réel par le gestionnaire.",
    glow: "rgba(16, 185, 129, 0.25)",
    badge: "Zéro Papier",
  },
  {
    icon: AlertTriangle,
    title: "Signalement d'anomalies en direct",
    description:
      "Une pression de pneu basse ou une révision imminente ? Le conducteur alerte directement son responsable logistique pour prévenir toute panne immobilisante.",
    glow: "rgba(239, 68, 68, 0.25)",
    badge: "Maintenance",
  },
  {
    icon: FileText,
    title: "Documents de bord dématérialisés",
    description:
      "Attestation d'assurance, carte grise, mémo de bord et numéros d'assistance dépannage sont accessibles dans la poche du conducteur à tout moment.",
    glow: "rgba(139, 92, 246, 0.25)",
    badge: "Conformité",
  },
];

const COMPARISONS = [
  {
    traditional: "Boîtier traceur GPS invasif dans la voiture",
    floticar: "Scan QR Code éthique à la prise et restitution",
  },
  {
    traditional: "Géolocalisation 24/7 des collaborateurs (conflit CNIL/RH)",
    floticar: "Zéro tracking permanent : respect absolu de la vie privée",
  },
  {
    traditional: "Installation de 100 à 250 € chez un garagiste agréé",
    floticar: "0 € de frais : un QR Code autocollant prêt en 2 minutes",
  },
  {
    traditional: "Application lourde exigeant compte, mot de passe et mises à jour",
    floticar: "Web App PWA universelle : fonctionne sur iOS, Android et tout smartphone",
  },
];

const METRICS = [
  {
    value: "15s",
    label: "chrono par trajet",
    subtext: "Pour scanner, renseigner le compteur et démarrer",
    color: "text-blue-600 dark:text-cyan-400",
  },
  {
    value: "100%",
    label: "d'adhésion des équipes terrain",
    subtext: "Aucun sentiment de surveillance permanente",
    color: "text-emerald-600 dark:text-emerald-400",
  },
  {
    value: "0 €",
    label: "de matériel électronique à poser",
    subtext: "Déploiement immédiat sur toute votre flotte",
    color: "text-teal-600 dark:text-teal-400",
  },
];

const SCREENS = [
  {
    id: "actions",
    title: "Menu Conducteur",
    subtitle: "L'interface d'action principale en tournée",
    image: "/rubrique-onglet.jpg",
    description:
      "Les 3 actions essentielles au quotidien : commencer un trajet par scan QR Code, enregistrer un plein d'essence avec ticket photo, et photographier l'état du véhicule.",
  },
  {
    id: "welcome",
    title: "Écran de Démarrage",
    subtitle: "L'accueil épuré de l'application Floticar",
    image: "/acceuil.jpg",
    description:
      "Une interface légère et instantanée qui s'ouvre d'un geste sans exiger de mot de passe complexe pour les conducteurs réguliers ou occasionnels.",
  },
];

const FAQS = [
  {
    question: "Les conducteurs doivent-ils télécharger une application sur l'App Store ou Google Play ?",
    answer:
      "Non, ce n'est pas obligatoire ! Floticar utilise la technologie PWA (Progressive Web App). En scannant le QR Code avec l'appareil photo natif de leur smartphone, l'interface s'ouvre instantanément. Ils peuvent également l'ajouter en un clic sur leur écran d'accueil comme une application classique.",
  },
  {
    question: "Comment l'application garantit-elle le respect de la vie privée des salariés ?",
    answer:
      "Floticar n'enregistre aucune position GPS en continu pendant les trajets. Seules les données utiles à la gestion de flotte sont collectées au moment du scan : le kilométrage saisi, l'heure de départ/retour et les éventuelles photos déclarées par le conducteur. Vos équipes sont sereines et la conformité RGPD/CNIL est irréprochable.",
  },
  {
    question: "L'application fonctionne-t-elle si le conducteur n'a pas de réseau au sous-sol ou en zone blanche ?",
    answer:
      "Oui. L'interface mobile Floticar intègre un mode hors-ligne : le conducteur peut renseigner son compteur et prendre sa photo d'anomalie même sans 4G/5G. Dès que le smartphone retrouve du réseau, les données sont automatiquement synchronisées avec le tableau de bord du gestionnaire.",
  },
  {
    question: "Des intervenants ou bénévoles occasionnels peuvent-ils l'utiliser ?",
    answer:
      "Tout à fait. La force du QR Code est de permettre à un chauffeur intérimaire, un bénévole d'association ou un soignant remplaçant de s'identifier en quelques secondes sans configuration complexe de compte utilisateur.",
  },
];

export default function ApplicationMobileContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeScreen, setActiveScreen] = useState<number>(0);

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Aurora */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 left-1/2 h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-indigo-600/10 blur-[160px] motion-safe:animate-aurora" />
      </div>

      {/* HERO SECTION */}
      <section className="px-6 pt-16 pb-24 text-center sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              <Smartphone size={14} /> Application Conducteur & Équipes Terrain
            </div>

            <h1 className="mb-6 text-4xl font-extrabold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl dark:text-white">
              L&apos;application mobile de gestion de flotte que vos{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                conducteurs vont adorer.
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
              Un simple QR Code collé dans le véhicule suffit. Vos équipes relèvent leur compteur en 15 secondes, déclarent leur carburant avec photo du ticket et photographient le véhicule sans aucune lourdeur administrative ni traceur GPS intrusif.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/demande-de-demo"
                className="group relative inline-flex h-14 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-500 px-8 text-base font-bold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/35 sm:w-auto"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                />
                <span className="relative">Tester l&apos;application conducteur</span>
                <ArrowRight size={18} className="relative transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex h-14 w-full items-center justify-center rounded-full border border-gray-200 bg-white/80 px-8 text-base font-bold text-gray-800 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-gray-300 hover:bg-gray-100 sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                Voir les abonnements
              </Link>
            </div>

            <p className="mt-6 text-xs font-semibold text-gray-500 dark:text-gray-400">
              iOS & Android • Compatible PWA • Zéro matériel télématique requis
            </p>
          </motion.div>
        </div>
      </section>

      {/* DOUBLE SMARTPHONE SHOWCASE AVEC IMAGES RÉELLES */}
      <section className="px-6 pb-24 sm:pb-32">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
          >
            <GlowCard
              glowColor="rgba(59, 130, 246, 0.35)"
              className="relative overflow-hidden !p-8 sm:!p-12"
            >
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                {/* Left Description & Interactive Highlights */}
                <div className="space-y-6 lg:col-span-6">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/40 dark:text-cyan-300">
                    <Sparkles size={13} /> Captures Réelles de l&apos;Application
                  </div>

                  <h2 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                    3 boutons d&apos;action. Zéro complication sur le terrain.
                  </h2>

                  <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    À l&apos;ouverture, le conducteur retrouve immédiatement les 3 actions essentielles de sa journée, optimisées pour une utilisation à une main au volant d&apos;un véhicule :
                  </p>

                  {/* Feature items linking to the 3 real buttons */}
                  <div className="space-y-3.5 pt-2">
                    <div className="flex items-start gap-3.5 rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-600 dark:text-indigo-400">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          Commencer un trajet
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                          Scannez le QR Code collé sur le véhicule, indiquez le compteur de départ et prenez la route.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400">
                        <Fuel size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          Mettre du carburant
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                          Enregistrez un plein et photographiez le reçu de station pour une déduction TVA garantie à 100%.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 rounded-2xl border border-gray-200/80 bg-white/70 p-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-white/[0.03]">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-600 dark:text-cyan-400">
                        <Camera size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">
                          Photos du véhicule
                        </div>
                        <p className="mt-0.5 text-xs text-gray-500 dark:text-gray-400">
                          Photographiez l&apos;état carrosserie, les 4 angles ou un voyant moteur pour une traçabilité totale.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Interactive Mockups Showcase */}
                <div className="flex flex-col items-center justify-center lg:col-span-6">
                  {/* Screen Toggle Switch */}
                  <div className="mb-6 flex items-center rounded-full border border-gray-200/80 bg-gray-100/80 p-1 backdrop-blur-md dark:border-white/10 dark:bg-white/5">
                    {SCREENS.map((screen, idx) => (
                      <button
                        key={screen.id}
                        type="button"
                        onClick={() => setActiveScreen(idx)}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 ${activeScreen === idx
                          ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                          : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                          }`}
                      >
                        {screen.title}
                      </button>
                    ))}
                  </div>

                  {/* Dual Smartphone Container */}
                  <div className="relative flex w-full max-w-md items-center justify-center py-4">
                    {/* Background Secondary Phone (Splash Screen) */}
                    <div
                      onClick={() => setActiveScreen(1)}
                      className={`cursor-pointer transition-all duration-500 ${activeScreen === 0
                        ? "absolute top-6 -left-2 z-0 w-[200px] scale-90 -rotate-6 opacity-60 hover:opacity-90 sm:left-2 sm:w-[220px]"
                        : "relative z-10 w-[260px] scale-100 rotate-0 rounded-full opacity-100 shadow-2xl sm:w-[290px] "
                        }`}
                    >
                      <div className="relative overflow-hidden rounded-[38px] border-[6px] border-gray-900/90 bg-gray-900 shadow-2xl ring-1 shadow-blue-900/30 ring-white/20">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-2 left-1/2 z-20 h-3.5 w-20 -translate-x-1/2 rounded-full bg-black" />

                        <div className="relative aspect-[1206/2423] w-full overflow-hidden bg-white">
                          <Image
                            src="/acceuil.jpg"
                            alt="Écran d'accueil de l'application Floticar"
                            fill
                            sizes="(max-w-768px) 240px, 300px"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>

                    {/* Foreground Main Phone (Actions Menu) */}
                    <div
                      onClick={() => setActiveScreen(0)}
                      className={`cursor-pointer transition-all duration-500 ${activeScreen === 1
                        ? "absolute top-6 -right-2 z-0 w-[200px] scale-90 rotate-6 opacity-60 hover:opacity-90 sm:right-2 sm:w-[220px]"
                        : "relative z-10 w-[260px] scale-100 rotate-0 rounded-full opacity-100 shadow-2xl sm:w-[290px] "
                        }`}
                    >
                      <div className="relative overflow-hidden rounded-[38px] border-[6px] border-gray-900/90 bg-gray-900 shadow-2xl ring-1 shadow-blue-900/30 ring-white/20">
                        {/* Dynamic Island / Notch */}
                        <div className="absolute top-2 left-1/2 z-20 h-3.5 w-20 -translate-x-1/2 rounded-full bg-black" />

                        <div className="relative aspect-[1206/2474] w-full overflow-hidden bg-[#070b18]">
                          <Image
                            src="/rubrique-onglet.jpg"
                            alt="Menu des fonctionnalités de l'application mobile Floticar"
                            fill
                            sizes="(max-w-768px) 240px, 300px"
                            className="object-cover"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-center text-xs text-gray-400 dark:text-gray-500">
                    💡 Cliquez sur un smartphone pour changer l&apos;écran au premier plan
                  </p>
                </div>
              </div>
            </GlowCard>
          </motion.div>
        </div>
      </section>

      {/* METRICS */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {METRICS.map((metric, idx) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <GlowCard glowColor="rgba(59, 130, 246, 0.2)" className="flex h-full flex-col justify-center !p-7 text-center">
                  <div className={`text-4xl font-extrabold sm:text-5xl ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="mt-2 text-base font-bold text-gray-900 dark:text-white">
                    {metric.label}
                  </div>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {metric.subtext}
                  </p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FONCTIONNALITES CLES */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
                <Sparkles size={14} /> Fonctionnalités Mobile
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                Tout ce dont vos équipes ont besoin au creux de la main
              </h2>
              <p className="mt-3 text-base text-gray-600 sm:text-lg dark:text-gray-400">
                Des outils intuitifs pour transformer chaque conducteur en acteur de la gestion de votre parc.
              </p>
            </motion.div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MOBILE_FEATURES.map((feat, idx) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6, ease: EASE_OUT_EXPO }}
                >
                  <GlowCard glowColor={feat.glow} className="h-full !p-8 transition-all duration-300 hover:-translate-y-1.5">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 shadow-sm ring-1 ring-blue-500/20 dark:text-cyan-400">
                        <Icon size={24} strokeWidth={1.75} />
                      </div>
                      <span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-[10px] font-bold text-gray-600 dark:bg-white/5 dark:text-gray-300">
                        {feat.badge}
                      </span>
                    </div>
                    <h3 className="mb-2.5 text-lg font-bold text-gray-900 dark:text-white">
                      {feat.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      {feat.description}
                    </p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COMPARATIF ETHIQUE GPS VS FLOTICAR */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="mb-14 text-center">
            <span className="text-xs font-bold tracking-wider text-blue-600 uppercase dark:text-cyan-400">
              Climat Social & Confiance
            </span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Pourquoi choisir Floticar plutôt qu&apos;un traceur GPS ?
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              La traçabilité collaborative responsabilise sans jamais fliquer.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-xl dark:border-white/10 dark:bg-gray-950">
            <div className="grid grid-cols-2 border-b border-gray-200 bg-gray-50/70 p-4 text-xs font-bold tracking-wider text-gray-500 uppercase dark:border-white/10 dark:bg-white/[0.02]">
              <div>Solutions Télématiques / Traceurs GPS</div>
              <div className="text-blue-600 dark:text-cyan-400">Solution Mobile Floticar</div>
            </div>

            <div className="divide-y divide-gray-100 dark:divide-white/5">
              {COMPARISONS.map((comp, idx) => (
                <div key={idx} className="grid grid-cols-2 items-center gap-4 p-5 text-sm">
                  <div className="text-gray-600 line-through decoration-red-400/60 dark:text-gray-400">
                    {comp.traditional}
                  </div>
                  <div className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white">
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                    <span>{comp.floticar}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQS ACCORDION */}
      <section className="px-6 py-28 sm:py-36">
        <div className="mx-auto max-w-4xl">
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Questions fréquentes sur l&apos;application mobile
            </h2>
            <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
              Tout pour comprendre le fonctionnement sur smartphone et tablettes.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${isOpen
                    ? "border-blue-500/40 bg-white shadow-xl shadow-blue-500/5 dark:border-cyan-400/30 dark:bg-white/[0.04]"
                    : "border-gray-200/80 bg-white/70 hover:border-gray-300 dark:border-white/10 dark:bg-white/[0.02]"
                    }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="text-base font-bold text-gray-900 sm:text-lg dark:text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen
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
                        <div className="border-t border-gray-100 px-6 pt-4 pb-6 text-sm leading-relaxed text-gray-600 dark:border-white/5 dark:text-gray-300">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
