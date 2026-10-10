import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Logiciel de Suivi d'Entretien de Flotte Automobile | Floticar",
    description: "Anticipez les révisions, contrôles techniques et réparations de vos véhicules professionnels. Floticar automatise le suivi d'entretien de votre parc automobile.",
    alternates: {
        canonical: "https://floticar.com/fonctionnalites/suivi-entretien"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
