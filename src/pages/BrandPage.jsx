import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { BRANDS, PRODUCTS, CATEGORIES, whatsappLink } from "../data/brand";
import ProductCard from "../components/ProductCard";

const BrandPage = () => {
  const { brandId } = useParams();
  const brand = BRANDS.find((b) => b.id === brandId);

  if (!brand) return <Navigate to="/brands" replace />;

  const products = PRODUCTS.filter((p) => p.brand === brandId);

  // group products by their category
  const grouped = brand.categories.reduce((acc, catId) => {
    const items = products.filter((p) => p.category === catId);
    if (items.length > 0) {
      const catLabel = CATEGORIES.find((c) => c.id === catId)?.label || catId;
      acc.push({ catId, catLabel, items });
    }
    return acc;
  }, []);

  return (
    <div className="pt-32 md:pt-40 pb-24 px-5 md:px-8 max-w-7xl mx-auto">
      {/* BREADCRUMB */}
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest2 text-white/40 mb-10">
        <Link to="/brands" className="hover:text-signal transition-colors">
          Brands
        </Link>
        <span>/</span>
        <span className="text-signal">{brand.label}</span>
      </div>

{/* HERO COVER */}
      {brand.cover && (
        <div className="relative h-48 md:h-64 cut-card overflow-hidden mb-10 -mx-5 md:-mx-8">
          <img
            src={brand.cover}
            alt={brand.label}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
          <div className="absolute inset-0 flex items-end px-8 pb-8">
            <h1 className="font-display text-5xl md:text-7xl text-white">{brand.label}</h1>
          </div>
        </div>
      )}

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <p className="font-body text-white/50 text-sm">
            {products.length} {products.length === 1 ? "product" : "products"} available
          </p>
        </div>
        <a
          href={whatsappLink(
            `Hi 24Ø7 Gadgets, I want to order a ${brand.label} product.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-signal text-ink font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-white transition-colors focus-ring self-start md:self-auto"
        >
          Order {brand.label} on WhatsApp
        </a>
      </div>

      {/* PRODUCTS GROUPED BY CATEGORY */}
      {grouped.length === 0 ? (
        <p className="font-body text-white/50 py-20 text-center">
          No products listed yet. Ask us directly on WhatsApp.
        </p>
      ) : (
        <div className="space-y-16">
          {grouped.map(({ catId, catLabel, items }) => (
            <section key={catId}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-xl md:text-2xl text-white">
                  {catLabel}
                  <span className="font-mono text-sm text-signal ml-3">
                    ({items.length})
                  </span>
                </h2>
                <Link
                  to={`/products?category=${catId}`}
                  className="font-body text-xs text-white/40 hover:text-signal transition-colors focus-ring"
                >
                  See all {catLabel} →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
};

export default BrandPage;
