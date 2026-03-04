import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── Email templates ──────────────────────────────────────────────────────────
function templateNotif(name: string, email: string, message: string): string {
    return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:32px 40px;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">📬 Nouveau message — Floticar</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Nom</span><br/>
                  <span style="color:#1e293b;font-size:15px;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</span><br/>
                  <a href="mailto:${email}" style="color:#2563eb;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Message</span><br/>
                  <p style="color:#1e293b;font-size:15px;line-height:1.6;margin:8px 0 0;white-space:pre-wrap;">${message}</p>
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;">
              <a href="mailto:${email}?subject=Re: Votre demande Floticar"
                 style="display:inline-block;background:#2563eb;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                Répondre à ${name}
              </a>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">Floticar · Plateforme de gestion de flotte</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function templateConfirm(name: string): string {
    return `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /></head>
<body style="margin:0;padding:0;background:#f8fafc;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:40px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.06);">
        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#2563eb,#1d4ed8);padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">Floticar</h1>
            <p style="margin:8px 0 0;color:#bfdbfe;font-size:14px;">Gestion de flotte intelligente</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;text-align:center;">
            <div style="width:64px;height:64px;background:#d1fae5;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px;">✅</div>
            <h2 style="margin:0 0 12px;color:#1e293b;font-size:20px;font-weight:700;">Message bien reçu, ${name} !</h2>
            <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.6;">
              Merci de nous avoir contactés. Notre équipe a bien reçu votre message et vous répondra
              <strong style="color:#1e293b;">sous 24 heures ouvrées</strong>.
            </p>
            <div style="background:#f8fafc;border-radius:12px;padding:20px;text-align:left;">
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">
                En attendant, vous pouvez en savoir plus sur nos solutions de gestion de flotte sur notre site.
              </p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">
              Floticar · Ce message a été envoyé automatiquement suite à votre demande de contact.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── POST /api/contact ────────────────────────────────────────────────────────
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body as {
            name?: string;
            email?: string;
            message?: string;
        };

        // Validation
        if (!name?.trim() || !email?.trim() || !message?.trim()) {
            return NextResponse.json(
                { error: "Tous les champs sont requis." },
                { status: 400 }
            );
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { error: "Adresse email invalide." },
                { status: 400 }
            );
        }

        const contactTo = process.env.CONTACT_TO;
        if (!contactTo) {
            console.error("[contact] CONTACT_TO env variable is not set");
            return NextResponse.json(
                { error: "Configuration serveur manquante." },
                { status: 500 }
            );
        }

        // 1. Notification à l'équipe Floticar
        await sendMail({
            to: contactTo,
            subject: `[Contact] Nouveau message de ${name}`,
            html: templateNotif(name.trim(), email.trim(), message.trim()),
            replyTo: email.trim(),
        });

        // 2. Confirmation à l'expéditeur
        await sendMail({
            to: email.trim(),
            subject: "Nous avons bien reçu votre message — Floticar",
            html: templateConfirm(name.trim()),
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[contact] Erreur envoi email:", error);
        return NextResponse.json(
            { error: "Impossible d'envoyer le message. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
