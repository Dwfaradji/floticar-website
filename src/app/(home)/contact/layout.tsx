import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contactez notre équipe | Support & Démonstration",
    description: "Besoin de renseignements sur notre logiciel de gestion de flotte ? Contactez l'équipe Floticar. Réponse rapide sous 24h, accompagnement personnalisé.",
    alternates: {
        canonical: "https://floticar.com/contact"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
