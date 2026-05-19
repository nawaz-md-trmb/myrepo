const problems = [
  {
    number: "01",
    title: "No field access to the ERP",
    description:
      "The full Jobpac ERP is desktop-based. Workers on-site have no way to log time directly into the system.",
  },
  {
    number: "02",
    title: "Manual, error-prone tracking",
    description:
      "Paper timesheets, phone calls, and spreadsheets introduce errors that compound at payroll and project reporting time.",
  },
  {
    number: "03",
    title: "Delayed time data",
    description:
      "Timesheets submitted days late cause payroll delays and make real-time project cost tracking impossible.",
  },
  {
    number: "04",
    title: "Crew coordination overhead",
    description:
      "Crew leads must collect times from each worker individually, then re-enter them — doubling the effort every day.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-slate-900 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            The Challenge
          </span>
          <h2 className="text-4xl font-bold text-white mt-4 leading-tight">
            Time tracking was broken
            <br />
            before Mobile
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-700">
          {problems.map((p) => (
            <div
              key={p.number}
              className="bg-slate-900 p-10 hover:bg-slate-800 transition-colors"
            >
              <span className="text-xs font-mono text-slate-600 mb-5 block">
                {p.number}
              </span>
              <h3 className="text-lg font-semibold text-white mb-3">
                {p.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
