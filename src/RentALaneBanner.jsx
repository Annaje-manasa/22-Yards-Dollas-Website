import React from "react";
import { Calendar, CheckCircle2 } from "lucide-react";
import laneImg from "./assets/professional_cricket_lanes.jpg";

export default function RentALaneBanner({ id = "contact", buttonHref = "#book-a-lane" }) {
  return (
    <section id={id} className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white" style={{ background: "#0A5DA6" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap');
        .display-font { font-family: 'Oswald', sans-serif; }
      `}</style>

      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center text-left">
        <div className="md:col-span-7">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#F6C915" }}>
            <span className="inline-block w-6 h-[2px]" style={{ background: "#F6C915" }} />
            LANE RENTAL
          </div>

          <h2 className="display-font text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4 leading-tight text-white tracking-wide">
            YOUR LANE. YOUR SESSION.<br />
            YOUR GAME.
          </h2>

          <p className="text-sm sm:text-base mb-8 text-white/90 leading-relaxed max-w-xl">
            Professional indoor cricket lanes available for individuals, teams, and practice groups.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 mb-8 text-xs sm:text-sm text-white/95 font-medium">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>12+ professional cricket lanes</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>4+ advanced bowling machines</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>Gabba nets</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>Flexible hourly booking</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>Climate-controlled indoor environment</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 size={18} className="flex-shrink-0" style={{ color: "#F6C915" }} />
              <span>Open daily, 7 AM – 11 PM</span>
            </div>
          </div>

          <a
            href={buttonHref}
            className="display-font inline-flex items-center gap-2.5 rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider transition-transform hover:scale-[1.02] shadow-lg cursor-pointer"
            style={{ background: "#F6C915", color: "#053a68" }}
          >
            <Calendar size={16} /> BOOK A LANE
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-800 border-4 border-white/10">
            <img
              src={laneImg}
              alt="22Yards Dallas Professional Indoor Cricket Lanes"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
