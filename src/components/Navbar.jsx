import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import { whatsappLink } from "../data/brand";

const NAV_LINKS = [
  { to: "/products", label: "Products" },
  { to: "/brands", label: "Brands" },
  { to: "/swap", label: "Swap Deals" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 focus-ring" onClick={() => setOpen(false)}>
          <img src={logo} alt="24Ø7 Gadgets" className="h-10 w-auto object-contain" />
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-body text-sm font-semibold uppercase tracking-widest2 text-white/80">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors hover:text-signal focus-ring ${
                    isActive ? "text-signal" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Hi 24Ø7 Gadgets, I want to order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center bg-signal text-ink font-display text-xs uppercase tracking-widest2 px-5 py-3 cut-card hover:bg-white transition-colors focus-ring"
        >
          Order on WhatsApp
        </a>

        <button
          className="md:hidden text-white p-2 focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-7 h-[2px] bg-signal mb-[6px]" />
          <span className={`block w-7 h-[2px] bg-signal mb-[6px] transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className="block w-7 h-[2px] bg-signal" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-t border-white/10 px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-4 font-body text-sm font-semibold uppercase tracking-widest2 text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) => (isActive ? "text-signal" : "")}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink("Hi 24Ø7 Gadgets, I want to order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center bg-signal text-ink font-display text-xs uppercase tracking-widest2 px-5 py-3 cut-card"
          >
            Order on WhatsApp
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
