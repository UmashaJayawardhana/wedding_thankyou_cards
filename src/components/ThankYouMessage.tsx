"use client";

interface ThankYouMessageProps {
  brideName?: string;
  groomName?: string;
  weddingDate?: string;
}

export default function ThankYouMessage({
  brideName = "Amaya",
  groomName = "Kasun",
  weddingDate = "Our Special Day",
}: ThankYouMessageProps) {
  // force rebuild
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#dcecf2]">

      {/* Gold Dust */}
      <div className="pointer-events-none absolute inset-0">
        <span className="absolute left-[12%] top-[18%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute right-[15%] top-[25%] h-2 w-2 rounded-full bg-[#e3c783]/60 blur-[1px]" />
        <span className="absolute left-[20%] top-[70%] h-1 w-1 rounded-full bg-[#f0d99b]/70" />
        <span className="absolute right-[20%] top-[75%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/60" />
        <span className="absolute left-[80%] top-[45%] h-1 w-1 rounded-full bg-[#e3c783]/70" />
      </div>

      {/* Center Card */}
      <div className="relative mx-auto flex min-h-screen w-full max-w-[520px] items-center justify-center px-7 py-20 text-center">

        {/* Video Background (contained within card) */}
        <video
          src="/video/herobgvid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-contain opacity-40"
        />

        <div className="w-full relative z-10">

          {/* Decorative Top */}
          <div className="mb-8 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#d6b56d]" />
            <span className="text-[#d6b56d]">✦</span>
            <span className="h-px w-12 bg-[#d6b56d]" />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#8c7650]">
            With Love & Gratitude
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-[#394b53] sm:text-5xl">
            Thank You
          </h2>

          <p className="mt-4 font-serif text-xl italic text-[#9b8052]">
            for being part of our special day
          </p>

          {/* Couple */}
          <div className="mt-10">
            <h3 className="font-serif text-2xl text-[#394b53] sm:text-3xl">
              {brideName} & {groomName}
            </h3>

            <p className="mt-2 text-sm tracking-[0.15em] text-[#8c7650]">
              {weddingDate}
            </p>
          </div>

          {/* Message */}
          <div className="mx-auto mt-12 max-w-md">

            <p className="font-serif text-lg leading-8 text-[#4c5c63]">
              From the bottom of our hearts, thank you for joining us
              as we celebrated one of the most beautiful days of our lives.
            </p>

            <p className="mt-6 text-sm leading-7 text-[#617178]">
              Your presence, warm wishes, love, and thoughtful gifts
              made our celebration even more meaningful.
            </p>

            <p className="mt-6 font-serif text-lg italic text-[#9b8052]">
              We are truly grateful for you.
            </p>

          </div>

          {/* Decorative Bottom */}
          <div className="mt-12 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-[#d6b56d]/70" />
            <span className="text-[#d6b56d]">♡</span>
            <span className="h-px w-16 bg-[#d6b56d]/70" />
          </div>

        </div>
      </div>
    </section>
  );
}