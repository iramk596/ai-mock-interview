"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function InterviewPage() {
  const router = useRouter();

  const { config, setConfig } = useInterview();

  const [form, setForm] = useState(config);

  function update<K extends keyof typeof form>(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleContinue() {
    setConfig(form);

    router.push("/interview/ready");
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-12 px-6">

      <div className="mx-auto max-w-3xl">

        <Card className="border-slate-700 bg-slate-900/80">

          <CardContent className="space-y-8 p-8">

            <div>

              <h1 className="text-4xl font-bold text-white">
                Configure Interview
              </h1>

              <p className="mt-2 text-slate-400">
                Customize your AI interview.
              </p>

            </div>

            {/* Role */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Role
              </label>

              <input
                value={form.role}
                onChange={(e) =>
                  update("role", e.target.value)
                }
                placeholder="DevOps Engineer"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
              />

            </div>

            {/* Skills */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Skills (comma separated)
              </label>

              <input
                value={form.skills}
                onChange={(e) =>
                  update("skills", e.target.value)
                }
                placeholder="Docker,Kubernetes,AWS"
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none"
              />

            </div>

            {/* Difficulty */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Difficulty
              </label>

              <select
                value={form.difficulty}
                onChange={(e) =>
                  update(
                    "difficulty",
                    e.target.value as typeof form.difficulty
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

            </div>

            {/* Interview Type */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Interview Type
              </label>

              <select
                value={form.type}
                onChange={(e) =>
                  update(
                    "type",
                    e.target.value as typeof form.type
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>Technical</option>
                <option>Behavioral</option>
                <option>Mixed</option>
                <option>HR</option>
              </select>

            </div>

            {/* Experience */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Experience
              </label>

              <select
                value={form.experience}
                onChange={(e) =>
                  update(
                    "experience",
                    e.target.value as typeof form.experience
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>Fresher</option>
                <option>0-2 Years</option>
                <option>2-5 Years</option>
                <option>5+ Years</option>
              </select>

            </div>

            {/* Questions */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Number of Questions
              </label>

              <input
                type="number"
                min={1}
                max={20}
                value={form.questions}
                onChange={(e) =>
                  update(
                    "questions",
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

            </div>

            {/* Duration */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Estimated Duration (minutes)
              </label>

              <input
                type="number"
                value={form.estimatedTime}
                onChange={(e) =>
                  update(
                    "estimatedTime",
                    Number(e.target.value)
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              />

            </div>

            <Button
              onClick={handleContinue}
              className="h-12 w-full bg-indigo-600 hover:bg-indigo-700"
            >
              Continue
            </Button>

          </CardContent>

        </Card>

      </div>

    </main>
  );
}
