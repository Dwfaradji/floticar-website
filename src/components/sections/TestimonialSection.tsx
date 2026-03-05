"use client";

import { Star } from "lucide-react";
import Section from "../ui/Section";

export default function TestimonialSection() {
    return (
        <Section
            ariaLabel="Témoignage client Floticar"
            className="relative overflow-hidden bg-white/[0.02]"
            maxWidth="max-w-3xl"
        >
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[80px]" />
            </div>

            <div className="text-center">
                <div className="mb-6 flex justify-center gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                </div>

                <blockquote className="mb-8 text-xl leading-relaxed font-medium text-gray-900 sm:text-2xl dark:text-white">
                    &ldquo;Depuis que nous utilisons Floticar, nous avons réduit nos coûts de flotte de
                    <span className="font-extrabold text-blue-600 dark:text-blue-300"> 18&nbsp;%</span> en six mois. La visibilité
                    sur nos dépenses est incomparable.&rdquo;
                </blockquote>

                <div className="inline-flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-500 text-sm font-bold text-white dark:from-blue-500 dark:to-blue-700">
                        JD
                    </div>
                    <div className="text-left text-sm text-gray-600 dark:text-slate-400">
                        <span className="font-semibold text-gray-900 dark:text-white">J. Dupont</span>
                        <br />
                        Responsable de flotte · PME de services (Île-de-France)
                    </div>
                </div>
            </div>
        </Section>
    );
}
