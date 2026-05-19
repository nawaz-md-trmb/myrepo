export default function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-6">
            Extension of Jobpac ERP
          </span>
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Jobpac
            <br />
            Mobile
          </h1>
          <p className="text-xl text-slate-300 mb-4 max-w-xl">
            Accurate and efficient time tracking for field workers — brought
            directly to the job site.
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xl mb-12">
            An extension of the Jobpac ERP that enables field workers and crew
            leads to submit timesheets, select jobs, and add cost and transaction
            codes — all from their mobile device, in real time.
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
