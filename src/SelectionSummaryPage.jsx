import React, { useState } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ArrowLeft, Check, ShieldCheck, ExternalLink } from "lucide-react";
import { TermsModal } from "./TermsAndConditionsPage";

export default function SelectionSummaryPage({
  pitchType = "box-cricket",
  selectedDateStr = "Sunday 6th September",
  selectedTimeStr = "5:00AM - 7:00AM",
  priceStr = "$200.00",
}) {
  const [agreed, setAgreed] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  const pitchTitles = {
    "box-cricket": "Book A Box Cricket",
    "lane-standard": "Book A Lane",
    "lane-bowling-machine": "Book A Lane with Bowling Machine",
  };

  const currentPitchTitle = pitchTitles[pitchType] || "Book A Box Cricket";

  const checkoutUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScPhKS-lx35asRIcnE8TSXLftCAkrbWK-n4BwTao9FKsxYNcA/viewform?usp=dialog";

  const handleProceed = () => {
    if (!agreed) {
      alert("Please accept the terms and conditions to proceed.");
      return;
    }
    window.location.href = checkoutUrl;
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Selection Summary Container */}
        <main className="max-w-2xl mx-auto px-4 py-10 sm:py-16 w-full">
          {/* Centered Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#053a68] text-center mb-8 tracking-tight">
            Selection Summary
          </h1>

          {/* Summary Box matching Image */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 shadow-sm mb-6 space-y-6">
            {/* Location */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Location</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#053a68]">22Yards Dallas</span>
                <a
                  href="#select-centre"
                  className="text-xs font-semibold text-[#0A5DA6] underline hover:text-[#053a68] transition-colors"
                >
                  change
                </a>
              </div>
            </div>

            {/* Booking Type */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Booking Type</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#053a68]">{currentPitchTitle}</span>
                <a
                  href="#book-a-lane"
                  className="text-xs font-semibold text-[#0A5DA6] underline hover:text-[#053a68] transition-colors"
                >
                  change
                </a>
              </div>
            </div>

            {/* Date */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Date</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#053a68]">{selectedDateStr}</span>
                <a
                  href="#book-box-cricket"
                  className="text-xs font-semibold text-[#0A5DA6] underline hover:text-[#053a68] transition-colors"
                >
                  change
                </a>
              </div>
            </div>

            {/* Time */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Time</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-base sm:text-lg font-bold text-[#053a68]">{selectedTimeStr}</span>
                <a
                  href="#select-time-slot"
                  className="text-xs font-semibold text-[#0A5DA6] underline hover:text-[#053a68] transition-colors"
                >
                  change
                </a>
              </div>
            </div>

            {/* Price */}
            <div>
              <div className="text-xs font-medium text-gray-500 mb-1">Price</div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#053a68]">
                {priceStr}
              </div>
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="mb-6 flex items-start gap-3 bg-[#F8FAFC] border border-gray-200 rounded-lg p-4">
            <input
              type="checkbox"
              id="terms-check"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 w-4 h-4 text-[#0A5DA6] rounded border-gray-300 focus:ring-[#0A5DA6] cursor-pointer flex-shrink-0"
            />
            <label htmlFor="terms-check" className="text-xs sm:text-sm text-[#334155] font-normal cursor-pointer select-none leading-relaxed">
              I have read the{" "}
              <a
                href="#privacy-policy"
                className="text-[#0A5DA6] font-bold underline underline-offset-2 decoration-[#0A5DA6] hover:text-[#053a68] transition-colors cursor-pointer"
              >
                privacy policy
              </a>{" "}
              and agree to the{" "}
              <a
                href="#terms-and-conditions"
                className="text-[#0A5DA6] font-bold underline underline-offset-2 decoration-[#0A5DA6] hover:text-[#053a68] transition-colors cursor-pointer"
              >
                terms and conditions
              </a>
            </label>
          </div>

          {/* Proceed Button matching Image */}
          <button
            type="button"
            onClick={handleProceed}
            className={`w-full py-3.5 px-6 rounded-lg text-sm sm:text-base font-bold transition-all shadow cursor-pointer text-white border-none flex items-center justify-center gap-2 ${
              agreed
                ? "bg-[#0A5DA6] hover:bg-[#053a68] active:scale-[0.99]"
                : "bg-gray-400 cursor-not-allowed opacity-70"
            }`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Proceed to Checkout
          </button>
        </main>
      </div>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
