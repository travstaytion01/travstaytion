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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center justify-center px-4 py-12">
        <div className="max-w-lg w-full">
          {/* Animated Success Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-10 text-center border border-blue-100 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full -translate-x-16 -translate-y-16 opacity-50" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-teal-100 to-blue-100 rounded-full translate-x-20 translate-y-20 opacity-50" />
            
            <div className="relative z-10">
              {/* Animated Checkmark */}
              <div className="w-24 h-24 mx-auto mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-pulse opacity-20" />
                <div className="absolute inset-2 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              
              {/* Success Message */}
              <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 mb-3">
                Awesome! 🎉
              </h2>
              <p className="text-xl text-gray-800 font-semibold mb-2">
                Your Trip Request is Confirmed!
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;ve received your travel quote request. Our expert travel planners are already working on crafting the perfect itinerary for you!
              </p>
              
              {/* What's Next Box */}
              <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 mb-8 border border-blue-100">
                <h3 className="font-bold text-blue-800 mb-3 flex items-center justify-center gap-2">
                  <span className="text-xl">📧</span> What happens next?
                </h3>
                <ul className="text-left text-gray-700 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Check your email for confirmation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Our team will review your requirements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>Receive a personalized quote within 24 hours</span>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a href="tel:+919999959915" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <span className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </span>
                  <span className="font-medium">+91 99999 59915</span>
                </a>
                <a href="https://wa.me/919999959915" className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors">
                  <span className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </span>
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </a>
                <a
                  href="/destinations"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 border-2 border-blue-600 px-8 py-3.5 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300"
                >
                  Explore More ✈️
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[35vh] sm:h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80"
            alt="Travel planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-teal-900/60" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium mb-4">
            📝 Free Personalized Quote
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            Request Your Free Quote
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
            Tell us about your dream vacation and we&apos;ll create a personalized package just for you.
          </p>
        </div>
      </section>

      {/* Form Section */}
      {error && (
        <div className="max-w-lg mx-auto mt-4 sm:mt-6 mb-2 text-center text-red-600 font-semibold bg-red-50 border border-red-200 rounded-lg p-2 mx-4 sm:mx-auto text-sm sm:text-base">{error}</div>
      )}
      <section className="py-10 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8 md:p-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Personal Information */}
              <div className="sm:col-span-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold">1</span>
                  Personal Information
                </h3>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="john@example.com"
                />
              </div>


              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Preferred Contact Method</label>
                <div className="relative">
                  <select
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none pr-10 text-sm sm:text-base"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Departure Date *
                  </span>
                </label>
                <div className="date-input-wrapper">
                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Return Date
                  </span>
                </label>
                <div className="date-input-wrapper">
                  <input
                    type="date"
                    name="returnDate"
                    value={formData.returnDate}
                    onChange={handleChange}
                    min={formData.travelDate || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 hover:border-blue-400"
                  />
                </div>
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
