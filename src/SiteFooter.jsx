import { useState } from "react";
import logoImg from "./assets/logo.png";

const quickLinks = [
  "Home",
  "About Us",
  "Special Events",
  "Gallery",
  "Contact Us",
  "SKA Registration",
];
const moreLinks = ["Privacy Policy", "Terms and Conditions", "Disclaimer", "FAQs", "Waiver & Cancellations Policy"];

const linkHrefs = {
  "Home": "#",
  "About Us": "#about",
  "Coaching": "#coaching",
  "Special Events": "#special-events",
  "Summer Camp": "#summer-camp",
  "Contact Us": "#contact",
  "Gallery": "#gallery",
  "SKA Registration": "#coaching",
  "Franchise": "#",
  "FAQs": "#faqs",
  "Privacy Policy": "#privacy-policy",
  "Terms and Conditions": "#terms-and-conditions",
  "Disclaimer": "#disclaimer",
  "Waiver & Cancellations Policy": "#waiver-and-cancellations-policy",
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
          <a href="#" className="inline-block mb-4 no-underline bg-white rounded-lg p-1.5 shadow-sm">
            <img
              src={logoImg}
              alt="22 Yards Dallas Logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

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
        <div>Designed and Managed by Margam360</div>

        <div className="text-center sm:text-right">
          <div>Copyright © 2024. All rights reserved.| GURUKRUPA SPORTS LLC</div>
        </div>
      </div>
    </footer>
  );
}
