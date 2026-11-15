import PolicyPage from "@/components/PolicyPage";
export const metadata = {title: "Privacy policy | TravStaytion"};
export default function Page() {
  return <PolicyPage title="Privacy policy" sections={{
  "What you share": "The enquiry forms ask for a reply email and the information needed to answer your request. Travel preferences, dates, group sizes and phone numbers help tailor a quotation when supplied. You can send feedback without contact details. Only adults should submit forms. For children travelling, give counts only.",
  "How your request is used": "We use these details to prepare and follow up on the enquiry you choose, answer a message, or review feedback. The form consent covers that purpose only. Email and database providers process submissions for TravStaytion. Staff may use the CRM to prepare a quotation. The hosting provider may process IP addresses and technical request data to deliver the site.",
  "Bookings and suppliers": "If you proceed to booking, ask which travel suppliers will receive your information and what they require. Keep identity documents and payment information out of the website forms.",
  "Keeping and deleting information": "Enquiries may exist in the enquiry database, staff email and quotation records. To request deletion, identify the enquiry by its date and reply email. Booking, tax or dispute records may need to be retained where required by law.",
  "Your choices and complaints": "Email the contact below to withdraw consent, request access, correction or erasure, nominate someone to exercise applicable rights, or raise a grievance. Include enough to locate your request. We may ask you to verify your identity. Withdrawal may prevent further handling of your enquiry."
}} />;
}
