"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full border-t border-gray-200/80 bg-gradient-to-b from-white via-gray-50/50 to-gray-100/50 dark:border-gray-800/80 dark:from-[#05070f] dark:via-[#080b16] dark:to-transparent"
    >
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column (2 cols on lg) */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5"
              aria-label="Retour à l'accueil Floticar"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/images/logo-light-transparent.png"
                  alt=""
                  role="presentation"
                  fill
                  sizes="32px"
                  priority
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo-dark-transparent.png"
                  alt=""
                  role="presentation"
                  fill
                  sizes="32px"
                  priority
                  className="hidden object-contain dark:block"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-xl font-bold tracking-tight text-transparent dark:from-blue-500 dark:to-blue-400">
                Floticar
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              La solution simple et collaborative de gestion de flotte automobile pensée pour les PME, les associations et les structures médico-sociales.
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 dark:text-gray-500">
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
                <ShieldCheck size={13} className="text-emerald-500" /> Données hébergées en France
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-white px-2.5 py-1 font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400">
                Conforme RGPD
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-wider text-gray-900 uppercase dark:text-white">
              Solutions & Métiers
            </span>
            <ul className="flex flex-col space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/remplacer-excel-gestion-flotte" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Remplacer Excel
                </Link>
              </li>
              <li>
                <Link href="/gestion-flotte-pme" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Flotte PME & TPE
                </Link>
              </li>
              <li>
                <Link href="/gestion-flotte-association" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Flotte Associations
                </Link>
              </li>
              <li>
                <Link href="/secteurs/medico-social" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Pôle Médico-social
                </Link>
              </li>
              <li>
                <Link href="/secteurs/ime" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Minibus & Véhicules IME
                </Link>
              </li>
              <li>
                <Link href="/secteurs/sessad" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Véhicules SESSAD
                </Link>
              </li>
            </ul>
          </div>

          {/* Fonctionnalités */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-wider text-gray-900 uppercase dark:text-white">
              Plateforme
            </span>
            <ul className="flex flex-col space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/fonctionnalites/application-mobile" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Application mobile conducteur
                </Link>
              </li>
              <li>
                <Link href="/fonctionnalites/suivi-entretien" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Suivi d&apos;entretien & CT
                </Link>
              </li>
              <li>
                <Link href="/suivi-kilometrage-flotte" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Suivi du kilométrage
                </Link>
              </li>
              <li>
                <Link href="/gestion-carburant-flotte" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Gestion du carburant
                </Link>
              </li>
              <li>
                <Link href="/simulateur" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Simulateur d&apos;économies
                </Link>
              </li>
              <li>
                <Link href="/tarifs" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Tarifs & Abonnements
                </Link>
              </li>
              <li>
                <Link href="/demande-de-demo" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Demander une démo
                </Link>
              </li>
              <li>
                <Link href="/faq" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Questions fréquentes (FAQ)
                </Link>
              </li>
            </ul>
          </div>

          {/* Ressources & Légal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold tracking-wider text-gray-900 uppercase dark:text-white">
              Informations
            </span>
            <ul className="flex flex-col space-y-2.5 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/blog" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Blog & Guides
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Contactez-nous
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="/legal" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/cgu" className="transition hover:text-blue-600 dark:hover:text-blue-400">
                  Conditions d&apos;utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-gray-400 sm:flex-row dark:text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-600 dark:text-gray-400">Floticar</span> — solution éditée par{" "}
            <a
              href="https://devevoke.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
            >
              Devevoke
            </a>
          </p>

          <a
            href="mailto:support@floticar.com"
            className="flex items-center gap-1.5 transition hover:text-blue-600 dark:hover:text-blue-400"
          >
            <Mail size={13} />
            support@floticar.com
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
