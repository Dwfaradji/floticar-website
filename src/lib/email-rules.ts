// Règles de validation d'email "pures" (sans dépendance Node) :
// partagées entre le serveur (email-validator.ts) et les formulaires côté client.

export type EmailValidationResult = { valid: boolean; reason?: string };

// Liste des domaines jetables, de test ou invalides fréquents
const BLACKLISTED_DOMAINS = new Set([
    "test.com", "test.fr", "example.com", "example.fr",
    "yopmail.com", "mailinator.com", "guerrillamail.com",
    "tempmail.com", "10minutemail.com", "ooo.com",
    "abc.com", "xyz.com", "fake.com", "foo.com", "bar.com"
]);

// Fournisseurs d'emails grand public (non professionnels)
const FREE_EMAIL_DOMAINS = new Set([
    "gmail.com", "googlemail.com", "yahoo.com", "yahoo.fr", "ymail.com",
    "hotmail.com", "hotmail.fr", "outlook.com", "outlook.fr", "live.com", "live.fr",
    "msn.com", "icloud.com", "me.com", "mac.com", "aol.com", "orange.fr",
    "wanadoo.fr", "free.fr", "sfr.fr", "neuf.fr", "laposte.net", "bbox.fr",
    "gmx.com", "gmx.fr", "mail.com", "protonmail.com", "proton.me", "zoho.com",
    "yandex.com", "qq.com", "163.com"
]);

// Format basique : une seule "@", pas d'espace, au moins un point dans le domaine
const EMAIL_FORMAT_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const EMAIL_ERROR_MESSAGES = {
    invalidFormat: "Le format de l'adresse email est invalide.",
    disposable: "Veuillez utiliser une véritable adresse email (les adresses de test ou jetables ne sont pas autorisées).",
    notProfessional: "Veuillez utiliser une adresse email professionnelle (les adresses Gmail, Yahoo, Outlook, etc. ne sont pas acceptées).",
    noMailServer: "Le domaine de cet email ne semble pas pouvoir recevoir de courrier.",
    domainNotFound: "Le domaine de l'email n'existe pas.",
} as const;

export const VALID: EmailValidationResult = { valid: true };
export const invalid = (reason: string): EmailValidationResult => ({ valid: false, reason });

/**
 * Vrai si le domaine, ou l'un de ses domaines parents, figure dans la liste.
 * Ex : "mail.yahoo.fr" correspond à "yahoo.fr", mais "mygmail.com" ne correspond pas à "gmail.com".
 */
function isInDomainList(domain: string, list: ReadonlySet<string>): boolean {
    const labels = domain.split(".");
    for (let i = 0; i < labels.length - 1; i++) {
        if (list.has(labels.slice(i).join("."))) return true;
    }
    return false;
}

/** Extrait le domaine (en minuscules) d'une adresse déjà validée par EMAIL_FORMAT_REGEX. */
export function getEmailDomain(email: string): string {
    return email.trim().split("@")[1].toLowerCase();
}

/**
 * Vérifications synchrones : format, domaines jetables, fournisseurs grand public.
 * Utilisable côté client comme côté serveur.
 */
export function checkEmailRules(rawEmail: string): EmailValidationResult {
    const email = rawEmail.trim();
    if (!EMAIL_FORMAT_REGEX.test(email)) return invalid(EMAIL_ERROR_MESSAGES.invalidFormat);

    const domain = getEmailDomain(email);
    if (isInDomainList(domain, BLACKLISTED_DOMAINS)) return invalid(EMAIL_ERROR_MESSAGES.disposable);
    if (isInDomainList(domain, FREE_EMAIL_DOMAINS)) return invalid(EMAIL_ERROR_MESSAGES.notProfessional);
    return VALID;
}
