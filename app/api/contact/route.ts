import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = (await request.json()) as Record<string, string>;
  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
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
  });

  if (!response.ok) return NextResponse.json({ error: "No fue posible enviar el mensaje." }, { status: 502 });
  return NextResponse.json({ ok: true });
}
