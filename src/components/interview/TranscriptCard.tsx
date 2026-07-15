"use client";

import { Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TranscriptCardProps {
  transcript: string;
}

export default function TranscriptCard({
  transcript,
}: TranscriptCardProps) {
  return (
    <Card className="border-slate-700 bg-white/5 backdrop-blur-xl">
      <CardContent className="p-8">

        <div className="mb-5 flex items-center gap-3">

          <div className="rounded-full bg-green-500/20 p-3">

            <Mic className="h-6 w-6 text-green-400" />

          </div>

          <div>

            <p className="text-sm text-slate-400">
              Live Transcript
            </p>

            <h2 className="text-xl font-bold text-white">
              Your Answer
            </h2>

          </div>

        </div>

        <div className="min-h-[140px] rounded-2xl border border-slate-700 bg-slate-900/40 p-6">

          <p className="leading-7 text-slate-300">
            {transcript || "Waiting for microphone..."}
          </p>

        </div>

      </CardContent>
    </Card>
  );
}