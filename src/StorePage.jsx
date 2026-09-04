import React, { useState } from "react";
import {
  ShoppingBag, Search, Star, CheckCircle2, ArrowRight,
  Shield, Package, Truck
} from "lucide-react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

import batImg from "./assets/store-bat.jpg";
import helmetImg from "./assets/store-helmet.jpg";
import padsImg from "./assets/store-pads.jpg";
import jerseyImg from "./assets/store-jersey.jpg";
import whiteBallsImg from "./assets/store-white-balls.jpg";
import bowlingBallsImg from "./assets/store-bowling-balls.jpg";
import glovesImg from "./assets/store-gloves.jpg";
import shoesImg from "./assets/store-shoes.jpg";

/* ------------------------------------------------------------------ */
/*  Design tokens — 22 Yards Dallas Design System                      */
/* ------------------------------------------------------------------ */
const NAVY = "#0A5DA6";
const NAVY_DEEPER = "#053a68";
const YELLOW = "#F6C915";
const YELLOW_BRAND = "#F6C915";
const SKY_LIGHT = "#EEF5FB";
const GOLD = "#C9A400";

function FontImport() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Inter:wght@400;500;600;700;800&display=swap');
      .ty-display { font-family: 'Oswald', sans-serif; }
      .ty-body { font-family: 'Inter', sans-serif; }
    `}</style>
  );
}

const categories = [
  { id: "all", label: "All Items" },
  { id: "bats", label: "Cricket Bats" },
  { id: "gear", label: "Protective Gear" },
  { id: "balls", label: "Balls & Turf Supplies" },
  { id: "apparel", label: "Apparel & Footwear" },
  { id: "training", label: "Training Equipment" },
];

const products = [
  {
    id: 1,
    name: "SG Players Edition English Willow Bat",
    category: "bats",
    price: "$449.99",
    rating: 5.0,
    badge: "Bestseller",
    image: batImg,
    desc: "Grade 1 English Willow crafted for professional match performance with lightweight pickup and massive sweet spot.",
  },
  {
    id: 2,
    name: "Kookaburra Pace Pro Helmet",
    category: "gear",
    price: "$129.99",
    rating: 4.9,
    badge: "Safety Certified",
    image: helmetImg,
    desc: "High-impact protection with titanium grille, lightweight airflow system, and custom fit dial.",
  },
  {
    id: 3,
    name: "Gray-Nicolls Legend Batting Pads",
    category: "gear",
    price: "$159.99",
    rating: 4.8,
    badge: "Pro Choice",
    image: padsImg,
    desc: "Ultra-light high-density foam protection with traditional cane front and breathable moisture-wicking lining.",
  },
  {
    id: 4,
    name: "22Yards Official Academy Training Kit",
    category: "apparel",
    price: "$59.99",
    rating: 4.9,
    badge: "Official Teamwear",
    image: jerseyImg,
    desc: "Breathable polyester performance jersey & shorts set styled in signature 22Yards Dallas navy & gold colors.",
  },
  {
    id: 5,
    name: "Kookaburra Turf White Match Ball (Box of 6)",
    category: "balls",
    price: "$189.99",
    rating: 5.0,
    badge: "Match Grade",
    image: whiteBallsImg,
    desc: "Hand-stitched 4-piece leather white cricket balls designed for official tournament play and high durability.",
  },
  {
    id: 6,
    name: "Paceman Pro Bowling Machine Balls (Pack of 12)",
    category: "training",
    price: "$49.99",
    rating: 4.7,
    badge: "Academy Approved",
    image: bowlingBallsImg,
    desc: "Durable precision dimpled balls specifically engineered for automated bowling machine practice.",
  },
  {
    id: 7,
    name: "SS Ton Reserve Edition English Willow Bat",
    category: "bats",
    price: "$599.99",
    rating: 5.0,
    badge: "Limited Edition",
    image: batImg,
    desc: "Premium hand-selected Grade 1+ English Willow with clean grains and immense power profile.",
  },
  {
    id: 8,
    name: "GM Diamond Pro Batting Gloves",
    category: "gear",
    price: "$89.99",
    rating: 4.8,
    badge: "Comfort Grip",
    image: glovesImg,
    desc: "Flexible split-finger construction with premium Pittards leather palm for maximum feel and impact shock absorption.",
  },
  {
    id: 9,
    name: "22Yards High-Performance Rubber Spikes",
    category: "apparel",
    price: "$119.99",
    rating: 4.9,
    badge: "New Arrival",
    image: shoesImg,
    desc: "Superior traction multi-turf rubber grip shoes engineered for fast footwork and indoor/outdoor cricket pitches.",
  },
];

export default function StorePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleOrder = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
    setTimeout(() => {
      setOrderSubmitted(false);
      setSelectedProduct(null);
    }, 4000);
  };

  return (
    <div className="w-full min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <FontImport />

      {/* Header */}
      <SiteHeader activePage="STORE" />

      {/* ============================ HERO SECTION ============================ */}
      <section style={{ background: NAVY }} className="relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "#3E8FD0" }} />
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-20 text-center relative z-10">
          <span
            className="ty-body inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border mb-6"
            style={{ borderColor: "rgba(233,210,34,0.5)", color: YELLOW }}
          >
            <ShoppingBag size={14} /> Official 22Yards Dallas Pro Shop
          </span>
          <h1 className="ty-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[1.1] mb-6">
            Equipment &amp; Apparel Store<br />
            <span className="relative inline-block mt-1">
              Pro Cricket Gear
              <span className="absolute left-0 -bottom-2 w-full h-1.5" style={{ background: YELLOW }} />
            </span>
          </h1>
          <p className="ty-body text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Gear up with authentic, top-grade cricket bats, protective gear, balls, apparel, and training equipment curated by professional coaches.
          </p>

          {/* Search bar */}
          <div className="max-w-xl mx-auto relative flex items-center">
            <Search className="absolute left-4 text-gray-400" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search bats, gloves, helmets, apparel..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white text-gray-800 text-sm font-medium outline-none shadow-lg"
              style={{ border: `2px solid ${YELLOW}` }}
            />
          </div>

          <div className="ty-body flex items-center justify-center gap-2 text-white/70 text-sm mt-8">
            <span>Home</span> <span className="opacity-50">—</span> <span className="text-white font-semibold">Store</span>
          </div>
        </div>
      </section>

      {/* ============================ FEATURES STRIP ============================ */}
      <section style={{ background: SKY_LIGHT }} className="border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="ty-body flex items-center justify-center gap-2.5 text-xs md:text-sm font-bold" style={{ color: NAVY }}>
            <CheckCircle2 size={18} style={{ color: GOLD }} />
            <span>100% Genuine Gear</span>
          </div>
          <div className="ty-body flex items-center justify-center gap-2.5 text-xs md:text-sm font-bold" style={{ color: NAVY }}>
            <Shield size={18} style={{ color: GOLD }} />
            <span>Official Brand Warranty</span>
          </div>
          <div className="ty-body flex items-center justify-center gap-2.5 text-xs md:text-sm font-bold" style={{ color: NAVY }}>
            <Package size={18} style={{ color: GOLD }} />
            <span>In-Store Pickup Available</span>
          </div>
          <div className="ty-body flex items-center justify-center gap-2.5 text-xs md:text-sm font-bold" style={{ color: NAVY }}>
            <Truck size={18} style={{ color: GOLD }} />
            <span>Fast Shipping Across Texas</span>
          </div>
        </div>
      </section>

      {/* ============================ MAIN CATALOG SECTION ============================ */}
      <section className="max-w-7xl mx-auto px-6 py-14 bg-white">
        {/* Category Filters */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className="ty-body px-4 py-2.5 rounded-lg text-xs md:text-sm font-bold tracking-wide uppercase transition-all whitespace-nowrap cursor-pointer shadow-sm"
                  style={{
                    background: isSelected ? NAVY : SKY_LIGHT,
                    color: isSelected ? "#fff" : NAVY,
                    border: `1px solid ${isSelected ? NAVY : '#DDEAF6'}`,
                  }}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          <div className="ty-body text-xs font-semibold" style={{ color: "#5B7A94" }}>
            Showing <span className="font-bold" style={{ color: NAVY }}>{filteredProducts.length}</span> items
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Product Image Box */}
              <div className="relative h-64 bg-slate-100 overflow-hidden flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span
                    className="ty-body absolute top-3 left-3 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow"
                    style={{ background: YELLOW, color: NAVY_DEEPER }}
                  >
                    {product.badge}
                  </span>
                )}
                <span className="ty-body absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                  <Star size={12} style={{ fill: YELLOW, color: YELLOW }} /> {product.rating}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="ty-body text-[11px] font-extrabold tracking-wider uppercase mb-1" style={{ color: GOLD }}>
                    {product.category}
                  </div>
                  <h3 className="ty-display text-xl font-bold text-slate-900 group-hover:text-[#0A5DA6] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="ty-body text-gray-600 text-xs leading-relaxed mb-4 line-clamp-2">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <span className="ty-body text-xs text-gray-400 block font-medium">Price</span>
                    <span className="ty-display text-2xl font-extrabold" style={{ color: NAVY }}>{product.price}</span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="ty-body text-white px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm hover:opacity-90"
                    style={{ background: NAVY }}
                  >
                    <span>Inquire / Buy</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Contact Order Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-lg font-bold w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer"
            >
              ✕
            </button>

            {orderSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="ty-display text-2xl font-bold text-slate-900 mb-2">Inquiry Sent Successfully!</h3>
                <p className="ty-body text-gray-600 text-xs leading-relaxed">
                  Our pro shop team will contact you shortly regarding stock availability and payment options for <strong>{selectedProduct.name}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="ty-body text-[11px] font-extrabold uppercase tracking-wider block mb-1" style={{ color: NAVY }}>
                  Product Inquiry &amp; Order
                </span>
                <h3 className="ty-display text-2xl font-bold text-slate-900 mb-1">{selectedProduct.name}</h3>
                <div className="ty-display text-2xl font-extrabold mb-4" style={{ color: NAVY }}>{selectedProduct.price}</div>

                <form onSubmit={handleOrder} className="space-y-3">
                  <div>
                    <label className="ty-body block text-xs font-bold uppercase text-slate-700 mb-1">Your Full Name *</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#0A5DA6]" />
                  </div>

                  <div>
                    <label className="ty-body block text-xs font-bold uppercase text-slate-700 mb-1">Email Address *</label>
                    <input required type="email" placeholder="john@example.com" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#0A5DA6]" />
                  </div>

                  <div>
                    <label className="ty-body block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                    <input required type="tel" placeholder="(469) 222-8473" className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#0A5DA6]" />
                  </div>

                  <div>
                    <label className="ty-body block text-xs font-bold uppercase text-slate-700 mb-1">Fulfillment Option</label>
                    <select className="w-full px-3 py-2 border border-gray-200 rounded-lg text-xs outline-none focus:ring-2 focus:ring-[#0A5DA6]">
                      <option value="pickup">In-Store Pickup (Lewisville, TX)</option>
                      <option value="shipping">Standard Shipping across Texas</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="ty-body w-full font-extrabold uppercase py-3 rounded-lg text-xs tracking-wider transition-transform hover:scale-[1.01] cursor-pointer mt-4"
                    style={{ background: YELLOW_BRAND, color: NAVY_DEEPER }}
                  >
                    Confirm Inquiry / Request Item
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <SiteFooter />
    </div>
  );
}
