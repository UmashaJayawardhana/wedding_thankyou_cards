"use client";

interface HeroProps {
  brideName?: string;
  groomName?: string;
}

export default function Hero({
  brideName = "Amaya",
  groomName = "Kasun",
}: HeroProps) {
  return (
    <section className="relative w-full bg-[#dcecf2] h-[100dvh] py-6 px-4 sm:px-8 flex flex-col items-center justify-between overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/hreobg.png"
        alt="Hero background"
        className="absolute inset-0 h-full w-full object-contain opacity-60"
      />
      {/* Gentle Overlay */}
      <div className="absolute inset-0 bg-[#dcecf2]/50" />

      {/* Gold Dust */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-[#e3c783]/60 blur-[1px]" />
        <span className="absolute left-[20%] top-[70%] h-1 w-1 rounded-full bg-[#f0d99b]/70" />
        <span className="absolute right-[20%] top-[75%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute left-[80%] top-[45%] h-1 w-1 rounded-full bg-[#e3c783]/70" />
      </div>

      {/* Top Names */}
      <h2 className="mt-4 sm:mt-6 text-center font-sans text-xs sm:text-sm tracking-[0.3em] uppercase text-[#303030] shrink-0 relative z-10">
        {brideName} + {groomName}
      </h2>

      {/* Gallery Container - Takes up remaining space gracefully */}
      <div className="w-full max-w-sm sm:max-w-lg md:max-w-xl mx-auto flex flex-col gap-2 sm:gap-3 flex-1 min-h-0 my-6 sm:my-8 relative z-10">
        {/* Main Arch Image */}
        <div className="w-full relative overflow-hidden rounded-t-[500px] flex-[2_2_0%] min-h-0 bg-gray-200">
          <img
            src="/images/couple.png"
            alt="Wedding Couple"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Bottom Two Images */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 flex-[1_1_0%] min-h-0">
          <div className="w-full h-full relative bg-gray-200 overflow-hidden">
            <img
              src="/images/couple2.png"
              alt="Wedding Details 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full relative bg-gray-200 overflow-hidden">
            <img
              src="/images/couple3.png"
              alt="Wedding Details 2"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Thank You Text */}
      <div className="mb-4 sm:mb-6 text-center shrink-0 relative z-10">
        <h1 className="font-[family-name:var(--font-great-vibes)] text-5xl sm:text-6xl md:text-7xl text-[#1a1a1a] leading-none mb-2">
          Thank You
        </h1>
        <p className="font-[family-name:var(--font-great-vibes)] text-4xl sm:text-5xl text-[#1a1a1a]">
          for coming
        </p>
      </div>
    </section>
  );
}
