"use client";
import { useState } from "react";
import type { Metadata } from "next";

const destinations = [
  "Singapore",
  "Bali, Indonesia",
  "Maldives",
  "Thailand",
  "Japan",
  "Dubai, UAE",
  "Goa, India",
  "Sikkim, India",
  "Rajasthan, India",
  "Other",
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    contactMethod: "email",
    destination: "",
    adults: "1",
    children: "0",
    infants: "0",
    travelDate: "",
    returnDate: "",
    budget: "",
    tripType: "",
    accommodation: "",
    additionalDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Only allow non-negative integers for traveler fields
    if (["adults", "children", "infants"].includes(name)) {
      if (!/^\d*$/.test(value)) return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const [error, setError] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    // Map frontend fields to backend expected fields
    const payload = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      destination: formData.destination,
      details: `Contact Method: ${formData.contactMethod}\nAdults: ${formData.adults}\nChildren: ${formData.children}\nInfants: ${formData.infants}\nTravel Date: ${formData.travelDate}\nReturn Date: ${formData.returnDate}\nBudget: ${formData.budget}\nTrip Type: ${formData.tripType}\nAccommodation: ${formData.accommodation}\nAdditional Details: ${formData.additionalDetails}`,
    };
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-8">
            Your quote request has been submitted successfully. Our travel experts will get back to you within 24 hours with a personalized travel package.
          </p>
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Request Your Free Quote
          </h1>
          <p className="text-xl text-gray-200">
            Tell us about your dream vacation and we&apos;ll create a personalized package just for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      {error && (
        <div className="max-w-lg mx-auto mt-6 mb-2 text-center text-red-600 font-semibold bg-red-50 border border-red-200 rounded-lg p-2">{error}</div>
      )}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Personal Information
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>


              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <div className="relative">
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10"
                    aria-label="Preferred Contact Method"
                  >
                    <option value="email">Email</option>
                    <option value="phone">Phone Call</option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="sms">SMS</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Travelers <span className="text-xs text-gray-400">(specify each group)</span></label>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Adults <span className="text-[10px]">(12+)</span></label>
                    <input
                      type="number"
                      name="adults"
                      min="1"
                      step="1"
                      value={formData.adults.toString()}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center appearance-none"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Children <span className="text-[10px]">(2-12)</span></label>
                    <input
                      type="number"
                      name="children"
                      min="0"
                      step="1"
                      value={formData.children.toString()}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center appearance-none"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Infants <span className="text-[10px]">(0-2)</span></label>
                    <input
                      type="number"
                      name="infants"
                      min="0"
                      step="1"
                      value={formData.infants.toString()}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-center appearance-none"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label className="block text-xs font-medium text-gray-500 mb-1">Total</label>
                    <input
                      type="number"
                      value={(
                        parseInt(formData.adults || "0", 10) +
                        parseInt(formData.children || "0", 10) +
                        parseInt(formData.infants || "0", 10)
                      ).toString()}
                      readOnly
                      tabIndex={-1}
                      className="w-full px-3 py-2 border border-gray-200 bg-gray-50 rounded-lg text-center text-gray-700 font-semibold cursor-not-allowed appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Trip Details */}
              <div className="md:col-span-2 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Trip Details
                </h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Destination *</label>
                <div className="relative">
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10"
                    aria-label="Destination"
                  >
                    <option value="">Select a destination</option>
                    {destinations.map((dest) => (
                      <option key={dest} value={dest}>{dest}</option>
                    ))}
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Trip Type</label>
                <div className="relative">
                  <select
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10"
                    aria-label="Trip Type"
                  >
                    <option value="">Select trip type</option>
                    <option value="honeymoon">Honeymoon</option>
                    <option value="family">Family Vacation</option>
                    <option value="adventure">Adventure Travel</option>
                    <option value="luxury">Luxury Escape</option>
                    <option value="business">Business + Leisure</option>
                    <option value="solo">Solo Travel</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Departure Date *</label>
                <input
                  type="date"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget (per person)</label>
                <div className="relative">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10"
                    aria-label="Budget"
                  >
                    <option value="">Select budget range</option>
                    <option value="economy">Economy (₹40,000 - ₹80,000)</option>
                    <option value="standard">Standard (₹80,000 - ₹1,50,000)</option>
                    <option value="premium">Premium (₹1,50,000 - ₹2,50,000)</option>
                    <option value="luxury">Luxury (₹2,50,000+)</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Accommodation Preference</label>
                <div className="relative">
                  <select
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10"
                    aria-label="Accommodation Preference"
                  >
                    <option value="">Select preference</option>
                    <option value="3star">3-Star Hotels</option>
                    <option value="4star">4-Star Hotels</option>
                    <option value="5star">5-Star Luxury</option>
                    <option value="boutique">Boutique Hotels</option>
                    <option value="resort">Beach Resorts</option>
                    <option value="villa">Private Villas</option>
                  </select>
                  <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </div>
              </div>

              {/* Additional Details */}
              <div className="md:col-span-2 mt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Additional Information
                </h3>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests or Questions</label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about any special requirements, activities you'd like to include, dietary restrictions, etc."
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    "Submit Quote Request"
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  We&apos;ll get back to you within 24 hours with a personalized travel package.
                </p>
              </div>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "🔒", text: "Secure & Private" },
              { icon: "⚡", text: "Quick Response" },
              { icon: "💰", text: "Best Price Guarantee" },
              { icon: "🌟", text: "5-Star Service" },
            ].map((badge) => (
              <div key={badge.text} className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-2xl">{badge.icon}</span>
                <p className="text-sm font-medium text-gray-700 mt-2">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
