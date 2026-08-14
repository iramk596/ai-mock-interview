import Link from "next/link";
import {
  ArrowRightLeft,
  Rabbit,
  LayoutGrid,
  Activity,
  Layers3,
  Hash,
  Search,
  TreePine,
  Network,
  BrainCircuit,
} from "lucide-react";

import { DSA_PATTERNS } from "@/data/dsa-sheet";

const ICONS = {
  "Two Pointers": ArrowRightLeft,
  "Fast & Slow Pointers": Rabbit,
  "Sliding Window": LayoutGrid,
  "Kadane Pattern": Activity,
  Stack: Layers3,
  "Hash Maps": Hash,
  "Binary Search": Search,
  "Heap Pattern": Layers3,
  "Tree Pattern": TreePine,
  Graphs: Network,
  "Dynamic Programming": BrainCircuit,
} as const;

type Question = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
};

export default function DSASheetPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Pattern-wise DSA Sheet
            </h1>

            <p className="mt-3 text-slate-400">
              Curated roadmap covering all important coding interview patterns.
            </p>
          </div>

          <Link
            href="/dashboard/dsa-sheet/roadmap"
            className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-500"
          >
            View Roadmap
          </Link>
        </div>

        {/* Pattern Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {DSA_PATTERNS.map((pattern) => {
            const Icon =
              ICONS[pattern.slug as keyof typeof ICONS] ?? LayoutGrid;

            return (
              <Link
                key={pattern.slug}
                href={`/dashboard/dsa-sheet/${pattern.slug
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")}`}
                className="group rounded-3xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-violet-500/40 hover:bg-slate-900 hover:shadow-lg hover:shadow-violet-500/10"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-800 text-slate-200 transition group-hover:border-violet-500/40 group-hover:text-violet-300">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h2 className="mt-5 text-2xl font-bold text-white group-hover:text-violet-300">
                  {pattern.slug}
                </h2>

                {/* Count */}
                <p className="mt-2 text-sm text-slate-400">
                  {pattern.questions.length} questions
                </p>

                {/* Preview Questions */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {pattern.questions
                    .slice(0, 3)
                    .map((question: Question, index: number) => (
                      <span
                        key={`${pattern.slug}-${question.id}-${index}`}
                        className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-300"
                      >
                        {question.title}
                      </span>
                    ))}

                  {pattern.questions.length > 3 && (
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
                      +{pattern.questions.length - 3} more
                    </span>
                  )}
                </div>

                {/* Hover CTA */}
                <div className="mt-6 flex items-center text-sm font-medium text-violet-300 opacity-0 transition group-hover:opacity-100">
                  Open pattern →
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}

