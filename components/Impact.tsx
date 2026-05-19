const stats = [
  { value: "Real-time", label: "ERP data sync from the field" },
  { value: "2 modes", label: "Individual and Crew timesheets" },
  { value: "Zero", label: "Paper or manual re-entry required" },
];

const outcomes = [
  "Accurate, on-time time entries mean payroll is processed correctly and on schedule.",
  "Cost codes attached to each entry give project managers real-time visibility into labour costs per job.",
  "Crew timesheets eliminate the double-handling of data between the field and the office.",
  "Field workers stay connected to the ERP without ever needing access to a desktop.",
];

export default function Impact() {
  return (
    <section id="impact" className="bg-blue-600 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-200 uppercase">
            Why It Matters
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">
            Closing the gap between
            <br />
            field and office
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((s) => (
            <div
              key={s.value}
              className="border-t-2 border-blue-400 pt-6"
            >
              <p className="text-3xl font-bold text-white mb-2">{s.value}</p>
              <p className="text-blue-200 text-sm">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {outcomes.map((o) => (
            <div key={o} className="flex gap-4 items-start">
              <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-300 shrink-0" />
              <p className="text-blue-100 text-sm leading-relaxed">{o}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
