"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Shield, FileText, Phone } from "lucide-react";

const FOOTER_LINKS = [
  { label: "Confidentialité", href: "/privacy", icon: Shield },
  { label: "Mentions légales", href: "/legal", icon: FileText },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Footer() {
  // No longer needed: resolvedTheme, mounted, useEffect

  // No JS logic needed for logos anymore

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full border-t border-gray-200/80 bg-gradient-to-b from-white to-gray-50 dark:border-gray-800/80 dark:from-[#05070f] dark:to-transparent"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label="Retour à l'accueil Floticar"
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/images/logo-light-transparent.png"
                  alt=""
                  role="presentation"
                  fill
                  priority
                  className="object-contain dark:hidden"
                />
                <Image
                  src="/images/logo-dark-transparent.png"
                  alt=""
                  role="presentation"
                  fill
                  priority
                  className="hidden object-contain dark:block"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-lg font-bold tracking-tight text-transparent dark:from-blue-500 dark:to-blue-400">
                Floticar
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              La solution intelligente de gestion de flotte pour les professionnels.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-2" aria-label="Liens utiles du pied de page">
            {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:border-blue-800 dark:hover:bg-blue-900/40 dark:hover:text-blue-400"
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-800" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row dark:text-gray-500">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-600 dark:text-gray-400">Floticar</span> — une solution{" "}
            <a href="https://devevoke.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">Devevoke</a>
          </p>
          <a
            href="mailto:support@floticar.com"
            className="flex items-center gap-1.5 transition hover:text-blue-600 dark:hover:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={13} />
            support@floticar.com
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
