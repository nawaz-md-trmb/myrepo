import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import PersonasSection from "@/components/PersonasSection";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Prototypes from "@/components/Prototypes";
import Impact from "@/components/Impact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <PersonasSection />
        <FeaturesSection />
        <HowItWorks />
        <Prototypes />
        <Impact />
      </main>
      <footer className="bg-slate-950 py-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <span className="text-slate-500 text-sm font-medium">
            Jobpac Mobile — Product Overview
          </span>
          <span className="text-slate-600 text-xs">
            Prepared for internal review
          </span>
        </div>
      </footer>
    </>
  );
}
