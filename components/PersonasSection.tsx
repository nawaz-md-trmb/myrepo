const personas = [
  {
    role: "Field Worker",
    tag: "Individual Timesheet",
    description:
      "On-site tradesperson or laborer, often working across multiple job sites throughout the week.",
    goal: "Quickly log their own hours without leaving the job site or filling out paper.",
    frustration:
      "Paper timesheets get lost, filled incorrectly, or reach the office days late.",
  },
  {
    role: "Crew Lead / Foreman",
    tag: "Crew Timesheet",
    description:
      "Manages a team of workers on-site and is accountable for the crew's daily hours.",
    goal: "Submit time for the entire crew in one flow — without chasing individuals.",
    frustration:
      "Collecting and re-entering each worker's hours every day is time-consuming and error-prone.",
  },
  {
    role: "Payroll / Project Admin",
    tag: "Data Recipient",
    description:
      "Office-based staff who process payroll and track project costs inside Jobpac ERP.",
    goal: "Receive complete, accurate time data on time for payroll and cost reporting.",
    frustration:
      "Incorrect or late data causes payroll errors and distorts job cost reporting.",
  },
];

export default function PersonasSection() {
  return (
    <section id="personas" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Who Uses It
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Three roles. One seamless flow.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.role}
              className="border border-slate-200 rounded-xl p-8 flex flex-col gap-6"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-slate-900">
                  {p.role}
                </h3>
                <span className="text-xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md shrink-0">
                  {p.tag}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed -mt-2">
                {p.description}
              </p>
              <div className="border-t border-slate-100 pt-6 flex flex-col gap-4">
                <div>
                  <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1.5">
                    Goal
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.goal}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-1.5">
                    Without this tool
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {p.frustration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
