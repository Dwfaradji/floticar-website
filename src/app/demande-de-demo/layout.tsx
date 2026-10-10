import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Demander une Démo Floticar | Logiciel de Gestion de Flotte",
    description: "Découvrez comment Floticar peut réduire vos coûts opérationnels et simplifier la gestion de votre parc automobile. Réservez votre démonstration personnalisée.",
    alternates: {
        canonical: "https://floticar.com/demande-de-demo"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
