
"use client";

interface OpeningProps {
  brideName?: string;
  groomName?: string;
  onOpen: () => void;
}

export default function Opening({
  brideName = "Amaya",
  groomName = "Kasun",
  onOpen,
}: OpeningProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#dcecf2]">

      {/* Soft Gold Dust Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute left-[8%] top-[15%] h-2 w-2 rounded-full bg-[#d6b56d]/60 blur-[1px]" />
        <div className="absolute left-[18%] top-[65%] h-1.5 w-1.5 rounded-full bg-[#d6b56d]/70" />
        <div className="absolute left-[27%] top-[30%] h-1 w-1 rounded-full bg-[#e3c783]/70 blur-[1px]" />
        <div className="absolute right-[15%] top-[20%] h-2 w-2 rounded-full bg-[#d6b56d]/60 blur-[1px]" />
        <div className="absolute right-[24%] top-[70%] h-1.5 w-1.5 rounded-full bg-[#e3c783]/70" />
        <div className="absolute right-[8%] top-[45%] h-1 w-1 rounded-full bg-[#d6b56d]/70 blur-[1px]" />
        <div className="absolute left-[12%] top-[42%] h-1 w-1 rounded-full bg-[#e3c783]/60" />
        <div className="absolute right-[12%] top-[85%] h-2 w-2 rounded-full bg-[#d6b56d]/50 blur-[1px]" />

      </div>

      {/* Centered Invitation */}
      <div className="relative mx-auto min-h-screen w-full max-w-[640px] overflow-hidden bg-[#dcecf2] ">

        {/* Wedding Image */}
        <img
          src="/images/openbg.png"
          alt="Wedding background"
          className="absolute inset-0 h-full w-full object-contain"
        />


        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center text-[#30434b]">

          <div className="w-full">

            <p className="mb-4 text-xs uppercase tracking-[0.3em] sm:text-sm">
              With Love & Gratitude
            </p>

            <h1 className="font-serif text-5xl font-light sm:text-6xl">
              Thank You
            </h1>

            <div className="mx-auto my-6 h-px w-20 bg-[#f0d99b]" />

            <p className="text-base font-light sm:text-lg">
              For being part of our special day
            </p>

            <h2 className="mt-8 font-serif text-2xl sm:text-3xl">
              {brideName} & {groomName}
            </h2>

            <button
              onClick={onOpen}
              className="mt-10 rounded-full border border-[#f0d99b]/80 bg-white/15 px-8 py-3 text-xs uppercase tracking-[0.18em] backdrop-blur-md transition-all duration-300 hover:bg-[#f0d99b] hover:text-[#30434b] sm:text-sm"
            >
              Open Our Thank You Card
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
