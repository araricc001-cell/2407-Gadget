import React, { useState } from "react";
import { whatsappLink } from "../data/brand";

const ProductCard = ({ product }) => {
  const { name, spec, price, badge, image } = product;
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group relative bg-white/[0.03] border border-white/10 cut-card flex flex-col hover:border-signal/60 transition-colors overflow-hidden">
      {/* IMAGE */}
      <div className="relative h-52 overflow-hidden bg-white/5">
        {image && !imgError ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display text-4xl text-stroke-signal opacity-30">
              Ø
            </span>
          </div>
        )}
        {/* BADGE overlaid on image */}
        <span className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-widest2 text-signal bg-ink/80 border border-signal/40 px-2 py-1 backdrop-blur-sm">
          {badge}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex-1">
          <h3 className="font-display text-base text-white leading-tight">
            {name}
          </h3>
          <p className="font-body text-xs text-white/50 mt-1">{spec}</p>
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-white/10">
          <span className="font-display text-signal text-lg">{price}</span>

          <a
            href={whatsappLink(
              `Hi 24Ø7 Gadgets, I want to order: ${name} (${spec}).`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs font-semibold uppercase tracking-widest2 text-white/60 hover:text-signal transition-colors focus-ring"
          >
            Order →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
