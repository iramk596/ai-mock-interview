"use client";

import { Bot, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AIInterviewerProps {
  status: "speaking" | "listening" | "thinking";
}

export default function AIInterviewer({
  status,
}: AIInterviewerProps) {
  const statusText = {
    speaking: "AI is speaking...",
    listening: "Listening...",
    thinking: "Thinking...",
  };

  return (
    <Card className="border-slate-700 bg-white/5 backdrop-blur-xl">
      <CardContent className="flex flex-col items-center justify-center p-10">

        {/* AI Avatar */}

        <div className="relative">

          <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 shadow-2xl">

            <Bot className="h-16 w-16 text-white" />

          </div>

          {status === "speaking" && (
            <span className="absolute inset-0 animate-ping rounded-full bg-indigo-500/30" />
          )}

        </div>

        {/* Status */}

        <div className="mt-8 text-center">

          <div className="mb-2 flex items-center justify-center gap-2">

            <Volume2 className="h-5 w-5 text-indigo-300" />

            <p className="text-lg font-semibold text-white">
              {statusText[status]}
            </p>

          </div>

          <p className="max-w-sm text-sm text-slate-400">
            Your AI interviewer will ask questions, listen to your
            responses, and evaluate your performance in real time.
          </p>

        </div>

      </CardContent>
    </Card>
  );
}