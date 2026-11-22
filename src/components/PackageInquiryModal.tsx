"use client";
import FormConsent from "@/components/FormConsent";
import { NOTICE_VERSION } from "@/lib/enquiry-consent";
import { getDubaiPackageMedia } from "@/lib/dubai-media";
import type { DubaiItinerary } from "@/lib/dubai-itineraries";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

interface PackageInquiryModalProps {
  onClose: () => void;
  packageData: DubaiItinerary;
}

export default function PackageInquiryModal({ onClose, packageData }: PackageInquiryModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "2",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const dialog = modalRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const consent = new FormData(e.currentTarget as HTMLFormElement).has("consent");
    setIsSubmitting(true);
    setError("");

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      packageName: packageData.name,
      packageId: packageData.enquiryId,
      travelDate: formData.travelDate,
      travelers: formData.travelers,
      message: formData.message,
    };

    try {
      const res = await fetch("/api/package-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent, noticeVersion: NOTICE_VERSION }),
      });
      if (res.ok) {
        setIsSubmitted(true);
      } else {
        const data = await res.json();
        setError(data.error || "Something went wrong.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <dialog aria-label="Dubai package enquiry" onCancel={onClose} ref={modalRef}
        className="fixed inset-0 m-auto backdrop:bg-black/50 bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadein"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Package Header */}
        <div className="relative h-48 overflow-hidden rounded-t-3xl">
          <Image
            src={getDubaiPackageMedia(packageData.id).photo}
            alt=""
            fill sizes="(max-width: 672px) 100vw, 672px"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl font-bold text-white">{packageData.name}</h2>
            <p className="text-gray-200 text-sm mt-1">
              {packageData.days.length - 1} nights / {packageData.days.length} days · {packageData.hotel} hotel
            </p>
          </div>
        </div>

        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Submitted!</h3>
              <p className="text-gray-600 mb-6">
                Our travel expert will contact you with a customized quote.
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <p className="mb-6 text-sm text-gray-700">Tell us your travel dates so we can confirm hotel availability and prepare a written quote.</p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div role="alert" className="text-red-600 text-center bg-red-50 border border-red-200 rounded-lg p-2">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name (optional)</label>
                    <input id="name"
                      type="text"
                      name="name" autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}

                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Your preferred name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input id="email"
                      type="email"
                      name="email" autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Where should we send your quote?"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                    <input id="phone"
                      type="tel"
                      name="phone" autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}

                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                      placeholder="Include your country code"
                    />
                  </div>

                  <div>
                    <label htmlFor="travelers" className="block text-sm font-medium text-gray-700 mb-1">Number of Travelers</label>
                    <select id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                      <option value="10+">10+</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Preferred Travel Date
                      </span>
                    </label>
                    <div className="date-input-wrapper">
                      <input id="travelDate"
                        type="date"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all hover:border-emerald-400"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requests (Optional)</label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                      placeholder="What would you like to change about this itinerary?"
                    />
                  </div>
                </div>

                <FormConsent purpose="package-inquiry" />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Get Custom Quote"
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  By submitting, you agree to our{" "}
                  <a href="/terms" className="text-emerald-600 hover:underline">Terms & Conditions</a>
                </p>
              </form>
            </>
          )}
        </div>
    </dialog>
  );
}
