import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 text-center">
      <span className="font-display text-[20vw] text-stroke-signal leading-none select-none">
        4Ø4
      </span>
      <p className="font-body text-white/60 text-lg mt-4 mb-8">
        Page not found. No stories here either.
      </p>
      <Link
        to="/"
        className="inline-flex items-center bg-signal text-ink font-display text-sm uppercase tracking-widest2 px-7 py-4 cut-card hover:bg-white transition-colors focus-ring"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
