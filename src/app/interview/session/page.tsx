"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import InterviewHeader from "@/components/interview/InterviewHeader";
import CameraPreview from "@/components/interview/CameraPreview";
import AIInterviewer from "@/components/interview/AIInterviewer";
import QuestionCard from "@/components/interview/QuestionCard";
import TranscriptCard from "@/components/interview/TranscriptCard";
import InterviewControls from "@/components/interview/InterviewControls";

export default function InterviewSessionPage() {
  const router = useRouter();
  const { config } = useInterview();

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [transcript] = useState("");

  // Temporary timer
  const time = "00:00";

  const handleNext = () => {
    if (currentQuestion < config.questions) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <InterviewHeader
          role={config.role}
          currentQuestion={currentQuestion}
          totalQuestions={config.questions}
          time={time}
          onExit={() => router.push("/dashboard")}
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <CameraPreview />

          <AIInterviewer status="speaking" />

        </div>

        <QuestionCard
          question="Tell me about yourself."
          questionNumber={currentQuestion}
          totalQuestions={config.questions}
        />

        <TranscriptCard transcript={transcript} />

        <InterviewControls
          onSkip={handleSkip}
          onNext={handleNext}
        />

      </div>
    </main>
  );
}