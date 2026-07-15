"use client";

import { MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface QuestionCardProps {
  question: string;
  questionNumber: number;
  totalQuestions: number;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
}: QuestionCardProps) {
  return (
    <Card className="border-slate-700 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-8">

        <div className="mb-6 flex items-center gap-3">

          <div className="rounded-full bg-indigo-500/20 p-3">

            <MessageSquare className="h-6 w-6 text-indigo-400" />

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Question {questionNumber} of {totalQuestions}
            </p>

            <h2 className="text-xl font-bold text-white">
              AI Interview Question
            </h2>

          </div>

        </div>

        <div className="rounded-2xl border border-slate-700 bg-slate-900/40 p-6">

          <p className="text-lg leading-8 text-slate-100">
            {question}
          </p>

        </div>

      </CardContent>
    </Card>
  );
}