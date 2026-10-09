"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Shield, AlertTriangle, Link2, Scale, Mail, FileText, RefreshCw } from "lucide-react";

const sections = [
  { id: "objet", title: "Objet", icon: BookOpen },
  { id: "acces", title: "Accès au site", icon: Globe },
  { id: "propriete", title: "Propriété intellectuelle", icon: Shield },
  { id: "responsabilite", title: "Responsabilité", icon: AlertTriangle },
  { id: "liens", title: "Liens hypertextes", icon: Link2 },
  { id: "droit", title: "Droit applicable", icon: Scale },
  { id: "contact", title: "Contact", icon: Mail },
];

function Section({ id, number, icon: Icon, title, children }: {
  id: string; number: string; icon: React.ElementType; title: string; children: React.ReactNode;
}) {
  return (
    <motion.section id={id}
      initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }}
      className="rounded-2xl border border-gray-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
          <Icon size={18} />
        </div>
        <h2 className="text-foreground text-lg font-bold">
          <span className="mr-2 text-blue-400">{number}.</span>{title}
        </h2>
      </div>
      <div className="space-y-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400">{children}</div>
    </motion.section>
  );
}

export default function CGUPage() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-12 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          <FileText size={12} /> CGU
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-foreground mb-3 text-4xl font-bold tracking-tight md:text-5xl">
          Conditions Générales d&apos;Utilisation
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/50 px-3 py-1.5 text-xs text-gray-500 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
          <RefreshCw size={11} /> Dernière mise à jour : 9 octobre 2026
        </motion.div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex gap-10">

          {/* Sidebar TOC */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white/80 p-5 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50">
              <p className="mb-3 text-xs font-bold tracking-widest text-gray-500 uppercase dark:text-gray-400">Sommaire</p>
              <nav className="space-y-0.5">
                {sections.map(({ id, title }) => (
                  <a key={id} href={`#${id}`}
                    className="block rounded-lg px-3 py-1.5 text-xs text-gray-500 transition hover:bg-blue-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-blue-900/30 dark:hover:text-blue-400">
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-5">

            <Section id="objet" number="1" icon={BookOpen} title="Objet">
              <p>Les présentes Conditions Générales d&apos;Utilisation (CGU) régissent l&apos;utilisation du site internet Floticar.com. En naviguant sur ce site, vous acceptez pleinement et entièrement ces conditions.</p>
              <p>Le site Floticar.com a pour objet de fournir des informations sur les services et le logiciel SaaS de gestion de flotte automobile développé par l&apos;entreprise Devevoke.</p>
            </Section>

            <Section id="acces" number="2" icon={Globe} title="Accès au site">
              <p>Le site est accessible gratuitement en tout lieu à tout utilisateur ayant un accès à Internet. Tous les frais supportés par l&apos;utilisateur pour accéder au service (matériel informatique, logiciels, connexion Internet, etc.) sont à sa charge.</p>
            </Section>

            <Section id="propriete" number="3" icon={Shield} title="Propriété intellectuelle">
              <p>La marque Floticar, ainsi que les logos, la charte graphique, le code source, les textes et les images du site sont protégés par le droit d&apos;auteur. Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du site, sans l&apos;autorisation de l&apos;éditeur est prohibée.</p>
            </Section>

            <Section id="responsabilite" number="4" icon={AlertTriangle} title="Responsabilité">
              <p>Devevoke s&apos;efforce de fournir sur son site des informations aussi précises que possible. Toutefois, l&apos;entreprise ne pourra être tenue responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            </Section>

            <Section id="liens" number="5" icon={Link2} title="Liens hypertextes">
              <p>Le site Floticar.com peut contenir des liens hypertextes vers d&apos;autres sites. Devevoke n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités, et n&apos;assumera en conséquence aucune responsabilité de ce fait.</p>
            </Section>

            <Section id="droit" number="6" icon={Scale} title="Droit applicable">
              <p>Les présentes CGU sont soumises à la législation française. En cas d&apos;absence de résolution amiable d&apos;un litige né entre les parties, les tribunaux français seront seuls compétents.</p>
            </Section>

            <Section id="contact" number="7" icon={Mail} title="Contact">
              <p>Pour toute question concernant l&apos;utilisation du site, vous pouvez nous contacter :</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="mailto:contact@devevoke.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100 dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50">
                  <Mail size={14} /> contact@devevoke.com
                </a>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </main>
  );
}
