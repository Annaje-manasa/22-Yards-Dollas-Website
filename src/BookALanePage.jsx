import React from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import { ArrowRight, ChevronRight, Target, Shield, Cpu } from "lucide-react";

export default function BookALanePage() {
  const pitchOptions = [
    {
      id: "box-cricket",
      title: "Book A Box Cricket",
      subtitle: "Enclosed turf field for fast-paced group matches & practice",
      icon: Target,
      href: "#book-box-cricket",
    },
    {
      id: "lane-standard",
      title: "Book A Lane",
      subtitle: "Standard professional cricket lane with premium Gabba netting",
      icon: Shield,
      href: "#book-standard-lane",
    },
    {
      id: "lane-bowling-machine",
      title: "Book A Lane with Bowling Machine",
      subtitle: "High-precision automated bowling machine setup with speed control",
      icon: Cpu,
      href: "#book-bowling-machine",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif", color: "#0A5DA6" }}>
      <div>
        {/* Site Header */}
        <SiteHeader activePage="BOOK A LANE" />

        {/* Main Pitch Selection Container */}
        <main className="max-w-4xl mx-auto px-4 py-10 sm:py-14 w-full">
          {/* Top Centre Selected Bar */}
          <div className="text-sm font-medium text-[#5B7890] mb-3 flex items-center gap-1.5">
            <span>Centre selected:</span>
            <strong className="text-[#053a68] font-semibold">22Yards Dallas</strong>
            <a
              href="#select-centre"
              className="text-[#0A5DA6] underline text-xs font-semibold ml-1 hover:text-[#053a68] transition-colors"
            >
              (change)
            </a>
          </div>

          {/* Page Heading */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#053a68] mb-8 tracking-tight">
            Select your pitch
          </h1>

          {/* Option Cards Grid */}
          <div className="space-y-4 sm:space-y-5">
            {pitchOptions.map((option) => {
              const IconComp = option.icon;
              return (
                <a
                  key={option.id}
                  href={option.href}
                  className="group block w-full bg-white border border-gray-200 rounded-lg p-5 sm:p-6 transition-all duration-200 hover:border-[#0A5DA6] hover:shadow-md cursor-pointer no-underline"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#EEF5FB] text-[#0A5DA6] group-hover:bg-[#F6C915] group-hover:text-[#053a68] flex items-center justify-center transition-colors flex-shrink-0">
                        <IconComp size={20} />
                      </div>
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-[#0A5DA6] group-hover:text-[#053a68] transition-colors mb-0.5">
                          {option.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 font-normal m-0">
                          {option.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="text-[#0A5DA6] group-hover:text-[#053a68] group-hover:translate-x-1 transition-all flex items-center gap-1 flex-shrink-0 font-semibold text-sm">
                      <span className="hidden sm:inline">Select</span>
                      <ChevronRight size={20} />
                    </div>
                  </div>
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
