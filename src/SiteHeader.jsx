import React, { useState } from "react";
import { PlusCircle } from "lucide-react";
import SiteUtilityBar from "./SiteUtilityBar";

const navLinks = [
  "HOME",
  "ABOUT US",
  "OUR TEAM",
  "COACHING",
  "LANE RENTALS",
  "SPECIAL EVENTS",
  "GALLERY",
  "CONTACT US",
  "STORE",
  "REGISTRATION",
];

export default function SiteHeader({ activePage = "", showNavLinks }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isSummerCamp = activePage.toUpperCase() === "SUMMER CAMP";
  const shouldShowNavLinks = showNavLinks !== undefined ? showNavLinks : !isSummerCamp;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Oswald:wght@400;500;600;700&display=swap');
        .cu-navlink {
          position: relative;
          white-space: nowrap;
          font-family: 'Inter', sans-serif !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          letter-spacing: 0.4px !important;
        }
        .cu-navlink.active::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: -6px;
          height: 2px;
          background: #F6C915;
        }
        .cu-btn-yellow {
          transition: background 0.15s ease, transform 0.1s ease;
          font-family: 'Inter', sans-serif !important;
        }
        .cu-btn-yellow:hover { background: #E0B60F !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
      `}</style>

      {/* Top utility bar - 100% constant across all pages */}
      <SiteUtilityBar />

      {/* Main navigation header */}
      <div className="w-full flex items-center justify-between px-3 py-2 sm:px-6 lg:px-10 lg:py-4 border-b border-gray-200 bg-white box-border flex-nowrap">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 lg:gap-2.5 flex-shrink-0 text-none no-underline">
          <div
            className="w-9 h-9 lg:w-10 lg:h-10 flex items-center justify-center font-extrabold text-sm lg:text-base text-[#F6C915] bg-[#0A5DA6] rounded-lg"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            22
          </div>
          <div style={{ lineHeight: 1.1 }}>
            <div className="font-bold text-[14px] lg:text-[17px] text-[#0A5DA6] tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
              CRICS 22 YARDS
            </div>
            <div className="text-[8px] lg:text-[10px] tracking-[0.2em] text-[#9AAEC0] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>DALLAS</div>
          </div>
        </a>

        {shouldShowNavLinks && (
          <>
            {/* Desktop Nav Links & Book Now Button */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6 flex-wrap">
              {navLinks.map((link) => {
                const isReg = link === "REGISTRATION";
                const href = isReg
                  ? "https://docs.google.com/forms/d/e/1FAIpQLScPhKS-lx35asRIcnE8TSXLftCAkrbWK-n4BwTao9FKsxYNcA/viewform?usp=dialog"
                  : link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "OUR TEAM" ? "#our-team" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "GALLERY" ? "#gallery" : link === "CONTACT US" ? "#contact" : link === "STORE" ? "#store" : "#";
                const isActive = activePage.toUpperCase() === link;
                return (
                  <a
                    key={link}
                    href={href}
                    className={`cu-navlink ${isActive ? "active" : ""}`}
                    style={{
                      color: "#0A5DA6",
                      textDecoration: "none",
                    }}
                  >
                    {link}
                  </a>
                );
              })}

              <a
                href="#book-a-lane"
                className="cu-btn-yellow shadow flex-shrink-0"
                style={{
                  background: "#F6C915",
                  border: "none",
                  borderRadius: 8,
                  padding: "8px 16px",
                  fontWeight: 700,
                  fontSize: 13,
                  color: "#053a68",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                  fontFamily: "'Inter', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <PlusCircle size={15} style={{ color: "#053a68", strokeWidth: 2.5 }} />
                BOOK A LANE
              </a>
            </div>

            {/* Mobile Header Actions (Menu bar in middle, Book Now on right like Image 2) */}
            <div className="flex lg:hidden items-center justify-between flex-1 ml-2">
              {/* Menu bar in middle */}
              <button
                className="p-1 text-[#0A5DA6] font-bold cursor-pointer text-2xl mx-auto"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? "✕" : "☰"}
              </button>

              {/* Book Now on rightside */}
              <a
                href="#book-a-lane"
                className="cu-btn-yellow flex-shrink-0 shadow-sm"
                style={{
                  background: "#F6C915",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 12px",
                  fontWeight: 700,
                  fontSize: 11,
                  color: "#053a68",
                  cursor: "pointer",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  whiteSpace: "nowrap",
                  letterSpacing: "0.04em",
                  fontFamily: "'Inter', sans-serif",
                  textTransform: "uppercase",
                }}
              >
                <PlusCircle size={13} style={{ color: "#053a68", strokeWidth: 2.5 }} />
                BOOK A LANE
              </a>
            </div>
          </>
        )}
      </div>

      {/* Mobile Menu (Centered links like Image 2) */}
      {shouldShowNavLinks && menuOpen && (
        <div className="lg:hidden border-t border-gray-100 py-4 flex flex-col items-center bg-white">
          {navLinks.map((link) => {
            const isReg = link === "REGISTRATION";
            const href = isReg
              ? "https://docs.google.com/forms/d/e/1FAIpQLScPhKS-lx35asRIcnE8TSXLftCAkrbWK-n4BwTao9FKsxYNcA/viewform?usp=dialog"
              : link === "HOME" ? "#" : link === "ABOUT US" ? "#about" : link === "OUR TEAM" ? "#our-team" : link === "COACHING" ? "#coaching" : link === "LANE RENTALS" ? "#lane-rentals" : link === "SPECIAL EVENTS" ? "#special-events" : link === "GALLERY" ? "#gallery" : link === "CONTACT US" ? "#contact" : link === "STORE" ? "#store" : "#";
            return (
              <a
                key={link}
                href={href}
                className="w-48 text-center text-xs font-bold uppercase text-[#0A5DA6] no-underline py-2.5 border-b border-gray-100 last:border-b-0 tracking-wider hover:text-[#053a68] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
