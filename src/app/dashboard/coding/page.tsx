"use client";

import { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { CODING_PROBLEMS } from "@/data/coding-problems";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

type Language = "javascript" | "typescript" | "python" | "java" | "cpp";

export default function CodingPage() {
  const searchParams = useSearchParams();
  const problemId = searchParams.get("problem");

  const currentProblem = useMemo(() => {
    return (
      CODING_PROBLEMS.find((p) => p.id === problemId) ??
      CODING_PROBLEMS[0]
    );
  }, [problemId]);

  const [language, setLanguage] = useState<Language>("typescript");
  const [code, setCode] = useState(currentProblem.starterCode);
  const [customInput, setCustomInput] = useState(
    currentProblem.exampleInput || ""
  );
  const [output, setOutput] = useState(
    "Run your code to see output..."
  );

  const handleRun = () => {
    setOutput(
      `Execution preview for ${currentProblem.title}

Input:
${customInput}

Code executed successfully.`
    );
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Coding Interview Practice
            </h1>
            <p className="mt-2 text-slate-400">
              Solve DSA problems in a real coding interview environment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-violet-500"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>

            <button
              onClick={handleRun}
              className="rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-500 active:scale-95"
            >
              ▶ Run / Submit
            </button>
          </div>
        </div>

        {/* Split Screen */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Problem Panel */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-3xl font-bold text-violet-300">
              {currentProblem.title}
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Difficulty: {currentProblem.difficulty}
            </p>

            <p className="mt-5 leading-8 text-slate-200">
              {currentProblem.description}
            </p>

            <div className="mt-6 rounded-2xl bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">
                Example
              </h3>

              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-slate-200">
{`Input:
${currentProblem.exampleInput}

Output:
${currentProblem.exampleOutput}`}
              </pre>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">
                Constraints
              </h3>

              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
                <li>Use an optimal solution whenever possible.</li>
                <li>Avoid unnecessary nested loops.</li>
                <li>Think about time and space complexity.</li>
              </ul>
            </div>
          </section>

          {/* Editor Panel */}
          <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 px-5 py-3 text-sm text-slate-400">
              {language.toUpperCase()} Editor
            </div>

            <Editor
              height="65vh"
              language={language === "cpp" ? "cpp" : language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: "on",
                fontFamily: "JetBrains Mono, monospace",
                padding: { top: 16 },
              }}
            />

            {/* Test Case Panel */}
            <div className="space-y-4 border-t border-slate-800 bg-slate-900/70 p-5">
              <h3 className="text-lg font-semibold text-white">
                Custom Test Case
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-300">
                    Input
                  </p>

                  <textarea
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-violet-500"
                  />
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-300">
                    Output
                  </p>

                  <div className="h-32 overflow-auto whitespace-pre-wrap rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-200">
                    {output}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}