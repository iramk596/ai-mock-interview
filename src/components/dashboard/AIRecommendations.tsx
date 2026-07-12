import { Sparkles } from "lucide-react";

const tips = [
  "Practice Dynamic Programming",
  "Improve communication pace",
  "Excellent Java fundamentals",
  "Attempt a Hard interview next",
  "Resume score improved by 12%",
];

export default function AIRecommendations() {
  return (
    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="flex items-center gap-2">

        <Sparkles className="text-indigo-600" />

        <h2 className="text-2xl font-bold">
          AI Recommendations
        </h2>

      </div>

      <div className="mt-6 space-y-4">

        {tips.map((tip) => (
          <div
            key={tip}
            className="rounded-lg bg-indigo-50 p-3 text-slate-700"
          >
            ✓ {tip}
          </div>
        ))}

      </div>

    </section>
  );
}