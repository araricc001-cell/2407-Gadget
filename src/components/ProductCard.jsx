import React from "react";
import { whatsappLink } from "../data/brand";

const ProductCard = ({ product }) => {
  const { name, spec, price, badge } = product;

  return (
    <div className="group relative bg-white/[0.03] border border-white/10 cut-card p-6 flex flex-col gap-4 hover:border-signal/60 transition-colors">
      <div className="flex items-start justify-between">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal border border-signal/40 px-2 py-1">
          {badge}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-display text-lg text-white leading-tight">{name}</h3>
        <p className="font-body text-sm text-white/50 mt-1">{spec}</p>
      </div>

      <div className="flex items-end justify-between pt-3 border-t border-white/10">
        <span className="font-display text-signal text-xl">{price}</span>
        <a
          href={whatsappLink(`Hi 24Ø7 Gadgets, I want to order: ${name} (${spec}).`)}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs font-semibold uppercase tracking-widest2 text-white/70 hover:text-signal transition-colors focus-ring"
        >
          Order →
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
