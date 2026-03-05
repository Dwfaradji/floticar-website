"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Démo", href: "/demande-de-demo" },
  { label: "Contact", href: "/contact" },
  { label: "Confidentialité", href: "/privacy" },
  { label: "Mentions légales", href: "/legal" },
  { label: "FAQ", href: "/faq" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "border-b border-gray-200/60 bg-white/80 shadow-lg shadow-blue-900/5 backdrop-blur-md dark:border-gray-800/60 dark:bg-gray-950/80"
        : "border-b border-transparent bg-white/60 backdrop-blur-sm dark:bg-gray-950/60"
        }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2.5 transition">
          <div className="relative h-8 w-8">
            {/* Light Mode Logo */}
            <div className="absolute inset-0 block dark:hidden">
              <Image
                src="/images/logo-light-transparent.png"
                alt="Floticar Logo"
                fill
                className="object-contain transition group-hover:opacity-90"
                priority
              />
            </div>
            {/* Dark Mode Logo */}
            <div className="absolute inset-0 hidden dark:block">
              <Image
                src="/images/logo-dark-transparent.png"
                alt="Floticar Logo"
                fill
                className="object-contain transition group-hover:opacity-90"
                priority
              />
            </div>
          </div>
          <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-xl font-bold tracking-tight text-transparent transition group-hover:opacity-90 dark:from-blue-500 dark:to-blue-400">
            Floticar
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${isActive
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-gray-600 hover:bg-blue-50/80 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400"
                  }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-blue-500 dark:bg-blue-400"
                  />
                )}
              </Link>
            );
          })}
          <div className="ml-2 pl-2 border-l border-gray-200 dark:border-gray-800">
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 transition hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={open ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {open ? <X size={22} /> : <Menu size={22} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-2.5 text-sm font-medium transition ${isActive
                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                      : "text-gray-700 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-900 dark:hover:text-blue-400"
                      }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
