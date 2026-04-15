// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { mailTemplate } from "./mailTemplate";

// ── Schema ────────────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().max(30).optional(),
  message: z.string().min(10).max(1500),
  // Honeypot: must be empty. Bots that auto-fill all fields will be caught here.
  // Real users never see or interact with this field (it is visually hidden).
  website: z.string().max(0, "Honeypot triggered").optional(),
});

// ── In-memory rate limiter ────────────────────────────────────────────────────
// Limits each IP to RATE_LIMIT submissions per WINDOW_MS.
// Note: this resets on server restart. For persistent limiting, replace with
// an Upstash Redis / Vercel KV store when the app moves to a serverless host.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 3;          // max submissions per window
const WINDOW_MS  = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= RATE_LIMIT) return true;

  entry.count += 1;
  return false;
}

// ── Handler ───────────────────────────────────────────────────────────────────
export async function POST(request: NextRequest) {
  // Rate limiting — use X-Forwarded-For if behind a proxy, fall back to socket
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, error: "Demasiadas solicitudes. Inténtalo más tarde." },
      { status: 429 }
    );
  }

  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Honeypot check — silently accept but do NOT send email
    if (data.website) {
      return NextResponse.json({ ok: true });
    }

    // Configure transport
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `Entrenacondiego <${process.env.SMTP_USER}>`,
      to: "entrenacondiegojimenez@gmail.com",
      subject: `${data.name} te ha contactado desde la web`,
      html: mailTemplate(data),
      replyTo: data.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    // Return a generic message — never expose internal error details
    return NextResponse.json(
      { ok: false, error: "Error interno. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}
