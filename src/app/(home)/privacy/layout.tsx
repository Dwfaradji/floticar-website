import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Politique de Confidentialité | Floticar",
    description: "Découvrez comment Floticar protège et traite vos données personnelles. La sécurité des informations de votre flotte automobile est notre priorité.",
    alternates: {
        canonical: "https://floticar.com/privacy"
    },
    robots: {
        index: false,
        follow: true
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
