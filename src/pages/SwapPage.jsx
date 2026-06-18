import React from "react";
import { PRODUCTS, whatsappLink } from "../data/brand";
import ProductCard from "../components/ProductCard";

const STEPS = [
  { title: "Bring your device", detail: "Any working smartphone. Pickup also possible in Lagos." },
  { title: "Get it valued", detail: "On the spot. No back-and-forth, no lowballing." },
  { title: "Pay the difference", detail: "Top up and walk away with the upgrade." },
];

const SwapPage = () => {
  const swapProducts = PRODUCTS.filter((p) => p.category === "swap");

  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">Swap Deals</p>
        <h1 className="font-display text-4xl md:text-6xl text-white mb-6">
          Trade up. <span className="text-signal">No stories.</span>
        </h1>
        <p className="font-body text-white/60 leading-relaxed">
          Your old device is worth something. We tell you exactly what, on the spot,
          and you top up for the upgrade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {STEPS.map((step, i) => (
          <div key={i} className="bg-white/[0.03] border border-white/10 cut-card p-6">
            <span className="font-display text-signal text-3xl">{`0${i + 1}`}</span>
            <h3 className="font-display text-lg text-white mt-4 mb-2">{step.title}</h3>
            <p className="font-body text-sm text-white/60 leading-relaxed">{step.detail}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl md:text-3xl text-white mb-8">Current Swap Deals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {swapProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      <div className="bg-signal cut-card p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl text-ink mb-2">Got a device to swap?</h3>
          <p className="font-body text-ink/80 text-sm max-w-md">
            Send the model and condition on WhatsApp. We give you a number, not a negotiation.
          </p>
        </div>
        <a
          href={whatsappLink("Hi 24O7 Gadgets, I want to swap my device.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-ink text-signal font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-white hover:text-ink transition-colors focus-ring whitespace-nowrap"
        >
          Start a Swap
        </a>
      </div>
    </div>
  );
};

export default SwapPage;
