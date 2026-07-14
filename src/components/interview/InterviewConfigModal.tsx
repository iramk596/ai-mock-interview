"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  BrainCircuit,
  BriefcaseBusiness,
  ChevronRight,
  Clock3,
  Sparkles,
  Target,
  Wand2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useInterview } from "./InterviewContext"

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "Java Developer",
  "Python Developer",
  "DevOps Engineer",
  "Cloud Engineer",
  "Data Analyst",
]

const interviewTypes = ["Technical", "Behavioral", "Mixed", "HR"] as const
const difficultyLevels = ["Easy", "Medium", "Hard"] as const

export default function InterviewConfigModal() {
  const router = useRouter()
  const { config, setConfig } = useInterview()

  // Calculate estimated time based on questions count
  const estimatedTime = useMemo(() => config.questions * 2, [config.questions])

  // Handle role change
  const handleRoleChange = (role: string) => {
    setConfig({ ...config, role })
  }

  // Handle skills change
  const handleSkillsChange = (skills: string) => {
    setConfig({ ...config, skills })
  }

  // Handle difficulty change
  const handleDifficultyChange = (difficulty: string) => {
    setConfig({ ...config, difficulty: difficulty as any })
  }

  // Handle interview type change
  const handleTypeChange = (type: string) => {
    setConfig({ ...config, type: type as any })
  }

  // Handle question count change
  const handleQuestionCountChange = (questions: number) => {
    setConfig({ ...config, questions })
  }

  // Handle Generate Questions button
  const handleGenerateQuestions = () => {
    // Validate role is not empty
    if (!config.role || config.role.trim() === "") {
      alert("Please select a job role")
      return
    }

    // Validate skills are not empty
    if (!config.skills || config.skills.trim() === "") {
      alert("Please enter your skills")
      return
    }

    // Update estimated time in context
    setConfig({ ...config, estimatedTime })

    // Navigate to /interview/ready
    router.push("/interview/ready")
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Button className="w-full bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20 hover:from-sky-400 hover:via-blue-500 hover:to-violet-500">
          <Sparkles className="mr-2 h-4 w-4" />
          Create Interview
        </Button>
      </DialogTrigger>

      <DialogContent className="border border-white/60 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(240,245,255,0.86))] p-0 shadow-[0_30px_90px_rgba(37,99,235,0.25)]">
        <div className="relative overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(96,165,250,0.35),_transparent_65%),radial-gradient(circle_at_top_right,_rgba(167,139,250,0.3),_transparent_60%)]" />

          <div className="relative p-6 sm:p-8">
            <DialogHeader className="mb-6">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 text-white shadow-lg shadow-blue-500/20">
                <BrainCircuit className="h-6 w-6" />
              </div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <DialogTitle className="text-2xl font-semibold tracking-tight text-slate-900">
                    Interview Configuration
                  </DialogTitle>
                  <DialogDescription className="mt-2 max-w-xl text-sm text-slate-600">
                    Tailor your mock interview session with the right role, focus areas, and challenge level.
                  </DialogDescription>
                </div>
                <DialogClose />
              </div>
            </DialogHeader>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="space-y-5">
                <label className="block">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <BriefcaseBusiness className="h-4 w-4 text-sky-600" />
                    Job Role
                  </div>
                  <select
                    value={config.role}
                    onChange={(event) => handleRoleChange(event.target.value)}
                    className="h-11 w-full rounded-2xl border border-slate-200/80 bg-white/80 px-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
                  >
                    <option value="">Select a role...</option>
                    {jobRoles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Target className="h-4 w-4 text-violet-600" />
                    Skills
                  </div>
                  <textarea
                    value={config.skills}
                    onChange={(event) => handleSkillsChange(event.target.value)}
                    placeholder="React, Next.js, JavaScript..."
                    rows={4}
                    className="w-full rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-3 text-sm text-slate-700 shadow-sm outline-none transition focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                  />
                </label>
              </div>

              <div className="space-y-5">
                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Wand2 className="h-4 w-4 text-indigo-600" />
                    Difficulty
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {difficultyLevels.map((level) => {
                      const isActive = config.difficulty === level
                      return (
                        <button
                          key={level}
                          type="button"
                          onClick={() => handleDifficultyChange(level)}
                          className={`rounded-2xl border px-3 py-2 text-sm font-medium transition ${
                            isActive
                              ? "border-transparent bg-gradient-to-r from-sky-500 to-violet-600 text-white shadow-md shadow-blue-500/20"
                              : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {level}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div>
                  <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Sparkles className="h-4 w-4 text-amber-500" />
                    Interview Type
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {interviewTypes.map((type) => {
                      const isActive = config.type === type
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleTypeChange(type)}
                          className={`rounded-2xl border px-3 py-2 text-sm font-medium transition ${
                            isActive
                              ? "border-transparent bg-slate-900 text-white shadow-md"
                              : "border-slate-200 bg-white/80 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          {type}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-white/70 bg-white/70 p-4 shadow-inner shadow-slate-200/60">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-sm font-medium text-slate-700">
                    <Clock3 className="h-4 w-4 text-sky-600" />
                    Number of Questions
                  </div>
                  <p className="text-sm text-slate-500">Choose the interview depth</p>
                </div>
                <div className="rounded-full bg-slate-900 px-3 py-1 text-sm font-semibold text-white">
                  {config.questions}
                </div>
              </div>

              <input
                type="range"
                min="5"
                max="20"
                value={config.questions}
                onChange={(event) => handleQuestionCountChange(Number(event.target.value))}
                className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-sky-500"
              />

              <div className="mt-4 flex items-center justify-between rounded-2xl bg-slate-950/95 px-4 py-3 text-sm text-slate-200">
                <span className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-sky-400" />
                  Estimated Time
                </span>
                <span className="font-semibold text-white">
                  {estimatedTime} minutes
                </span>
              </div>
            </div>

            <DialogFooter className="mt-6">
              <DialogClose className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50">
                Cancel
              </DialogClose>
              <Button
                onClick={handleGenerateQuestions}
                className="inline-flex items-center rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:from-sky-400 hover:via-blue-500 hover:to-violet-500"
              >
                Generate Questions
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
