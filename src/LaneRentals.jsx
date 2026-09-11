import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Calendar,
  Target,
  Activity,
  Users,
  Shirt,
  Dumbbell,
  Check,
  ChevronDown,
  ArrowRight,
  Send,
} from "lucide-react";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";
import RentALaneBanner from "./RentALaneBanner";

// Content-matched custom asset images
import indoorFacilityImg from "./assets/indoor_cricket_facility.jpg";
import profLanesImg from "./assets/professional_cricket_lanes.jpg";
import bowlingMachineImg from "./assets/bowling_machine_auto_feeder.jpg";
import indoorFieldImg from "./assets/indoor_cricket_field.jpg";
import oneOnOneImg from "./assets/one_on_one_coaching.jpg";
import cricketCampsImg from "./assets/cricket_camps.jpg";
import eliteCoachingImg from "./assets/elite_coaching.jpg";
import weekendGroupImg from "./assets/weekend_group_coaching.jpg";
import level1Img from "./assets/level1_beginner.jpg";
import level2Img from "./assets/level2_intermediate.jpg";
import level3Img from "./assets/level3_professional.jpg";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053a68",
  navyDeep: "#062F5F",
  ink: "#0C1526",
  yellow: "#F6C915",
  yellowDark: "#E0B60F",
  text: "#334155",
  muted: "#64748B",
  border: "#E4ECF3",
};

const facilities = [
  {
    n: "01",
    icon: <Target size={20} />,
    title: "12 Professional Cricket Lanes",
    desc: "Our facility boasts 12 top-of-the-line cricket lanes, each equipped with premium Matts and Nets by Gabba. These lanes replicate a real cricket pitch environment, ensuring both authenticity and safety. They are perfect for refining batting and bowling skills, offering a consistent and high-quality experience for players of all levels.",
    img: profLanesImg,
    reverse: false,
  },
  {
    n: "02",
    icon: <Activity size={20} />,
    title: "4 Advanced Bowling Machines with Auto Feeders",
    desc: "The ‘BatFast’ cricket simulators at our facility offer an immersive and interactive cricketing experience. These simulators use advanced technology to mimic real-game scenarios, helping players to improve their batting skills. They are an excellent tool for both entertainment and skill development, suitable for players wanting to experience cricket in a novel and exciting way.",
    img: bowlingMachineImg,
    reverse: true,
  },
  {
    n: "03",
    icon: <Users size={20} />,
    title: "2 Full-Sized Indoor Cricket Fields",
    desc: "Our two full-sized indoor cricket fields are designed to host team practices, matches, and tournaments. These fields meet professional standards, providing an ideal setting for both casual play and competitive cricket. The indoor environment means that play can continue in any weather, ensuring that your cricket training and matches are never interrupted.",
    img: indoorFieldImg,
    reverse: false,
  },
  {
    n: "04",
    icon: <Target size={20} />,
    title: "2 'BatFast' Professional Cricket Simulators",
    desc: "The 'BatFast' cricket simulators at our facility offer an immersive and interactive cricketing experience. These simulators use advanced technology to mimic real-game scenarios, helping players to improve their batting skills. They are an excellent tool for both entertainment and skill development, suitable for players wanting to experience cricket in a novel and exciting way.",
    img: oneOnOneImg,
    reverse: true,
  },
  {
    n: "05",
    icon: <Shirt size={20} />,
    title: "ProShop",
    desc: "Our ProShop is a one-stop destination for all your cricket gear and apparel needs. We stock the latest and best in cricket equipment, ranging from bats and balls to protective gear and clothing. Whether you're a beginner or a seasoned player, our ProShop has everything you need to gear up for your cricket journey.",
    img: cricketCampsImg,
    reverse: false,
  },
  {
    n: "06",
    icon: <Dumbbell size={20} />,
    title: "Specialized Gym",
    desc: "Our gym is specially tailored for cricket players, focusing on fitness and conditioning specific to the demands of the sport. It features equipment and training programs designed to enhance strength, agility, and endurance, crucial aspects of cricket fitness. This specialized approach ensures that players can optimize their physical conditioning for better performance on the cricket field.",
    img: eliteCoachingImg,
    reverse: true,
  },
];

