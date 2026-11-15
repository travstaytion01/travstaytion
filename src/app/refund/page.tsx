import PolicyPage from "@/components/PolicyPage";
export const metadata = {title: "Refund and cancellation policy | TravStaytion"};
export default function Page() {
  return <PolicyPage title="Refund and cancellation policy" sections={{
  "Before you book": "Request the cancellation deadline, supplier penalties, service fees and payment schedule in writing for your specific trip. A website enquiry itself involves no payment. The written booking terms and applicable consumer law govern a confirmed reservation.",
  "Request a cancellation": "Email the booking reference, lead traveller name and the services or dates you wish to cancel. Ask for written acknowledgement and an itemised calculation before accepting a change. Do not email card or bank credentials.",
  "Refund amounts and timing": "Eligibility depends on the service, cancellation date, supplier terms disclosed at booking and applicable law. Ask for the amount paid, each deduction, refund method and expected processing date. For a supplier cancellation or a disputed deduction, contact TravStaytion with the correspondence so the booking can be reviewed."
}} />;
}
