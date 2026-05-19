const fieldSteps = [
  {
    step: "1",
    title: "Open App",
    detail: "Field worker or crew lead opens Jobpac Mobile on their phone",
  },
  {
    step: "2",
    title: "Select Job",
    detail: "Choose the active job to log time against",
  },
  {
    step: "3",
    title: "Log Time",
    detail: "Create a time entry with hours worked",
  },
  {
    step: "4",
    title: "Add Codes",
    detail: "Attach cost code and/or transaction code to the entry",
  },
  {
    step: "5",
    title: "Submit",
    detail: "Submit the completed timesheet",
  },
];

const systemSteps = [
  {
    step: "6",
    title: "Syncs to ERP",
    detail: "Time data syncs into Jobpac ERP automatically in real time",
  },
  {
    step: "7",
    title: "Payroll Processing",
    detail: "Payroll admin processes accurate, on-time field data",
  },
  {
    step: "8",
    title: "Project Cost Review",
    detail: "Project manager reviews real-time labour costs per job in the ERP",
  },
];

function StepList({
  steps,
  accent,
}: {
  steps: typeof fieldSteps;
  accent: boolean;
}) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((s, i) => (
        <div key={s.step} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full text-xs font-semibold flex items-center justify-center shrink-0 ${
                accent
                  ? "bg-blue-600 text-white"
                  : "bg-slate-700 text-slate-300"
              }`}
            >
              {s.step}
            </div>
            {i < steps.length - 1 && (
              <div className="w-px flex-1 bg-slate-800 my-1" />
            )}
          </div>
          <div className="pb-7">
            <p className="font-medium text-white text-sm">{s.title}</p>
            <p className="text-slate-400 text-sm mt-0.5 leading-relaxed">
              {s.detail}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-950 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
            The Flow
          </span>
          <h2 className="text-4xl font-bold text-white mt-4">
            From field to back office
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-8">
              On the job site
            </p>
            <StepList steps={fieldSteps} accent={true} />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-8">
              In the back office
            </p>
            <StepList steps={systemSteps} accent={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
