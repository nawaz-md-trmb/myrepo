import Image from "next/image";

const screens = [
  {
    src: "/prototypes/dashboard.png",
    label: "Landing Screen — Dashboard",
    description: "The home screen field workers see when they open the app.",
  },
  {
    src: "/prototypes/job-time-entry.png",
    label: "Job Time Entry",
    description: "Individual time entry screen for selecting a job and logging hours.",
  },
  {
    src: "/prototypes/crew-timesheet.png",
    label: "Crew Timesheet — Default Hours",
    description: "Crew leads set default hours for the team before submitting.",
  },
  {
    src: "/prototypes/pte.png",
    label: "Pre-Tax Entry (PTE)",
    description: "Additional entry details for payroll and cost code allocation.",
  },
];

export default function Prototypes() {
  return (
    <section id="prototypes" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
            Product Screens
          </span>
          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Key moments in the mobile experience
          </h2>
          <p className="text-slate-500 text-sm mt-4 max-w-lg">
            A walkthrough of the core screens that field workers and crew leads
            interact with daily.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {screens.map((screen) => (
            <div
              key={screen.src}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <div className="relative h-96 bg-slate-50">
                <Image
                  src={screen.src}
                  alt={screen.label}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-900">
                  {screen.label}
                </p>
                <p className="text-xs text-slate-500 mt-1">{screen.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
