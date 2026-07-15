"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface InterviewHeaderProps {
  role: string;
  currentQuestion: number;
  totalQuestions: number;
  time: string;
  onExit: () => void;
}

export default function InterviewHeader({
  role,
  currentQuestion,
  totalQuestions,
  time,
  onExit,
}: InterviewHeaderProps) {
  const progress =
    (currentQuestion / totalQuestions) * 100;

  return (
    <header className="rounded-2xl border border-slate-700 bg-white/5 backdrop-blur-xl p-6">

      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Left */}

        <div className="flex items-center gap-4">

          <Button
            variant="outline"
            onClick={onExit}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />

            Exit
          </Button>

          <div>

            <h1 className="text-2xl font-bold text-white">
              {role}
            </h1>

            <p className="text-slate-400">
              AI Mock Interview
            </p>

          </div>

        </div>

        {/* Right */}

        <div className="text-right">

          <p className="text-sm text-slate-400">
            Time Elapsed
          </p>

          <p className="text-3xl font-bold text-white">
            {time}
          </p>

        </div>

      </div>

      <div className="mt-6">

        <div className="mb-2 flex items-center justify-between">

          <span className="text-sm text-slate-400">
            Question {currentQuestion} of {totalQuestions}
          </span>

          <span className="text-sm text-indigo-300">
            {Math.round(progress)}%
          </span>

        </div>

        <Progress
          value={progress}
          className="h-2"
        />

      </div>

    </header>
  );
}