const bookingOptions = [
  {
    title: "Field Rentals",
    desc: "Perfect for personal practice or small group sessions, our hourly lane rentals offer flexibility and convenience. Whether you're looking to refine your skills individually or with a few friends, these lanes provide the ideal space and environment for focused cricket practice.",
    img: weekendGroupImg,
    cta: "Reserve Now",
    href: "#book-a-lane",
  },
  {
    title: "Corporate Events",
    desc: "Our full-sized indoor cricket fields are available for larger group practices, team training, or competitive matches. With field rentals, teams can enjoy the full expanse of our professional-standard cricket facilities, ideal for honing team strategies and skills in a match-like setting.",
    img: level2Img,
    cta: "Contact Us",
    href: "#contact",
  },
  {
    title: "Tournaments",
    desc: "22 Yards Dallas offers a dynamic venue for various special events, making it the perfect place for cricket-themed celebrations and gatherings. Our facility is equipped to host a range of events, including Birthday Parties, Corporate Events & Tournaments.",
    img: level3Img,
    cta: "Contact Us",
    href: "#contact",
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

function Eyebrow({ children, dark }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold tracking-[0.15em] uppercase mb-3" style={{ color: dark ? COLORS.yellow : COLORS.navy }}>
      <span className="inline-block w-6 h-[2px]" style={{ background: COLORS.yellow }} />
      {children}
    </div>
  );
}

export default function LaneRentals() {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, background: "#fff" }} className="w-full">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        .display-font { font-family: 'Oswald', sans-serif; }
        .lr-hero-title { font-size: 32px !important; font-weight: 700; }
        .lr-section-title { font-size: 28px !important; font-weight: 700; }
        @media (min-width: 768px) {
          .lr-hero-title { font-size: 48px !important; }
          .lr-section-title { font-size: 36px !important; }
        }
        input, select, textarea { font-family: 'Inter', sans-serif; }
        input::placeholder, textarea::placeholder { color: #94A3B8; }
        .cu-btn-yellow { transition: background 0.15s ease, transform 0.1s ease; }
        .cu-btn-yellow:hover { background: ${COLORS.yellowDark} !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
        .faq-row { cursor: pointer; transition: background 0.15s ease; }
        .faq-row:hover { background: #EEF4FA; }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="LANE RENTALS" />

      {/* ============================ HERO ============================ */}
      <div
        style={{
          background: COLORS.navy,
          color: "#fff",
          padding: "72px 40px 76px",
          borderBottom: `4px solid ${COLORS.yellow}`,
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: -110,
            left: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#3E8FD0",
            opacity: 0.2,
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: -140,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            background: "#3E8FD0",
            opacity: 0.2,
          }}
        />
        <h1
          className="display-font lr-hero-title"
          style={{
            margin: "0 auto",
            letterSpacing: 0.5,
            maxWidth: 780,
            lineHeight: 1.1,
            color: COLORS.yellow,
            position: "relative",
          }}
        >
          LANE RENTAL
        </h1>
        <p style={{ marginTop: 20, fontSize: 18, fontWeight: 600, color: "#fff", position: "relative" }}>
        </p>
        <p
          style={{
            marginTop: 16,
            fontSize: 14,
            color: "#C9DAF2",
            maxWidth: 760,
            margin: "16px auto 0",
            lineHeight: 1.7,
            position: "relative",
          }}
        >
          Experience the excitement of indoor cricket at 22Yards Dallas, where we’re redefining the sport in Texas! Whether you’re a seasoned cricketer or new to the game, our state-of-the-art facility is designed to cater to all your cricketing needs, away from the intense Texas heat.
        </p>
      </div>

      {/* ===================================================================== */}
      {/* 1. YOUR ULTIMATE CRICKET DESTINATION                                  */}
      {/* ===================================================================== */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-200">
            <img
              src={indoorFacilityImg}
              alt="22Yards Dallas Indoor Cricket Facility"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-span-6 text-left">
            <Eyebrow>Your Ultimate Cricket Destination</Eyebrow>
            <h2
              className="display-font lr-section-title uppercase mb-4"
              style={{ color: COLORS.navy }}
            >
              22 Yards Dallas Indoor Cricket – Your Ultimate Cricket Destination
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-slate-600">
              <strong className="text-slate-900">Discover the excitement of indoor cricket at 22 Yards Dallas!</strong> Our facility is tailored for cricket enthusiasts and players seeking a premium indoor practice experience. Here's what sets us apart:
            </p>
            <div className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-900">
              Our Facility Offers:
            </div>
            <div className="space-y-3">
              {[
                "An inclusive and dynamic environment for all cricket lovers.",
                "Options for players of all skill levels, from beginners to advanced.",
                "A great way to enjoy cricket while improving fitness and skills.",
              ].map((t) => (
                <div key={t} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} />
                  </div>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. OUR FACILITIES                                                     */}
      {/* ===================================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-b" style={{ background: "#F4F8FC", borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center"><Eyebrow>Our Facilities</Eyebrow></div>
          <h2 className="display-font lr-section-title uppercase mb-4" style={{ color: COLORS.navy }}>
            22 Yards Dallas Rental Lane Bookings
          </h2>
          <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need for a serious indoor cricket session, built to professional standards and available by the hour.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-16">
          {facilities.map((f) => (
            <div
              key={f.title}
              className={`grid md:grid-cols-2 gap-10 items-center bg-white p-6 md:p-8 rounded-2xl border shadow-sm ${f.reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              style={{ borderColor: COLORS.border }}
            >
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-200">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center font-bold shadow-sm flex-shrink-0"
                    style={{ background: COLORS.yellow, color: COLORS.navyDeep }}
                  >
                    {f.icon}
                  </div>
                  <h3 className="display-font font-bold text-xl md:text-2xl uppercase m-0" style={{ color: COLORS.navy }}>
                    {f.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 3. BOOK YOUR SESSION                                                  */}
      {/* ===================================================================== */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="flex justify-center"><Eyebrow>Book Your Session</Eyebrow></div>
          <h2 className="display-font lr-section-title uppercase mb-4" style={{ color: COLORS.navy }}>
            Booking Options
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Choose the format that fits — solo practice, team training, or a full event on our lanes.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {bookingOptions.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl overflow-hidden shadow-sm border flex flex-col justify-between" style={{ borderColor: COLORS.border }}>
              <div>
                <div className="aspect-[4/3] relative bg-slate-200 overflow-hidden">
                  <img src={b.img} alt={b.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 text-left">
                  <h3 className="display-font font-bold text-xl uppercase mb-3" style={{ color: COLORS.navy }}>
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{b.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6 text-left">
                <a
                  href={b.href || "#book-a-lane"}
                  className="display-font inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-transform hover:scale-[1.02] shadow cursor-pointer"
                  style={{ background: COLORS.yellow, color: COLORS.navyDeep }}
                >
                  {b.cta} <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* 5. RENT A LANE                                                        */}
      {/* ===================================================================== */}
      <RentALaneBanner />
      {/* ===================================================================== */}
      {/* 4. GOT QUESTIONS                                                      */}
      {/* ===================================================================== */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-b" style={{ background: "#F4F8FC", borderColor: COLORS.border }}>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="flex justify-center"><Eyebrow>Got Questions</Eyebrow></div>
          <h2 className="display-font lr-section-title uppercase mb-4" style={{ color: COLORS.navy }}>
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Everything parents and players usually want to know before getting started.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white text-left">
          {faqs.map((f, i) => {
            const open = openFaq === i;
            return (
              <div key={f.q} className="border-b border-gray-200 last:border-b-0">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between px-6 py-4.5 text-left cursor-pointer transition-colors"
                  style={{ background: open ? COLORS.navy : "#F4F8FB" }}
                >
                  <span
                    className="font-bold text-sm sm:text-base pr-4"
                    style={{ color: open ? COLORS.yellow : "#1E3A54" }}
                  >
                    {f.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className="flex-shrink-0 transition-transform duration-200"
                    style={{
                      color: open ? COLORS.yellow : "#9AAEC0",
                      transform: open ? "rotate(180deg)" : "none",
                    }}
                  />
                </button>
                {open && (
                  <div className="px-6 py-5 bg-white">
                    <p className="text-xs sm:text-sm leading-relaxed" style={{ color: COLORS.muted }}>
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ===================================================================== */}


      {/* ============================ FOOTER ============================ */}
      <SiteFooter />
    </div>
  );
}
