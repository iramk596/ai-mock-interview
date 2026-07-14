import { Progress } from "@/components/ui/progress";


export default function DailyGoal() {
  return (
    <section className="rounded-2xl border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Today's Goal
          </h2>

          <p className="mt-2 text-slate-500">
            Complete your interview tasks.
          </p>
        </div>
      </div>

      <Progress
        value={80}
        className="mt-6"
      />

      <p className="mt-4 font-semibold text-slate-800">
        4 / 5 Tasks Complete
      </p>

      <ul className="mt-6 space-y-2 text-slate-600">
        <li>✅ Interview</li>
        <li>✅ Coding</li>
        <li>✅ Resume</li>
        <li>⬜ Behavioral Round</li>
      </ul>
    </section>
  );
}