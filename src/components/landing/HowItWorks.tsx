import { ArrowRight, BrainCircuit, Mic, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Create Account",
    description: "Start with a fast, frictionless onboarding flow tailored to your career goals.",
    icon: BrainCircuit,
  },
  {
    title: "Select Interview",
    description: "Choose your target role, seniority, and interview format in seconds.",
    icon: Mic,
  },
  {
    title: "AI Interview",
    description: "Experience a realistic, adaptive conversation driven by an intelligent interviewer.",
    icon: Sparkles,
  },
  {
    title: "AI Feedback",
    description: "Receive concise coaching, score insights, and improvement recommendations instantly.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            How It Works
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            A premium prep experience in four simple steps.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.title} className="relative rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/70">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-950 to-slate-700 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-sm font-semibold text-slate-400">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute top-1/2 right-[-0.8rem] hidden -translate-y-1/2 text-slate-300 lg:block">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
