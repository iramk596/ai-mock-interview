"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle2, Clock3, Pause, Play, RotateCcw, Send } from "lucide-react";
import MonacoCodeEditor from "@/components/coding/MonacoCodeEditor";
import ProblemPanel from "@/components/coding/ProblemPanel";
import QuestionNavigator from "@/components/coding/QuestionNavigator";
import ResizableCodingWorkspace from "@/components/coding/ResizableCodingWorkspace";
import TestCasePanel, {
  type ExecutionStatus,
  type PracticeTestCase,
} from "@/components/coding/TestCasePanel";
import { CODING_PROBLEMS } from "@/data/coding-problems";
import type { CodingProblem, SupportedLanguage } from "@/data/coding-problems/types";
import { DSA_PATTERNS, type Pattern, type Question } from "@/data/dsa-sheet";

type Language = SupportedLanguage;

const LANGUAGES: { value: Language; label: string }[] = [
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "cpp", label: "C++" },
];

function formatElapsedTime(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
  const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

export default function CodingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const problemId = searchParams.get("problem");
  const [language, setLanguage] = useState<Language>("typescript");
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [solvedProblemIds, setSolvedProblemIds] = useState<string[]>([]);

  const currentProblem = useMemo(
    () => CODING_PROBLEMS.find((problem) => problem.id === problemId) ?? CODING_PROBLEMS[0],
    [problemId]
  );

  const currentPattern = useMemo(
    () =>
      DSA_PATTERNS.find((pattern) =>
        pattern.questions.some((question) => question.id === currentProblem.id)
      ),
    [currentProblem.id]
  );

  const navigatorQuestions = useMemo(
    () =>
      (currentPattern?.questions ?? []).map((question) => ({
        ...question,
        available: CODING_PROBLEMS.some((problem) => problem.id === question.id),
      })),
    [currentPattern]
  );

  const navigateToProblem = (nextProblemId: string) => {
    router.push(`/dashboard/coding?problem=${encodeURIComponent(nextProblemId)}`);
  };

  useEffect(() => {
    if (!isTimerRunning) return;

    const timer = window.setInterval(() => setElapsedSeconds((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [isTimerRunning]);

  const toggleSolved = (id: string) => {
    setSolvedProblemIds((solvedIds) =>
      solvedIds.includes(id)
        ? solvedIds.filter((solvedId) => solvedId !== id)
        : [...solvedIds, id]
    );
  };

  return (
    <CodingWorkspace
      key={`${currentProblem.id}:${language}`}
      currentPattern={currentPattern}
      currentProblem={currentProblem}
      language={language}
      navigatorQuestions={navigatorQuestions}
      onNavigate={navigateToProblem}
      onLanguageChange={setLanguage}
      elapsedSeconds={elapsedSeconds}
      isSolved={solvedProblemIds.includes(currentProblem.id)}
      isTimerRunning={isTimerRunning}
      onResetTimer={() => setElapsedSeconds(0)}
      onToggleSolved={() => toggleSolved(currentProblem.id)}
      onToggleTimer={() => setIsTimerRunning((running) => !running)}
    />
  );
}

type NavigatorQuestion = Question & { available: boolean };

type CodingWorkspaceProps = {
  currentPattern: Pattern | undefined;
  currentProblem: CodingProblem;
  language: Language;
  navigatorQuestions: NavigatorQuestion[];
  onNavigate: (problemId: string) => void;
  onLanguageChange: (language: Language) => void;
  elapsedSeconds: number;
  isSolved: boolean;
  isTimerRunning: boolean;
  onResetTimer: () => void;
  onToggleSolved: () => void;
  onToggleTimer: () => void;
};

function CodingWorkspace({
  currentPattern,
  currentProblem,
  elapsedSeconds,
  isSolved,
  isTimerRunning,
  language,
  navigatorQuestions,
  onNavigate,
  onLanguageChange,
  onResetTimer,
  onToggleSolved,
  onToggleTimer,
}: CodingWorkspaceProps) {
  const [code, setCode] = useState(currentProblem.starterCode[language]);
  const [testCases, setTestCases] = useState<PracticeTestCase[]>([
    {
      id: "example-case",
      input: currentProblem.exampleInput,
      expectedOutput: currentProblem.exampleOutput,
    },
  ]);
  const [activeTestCaseId, setActiveTestCaseId] = useState("example-case");
  const [output, setOutput] = useState("Run your code to view console output.");
  const [executionStatus, setExecutionStatus] = useState<ExecutionStatus>("idle");

  const showExecutionPreview = (action: "run" | "submit") => {
    const activeTestCase = testCases.find((testCase) => testCase.id === activeTestCaseId);
    setExecutionStatus(action === "run" ? "running" : "submitting");
    setOutput(`${action === "run" ? "Running" : "Submitting"} preview...`);

    window.setTimeout(() => {
      setExecutionStatus(action === "run" ? "run-complete" : "submitted");
      setOutput(
        `${action === "run" ? "Run" : "Submit"} preview complete\n\nInput:\n${activeTestCase?.input || "(empty)"}\n\nReal code execution is not configured yet. Your code has not been executed.`
      );
    }, 450);
  };

  const addTestCase = () => {
    const testCase: PracticeTestCase = {
      id: crypto.randomUUID(),
      input: "",
      expectedOutput: "",
    };
    setTestCases((cases) => [...cases, testCase]);
    setActiveTestCaseId(testCase.id);
  };

  const removeTestCase = (testCaseId: string) => {
    const remainingTestCases = testCases.filter((testCase) => testCase.id !== testCaseId);
    setTestCases(remainingTestCases);
    if (testCaseId === activeTestCaseId) {
      setActiveTestCaseId(remainingTestCases[0].id);
    }
  };

  const updateTestCase = (
    testCaseId: string,
    field: "input" | "expectedOutput",
    value: string
  ) => {
    setTestCases((cases) =>
      cases.map((testCase) =>
        testCase.id === testCaseId ? { ...testCase, [field]: value } : testCase
      )
    );
  };

  const isBusy = executionStatus === "running" || executionStatus === "submitting";

  return (
    <div className="min-h-[calc(100vh-8rem)] text-white xl:h-[calc(100vh-8rem)]">
      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1600px] flex-col gap-4 xl:h-full">
        <header className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-2xl shadow-slate-950/20 xl:flex-row xl:items-center xl:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
              <span>Practice</span>
              <span className="text-slate-600">/</span>
              <span>{currentPattern?.slug ?? "Coding problem"}</span>
            </div>
            <h1 className="mt-1 truncate text-xl font-semibold text-white">{currentProblem.title}</h1>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {navigatorQuestions.length > 0 && (
              <QuestionNavigator
                currentProblemId={currentProblem.id}
                questions={navigatorQuestions}
                patternName={currentPattern?.slug ?? "this pattern"}
                onNavigate={onNavigate}
              />
            )}
            <label className="sr-only" htmlFor="language">Language</label>
            <select
              id="language"
              value={language}
              onChange={(event) => onLanguageChange(event.target.value as Language)}
              className="h-9 rounded-lg border border-slate-700 bg-slate-900 px-3 text-sm font-medium text-slate-100 outline-none focus:border-violet-400"
            >
              {LANGUAGES.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
            </select>
            <div className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-700 px-3 font-mono text-sm text-slate-200">
              <Clock3 className="size-4 text-violet-300" /> {formatElapsedTime(elapsedSeconds)}
            </div>
            <button type="button" onClick={onToggleTimer} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-slate-700 px-2.5 text-sm font-medium text-slate-200 transition hover:bg-slate-800" aria-label={isTimerRunning ? "Pause interview timer" : "Resume interview timer"}>
              {isTimerRunning ? <Pause className="size-4" /> : <Play className="size-4" />} {isTimerRunning ? "Pause" : "Resume"}
            </button>
            <button type="button" onClick={onResetTimer} className="inline-flex h-9 items-center justify-center rounded-lg border border-slate-700 px-2.5 text-slate-300 transition hover:bg-slate-800" aria-label="Reset interview timer">
              <RotateCcw className="size-4" />
            </button>
            <button type="button" onClick={onToggleSolved} className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-semibold transition ${isSolved ? "border-emerald-400/50 bg-emerald-500/15 text-emerald-200" : "border-slate-700 text-slate-200 hover:bg-slate-800"}`}>
              <CheckCircle2 className="size-4" /> {isSolved ? "Solved" : "Mark solved"}
            </button>
            <button type="button" disabled={isBusy} onClick={() => showExecutionPreview("run")} className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-violet-400/50 px-3 text-sm font-semibold text-violet-200 transition hover:bg-violet-500/15 disabled:cursor-wait disabled:opacity-60">
              <Play className="size-4" /> {executionStatus === "running" ? "Running..." : "Run"}
            </button>
            <button type="button" disabled={isBusy} onClick={() => showExecutionPreview("submit")} className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-violet-600 px-3 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-wait disabled:opacity-60">
              <Send className="size-4" /> {executionStatus === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </div>
        </header>

        <ResizableCodingWorkspace
          leftPanel={<ProblemPanel problem={currentProblem} patternName={currentPattern?.slug ?? "Coding"} />}
          rightPanel={<section className="flex h-[720px] min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 shadow-2xl shadow-slate-950/20 xl:h-full">
            <div className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
              <h2 className="text-sm font-semibold text-slate-100">Code editor</h2>
              <span className="font-mono text-xs uppercase tracking-wider text-slate-400">{language}</span>
            </div>
            <div className="min-h-[300px] flex-[3] overflow-hidden">
              <MonacoCodeEditor code={code} language={language} onChange={setCode} />
            </div>
            <div className="h-px bg-slate-800" />
            <TestCasePanel activeTestCaseId={activeTestCaseId} executionStatus={executionStatus} onAddTestCase={addTestCase} onRemoveTestCase={removeTestCase} onSelectTestCase={setActiveTestCaseId} onUpdateTestCase={updateTestCase} output={output} testCases={testCases} />
          </section>}
        />
      </div>
    </div>
  );
}
