import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function DurationSelectionPage({ pitchType = "box-cricket", selectedDateStr }) {
  const pitchTitles = {
    "box-cricket": "Book A Box Cricket",
    "lane-standard": "Book A Lane",
    "lane-bowling-machine": "Book A Lane with Bowling Machine",
  };

  const currentPitchTitle = pitchTitles[pitchType] || "Book A Lane";
  const displayDate = selectedDateStr || "Friday 4th September";

  const durationOptions = [
    { label: "60 Minutes", value: "60" },
    { label: "120 Minutes", value: "120" },
    { label: "180 Minutes", value: "180" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Duration Selection Container matching Image 3 */}
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full">
          {/* Top Info Section / Breadcrumbs */}
          <div className="text-sm font-medium text-[#334155] space-y-1 mb-6">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-gray-700">Pitch Type:</span>
              <strong className="text-[#053a68] font-semibold">{currentPitchTitle}</strong>
              <a
                href="#book-a-lane"
                className="text-[#0A5DA6] underline text-xs font-semibold ml-1 hover:text-[#053a68] transition-colors"
              >
                (change)
              </a>
            </div>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-gray-700">Centre selected:</span>
              <strong className="text-[#053a68] font-semibold">22Yards Dallas</strong>
              <a
                href="#select-centre"
                className="text-[#0A5DA6] underline text-xs font-semibold ml-1 hover:text-[#053a68] transition-colors"
              >
                (change)
              </a>
            </div>
          </div>

          {/* Question Heading matching Image 3 */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
            What duration of booking would you like?
          </h1>

          {/* Duration Options Cards matching Image 3 */}
          <div className="space-y-4">
            {durationOptions.map((opt) => {
              const href = `#select-time-slot?pitch=${pitchType}&date=${encodeURIComponent(displayDate)}&duration=${opt.value}`;
              return (
                <a
                  key={opt.value}
                  href={href}
                  className="block bg-white border border-gray-200 rounded-md p-5 sm:p-6 shadow-sm hover:border-[#0A5DA6] hover:shadow transition-all no-underline cursor-pointer"
                >
                  <span className="text-lg sm:text-xl font-bold text-[#0A5DA6] hover:text-[#053a68] underline underline-offset-2">
                    {opt.label}
                  </span>
                </a>
              );
            })}
          </div>
        </main>
      </div>

      {/* Site Footer */}
      <SiteFooter />
    </div>
  );
}
