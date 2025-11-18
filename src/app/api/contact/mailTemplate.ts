export const mailTemplate = ({
  name,
  email,
  phone,
  message,
}: {
  name: string;
  email: string;
  phone?: string;
  message: string;
}) => `
 <div style="font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; line-height: 1.5; color: #111827;">
    <h2 style="margin-bottom: 0.5rem;"><span style="color:#78d787;">Entrenacondiego</span></h2>
    <p style="margin-top:0; font-size: 0.9rem; color:#6b7280;">
      Nuevo mensaje desde el formulario de contacto de la web.
    </p>

    <table style="border-collapse: collapse; margin-top: 1rem;">
      <tr>
        <td style="padding: 4px 8px; font-weight:600;">Nombre:</td>
        <td style="padding: 4px 8px;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 4px 8px; font-weight:600;">Email:</td>
        <td style="padding: 4px 8px;">
          <a href="mailto:${email}" style="color:#2563eb; text-decoration:none;">
            ${email}
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 4px 8px; font-weight:600;">Teléfono:</td>
        <td style="padding: 4px 8px;">${phone || "(no proporcionado)"}</td>
      </tr>
    </table>

    <div style="margin-top: 1.5rem;">
      <p style="font-weight:600; margin-bottom:0.25rem;">Mensaje:</p>
      <div style="padding: 0.75rem 1rem; background:#f3f4f6; border-radius: 0.5rem; white-space: pre-line;">
        ${message}
      </div>
    </div>

    <hr style="margin: 1.5rem 0; border: none; border-top: 1px solid #e5e7eb;" />

    <p style="font-size: 0.75rem; color:#9ca3af;">
      Este correo se ha enviado automáticamente desde el formulario de contacto de tu web.
    </p>
  </div>
`;
