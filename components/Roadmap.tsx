const roadmapItems = [
  {
    index: "01",
    name: "Approvals",
    description:
      "A configurable approval workflow that lets supervisors and managers review, approve, or reject submitted timesheets before they are processed in the ERP — adding a layer of accuracy and accountability.",
  },
  {
    index: "02",
    name: "PO Requisition",
    description:
      "Enable field workers and crew leads to raise purchase order requisitions directly from the job site, reducing delays in material procurement and keeping projects moving without office bottlenecks.",
  },
  {
    index: "03",
    name: "Delivery Docket",
    description:
      "Capture and confirm material deliveries on-site with digital delivery dockets. Eliminates paper-based processes and ensures delivery records are tied to the correct job in the ERP in real time.",
  },
  {
    index: "04",
    name: "Plant Time & Forecast Entry",
    description:
      "Log plant and equipment usage time alongside labour entries, and submit forecast hours for upcoming work — giving project managers better visibility into resource allocation and cost projections.",
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="bg-slate-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            What&apos;s Next
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Product Roadmap
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg">
            Upcoming capabilities planned for Jobpac Mobile — extending the
            platform beyond time tracking into broader field operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmapItems.map((item) => (
            <div
              key={item.index}
              className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    {item.index}
                  </span>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.name}
                  </h3>
                </div>
                <span className="text-xs font-medium text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md shrink-0">
                  Planned
                </span>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
