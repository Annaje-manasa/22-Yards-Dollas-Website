import React, { useState } from "react";
import {
  Phone, MapPin, Clock, Mail, Calendar, ArrowRight, CheckCircle2, Check,
  Target, Activity, Brain, Users, Award, Grid3x3, Gauge, Gamepad2,
  Dumbbell, Armchair, ShoppingBag, Facebook, Instagram, Menu, X, Star,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import RentALaneBanner from "./RentALaneBanner";
import adVideo from "./assets/Ad Video 1-compressed.mp4";
import crics1Img from "./assets/crics 1.jpeg";
import sachinImg from "./assets/sachin.png";
import heroCustomImg from "./assets/hero-custom-image.png";

/* ------------------------------------------------------------------ */
/*  Design tokens — sampled from the reference site                    */
/* ------------------------------------------------------------------ */
const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#F6C915";
const YELLOW_SOFT = "#F6C915";
const SKY_LIGHT = "#EEF5FB";

/* Real photography hosted on the reference site — same images, hotlinked */
const IMG = {
  heroBowler: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fhero-bowler.jpg&w=3840&q=75",
  youngPlayer: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fyoung-player.jpg&w=3840&q=75",
  juniorTraining: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fjunior-training.jpg&w=3840&q=75",
  battingAction: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbatting-action.jpg&w=3840&q=75",
  indoorLanes: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Findoor-lanes.jpg&w=3840&q=75",
  bowlingDrill: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbowling-drill.jpg&w=3840&q=75",
  powerShot: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fpower-shot.jpg&w=3840&q=75",
  fitnessGym: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Ffitness-gym.jpg&w=3840&q=75",
  relaxationArea: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Frelaxation-area.jpg&w=3840&q=75",
  cricketEquipment: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcricket-equipment.jpg&w=3840&q=75",
  laneEmpty: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Flane-empty.jpg&w=3840&q=75",
  seniorNets: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fsenior-nets.jpg&w=3840&q=75",
  birthdayParty: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbirthday-party.jpg&w=3840&q=75",
  netsPractice: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fnets-practice.jpg&w=3840&q=75",
  celebration: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcelebration.jpg&w=3840&q=75",
  mezzanineLounge: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fmezzanine-lounge.jpg&w=3840&q=75",
  coachingSession: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcoaching-session.jpg&w=3840&q=75",
};

/* ------------------------------------------------------------------ */
/*  Fonts — condensed bold display + clean body sans, matching source  */
/* ------------------------------------------------------------------ */
function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      .ty-display { font-family: 'Oswald', sans-serif; }
      .ty-body { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

/* ------------------------------------------------------------------ */
/*  Small reusable bits                                               */
/* ------------------------------------------------------------------ */
function Eyebrow({ children, dark }) {
  return (
    <div
      className="ty-body flex items-center gap-2 text-xs font-bold tracking-widest uppercase mb-3"
      style={{ color: dark ? YELLOW : NAVY }}
    >
      <span className="inline-block w-6 h-[2px]" style={{ background: YELLOW }} />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub, dark, center = true }) {
  return (
    <div className={center ? "text-center max-w-2xl mx-auto mb-12 flex flex-col items-center" : "mb-12"}>
      <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
      <h2
        className="ty-display text-3xl md:text-4xl font-bold uppercase tracking-tight leading-tight mb-4"
        style={{ color: dark ? "#fff" : NAVY }}
      >
        {title}
      </h2>
      {sub && (
        <p className="ty-body text-base" style={{ color: dark ? "rgba(255,255,255,0.75)" : "#5B7A94" }}>
          {sub}
        </p>
      )}
    </div>
  );
}

function Photo({ src, alt, className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
    </div>
  );
}

function CheckItem({ children, color = "#3FB27F" }) {
  return (
    <li className="ty-body flex items-start gap-2 text-sm">
      <CheckCircle2 size={18} style={{ color, flexShrink: 0, marginTop: 1 }} />
      <span>{children}</span>
    </li>
  );
}

function Pill({ children }) {
  return (
    <span
      className="ty-body inline-block text-xs font-semibold px-3 py-1.5 rounded-full border"
      style={{ borderColor: "#D7E4EE", color: NAVY, background: "#fff" }}
    >
      {children}
    </span>
  );
}

function YellowButton({ children, icon: Icon, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase transition-transform hover:-translate-y-0.5 ${className}`}
      style={{ background: YELLOW, color: NAVY_DEEPER }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

function OutlineButton({ children, icon: Icon, dark, className = "", href = "#" }) {
  return (
    <a
      href={href}
      className={`ty-body inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase border-2 transition-colors ${className}`}
      style={{ borderColor: dark ? "rgba(255,255,255,0.6)" : NAVY, color: dark ? "#fff" : NAVY }}
    >
      {Icon && <Icon size={16} />}
      {children}
    </a>
  );
}

function GroupCoachingCards() {
  const [activeGroup, setActiveGroup] = useState("U13");

  const groups = [
    { group: "U11", level: "Basic", text: "No previous cricket experience required." },
    { group: "U13", level: "Intermediate", text: "For players with basic cricket experience." },
    { group: "U17", level: "Advanced", text: "For skilled and developing competitive cricketers." },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 mb-10">
      {groups.map((g) => {
        const isHighlighted = activeGroup === g.group;
        return (
          <div
            key={g.group}
            onMouseEnter={() => setActiveGroup(g.group)}
            className={`rounded-2xl p-8 border transition-all duration-300 cursor-pointer ${isHighlighted
              ? "bg-[#0A5DA6] border-[#0A5DA6] shadow-xl scale-[1.02]"
              : "bg-white border-[#E4ECF3] shadow-sm"
              }`}
          >
            <div
              className={`ty-display text-3xl font-bold mb-3 transition-colors duration-300 ${isHighlighted ? "text-white" : "text-[#0A5DA6]"
                }`}
            >
              {g.group}
            </div>
            <span
              className={`ty-body inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 transition-colors duration-300 ${isHighlighted ? "bg-[#F6C915] text-[#053a68]" : "bg-[#E6F0F9] text-[#0A5DA6]"
                }`}
            >
              {g.level}
            </span>
            <p
              className={`ty-body text-sm transition-colors duration-300 ${isHighlighted ? "text-white/85" : "text-[#6B8399]"
                }`}
            >
              {g.text}
            </p>
          </div>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [regForm, setRegForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ageGroup: "Select a group",
    program: "Select a program",
    notes: "",
  });
  const [regLoading, setRegLoading] = useState(false);
  const [regSubmitted, setRegSubmitted] = useState(false);

  const handleRegChange = (field) => (e) => setRegForm((f) => ({ ...f, [field]: e.target.value }));

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setRegLoading(true);
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: `${regForm.firstName} ${regForm.lastName}`,
            email: regForm.email,
            to_email: regForm.email,
            reply_to: regForm.email,
            phone: regForm.phone,
            message: `Phone: ${regForm.phone || 'N/A'}\nAge Group: ${regForm.ageGroup}\nProgram: ${regForm.program}\n\nNotes:\n${regForm.notes || 'No additional notes provided.'}`,
            title: `Academy Registration - ${regForm.program || 'Home Page'}`,
          },
        }),
      });
      setRegSubmitted(true);
      setRegForm({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        ageGroup: "Select a group",
        program: "Select a program",
        notes: "",
      });
      setTimeout(() => setRegSubmitted(false), 5000);
    } catch (err) {
      setRegSubmitted(true);
      setTimeout(() => setRegSubmitted(false), 5000);
    } finally {
      setRegLoading(false);
    }
  };

  const navLinks = ["Home", "About Us", "Special Events", "Summer Camp", "Contact Us", "SKA Registration"];

  // ---- CONTENT from 22yardsdallas.com ----

  const fuelSteps = [
    { letter: "F", title: "Fun", text: "Make every session enjoyable. Players who love turning up are the players who keep improving." },
    { letter: "U", title: "Understand the game", text: "Build cricket intelligence and awareness — reading conditions, situations, and opponents." },
    { letter: "E", title: "Evolve", text: "Develop skills through consistent, deliberate training with measurable progress." },
    { letter: "L", title: "Learn", text: "Turn practice into confidence, and confidence into match-day performance." },
  ];

  const whyCricket = [
    { icon: Target, title: "Discipline & patience", text: "Cricket teaches young players the value of preparation, consistency, and patience — skills that extend far beyond the boundary." },
    { icon: Activity, title: "Physical development", text: "Build coordination, fitness, speed, balance, and athletic ability through every session at our state-of-the-art facility." },
    { icon: Brain, title: "Mental resilience", text: "Learn how to respond to mistakes, handle pressure, and come back stronger — essential life skills shaped through cricket." },
    { icon: Users, title: "Teamwork & sportsmanship", text: "Learn to compete, communicate, respect opponents, and support teammates in every match and training session." },
    { icon: Award, title: "Character & confidence", text: "Every session creates opportunities for young players to take responsibility and grow as individuals ready for the world stage." },
  ];

  const coaches = [
    { name: "Vardhan Vundavalli", role: "Expert Mentor", img: "https://22yardsdallas.com/wp-content/uploads/2025/08/coach_3.jpg" },
    { name: "Head Coach", role: "Lead Batting Coach" },
    { name: "Bowling Coach", role: "Pace & Spin Specialist" },
  ];

  const testimonials = [
    { quote: "PLACEHOLDER — real parent review, supplied by the client.", name: "Parent name", role: "Parent" },
    { quote: "PLACEHOLDER — real parent review, supplied by the client.", name: "Parent name", role: "Parent" },
    { quote: "PLACEHOLDER — real player review, supplied by the client.", name: "Player name", role: "Player" },
  ];

  const events = [
    {
      title: "Birthday Parties",
      text: "Make your special day unforgettable with our customized birthday party packages. Enjoy exclusive access to our premium cricket facilities, professional setup, and dedicated event coordination.",
      img: IMG.birthdayParty,
      badge: "🎉 Celebrate",
    },
    {
      title: "Corporate Events",
      text: "Elevate your corporate gatherings with our world-class facilities. From team-building activities to client entertainment, our versatile spaces ensure successful events that strengthen business relationships.",
      img: IMG.netsPractice,
      badge: "🏢 Professional",
    },
    {
      title: "Tournaments",
      text: "Host competitive cricket tournaments in our state-of-the-art facility. With professional-grade equipment, expert organization, and comprehensive event management, we deliver championship-level experiences.",
      img: IMG.celebration,
      badge: "🏆 Compete",
    },
    {
      title: "Ladies' / Stag / Couples Nights",
      text: "Themed recurring nights featuring customized setup, music, and exclusive access for group celebrations and social gatherings.",
      img: IMG.mezzanineLounge,
      badge: "🍸 Nights",
    },
    
  ];

  const gallery = [
    { src: IMG.seniorNets, alt: "Batting session in the nets" },
    { src: IMG.battingAction, alt: "Junior player cutting through the off side" },
    { src: IMG.indoorLanes, alt: "Indoor lanes, wide view" },
    { src: IMG.coachingSession, alt: "Coach directing a training drill" },
    { src: IMG.bowlingDrill, alt: "Bowling drill in progress" },
    { src: IMG.heroBowler, alt: "Bowler in delivery stride" },
  ];

  const laneFeatures = [
    { icon: "🏟️", title: "Professional-Grade Facility", text: "State-of-the-art indoor cricket lanes with authentic pitch conditions, professional lighting, and advanced ball machines for the ultimate training experience." },
    { icon: "⚡", title: "Advanced Technology", text: "Cutting-edge analytics, video replay systems, and performance tracking tools to analyze and improve your game like never before." },
    { icon: "🎯", title: "Flexible Booking", text: "Convenient online booking system with flexible time slots, group packages, and competitive rates to fit your schedule and budget." },
  ];

  return (
    <div className="w-full min-h-screen bg-white ty-body" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="HOME" />

      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center" style={{ background: "linear-gradient(135deg, #0A5DA6 0%, #053a68 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left flex flex-col items-start">
              <span className="ty-body inline-block text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6"
                style={{ borderColor: "rgba(233,210,34,0.5)", color: YELLOW }}>
                #1 Rated Indoor Cricket Facility in Dallas
              </span>
              <h1 className="ty-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight mb-4 uppercase tracking-wide">
                Texas Premier <span style={{ color: YELLOW }}>Indoor Cricket</span> Facility
              </h1>
              <p className="ty-body text-white/90 text-base md:text-lg mb-4">
                Established in 2022, 22Yards Dallas is committed to nurturing the most promising young cricketers in the USA — developing future-ready, confident players equipped to excel on the world stage.
              </p>
              <p className="ty-body text-white/75 text-sm mb-8">
                Indoor Cricket Facility in Dallas, TX
              </p>
              <div className="flex flex-wrap justify-start gap-4 mb-8">
                <YellowButton href="#register">Enroll Now</YellowButton>
                <OutlineButton icon={Calendar} dark href="#book-a-lane">Book a Lane</OutlineButton>
              </div>
              <div className="h-px bg-white/20 mb-6 w-full" />
              <div className="ty-body flex flex-wrap justify-start items-center gap-x-8 gap-y-3 text-white/90 text-sm">
                <a href="tel:+14692228473" className="flex items-center gap-2"><Phone size={15} style={{ color: YELLOW }} /> +1 (469) 222-8473</a>
                <span className="flex items-center gap-2"><MapPin size={15} style={{ color: YELLOW }} /> Dallas, TX</span>
                <span className="flex items-center gap-2"><Clock size={15} style={{ color: YELLOW }} /> 07.00 AM - 11.00 PM</span>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-2" style={{ borderColor: "rgba(233,210,34,0.3)" }}>
              <img
                src={heroCustomImg}
                alt="22Yards Dallas Indoor Cricket Facility"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to top, rgba(5,58,104,0.6) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ STATS STRIP ============================ */}
      <section className="relative z-10 -mt-1">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 rounded-b-xl overflow-hidden shadow-lg">
            {[
              ["5+", "Years of Experience"],
              ["10+", "Expert Coaches"],
              ["12+", "Professional Lanes"],
            ].map(([num, label], i) => (
              <div key={label} className="text-center py-6 px-2" style={{ background: i % 2 === 1 ? "#DDEAF6" : "#F4F8FB" }}>
                <div className="ty-display text-3xl font-bold" style={{ color: NAVY }}>{num}</div>
                <div className="ty-body text-[11px] font-semibold uppercase tracking-wide mt-1" style={{ color: "#5B7A94" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SECTION 1: WELCOME TO 22YARDS DALLAS ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 items-center">
          {/* Left — image */}
          <div className="md:col-span-5">
            <img
              src={crics1Img}
              alt="22Yards Dallas Cricket Training"
              className="w-full h-auto rounded-2xl shadow-md"
              loading="lazy"
            />
          </div>

          {/* Right — content */}
          <div className="md:col-span-7">

            <h2 className="ty-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-tight mb-3" style={{ color: NAVY }}>
              Welcome to 22Yards Dallas
            </h2>
            <p className="ty-display text-xl font-semibold uppercase mb-6" style={{ color: "#393939" }}>
              Texas's State of the Art Cricket Facility
            </p>
            <p className="ty-body text-base leading-relaxed mb-5" style={{ color: "#5B7A94" }}>
              Established in 2022, 22Yards Sports Cricket Facility in Dallas, TX, is committed to identifying and nurturing the most promising young male and female cricketers. Our goal is to develop <strong style={{ color: NAVY }}>future-ready, confident cricketers</strong> equipped to excel on the world stage.
            </p>
            <p className="ty-body text-base leading-relaxed" style={{ color: "#5B7A94" }}>
              We achieve this by creating a holistic, player-centered environment. Our world-class development program is supported by specialist coaches and mentors, focusing on high-performance and lifestyle management. This comprehensive approach ensures that the next generation of players not only excels in cricket but also grows as individuals, ready to face global challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ============================ SECTION 2: WHO WE ARE / ABOUT US ============================ */}
      <section className="py-20 bg-[#F4F8FC] border-t border-b border-[#E4ECF3] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">

            {/* Left Section */}
            <div className="lg:col-span-4 flex flex-col items-start">
              <Eyebrow>About Us</Eyebrow>
              <h2 className="ty-display text-4xl md:text-5xl font-bold uppercase tracking-tight mb-5" style={{ color: NAVY }}>
                Who We Are
              </h2>
              <p className="ty-body text-base leading-relaxed" style={{ color: "#5B7A94" }}>
                Established in 2022, 22Yards Dallas is a cutting-edge cricket academy focused on nurturing talent with top-tier coaching and advanced training facilities. Our mission is to foster skilled, confident players ready to compete internationally.
              </p>
            </div>

            {/* Center Section - Sachin Tendulkar Image */}
            <div className="lg:col-span-4 flex justify-center items-center">
              <div className="relative w-full max-w-sm h-64 md:h-72 flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={sachinImg}
                  alt="Sachin Tendulkar"
                  className="w-full h-full object-contain drop-shadow-xl"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right Section - Quote & Detail */}
            <div className="lg:col-span-4 flex flex-col items-start">
              {/* Quote Container */}
              <div className="rounded-2xl p-6 mb-6 border-l-4 w-full shadow-sm relative" style={{ background: SKY_LIGHT, borderColor: NAVY }}>
                <p className="ty-body text-sm font-semibold italic mb-3 uppercase leading-relaxed" style={{ color: NAVY_DEEPER }}>
                  "Cricket is not just a sport for me; it's a way of life, it's a way of thinking, it's a way of seeing the world"
                </p>
                <div className="ty-body text-xs font-bold uppercase tracking-wider" style={{ color: NAVY }}>
                  — Sachin Tendulkar
                </div>
              </div>

              <p className="ty-body text-sm leading-relaxed mb-4" style={{ color: "#5B7A94" }}>
                At 22Yards Dallas, we believe that cricket is more than a game—it's a journey that teaches invaluable life lessons. Our approach is centered around fostering a supportive environment where young athletes can grow both personally and professionally.
              </p>
              <p className="ty-body text-sm leading-relaxed mb-6" style={{ color: "#5B7A94" }}>
                We are committed to delivering a holistic cricketing experience through high-quality coaching, advanced facilities, and a vibrant community atmosphere.
              </p>

              <YellowButton href="#about" icon={ArrowRight}>More About Us</YellowButton>
            </div>

          </div>
        </div>
      </section>

      {/* ============================ WHERE CHAMPIONS ARE MADE ============================ */}
      <section className="py-20 relative overflow-hidden" style={{ background: SKY_LIGHT }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span
              className="ty-body inline-block text-sm font-bold tracking-widest uppercase px-6 py-3 rounded-full mb-8"
              style={{ background: NAVY, color: "#fff" }}
            >
              World-Class Cricket Facility
            </span>
            <h2 className="ty-display text-4xl md:text-5xl font-bold uppercase leading-tight mb-6" style={{ color: NAVY }}>
              Where <span style={{ color: YELLOW }}>Champions</span> Are Made
            </h2>
            <p className="ty-body text-lg leading-relaxed" style={{ color: "#5B7A94" }}>
              Step into Texas's premier cricket destination. Our state-of-the-art facility combines cutting-edge technology with world-class coaching to create an unparalleled training environment. From professional-grade pitches to advanced analytics, every element is designed to elevate your game to international standards.
            </p>
          </div>
          <Photo src={IMG.battingAction} alt="22Yards Dallas Champions" className="h-96 w-full" />
        </div>
      </section>

      {/* ============================ FUEL METHODOLOGY ============================ */}
      <section style={{ background: NAVY }} className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-14">
          <SectionHeading eyebrow="Our coaching methodology" title="FUEL to your dreams"
            sub="Every session at 22 Yards runs on four principles that turn raw enthusiasm into real cricket ability." dark />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-20 lg:gap-28 mb-16">
            {fuelSteps.map((s) => (
              <div key={s.letter} className="text-center flex flex-col items-center">
                <div className="ty-display w-14 h-14 rounded-xl flex items-center justify-center font-bold text-xl mb-4" style={{ background: YELLOW, color: NAVY_DEEPER }}>{s.letter}</div>
                <div className="ty-display text-white font-semibold uppercase text-sm mb-2 tracking-wide text-center">{s.title}</div>
                <p className="ty-body text-white/70 text-sm leading-relaxed text-center">{s.text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="ty-display font-bold uppercase text-5xl md:text-7xl leading-none" style={{ color: YELLOW }}>FUEL</div>
            <div className="ty-display text-white font-semibold uppercase text-sm tracking-widest mt-2">To your dreams</div>
          </div>
        </div>
      </section>

      {/* ============================ MORE THAN A GAME ============================ */}
      <section className="pb-20 pt-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading eyebrow="Why cricket" title="More than a game"
            sub="At 22Yards Dallas, we believe cricket teaches invaluable life lessons. Our holistic approach creates confident players ready to face global challenges." />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="w-full">
              <img src={IMG.juniorTraining} alt="Why cricket - More than a game at 22Yards Dallas" className="w-full h-auto rounded-2xl shadow-sm" loading="lazy" />
            </div>

            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-6">
              {whyCricket.map((f) => (
                <div key={f.title} className="border border-gray-100 rounded-xl p-6 shadow-sm">
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center mb-4" style={{ background: NAVY }}>
                    <f.icon size={20} color="#fff" />
                  </div>
                  <div className="ty-display font-semibold uppercase text-sm mb-2" style={{ color: NAVY }}>{f.title}</div>
                  <p className="ty-body text-sm leading-relaxed" style={{ color: "#6B8399" }}>{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================ FIND THE RIGHT GROUP ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeading eyebrow="Group coaching" title="Find the right group"
            sub="Three groups, sorted by age and experience, so every player trains alongside cricketers at their own level." />
          <GroupCoachingCards />
          <ul className="ty-body flex flex-wrap justify-center gap-x-8 gap-y-2 text-center text-xs font-semibold" style={{ color: "#9AAEC0" }}>
            <li>Group coaching starts from age 5</li>
            <li>2 sessions per week · 4 hours total</li>
            <li>Indoor and outdoor training</li>
            <li>Sibling discounts may be available</li>
          </ul>
        </div>
      </section>

      {/* ============================ RENT A LANE CTA ============================ */}
      <RentALaneBanner id="book" />

      {/* ============================ TRAIN WITHOUT LIMITS ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Why train indoors</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-4" style={{ color: NAVY }}>Train without limits</h2>
            <p className="ty-body mb-6" style={{ color: "#5B7A94" }}>Texas weather shouldn't decide when you train. A controlled indoor environment means every session counts — all year round.</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Practice consistently, week after week",
                "Improve technique with instant feedback",
                "Train year-round in any weather",
                "Use professional bowling machines",
                "Work on specific, targeted skills",
                "Practice with your teammates",
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 rounded-xl p-4" style={{ background: SKY_LIGHT }}>
                  <CheckCircle2 size={18} style={{ color: NAVY, flexShrink: 0, marginTop: 1 }} />
                  <span className="ty-body text-sm" style={{ color: NAVY_DEEPER }}>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <Photo src={IMG.seniorNets} alt="Indoor training session at 22 Yards Dallas" className="h-96 w-full" />
        </div>
      </section>

      {/* ============================ MEET THE COACHES ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span
                className="ty-body inline-block text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-4"
                style={{ background: NAVY, color: "#fff" }}
              >
                Meet Our Coaches at 22Yards Dallas
              </span>
              <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>
                Experience <span style={{ color: NAVY }}>Excellence</span> in Coaching
              </h2>
              <p className="ty-body max-w-3xl" style={{ color: "#5B7A94" }}>
                At 22Yards Dallas, our coaching team is the driving force behind our excellence. Led by seasoned professionals and certified cricketing experts — including former international and domestic players — our coaches bring passion, precision, and years of on-field experience to every session. They're not just instructors — they're mentors, committed to unlocking your full cricketing potential and shaping future champions.
              </p>
            </div>
            <OutlineButton icon={ArrowRight} href="#our-team">Meet the full team</OutlineButton>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {coaches.map((c) => (
              <div key={c.name} className="bg-white rounded-xl overflow-hidden shadow-sm group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="h-52 w-full overflow-hidden relative" style={{ background: "#E1EBF4" }}>
                  {c.img ? (
                    <img
                      src={c.img}
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-1" style={{ color: "#8CA6BC" }}>
                      <Users size={26} />
                      <span className="ty-body text-[11px] font-semibold uppercase tracking-wide">Coach portrait</span>
                    </div>
                  )}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4"
                    style={{ background: "linear-gradient(to top, rgba(10,93,166,0.8), transparent)" }}>
                    <span className="ty-body text-white text-xs font-bold uppercase tracking-wide">{c.role}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="ty-display font-bold uppercase text-sm" style={{ color: NAVY }}>{c.name}</div>
                  <div className="ty-body text-xs font-semibold mt-1" style={{ color: "#9AAEC0" }}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ SPECIAL EVENTS ============================ */}
      <section style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Special events"
            title="Special Events at 22Yards Dallas"
            sub="Prime Choice for Birthday Parties, Corporate Events and Sporting Events! Transform your celebrations and team-building events into memorable experiences at our premium facility."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {events.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl overflow-hidden shadow-sm group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-gray-100">
                <div className="relative h-52 w-full overflow-hidden">
                  <img src={e.img} alt={e.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <span
                    className="absolute top-4 left-4 text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full z-10 shadow-sm"
                    style={{ background: YELLOW, color: NAVY_DEEPER }}
                  >
                    {e.badge.replace(/^[^ ]+ /, "")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="ty-display font-bold uppercase text-base mb-2 relative" style={{ color: NAVY }}>
                    {e.title}
                    <span className="block h-0.5 w-12 group-hover:w-full transition-all duration-500 mt-2 rounded" style={{ background: YELLOW }} />
                  </h3>
                  <p className="ty-body text-sm mt-3" style={{ color: "#6B8399" }}>{e.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ GALLERY ============================ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <Eyebrow>Gallery</Eyebrow>
              <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase mb-3" style={{ color: NAVY }}>Inside 22 Yards Dallas</h2>
              <p className="ty-body" style={{ color: "#5B7A94" }}>Training, players, coaches, the facility, and the events we host.</p>
            </div>
            <a href="#gallery" className="no-underline">
              <OutlineButton icon={ArrowRight} href="#gallery">View full gallery</OutlineButton>
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((g, i) => <Photo key={i} src={g.src} alt={g.alt} className="h-40 w-full" />)}
          </div>
        </div>
      </section>

      {/* ============================ REGISTRATION ============================ */}
      <section id="register" style={{ background: SKY_LIGHT }} className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>Registration</Eyebrow>
            <h2 className="ty-display text-3xl md:text-4xl font-bold uppercase leading-tight mb-4" style={{ color: NAVY }}>Ready to take the next step?</h2>
            <p className="ty-body mb-6 max-w-md" style={{ color: "#5B7A94" }}>Whether your player is picking up a bat for the first time or preparing for competitive cricket, there's a place for them at 22 Yards Dallas.</p>
            <div className="h-px bg-gray-200 mb-6 max-w-sm" />
            <div className="ty-body text-sm mb-2" style={{ color: "#5B7A94" }}>Prefer to talk it through?</div>
            <div className="flex flex-wrap items-center gap-4 font-bold" style={{ color: NAVY }}>
              <a href="tel:+14692228473" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: NAVY }}><Phone size={14} color="#fff" /></span>
                +1 (469) 222-8473
              </a>
            </div>
          </div>

          {regSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 rounded-2xl p-8 text-center ty-body shadow-sm">
              <h3 className="text-xl font-bold mb-2">Registration Submitted Successfully!</h3>
              <p className="text-sm opacity-90">Thank you for registering. Our team at 22Yards Dallas will contact you shortly.</p>
            </div>
          ) : (
            <form className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-md" onSubmit={handleRegSubmit}>
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>First name *</label>
                  <input required value={regForm.firstName} onChange={handleRegChange("firstName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800" placeholder="First name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Last name *</label>
                  <input required value={regForm.lastName} onChange={handleRegChange("lastName")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800" placeholder="Last name" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Phone</label>
                  <input type="tel" value={regForm.phone} onChange={handleRegChange("phone")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800" placeholder="(469) 222-8473" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Email *</label>
                  <input type="email" required value={regForm.email} onChange={handleRegChange("email")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Age group</label>
                  <select value={regForm.ageGroup} onChange={handleRegChange("ageGroup")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800 bg-white">
                    <option>Select a group</option>
                    <option>U11 — Basic</option>
                    <option>U13 — Intermediate</option>
                    <option>U17 — Advanced</option>
                  </select>
                </div>
                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Program</label>
                  <select value={regForm.program} onChange={handleRegChange("program")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy text-gray-800 bg-white">
                    <option>Select a program</option>
                    <option>Junior development (Ages 5–16)</option>
                    <option>Senior high-performance (Ages 17+)</option>
                    <option>Lane Rental</option>
                    <option>Special Events</option>
                  </select>
                </div>
              </div>
              <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>Notes</label>
              <textarea value={regForm.notes} onChange={handleRegChange("notes")} className="w-full rounded-lg px-3 py-2.5 text-sm outline-none border border-gray-200 focus:border-navy mb-5 text-gray-800" rows={3} placeholder="Anything we should know about your player?" />
              <button type="submit" disabled={regLoading} className="ty-body w-full rounded-full py-3 text-sm font-bold uppercase tracking-wide cursor-pointer transition-transform hover:scale-[1.01] shadow-sm" style={{ background: YELLOW, color: NAVY_DEEPER }}>
                {regLoading ? "Submitting..." : "Register Now"}
              </button>
              <div className="ty-body text-center text-xs mt-3" style={{ color: "#9AAEC0" }}>We'll get back to you within 24 hours.</div>
            </form>
          )}
        </div>
      </section>

      {/* ============================ FOOTER ============================ */}
      <SiteFooter />
    </div>
  );
}
