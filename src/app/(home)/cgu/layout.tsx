import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Conditions Générales d'Utilisation",
    description: "Consultez les Conditions Générales d'Utilisation (CGU) du logiciel de gestion de flotte automobile Floticar. Transparence et sécurité de vos données.",
    alternates: {
        canonical: "https://floticar.com/cgu"
    },
    robots: {
        index: false,
        follow: true
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
