import {
  Calendar,
  Trophy,
  Clock3,
  Target,
} from "lucide-react";

export default function MonthlySummary() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        This Month
      </h2>

      <p className="mt-1 text-slate-500">
        Your latest achievements.
      </p>

      <div className="mt-8 space-y-6">

        <SummaryItem
          icon={<Calendar size={22} />}
          title="Interviews"
          value="12"
        />

        <SummaryItem
          icon={<Trophy size={22} />}
          title="Average Score"
          value="87%"
        />

        <SummaryItem
          icon={<Clock3 size={22} />}
          title="Practice Time"
          value="26 hrs"
        />

        <SummaryItem
          icon={<Target size={22} />}
          title="Best Score"
          value="96%"
        />

      </div>
    </div>
  );
}

function SummaryItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-indigo-100 p-3 text-indigo-600">
          {icon}
        </div>

        <p className="font-medium text-slate-700">
          {title}
        </p>
      </div>

      <p className="text-xl font-bold text-slate-900">
        {value}
      </p>

    </div>
  );
}