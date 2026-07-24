"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useInterview } from "@/components/interview/InterviewContext";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import SkillsMultiSelect from "@/components/interview/config/SkillsMultiSelect";
import QuestionSelect from "@/components/interview/config/QuestionSelect";

import { ROLES } from "@/constants/roles";

export default function InterviewPage() {
  const router = useRouter();

  const {
    config,
    setConfig,
    setQuestions,
  } = useInterview();

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] =
    useState(config);

  function update<
    K extends keyof typeof form
  >(
    key: K,
    value: (typeof form)[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  async function handleContinue() {
    try {
      if (!form.role) {
        alert("Please select a role.");
        return;
      }

      if (!form.skills) {
        alert("Please select skills.");
        return;
      }

      setLoading(true);

      const updatedConfig = {
        ...form,
        estimatedTime:
          form.questions * 2,
      };

      setConfig(updatedConfig);

      const response =
        await fetch(
          "/api/interview/generate",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify(
              updatedConfig
            ),
          }
        );

      const data =
        await response.json();

      if (!data.success) {
        alert(data.message);

        setLoading(false);

        return;
      }

      setQuestions(data.data);

      router.push(
        "/interview/ready"
      );
    } catch (error) {
      console.error(error);

      alert(
        "Failed to generate interview."
      );
    } finally {
      setLoading(false);
    }
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

              <select
                value={form.role}
                onChange={(e) =>
                  update(
                    "role",
                    e.target.value
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option value="">
                  Select Role
                </option>

                {ROLES.map((role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                ))}
              </select>

            </div>

            {/* Skills */}

            <SkillsMultiSelect
              value={
                form.skills
                  ? form.skills.split(",")
                  : []
              }
              onChange={(
                skills
              ) =>
                update(
                  "skills",
                  skills.join(",")
                )
              }
            />

            {/* Difficulty */}

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Difficulty
              </label>

              <select
                value={
                  form.difficulty
                }
                onChange={(e) =>
                  update(
                    "difficulty",
                    e.target
                      .value as typeof form.difficulty
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>
                  Easy
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Hard
                </option>
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
                    e.target
                      .value as typeof form.type
                  )
                }
                className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
              >
                <option>
                  Technical
                </option>

                <option>
                  Behavioral
                </option>

                <option>
                  Mixed
                </option>

                <option>
                  HR
                </option>
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

<QuestionSelect
  value={form.questions}
  onChange={(value) =>
    update("questions", value)
  }
/>

{/* Estimated Time */}

<div>

  <label className="mb-2 block text-sm text-slate-300">
    Estimated Duration (minutes)
  </label>

  <input
  readOnly
  value={`${form.questions * 2} Minutes`}
  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 text-white"
/>

</div>

<Button
  disabled={loading}
  onClick={handleContinue}
  className="h-12 w-full bg-indigo-600 hover:bg-indigo-700"
>
  {loading
    ? "Generating Interview..."
    : "Generate Interview"}
</Button>

          </CardContent>

        </Card>

      </div>

    </main>
  );
}