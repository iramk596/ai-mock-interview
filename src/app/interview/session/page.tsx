"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import { useInterviewSession } from "@/hooks/useInterviewSession";
import { useSpeechRecognition } from "@/hooks/useSpeechRecognition";
import { useSpeechSynthesis } from "@/hooks/useSpeechSynthesis";
import { useAnswerEvaluation } from "@/hooks/useAnswerEvaluation";

import InterviewHeader from "@/components/interview/InterviewHeader";
import CameraPreview from "@/components/interview/CameraPreview";
import AIInterviewer from "@/components/interview/AIInterviewer";
import QuestionCard from "@/components/interview/QuestionCard";
import TranscriptCard from "@/components/interview/TranscriptCard";
import InterviewControls from "@/components/interview/InterviewControls";

export default function InterviewSessionPage() {
  const router = useRouter();

  const {
    config,
    questions,
    answers,
    evaluations,
    setAnswers,
    setEvaluations,
  } = useInterview();

  const session = useInterviewSession(questions);

  const speech = useSpeechRecognition();

  const tts = useSpeechSynthesis();

  const evaluation = useAnswerEvaluation();

  useEffect(() => {
    if (!session.current) return;

    speech.stopListening();
    speech.resetTranscript();

    tts.speak(session.current.question, () => {
      setTimeout(() => {
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

  async function handleNext() {
    speech.stopListening();

    if (!session.current) return;

    try {
      const result = await evaluation.evaluate(
        session.current.question,
        speech.transcript
      );

      const finalAnswers = [...answers, speech.transcript];
      const finalEvaluations = [...evaluations, result];

      setAnswers(finalAnswers);
      setEvaluations(finalEvaluations);

      console.log("AI Evaluation:", result);

      speech.resetTranscript();

      if (session.currentQuestion === questions.length - 1) {
        await fetch("/api/interview/save", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            config,
            questions,
            answers: finalAnswers,
            evaluations: finalEvaluations,
          }),
        });

        router.push("/interview/report");
      } else {
        session.nextQuestion();
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function handleSkip() {
    speech.stopListening();

    const skippedEvaluation = {
      score: 0,
      feedback: "Question skipped.",
      strengths: [],
      improvements: [],
      idealAnswer: "",
    };

    const finalAnswers = [...answers, ""];
    const finalEvaluations = [
      ...evaluations,
      skippedEvaluation,
    ];

    setAnswers(finalAnswers);
    setEvaluations(finalEvaluations);

    speech.resetTranscript();

    if (session.currentQuestion === questions.length - 1) {
      await fetch("/api/interview/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          config,
          questions,
          answers: finalAnswers,
          evaluations: finalEvaluations,
        }),
      });

      router.push("/interview/report");
    } else {
      session.skipQuestion();
    }
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
              evaluation.loading
                ? "processing"
                : tts.speaking
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

        {evaluation.loading && (
          <div className="rounded-xl border border-indigo-500 bg-indigo-500/10 p-4 text-center text-indigo-200">
            AI is evaluating your answer...
          </div>
        )}

        <InterviewControls
          onSkip={handleSkip}
          onNext={handleNext}
        />

      </div>
    </main>
  );
}