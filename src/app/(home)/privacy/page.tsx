"use client";

import { motion } from "framer-motion";
import {
  Shield, BookOpen, Database, Settings, Share2,
  Clock, Lock, User, Cookie, Globe, Baby, Link2, RefreshCw, Mail,
} from "lucide-react";

const sections = [
  { id: "definitions", title: "Définitions", icon: BookOpen },
  { id: "collecte", title: "Données collectées", icon: Database },
  { id: "utilisation", title: "Utilisation des données", icon: Settings },
  { id: "partage", title: "Partage des données", icon: Share2 },
  { id: "conservation", title: "Conservation", icon: Clock },
  { id: "securite", title: "Sécurité", icon: Lock },
  { id: "droits", title: "Droits des utilisateurs", icon: User },
  { id: "cookies", title: "Cookies", icon: Cookie },
  { id: "transfert", title: "Transfert international", icon: Globe },
  { id: "enfants", title: "Protection des enfants", icon: Baby },
  { id: "liens", title: "Liens externes", icon: Link2 },
  { id: "modifications", title: "Modifications", icon: RefreshCw },
  { id: "nous-contacter", title: "Nous contacter", icon: Mail },
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

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="mt-2 space-y-1.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pt-24 pb-12 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-xs font-semibold tracking-widest text-blue-600 uppercase">
          <Shield size={12} /> Confidentialité
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="text-foreground mb-3 text-4xl font-bold tracking-tight md:text-5xl">
          Politique de confidentialité
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white/50 px-3 py-1.5 text-xs text-gray-500 shadow-sm backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400">
          <RefreshCw size={11} /> Dernière mise à jour : 8 février 2026
        </motion.div>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex gap-10">

          {/* Sidebar TOC */}
          <aside className="hidden w-52 shrink-0 lg:block">
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

            <Section id="definitions" number="1" icon={BookOpen} title="Définitions">
              <List items={[
                <><strong>Compte :</strong> compte unique créé pour accéder à notre service.</>,
                <><strong>Société :</strong> Floticar (Devevoke), désignée par &quot;nous&quot;, &quot;notre&quot; ou &quot;nos&quot;.</>,
                <><strong>Pays :</strong> France</>,
                <><strong>Dispositif :</strong> tout appareil pouvant accéder au service (ordinateur, smartphone, tablette).</>,
                <><strong>Données personnelles :</strong> informations concernant une personne identifiée ou identifiable.</>,
                <><strong>Service :</strong> l&apos;application Floticar.</>,
                <><strong>Fournisseur de services :</strong> toute entreprise traitant des données pour notre compte.</>,
                <><strong>Données d&apos;utilisation :</strong> données collectées automatiquement lors de l&apos;utilisation du service.</>,
              ]} />
            </Section>

            <Section id="collecte" number="2" icon={Database} title="Données collectées">
              <p>Nous pouvons collecter les informations suivantes :</p>
              <List items={[
                "Email, prénom et nom",
                "Données d'utilisation : adresse IP, type de navigateur, pages visitées, durée de visite, identifiants uniques",
                "Informations liées aux appareils mobiles : type, système d'exploitation, navigateur",
                "Informations depuis votre appareil (photos, caméra) si vous autorisez leur accès",
              ]} />
            </Section>

            <Section id="utilisation" number="3" icon={Settings} title="Utilisation des données">
              <p>Vos données peuvent être utilisées pour :</p>
              <List items={[
                "Fournir et améliorer notre service",
                "Gérer votre compte et votre inscription",
                "Exécuter des contrats ou services souscrits",
                "Vous contacter par email, SMS ou notifications push",
                "Analyser l'utilisation pour améliorer nos services",
              ]} />
            </Section>

            <Section id="partage" number="4" icon={Share2} title="Partage des données">
              <p>Nous pouvons partager vos données avec :</p>
              <List items={[
                "Nos fournisseurs de services pour analyse et support",
                "Nos filiales et partenaires commerciaux",
                "D'autres utilisateurs dans les zones publiques, avec votre consentement",
              ]} />
            </Section>

            <Section id="conservation" number="5" icon={Clock} title="Conservation des données">
              <p>Nous conservons vos données uniquement le temps nécessaire :</p>
              <List items={[
                "Comptes utilisateurs : jusqu'à 24 mois après fermeture du compte",
                "Données de support : jusqu'à 24 mois",
                "Données d'utilisation : jusqu'à 24 mois",
                "Obligations légales, résolution de litiges et prévention des fraudes",
              ]} />
            </Section>

            <Section id="securite" number="6" icon={Lock} title="Sécurité">
              <p>Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger vos données. Aucune transmission sur Internet n&apos;est toutefois garantie à 100% sécurisée.</p>
            </Section>

            <Section id="droits" number="7" icon={User} title="Droits des utilisateurs">
              <p>Vous pouvez exercer vos droits d&apos;accès, de rectification ou de suppression de vos données en nous contactant :</p>
              <div className="mt-3">
                <a href="mailto:contact@devevoke.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
                  <Mail size={14} /> contact@devevoke.com
                </a>
              </div>
            </Section>

            <Section id="cookies" number="8" icon={Cookie} title="Cookies et technologies similaires">
              <p>Nous utilisons des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. Vous pouvez configurer votre navigateur pour les refuser à tout moment.</p>
            </Section>

            <Section id="transfert" number="9" icon={Globe} title="Transfert international">
              <p>Vos données peuvent être transférées et stockées hors de France. Nous nous assurons que ces transferts respectent des mesures de sécurité appropriées conformes au RGPD.</p>
            </Section>

            <Section id="enfants" number="10" icon={Baby} title="Protection des enfants">
              <p>Notre service n&apos;est pas destiné aux personnes de moins de 16 ans. Nous ne collectons pas sciemment de données personnelles les concernant.</p>
            </Section>

            <Section id="liens" number="11" icon={Link2} title="Liens externes">
              <p>Notre service peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialité.</p>
            </Section>

            <Section id="modifications" number="12" icon={RefreshCw} title="Modifications de cette politique">
              <p>Nous pouvons mettre à jour cette politique à tout moment. La version révisée sera publiée sur cette page avec la date de mise à jour.</p>
            </Section>

            <Section id="nous-contacter" number="13" icon={Mail} title="Nous contacter">
              <p>Pour toute question concernant cette politique de confidentialité :</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="mailto:contact@devevoke.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
                  <Mail size={14} /> contact@devevoke.com
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/50 px-4 py-2 text-sm font-medium text-gray-500 transition hover:border-blue-200 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-900/50 dark:text-gray-400 dark:hover:border-blue-800 dark:hover:text-blue-400">
                  Formulaire de contact
                </a>
              </div>
            </Section>

          </div>
        </div>
      </div>
    </main>
  );
}
