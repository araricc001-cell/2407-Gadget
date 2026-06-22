import React from "react";
import { Link } from "react-router-dom";
import { BRANDS, PRODUCTS } from "../data/brand";

const BrandsPage = () => {
  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="mb-14">
        <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">
          Shop by Brand
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-white">Brands</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {BRANDS.map((brand) => {
          const count = PRODUCTS.filter((p) => p.brand === brand.id).length;
          return (
            <Link
              key={brand.id}
              to={`/brands/${brand.id}`}
              className="group relative cut-card overflow-hidden focus-ring block"
            >
              {/* COVER IMAGE */}
              <div className="relative h-56 bg-white/5 overflow-hidden">
                {brand.cover && (
                  <img
                    src={brand.cover}
                    alt={brand.label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                  />
                )}
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

                {/* Brand name on image */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h2 className="font-display text-3xl text-white group-hover:text-signal transition-colors">
                    {brand.label}
                  </h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {brand.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-mono text-[10px] uppercase tracking-widest2 text-white/40 border border-white/10 px-2 py-0.5"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="bg-white/[0.03] border border-white/10 border-t-0 flex items-center justify-between px-5 py-3">
                <span className="font-body text-sm text-white/50">
                  {count} {count === 1 ? "product" : "products"}
                </span>
                <span className="font-display text-xs uppercase tracking-widest2 text-signal">
                  View →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrandsPage;