export const BRAND = {
  name: "24Ø7 Gadgets",
  tagline: "Sealed. Verified. No stories.",
  whatsappNumber: "2349159188374", // intl format, no leading zero, no plus
  whatsappDisplay: "0915 918 8374",
  location: "Ikeja, Lagos, Nigeria",
};

export const whatsappLink = (message) => {
  const base = `https://wa.me/${BRAND.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const CATEGORIES = [
  { id: "iphones", label: "iPhones" },
  { id: "samsung", label: "Samsung" },
  { id: "pixel", label: "Google Pixel" },
  { id: "accessories", label: "Accessories" },
  { id: "swap", label: "Swap Deals" },
];

export const PRODUCTS = [
  {
    id: "iphone-15-pro-max",
    category: "iphones",
    name: "iPhone 15 Pro Max",
    spec: "256GB · Sealed",
    price: "₦1,150,000",
    badge: "Sealed",
  },
  {
    id: "iphone-14-pro",
    category: "iphones",
    name: "iPhone 14 Pro",
    spec: "128GB · UK Used, Verified",
    price: "₦720,000",
    badge: "Verified",
  },
  {
    id: "iphone-13",
    category: "iphones",
    name: "iPhone 13",
    spec: "128GB · Verified",
    price: "₦480,000",
    badge: "Verified",
  },
  {
    id: "galaxy-s24-ultra",
    category: "samsung",
    name: "Galaxy S24 Ultra",
    spec: "512GB · Sealed",
    price: "₦980,000",
    badge: "Sealed",
  },
  {
    id: "galaxy-z-flip5",
    category: "samsung",
    name: "Galaxy Z Flip5",
    spec: "256GB · Sealed",
    price: "₦890,000",
    badge: "Sealed",
  },
  {
    id: "galaxy-a55",
    category: "samsung",
    name: "Galaxy A55",
    spec: "128GB · Verified",
    price: "₦340,000",
    badge: "Verified",
  },
  {
    id: "pixel-8-pro",
    category: "pixel",
    name: "Pixel 8 Pro",
    spec: "256GB · Sealed",
    price: "₦750,000",
    badge: "Sealed",
  },
  {
    id: "pixel-8",
    category: "pixel",
    name: "Pixel 8",
    spec: "128GB · Verified",
    price: "₦520,000",
    badge: "Verified",
  },
  {
    id: "watch-ultra-2",
    category: "accessories",
    name: "Apple Watch Ultra 2",
    spec: "49mm · Sealed",
    price: "₦620,000",
    badge: "Sealed",
  },
  {
    id: "buds-pro2",
    category: "accessories",
    name: "Galaxy Buds2 Pro",
    spec: "Sealed",
    price: "₦95,000",
    badge: "Sealed",
  },
  {
    id: "powerbank-20k",
    category: "accessories",
    name: "20,000mAh Power Bank",
    spec: "65W Fast Charge",
    price: "₦38,000",
    badge: "Sealed",
  },
  {
    id: "ps5-slim",
    category: "accessories",
    name: "PlayStation 5 Slim",
    spec: "1TB · Sealed",
    price: "₦820,000",
    badge: "Sealed",
  },
  {
    id: "swap-iphone-12-13",
    category: "swap",
    name: "iPhone 12 → 13 Swap",
    spec: "Top-up swap deal",
    price: "Top-up from ₦120,000",
    badge: "Swap",
  },
  {
    id: "swap-android-iphone",
    category: "swap",
    name: "Any Android → iPhone",
    spec: "Valuation on inspection",
    price: "DM for valuation",
    badge: "Swap",
  },
];
