import { PURPOSES } from "@/lib/enquiry-consent";
export default function FormConsent({purpose}: {purpose: keyof typeof PURPOSES}) {
  return <div className="my-4 rounded-lg border border-slate-300 bg-white p-4 text-sm text-slate-800">
    <label className="flex items-start gap-3"><input required name="consent" type="checkbox" className="mt-1 size-5 shrink-0" />
      <span>I am 18 or older and agree that TravStaytion may use the details I submit to {PURPOSES[purpose]}.</span>
    </label>
    <p className="mt-2">Please leave out passport, payment and medical details. <a className="underline" href="/privacy" target="_blank" rel="noopener">Read the privacy policy (opens a new tab)</a>.</p>
  </div>;
}
