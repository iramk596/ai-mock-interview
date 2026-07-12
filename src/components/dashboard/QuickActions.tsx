import {
  Brain,
  Code2,
  FileText,
  BarChart3,
} from "lucide-react";

import ActionCard from "./ActionCard";

export default function QuickActions() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="text-slate-500">
          Jump into your most-used features.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <ActionCard
          title="Start Interview"
          description="Practice HR, Technical and Behavioral interviews."
          href="/interview"
          icon={<Brain size={28} />}
          color="bg-blue-600"
        />

        <ActionCard
          title="Coding Practice"
          description="Solve coding questions with AI feedback."
          href="/coding"
          icon={<Code2 size={28} />}
          color="bg-violet-600"
        />

        <ActionCard
          title="Resume Analyzer"
          description="Upload your resume for AI suggestions."
          href="/resume"
          icon={<FileText size={28} />}
          color="bg-emerald-600"
        />

        <ActionCard
          title="View Reports"
          description="See interview history and analytics."
          href="/reports"
          icon={<BarChart3 size={28} />}
          color="bg-amber-500"
        />
      </div>
    </section>
  );
}