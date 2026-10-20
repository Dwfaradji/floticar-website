// Tests de caractérisation de validateEmailStrict.
// Lancer avec : node --test src/lib/email-validator.test.mjs
// (Node >= 23 exécute directement le .ts importé ; la résolution DNS est mockée.)
import { test, mock, afterEach } from "node:test";
import assert from "node:assert/strict";
import dns from "node:dns/promises";
import { validateEmailStrict } from "./email-validator.ts";

const mockMx = (impl) => mock.method(dns, "resolveMx", impl);
const dnsError = (code) => Object.assign(new Error(code), { code });

afterEach(() => mock.restoreAll());

test("rejette un format invalide", async () => {
    for (const email of ["", "jean", "jean@", "jean@domaine", "a b@x.com", "a@b@c.com"]) {
        assert.deepEqual(await validateEmailStrict(email), {
            valid: false,
            reason: "Le format de l'adresse email est invalide.",
        });
    }
});

test("rejette les domaines jetables / de test", async () => {
    const res = await validateEmailStrict("jean@yopmail.com");
    assert.equal(res.valid, false);
    assert.match(res.reason, /jetables/);
});

test("rejette les fournisseurs grand public (insensible à la casse)", async () => {
    for (const email of ["jean@gmail.com", "jean@GMAIL.COM", "jean@orange.fr", "jean@proton.me"]) {
        const res = await validateEmailStrict(email);
        assert.equal(res.valid, false, email);
        assert.match(res.reason, /professionnelle/);
    }
});

test("rejette un domaine sans enregistrement MX", async () => {
    mockMx(async () => []);
    assert.deepEqual(await validateEmailStrict("jean@entreprise.com"), {
        valid: false,
        reason: "Le domaine de cet email ne semble pas pouvoir recevoir de courrier.",
    });
});

test("rejette un domaine inexistant (ENOTFOUND / ENODATA)", async () => {
    for (const code of ["ENOTFOUND", "ENODATA"]) {
        mockMx(async () => { throw dnsError(code); });
        assert.deepEqual(await validateEmailStrict("jean@entreprise.com"), {
            valid: false,
            reason: "Le domaine de l'email n'existe pas.",
        });
        mock.restoreAll();
    }
});

test("laisse passer en cas d'erreur DNS réseau (timeout, etc.)", async () => {
    mockMx(async () => { throw dnsError("ETIMEOUT"); });
    const warn = mock.method(console, "warn", () => {});
    assert.deepEqual(await validateEmailStrict("jean@entreprise.com"), { valid: true });
    assert.equal(warn.mock.callCount(), 1);
});

test("accepte une adresse pro avec MX valide et interroge le domaine en minuscules", async () => {
    const resolve = mockMx(async () => [{ exchange: "mx.entreprise.com", priority: 10 }]);
    assert.deepEqual(await validateEmailStrict("Jean@Entreprise.COM"), { valid: true });
    assert.deepEqual(resolve.mock.calls[0].arguments, ["entreprise.com"]);
});

// ─── Nouveaux comportements ──────────────────────────────────────────────────

test("rejette les sous-domaines des fournisseurs grand public et jetables", async () => {
    const pro = await validateEmailStrict("jean@mail.yahoo.fr");
    assert.equal(pro.valid, false);
    assert.match(pro.reason, /professionnelle/);

    const jetable = await validateEmailStrict("jean@x.yopmail.com");
    assert.equal(jetable.valid, false);
    assert.match(jetable.reason, /jetables/);
});

test("n'assimile pas un domaine pro qui contient un nom de fournisseur", async () => {
    mockMx(async () => [{ exchange: "mx", priority: 10 }]);
    assert.deepEqual(await validateEmailStrict("jean@mygmail.com"), { valid: true });
    assert.deepEqual(await validateEmailStrict("jean@gmail.com.entreprise.fr"), { valid: true });
});

test("ignore les espaces autour de l'adresse", async () => {
    const resolve = mockMx(async () => [{ exchange: "mx", priority: 10 }]);
    assert.deepEqual(await validateEmailStrict("  jean@entreprise.com "), { valid: true });
    assert.deepEqual(resolve.mock.calls[0].arguments, ["entreprise.com"]);
});

test("laisse passer si la résolution DNS dépasse le délai", async () => {
    mockMx(() => new Promise(() => {})); // ne répond jamais
    const warn = mock.method(console, "warn", () => {});
    const start = Date.now();
    assert.deepEqual(await validateEmailStrict("jean@entreprise.com", { dnsTimeoutMs: 50 }), { valid: true });
    assert.ok(Date.now() - start < 1000);
    assert.equal(warn.mock.callCount(), 1);
});
