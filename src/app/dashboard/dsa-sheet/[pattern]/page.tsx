import Link from "next/link";
import { notFound } from "next/navigation";
import { DSA_PATTERNS } from "@/data/dsa-sheet";

type PageProps = {
  params: Promise<{ pattern: string }>;
};

export default async function PatternPage({ params }: PageProps) {
  const { pattern } = await params;

  const currentPattern = DSA_PATTERNS.find((p) =>
    p.slug.toLowerCase().replace(/[^a-z0-9]+/g, "-") === pattern
  );

  if (!currentPattern) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* Back Button */}
        <Link
          href="/dashboard/dsa-sheet"
          className="inline-flex items-center text-sm text-violet-300 hover:text-violet-200"
        >
          ← Back to DSA Sheet
        </Link>

        {/* Header */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <h1 className="text-4xl font-bold text-white">
            {currentPattern.slug}
          </h1>

          <p className="mt-3 text-slate-400">
            {currentPattern.questions.length} curated interview questions from
            this pattern. Click any question to open it in the coding editor.
          </p>
        </div>

        {/* Questions */}
        <div className="space-y-4">
          {currentPattern.questions.map((question, index) => (
            <Link
              key={`${currentPattern.slug}-${question.title}-${index}`}
              href={`/dashboard/coding?problem=${question.id}`}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition hover:border-violet-500/40 hover:bg-slate-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/20 text-sm font-semibold text-violet-300">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-semibold text-white">
                    {question.title}
                  </h3>

                  <p className="text-sm text-slate-400">
                    {question.difficulty}
                  </p>
                </div>
              </div>

              <span className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500">
                Solve →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}