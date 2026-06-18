import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { whatsappLink, BRAND } from "../data/brand";

const Footer = () => {
  return (
    <footer className="bg-ink border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <img src={logo} alt="24Ø7 Gadgets" className="h-10 w-auto object-contain mb-4" />
          <p className="text-white/60 font-body text-sm max-w-xs">
            {BRAND.tagline}
          </p>
        </div>

        <div className="font-body text-sm text-white/60">
          <p className="text-white font-semibold uppercase tracking-widest2 text-xs mb-3">Find us</p>
          <p>{BRAND.location}</p>
          <p className="mt-1">Pick up available. Delivery nationwide.</p>
        </div>

        <div className="font-body text-sm text-white/60">
          <p className="text-white font-semibold uppercase tracking-widest2 text-xs mb-3">Talk to us</p>
          <a
            href={whatsappLink("Hi 24Ø7 Gadgets, I have a question.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-signal font-semibold hover:text-white transition-colors focus-ring"
          >
            WhatsApp: {BRAND.whatsappDisplay}
          </a>
          <div className="flex gap-5 mt-5">
            <Link to="/products" className="hover:text-signal transition-colors">Products</Link>
            <Link to="/about" className="hover:text-signal transition-colors">About</Link>
            <Link to="/contact" className="hover:text-signal transition-colors">Contact</Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/40 text-xs font-mono tracking-widest2 uppercase">
        24Ø7 Gadgets — No stories. Just business.
      </div>
    </footer>
  );
};

export default Footer;
