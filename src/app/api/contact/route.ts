// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
import { mailTemplate } from "./mailTemplate";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10).max(1500),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Configurar el transporte
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
    return NextResponse.json(
      { ok: false, error: "Error interno. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}
