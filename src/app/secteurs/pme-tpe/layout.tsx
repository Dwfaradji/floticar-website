import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Logiciel de Gestion de Parc Automobile pour PME et TPE",
    description: "Réduisez votre TCO, optimisez la fiscalité et suivez vos véhicules professionnels avec Floticar, le logiciel de gestion de flotte pensé pour les PME.",
    alternates: {
        canonical: "https://floticar.com/secteurs/pme-tpe"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
