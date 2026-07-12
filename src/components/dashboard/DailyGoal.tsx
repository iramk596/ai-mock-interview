import { Progress } from "@/components/ui/progress";

export default function DailyGoal() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <h2 className="text-2xl font-bold">
        Today's Goal
      </h2>

      <p className="mt-2 text-slate-500">
        Complete your interview tasks.
      </p>

      <Progress
        value={80}
        className="mt-6"
      />

      <p className="mt-4 font-semibold">
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