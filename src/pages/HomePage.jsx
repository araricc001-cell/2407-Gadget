import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { whatsappLink, CATEGORIES, PRODUCTS, BRAND } from "../data/brand";
import ProductCard from "../components/ProductCard";
import GadgetAssistant from "../components/GadgetAssistant";

const TRUST_POINTS = [
  "Verified phones. Trusted deals. Zero stories.",
  "Every unit checked before it leaves Ikeja.",
  "Pick up in Lagos, or it comes to you.",
];

const HomePage = () => {
  const featured = PRODUCTS.slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 px-5 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, #ff6600 0, #ff6600 1px, transparent 1px, transparent 60px)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 bg-signal rounded-full animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest2 text-white/50">
              {BRAND.location} — Open Now
            </span>
          </div>

          <h1 className="font-display text-[13vw] md:text-7xl lg:text-8xl leading-[0.95] text-white">
            Sealed.
            <br />
            Verified.
            <br />
            <span className="text-signal">No stories.</span>
          </h1>

          <p className="font-body text-white/60 text-base md:text-lg max-w-md mt-8 leading-relaxed">
            Your trusted source for iPhones, Samsung, Google Pixel and accessories.
            Pick up in Lagos or delivery anywhere in Nigeria.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href={whatsappLink("Hi 24Ø7 Gadgets, I want to order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-signal text-ink font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-white transition-colors focus-ring"
            >
              Order on WhatsApp
            </a>
            <Link
              to="/products"
              className="inline-flex items-center border border-white/20 text-white font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:border-signal hover:text-signal transition-colors focus-ring"
            >
              View Products
            </Link>
          </div>

          <p className="font-mono text-xs uppercase tracking-widest2 text-white/40 mt-8">
            Pick up available. Delivery nationwide.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-t border-b border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {TRUST_POINTS.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="font-display text-signal text-2xl leading-none">Ø</span>
              <p className="font-body text-sm text-white/70 leading-relaxed pt-1">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-white">Categories</h2>
          <Link to="/products" className="font-body text-sm text-signal hover:text-white transition-colors focus-ring">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-white/[0.03] border border-white/10 cut-card px-5 py-8 flex items-center justify-center text-center hover:border-signal/60 transition-colors focus-ring"
            >
              <span className="font-display text-sm md:text-base text-white group-hover:text-signal transition-colors">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20">
        <div className="flex items-baseline justify-between mb-10">
          <h2 className="font-display text-2xl md:text-3xl text-white">Featured</h2>
          <Link to="/products" className="font-body text-sm text-signal hover:text-white transition-colors focus-ring">
            See all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* AI ASSISTANT + LOGO MOMENT */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src={logo} alt="24Ø7 Gadgets" className="h-20 w-auto object-contain mb-8" />
          <h2 className="font-display text-2xl md:text-3xl text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="font-body text-white/60 leading-relaxed max-w-md">
            Ask the assistant. It knows our stock, our prices, and our swap deals.
            No waiting on a reply.
          </p>
        </div>
        <GadgetAssistant />
      </section>
    </div>
  );
};

export default HomePage;
