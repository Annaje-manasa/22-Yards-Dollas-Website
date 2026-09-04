import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function SiteUtilityBar() {
  const mapUrl = "https://maps.google.com/?q=2601+E+State+Hwy+121+Business,+Lewisville,+TX+75056";
  const facebookUrl = "https://www.facebook.com/22yardsdallas/";
  const instagramUrl = "https://www.instagram.com/22yardsdallas/";

  return (
    <div
      className="block text-white border-b border-white/10"
      style={{
        background: "#0A5DA6",
        color: "#ffffff",
        fontSize: "11px",
        fontFamily: "'Inter', sans-serif",
        lineHeight: "1.5",
        boxSizing: "border-box",
      }}
    >
      <style>{`
        .subar-link {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
          white-space: nowrap;
        }
        .subar-link-bold {
          color: #ffffff !important;
          text-decoration: none !important;
          transition: color 0.15s ease !important;
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 11px;
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          white-space: nowrap;
        }
        .subar-link:hover, .subar-link-bold:hover {
          color: #F6C915 !important;
        }
      `}</style>

      <div className="max-w-[1280px] mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-5 opacity-95">
          <a href="https://maps.google.com/?q=2601+E+State+Hwy+121+Business,+Lewisville,+TX+75056" target="_blank" rel="noopener noreferrer" className="subar-link">
            <MapPin size={12} /> 2601 E State Hwy 121 Business, Lewisville, TX 75056
          </a>
          <a href="mailto:contact@22yardsdallas.com" className="subar-link">
            <Mail size={12} /> contact@22yardsdallas.com
          </a>
          <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="subar-link">
            <Facebook size={12} /> Facebook
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="subar-link">
            <Instagram size={12} /> Instagram
          </a>
        </div>
        <div className="flex items-center gap-3 font-semibold">
          <a href="tel:+14692228473" className="subar-link-bold">
            <Phone size={12} /> +1 469-222-8473
          </a>
        </div>
      </div>
    </div>
  );
}
