"use client";

import { useEffect, useState } from "react";

interface EndingProps {
  brideName?: string;
  groomName?: string;
}

export default function Ending({
  brideName = "Bride",
  groomName = "Groom",
}: EndingProps) {
  const [showEnding, setShowEnding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnding(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[100svh] w-full overflow-hidden bg-[#dcecf2]">

      {/* ========================= */}
      {/* Desktop Video */}
      {/* ========================= */}

      <video
        autoPlay
        muted
        playsInline
        loop={false}
        className={`absolute inset-0 hidden h-full w-full object-cover transition-all duration-[2500ms] ease-in-out sm:block ${
          showEnding
            ? "scale-105 blur-md"
            : "scale-100 blur-0"
        }`}
      >
        <source
          src="/video/endbgfordesktop.mp4"
          type="video/mp4"
        />
      </video>


      {/* ========================= */}
      {/* Mobile Video */}
      {/* ========================= */}

      <video
        autoPlay
        muted
        playsInline
        loop={false}
        className={`absolute inset-0 block h-full w-full object-cover transition-all duration-[2500ms] ease-in-out sm:hidden ${
          showEnding
            ? "scale-105 blur-md"
            : "scale-100 blur-0"
        }`}
      >
        <source
          src="/video/endbgformobile.mp4"
          type="video/mp4"
        />
      </video>


      {/* ========================= */}
      {/* Background Overlay */}
      {/* ========================= */}

      <div
        className={`absolute inset-0 transition-all duration-[2500ms] ${
          showEnding
            ? "bg-[#30434b]/45 backdrop-blur-[2px]"
            : "bg-black/10"
        }`}
      />


      {/* ========================= */}
      {/* Gold Dust */}
      {/* ========================= */}

      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[2500ms] ${
          showEnding ? "opacity-100" : "opacity-0"
        }`}
      >

        <div className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-[#f0d99b]/70 blur-[1px]" />

        <div className="absolute right-[15%] top-[28%] h-1.5 w-1.5 rounded-full bg-[#e3c783]/70" />

        <div className="absolute left-[20%] bottom-[25%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />

        <div className="absolute right-[12%] bottom-[20%] h-2 w-2 rounded-full bg-[#f0d99b]/60 blur-[1px]" />

        <div className="absolute left-[45%] top-[15%] h-1 w-1 rounded-full bg-[#e3c783]/70" />

      </div>


      {/* ========================= */}
      {/* Ending Content */}
      {/* ========================= */}

      <div
        className={`relative z-10 flex h-full w-full items-center justify-center px-6 text-center transition-all duration-[2000ms] ${
          showEnding
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >

        <div className="w-full max-w-[520px]">

          {/* Top Decoration */}

          <div className="mb-7 flex items-center justify-center gap-3">

            <span className="h-px w-12 bg-[#f0d99b]/80" />

            <span className="text-lg text-[#f0d99b]">
              ✦
            </span>

            <span className="h-px w-12 bg-[#f0d99b]/80" />

          </div>


          {/* Small Heading */}

          <p className="text-xs uppercase tracking-[0.35em] text-[#f0d99b] sm:text-sm">
            With All Our Hearts
          </p>


          {/* Main Heading */}

          <h2 className="mt-6 font-serif text-5xl font-light text-white sm:text-6xl">
            Thank You
          </h2>


          {/* Message */}

          <p className="mx-auto mt-7 max-w-md font-serif text-lg leading-8 text-white/90 sm:text-xl">
            Thank you for being part of our
            beautiful journey and for making
            our special day unforgettable.
          </p>


          {/* Couple */}

          <div className="mt-10">

            <p className="font-serif text-2xl text-white sm:text-3xl">
              {brideName} & {groomName}
            </p>

            <div className="mx-auto mt-5 flex items-center justify-center gap-3">

              <span className="h-px w-10 bg-[#f0d99b]/70" />

              <span className="text-[#f0d99b]">
                ♡
              </span>

              <span className="h-px w-10 bg-[#f0d99b]/70" />

            </div>

          </div>


          {/* Final Message */}

          <p className="mt-8 font-serif text-base italic text-[#f0d99b] sm:text-lg">
            With love, always.
          </p>


          {/* Bottom Decoration */}

          <div className="mt-10 text-[#f0d99b]">
            ✦
          </div>

        </div>

      </div>

    </section>
  );
}