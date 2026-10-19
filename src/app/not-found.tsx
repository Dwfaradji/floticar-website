"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Car, 
  Home, 
  FileSpreadsheet, 
  CreditCard, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  HelpCircle,
  MapPinOff
} from "lucide-react";

export default function NotFound() {
  const quickLinks = [
    {
      title: "Remplacer vos tableurs Excel",
      description: "Passez d'un tableur figé à un pilotage automatisé sous 24h.",
      href: "/remplacer-excel-gestion-flotte",
      icon: FileSpreadsheet,
      badge: "Populaire"
    },
    {
      title: "Gestion de flotte pour PME",
      description: "Centralisez véhicules, conducteurs, entretiens et dépenses.",
      href: "/gestion-flotte-pme",
      icon: Car,
    },
    {
      title: "Consulter nos tarifs",
      description: "Des formules transparentes sans engagement pour chaque taille de parc.",
      href: "/tarifs",
      icon: CreditCard,
    },
    {
      title: "Guides & Astuces du Blog",
      description: "Conseils pratiques pour réduire votre TCO et optimiser vos tournées.",
      href: "/blog",
      icon: BookOpen,
    },
  ];

  return (
    <main className="relative min-h-[85vh] overflow-hidden px-6 pt-32 pb-24">
      {/* Background ambient decorative glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center"
      >
        <div className="h-[450px] w-[600px] rounded-full bg-gradient-to-tr from-blue-600/15 to-cyan-500/10 blur-[130px] dark:from-blue-500/20 dark:to-indigo-500/15" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        {/* TOP STATUS BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold tracking-wider text-blue-700 uppercase shadow-sm backdrop-blur-sm dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300"
        >
          <MapPinOff size={14} className="text-blue-600 dark:text-blue-400" />
          Erreur 404 • Destination introuvable
        </motion.div>

        {/* GIANT 404 GRAPHIC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative my-4 select-none"
        >
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-8xl font-black tracking-tight text-transparent sm:text-9xl">
            404
          </span>
          <div className="mx-auto mt-[-10px] h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-70 blur-[1px]" />
        </motion.div>

        {/* TITLE & EXPLANATION */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white"
        >
          Oups ! Ce trajet semble mener à une impasse.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg dark:text-gray-300"
        >
          Le lien que vous avez suivi est peut-être erroné, la page a été renommée ou archivée. 
          Ne restez pas en panne sur le bas-côté : reprenez la route facilement.
        </motion.p>

        {/* PRIMARY ACTIONS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-blue-500/35"
          >
            <Home size={16} />
            Retour à l&apos;accueil
          </Link>

          <Link
            href="/demande-de-demo"
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-white"
          >
            <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
            Demander une démonstration
          </Link>
        </motion.div>

        {/* QUICK ACCESS DESTINATIONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-left"
        >
          <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-800">
            <h2 className="text-sm font-bold tracking-wider text-gray-500 uppercase dark:text-gray-400">
              Pages recommandées
            </h2>
            <span className="text-xs text-gray-400">Suggestions de reprise d&apos;itinéraire</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {quickLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex items-start gap-4 rounded-2xl border border-gray-200/90 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md dark:border-gray-800 dark:bg-gray-950/60 dark:hover:border-blue-500/50 dark:hover:bg-gray-900/80"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/60 dark:text-blue-400 dark:group-hover:bg-blue-600 dark:group-hover:text-white">
                    <Icon size={20} />
                  </div>
                  
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold tracking-wide text-emerald-700 uppercase dark:bg-emerald-950/60 dark:text-emerald-400">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>

                  <ArrowRight 
                    size={16} 
                    className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-blue-600 dark:text-gray-500 dark:group-hover:text-blue-400" 
                  />
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* BOTTOM HELP FOOTNOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400"
        >
          <HelpCircle size={14} className="text-gray-400" />
          <span>Besoin d&apos;assistance immédiate ?</span>
          <Link 
            href="/faq" 
            className="font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Consultez notre FAQ
          </Link>
          <span>ou</span>
          <Link 
            href="/contact" 
            className="font-medium text-blue-600 underline underline-offset-4 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Contactez notre équipe
          </Link>
        </motion.div>
      </div>
    </main>
  );
}