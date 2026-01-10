
"use client";
import React, { useState } from "react";


export default function FeedbackPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center px-4 pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-lg w-full">
          {/* Success Card */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-8 md:p-10 text-center border border-blue-100 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-bl from-yellow-100 to-orange-100 rounded-full translate-x-12 sm:translate-x-16 -translate-y-12 sm:-translate-y-16 opacity-60" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-blue-100 to-teal-100 rounded-full -translate-x-16 sm:-translate-x-20 translate-y-16 sm:translate-y-20 opacity-60" />
            
            <div className="relative z-10">
              {/* Animated Heart Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full animate-pulse opacity-20" />
                <div className="absolute inset-2 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
              </div>
              
              {/* Thank You Message */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-600 mb-2 sm:mb-3">
                We Love Your Feedback! 💝
              </h2>
              <p className="text-lg sm:text-xl text-gray-800 font-semibold mb-1.5 sm:mb-2">
                Thank You So Much!
              </p>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Your feedback means the world to us! It helps us create better travel experiences for everyone.
              </p>
              
              {/* Appreciation Box */}
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-rose-100">
                <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-2 sm:mb-3">
                  <span className="text-lg sm:text-2xl">⭐</span>
                  <span className="text-lg sm:text-2xl">⭐</span>
                  <span className="text-lg sm:text-2xl">⭐</span>
                  <span className="text-lg sm:text-2xl">⭐</span>
                  <span className="text-lg sm:text-2xl">⭐</span>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm">
                  Your voice matters! We read every piece of feedback to improve our services.
                </p>
              </div>
              
              {/* Ready for Next Trip */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 border border-blue-100">
                <p className="text-blue-800 font-medium mb-1.5 sm:mb-2 text-sm sm:text-base">Ready for your next adventure? 🌍</p>
                <p className="text-gray-600 text-xs sm:text-sm">Let us help you plan your dream vacation!</p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </a>
                <a
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base hover:bg-blue-50 transition-all duration-300"
                >
                  Plan a Trip ✈️
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 pt-24 pb-12 sm:pt-28 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-teal-100">
      <div className="relative w-full max-w-2xl motion-safe:animate-fadein">
        {/* Decorative Icon - positioned above card */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-full p-2 shadow-xl border-4 border-blue-200">
            <div className="bg-gradient-to-tr from-blue-500 via-blue-400 to-teal-400 rounded-full p-3 sm:p-4 flex items-center justify-center">
              <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="12" fill="#fff"/>
                <path d="M12 7v6l4 2" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100 p-6 sm:p-10 lg:p-14">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6 sm:mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight">Feedback</h1>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-700 text-center">We value your feedback! Please let us know about your experience with TravStaytion. Your suggestions help us improve our services.</p>
          {error && <div className="mb-4 text-red-600 text-center font-semibold text-sm sm:text-base">{error}</div>}
          <form className="bg-white/80 rounded-xl sm:rounded-2xl shadow-lg p-5 sm:p-8 flex flex-col gap-5 sm:gap-6 border border-blue-100" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900" placeholder="you@email.com" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Feedback</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 resize-none" placeholder="Share your experience or suggestions..." required></textarea>
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 rounded-lg sm:rounded-full shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-60">
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
