import nodemailer from "nodemailer";

// ─── Transporter ──────────────────────────────────────────────────────────────
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true", // true = port 465, false = STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// ─── Types ────────────────────────────────────────────────────────────────────
export interface MailOptions {
    to: string;
    subject: string;
    html: string;
    replyTo?: string;
}

// ─── sendMail ─────────────────────────────────────────────────────────────────
export async function sendMail({ to, subject, html, replyTo }: MailOptions) {
    await transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject,
        html,
        replyTo,
    });
}
