import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { whatsappLink, BRAND } from "../data/brand";

const PILLARS = [
  {
    label: "Sealed",
    detail: "Factory-sealed units come untouched. You open it first.",
  },
  {
    label: "Verified",
    detail: "Every UK-used and open-box device is checked before it moves.",
  },
  {
    label: "No stories",
    detail: "You get the price, the spec, and the device. Nothing hidden.",
  },
];

const AboutPage = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-4">Who we are</p>
          <h1 className="font-display text-4xl md:text-6xl text-white leading-tight mb-8">
            This is 24Ø7.
          </h1>
          <div className="font-body text-white/60 leading-relaxed space-y-4 max-w-lg">
            <p>
              We are a gadget store based in Ikeja, Lagos. We sell iPhones, Samsung,
              Google Pixel, smartwatches, accessories, gaming consoles, and laptops.
            </p>
            <p>
              We built this on one rule: no stories. Every device is either sealed
              from the factory or verified by us before it reaches you.
            </p>
            <p>
              Pick up in Lagos. Delivery nationwide. Swap deals available.
              That is the whole operation.
            </p>
          </div>
          <a
            href={whatsappLink("Hi 24O7 Gadgets, I want to order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-signal text-ink font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-white transition-colors focus-ring mt-10"
          >
            Order on WhatsApp
          </a>
        </div>

        <div className="flex items-center justify-center bg-white/[0.02] border border-white/10 cut-card py-16 px-10">
          <img src={logo} alt="24Ø7 Gadgets" className="w-64 h-auto object-contain" />
        </div>
      </div>

      <div className="mb-24">
        <h2 className="font-display text-2xl md:text-3xl text-white mb-10">The standard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((p, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/10 cut-card p-8">
              <span className="font-display text-5xl text-stroke-signal mb-6 block">{p.label}</span>
              <p className="font-body text-sm text-white/60 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-white/10 cut-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">Location</p>
          <h3 className="font-display text-xl text-white mb-2">{BRAND.location}</h3>
          <p className="font-body text-sm text-white/60">
            Pick up available. Delivery nationwide.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center border border-signal text-signal font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-signal hover:text-ink transition-colors focus-ring whitespace-nowrap"
        >
          Get in Touch
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
