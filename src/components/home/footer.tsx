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
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full border-t border-gray-200/80 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="group flex items-center gap-2.5">
              <div className="relative h-10 w-10">
                <Image
                  src="/images/logo-light-transparent.png"
                  alt="Floticar"
                  width={50}
                  height={50}
                  priority
                  className="object-cover"
                />
              </div>
              <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-lg font-bold tracking-tight text-transparent">
                Floticar
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-500">
              La solution intelligente de gestion de flotte pour les professionnels.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-2">
            {FOOTER_LINKS.map(({ label, href, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-600 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <Icon size={14} />
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

        {/* Bottom row */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-600">Floticar</span> — une solution{" "}
            <a href="https://devevoke.com" target="_blank" className="font-semibold text-gray-600">Devevoke</a>
          </p>
          <a
            href="mailto:support@floticar.com"
            className="flex items-center gap-1.5 transition hover:text-blue-600"
            target="_blank"
          >
            <Mail size={13} />
            support@floticar.com
          </a>
        </div>
      </div>
    </motion.footer>
  );
}
