import React, { useState } from "react";
import SiteFooter from "./SiteFooter";
import SiteUtilityBar from "./SiteUtilityBar";
import SiteHeader from "./SiteHeader";
import RentALaneBanner from "./RentALaneBanner";
import heroCustom from "./assets/hero-custom-image.png";
import crics1Img from "./assets/crics 1.jpeg";
import crics4Img from "./assets/crics4.jpeg";
import kidsBirthdayImg from "./assets/kids_birthday_party.jpg";

const COLORS = {
  navy: "#0A5DA6",
  navyDark: "#053a68",
  navyDeep: "#053a68",
  ink: "#0C1526",
  yellow: "#F6C915",
  yellowDark: "#E0B60F",
  text: "#334155",
  muted: "#64748B",
  border: "#E2E8F0",
};

const navLinks = [
  "HOME",
  "ABOUT US",
  "SPECIAL EVENTS",
  "SUMMER CAMP",
  "CONTACT US",
  "SKA REGISTRATION",
];

const eventSections = [
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fbirthday-party.jpg&w=3840&q=75",
    imageAlt: "Cricket birthday party at 22Yards Dallas",
    title: "Birthday parties",
    intro:
      "Celebrate with a unique twist at 22Yards Dallas! Our cricket-themed birthday parties are perfect for enthusiasts of all ages.",
    features: [
      "A fun-filled atmosphere with cricket activities tailored to the age group.",
      "Customizable options to include cricket games, coaching sessions, and more.",
      "Full access to our facilities, including lanes and cricket fields.",
      "On-site catering options or designated areas for your own catering setup.",
    ],
    dark: false,
    imageSide: "left",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fnets-practice.jpg&w=3840&q=75",
    imageAlt: "Team cricket event in the indoor nets",
    title: "Corporate events",
    intro:
      "Take a break from the office and hit the pitch for an exciting team-building experience.",
    features: [
      "Team-building cricket matches and activities designed to boost camaraderie.",
      "Access to our professional lanes and fields for friendly competitions.",
      "Meeting spaces for presentations or discussions.",
      "Catering services to complement your event.",
    ],
    dark: true,
    imageSide: "right",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fcelebration.jpg&w=3840&q=75",
    imageAlt: "Cricket tournament celebration",
    title: "Tournaments",
    intro:
      "Host your cricket tournament at 22Yards Dallas and enjoy a professional and thrilling sports environment.",
    features: [
      "Full access to our indoor cricket fields and lanes.",
      "Organizational support, including scheduling and umpiring services.",
      "Options for different formats and levels, from friendly matches to competitive leagues.",
      "On-site amenities for players and spectators, including refreshments and seating areas.",
    ],
    dark: false,
    imageSide: "left",
  },
  {
    image: "https://22-yards-five.vercel.app/_next/image?url=%2Fimages%2Fmezzanine-lounge.jpg&w=3840&q=75",
    imageAlt: "Ladies, Stag, and Couples Nights at 22Yards Dallas",
    title: "Ladies' / Stag / Couples Nights",
    intro:
      "Themed recurring nights featuring customized setup, music, and exclusive access for group celebrations and social gatherings.",
    features: [
      "Exclusive access to our mezzanine lounge and indoor entertainment space.",
      "Customized setup with themed lighting, music, and audio-visual arrangements.",
      "Dedicated group celebration packages tailored for social gatherings.",
      "On-site refreshment options and private lounge seating.",
    ],
    dark: true,
    imageSide: "right",
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

const quickLinks = ["Home", "About Us", "Summer Camp", "Special Events", "Gallery", "Contact Us", "SKA Registration"];
const legalLinks = ["Privacy Policy", "Terms of Use", "Disclaimer", "Waiver & Cancellations Policy"];

export default function SpecialEvents() {
  const [openFaq, setOpenFaq] = useState(0);
  const [regSubmitted, setRegSubmitted] = useState(false);

  const toggleFaq = (i) => setOpenFaq((cur) => (cur === i ? null : i));

  const submitRegistration = (e) => {
    e.preventDefault();
    setRegSubmitted(true);
    setTimeout(() => setRegSubmitted(false), 3000);
  };

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: COLORS.text, background: "#fff" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
        .display-font { font-family: 'Oswald', sans-serif; }
        .se-hero-title { font-size: 30px !important; font-weight: 700; }
        @media (min-width: 768px) {
          .se-hero-title { font-size: 48px !important; }
        }
        input, select, textarea { font-family: 'Inter', sans-serif; }
        input::placeholder, textarea::placeholder { color: #94A3B8; }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: ${COLORS.navy} !important;
        }
        .cu-btn-yellow { transition: background 0.15s ease, transform 0.1s ease; }
        .cu-btn-yellow:hover { background: ${COLORS.yellowDark} !important; }
        .cu-btn-yellow:active { transform: scale(0.98); }
        .cu-navlink { position: relative; white-space: nowrap; }
        .cu-navlink.active::after {
          content: '';
          position: absolute;
          left: 0; right: 0; bottom: -6px;
          height: 2px;
          background: ${COLORS.yellow};
        }
        .faq-row-head { cursor: pointer; }
      `}</style>

      {/* ============================ HEADER ============================ */}
      <SiteHeader activePage="SPECIAL EVENTS" />

      {/* Hero */}
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
          className="display-font se-hero-title"
          style={{
            margin: "0 auto",
            letterSpacing: 0.5,
            maxWidth: 760,
            lineHeight: 1.15,
            color: COLORS.yellow,
            position: "relative",
          }}
        >
          SPECIAL EVENTS AT 22YARDS DALLAS
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
          Transform your special occasions into unforgettable experiences at 22Yards Dallas. Our state-of-the-art cricket facility offers a unique and exciting venue for various events. Whether you’re celebrating a birthday, organizing a corporate event, or hosting a cricket tournament, our venue provides the perfect setting for a memorable day.

        </p>
      </div>

      {/* Alternating event sections */}
      {eventSections.map((sec) => (
        <EventSection key={sec.title} sec={sec} />
      ))}


      {/* Discover Facilities Section (Image 2) */}
      <DiscoverFacilitiesSection />

      {/* Rent a Lane Banner Section (Image 2) */}
      <RentALaneBanner />

      {/* Register now */}
      <div className="bg-[#F4F7FC] px-5 py-10 md:px-10 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 max-w-[1200px] mx-auto items-center">
          <div>
            <h2 className="display-font" style={{ fontSize: 32, color: COLORS.yellowDark, margin: 0 }}>
              REGISTER NOW
            </h2>
            <p style={{ fontSize: 14.5, color: COLORS.muted, lineHeight: 1.8, marginTop: 16 }}>
              Ready to take your cricket game to the next level? Whether you're looking to rent a
              lane for solo practice or enroll in one of our expert-led coaching programs, 22
              Yards Dallas is the place to be. Fill out the form below to get more information and
              start your journey to cricket excellence.
            </p>
          </div>

          <RegisterCard />
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}

function EventSection({ sec }) {
  const bgColor = sec.dark ? "#F4F8FB" : "#fff";
  const imageFirst = sec.imageSide === "left";

  const imageBlock = (
    <div className="relative h-[280px] sm:h-[350px] md:h-[400px] w-full rounded-2xl overflow-hidden bg-[#0A5DA6]">
      <img
        src={sec.image}
        alt={sec.imageAlt}
        loading="lazy"
        className="w-full h-full object-cover block"
      />
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(6,47,95,0.02) 35%, rgba(6,47,95,0.62) 100%)" }}
      />
    </div>
  );

  const textBlock = (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-9">
      <h2
        className="display-font"
        style={{ fontSize: 30, fontWeight: 700, color: COLORS.yellowDark, margin: 0, letterSpacing: 0.3 }}
      >
        {sec.title.toUpperCase()}
      </h2>
      <p style={{ fontSize: 14, color: COLORS.muted, lineHeight: 1.8, marginTop: 14, marginBottom: 20 }}>
        {sec.intro}
      </p>
      <div style={{ fontWeight: 700, fontSize: 14, color: COLORS.navy, marginBottom: 12 }}>
        Features include:
      </div>
      <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
        {sec.features.map((item, idx) => {
          if (Array.isArray(item)) {
            const [label, body] = item;
            return (
              <li key={idx} style={{ fontSize: 13.5, color: COLORS.text, lineHeight: 1.6 }}>
                <span style={{ fontWeight: 700, color: COLORS.navy }}>{label}:</span>{" "}
                <span style={{ color: COLORS.muted }}>{body}</span>
              </li>
            );
          }
          return (
            <li key={idx} style={{ fontSize: 13.5, color: COLORS.text, lineHeight: 1.6 }}>
              <span style={{ color: COLORS.muted }}>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div style={{ background: bgColor }} className="px-5 py-10 md:px-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-[1160px] mx-auto items-center">
        {imageFirst ? (
          <>
            {imageBlock}
            {textBlock}
          </>
        ) : (
          <>
            {textBlock}
            {imageBlock}
          </>
        )}
      </div>
    </div>
  );
}


function DiscoverFacilitiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const facilitiesData = [
    {
      title: "INDOOR CRICKET FACILITY",
      desc: "Our premier indoor facility in Texas is designed to provide an unparalleled cricket experience. With cutting-edge amenities and a focus on player development, our facility sets a new standard for cricket training.",
    },
    {
      title: "12 LANES",
      desc: "Featuring 12 lanes equipped with the latest Matts and Nets by Gabba, our facility offers a realistic and high-quality training environment. These lanes are perfect for players of all skill levels to hone their techniques.",
    },
    {
      title: "BOWLING MACHINES",
      desc: "Our facility boasts 4 state-of-the-art bowling machines with auto feeders. These machines are designed to simulate real match scenarios, providing an immersive training experience for batsmen.",
    },
    {
      title: "CRICKET SIMULATORS",
      desc: "Experience the thrill of the game with our 2 'BatFast' professional cricket simulators. These simulators offer a realistic cricketing experience, helping players improve their reaction time and shot selection.",
    },
    {
      title: "CHIP-ENABLED BATTING",
      desc: "Our advanced chip-enabled batting technology is a game-changer for skill development. This technology allows players to track their performance and gain insights into their batting technique.",
    },
    {
      title: "GYM",
      desc: "Our cricket-specific fitness and conditioning gym is tailored to the unique demands of the sport. Here, players can work on their strength, agility, and endurance, essential components for top-level cricket performance.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 border-t border-b border-slate-200 bg-[#F4F7FC]">
      <div className="max-w-[1160px] mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        {/* Left Column Text */}
        <div>
          <div className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: COLORS.yellowDark }}>
            SERVICES
          </div>
          <h2 className="display-font text-3xl md:text-5xl font-extrabold uppercase tracking-tight mb-6 leading-tight" style={{ color: COLORS.navy }}>
            DISCOVER OUR <span style={{ color: COLORS.yellowDark }}>FACILITIES</span>
          </h2>
          <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: COLORS.muted, fontFamily: "Inter, sans-serif" }}>
            Experience the pinnacle of indoor sports and training at 22Yards Dallas, the ultimate destination for cricket and soccer enthusiasts. Our facility, equipped with the latest technology and top-tier amenities, caters to players of all ages and skill levels. Whether you are embarking on your sporting journey or aiming to refine your professional skills, our state-of-the-art complex is meticulously designed to foster excellence in every athlete.
          </p>
        </div>

        {/* Right Column 6 Expandable Feature Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start"
          onMouseLeave={() => setHoveredIdx(null)}
        >
          {facilitiesData.map((item, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`transition-all duration-300 rounded-xl p-5 shadow-xl cursor-pointer flex flex-col justify-center border ${isHovered
                  ? "bg-[#053a68] border-[#F6C915] scale-[1.02] z-20 shadow-2xl"
                  : "bg-[#0A5DA6]/80 border-white/15 hover:bg-[#053a68]/90 text-center"
                  }`}
                style={{
                  minHeight: isHovered ? "220px" : "65px",
                }}
              >
                <h3 className="display-font font-bold text-sm md:text-base tracking-wider uppercase text-white">
                  {item.title}
                </h3>
                {isHovered && (
                  <p className="text-white/90 text-xs md:text-sm leading-relaxed mt-2.5 transition-opacity duration-300 text-left" style={{ fontFamily: "Inter, sans-serif" }}>
                    {item.desc}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "11px 14px",
  borderRadius: 8,
  border: `1px solid ${COLORS.border}`,
  fontSize: 14,
  color: COLORS.text,
  background: "#fff",
  boxSizing: "border-box",
};

function RegisterCard() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "Male",
    activity: "",
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_uexjiwj",
          template_id: "template_stanys9",
          user_id: "Y4cfzv51x7E5ofvrs",
          template_params: {
            name: `${form.firstName} ${form.lastName}`,
            email: form.email,
            to_email: form.email,
            reply_to: form.email,
            phone: form.phone,
            message: `Phone: ${form.phone || 'N/A'}\nGender: ${form.gender}\nActivity: ${form.activity || 'Special Events'}\n\nNotes:\n${form.notes || 'No additional notes provided.'}`,
            title: `Special Events Registration - ${form.activity || '22Yards Dallas'}`,
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
        activity: "",
        notes: "",
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="p-5 sm:p-8 bg-white rounded-2xl border border-slate-200"
    >
      {submitted ? (
        <div style={{ padding: "20px", borderRadius: 12, background: "#ECFDF5", border: "1px solid #10B981", color: "#065F46", fontSize: 14, textAlign: "center", fontWeight: 600 }}>
          ✓ Request Submitted Successfully! Our team at 22Yards Dallas will contact you shortly.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="First name *">
              <input required value={form.firstName} onChange={handleChange("firstName")} type="text" placeholder="First name" style={inputStyle} />
            </Field>
            <Field label="Last name *">
              <input required value={form.lastName} onChange={handleChange("lastName")} type="text" placeholder="Last name" style={inputStyle} />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Email *">
              <input required value={form.email} onChange={handleChange("email")} type="email" placeholder="you@example.com" style={inputStyle} />
            </Field>
            <Field label="Phone">
              <input value={form.phone} onChange={handleChange("phone")} type="tel" placeholder="(469) 222-8473" style={inputStyle} />
            </Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Gender">
              <select value={form.gender} onChange={handleChange("gender")} style={inputStyle}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Activity">
              <input value={form.activity} onChange={handleChange("activity")} type="text" placeholder="e.g. Birthday party" style={inputStyle} />
            </Field>
          </div>
          <Field label="Notes">
            <textarea value={form.notes} onChange={handleChange("notes")} placeholder="Tell us about your event" rows={4} style={{ ...inputStyle, resize: "vertical" }} />
          </Field>

          <button
            type="submit"
            disabled={loading}
            className="cu-btn-yellow"
            style={{
              width: "100%",
              background: COLORS.navy,
              border: "none",
              borderRadius: 10,
              padding: "14px 0",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 0.5,
              color: "#fff",
              cursor: "pointer",
              marginTop: 6,
            }}
          >
            {loading ? "SUBMITTING..." : "REGISTER NOW"}
          </button>
        </form>
      )}
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label
        style={{
          display: "block",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: 0.8,
          color: "#8C9BB5",
          marginBottom: 7,
        }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

function FooterCol({ title, links, accent }) {
  return (
    <div>
      <div style={{ fontSize: 15, fontWeight: 700, color: accent, marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <a key={l} href="#" style={{ fontSize: 13, color: "#B9C6DE", textDecoration: "none" }}>
            {l}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <div
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: "#fff",
      }}
    >
      {children}
    </div>
  );
}
