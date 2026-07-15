"use client";

import { useState } from "react";
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
  Loader2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { useInterview } from "@/components/interview/InterviewContext";

export default function InterviewReadyPage() {
  const router = useRouter();

  const {
    config,
    setQuestions,
  } = useInterview();

  const [loading, setLoading] = useState(false);

  const skills = config.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  async function handleBeginInterview() {
    try {
      setLoading(true);

      const response = await fetch(
        "/api/interview/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            role: config.role,
            skills: config.skills,
            difficulty: config.difficulty,
            type: config.type,
            experience: config.experience,
            questions: config.questions,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to generate interview."
        );
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(
          result.message ??
            "Question generation failed."
        );
      }

      setQuestions(result.data);

      router.push("/interview/session");
    } catch (error) {
      console.error(error);

      alert(
        "Unable to generate interview questions. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6 py-12">
      <div className="mx-auto max-w-5xl">

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

          <Card className="border-slate-700 bg-white/10 backdrop-blur-xl">

            <CardContent className="space-y-6 p-8">

              <h2 className="text-2xl font-bold text-white">
                Interview Summary
              </h2>

              <div className="space-y-5">

                <div className="flex items-center gap-3">
                  <Briefcase className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Role
                    </p>

                    <p className="font-semibold text-white">
                      {config.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Code2 className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Interview Type
                    </p>

                    <p className="font-semibold text-white">
                      {config.type}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Difficulty
                    </p>

                    <p className="font-semibold text-white">
                      {config.difficulty}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400" />

                  <div>
                    <p className="text-sm text-slate-400">
                      Experience
                    </p>

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
                  AI will generate personalized interview
                  questions based on your selected role,
                  skills, difficulty, and experience.
                </p>
              </div>

              <Button
                onClick={handleBeginInterview}
                disabled={loading}
                className="h-12 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-base font-semibold hover:opacity-90"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Generating Interview...
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Begin Interview
                  </>
                )}
              </Button>

            </CardContent>

          </Card>

        </div>

      </div>
    </main>
  );
}