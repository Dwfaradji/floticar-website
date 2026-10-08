import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer";

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// ─── Email templates ──────────────────────────────────────────────────────────
function templateNotif(name: string, email: string, company: string, fleetSize: string, message: string): string {
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
          <td style="background:linear-gradient(135deg,#059669,#10b981);padding:32px 40px;">
            <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;">🚀 Nouvelle Demande de Démo — Floticar</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Prospect</span><br/>
                  <span style="color:#1e293b;font-size:15px;font-weight:600;">${name}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</span><br/>
                  <a href="mailto:${email}" style="color:#2563eb;font-size:15px;text-decoration:none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Entreprise</span><br/>
                  <span style="color:#1e293b;font-size:15px;">${company}</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid #f1f5f9;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Taille de Flotte</span><br/>
                  <span style="display:inline-block;margin-top:4px;background:#d1fae5;color:#065f46;padding:4px 10px;border-radius:6px;font-size:14px;font-weight:600;">${fleetSize} véhicules</span>
                </td>
              </tr>
              <tr>
                <td style="padding:10px 0;">
                  <span style="color:#64748b;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Besoin / Message</span><br/>
                  <p style="color:#1e293b;font-size:15px;line-height:1.6;margin:8px 0 0;white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;">${message || "Non renseigné"}</p>
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;">
              <a href="mailto:${email}?subject=Suite à votre demande de démo Floticar"
                 style="display:inline-block;background:#059669;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;">
                Contacter ${name}
              </a>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">Floticar · Leads & Démo</p>
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
          <td style="background:linear-gradient(135deg,#059669,#10b981);padding:32px 40px;text-align:center;">
            <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;">Floticar</h1>
            <p style="margin:8px 0 0;color:#d1fae5;font-size:14px;">Gestion de flotte intelligente</p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:40px 40px 32px;text-align:center;">
            <div style="width:64px;height:64px;background:#d1fae5;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-bottom:20px;font-size:28px;">📅</div>
            <h2 style="margin:0 0 12px;color:#1e293b;font-size:20px;font-weight:700;">Demande de démo reçue, ${name} !</h2>
            <p style="margin:0 0 24px;color:#64748b;font-size:15px;line-height:1.6;">
              Merci pour votre intérêt envers Floticar. Notre équipe commerciale vous contactera très rapidement pour fixer un créneau de démonstration adapté à vos disponibilités.
            </p>
            <div style="background:#f8fafc;border-radius:12px;padding:20px;text-align:left;">
              <p style="margin:0;color:#64748b;font-size:13px;line-height:1.6;">
                Lors de cette démo, nous vous montrerons comment la plateforme peut s'adapter spécifiquement à la taille de votre flotte.
              </p>
            </div>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8fafc;padding:16px 40px;text-align:center;">
            <p style="margin:0;color:#94a3b8;font-size:12px;">
              Floticar · Ce message a été envoyé automatiquement suite à votre demande de démo.
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

// ─── POST /api/demo ────────────────────────────────────────────────────────
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, fleetSize, message } = body as {
            name?: string;
            email?: string;
            company?: string;
            fleetSize?: string;
            message?: string;
        };

        // Validation
        if (!name?.trim() || !email?.trim() || !company?.trim() || !fleetSize?.trim()) {
            return NextResponse.json(
                { error: "Tous les champs obligatoires doivent être remplis." },
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
            console.error("[demo] CONTACT_TO env variable is not set");
            return NextResponse.json(
                { error: "Configuration serveur manquante." },
                { status: 500 }
            );
        }

        // 1. Notification à l'équipe Floticar
        await sendMail({
            to: contactTo,
            subject: `[Demo] Nouvelle demande de ${name} (${company})`,
            html: templateNotif(name.trim(), email.trim(), company.trim(), fleetSize.trim(), message?.trim() || ""),
            replyTo: email.trim(),
        });

        // 2. Confirmation à l'expéditeur
        await sendMail({
            to: email.trim(),
            subject: "Votre demande de démo Floticar",
            html: templateConfirm(name.trim()),
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[demo] Erreur envoi email:", error);
        return NextResponse.json(
            { error: "Impossible d'envoyer la demande. Veuillez réessayer." },
            { status: 500 }
        );
    }
}
