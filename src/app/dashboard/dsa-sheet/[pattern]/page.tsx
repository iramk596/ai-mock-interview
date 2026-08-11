import Link from "next/link";
import { notFound } from "next/navigation";
import { dsaSheet } from "@/data/dsa-sheet";

type PageProps = {
  params: Promise<{ pattern: string }>;
};

export default async function PatternPage({ params }: PageProps) {
  const { pattern } = await params;

  const currentPattern = dsaSheet.find((p) => p.id === pattern);

  if (!currentPattern) notFound();

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              {currentPattern.icon} {currentPattern.title}
            </h1>
            <p className="mt-2 text-slate-400">
              {currentPattern.questions.length} curated interview questions
            </p>
          </div>

          <Link
            href="/dashboard/dsa-sheet"
            className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:border-violet-500 hover:text-white"
          >
            ← Back
          </Link>
        </div>

        <div className="space-y-4">
          {currentPattern.questions.map((question, index) => (
            <div
              key={question.name}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/20 text-sm font-semibold text-violet-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-white">{question.name}</h3>
                  <p className="text-sm text-slate-400">
                    {question.difficulty}
                  </p>
                </div>
              </div>

              <Link
                href={`/dashboard/coding?problem=${encodeURIComponent(question.name)}`}
                className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
              >
                Solve →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}