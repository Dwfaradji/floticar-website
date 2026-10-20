import type { Variants } from "framer-motion";

/** Courbe "ease-out expo" : démarrage vif, arrivée très douce (style Apple / Linear). */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

/** Apparition avec léger flou, plus "premium" que fadeUp. */
export const revealUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE_OUT_EXPO } },
};

/** Conteneur qui orchestre l'apparition décalée de ses enfants. */
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren, delayChildren } },
});
