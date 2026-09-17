import React, { useState } from "react";
import { ChevronDown, Search, HelpCircle, Phone, Mail, ArrowRight } from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#F6C915";
const TEXT_MUTED = "#5B7A94";
const BG_SECTION = "#F4F8FC";

const faqs = [
  {
    q: "How Long Does Cricket Coaching Last?",
    a: "Each cricket coaching level at 22Yards Dallas (Level 1, Level 2, and Level 3) runs for a total of 12 weeks as a default. Most of our students transition to our semi-annual or annual package to continue their cricket journey.",
  },
  {
    q: "What will my child learn?",
    a: "Our comprehensive curriculum covers all aspects of the game, including batting, bowling, fielding, wicket-keeping, and cricket-specific fitness exercises. On top of that, we focus on fostering a sense of community, where your child can make lasting friendships, develop strong communication skills, and even become a confident leader.",
  },
  {
    q: "How will my child progress?",
    a: "Led by our experienced cricket coaching staff, your child will learn the essential fundamentals of the game, including cricket sport rules, and gradually progress to more advanced levels in Levels 2 and 3. Those who are ready to take their game to the next level can join our competitive cricket leagues at CricMax.",
  },
  {
    q: "What equipment does my child need to start cricket coaching?",
    a: "Beginners typically need basic cricket gear such as a bat, ball, and protective equipment. As they progress, we can advise on additional specialized equipment. Our ProShop at 22Yards Dallas stocks all necessary gear for cricketers at every level.",
  },
  {
    q: "How often are the coaching sessions held?",
    a: "Our coaching sessions are scheduled regularly throughout the week. We offer flexibility to accommodate the busy schedules of families, with options for weekend and weekday training.",
  },
  {
    q: "Can parents watch their children during coaching sessions?",
    a: "Yes, parents are welcome to observe their children during sessions. We believe in transparent coaching practices and encourage parental involvement to support the children's learning process.",
  },
  {
    q: "Are there opportunities for competitive play at 22Yards Dallas?",
    a: "Absolutely. Alongside coaching, we organize and participate in various leagues and tournaments, offering students the chance to experience competitive play and apply their skills in real match scenarios.",
  },
  {
    q: "What makes 22Yards Dallas different from other cricket academies?",
    a: "22Yards Dallas stands out for its state-of-the-art facilities, experienced coaching staff, and our holistic approach to training that focuses not just on cricket skills but also on physical fitness, mental resilience, and sportsmanship.",
  },
  {
    q: "What is the path for a student player in the United States?",
    a: "Our expert cricket coaching staff will work closely with your child to develop the skills and confidence they need to excel on the field. As the popularity of cricket continues to grow in the U.S., there are more opportunities than ever before for students who wish to continue with the sport. By starting with 22Yards Dallas, your child can be at the forefront of this exciting movement, rather than just watching from the sidelines.",
  },
  {
    q: "Is there a future in cricket?",
    a: "Cricket is rapidly gaining popularity in the United States, and for good reason. As more and more people from diverse backgrounds immigrate to the country, they bring with them their passion for the game. In fact, cricket is now one of the fastest-growing sports in the U.S. and is played by millions of people across the country. The future of cricket in the U.S. looks bright, with a growing number of youth leagues and tournaments being established every year. This means that your child can not only learn the fundamentals of the game but also have the opportunity to compete against other skilled players and teams. With the support of 22Yards Dallas’s expert coaching staff, your child can develop the skills and strategies needed to excel on the field and take their game to the next level. Even if your child doesn’t aspire to play cricket professionally, they can still enjoy the game for years to come. Cricket is a sport that fosters teamwork, discipline, and sportsmanship, and can help your child develop lifelong skills and values that extend beyond the field.",
  },
];

export default function FaqsPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen bg-white ty-body flex flex-col justify-between" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        .ty-display { font-family: 'Oswald', sans-serif; }
        .ty-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header */}
      <SiteHeader activePage="FAQS" />

      {/* Hero */}
      <section style={{ background: NAVY }} className="relative overflow-hidden py-16 sm:py-20 text-white">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: "rgba(246,201,21,0.5)", color: YELLOW }}>
            22Yards Dallas Help Center
          </span>
          <h1 className="ty-display text-4xl sm:text-5xl font-bold uppercase mb-4 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="ty-body text-white/90 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Find answers to common questions about our cricket coaching programs, facility access, equipment, schedules, and more.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search FAQs..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full text-slate-800 bg-white shadow-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#F6C915]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          </div>
        </div>
      </section>

      {/* FAQs Main Section */}
      <main className="py-16 px-6 max-w-4xl mx-auto w-full flex-1">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <HelpCircle size={40} className="mx-auto mb-3 text-slate-300" />
            <p className="text-base font-semibold">No questions found matching "{searchTerm}"</p>
            <button onClick={() => setSearchTerm("")} className="mt-3 text-sm text-[#0A5DA6] font-bold hover:underline">
              Clear search filter
            </button>
          </div>
        ) : (
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white text-left">
            {filteredFaqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer transition-colors"
                    style={{ background: open ? NAVY : "#F4F8FB" }}
                  >
                    <span
                      className="ty-body font-bold text-sm sm:text-base pr-4"
                      style={{ color: open ? YELLOW : "#1E3A54" }}
                    >
                      {f.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 transition-transform duration-200"
                      style={{
                        color: open ? YELLOW : "#9AAEC0",
                        transform: open ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {open && (
                    <div className="px-6 py-5 bg-white">
                      <p className="ty-body text-xs sm:text-sm leading-relaxed text-slate-600">
                        {f.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* Contact CTA */}
        <div className="mt-16 rounded-2xl p-8 text-center bg-[#F4F8FC] border border-[#E4ECF3]">
          <h3 className="ty-display text-2xl font-bold uppercase mb-2" style={{ color: NAVY }}>
            Have More Questions?
          </h3>
          <p className="ty-body text-sm text-slate-600 mb-6 max-w-md mx-auto">
            Our team is here to help you with enrollments, lane bookings, or facility details.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider transition-transform hover:-translate-y-0.5"
              style={{ background: YELLOW, color: NAVY_DEEPER }}
            >
              Contact Support <ArrowRight size={16} />
            </a>
            <a
              href="tel:+14692228473"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider border-2"
              style={{ borderColor: NAVY, color: NAVY }}
            >
              <Phone size={15} /> Call (469) 222-8473
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
