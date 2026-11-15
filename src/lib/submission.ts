import { NOTICE_VERSION, PURPOSES } from "./enquiry-consent";

export function submissionError(body: Record<string, unknown> | null, optionalEmail = false) {
  if (body?.consent !== true || body.noticeVersion !== NOTICE_VERSION)
    return "Please review the privacy notice and give consent before submitting.";
  if (Object.entries(body).some(([key, value]) =>
    key !== "consent" && key !== "packageId" && (typeof value !== "string" || value.length > 6000)))
    return "Please check the form fields and shorten long messages.";
  if ((!optionalEmail || body.email) && (typeof body.email !== "string" ||
    !/^[^\s@,;<>]+@[^\s@,;<>]+\.[^\s@,;<>]+$/.test(body.email) || body.email.length > 254))
    return "Enter one reply email address.";
  return null;
}
export function consentRecord(purpose: keyof typeof PURPOSES) {
  return `Consent given at ${new Date().toISOString()} under notice ${NOTICE_VERSION} to ${PURPOSES[purpose]}.`;
}

export function escapeEmailText(value: unknown) {
  const entities: Record<string,string> = {"&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;"};
  return String(value ?? "").replace(/[&<>"']/g, character => entities[character]);
}
