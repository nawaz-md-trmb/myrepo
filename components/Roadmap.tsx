type Status = "under-development" | "design-in-progress" | "planned";

const statusConfig: Record<Status, { label: string; className: string }> = {
  "under-development": {
    label: "Under Development",
    className:
      "text-blue-700 bg-blue-50 border border-blue-200",
  },
  "design-in-progress": {
    label: "Design in Progress",
    className:
      "text-purple-700 bg-purple-50 border border-purple-200",
  },
  planned: {
    label: "Planned",
    className:
      "text-amber-700 bg-amber-50 border border-amber-200",
  },
};

const roadmapItems: { index: string; name: string; description: string; status: Status }[] = [
  {
    index: "01",
    name: "Approvals",
    status: "under-development",
    description:
      "A configurable approval workflow that lets supervisors and managers review, approve, or reject submitted timesheets before they are processed in the ERP — adding a layer of accuracy and accountability.",
  },
  {
    index: "02",
    name: "PO Requisition",
    status: "planned",
    description:
      "Enable field workers and crew leads to raise purchase order requisitions directly from the job site, reducing delays in material procurement and keeping projects moving without office bottlenecks.",
  },
  {
    index: "03",
    name: "Delivery Docket",
    status: "design-in-progress",
    description:
      "Capture and confirm material deliveries on-site with digital delivery dockets. Eliminates paper-based processes and ensures delivery records are tied to the correct job in the ERP in real time.",
  },
  {
    index: "04",
    name: "Plant Time Entry",
    status: "planned",
    description:
      "Log plant and equipment usage time directly from the job site, tied to specific jobs and cost codes — ensuring accurate resource tracking alongside labour entries.",
  },
  {
    index: "05",
    name: "Forecast Entry",
    status: "planned",
    description:
      "Submit forecast hours for upcoming work to give project managers real-time visibility into planned resource allocation and projected labour costs per job.",
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
          {roadmapItems.map((item) => {
            const { label, className } = statusConfig[item.status];
            return (
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
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-md shrink-0 ${className}`}
                  >
                    {label}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
