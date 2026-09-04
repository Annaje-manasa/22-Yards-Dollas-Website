import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function TimeSlotSelectionPage({ pitchType = "box-cricket", selectedDateStr, duration = "120" }) {
  const pitchTitles = {
    "box-cricket": "Book A Box Cricket",
    "lane-standard": "Book A Lane",
    "lane-bowling-machine": "Book A Lane with Bowling Machine",
  };

  const currentPitchTitle = pitchTitles[pitchType] || "Book A Box Cricket";
  const displayDate = selectedDateStr || "Friday 4th September";

  // Map input display string to "Friday, 04 September 2026" header style as in Image 4
  const formattedHeaderDate = displayDate.includes(",")
    ? displayDate
    : displayDate.replace(/(\d+)(st|nd|rd|th)/, (match, p1) => {
        const pad = p1.padStart(2, '0');
        return `${pad}`;
      }).replace(/^(\w+)\s+(\d+)\s+(\w+)$/, "$1, $2 $3 2026");

  const slots60 = [
    { time: "4:00AM - 5:00AM", price: "$100.00", available: true },
    { time: "5:00AM - 6:00AM", price: "$100.00", available: true },
    { time: "6:00AM - 7:00AM", price: "$100.00", available: true },
    { time: "7:00AM - 8:00AM", price: "$100.00", available: true },
    { time: "8:00AM - 9:00AM", price: "$100.00", available: true },
    { time: "9:00AM - 10:00AM", price: "$100.00", available: true },
    { time: "10:00AM - 11:00AM", price: "$100.00", available: true },
    { time: "11:00AM - 12:00PM", price: "$100.00", available: true },
    { time: "12:00PM - 1:00PM", price: "$100.00", available: true },
    { time: "1:00PM - 2:00PM", price: "$100.00", available: true },
    { time: "2:00PM - 3:00PM", price: "$100.00", available: true },
    { time: "3:00PM - 4:00PM", price: "$100.00", available: true },
    { time: "4:00PM - 5:00PM", price: "$100.00", available: true },
    { time: "5:00PM - 6:00PM", price: "Unavailable", available: false },
  ];

  const slots120 = [
    { time: "4:00AM - 6:00AM", price: "$200.00", available: true },
    { time: "6:00AM - 7:00AM", price: "$200.00", available: true },
    { time: "6:00AM - 8:00AM", price: "$200.00", available: true },
    { time: "7:00AM - 8:00AM", price: "$200.00", available: true },
    { time: "8:00AM - 10:00AM", price: "$200.00", available: true },
    { time: "9:00AM - 11:00AM", price: "$200.00", available: true },
    { time: "10:00AM - 12:00PM", price: "$200.00", available: true },
    { time: "11:00AM - 1:00PM", price: "$200.00", available: true },
    { time: "12:00PM - 2:00PM", price: "$200.00", available: true },
    { time: "1:00PM - 3:00PM", price: "$200.00", available: true },
    { time: "2:00PM - 4:00PM", price: "$200.00", available: true },
    { time: "3:00PM - 5:00PM", price: "$200.00", available: true },
    { time: "4:00PM - 6:00PM", price: "$200.00", available: true },
    { time: "5:00PM - 7:00PM", price: "Unavailable", available: false },
  ];

  const slots180 = [
    { time: "6:00AM - 9:00AM", price: "$300.00", available: true },
    { time: "9:00AM - 12:00PM", price: "$300.00", available: true },
    { time: "12:00PM - 3:00PM", price: "$300.00", available: true },
    { time: "3:00PM - 6:00PM", price: "$300.00", available: true },
    { time: "6:00PM - 9:00PM", price: "Unavailable", available: false },
  ];

  const timeSlots = duration === "60" ? slots60 : duration === "180" ? slots180 : slots120;

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Time Slot Container matching Image 4 */}
        <main className="max-w-4xl mx-auto px-4 py-8 sm:py-12 w-full">
          {/* Top Info Section / Breadcrumbs matching Image 4 */}
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

          {/* Date Heading & Future Nav Bar matching Image 4 */}
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-6">
            <h1 className="text-lg sm:text-xl font-bold text-[#053a68] m-0">
              {formattedHeaderDate}
            </h1>
            <a
              href="#book-a-lane"
              className="text-xs sm:text-sm font-semibold text-[#0A5DA6] hover:underline flex items-center gap-1 no-underline"
            >
              Future &raquo;
            </a>
          </div>

          {/* Time Slots List matching Image 4 */}
          <div className="space-y-3">
            {timeSlots.map((slot, index) => {
              if (slot.available) {
                const summaryHref = `#selection-summary?pitch=${pitchType}&date=${encodeURIComponent(displayDate)}&time=${encodeURIComponent(slot.time)}&price=${encodeURIComponent(slot.price)}`;
                return (
                  <a
                    key={index}
                    href={summaryHref}
                    className="group flex items-center justify-between bg-white border border-gray-200 hover:border-[#0A5DA6] rounded-md px-5 py-3.5 shadow-sm hover:shadow transition-all text-decoration-none"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#0A5DA6] group-hover:text-[#053a68]">
                      {slot.time}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-[#0A5DA6] group-hover:text-[#053a68]">
                      {slot.price}
                    </span>
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white border border-gray-200 rounded-md px-5 py-3.5 select-none"
                >
                  <span className="text-sm sm:text-base font-medium text-gray-400">
                    {slot.time}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-gray-400">
                    {slot.price}
                  </span>
                </div>
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
