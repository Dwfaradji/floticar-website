import {
    Car, Wrench, BarChart3, Shield, Fuel,
    CheckCircle2, Users, TrendingDown, Clock,
    Eye, Zap, Lock, Globe, Building2, Truck, Activity, FileText, LayoutDashboard, ShieldAlert
} from "lucide-react";

export const STATS = [
    { value: "100 %", label: "Web & Mobile" },
    { value: "Multi-tenant", label: "Architecture isolée" },
    { value: "RGPD", label: "Conforme" },
    { value: "< 24h", label: "Déploiement" },
] as const;

export const TRUST_SIGNALS = [
    "Solution professionnelle",
    "Données hébergées en France",
    "RGPD conforme",
] as const;

export const PAINS = [
    { icon: Clock, title: "Suivi chronophage", desc: "Des heures perdues sur des fichiers Excel et des emails dispersés." },
    { icon: TrendingDown, title: "Dépenses opaques", desc: "Impossibles à analyser sans un outil dédié et centralisé." },
    { icon: Wrench, title: "Entretiens oubliés", desc: "Les pannes coûteuses surviennent faute d'alertes préventives." },
    { icon: Eye, title: "Zéro visibilité", desc: "Aucun indicateur clair sur l'état réel de votre flotte." },
];

export const FEATURES = [
    {
        icon: Car, color: "blue",
        title: "Gestion des Véhicules",
        desc: "Fiches techniques, suivi kilométrique, état des lieux, et gestion des contrats.",
        points: ["Fiches techniques", "Suivi kilométrique", "Gestion des contrats"],
    },
    {
        icon: Users, color: "cyan",
        title: "Gestion des Conducteurs",
        desc: "Gérez l'attribution de véhicules et l'historique complet des assignations.",
        points: ["Attribution manuelle", "Historique assignations", "Suivi des conducteurs"],
    },
    {
        icon: BarChart3, color: "emerald",
        title: "Dépenses & Carburant",
        desc: "Suivi des consommations de carburant, factures d'entretien avec gestion des tickets dématérialisés.",
        points: ["Consommations", "Factures d'entretien", "Tickets dématérialisés"],
    },
    {
        icon: FileText, color: "amber",
        title: "Documents Administratifs",
        desc: "Stockage centralisé (Cartes grises, assurances, contrôles techniques).",
        points: ["Cartes grises", "Assurances", "Contrôles techniques"],
    },
    {
        icon: LayoutDashboard, color: "violet",
        title: "Dashboard Global",
        desc: "Vue d'ensemble de la flotte (Véhicules en service, coûts, alertes).",
        points: ["Véhicules en service", "Suivi des coûts", "Gestion des alertes"],
    },
    {
        icon: ShieldAlert, color: "pink",
        title: "Gestion des Amendes",
        desc: "Traitez les infractions facilement en identifiant instantanément le conducteur responsable.",
        points: ["Identification du conducteur", "Suivi des infractions", "Historique d'assignations"],
    },
];

export const FEATURE_COLOR_MAP: Record<string, { bg: string; text: string; ring: string; glow: string }> = {
    blue: { bg: "bg-blue-100 dark:bg-blue-500/10", text: "text-blue-600 dark:text-blue-400", ring: "ring-blue-200 dark:ring-blue-500/20", glow: "group-hover:shadow-blue-500/10" },
    amber: { bg: "bg-amber-100 dark:bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", ring: "ring-amber-200 dark:ring-amber-500/20", glow: "group-hover:shadow-amber-500/10" },
    emerald: { bg: "bg-emerald-100 dark:bg-emerald-500/10", text: "text-emerald-600 dark:text-emerald-400", ring: "ring-emerald-200 dark:ring-emerald-500/20", glow: "group-hover:shadow-emerald-500/10" },
    violet: { bg: "bg-violet-100 dark:bg-violet-500/10", text: "text-violet-600 dark:text-violet-400", ring: "ring-violet-200 dark:ring-violet-500/20", glow: "group-hover:shadow-violet-500/10" },
    cyan: { bg: "bg-cyan-100 dark:bg-cyan-500/10", text: "text-cyan-600 dark:text-cyan-400", ring: "ring-cyan-200 dark:ring-cyan-500/20", glow: "group-hover:shadow-cyan-500/10" },
    pink: { bg: "bg-pink-100 dark:bg-pink-500/10", text: "text-pink-600 dark:text-pink-400", ring: "ring-pink-200 dark:ring-pink-500/20", glow: "group-hover:shadow-pink-500/10" },
};

export const BENEFITS = [
    {
        icon: Zap,
        color: "from-blue-50 dark:from-blue-500/20 to-transparent dark:to-blue-600/5 border-blue-100 dark:border-blue-500/15",
        iconColor: "text-blue-600 dark:text-blue-400",
        title: "Gain de temps immédiat",
        text: "Toutes les informations au même endroit. Fini les tableurs et les recherches interminables.",
    },
    {
        icon: BarChart3,
        color: "from-emerald-50 dark:from-emerald-500/20 to-transparent dark:to-emerald-600/5 border-emerald-100 dark:border-emerald-500/15",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        title: "Réduction des coûts",
        text: "Suivi précis du carburant et des dépenses. Identifiez les postes de gaspillage rapidement.",
    },
    {
        icon: Globe,
        color: "from-violet-50 dark:from-violet-500/20 to-transparent dark:to-violet-600/5 border-violet-100 dark:border-violet-500/15",
        iconColor: "text-violet-600 dark:text-violet-400",
        title: "Visibilité totale",
        text: "Historique complet et KPIs disponibles en un coup d'œil depuis n'importe quel appareil.",
    },
];

export const TARGETS = [
    { icon: Building2, title: "PME & ETI", desc: "Entreprises avec une flotte de véhicules de service ou de livraison." },
    { icon: Wrench, title: "Sociétés de services", desc: "Techniciens terrain, maintenance, installation & BTP." },
    { icon: Truck, title: "Transport léger", desc: "Coursiers, prestataires logistiques, agences de location." },
    { icon: Activity, title: "Transport Médico-social", desc: "DITEP, IME, SESSAD." },
];

export const CERTIFS = [
    { icon: Shield, text: "Accès par rôles (RBAC)" },
    { icon: Fuel, text: "Hébergé en France" },
    { icon: CheckCircle2, text: "Conforme RGPD" },
    { icon: Lock, text: "HTTPS & chiffrement" },
    { icon: CheckCircle2, text: "Sauvegardes régulières" },
    { icon: CheckCircle2, text: "Architecture multi-tenant" },
];

export const NAV_LINKS = [
    { label: "Accueil", href: "/" },
    { label: "Tarifs", href: "/tarifs" },
    { label: "Contact", href: "/contact" },
    { label: "Confidentialité", href: "/privacy" },
    { label: "Mentions légales", href: "/legal" },
    { label: "FAQ", href: "/faq" },
] as const;

export const FOOTER_LINKS = [
    { label: "Confidentialité", href: "/privacy" },
    { label: "Mentions légales", href: "/legal" },
    { label: "Contact", href: "/contact" },
] as const;
