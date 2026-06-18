import React from "react";
import { whatsappLink } from "../data/brand";

const WhatsAppFloatButton = () => {
  return (
    <a
      href={whatsappLink("Hi 24Ø7 Gadgets, I want to order.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-signal text-ink font-display text-xs uppercase tracking-widest2 px-5 py-4 cut-card shadow-[0_0_30px_rgba(255,102,0,0.35)] hover:bg-white transition-colors focus-ring"
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
        <path d="M17.47 14.38c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-1.6-.8-2.65-1.43-3.7-3.24-.28-.48.28-.45.8-1.5.09-.18.05-.34-.03-.48-.09-.14-.59-1.42-.81-1.95-.21-.5-.43-.43-.6-.44h-.51c-.18 0-.46.07-.7.34s-.93.91-.93 2.22c0 1.31.96 2.58 1.09 2.76.14.18 1.87 2.85 4.53 3.89 2.24.87 2.7.7 3.19.66.49-.05 1.6-.65 1.82-1.28.22-.63.22-1.17.16-1.28-.07-.11-.25-.18-.52-.32zM12.02 2C6.49 2 2 6.48 2 12c0 1.96.56 3.78 1.54 5.32L2 22l4.81-1.5A9.95 9.95 0 0 0 12.02 22C17.55 22 22 17.52 22 12S17.55 2 12.02 2z" />
      </svg>
      Order Now
    </a>
  );
};

export default WhatsAppFloatButton;
