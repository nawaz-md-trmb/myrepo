import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text content */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-6">
              Extension of Jobpac ERP
            </span>
            <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              Jobpac
              <br />
              Mobile
            </h1>
            <p className="text-xl text-slate-300 mb-4">
              Accurate and efficient time tracking for field workers — brought
              directly to the job site.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-12">
              An extension of the Jobpac ERP that enables field workers and crew
              leads to submit timesheets, select jobs, and add cost and
              transaction codes — all from their mobile device, in real time.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "2 Timesheet Modes",
                "Real-time ERP Sync",
                "Zero Desktop Required",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-800 text-slate-300 text-sm rounded-full border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — app screenshot */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-64 xl:w-72">
              {/* Phone frame */}
              <div className="relative rounded-[2.5rem] border-2 border-slate-700 bg-slate-900 p-2 overflow-hidden">
                <div className="relative aspect-[9/19.5] rounded-[2rem] overflow-hidden">
                  <Image
                    src="/prototypes/job-time-entry.png"
                    alt="Jobpac Mobile — Home screen"
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                    priority
                  />
                </div>
              </div>
              {/* Subtle glow behind the phone */}
              <div className="absolute inset-0 -z-10 rounded-full blur-3xl bg-blue-600/10 scale-110" />
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="w-4 h-4 animate-bounce"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 3v10M3 9l5 5 5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
