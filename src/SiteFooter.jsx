import { useState } from "react";

const quickLinks = [
  "Home",
  "About Us",
  "Our Team",
  "Coaching",
  "Lane Rental",
  "Special Events",
  "Gallery",
  "Contact Us",
  "Store",
  "Registration",
];
const moreLinks = ["Privacy Policy", "Terms and Conditions", "Disclaimer", "FAQs", "Waiver & Cancellations Policy"];

const linkHrefs = {
  "Home": "#",
  "About Us": "#about",
  "Our Team": "#our-team",
  "Coaching": "#coaching",
  "Lane Rental": "#lane-rentals",
  "Lane Rentals": "#lane-rentals",
  "Special Events": "#special-events",
  "Summer Camp": "#summer-camp",
  "Contact Us": "#contact",
  "Store": "#store",
  "Registration": "https://docs.google.com/forms/d/e/1FAIpQLScPhKS-lx35asRIcnE8TSXLftCAkrbWK-n4BwTao9FKsxYNcA/viewform?usp=dialog",
  "Gallery": "#gallery",
  "Franchise": "#",
  "FAQs": "#",
};

const footerLinkStyle = { color: "#9DB4DA", textDecoration: "none" };

const mapUrl = "https://maps.google.com/?q=2601+E+State+Hwy+121+Business,+Lewisville,+TX+75056";
const facebookUrl = "https://www.facebook.com/22yardsdallas/";
const instagramUrl = "https://www.instagram.com/22yardsdallas/";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#F6C915", marginBottom: 14 }}>NEWSLETTER</div>
      <p style={{ fontSize: 13, color: "#AEC3E6", marginBottom: 14 }}>Sign up for updates, events, and academy news.</p>
      {subscribed ? (
        <div style={{ padding: "8px 12px", borderRadius: 8, background: "rgba(16,185,129,0.2)", border: "1px solid #10B981", color: "#6EE7B7", fontSize: 12, fontWeight: 600 }}>
          ✓ Thank you for subscribing to 22Yards Dallas updates!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-[320px]">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 min-w-0 px-2.5 py-2 rounded-l-lg border-none text-xs text-gray-800 bg-white outline-none"
          />
          <button type="submit" className="bg-[#F6C915] border-none rounded-r-lg px-3 font-bold text-xs text-[#053A68] cursor-pointer whitespace-nowrap hover:bg-[#E0B60F] transition-colors">
            SIGN UP
          </button>
        </form>
      )}
    </div>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 1.5, color: "#F6C915", marginBottom: 14 }}>
        {title}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((link) => (
          <a key={link} href={linkHrefs[link] || "#"} style={{ fontSize: 13, color: "#CBD9EF", textDecoration: "none" }}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialIcon({ href, children }) {
  return (
    <a
      href={href}
      style={{
        width: 32,
        height: 32,
        borderRadius: "50%",
        background: "rgba(255,255,255,0.12)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13,
        color: "#fff",
        textDecoration: "none",
      }}
    >
      {children}
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#053A68] text-[#CBD9EF] px-5 sm:px-10 pt-10 sm:pt-12 pb-0 w-full overflow-hidden">
      <div className="grid grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.3fr] gap-x-6 gap-y-8 max-w-[1200px] mx-auto pb-10">
        <div className="col-span-1">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 36, height: 36, background: "#0A5DA6", color: "#F6C915", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14 }}>22</div>
            <div style={{ lineHeight: 1.1 }}>
              <div style={{ fontWeight: 700, fontSize: 15, color: "#fff" }}>CRICS 22 YARDS</div>
              <div style={{ fontSize: 9, letterSpacing: 2, color: "#F6C915" }}>DALLAS</div>
            </div>
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: "#AEC3E6", maxWidth: 280 }}>
            Established in 2022 in Dallas, 22Yards is a cutting-edge cricket facility focused on nurturing young talent. We offer a comprehensive development program for male and female players, aimed at fostering world-class skills and holistic growth for performance at the global level.”
          </p>
          <div style={{ fontSize: 13, lineHeight: 1.9, marginTop: 12, color: "#AEC3E6" }}>
            <a href="https://maps.google.com/?q=2601+E+State+Hwy+121+Business,+Lewisville,+TX+75056" target="_blank" rel="noopener noreferrer" style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              📍 2601 E State Hwy 121 Business, Lewisville, TX 75056
            </a>
            <div>📞 (469) 222-8473</div>
            <a href="mailto:contact@22yardsdallas.com" style={{ color: "#AEC3E6", textDecoration: "none", display: "block" }}>
              ✉️ contact@22yardsdallas.com
            </a>
            <div>🕐 07.00 AM - 11.00 PM</div>
          </div>
        </div>

        <div className="col-span-1">
          <FooterCol title="QUICK LINKS" links={quickLinks} />
        </div>

        <div className="col-span-1">
          <FooterCol title="USEFUL LINKS" links={moreLinks} />
        </div>

        <div className="col-span-1">
          <NewsletterForm />
          <div style={{ display: "flex", gap: 10, marginTop: 18 }}>
            <SocialIcon href={facebookUrl}>f</SocialIcon>
            <SocialIcon href={instagramUrl}>◎</SocialIcon>
          </div>
        </div>
      </div>

      <div className="border-t border-white/12 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 max-w-[1200px] mx-auto text-xs text-[#9DB4DA]">
        <div>Designed and Managed by Engaze Digital</div>

        <div className="text-center sm:text-right">
          <div>Copyright © 2024. All rights reserved.| GURUKRUPA SPORTS LLC</div>
        </div>
      </div>
    </footer>
  );
}
