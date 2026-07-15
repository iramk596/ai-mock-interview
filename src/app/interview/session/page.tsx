"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { useInterview } from "@/components/interview/InterviewContext";
import { useInterviewSession } from "@/hooks/useInterviewSession";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";

import InterviewHeader from "@/components/interview/InterviewHeader";
import CameraPreview from "@/components/interview/CameraPreview";
import AIInterviewer from "@/components/interview/AIInterviewer";
import QuestionCard from "@/components/interview/QuestionCard";
import TranscriptCard from "@/components/interview/TranscriptCard";
import InterviewControls from "@/components/interview/InterviewControls";

import { InterviewQuestion } from "@/types/interview";

export default function InterviewSessionPage() {
  const router = useRouter();
  const { config } = useInterview();

  /**
   * Temporary questions.
   * Later these will come from Groq.
   */
  const questions: InterviewQuestion[] = [
    {
      id: 1,
      question: "Tell me about yourself.",
    },
    {
      id: 2,
      question: "Why do you want to join our company?",
    },
    {
      id: 3,
      question: "Explain one project you are most proud of.",
    },
  ];

  const session = useInterviewSession(questions);
  const speech = useSpeechRecognition();

  const formattedTime = `${String(
    Math.floor(session.elapsedTime / 60)
  ).padStart(2, "0")}:${String(
    session.elapsedTime % 60
  ).padStart(2, "0")}`;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        {/* Header */}

        <InterviewHeader
          role={config.role}
          currentQuestion={session.currentQuestion + 1}
          totalQuestions={questions.length}
          time={formattedTime}
          onExit={() => router.push("/dashboard")}
        />

        {/* Camera + AI */}

        <div className="grid gap-8 lg:grid-cols-2">
          <CameraPreview />

          <AIInterviewer
            status="idle"
          />
        </div>

        {/* Current Question */}

        <QuestionCard
          question={
            session.current?.question ??
            "Loading question..."
          }
          questionNumber={session.currentQuestion + 1}
          totalQuestions={questions.length}
        />

        {/* Live Transcript */}

        <TranscriptCard
          transcript={speech.transcript}
        />

        {/* Interview Controls */}

        <InterviewControls
          onSkip={session.skipQuestion}
          onNext={session.nextQuestion}
        />

        {/* Speech Recognition Controls */}

        <div className="flex flex-wrap items-center justify-center gap-4">

          <Button
            onClick={speech.startListening}
            className="bg-green-600 hover:bg-green-700"
          >
            🎤 Start Listening
          </Button>

          <Button
            onClick={speech.stopListening}
            variant="destructive"
          >
            Stop Listening
          </Button>

          <span className="rounded-full bg-slate-800 px-4 py-2 text-sm text-slate-300">
            {speech.listening
              ? "🎙️ Listening..."
              : "Microphone Idle"}
          </span>

        </div>

      </div>
    </main>
  );
}