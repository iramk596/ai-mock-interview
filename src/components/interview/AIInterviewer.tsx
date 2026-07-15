"use client";

import { Bot, Volume2, Mic, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface AIInterviewerProps {
  status: "idle" | "speaking" | "listening" | "thinking";
}

const statusConfig = {
  idle: {
    text: "Ready to begin",
    icon: Bot,
    color: "text-slate-300",
  },

  speaking: {
    text: "AI is speaking...",
    icon: Volume2,
    color: "text-blue-400",
  },

  listening: {
    text: "Listening...",
    icon: Mic,
    color: "text-green-400",
  },

  thinking: {
    text: "Analyzing your answer...",
    icon: Brain,
    color: "text-yellow-400",
  },
};

export default function AIInterviewer({
  status,
}: AIInterviewerProps) {
  const current = statusConfig[status];
  const StatusIcon = current.icon;

  return (
    <Card className="border-slate-700 bg-white/5 backdrop-blur-xl">
      <CardContent className="flex flex-col items-center justify-center p-10">

        {/* Avatar */}

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
            <StatusIcon className={`h-5 w-5 ${current.color}`} />

            <p className="text-lg font-semibold text-white">
              {current.text}
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