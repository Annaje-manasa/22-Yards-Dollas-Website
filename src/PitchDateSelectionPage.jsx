import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function PitchDateSelectionPage({ pitchType = "lane-standard" }) {
  const pitchTitles = {
    "box-cricket": "Book A Box Cricket",
    "lane-standard": "Book A Lane",
    "lane-bowling-machine": "Book A Lane with Bowling Machine",
  };

  const currentPitchTitle = pitchTitles[pitchType] || "Book A Lane";

  const datesList = [
    { id: 1, displayString: "Friday 4th September" },
    { id: 2, displayString: "Saturday 5th September" },
    { id: 3, displayString: "Sunday 6th September" },
    { id: 4, displayString: "Monday 7th September" },
    { id: 5, displayString: "Tuesday 8th September" },
    { id: 6, displayString: "Wednesday 9th September" },
    { id: 7, displayString: "Thursday 10th September" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Date Selection Container matching Image 2 */}
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full">
          {/* Top Info Section / Breadcrumbs matching Image 2 */}
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

          {/* Date Cards List matching Image 2 */}
          <div className="space-y-3">
            {datesList.map((item) => {
              const href = pitchType === "box-cricket"
                ? `#select-time-slot?pitch=${pitchType}&date=${encodeURIComponent(item.displayString)}&duration=120`
                : `#select-duration?pitch=${pitchType}&date=${encodeURIComponent(item.displayString)}`;
              return (
                <a
                  key={item.id}
                  href={href}
                  className="block bg-white border border-gray-200 rounded-md p-4 sm:p-5 shadow-sm hover:border-[#0A5DA6] hover:shadow transition-all no-underline cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#0A5DA6] hover:text-[#053a68] underline underline-offset-2">
                    {item.displayString}
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
