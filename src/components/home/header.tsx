"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Wrench,
  Gauge,
  Fuel,
  Smartphone,
  FileSpreadsheet,
  Building2,
  Users,
  HeartPulse,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavChild {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

const NAV_LINKS: NavItem[] = [
  { label: "Accueil", href: "/" },
  {
    label: "Fonctionnalités",
    href: "",
    children: [
      {
        label: "Application Mobile",
        href: "/fonctionnalites/application-mobile",
        description: "QR Code, carnet de bord & photos terrain",
        icon: Smartphone,
      },
      {
        label: "Suivi d'entretien",
        href: "/fonctionnalites/suivi-entretien",
        description: "Alertes CT, révisions et carnet de santé numérique",
        icon: Wrench,
      },
      {
        label: "Suivi du kilométrage",
        href: "/suivi-kilometrage-flotte",
        description: "Relevés QR Code mobile et prévention LLD/LOA",
        icon: Gauge,
      },
      {
        label: "Gestion du carburant",
        href: "/gestion-carburant-flotte",
        description: "Photos de tickets d'essence et maîtrise du TCO",
        icon: Fuel,
      },
    ],
  },
  {
    label: "Solutions",
    href: "",
    children: [
      {
        label: "Remplacer Excel",
        href: "/remplacer-excel-gestion-flotte",
        description: "Quittez vos tableurs pour un outil automatisé",
        icon: FileSpreadsheet,
      },
      {
        label: "Gestion Flotte PME",
        href: "/gestion-flotte-pme",
        description: "Pilotage centralisé pour 3 à 50 véhicules",
        icon: Building2,
      },
      {
        label: "Associations",
        href: "/gestion-flotte-association",
        description: "Partage de véhicules et bénévoles sans GPS",
        icon: Users,
      },
      {
        label: "Médico-social (IME, SESSAD)",
        href: "/secteurs/medico-social",
        description: "Sécurité des tournées et usagers accompagnés",
        icon: HeartPulse,
      },
    ],
  },
  { label: "Simulateur", href: "/simulateur" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200/70 bg-white/85 shadow-lg shadow-blue-900/5 backdrop-blur-md dark:border-gray-800/70 dark:bg-gray-950/85"
          : "border-b border-transparent bg-white/60 backdrop-blur-sm dark:bg-gray-950/60"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 transition">
          <div className="relative h-11 w-11">
            <Image
              src="/images/logo-light-transparent.png"
              alt="Logo Floticar"
              fill
              sizes="44px"
              className="object-contain transition group-hover:scale-105 dark:hidden"
              priority
            />
            <Image
              src="/images/logo-dark-transparent.png"
              alt="Logo Floticar"
              fill
              sizes="44px"
              className="hidden object-contain transition group-hover:scale-105 dark:block"
              priority
            />
          </div>
          <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-xl font-extrabold tracking-tight text-transparent transition group-hover:opacity-90 dark:from-blue-400 dark:to-cyan-400">
            Floticar
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              link.children?.some((child) => pathname === child.href);

            if (link.children) {
              const isOpen = openDropdown === link.label;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    className={`relative flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive || isOpen
                        ? "text-blue-600 dark:text-cyan-400"
                        : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600 dark:text-cyan-400" : "text-gray-400"
                      }`}
                    />
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue-600 dark:bg-cyan-400"
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-80 rounded-2xl border border-gray-100 bg-white/95 p-2 shadow-2xl shadow-blue-900/10 backdrop-blur-xl dark:border-white/10 dark:bg-gray-950/95"
                      >
                        <div className="space-y-1">
                          {link.children.map((child) => {
                            const Icon = child.icon;
                            const isChildActive = pathname === child.href;

                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpenDropdown(null)}
                                className={`group flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 ${
                                  isChildActive
                                    ? "bg-blue-50/80 text-blue-600 dark:bg-blue-900/30 dark:text-cyan-400"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                                }`}
                              >
                                <div
                                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                                    isChildActive
                                      ? "bg-blue-600 text-white shadow-sm"
                                      : "bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600 dark:bg-white/5 dark:text-gray-400 dark:group-hover:bg-cyan-950/40 dark:group-hover:text-cyan-400"
                                  }`}
                                >
                                  <Icon size={16} />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <div className="text-xs leading-tight font-bold">
                                    {child.label}
                                  </div>
                                  <p className="mt-0.5 line-clamp-1 text-[11px] leading-snug text-gray-500 dark:text-gray-400">
                                    {child.description}
                                  </p>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-white"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue-600 dark:bg-cyan-400"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Link
            href="/demande-de-demo"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/30"
          >
            <span>Demander une démo</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Ouvrir le menu mobile"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200/80 bg-white/70 text-gray-700 shadow-sm backdrop-blur-md transition hover:bg-gray-100 dark:border-white/10 dark:bg-white/5 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={() => setOpen(!open)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={20} /> : <Menu size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl lg:hidden dark:border-gray-800 dark:bg-gray-950/95"
          >
            <nav className="flex flex-col gap-2 px-6 py-5">
              {NAV_LINKS.map((link) => {
                if (link.children) {
                  return (
                    <div key={link.label} className="pt-2 pb-1">
                      <div className="px-3 pb-2 text-[11px] font-bold tracking-wider text-gray-400 uppercase dark:text-gray-500">
                        {link.label}
                      </div>
                      <div className="space-y-1 pl-2">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          const isChildActive = pathname === child.href;

                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setOpen(false)}
                              className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                                isChildActive
                                  ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-cyan-400"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                              }`}
                            >
                              <Icon size={16} className="text-gray-400" />
                              <span>{child.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                }

                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-cyan-400"
                        : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}

              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-white/10">
                <Link
                  href="/demande-de-demo"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/25"
                >
                  <span>Demander une démo</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
