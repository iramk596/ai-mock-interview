import type { CodingProblem } from "@/data/coding-problems/types";

type ProblemPanelProps = {
  problem: CodingProblem;
  patternName: string;
};

const difficultyStyles = {
  Easy: "bg-emerald-500/15 text-emerald-300 ring-emerald-400/30",
  Medium: "bg-amber-500/15 text-amber-300 ring-amber-400/30",
  Hard: "bg-rose-500/15 text-rose-300 ring-rose-400/30",
} as const;

export default function ProblemPanel({
  problem,
  patternName,
}: ProblemPanelProps) {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
      <div className="border-b border-slate-800 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${difficultyStyles[problem.difficulty]}`}
          >
            {problem.difficulty}
          </span>
          <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
            {patternName}
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">
          {problem.title}
        </h1>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto p-5 pr-3">
        <div className="space-y-6 pr-2">
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Problem
            </h2>
            <p className="mt-3 whitespace-pre-line leading-7 text-slate-200">
              {problem.description}
            </p>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <h2 className="text-sm font-semibold text-slate-100">Example</h2>
            <pre className="mt-3 overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-6 text-slate-300">
{`Input\n${problem.exampleInput ?? "See the starter code for an example input."}\n\nOutput\n${problem.exampleOutput ?? "Output is not yet specified for this problem."}`}
            </pre>
          </section>

          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Constraints
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-300">
              <li>Write a correct solution for the provided input.</li>
              <li>Consider time and space complexity before submitting.</li>
              <li>Use the editor and test panel to validate your approach.</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
