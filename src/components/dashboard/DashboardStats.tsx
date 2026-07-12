import {
  ClipboardList,
  Trophy,
  Code2,
  Target,
} from "lucide-react";

import StatCard from "./StatCard";

export default function DashboardStats() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          Performance Overview
        </h2>

        <p className="text-slate-500">
          Track your interview preparation progress.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Interviews"
          value="24"
          subtitle="+12% this week"
          icon={<ClipboardList size={28} />}
        />

        <StatCard
          title="Average Score"
          value="87%"
          subtitle="Excellent"
          icon={<Trophy size={28} />}
        />

        <StatCard
          title="Coding Problems"
          value="145"
          subtitle="15 solved this week"
          icon={<Code2 size={28} />}
        />

        <StatCard
          title="Success Rate"
          value="91%"
          subtitle="Top Performer"
          icon={<Target size={28} />}
        />
      </div>
    </section>
  );
}