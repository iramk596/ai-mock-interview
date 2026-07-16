"use client";

import { Bot, Brain, Mic, Volume2 } from "lucide-react";

interface AIInterviewerProps {
  status:
    | "idle"
    | "thinking"
    | "speaking"
    | "listening"
    | "processing";
}

export default function AIInterviewer({
  status,
}: AIInterviewerProps) {
  const getStatus = () => {
    switch (status) {
      case "speaking":
        return {
          title: "AI is speaking...",
          description:
            "Listen carefully to the interview question before answering.",
          icon: <Volume2 className="h-12 w-12" />,
          pulse: "animate-pulse",
        };

      case "listening":
        return {
          title: "Listening...",
          description:
            "Your response is being recorded and transcribed.",
          icon: <Mic className="h-12 w-12" />,
          pulse: "animate-ping",
        };

      case "processing":
        return {
          title: "Analyzing your answer...",
          description:
            "AI is evaluating your response and preparing feedback.",
          icon: <Brain className="h-12 w-12" />,
          pulse: "animate-pulse",
        };

      case "thinking":
        return {
          title: "Preparing next question...",
          description:
            "Please wait while the interviewer gets ready.",
          icon: <Bot className="h-12 w-12" />,
          pulse: "animate-bounce",
        };

      default:
        return {
          title: "AI Interviewer",
          description:
            "Waiting to begin the interview.",
          icon: <Bot className="h-12 w-12" />,
          pulse: "",
        };
    }
  };

  const current = getStatus();

  return (
    <div className="flex h-full min-h-[380px] items-center justify-center rounded-2xl border border-slate-700 bg-white/5 p-8 backdrop-blur-xl">

      <div className="text-center">

        <div
          className={`mx-auto mb-8 flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-white shadow-2xl ${current.pulse}`}
        >
          {current.icon}
        </div>

        <h2 className="text-3xl font-bold text-white">
          {current.title}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-slate-300">
          {current.description}
        </p>

        {status === "speaking" && (
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-3 w-3 animate-bounce rounded-full bg-blue-400" />
            <span
              className="h-3 w-3 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="h-3 w-3 animate-bounce rounded-full bg-blue-400"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}

        {status === "listening" && (
          <div className="mt-8">
            <p className="font-semibold text-green-400">
              🎤 Microphone Active
            </p>
          </div>
        )}

        {status === "processing" && (
          <div className="mt-8">
            <p className="font-semibold text-indigo-400">
              🤖 AI is generating your evaluation...
            </p>
          </div>
        )}

      </div>

    </div>
  );
}