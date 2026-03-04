"use client";

import { motion } from "framer-motion";
import { FileText, Building2, Server, Shield, Cookie, AlertTriangle, Link2, Scale, Mail } from "lucide-react";

const sections = [
  { id: "editeur", title: "Éditeur du site", icon: Building2 },
  { id: "hebergement", title: "Hébergement", icon: Server },
  { id: "propriete", title: "Propriété intellectuelle", icon: Shield },
  { id: "donnees", title: "Données personnelles", icon: Shield },
  { id: "cookies", title: "Cookies", icon: Cookie },
  { id: "responsabilite", title: "Responsabilité", icon: AlertTriangle },
  { id: "liens", title: "Liens externes", icon: Link2 },
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
      className="rounded-2xl border border-gray-100 bg-white p-7 shadow-sm"
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
          <Icon size={18} />
        </div>
        <h2 className="text-lg font-bold text-gray-900">
          <span className="mr-2 text-blue-500">{number}.</span>{title}
        </h2>
      </div>
      <div className="text-sm leading-relaxed text-gray-600 space-y-2">{children}</div>
    </motion.section>
  );
}

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-12 pt-24 text-center">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-slate-200/50 blur-3xl" />
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 shadow-sm">
          <FileText size={12} /> Mentions légales
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="mb-3 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
          Mentions légales
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="mx-auto max-w-lg text-sm text-gray-400">
          Conformément à la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l&apos;économie numérique (L.C.E.N.)
        </motion.p>
      </section>

      <div className="mx-auto max-w-5xl px-6 pb-24">
        <div className="flex gap-10">

          {/* TOC Sidebar */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <div className="sticky top-24 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-gray-400">Sommaire</p>
              <nav className="space-y-1">
                {sections.map(({ id, title }) => (
                  <a key={id} href={`#${id}`}
                    className="block rounded-lg px-3 py-1.5 text-sm text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                    {title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-5">

            <Section id="editeur" number="1" icon={Building2} title="Éditeur du site">
              <p>Le site Floticar est édité par :</p>
              <div className="mt-3 rounded-xl bg-gray-50 p-4 font-mono text-xs space-y-1">
                <p><span className="text-gray-400">Société</span> Devevoke</p>
                <p><span className="text-gray-400">Adresse</span> 5 impasse des vergers, 66370 Pézilla-la-Rivière</p>
                <p><span className="text-gray-400">SIRET</span> 87843895100013</p>
                <p><span className="text-gray-400">Email</span>{" "}
                  <a href="mailto:contact@devevoke.com" className="text-blue-600 underline">contact@devevoke.com</a>
                </p>
                <p><span className="text-gray-400">Responsable</span> Mr Faradji</p>
              </div>
            </Section>

            <Section id="hebergement" number="2" icon={Server} title="Hébergement">
              <p>Le site est hébergé par :</p>
              <div className="mt-3 rounded-xl bg-gray-50 p-4 font-mono text-xs space-y-1">
                <p><span className="text-gray-400">Société</span> Hostinger International Ltd</p>
                <p><span className="text-gray-400">Adresse</span> 61 Lordou Vironos Street, 6023 Larnaca, Chypre</p>
                <p><span className="text-gray-400">Contact</span>{" "}
                  <a href="https://www.hostinger.fr/contact" className="text-blue-600 underline" target="_blank" rel="noreferrer">
                    hostinger.fr/contact
                  </a>
                </p>
              </div>
            </Section>

            <Section id="propriete" number="3" icon={Shield} title="Propriété intellectuelle">
              <p>Tous les contenus présents sur le site Floticar (textes, images, vidéos, logos, designs, logiciels) sont la propriété exclusive de Devevoke ou de ses partenaires. Toute reproduction, modification ou distribution partielle ou totale est interdite sans autorisation préalable écrite.</p>
            </Section>

            <Section id="donnees" number="4" icon={Shield} title="Données personnelles">
              <p>Vos données personnelles sont collectées et traitées conformément à notre{" "}
                <a href="/privacy" className="font-semibold text-blue-600 underline">Politique de confidentialité</a>.
              </p>
            </Section>

            <Section id="cookies" number="5" icon={Cookie} title="Cookies">
              <p>Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur et analyser le trafic. Vous pouvez configurer votre navigateur pour refuser les cookies si vous le souhaitez.</p>
            </Section>

            <Section id="responsabilite" number="6" icon={AlertTriangle} title="Responsabilité">
              <p>Devevoke s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées. Cependant, elle ne peut garantir l&apos;exactitude, la complétude ou l&apos;actualité des informations présentes sur le site.</p>
            </Section>

            <Section id="liens" number="7" icon={Link2} title="Liens externes">
              <p>Les liens hypertextes vers d&apos;autres sites n&apos;engagent pas la responsabilité de Devevoke quant au contenu de ces sites tiers.</p>
            </Section>

            <Section id="droit" number="8" icon={Scale} title="Droit applicable">
              <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur interprétation relèvera de la compétence exclusive des tribunaux français.</p>
            </Section>

            <Section id="contact" number="9" icon={Mail} title="Contact">
              <p>Pour toute question concernant ces mentions légales :</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href="mailto:contact@devevoke.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 transition hover:bg-blue-100">
                  <Mail size={14} /> contact@devevoke.com
                </a>
                <a href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-blue-200 hover:text-blue-600">
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
