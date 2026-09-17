import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  Users,
  Award,
  Shield,
  Star,
  ArrowRight,
  Phone,
  Quote,
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import crics2Img from "./assets/crics 2.jpeg";
import crics3Img from "./assets/crics3.jpeg";
import crics4Img from "./assets/crics4.jpeg";

/* ------------------------------------------------------------------ */
/*  Design tokens — 22 Yards Dallas Unified Design System              */
/* ------------------------------------------------------------------ */
const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#F6C915";
const YELLOW_HOVER = "#E0B60F";
const TEXT_MUTED = "#5B7A94";
const SKY_LIGHT = "#EEF5FB";
const BG_SECTION = "#F4F8FC";
const BORDER_COLOR = "#E4ECF3";

function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      .ty-display { font-family: 'Oswald', sans-serif; }
      .ty-body { font-family: 'Inter', sans-serif; }

      @keyframes coachMarquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .animate-coach-marquee {
        display: flex;
        width: max-content;
        gap: 1.5rem;
        animation: coachMarquee 28s linear infinite;
      }
      .animate-coach-marquee:hover {
        animation-play-state: paused;
      }
    `}</style>
  );
}

function Eyebrow({ children, dark }) {
  return (
    <div
      className="ty-body flex items-center justify-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
      style={{ color: dark ? YELLOW : NAVY }}
    >
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
      {children}
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Data: Founders / Key Members                                      */
/* ------------------------------------------------------------------ */
const keyMembers = [
  {
    name: "Founders & Leadership",
    role: "Core Visionaries",
    image: crics3Img,
    bio: "Combining a passion for cricket with entrepreneurial drive, our founders built 22Yards Dallas into a premier indoor facility dedicated to youth development, high-performance training, and community engagement.",
  },
  {
    name: "Vardhan Vundavalli",
    role: "Co-Founder & Operations Lead",
    image: crics4Img,
    bio: "Spearheading state-of-the-art facility management, tournament organizing, and technology integration (Smart Lanes & Automated Bowling Machines) to deliver world-class practice experiences.",
  },
  {
    name: "Ian Dev Singh",
    role: "Head of Player Development",
    image: crics2Img,
    bio: "Former First-Class domestic cricketer with vast international competitive experience, driving elite batting modules and personalized player acceleration tracks across all age divisions.",
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Coaches (Coach 1 through Coach 5)                           */
/* ------------------------------------------------------------------ */
const coaches = [
  {
    id: 1,
    title: "Coach 1",
    role: "Head Coach",
    bio: "Senior Master Coach leading comprehensive tactical drills, match simulations, and mental strength development workshops for competitive athletes.",
    image: crics3Img,
  },
  {
    id: 2,
    title: "Coach 2",
    role: "Head Coach",
    bio: "High-Performance Batting & Fielding Mentor specializing in shot precision, biomechanics, footwork agility, and high-pressure match scenarios.",
    image: crics4Img,
  },
  {
    id: 3,
    title: "Coach 3",
    role: "Head Coach",
    bio: "A lifelong student of the game with nearly 20+ years of playing and coaching experience in competitive leagues. Specializes in technical batting stance, video swing analysis, and mental match prep.",
    image: crics2Img,
  },
  {
    id: 4,
    title: "Coach 4",
    role: "Head Coach",
    bio: "Certified Level-2 bowling specialist focusing on seam control, spin variations, run-up biomechanics, and tactical execution for match scenarios.",
    image: crics3Img,
  },
  {
    id: 5,
    title: "Coach 5",
    role: "Head Coach",
    bio: "Fielding and athletic conditioning strategist dedicated to agility, reaction speed, wicketkeeping fundamentals, and team-building camaraderie.",
    image: crics4Img,
  },
];

/* ------------------------------------------------------------------ */
/*  Data: FAQ Items                                                   */
/* ------------------------------------------------------------------ */
const faqItems = [
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

export default function OurTeamPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const loopedCoaches = [...coaches, ...coaches, ...coaches];
  const activeIndex = stepIdx % coaches.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNextCoach();
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused, stepIdx]);

  const handleNextCoach = () => {
    setIsTransitioning(true);
    setStepIdx((prev) => prev + 1);
  };

  const handlePrevCoach = () => {
    setIsTransitioning(true);
    setStepIdx((prev) => (prev > 0 ? prev - 1 : coaches.length * 2 - 1));
  };

  const handleTransitionEnd = () => {
    if (stepIdx >= coaches.length * 2) {
      setIsTransitioning(false);
      setStepIdx(stepIdx % coaches.length);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <FontImport />
      <SiteHeader activePage="OUR TEAM" />

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO BANNER SECTION (NAVY #0A5DA6 with YELLOW #F6C915 Accent)   */}
      {/* ------------------------------------------------------------------ */}
      <section
        style={{ background: NAVY }}
        className="relative overflow-hidden text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: "#3E8FD0" }}
        />
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src={crics2Img}
            alt="22Yards Dallas Facility"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,58,104,0.95) 0%, rgba(10,93,166,0.88) 50%, rgba(5,58,104,0.95) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span
            className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6"
            style={{ borderColor: "rgba(246,201,21,0.5)", color: YELLOW }}
          >
            22YARDS DALLAS TEAM
          </span>
          <h1 className="ty-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase text-white leading-[1.1] mb-6">
            MEET OUR{" "}
            <span className="relative inline-block" style={{ color: YELLOW }}>
              TEAM
              <span
                className="absolute left-0 -bottom-2 w-full h-1.5 rounded"
                style={{ background: YELLOW }}
              />
            </span>
          </h1>
          <p className="ty-body max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">
            Dive into the vibrant world of 22Yards Dallas through our team gallery. Here, you can see the essence of our facility, the excitement of our games, and the spirit of our cricket community.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. MEET THE KEY MEMBERS SECTION (White BG with NAVY & YELLOW)      */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Eyebrow>OUR COACHES</Eyebrow>
          <h2
            className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4"
            style={{ color: NAVY }}
          >
            Meet the Key Members

          </h2>
          <p
            className="ty-body max-w-3xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: TEXT_MUTED }}
          >
            With a vision to bring top-tier cricket facilities to Dallas, our Founders combine their passion for cricket with their entrepreneurial spirit. Their leadership and dedication are the driving forces behind the success of 22Yards Dallas.

          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. MEET 22YARDS DALLAS COACHES SECTION (Slow Continuous Auto-Scroll) */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden"
        style={{ background: NAVY }}
      >
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full opacity-20"
          style={{ background: "#3E8FD0" }}
        />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Column: Heading */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <span
              className="ty-body inline-block text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: YELLOW }}
            >
              ★ EXPERT INSTRUCTORS
            </span>
            <h2 className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide leading-tight text-white mb-4">
              Meet 22Yards
              <br className="hidden sm:inline" /> Dallas Coaches
            </h2>
            <p className="ty-body text-sm sm:text-base text-white/90 leading-relaxed max-w-md mx-auto lg:mx-0">
              Meet 22Yards Dallas Coaches
            </p>
            <div className="mt-6">
              <a
                href="#coaching"
                className="ty-body inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-transform hover:-translate-y-0.5"
                style={{ background: YELLOW, color: NAVY_DEEPER }}
              >
                Explore Coaching Programs <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column: Discrete Card-by-Card Infinite Loop Carousel */}
          <div
            className="lg:col-span-9 relative overflow-hidden py-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Navigation Header */}
            <div className="flex items-center justify-between mb-4 px-1 max-w-[990px]">
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                Coach {activeIndex + 1} of {coaches.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevCoach}
                  aria-label="Previous Coach"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-yellow-400 transition-all cursor-pointer shadow"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={handleNextCoach}
                  aria-label="Next Coach"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/20 hover:border-yellow-400 transition-all cursor-pointer shadow"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Slider Viewport (Exact 3-Card Width with Left Padding: 6 + 310 + 24 + 310 + 24 + 310 + 6 = 990px) */}
            <div className="w-full max-w-[990px] overflow-hidden px-1.5 py-2">
              <div
                className={`flex gap-6 ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
                style={{
                  transform: `translateX(-${stepIdx * 334}px)`,
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {loopedCoaches.map((coach, idx) => {
                  const isCurrent = idx === stepIdx;
                  return (
                    <div
                      key={`${coach.id}-${idx}`}
                      className={`w-[310px] flex-shrink-0 rounded-2xl p-6 border flex flex-col items-center text-center transition-all shadow-lg cursor-pointer ${isCurrent
                        ? "border-yellow-400 bg-white/15 scale-[1.01] shadow-2xl"
                        : "border-white/20 bg-white/10 hover:border-white/40"
                        }`}
                    >
                      <div
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden mb-4 border-2 shadow-lg"
                        style={{ borderColor: YELLOW }}
                      >
                        <img
                          src={coach.image}
                          alt={coach.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = crics2Img;
                          }}
                        />
                      </div>
                      <h3 className="ty-display text-lg font-bold text-white mb-0.5 uppercase">
                        {coach.title}
                      </h3>
                      <span
                        className="ty-body text-xs font-semibold uppercase tracking-wider mb-3"
                        style={{ color: YELLOW }}
                      >
                        {coach.role}
                      </span>
                      <p className="ty-body text-xs text-white/80 leading-relaxed">
                        {coach.bio}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {coaches.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsTransitioning(true);
                    setStepIdx(idx);
                  }}
                  className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${idx === activeIndex
                    ? "w-8 bg-[#F6C915]"
                    : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                  aria-label={`Go to Coach ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                        */}
      {/* ------------------------------------------------------------------ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <div className="ty-display text-lg md:text-xl font-semibold mb-4" style={{ color: "#374B5C" }}>
              Frequently Asked Questions About Our Indoor Cricket Facility
            </div>
            <p className="ty-body" style={{ color: "#5B7A94" }}>
              Learn more about our cricket coaching programs, indoor cricket lane rentals, youth training, summer camps, events, facilities, and location in Lewisville, Texas.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200">
            {faqItems.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div key={faq.q} className="border-b border-gray-200 last:border-b-0">
                  <button
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    className="w-full flex items-center justify-between px-6 py-4 text-left cursor-pointer transition-colors"
                    style={{ background: open ? NAVY : "#F4F8FB" }}
                  >
                    <span
                      className="ty-body text-sm md:text-base font-bold"
                      style={{ color: open ? YELLOW : "#1E3A54" }}
                    >
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className="transition-transform flex-shrink-0 ml-2"
                      style={{
                        color: open ? YELLOW : "#9AAEC0",
                        transform: open ? "rotate(180deg)" : "none",
                      }}
                    />
                  </button>
                  {open && (
                    <div className="px-6 py-5 bg-white">
                      <p className="ty-body text-sm leading-relaxed" style={{ color: "#5B7A94" }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. FOOTER                                                          */}
      {/* ------------------------------------------------------------------ */}
      <SiteFooter />
    </div>
  );
}
