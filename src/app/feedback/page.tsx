
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
      <main className="min-h-screen w-full flex items-center justify-center px-2 py-10 bg-gradient-to-br from-blue-50 via-white to-teal-100">
        <div className="bg-white/80 rounded-3xl shadow-2xl border border-blue-100 p-12 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Thank you for your feedback!</h2>
          <p className="text-gray-700 mb-8">We appreciate your input and will use it to improve our services.</p>
          <a href="/" className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300">Back to Home</a>
        </div>
      </main>
    );
  }

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
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M12 7v6l4 2" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-extrabold mb-10 mt-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 text-center tracking-tight drop-shadow-lg">Feedback</h1>
          <p className="mb-8 text-gray-700 text-center">We value your feedback! Please let us know about your experience with TravStaytion. Your suggestions help us improve our services.</p>
          {error && <div className="mb-4 text-red-600 text-center font-semibold">{error}</div>}
          <form className="bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col gap-8 border border-blue-100" onSubmit={handleSubmit}>
            <div className="relative">
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="peer w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent placeholder-transparent" placeholder="Your Name" required />
              <label htmlFor="name" className="absolute left-4 top-3 text-gray-500 font-medium transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 rounded">Name</label>
            </div>
            <div className="relative">
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="peer w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent placeholder-transparent" placeholder="you@email.com" required />
              <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 font-medium transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 rounded">Email</label>
            </div>
            <div className="relative">
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="peer w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent placeholder-transparent resize-none" placeholder="Share your experience or suggestions..." required></textarea>
              <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 font-medium transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-gray-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-blue-600 bg-white px-1 rounded">Feedback</label>
            </div>
            <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-xl hover:brightness-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 motion-safe:animate-glow disabled:opacity-60">
              {isSubmitting ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
