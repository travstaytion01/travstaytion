import React from "react";

export default function TermsPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 pt-20 pb-16 sm:pt-24 sm:pb-20 bg-gradient-to-br from-blue-50 via-white to-teal-100">
      <div className="relative w-full max-w-3xl motion-safe:animate-fadein">
        {/* Decorative Icon - positioned above card */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-2 shadow-xl border-4 border-blue-200">
            <div className="bg-gradient-to-tr from-blue-500 via-blue-400 to-teal-400 rounded-full p-3 sm:p-4 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fff"/>
                <path d="M7 12h10M12 7v10" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-10 lg:p-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-8 sm:mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight">Terms & Conditions</h1>
          {/* ...existing sections... */}
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>General</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">By booking a trip with TravStaytion, you agree to our terms and conditions. Please read them carefully before making any booking. These terms apply to all bookings made through our website or representatives.</p>
          </section>
          <div className="border-t border-blue-100 my-4 sm:my-6"></div>
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Booking & Payment</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">All bookings are subject to availability. Full or partial payment may be required at the time of booking. Prices are subject to change until the booking is confirmed.</p>
          </section>
          <div className="border-t border-blue-100 my-4 sm:my-6"></div>
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Cancellation Policy</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <ul className="list-disc pl-5 sm:pl-6 text-sm sm:text-base text-gray-700 space-y-1.5">
              <li>Cancellations must be made in writing via email to <a href='mailto:Holidays@travstaytion.com' className='text-blue-600 underline'>Holidays@travstaytion.com</a>.</li>
              <li>Refunds are subject to the terms of the service providers (airlines, hotels, etc.).</li>
              <li>Cancellation charges may apply as per the package and supplier policies.</li>
              <li>No refunds for cancellations made within 7 days of departure or for no-shows.</li>
              <li>Processing fees may be deducted from any eligible refund.</li>
            </ul>
            <p className="text-gray-500 text-xs sm:text-sm mt-2">For detailed cancellation terms, please contact our support team.</p>
          </section>
          <div className="border-t border-blue-100 my-4 sm:my-6"></div>
          <section className="mb-8 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Liability</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">TravStaytion acts as an agent for third-party suppliers. We are not liable for any loss, injury, or damage sustained during your trip. Please ensure you have appropriate travel insurance.</p>
          </section>
          <div className="border-t border-blue-100 my-4 sm:my-6"></div>
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-blue-700 flex items-center gap-2">
              <span>Contact</span>
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
            </h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">For any questions regarding these terms, please contact us at <a href="mailto:Holidays@travstaytion.com" className="text-blue-600 underline">Holidays@travstaytion.com</a>.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
