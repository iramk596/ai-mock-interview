"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function InterviewReportPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  const {
    config,
    questions,
    answers,
    evaluations,
  } = useInterview();

  const overallScore = useMemo(() => {
    if (evaluations.length === 0) return "0.0";

    const total = evaluations.reduce(
      (sum, item) => sum + item.score,
      0
    );

    return (
      total / evaluations.length
    ).toFixed(1);
  }, [evaluations]);

  // SAVE INTERVIEW TO DATABASE
  const handleSaveInterview = async () => {
    try {
      setSaving(true);

      const response = await fetch("/api/interview/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          config,
          questions: questions.map((q) => q.question),
          answers,
          evaluations,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("Save failed:", error);
        alert("Failed to save interview. Please try again.");
        return;
      }

      const savedInterview = await response.json();

      console.log("Interview saved successfully:", savedInterview.id);

      // Redirect to saved interviews page
      router.push("/dashboard/interviews");
    } catch (error) {
      console.error("Error saving interview:", error);
      alert("Something went wrong while saving the interview.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Interview Report
          </h1>

          <p className="mt-3 text-slate-300">
            AI generated performance analysis
          </p>
        </div>

        {/* Overall Score */}
        <Card className="border-slate-700 bg-white/10">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Overall Score
                </h2>

                <p className="mt-2 text-slate-400">
                  {config.role}
                </p>
              </div>

              <div className="text-right">
                <h2 className="text-6xl font-bold text-green-400">
                  {overallScore}/10
                </h2>

                <p className="text-slate-300">
                  Average Score
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Questions */}
        <div className="space-y-6">
          {questions.map((question, index) => {
            const evaluation = evaluations[index];

            return (
              <Card
                key={question.id}
                className="border-slate-700 bg-white/10"
              >
                <CardContent className="space-y-6 p-8">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">
                      Question {index + 1}
                    </h2>

                    <span className="rounded-full bg-indigo-600 px-4 py-2 text-white">
                      {evaluation?.score ?? 0}/10
                    </span>
                  </div>

                  <div>
                    <p className="font-semibold text-indigo-300">
                      Question
                    </p>

                    <p className="mt-2 text-slate-200">
                      {question.question}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-indigo-300">
                      Your Answer
                    </p>

                    <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                      {answers[index] || "No Answer"}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-green-400">
                      AI Feedback
                    </p>

                    <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                      {evaluation?.feedback}
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-cyan-400">
                      Strengths
                    </p>

                    <ul className="mt-2 list-disc pl-6 text-slate-200">
                      {evaluation?.strengths?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-yellow-400">
                      Improvements
                    </p>

                    <ul className="mt-2 list-disc pl-6 text-slate-200">
                      {evaluation?.improvements?.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="font-semibold text-purple-400">
                      Ideal Answer
                    </p>

                    <p className="mt-2 text-slate-200 whitespace-pre-wrap">
                      {evaluation?.idealAnswer}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4">
          <Button
            variant="outline"
            size="lg"
            onClick={() => router.push("/dashboard")}
          >
            Back to Dashboard
          </Button>

          <Button
            size="lg"
            onClick={handleSaveInterview}
            disabled={saving}
          >
            {saving ? "Saving..." : "Save Interview"}
          </Button>
        </div>
      </div>
    </main>
  );
}