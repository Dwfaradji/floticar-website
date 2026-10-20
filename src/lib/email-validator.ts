import dns from "node:dns/promises";
import { checkEmailRules, getEmailDomain, invalid, VALID, EMAIL_ERROR_MESSAGES } from "./email-rules.ts";
import type { EmailValidationResult } from "./email-rules.ts";

export type { EmailValidationResult };

// Codes renvoyés par dns.resolveMx quand le domaine n'existe pas ou n'a pas de serveur mail
const DOMAIN_NOT_FOUND_CODES = new Set(["ENOTFOUND", "ENODATA"]);

// Au-delà de ce délai, on considère le DNS indisponible et on laisse passer
const DEFAULT_DNS_TIMEOUT_MS = 3000;

/** Rejette avec le code "ETIMEOUT" si la promesse ne se résout pas à temps. */
function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    const timeout = new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(Object.assign(new Error(`DNS timeout after ${ms}ms`), { code: "ETIMEOUT" })), ms);
    });
    return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

/** Vérifie via DNS (MX) que le domaine existe et peut recevoir des emails. */
async function checkMxRecords(domain: string, timeoutMs: number): Promise<EmailValidationResult> {
    try {
        const mxRecords = await withTimeout(dns.resolveMx(domain), timeoutMs);
        return mxRecords?.length ? VALID : invalid(EMAIL_ERROR_MESSAGES.noMailServer);
    } catch (error: unknown) {
        const { code } = error as { code?: string };
        if (code && DOMAIN_NOT_FOUND_CODES.has(code)) return invalid(EMAIL_ERROR_MESSAGES.domainNotFound);

        // En cas d'erreur réseau (timeout, etc.), on laisse passer pour ne pas bloquer un utilisateur légitime par erreur
        console.warn(`[email-validator] Erreur DNS lors de la résolution de ${domain}:`, error);
        return VALID;
    }
}

/**
 * Valide une adresse email professionnelle (côté serveur) : format, domaines jetables,
 * fournisseurs grand public (sous-domaines inclus), puis existence d'un serveur mail (MX).
 */
export async function validateEmailStrict(
    email: string,
    { dnsTimeoutMs = DEFAULT_DNS_TIMEOUT_MS }: { dnsTimeoutMs?: number } = {},
): Promise<EmailValidationResult> {
    const rulesCheck = checkEmailRules(email);
    if (!rulesCheck.valid) return rulesCheck;

    return checkMxRecords(getEmailDomain(email), dnsTimeoutMs);
}
