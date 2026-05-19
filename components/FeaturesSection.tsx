const features = [
  {
    index: "01",
    name: "Individual Timesheets",
    who: "Field Workers",
    description:
      "Workers submit their own time entries from their mobile device, tied to a specific job and date. No desktop required.",
  },
  {
    index: "02",
    name: "Crew Timesheets",
    who: "Crew Leads",
    description:
      "Crew leads submit time for multiple workers in a single flow — no need to collect entries one by one from each person.",
  },
  {
    index: "03",
    name: "Job & Code Management",
    who: "All Users",
    description:
      "Select active jobs and attach cost codes or transaction codes to each entry for precise, real-time project cost tracking.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            What It Does
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Three core capabilities
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.index}
              className="bg-white rounded-xl p-8 border border-slate-200 flex flex-col gap-4"
            >
              <span className="text-xs font-mono text-slate-400">{f.index}</span>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {f.name}
                </h3>
                <span className="inline-block text-xs text-blue-600 font-medium bg-blue-50 px-2.5 py-1 rounded-md">
                  {f.who}
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
