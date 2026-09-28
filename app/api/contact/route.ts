import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Record<string, string>;
    const serviceId = process.env.EMAILJS_SERVICE_ID?.trim();
    const templateId = process.env.EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = process.env.EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS: faltan variables de entorno en Vercel.");
      return NextResponse.json({ error: "El servicio de contacto no está configurado." }, { status: 500 });
    }

    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.from_name,
          from_email: data.from_email,
          subject: data.subject,
          message: data.message,
        },
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const details = await response.text();
      console.error("EmailJS rechazó el envío:", response.status, details);
      return NextResponse.json({ error: "EmailJS rechazó el envío. Revisa la configuración del servicio y plantilla." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error en la ruta de contacto:", error);
    return NextResponse.json({ error: "No fue posible conectar con el servicio de correo." }, { status: 502 });
  }
}
