
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
      <main className="min-h-screen w-full flex items-center justify-center px-4 py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-100">
        <div className="bg-white/80 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100 p-8 sm:p-12 text-center max-w-md mx-auto">
          <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mb-4">Thank you!</h2>
          <p className="text-sm sm:text-base text-gray-700 mb-8">We appreciate your feedback and will use it to improve our services.</p>
          <a href="/" className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300">Back to Home</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-16 sm:py-20 bg-gradient-to-br from-blue-50 via-white to-teal-100">
      <div className="relative w-full max-w-3xl motion-safe:animate-fadein">
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
