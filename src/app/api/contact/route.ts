// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);
    console.log("Datos del formulario recibidos:", data);
    // podrías incluir control de frecuencia aquí (ver abajo)

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
      from: `"Formulario Contacto" <${process.env.SMTP_USER}>`,
      to: "diemate@gmail.com",
      subject: `Nuevo mensaje de contacto de ${data.name}`,
      text: `
Nombre: ${data.name}
Email: ${data.email}
Teléfono: ${data.phone || "(no proporcionado)"}
Mensaje:
${data.message}
`,
      replyTo: data.email,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al enviar email:", error);
    return NextResponse.json(
      { ok: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
