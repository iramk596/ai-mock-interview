import Link from "next/link";
import { dsaSheet } from "@/data/dsa-sheet";

export default function DSASheetPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl space-y-6">
        <div>
          <h1 className="text-4xl font-bold">Pattern-wise DSA Sheet</h1>
          <p className="mt-2 text-slate-400">
            Curated roadmap covering all important coding interview patterns.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {dsaSheet.map((pattern) => (
            <Link
              key={pattern.id}
              href={`/dashboard/dsa-sheet/${pattern.id}`}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500 hover:bg-slate-900"
            >
              <div className="text-3xl">{pattern.icon}</div>

              <h2 className="mt-4 text-2xl font-semibold">
                {pattern.title}
              </h2>

              <p className="mt-2 text-slate-400">
                {pattern.questions.length} questions
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {pattern.questions.slice(0, 3).map((q) => (
                  <span
                    key={q.name}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300"
                  >
                    {q.name}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}