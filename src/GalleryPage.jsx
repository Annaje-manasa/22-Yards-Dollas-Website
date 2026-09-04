import React, { useState } from "react";
import {
  Camera, X, ChevronLeft, ChevronRight, Maximize2, ArrowRight
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const NAVY = "#0A5DA6";

const galleryCategories = [
  "ALL",
  "COACHING & GUIDANCE",
  "SMART LANES",
  "YOUTH & GIRLS ACADEMY",
  "TRAINING & DRILLS"
];

const galleryItems = [
  {
    id: 1,
    title: "Personalized Coaching & Smart Technology",
    category: "COACHING & GUIDANCE",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03070.jpg",
    caption: "The coaching staff's personalized attention and guidance, along with cutting-edge features like chip-enabled batting, make it a premier indoor cricket facility."
  },
  {
    id: 2,
    title: "Smart Lane Training Setup",
    category: "SMART LANES",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03097.jpg",
    caption: "The Smart Lane Setup is a brilliant feature, making it a great learning environment for everyone."
  },
  {
    id: 3,
    title: "1-on-1 Coaching Guidance",
    category: "COACHING & GUIDANCE",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03101.jpg",
    caption: "One to one coaching guidance with specialized video feedback and técnica corrections."
  },
  {
    id: 4,
    title: "Superb Training & Skill Building",
    category: "TRAINING & DRILLS",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03088.jpg",
    caption: "The coaching program is superb, making it great for both learning and enjoyment."
  },
  {
    id: 5,
    title: "Dedicated Mentorship & Player Focus",
    category: "COACHING & GUIDANCE",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03108.jpg",
    caption: "The coaching staff gives personalized attention and guidance to help every player reach their highest potential."
  },
  {
    id: 6,
    title: "Outstanding Coaching Environment",
    category: "TRAINING & DRILLS",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03104.jpg",
    caption: "The coaching program is outstanding, providing personalized attention and guidance across all skill levels."
  },
  {
    id: 7,
    title: "Skill Development & Youth Fun",
    category: "YOUTH & GIRLS ACADEMY",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03079.jpg",
    caption: "Exceptional coaching blends skill development and fun seamlessly for junior players."
  },
  {
    id: 8,
    title: "Beginners & Seasoned Players Training",
    category: "TRAINING & DRILLS",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03051.jpg",
    caption: "Outstanding coaching staff create an environment that caters to both beginners and seasoned players."
  },
  {
    id: 9,
    title: "Interactive Smart Net Environment",
    category: "SMART LANES",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03096.jpg",
    caption: "The Smart Lane Setup is a brilliant feature, making it a great learning environment for everyone."
  },
  {
    id: 10,
    title: "Individual Technical Analysis",
    category: "COACHING & GUIDANCE",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03093.jpg",
    caption: "One to one coaching guidance focused on footwork, stance, and shot execution."
  },
  {
    id: 11,
    title: "Girls Coaching & Youth Academy",
    category: "YOUTH & GIRLS ACADEMY",
    image: "https://22yardsdallas.com/wp-content/uploads/2024/02/DSC03109.jpg",
    caption: "One to one coaching facility for girls designed to foster confidence, athleticism, and game awareness."
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const filteredItems = activeTab === "ALL" 
    ? galleryItems 
    : galleryItems.filter((item) => item.category === activeTab);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const prevImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col font-sans" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Header */}
      <SiteHeader activePage="GALLERY" />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-16 md:py-24 text-white text-center px-4" style={{ background: NAVY }}>
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-20 bg-amber-400 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20 bg-sky-400 blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-amber-300 border border-white/15 text-xs font-bold uppercase tracking-wider mb-4">
            <Camera size={14} /> Official Photo Gallery
          </div>
          <h1 className="ty-display text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-white mb-4" style={{ fontFamily: "Oswald, sans-serif" }}>
            Gallery
          </h1>
          <p className="text-white/90 text-sm md:text-base max-w-4xl mx-auto leading-relaxed">
            Dive into the vibrant world of 22Yards Dallas through our gallery. Here, we showcase the essence of our facility, the excitement of our games, and the spirit of our cricket community.
          </p>
        </div>
      </section>

      {/* MAIN GALLERY SECTION */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12 flex-1 w-full">
        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 md:gap-3 mb-10">
          {galleryCategories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2 rounded-lg text-xs md:text-sm font-bold tracking-wide uppercase transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#0A5DA6] text-white shadow-md scale-[1.02]"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback image if unsplash/local network drops
                    e.target.src = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1000&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#0A5DA6] flex items-center justify-center shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 size={20} />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-[#0A5DA6] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-md shadow-sm">
                  {item.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 group-hover:text-[#0A5DA6] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs line-clamp-3 leading-relaxed">
                    {item.caption}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0A5DA6] font-bold">
                  <span>22Yards Dallas</span>
                  <span className="group-hover:underline flex items-center gap-1">
                    View Photo <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* LIGHTBOX MODAL */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50 cursor-pointer"
          >
            <X size={24} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors z-50 cursor-pointer"
          >
            <ChevronRight size={28} />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[350px]">
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80";
                }}
              />
            </div>

            <div className="p-6 bg-slate-900 border-t border-white/10 text-white">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span className="bg-[#0A5DA6] text-white text-[11px] font-bold uppercase px-2.5 py-0.5 rounded">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <span className="text-white/50 text-xs">
                  Photo {selectedImageIndex + 1} of {filteredItems.length}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-1 text-white">
                {filteredItems[selectedImageIndex].title}
              </h3>
              <p className="text-white/70 text-xs md:text-sm leading-relaxed">
                {filteredItems[selectedImageIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
