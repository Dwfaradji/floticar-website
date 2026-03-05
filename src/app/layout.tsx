import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Floticar — Logiciel de Gestion de Flotte Automobile pour PME",
  description:
    "Floticar simplifie la gestion de flotte : véhicules, conducteurs, entretiens, dépenses et rapports en temps réel. Solution SaaS multi-tenant sécurisée, déployée rapidement.",
  keywords: [
    "gestion de flotte",
    "logiciel fleet management",
    "suivi véhicules entreprise",
    "gestion conducteurs",
    "entretien véhicules PME",
    "Floticar",
    "SaaS flotte automobile",
    "gestion carburant",
    "tableau de bord flotte",
  ],
  authors: [{ name: "Floticar", url: "https://floticar.app" }],
  creator: "Floticar",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://floticar.app",
    siteName: "Floticar",
    title: "Floticar — Logiciel de Gestion de Flotte Automobile",
    description:
      "Centralisez la gestion de vos véhicules, conducteurs et entretiens dans une seule plateforme moderne, sécurisée et accessible partout.",
    images: [
      {
        url: "https://floticar.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Floticar — Dashboard de gestion de flotte",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Floticar — Logiciel de Gestion de Flotte",
    description: "Gérez votre flotte en temps réel. Véhicules, conducteurs, entretiens, dépenses.",
    images: ["https://floticar.app/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://floticar.app",
  },
  icons: {
    icon: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { Providers } from "@/components/Providers";

const jsonLd = {
  // ... (keep existing)
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Floticar",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Sur devis — contacter l'équipe Floticar",
  },
  description:
    "Logiciel de gestion de flotte automobile pour PME. Suivi véhicules, conducteurs, entretiens, dépenses et rapports en temps réel.",
  url: "https://floticar.app",
  logo: "https://floticar.app/logo.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-500 selection:text-white`}>
        <Providers>
          {/* Global Background Elements */}
          <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            {/* Ambient glows */}
            <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-600/10 blur-[120px] dark:bg-blue-600/15" />
            <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[100px] dark:bg-cyan-500/10" />

            {/* Grid overlay */}
            <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]" />
          </div>

          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
