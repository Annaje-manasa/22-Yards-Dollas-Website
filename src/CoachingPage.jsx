import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Mail,
  Calendar,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Users,
  Layers,
  Activity,
  Gauge,
  Target,
  ClipboardList,
  Dumbbell,
  Award,
  Crosshair,
  Send,
  UserCheck,
  Zap,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import RentALaneBanner from "./RentALaneBanner";
import coachingHeroImg from "./assets/crics3.jpeg";
import crics1Img from "./assets/crics 1.jpeg";
import crics2Img from "./assets/crics 2.jpeg";
import crics4Img from "./assets/crics4.jpeg";
import weekendGroupImg from "./assets/weekend_group_coaching.jpg";
import oneOnOneImg from "./assets/one_on_one_coaching.jpg";
import cricketCampsImg from "./assets/cricket_camps.jpg";
import eliteCoachingImg from "./assets/elite_coaching.jpg";
import level1Img from "./assets/level1_beginner.jpg";
import level2Img from "./assets/level2_intermediate.jpg";
import level3Img from "./assets/level3_professional.jpg";

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
    `}</style>
  );
}

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

/* ------------------------------------------------------------------ */
/*  Data: Coaching Features (4 Cards)                                 */
/* ------------------------------------------------------------------ */
const coachingFeatures = [
  {
    title: "Weekend group sessions",
    image: weekendGroupImg,
    altText: "Weekend group sessions guidance",
    description:
      "Improve your game, develop fitness, make new friends, and receive expert coaching.",
  },
  {
    title: "One to one coaching",
    image: oneOnOneImg,
    altText: "One-on-one personalized coaching session",
    description:
      "Intensive individual support for noticeable improvements to your game. Specialist sessions for players of all ages looking to improve technique, physical and mental aspects of their game.",
  },
  {
    title: "Cricket camps",
    image: cricketCampsImg,
    altText: "Youth cricket camp group training",
    description:
      "For young players looking to develop their cricket, be active, get fit and receive expert coaching while having fun!",
  },
  {
    title: "Elite coaching",
    image: eliteCoachingImg,
    altText: "High-intensity elite player training",
    description:
      "Intense group coaching for advanced trainees.",
  },
];

/* ------------------------------------------------------------------ */
/*  Data: Coaching Levels (Image 1, Image 2, Image 3 Content)         */
/* ------------------------------------------------------------------ */
const coachingLevels = [
  {
    id: 1,
    tabName: "Level-1",
    tabSub: "Beginner - Fun n Learn Cricket",
    title: "Beginner - Fun n Learn Cricket",
    age: "Ages 5 – 9 Years",
    duration: "12 Weeks Default Block",
    summary:
      "Level 1 is designed to introduce cricket to beginner players in a fun setting and familiarize them with the fundamentals of the game.",
    subTitle: "1 on 1 Coaching",
    subCopy:
      "22Yards Dallas offers unparalleled one-on-one training where your child can get the individual, personalized attention they need to truly master the game.",
    sideText: "One to one coaching Guidance",
    image: level1Img,
    focusAreas: [
      "Basic Batting Stance & Grip",
      "Overarm Bowling Technique",
      "Catching & Athletic Fielding",
      "Introduction to Cricket Rules",
    ],
  },
  {
    id: 2,
    tabName: "Level-2",
    tabSub: "Intermediate - Play n Enjoy Cricket",
    title: "Intermediate - Play n Enjoy Cricket",
    age: "Ages 10 – 14 Years",
    duration: "12 Weeks Default Block",
    summary:
      "Level 2 is designed to help players master the fundamental techniques of batting, bowling, and fielding.",
    subTitle: "1 on 1 Advanced Coaching",
    subCopy:
      "As an advanced cricketer in our one-on-one cricket training program, your child will have complete access to Coach Ashok, plus CricMax's industry-defining cricket technology",
    sideText:
      "The coaching staff's personalized attention and guidance, along with cutting-edge features like chip-enabled batting, make it a premier indoor cricket facility",
    image: level2Img,
    focusAreas: [
      "Shot Execution & Footwork",
      "Seam & Spin Bowling Control",
      "Wicketkeeping & Ground Fielding",
      "Match Tactics & Target Chases",
    ],
  },
  {
    id: 3,
    tabName: "Level-3",
    tabSub: "Professional - Play Real Cricket",
    title: "Professional - Play Real Cricket",
    age: "Ages 15+ & Competitive Athletes",
    duration: "12 Weeks / Annual Academy Track",
    summary:
      "Level 3 is designed for serious cricket players who want to take their batting, bowling and fielding skills to the next level.",
    subTitle: "Smart Lane Setup",
    subCopy:
      "Our Smart Lanes are equipped with the latest technology to cater to the needs of all athletes, from experienced cricketers to beginners. These lanes provide a customized environment for skill enhancement.",
    sideText:
      "Equipped with automated bowling machines and HD ball tracking analytics.",
    image: level3Img,
    focusAreas: [
      "Power Hitting & Technical Swing",
      "Death Bowling & Tactical Variations",
      "Cricket-Specific Athletic Fitness",
      "Zonal & National Trial Preparation",
    ],
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
    a: "Cricket is rapidly gaining popularity in the United States, and for good reason. As more and more people from diverse backgrounds immigrate to the country, they bring with them their passion for the game. In fact, cricket is now one of the fastest-growing sports in the U.S. and is played by millions of people across the country. The future of cricket in the U.S. looks bright, with a growing number of youth leagues and tournaments being established every year. With the support of 22Yards Dallas's expert coaching staff, your child can develop the skills and strategies needed to excel on the field and take their game to the next level.",
  },
];

export default function CoachingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [activeLevelTab, setActiveLevelTab] = useState(1);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Form State
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    activity: "Level 1: Beginner",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const applicantName = `${form.firstName} ${form.lastName}`.trim();
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: applicantName,
            to_name: applicantName,
            user_name: applicantName,
            email: form.email,
            to_email: form.email,
            user_email: form.email,
            reply_to: form.email,
            phone: form.phone || "N/A",
            message: `Cricket Coaching Registration Request\n-----------------------------------\nApplicant: ${applicantName}\nEmail: ${form.email}\nPhone: ${form.phone || "N/A"}\nGender / Category: ${form.gender}\nPreferred Track: ${form.activity || "Level 1: Beginner"}\n\nAdditional Notes / Experience:\n${form.notes || "No additional notes provided."}`,
            title: `Cricket Coaching Registration - 22Yards Dallas (${form.activity || "Level 1"})`,
          },
        }),
      });
      setSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "Male",
        activity: "Level 1: Beginner",
        notes: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      console.error("Email send error:", err);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const selectedLevel = coachingLevels.find((l) => l.id === activeLevelTab) || coachingLevels[0];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans">
      <FontImport />
      <SiteHeader activePage="COACHING" />

      {/* ------------------------------------------------------------------ */}
      {/* 1. HERO BANNER SECTION                                             */}
      {/* ------------------------------------------------------------------ */}
      <section id="coaching" style={{ background: NAVY }} className="relative overflow-hidden text-white">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#3E8FD0" }} />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative text-left">
          <div>
            <Eyebrow dark>Coaching</Eyebrow>
            <h1 className="ty-display text-3xl md:text-5xl font-bold uppercase text-white leading-[1.1] mb-6">
              Cricket Coaching &amp; Training Programs in Dallas, TX
            </h1>
            <p className="ty-body text-white/90 text-base md:text-lg mb-4">
              At 22Yards Dallas Academy, we cater to all levels of experience, from beginners to those already making strides on the pitch. Our nurturing environment not only sharpens cricket skills but also imparts essential life lessons useful both on and off the field.
            </p>
            <p className="ty-body text-white/75 text-sm leading-relaxed">
            </p>
          </div>
          <div className="flex justify-center items-center w-full">
            <img
              src={coachingHeroImg}
              alt="Cricket Coaching &amp; Training Programs - 22Yards Dallas"
              className="w-full h-auto rounded-2xl shadow-xl object-contain border border-white/10"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 2. UNLOCK POTENTIAL CONTENT & REGISTRATION FORM                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Content */}
          <div className="lg:col-span-7">
            <Eyebrow>ACADEMY OVERVIEW</Eyebrow>
            <h2
              className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-6 leading-tight"
              style={{ color: NAVY }}
            >
              Unlock Your Child's Cricket Potential at 22Yards Dallas Academy
            </h2>

            <div className="space-y-4 ty-body text-sm sm:text-base leading-relaxed" style={{ color: TEXT_MUTED }}>
              <p>
                Searching for a place where your child’s cricket aspirations can flourish? 22Yards Dallas Academy is your answer! We offer exceptional coaching and facilities, along with personalized guidance, emphasizing teamwork and sportsmanship. It’s the ideal setting to nurture your child’s cricket talents.
              </p>
              <p>
                At 22Yards Dallas Academy, we cater to all levels of experience, from beginners to those already making strides on the pitch. Our nurturing environment not only sharpens cricket skills but also imparts essential life lessons useful both on and off the field.
              </p>
              <p>
                The backbone of our academy is our dedicated coaching team, passionate about unlocking each child’s cricket potential. We focus on building a strong foundation in the fundamentals and fostering a deep love for the game, incorporating sportsmanship, camaraderie, and enjoyment into every session.
              </p>
              <p className="font-semibold text-gray-900">
                Explore our coaching offerings below and feel free to reach out with any questions about our coaching methodology or enrollment process.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border" style={{ background: BG_SECTION, borderColor: BORDER_COLOR }}>
                <div className="ty-display text-xl font-bold mb-1" style={{ color: NAVY }}>12 Weeks</div>
                <div className="ty-body text-xs" style={{ color: TEXT_MUTED }}>Structured Level Blocks</div>
              </div>
              <div className="p-4 rounded-xl border" style={{ background: BG_SECTION, borderColor: BORDER_COLOR }}>
                <div className="ty-display text-xl font-bold mb-1" style={{ color: NAVY }}>1-on-1 &amp; Squads</div>
                <div className="ty-body text-xs" style={{ color: TEXT_MUTED }}>Personalized Training</div>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form Card */}
          <div
            id="register"
            className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm relative overflow-hidden"
          >
            <h3 className="ty-display text-2xl font-bold uppercase mb-2 text-center" style={{ color: NAVY }}>
              Cricket Coaching Request Form
            </h3>
            <p className="ty-body text-xs text-center mb-6" style={{ color: TEXT_MUTED }}>
              Complete the form below and our coaching team will contact you shortly regarding program availability and schedules.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-400 text-emerald-900 rounded-xl p-6 text-center ty-body shadow-sm">
                <CheckCircle2 size={32} className="mx-auto mb-2 text-emerald-600" />
                <h4 className="font-bold text-base mb-1">Registration Submitted!</h4>
                <p className="text-xs opacity-90">
                  Thank you for registering. Our team at 22Yards Dallas will contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={handleChange("firstName")}
                      placeholder="First Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={handleChange("lastName")}
                      placeholder="Last Name"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange("phone")}
                      placeholder="(469) 222-8473"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      Gender / Age Category
                    </label>
                    <select
                      value={form.gender}
                      onChange={handleChange("gender")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Youth Boy (Under 14)">Youth Boy (Under 14)</option>
                      <option value="Youth Girl (Under 14)">Youth Girl (Under 14)</option>
                    </select>
                  </div>
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                      Preferred Track
                    </label>
                    <select
                      value={form.activity}
                      onChange={handleChange("activity")}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors"
                    >
                      <option value="Level 1: Beginner">Level 1: Beginner</option>
                      <option value="Level 2: Intermediate">Level 2: Intermediate</option>
                      <option value="Level 3: Advanced">Level 3: Advanced</option>
                      <option value="Private 1-on-1 Coaching">Private 1-on-1 Coaching</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="ty-body block text-xs font-bold uppercase mb-1.5" style={{ color: NAVY }}>
                    Additional Notes / Experience
                  </label>
                  <textarea
                    rows={3}
                    value={form.notes}
                    onChange={handleChange("notes")}
                    placeholder="Tell us about your child's playing background or preferred schedule..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 text-xs sm:text-sm outline-none focus:border-[#0A5DA6] transition-colors placeholder-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="cu-btn-yellow w-full py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 shadow"
                  style={{ background: YELLOW, color: NAVY_DEEPER }}
                >
                  <Send size={14} />
                  {loading ? "Submitting..." : "REGISTER NOW"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 3. CRICKET COACHING AT 22YARDS DALLAS (4 Feature Cards Grid)       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-b" style={{ background: BG_SECTION, borderColor: BORDER_COLOR }}>
        <div className="max-w-7xl mx-auto text-center">
          <Eyebrow>OUR PROGRAMS</Eyebrow>
          <h2
            className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-12"
            style={{ color: NAVY }}
          >
            Cricket Coaching at 22Yards Dallas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {coachingFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                style={{ borderColor: BORDER_COLOR }}
              >
                <div className="h-48 sm:h-56 w-full relative overflow-hidden bg-slate-200">
                  <img
                    src={feat.image}
                    alt={feat.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-start">
                  <h3 className="ty-display text-xl sm:text-2xl font-bold uppercase mb-3" style={{ color: NAVY }}>
                    {feat.title}
                  </h3>
                  <p className="ty-body text-xs sm:text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
                    {feat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* 4. COACHING LEVELS AT 22YARDS DALLAS (Interactive Tabs)            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <Eyebrow>DEVELOPMENT PATHWAY</Eyebrow>
          <h2
            className="ty-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase mb-8"
            style={{ color: NAVY }}
          >
            Coaching Levels at 22Yards Dallas
          </h2>

          {/* Level Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
            {coachingLevels.map((lvl) => {
              const active = activeLevelTab === lvl.id;
              return (
                <button
                  key={lvl.id}
                  onMouseEnter={() => setActiveLevelTab(lvl.id)}
                  onFocus={() => setActiveLevelTab(lvl.id)}
                  onClick={() => setActiveLevelTab(lvl.id)}
                  className="p-4 rounded-xl border text-center transition-all cursor-pointer"
                  style={{
                    background: active ? NAVY : BG_SECTION,
                    borderColor: active ? NAVY : BORDER_COLOR,
                    color: active ? "#ffffff" : NAVY,
                  }}
                >
                  <div className="ty-display text-base sm:text-lg font-bold uppercase mb-0.5">
                    {lvl.tabName}
                  </div>
                  <div
                    className="ty-body text-xs font-semibold uppercase tracking-wider"
                    style={{ color: active ? YELLOW : TEXT_MUTED }}
                  >
                    {lvl.tabSub}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Level Content Box (Matching Screenshots 1, 2 & 3) */}
          <div
            className="rounded-2xl border p-6 sm:p-8 text-left shadow-sm bg-white"
            style={{ borderColor: BORDER_COLOR }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Title, Summaries & Sub-Features */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-4 mb-4" style={{ borderColor: BORDER_COLOR }}>
                  <h3 className="ty-display text-2xl sm:text-3xl font-bold" style={{ color: NAVY }}>
                    {selectedLevel.title}
                  </h3>
                  <span
                    className="inline-block ty-body text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full"
                    style={{ background: NAVY, color: "#ffffff" }}
                  >
                    {selectedLevel.duration}
                  </span>
                </div>

                <p className="ty-body text-sm text-gray-700 leading-relaxed mb-6">
                  {selectedLevel.summary}
                </p>

                {selectedLevel.subTitle && (
                  <div className="mb-6 border-l-4 pl-4" style={{ borderColor: NAVY }}>
                    <h4 className="ty-display text-xl font-bold mb-2" style={{ color: NAVY }}>
                      {selectedLevel.subTitle}
                    </h4>
                    <p className="ty-body text-sm text-gray-600 leading-relaxed">
                      {selectedLevel.subCopy}
                    </p>
                  </div>
                )}

                <h4 className="ty-display text-sm font-bold uppercase mb-3" style={{ color: NAVY }}>
                  Core Modules &amp; Focus Areas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedLevel.focusAreas.map((item, i) => (
                    <div
                      key={i}
                      className="bg-[#F4F8FC] rounded-lg p-3 border flex items-center gap-3 text-xs font-semibold text-gray-800 ty-body"
                      style={{ borderColor: BORDER_COLOR }}
                    >
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                        style={{ background: NAVY, color: "#ffffff" }}
                      >
                        {i + 1}
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Level Image */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                {selectedLevel.image && (
                  <div className="rounded-xl overflow-hidden shadow border" style={{ borderColor: BORDER_COLOR }}>
                    <img
                      src={selectedLevel.image}
                      alt={selectedLevel.title}
                      className="w-full h-56 sm:h-72 object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6. RENT A LANE PROMO CARD                                          */}
      {/* ------------------------------------------------------------------ */}
      <RentALaneBanner />

      {/* ------------------------------------------------------------------ */}
      {/* 5. FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                        */}
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
            <p className="ty-body" style={{ color: TEXT_MUTED }}>
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
                      <p className="ty-body text-sm leading-relaxed" style={{ color: TEXT_MUTED }}>
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

      {/* ------------------------------------------------------------------ */}

      {/* ------------------------------------------------------------------ */}


      {/* ------------------------------------------------------------------ */}
      {/* 9. FOOTER                                                          */}
      {/* ------------------------------------------------------------------ */}
      <SiteFooter />
    </div>
  );
}
