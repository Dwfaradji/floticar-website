"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    className="fixed bottom-4 left-4 right-4 z-50 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-gray-200 md:bottom-8 md:left-auto md:right-8 md:max-w-sm dark:bg-gray-900 dark:ring-gray-800"
                >
                    <h3 className="mb-2 font-bold text-gray-900 dark:text-white">🍪 Gestion des cookies</h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        En poursuivant votre navigation sur Floticar, vous acceptez le dépôt de cookies destinés à mesurer l&apos;audience (Google Analytics) pour améliorer notre service.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                        <button
                            onClick={handleAccept}
                            className="flex-1 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                        >
                            Compris, j&apos;accepte
                        </button>
                        <a href="/privacy" className="text-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline dark:text-gray-400 dark:hover:text-white">
                            En savoir plus
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
