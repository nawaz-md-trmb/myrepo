import Image from "next/image";

const screens = [
  {
    src: "/prototypes/dashboard.png",
    label: "Sign In",
    description:
      "The login screen for Jobpac Mobile, supporting both standard Jobpac credentials and Single Sign On (SSO) via Trimble Construction.",
  },
  {
    src: "/prototypes/job-time-entry.png",
    label: "Home",
    description:
      "The home screen showing a summary of Individual Time and Crew Time for the current pay period, plus pending Approvals across Purchase Orders, Invoices, SC Agreements, Payments, and Variations.",
  },
  {
    src: "/prototypes/crew-timesheet.png",
    label: "Individual Time Entry",
    description:
      "The Individual Time Entry screen displaying pay period cards — Current, Next, Last, and Other — with days logged and hours tracked against each period.",
  },
  {
    src: "/prototypes/pte.png",
    label: "Crew Time Entry",
    description:
      "The Crew Time Entry screen showing pay periods with crew count, days, and total hours — used by crew leads to manage and submit time on behalf of their teams.",
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
            A walkthrough of the core screens — from sign in through to
            individual and crew time entry — that workers interact with daily.
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
