import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InterviewDetailPage({ params }: PageProps) {
  const { id } = await params;

  const interview = await prisma.interview.findUnique({
    where: { id },
    include: {
      questions: true,
    },
  });

  if (!interview) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold">Interview Report</h1>

          <p className="mt-3 text-slate-400">
            {interview.role} • {interview.skills}
          </p>
        </div>

        {/* Overall Score */}
        <div className="rounded-xl border border-slate-700 bg-white/10 p-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Overall Score</h2>

            <p className="mt-2 text-slate-400">
              {interview.totalQuestions} questions
            </p>
          </div>

          <div className="text-right">
            <div className="text-6xl font-bold text-green-400">
              {interview.score.toFixed(1)}/10
            </div>

            <p className="text-slate-300 mt-2">Average Score</p>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {interview.questions.map((question, index) => {
            const strengths = (question.strengths as string[]) || [];

            const improvements = (question.improvements as string[]) || [];

            return (
              <div
                key={question.id}
                className="rounded-xl border border-slate-700 bg-white/10 p-8 space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">
                    Question {index + 1}
                  </h2>

                  <span className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium">
                    {question.score}/10
                  </span>
                </div>

                <div>
                  <p className="font-semibold text-indigo-300">Question</p>

                  <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                    {question.question}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-indigo-300">Your Answer</p>

                  <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                    {question.answer || "No Answer"}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-green-400">AI Feedback</p>

                  <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                    {question.feedback}
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-cyan-400">Strengths</p>

                  {strengths.length > 0 ? (
                    <ul className="mt-2 list-disc pl-6 text-slate-200 space-y-1">
                      {strengths.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-slate-400">No strengths recorded.</p>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-yellow-400">Improvements</p>

                  {improvements.length > 0 ? (
                    <ul className="mt-2 list-disc pl-6 text-slate-200 space-y-1">
                      {improvements.map((item: string, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-slate-400">No improvements recorded.</p>
                  )}
                </div>

                <div>
                  <p className="font-semibold text-purple-400">Ideal Answer</p>

                  <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                    {question.idealAnswer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-4">
          <Link href="/dashboard/interviews">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700">
              ← Back to Interview History
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
