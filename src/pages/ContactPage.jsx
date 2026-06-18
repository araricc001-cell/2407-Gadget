import React from "react";
import { whatsappLink, BRAND } from "../data/brand";
import GadgetAssistant from "../components/GadgetAssistant";

const CONTACT_OPTIONS = [
  {
    label: "Order a product",
    message: "Hi 24O7 Gadgets, I want to order a product.",
    cta: "Open Chat",
  },
  {
    label: "Ask about stock",
    message: "Hi 24O7 Gadgets, I want to check if something is in stock.",
    cta: "Check Stock",
  },
  {
    label: "Start a swap deal",
    message: "Hi 24O7 Gadgets, I want to swap my device.",
    cta: "Start Swap",
  },
  {
    label: "Arrange pickup",
    message: "Hi 24O7 Gadgets, I want to arrange a pickup in Lagos.",
    cta: "Arrange Pickup",
  },
];

const ContactPage = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">Contact</p>
        <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
          No stories. <span className="text-signal">Just business.</span>
        </h1>
        <p className="font-body text-white/60 max-w-lg leading-relaxed">
          WhatsApp is the fastest way to reach us. Choose what you need below and
          the right message is ready for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="font-display text-xl text-white mb-6">Reach us on WhatsApp</h2>
          <div className="space-y-4 mb-10">
            {CONTACT_OPTIONS.map((opt) => (
              <a
                key={opt.label}
                href={whatsappLink(opt.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white/[0.03] border border-white/10 cut-card px-6 py-5 hover:border-signal/60 group transition-colors focus-ring"
              >
                <span className="font-body text-sm text-white/80 group-hover:text-white transition-colors">
                  {opt.label}
                </span>
                <span className="font-display text-xs uppercase tracking-widest2 text-signal">
                  {opt.cta} →
                </span>
              </a>
            ))}
          </div>

          <div className="bg-signal/10 border border-signal/30 cut-card p-6">
            <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">
              Direct number
            </p>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-2xl text-white hover:text-signal transition-colors focus-ring"
            >
              {BRAND.whatsappDisplay}
            </a>
            <p className="font-body text-xs text-white/50 mt-2">{BRAND.location}</p>
            <p className="font-body text-xs text-white/50">
              Pick up available. Delivery nationwide.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-display text-xl text-white mb-6">Or ask the assistant</h2>
          <GadgetAssistant />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
