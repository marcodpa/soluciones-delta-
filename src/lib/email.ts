export const DELTA_EMAIL = "delta@soluciones-delta.com";

export function mailtoUrl(subject = "", body = "") {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${DELTA_EMAIL}${query ? `?${query}` : ""}`;
}

// Opens Gmail on the web with the message ready, like wa.me does for WhatsApp.
export function gmailUrl(subject = "", body = "") {
  const params = new URLSearchParams({ view: "cm", fs: "1", to: DELTA_EMAIL });
  if (subject) params.set("su", subject);
  if (body) params.set("body", body);
  return `https://mail.google.com/mail/?${params.toString().replace(/\+/g, "%20")}`;
}

// Phones always have a mail app; computers often don't, so they get Gmail on the web.
export function isTouchDevice() {
  return typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches;
}

export function openEmail(subject = "", body = "") {
  if (isTouchDevice()) window.location.href = mailtoUrl(subject, body);
  else window.open(gmailUrl(subject, body), "_blank", "noopener,noreferrer");
}
