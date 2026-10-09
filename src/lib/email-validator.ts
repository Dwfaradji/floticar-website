import dns from "node:dns/promises";

// Liste des domaines jetables, de test ou invalides fréquents
const BLACKLISTED_DOMAINS = new Set([
    "test.com", "test.fr", "example.com", "example.fr", 
    "yopmail.com", "mailinator.com", "guerrillamail.com", 
    "tempmail.com", "10minutemail.com", "ooo.com", 
    "abc.com", "xyz.com", "fake.com", "foo.com", "bar.com"
]);

export async function validateEmailStrict(email: string): Promise<{ valid: boolean; reason?: string }> {
    // 1. Vérification du format Regex (basique)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return { valid: false, reason: "Le format de l'adresse email est invalide." };
    }

    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) {
         return { valid: false, reason: "Le domaine de l'email est introuvable." };
    }

    // 2. Vérification contre les domaines jetables/test
    if (BLACKLISTED_DOMAINS.has(domain)) {
        return { valid: false, reason: "Veuillez utiliser une véritable adresse email (les adresses de test ou jetables ne sont pas autorisées)." };
    }

    // 3. Vérification des enregistrements DNS (MX records) pour s'assurer que le domaine existe et reçoit des emails
    try {
        const mxRecords = await dns.resolveMx(domain);
        if (!mxRecords || mxRecords.length === 0) {
            return { valid: false, reason: "Le domaine de cet email ne semble pas pouvoir recevoir de courrier." };
        }
    } catch (error: unknown) {
        // dns.resolveMx renvoie une erreur (ENOTFOUND ou ENODATA) si le domaine n'existe pas ou n'a pas de serveur mail
        const err = error as { code?: string };
        if (err.code === 'ENOTFOUND' || err.code === 'ENODATA') {
            return { valid: false, reason: "Le domaine de l'email n'existe pas." };
        }
        // En cas d'erreur de timeout réseau du serveur, on laisse passer pour ne pas bloquer un utilisateur légitime par erreur
        console.warn(`[email-validator] Erreur DNS lors de la résolution de ${domain}:`, error);
    }

    return { valid: true };
}
