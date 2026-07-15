"use client";

import { ArrowRight, SkipForward } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InterviewControlsProps {
  onSkip: () => void;
  onNext: () => void;
}

export default function InterviewControls({
  onSkip,
  onNext,
}: InterviewControlsProps) {
  return (
    <div className="flex justify-end gap-4">

      <Button
        variant="outline"
        onClick={onSkip}
        className="border-slate-600 bg-transparent text-white hover:bg-slate-800"
      >
        <SkipForward className="mr-2 h-4 w-4" />
        Skip Question
      </Button>

      <Button
        onClick={onNext}
        className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:opacity-90"
      >
        Next Question
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

    </div>
  );
}