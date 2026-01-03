import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-2 py-10 bg-gradient-to-br from-blue-50 via-white to-teal-100">
      <div className="relative w-full max-w-3xl motion-safe:animate-fadein">
        {/* Glow behind icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-20 z-0">
          <div className="w-40 h-40 rounded-full bg-gradient-to-tr from-blue-300/40 via-teal-200/30 to-white/0 blur-2xl opacity-80 animate-pulse"></div>
        </div>
        <div className="bg-white/60 backdrop-blur-xl bg-clip-padding rounded-3xl shadow-2xl border border-blue-100 p-8 sm:p-16 relative overflow-hidden">
          {/* Decorative Icon - animated */}
          <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10 motion-safe:animate-float">
            <div className="bg-white rounded-full p-2 shadow-xl border-4 border-blue-200">
              <div className="bg-gradient-to-tr from-blue-500 via-blue-400 to-teal-400 rounded-full p-3 flex items-center justify-center">
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M7 12h10M12 7v10" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-10 mt-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight drop-shadow-lg">Terms & Conditions</h1>
          {/* ...existing sections... */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>General</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">By booking a trip with TravStaytion, you agree to our terms and conditions. Please read them carefully before making any booking. These terms apply to all bookings made through our website or representatives.</p>
          </section>
          <div className="border-t border-blue-100 my-6"></div>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Booking & Payment</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">All bookings are subject to availability. Full or partial payment may be required at the time of booking. Prices are subject to change until the booking is confirmed.</p>
          </section>
          <div className="border-t border-blue-100 my-6"></div>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Cancellation Policy</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <ul className="list-disc pl-6 text-gray-700 mb-2 space-y-1">
              <li>Cancellations must be made in writing via email to <a href='mailto:Holidays@travstaytion.com' className='text-blue-600 underline'>Holidays@travstaytion.com</a>.</li>
              <li>Refunds are subject to the terms of the service providers (airlines, hotels, etc.).</li>
              <li>Cancellation charges may apply as per the package and supplier policies.</li>
              <li>No refunds for cancellations made within 7 days of departure or for no-shows.</li>
              <li>Processing fees may be deducted from any eligible refund.</li>
            </ul>
            <p className="text-gray-500 text-sm mt-2">For detailed cancellation terms, please contact our support team.</p>
          </section>
          <div className="border-t border-blue-100 my-6"></div>
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Liability</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="mb-4 text-gray-700 leading-relaxed">TravStaytion acts as an agent for third-party suppliers. We are not liable for any loss, injury, or damage sustained during your trip. Please ensure you have appropriate travel insurance.</p>
          </section>
          <div className="border-t border-blue-100 my-6"></div>
          <section>
            <h2 className="text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Contact</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-gray-700 leading-relaxed">For any questions regarding these terms, please contact us at <a href="mailto:Holidays@travstaytion.com" className="text-blue-600 underline">Holidays@travstaytion.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
