"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import { useInterviewSession } from "@/hooks/useInterviewSession";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";

import InterviewHeader from "@/components/interview/InterviewHeader";
import CameraPreview from "@/components/interview/CameraPreview";
import AIInterviewer from "@/components/interview/AIInterviewer";
import QuestionCard from "@/components/interview/QuestionCard";
import TranscriptCard from "@/components/interview/TranscriptCard";
import InterviewControls from "@/components/interview/InterviewControls";

export default function InterviewSessionPage() {
  const router = useRouter();

  const { config, questions } = useInterview();

  const session = useInterviewSession(questions);

  const speech = useSpeechRecognition();

  const tts = useSpeechSynthesis();

  useEffect(() => {
    if (!session.current) return;

    speech.stopListening();
    speech.resetTranscript();

    tts.speak(session.current.question, () => {
      console.log("🤖 AI finished speaking");

      setTimeout(() => {
        console.log("🎤 Starting microphone...");
        speech.startListening();
      }, 400);
    });

    return () => {
      speech.stopListening();
      tts.stop();
    };
  }, [session.current]);

  const formattedTime = `${String(
    Math.floor(session.elapsedTime / 60)
  ).padStart(2, "0")}:${String(
    session.elapsedTime % 60
  ).padStart(2, "0")}`;

  if (questions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold text-white">
            No Interview Found
          </h1>

          <p className="mb-6 text-slate-400">
            Please generate an interview first.
          </p>

          <button
            onClick={() => router.push("/dashboard")}
            className="rounded-lg bg-indigo-600 px-6 py-3 text-white hover:bg-indigo-700"
          >
            Back to Dashboard
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">
      <div className="mx-auto max-w-7xl space-y-8">

        <InterviewHeader
          role={config.role}
          currentQuestion={session.currentQuestion + 1}
          totalQuestions={questions.length}
          time={formattedTime}
          onExit={() => router.push("/dashboard")}
        />

        <div className="grid gap-8 lg:grid-cols-2">

          <CameraPreview />

          <AIInterviewer
            status={
              tts.speaking
                ? "speaking"
                : speech.listening
                ? "listening"
                : "thinking"
            }
          />

        </div>

        <QuestionCard
          question={
            session.current?.question ??
            "Loading question..."
          }
          questionNumber={session.currentQuestion + 1}
          totalQuestions={questions.length}
        />

        <TranscriptCard
          transcript={speech.transcript}
        />

        <InterviewControls
          onSkip={() => {
            speech.stopListening();
            session.skipQuestion();
          }}
          onNext={() => {
            speech.stopListening();
            session.nextQuestion();
          }}
        />

      </div>
    </main>
  );
}