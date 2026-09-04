import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { MapPin, ChevronRight } from "lucide-react";

export default function SelectCentrePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Select Centre Container matching Image */}
        <main className="max-w-4xl mx-auto px-4 py-10 sm:py-14 w-full">
          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#053a68] mb-8 tracking-tight">
            Select your centre
          </h1>

          {/* Centre Option Box matching Image exact layout */}
          <a
            href="#book-a-lane"
            className="group block w-full bg-white border border-gray-200 rounded-lg p-6 sm:p-7 hover:border-[#0A5DA6] hover:shadow-md transition-all cursor-pointer no-underline"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <MapPin size={22} className="text-[#0A5DA6] group-hover:text-[#053a68] transition-colors flex-shrink-0" />
                <div>
                  <span className="text-lg sm:text-xl font-bold text-[#0A5DA6] group-hover:text-[#053a68] group-hover:underline transition-colors block">
                    22Yards Dallas
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 font-normal mt-0.5 block">
                    Lewisville, TX &bull; Premier Indoor Cricket Facility
                  </span>
                </div>
              </div>

              <div className="text-[#0A5DA6] group-hover:text-[#053a68] group-hover:translate-x-1 transition-all flex items-center gap-1 text-sm font-semibold flex-shrink-0">
                <span className="hidden sm:inline">Select</span>
                <ChevronRight size={20} />
              </div>
            </div>
          </a>
        </main>
      </div>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
