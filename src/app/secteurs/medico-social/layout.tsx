import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gestion de Flotte Automobile Médico-Social | IME, SESSAD, ESAT",
    description: "Le logiciel de gestion de flotte Floticar pensé pour les structures médico-sociales. Simplifiez le transport de vos usagers, le suivi des véhicules et les plannings.",
    alternates: {
        canonical: "https://floticar.com/secteurs/medico-social"
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
