import {
  BrainCircuit,
  Briefcase,
  ChartNoAxesCombined,
  Code2,
  MessageSquareText,
  FileText,
  Sparkles,
  ScanSearch,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI Technical Interviews",
    description: "Practice system design, debugging, and technical discussions with a realistic interviewer.",
    icon: BrainCircuit,
  },
  {
    title: "HR Interviews",
    description: "Sharpen your communication, leadership stories, and confidence for people-focused rounds.",
    icon: Briefcase,
  },
  {
    title: "Behavioral Interviews",
    description: "Get coached on STAR responses, ownership, and impactful storytelling in real time.",
    icon: MessageSquareText,
  },
  {
    title: "Coding Interviews",
    description: "Simulate whiteboard-style problem solving with guided hints and instant feedback.",
    icon: Code2,
  },
  {
    title: "Resume Analysis",
    description: "Understand your resume strength, relevance, and missing signal with AI-driven insights.",
    icon: FileText,
  },
  {
    title: "ATS Resume Checker",
    description: "Optimize for recruiter scanning with formatting, keyword, and clarity recommendations.",
    icon: ScanSearch,
  },
  {
    title: "AI Feedback",
    description: "Receive actionable feedback on clarity, structure, pacing, and communication style.",
    icon: Sparkles,
  },
  {
    title: "Performance Analytics",
    description: "Track your growth across sessions and identify patterns that need improvement.",
    icon: ChartNoAxesCombined,
  },
];

export default function Features() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to perform with confidence.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-300">
            From technical rounds to resume optimization, each experience is designed to feel premium, adaptive, and deeply practical.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="group border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10"
              >
                <CardHeader className="pb-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 via-sky-500/20 to-violet-500/20 text-cyan-200 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-3 px-6 pb-6">
                  <CardTitle className="text-lg font-semibold text-white">
                    {feature.title}
                  </CardTitle>
                  <p className="text-sm leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
