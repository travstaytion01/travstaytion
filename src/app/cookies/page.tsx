import PolicyPage from "@/components/PolicyPage";
export const metadata = {title: "Cookie policy | TravStaytion"};
export default function Page() {
  return <PolicyPage title="Cookie policy" sections={{
  "Public website": "The public travel pages do not set advertising or analytics cookies or use browser storage to profile visitors. Enquiry form entries are held in page memory until submitted. Images, fonts and the background film are served by the site.",
  "External services": "Social media, phone and WhatsApp links open only when selected. The destination service may then process your visit under its own policy. Hosting infrastructure can log requests even without cookies.",
  "Staff access and browser settings": "The separate staff CRM uses an authentication cookie for signed-in staff. You can inspect or clear site data in your browser settings. Clearing the staff session cookie signs you out."
}} />;
}
