import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Mentions Légales",
    description: "Retrouvez les mentions légales du site Floticar, éditeur de solution SaaS pour la gestion de flotte automobile des entreprises et PME.",
    alternates: {
        canonical: "https://floticar.com/legal"
    },
    robots: {
        index: false,
        follow: true
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
