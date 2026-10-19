import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Ressources sur la Gestion de Flotte Automobile",
    description: "Découvrez nos guides, astuces et actualités juridiques pour optimiser la gestion de votre parc automobile et réduire vos coûts (TCO).",
    alternates: {
        canonical: "https://floticar.com/blog"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
