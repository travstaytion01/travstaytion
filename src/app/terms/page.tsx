import PolicyPage from "@/components/PolicyPage";
export const metadata = {title: "Terms and conditions | TravStaytion"};
export default function Page() {
  return <PolicyPage title="Terms and conditions" sections={{
  "Using the website": "TravStaytion presents itinerary ideas for Dubai, Maldives and Thailand. The enquiry forms are for adults requesting travel information. An enquiry is not a reservation or a payment.",
  "Quotes and confirmation": "Travel dates, room category, transfers, taxes, availability, inclusions and exclusions must be confirmed in your written quotation. Illustrative destination images may be AI-generated and do not identify a contracted hotel or room. Review the total price, payment schedule and supplier terms before accepting.",
  "Changes and cancellations": "Refer to the refund and cancellation policy and the written terms for your booking. Contact us promptly if a supplier changes a service. These terms preserve rights and remedies available under applicable consumer law."
}} />;
}
