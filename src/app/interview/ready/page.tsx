"use client";

import { useRouter } from "next/navigation";
import {
  Briefcase,
  Code2,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Camera,
  Mic,
  Wifi,
  Play,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useInterview } from "@/components/interview/InterviewContext";

export default function InterviewReadyPage() {
  const router = useRouter();

  const { config } = useInterview();

  const skills = config.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        {/* Heading */}

        <div className="mb-10 text-center">

          <Badge className="mb-4 bg-indigo-600 hover:bg-indigo-600">
            AI Mock Interview
          </Badge>

          <h1 className="text-5xl font-bold text-white">
            You're Ready!
          </h1>

          <p className="mt-4 text-lg text-slate-300">
            Review your interview configuration before starting.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT */}

          <Card className="border-slate-700 bg-white/10 backdrop-blur-xl">

            <CardContent className="space-y-6 p-8">

              <h2 className="text-2xl font-bold text-white">
                Interview Summary
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <Briefcase className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">Role</p>
                    <p className="font-semibold text-white">
                      {config.role}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Code2 className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">Interview Type</p>
                    <p className="font-semibold text-white">
                      {config.type}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <ShieldCheck className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">Difficulty</p>
                    <p className="font-semibold text-white">
                      {config.difficulty}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <CheckCircle2 className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">Experience</p>
                    <p className="font-semibold text-white">
                      {config.experience}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <Clock className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Questions & Duration
                    </p>

                    <p className="font-semibold text-white">
                      {config.questions} Questions •{" "}
                      {config.estimatedTime} Minutes
                    </p>

                  </div>

                </div>

              </div>

              <div>

                <p className="mb-3 text-sm text-slate-400">
                  Skills
                </p>

                <div className="flex flex-wrap gap-2">

                  {skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full bg-indigo-600/20 px-4 py-1 text-indigo-200"
                    >
                      {skill}
                    </Badge>
                  ))}

                </div>

              </div>

            </CardContent>

          </Card>

          {/* RIGHT */}

          <Card className="border-slate-700 bg-white/10 backdrop-blur-xl">

            <CardContent className="space-y-8 p-8">

              <h2 className="text-2xl font-bold text-white">
                Before You Begin
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">

                  <Camera className="text-green-400" />

                  <span className="text-slate-200">
                    Camera permission required
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Mic className="text-green-400" />

                  <span className="text-slate-200">
                    Microphone permission required
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <Wifi className="text-green-400" />

                  <span className="text-slate-200">
                    Stable internet connection
                  </span>

                </div>

              </div>

              <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-4">

                <p className="text-sm text-indigo-100">

                  During the interview, answer naturally using your voice.
                  AI will listen, analyze your responses, and generate a
                  detailed evaluation after the interview.

                </p>

              </div>

              <Button
                onClick={() => router.push("/interview/session")}
                className="h-12 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-base font-semibold hover:opacity-90"
              >
                <Play className="mr-2 h-5 w-5" />

                Begin Interview

              </Button>

            </CardContent>

          </Card>

        </div>

      </div>
    </main>
  );
}