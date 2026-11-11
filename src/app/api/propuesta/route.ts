import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Vercel rejects request bodies above 4.5 MB, so attachments stay under that.
const MAX_FILES = 5;
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ALLOWED_EXTENSIONS = /\.(pdf|docx?|xlsx?|pptx?|jpe?g|png|webp|txt|csv)$/i;
const FIELD_LIMITS = { name: 120, company: 160, email: 180, phone: 30, website: 200, subject: 160, message: 5000 } as const;
type Field = keyof typeof FIELD_LIMITS;

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, ch => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]!);
}

function fail(error: string, status = 400) {
  return Response.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return fail("invalid");
  }

  // Honeypot: real visitors never see or fill this field.
  if (String(data.get("empresa_web") ?? "").trim()) return Response.json({ ok: true });

  const fields = {} as Record<Field, string>;
  for (const key of Object.keys(FIELD_LIMITS) as Field[]) {
    const value = String(data.get(key) ?? "").trim();
    if (value.length > FIELD_LIMITS[key]) return fail("too_long");
    fields[key] = value;
  }
  if (!fields.name || !fields.subject || !fields.message) return fail("missing");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) return fail("email");
  if (!/^\+?[0-9\s()\-]{7,30}$/.test(fields.phone)) return fail("phone");
  if (fields.website) {
    if (!/^https?:\/\//i.test(fields.website)) fields.website = `https://${fields.website}`;
    try {
      const url = new URL(fields.website);
      if (!url.hostname.includes(".")) return fail("website");
    } catch {
      return fail("website");
    }
  }

  const files = data.getAll("files").filter((item): item is File => item instanceof File && item.size > 0);
  if (files.length > MAX_FILES) return fail("files_count");
  if (files.reduce((sum, file) => sum + file.size, 0) > MAX_TOTAL_BYTES) return fail("files_size");
  if (files.some(file => !ALLOWED_EXTENSIONS.test(file.name))) return fail("files_type");

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return fail("not_configured", 503);
  const to = process.env.CONTACT_TO || "delta@soluciones-delta.com";

  const rows: [string, string][] = [
    ["Nombre", fields.name],
    ["Empresa", fields.company || "—"],
    ["Correo", fields.email],
    ["Teléfono", fields.phone],
    ["Página web", fields.website || "—"],
    ["Asunto", fields.subject],
  ];
  const text = `${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}\n\nMensaje:\n${fields.message}\n\nAdjuntos: ${files.length ? files.map(f => f.name).join(", ") : "ninguno"}`;
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#1d2a20">
<h2 style="color:#16753a;margin:0 0 12px">Nueva propuesta desde soluciones-delta.com</h2>
<table cellpadding="6" style="border-collapse:collapse">${rows.map(([k, v]) => `<tr><td style="color:#53645a;vertical-align:top"><b>${k}</b></td><td>${k === "Página web" && v !== "—" ? `<a href="${escapeHtml(v)}">${escapeHtml(v)}</a>` : escapeHtml(v)}</td></tr>`).join("")}</table>
<h3 style="margin:18px 0 6px">Mensaje</h3><p style="white-space:pre-wrap;margin:0">${escapeHtml(fields.message)}</p>
<p style="color:#53645a;margin-top:18px">Adjuntos: ${files.length ? files.map(f => escapeHtml(f.name)).join(", ") : "ninguno"}</p></div>`;

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT || 465),
    secure: Number(process.env.SMTP_PORT || 465) === 465,
    auth: { user, pass },
  });

  try {
    await transport.sendMail({
      from: { name: "Web Soluciones Delta", address: user },
      to,
      replyTo: { name: fields.name, address: fields.email },
      subject: `Propuesta web: ${fields.subject.replace(/[\r\n]+/g, " ")} — ${fields.name.replace(/[\r\n]+/g, " ")}`,
      text,
      html,
      attachments: await Promise.all(files.map(async file => ({ filename: file.name, content: Buffer.from(await file.arrayBuffer()), contentType: file.type || undefined }))),
    });
  } catch (error) {
    console.error("propuesta: send failed", error instanceof Error ? error.message : error);
    return fail("send", 502);
  }

  return Response.json({ ok: true });
}
