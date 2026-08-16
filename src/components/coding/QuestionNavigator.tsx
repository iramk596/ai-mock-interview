"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Question } from "@/data/dsa-sheet";

type NavigatorQuestion = Question & { available: boolean };

type QuestionNavigatorProps = {
  currentProblemId: string;
  questions: NavigatorQuestion[];
  onNavigate: (problemId: string) => void;
  patternName: string;
};

export default function QuestionNavigator({
  currentProblemId,
  onNavigate,
  patternName,
  questions,
}: QuestionNavigatorProps) {
  const currentIndex = questions.findIndex(
    (question) => question.id === currentProblemId
  );
  const previousQuestion = questions.slice(0, currentIndex).reverse().find(
    (question) => question.available
  );
  const nextQuestion = questions
    .slice(currentIndex + 1)
    .find((question) => question.available);

  return (
    <nav className="flex flex-wrap items-center gap-2" aria-label="Pattern questions">
      <button
        type="button"
        onClick={() => previousQuestion && onNavigate(previousQuestion.id)}
        disabled={!previousQuestion}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-700 px-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft className="size-4" /> Previous
      </button>

      <label className="sr-only" htmlFor="pattern-question">
        Choose a question in {patternName}
      </label>
      <select
        id="pattern-question"
        value={currentProblemId}
        onChange={(event) => onNavigate(event.target.value)}
        className="h-9 max-w-56 rounded-lg border border-slate-700 bg-slate-900 px-3 text-sm text-slate-100 outline-none focus:border-violet-400"
      >
        {questions.map((question, index) => (
          <option key={question.id} value={question.id} disabled={!question.available}>
            {index + 1}. {question.title}{question.available ? "" : " (coming soon)"}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={() => nextQuestion && onNavigate(nextQuestion.id)}
        disabled={!nextQuestion}
        className="inline-flex h-9 items-center gap-1 rounded-lg border border-slate-700 px-2.5 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next <ChevronRight className="size-4" />
      </button>
    </nav>
  );
}
