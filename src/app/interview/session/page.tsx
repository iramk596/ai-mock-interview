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

import { InterviewQuestion } from "@/types/interview";

export default function InterviewSessionPage() {
  const router = useRouter();

  const { config } = useInterview();

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

  const tts = useSpeechSynthesis();

  useEffect(() => {
    if (!session.current) return;

    speech.stopListening();

    tts.speak(
      session.current.question,
      () => {
        speech.startListening();
      }
    );
  }, [session.currentQuestion]);

  const formattedTime = `${String(
    Math.floor(session.elapsedTime / 60)
  ).padStart(2, "0")}:${String(
    session.elapsedTime % 60
  ).padStart(2, "0")}`;

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
            "Loading..."
          }
          questionNumber={
            session.currentQuestion + 1
          }
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