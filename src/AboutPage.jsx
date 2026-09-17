import React, { useState } from "react";
import {
  Phone, MapPin, Mail, Calendar, ArrowRight, CheckCircle2, ChevronDown,
  Users, Target, Shield, Layers, Award, Facebook, Instagram, Menu, X,
  Quote, Camera, Send, GraduationCap,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import RentALaneBanner from "./RentALaneBanner";

// Content-matched custom asset images for About Us page
import heroImg from "./assets/aboutus.jpeg";
import facilityBrandImg from "./assets/indoor_cricket_facility.jpg";
import understandingGameImg from "./assets/crics3.jpeg";
import personalizedCoachingImg from "./assets/crics4.jpeg";
import sessionHighlightsImg from "./assets/level1_beginner.jpg";
import bowlingMachineLaneImg from "./assets/bowling_machine_auto_feeder.jpg";

// KEPT UNTOUCHED as explicitly requested by user:
import eliteCoachingImg from "./assets/elite_coaching.jpg";

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
      .cu-btn-yellow { transition: background 0.15s ease, transform 0.1s ease; }
      .cu-btn-yellow:hover { background: ${YELLOW_HOVER} !important; }
      .cu-btn-yellow:active { transform: scale(0.98); }
    `}</style>
  );
}

function Eyebrow({ children, dark }) {
  return (
    <div className="ty-body flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3" style={{ color: dark ? YELLOW : NAVY }}>
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
      {children}
    </div>
  );
}

function CheckItem({ children, color = NAVY }) {
  return (
    <li className="ty-body flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5" style={{ color: NAVY }}>
        <CheckCircle2 size={15} />
      </div>
      <span>{children}</span>
    </li>
  );
}

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const offerCards = [
    {
      icon: <Target size={22} />,
      title: "Understanding the Game",
      desc: "At 22 Yards Dallas, we prioritize creating a safe and nurturing environment where children can enhance their understanding and knowledge of cricket. Our approach focuses on developing their social skills and relationships with peers, improving physical fitness, and instilling values that foster a lifelong love and enjoyment of sports, particularly cricket. Our activities are designed to be fun, engaging, and child-friendly, introducing the essential skills and aspects of cricket.",
      img: understandingGameImg,
    },
    {
      icon: <Users size={22} />,
      title: "Personalized Attention to Each Child",
      desc: "We are committed to offering equal opportunities for all children. Our sessions encompass warm-ups, fielding, batting, and bowling, both in nets and on outdoor grounds. Through personalized interactive sessions and individual assessments, we aim to cultivate discipline, teamwork, and resilience — key attributes in sports that are also vital in daily life.",
      img: personalizedCoachingImg,
    },
    {
      icon: <Award size={22} />,
      title: "Session Highlights",
      desc: "Our coaching program for beginners utilizes taped tennis balls, while intermediate-level students are trained with synthetic balls. Each 90-minute session is divided equally between 45 minutes of focused training and 45 minutes of interactive gameplay involving kids, parents, volunteers, and coaches, fostering a community spirit and hands-on learning experience.",
      img: sessionHighlightsImg,
    },
  ];

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

  return (
    <div className="w-full min-h-screen bg-white ty-body" style={{ color: TEXT_MUTED }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="ABOUT US" />

      {/* ============================ HERO SECTION (UNTOUCHED) ============================ */}
      <section style={{ background: NAVY }} className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#3E8FD0" }} />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center relative">
          <div>
            <span className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: "rgba(246,201,21,0.5)", color: YELLOW }}>
              About 22Yards Dallas
            </span>
            <h1 className="ty-display text-3xl md:text-5xl font-bold uppercase text-white leading-[1.1] mb-6">
              About 22Yards Dallas<br />
              <span className="relative inline-block">
                Indoor Cricket Academy
                <span className="absolute left-0 -bottom-2 w-full h-1.5" style={{ background: YELLOW }} />
              </span>
            </h1>
            <p className="ty-body text-white/90 text-sm md:text-base leading-relaxed mb-6 max-w-xl">
              Welcome to 22Yards Dallas, where passion for cricket meets state-of-the-art facilities. Established by Team of Cricket Enthusiasts, our facility is dedicated to nurturing young talent and providing a top-tier training environment for all skill levels. Our team of experienced professionals is committed to fostering a love for the game and supporting each player’s journey to excellence.
            </p>
            <div className="ty-body flex items-center gap-2 text-white/70 text-sm">
              <span>Home</span> <span className="opacity-50">—</span> <span className="text-white font-semibold">About Us</span>
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <img src={heroImg} alt="22Yards Dallas Indoor Cricket Academy" className="w-full h-auto rounded-2xl shadow-xl object-contain" loading="lazy" />
          </div>
        </div>
      </section>

      {/* ============================ STATS STRIP ============================ */}
      <section className="relative z-10 -mt-1 mb-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 rounded-b-xl overflow-hidden shadow-lg border border-gray-100">
            {[
              ["2022", "ESTABLISHED"],
              ["Lewisville, TX", "LOCATION"],
              ["Dallas & DFW Metro", "SERVING"],
            ].map(([val, label], i) => (
              <div key={label} className="text-center py-6 px-4" style={{ background: i === 1 ? "#DDEAF6" : "#F4F8FB" }}>
                <div className="ty-display text-2xl font-bold" style={{ color: NAVY }}>
                  {val}
                </div>
                <div className="ty-body text-[11px] font-semibold tracking-wider text-slate-500 uppercase mt-1">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ 1. THE CRICKET ACADEMY DALLAS DESERVES ============================ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-b" style={{ background: BG_SECTION, borderColor: BORDER_COLOR }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-200 relative select-none">
            <iframe
              src="https://www.youtube.com/embed/mCU39sMo68k?autoplay=1&mute=1&loop=1&playlist=mCU39sMo68k&controls=0&disablekb=1&fs=0&modestbranding=1&rel=0&iv_load_policy=3&autohide=1&playsinline=1"
              title="22Yards Dallas Indoor Cricket Academy Video"
              className="absolute w-[150%] h-[150%] -top-[25%] -left-[25%] object-cover pointer-events-none border-0"
              style={{ pointerEvents: "none" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <div className="absolute inset-0 z-30 pointer-events-auto" />
          </div>
          <div className="text-left">
            <Eyebrow>Dallas Cricket Ecosystem</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-5 leading-tight" style={{ color: NAVY }}>
              The Cricket Academy <span style={{ color: YELLOW }}>Dallas</span> Deserves
            </h2>
            <p className="ty-body text-sm leading-relaxed mb-4 text-slate-600">
              22 Yards Dallas stands as more than just a cricket facility; it's a comprehensive cricket ecosystem crafted for enthusiasts, by enthusiasts. Founded on a profound passion for cricket, we extend our love for the game from our top-tier facility in Texas. We open our doors to aspiring young talents, seasoned athletes, and adult teams, offering a supportive environment for all.
            </p>
            <p className="ty-body text-sm leading-relaxed mb-8 text-slate-600">
              Under the guidance of our founders, visionary with deep roots in the sport, 22 Yards Dallas aims to spread the excitement of cricket throughout the United States. As cricket's popularity burgeons, we lead the way with experienced coaching staff, state-of-the-art training technology, and a vibrant community solely focused on cricket, making us a beacon for the sport in the region.
            </p>
            <a
              href="#contact"
              className="cu-btn-yellow ty-body inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider shadow cursor-pointer"
              style={{ background: YELLOW, color: NAVY_DEEPER }}
            >
              CONTACT US <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>



      {/* ============================ 3. MEET OUR COACHING STAFF (EXPLICITLY KEPT) ============================ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-b" style={{ background: BG_SECTION, borderColor: BORDER_COLOR }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <Eyebrow>Trained by the best</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-2" style={{ color: NAVY }}>
              Meet Our Coaching Staff
            </h2>
            <div className="ty-display text-lg font-semibold mb-6" style={{ color: NAVY_DEEPER }}>
              Experience Excellence in Coaching
            </div>

            <div className="mb-6">
              <div className="ty-display font-bold uppercase text-sm mb-1" style={{ color: NAVY }}>
                Expert Mentors &amp; Specialists
              </div>
              <p className="ty-body text-xs sm:text-sm text-slate-600 leading-relaxed">
                At 22Yards Dallas, our coaching team is led by certified professionals and experienced domestic and international cricket specialists. They bring a wealth of expertise, structured player-development methodologies, and dedicated mentorship to every session.
              </p>
            </div>

            <div>
              <div className="ty-display font-bold uppercase text-sm mb-3" style={{ color: NAVY }}>
                Coaching Standards &amp; Highlights
              </div>
              <ul className="space-y-2.5">
                <CheckItem>Certified coaches with extensive domestic and international experience</CheckItem>
                <CheckItem>Specialized modules for batting, pace bowling, spin, and fielding</CheckItem>
                <CheckItem>Player-centered approach focusing on technique, tactics, and fitness</CheckItem>
                <CheckItem>Video analysis feedback &amp; ball tracking technology</CheckItem>
                <CheckItem>Focus on youth development, discipline, sportsmanship, and confidence</CheckItem>
                <CheckItem>Year-round indoor net practice and match scenarios</CheckItem>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-slate-200">
            <img
              src={eliteCoachingImg}
              alt="22Yards Dallas Elite Coaching Team"
              className="w-full h-full object-cover"
            />
     
     
          </div>
        </div>
      </section>

     

      {/* ============================ 5. FAQS SECTION ============================ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ background: BG_SECTION }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center"><Eyebrow>Got Questions</Eyebrow></div>
          <h2 className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-4" style={{ color: NAVY }}>
            Frequently Asked Questions
          </h2>
          <p className="ty-body text-xs sm:text-sm text-slate-600 leading-relaxed">
            Everything parents and players usually want to know before getting started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white text-left">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => setOpenFaq(open ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left cursor-pointer transition-colors"
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
                    <p className="ty-body text-xs sm:text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <SiteFooter />
    </div>
  );
}
