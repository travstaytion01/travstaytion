import PolicyPage from "@/components/PolicyPage";
export const metadata = {title: "About TravStaytion | TravStaytion"};
export default function Page() {
  return <PolicyPage title="About TravStaytion" sections={{
  "Travel planning": "TravStaytion handles enquiries for Dubai, Maldives and Thailand from Ghaziabad, Uttar Pradesh. Compare trip ideas, then request a written quotation for the dates and travellers you have in mind.",
  "Customer care": "Use the email or telephone below for a quotation, booking query, cancellation request or complaint. Include a booking reference if you have one."
}} />;
}
