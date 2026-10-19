import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Questions Fréquentes (FAQ) | Tout savoir sur la plateforme",
    description: "Trouvez toutes les réponses à vos questions sur Floticar : installation, fonctionnalités, prix, sécurité et accompagnement pour votre parc automobile.",
    alternates: {
        canonical: "https://floticar.com/faq"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
