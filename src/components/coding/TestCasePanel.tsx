"use client";

import { Plus, Trash2 } from "lucide-react";

export type PracticeTestCase = {
  id: string;
  input: string;
  expectedOutput: string;
};

export type ExecutionStatus =
  | "idle"
  | "running"
  | "run-complete"
  | "submitting"
  | "submitted";

type TestCasePanelProps = {
  activeTestCaseId: string;
  executionStatus: ExecutionStatus;
  onAddTestCase: () => void;
  onRemoveTestCase: (testCaseId: string) => void;
  onSelectTestCase: (testCaseId: string) => void;
  onUpdateTestCase: (testCaseId: string, field: "input" | "expectedOutput", value: string) => void;
  output: string;
  testCases: PracticeTestCase[];
};

const statusLabels: Record<ExecutionStatus, string> = {
  idle: "Not run",
  running: "Running",
  "run-complete": "Preview complete",
  submitting: "Submitting",
  submitted: "Submit preview complete",
};

export default function TestCasePanel({
  activeTestCaseId,
  executionStatus,
  onAddTestCase,
  onRemoveTestCase,
  onSelectTestCase,
  onUpdateTestCase,
  output,
  testCases,
}: TestCasePanelProps) {
  const activeTestCase = testCases.find((testCase) => testCase.id === activeTestCaseId) ?? testCases[0];

  return (
    <section className="flex min-h-[280px] flex-[2] flex-col overflow-hidden bg-slate-950/60">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 px-4 py-3">
        <div>
          <h2 className="text-sm font-semibold text-white">Test cases & console</h2>
          <p className="mt-0.5 text-xs text-slate-400">Create and switch between visible test cases.</p>
        </div>
        <span className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300">
          {statusLabels[executionStatus]}
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto border-b border-slate-800 px-4 py-2">
        {testCases.map((testCase, index) => (
          <div key={testCase.id} className="flex shrink-0 items-center rounded-lg border border-slate-700 bg-slate-900">
            <button
              type="button"
              onClick={() => onSelectTestCase(testCase.id)}
              className={`px-3 py-1.5 text-xs font-medium ${testCase.id === activeTestCaseId ? "bg-violet-500/15 text-violet-200" : "text-slate-300 hover:bg-slate-800"}`}
            >
              Case {index + 1}
            </button>
            {testCases.length > 1 && (
              <button
                type="button"
                onClick={() => onRemoveTestCase(testCase.id)}
                className="border-l border-slate-700 p-1.5 text-slate-500 transition hover:text-rose-300"
                aria-label={`Remove test case ${index + 1}`}
              >
                <Trash2 className="size-3.5" />
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={onAddTestCase}
          className="inline-flex shrink-0 items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-violet-300 transition hover:bg-violet-500/10"
        >
          <Plus className="size-3.5" /> Add case
        </button>
      </div>

      <div className="grid min-h-0 flex-1 gap-px overflow-y-auto bg-slate-800 lg:grid-cols-3">
        <label className="min-h-40 bg-slate-900 p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Input</span>
          <textarea
            value={activeTestCase.input}
            onChange={(event) => onUpdateTestCase(activeTestCase.id, "input", event.target.value)}
            className="mt-3 h-24 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-slate-200 outline-none focus:border-violet-400"
            aria-label="Test case input"
          />
        </label>

        <label className="min-h-40 bg-slate-900 p-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Expected output</span>
          <textarea
            value={activeTestCase.expectedOutput}
            onChange={(event) => onUpdateTestCase(activeTestCase.id, "expectedOutput", event.target.value)}
            className="mt-3 h-24 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 p-3 font-mono text-sm text-slate-200 outline-none focus:border-violet-400"
            aria-label="Expected test case output"
          />
        </label>

        <div className="min-h-40 bg-slate-900 p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Console</p>
          <pre className="mt-3 overflow-auto whitespace-pre-wrap font-mono text-sm leading-6 text-slate-300">{output}</pre>
        </div>
      </div>
    </section>
  );
}
