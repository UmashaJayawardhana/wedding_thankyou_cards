"use client";

import { useState, useEffect, useCallback } from "react";

interface WeddingGalleryProps {
  images?: string[];
}

export default function WeddingGallery({
  images = [
    "/images/wedding1.jpg",
    "/images/wedding2.jpg",
    "/images/wedding3.jpg",
    "/images/wedding4.jpg",
    "/images/wedding5.jpg",
    "/images/wedding6.jpg",
  ],
}: WeddingGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
      } else if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
      } else if (e.key === "Escape") {
        setSelectedIndex(null);
      }
    },
    [selectedIndex, images.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#dcecf2]">

      {/* Gold Dust */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[10%] top-[12%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute right-[12%] top-[20%] h-2 w-2 rounded-full bg-[#e3c783]/60 blur-[1px]" />
        <span className="absolute left-[18%] top-[55%] h-1 w-1 rounded-full bg-[#f0d99b]/70" />
        <span className="absolute right-[18%] top-[65%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute left-[85%] top-[42%] h-1 w-1 rounded-full bg-[#e3c783]/70" />
        <span className="absolute left-[8%] top-[85%] h-2 w-2 rounded-full bg-[#d6b56d]/50 blur-[1px]" />
      </div>

      {/* Center Card */}
      <div className="relative mx-auto w-full max-w-[520px] md:max-w-5xl lg:max-w-6xl px-5 py-20">

        {/* Heading */}
        <div className="text-center">

          <div className="mb-7 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d6b56d]" />
            <span className="text-[#d6b56d]">✦</span>
            <span className="h-px w-12 bg-[#d6b56d]" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#8c7650]">
            A Day To Remember
          </p>

          <h2 className="mt-4 font-serif text-4xl font-light text-[#394b53] sm:text-5xl">
            Wedding Moments
          </h2>

          <p className="mx-auto mt-5 max-w-sm font-serif text-lg italic leading-7 text-[#9b8052]">
            A collection of beautiful moments from our special day.
          </p>

        </div>

        {/* Gallery */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6 md:auto-rows-[180px] lg:auto-rows-[240px]">

          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl bg-white/40 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:z-10 ${index === 0 || index === 5
                  ? "aspect-[4/5] md:aspect-auto"
                  : "aspect-square md:aspect-auto"
                } ${index === 0 ? "md:col-span-2 md:row-span-2 md:h-full" :
                  index === 1 ? "md:col-span-2 md:row-span-1 md:h-full" :
                    index === 2 ? "md:col-span-1 md:row-span-1 md:h-full" :
                      index === 3 ? "md:col-span-1 md:row-span-1 md:h-full" :
                        index === 4 ? "md:col-span-2 md:row-span-1 md:h-full" :
                          "md:col-span-2 md:row-span-1 md:h-full"
                }`}
            >
              <img
                src={image}
                alt={`Wedding moment ${index + 1}`}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1"
              />

              {/* Soft overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#30434b]/20 via-transparent to-transparent opacity-60" />
            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">

          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-[#d6b56d]/70" />
            <span className="text-[#d6b56d]">♡</span>
            <span className="h-px w-14 bg-[#d6b56d]/70" />
          </div>

          <p className="mx-auto max-w-md mt-7 font-serif text-lg leading-8 text-[#4c5c63]">
            Every smile, every embrace, and every little moment
            made our day unforgettable.
          </p>

          <p className="mt-5 font-serif text-base italic text-[#9b8052]">
            Thank you for being part of our story.
          </p>

        </div>

      </div>

      {/* Lightbox / Popup Gallery */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-6 top-6 z-50 rounded-full bg-white/10 p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:text-red-400"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
            }}
            className="absolute left-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:left-8"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
            }}
            className="absolute right-4 z-50 rounded-full bg-white/10 p-3 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-8"
          >
            <svg className="h-8 w-8 sm:h-10 sm:w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Image Display */}
          <div className="relative flex h-full max-h-screen w-full items-center justify-center p-4 sm:p-12">
            <img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt={`Wedding moment ${selectedIndex + 1}`}
              className="max-h-full max-w-full select-none object-contain drop-shadow-2xl transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}