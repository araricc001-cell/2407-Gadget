import React, { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, PRODUCTS } from "../data/brand";
import ProductCard from "../components/ProductCard";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === "all" || p.category === activeCategory;
      const matchesQuery = p.name.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const setCategory = (id) => {
    if (id === "all") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", id);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      <div className="mb-12">
        <p className="font-mono text-xs uppercase tracking-widest2 text-signal mb-3">Catalogue</p>
        <h1 className="font-display text-4xl md:text-6xl text-white">Products</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setCategory("all")}
            className={`font-body text-xs font-semibold uppercase tracking-widest2 px-4 py-2 border transition-colors focus-ring ${
              activeCategory === "all"
                ? "bg-signal text-ink border-signal"
                : "border-white/20 text-white/70 hover:border-signal hover:text-signal"
            }`}
          >
            All
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`font-body text-xs font-semibold uppercase tracking-widest2 px-4 py-2 border transition-colors focus-ring ${
                activeCategory === cat.id
                  ? "bg-signal text-ink border-signal"
                  : "border-white/20 text-white/70 hover:border-signal hover:text-signal"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products…"
          className="bg-transparent border border-white/15 px-4 py-2.5 text-sm font-body text-white placeholder-white/30 focus:outline-none focus:border-signal w-full md:w-64"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-white/50 py-20 text-center">
          Nothing matches that search. Try a different term, or ask us directly on WhatsApp.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
