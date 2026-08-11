"use client";

import {
  ArrowRight,
  Play,
  Sparkles,
  BrainCircuit,
  Mic,
  ShieldCheck,
} from "lucide-react";

import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { Button } from "../../../components/ui/button";

export default function Hero() {
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const handleStart = () => {
    if (isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(124,58,237,0.16),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(135deg,_#070711_0%,_#0f172a_45%,_#111827_100%)] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-zinc-200 backdrop-blur">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            AI-powered mock interviews that feel real
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
            Practice interviews with an AI coach that thinks like a hiring team.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Simulate product, engineering, and leadership interviews with
            real-time feedback, adaptive follow-ups, and a premium experience
            built for ambitious professionals.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              onClick={handleStart}
              className="h-12 rounded-full bg-white px-6 text-sm font-semibold text-zinc-950 hover:bg-zinc-100"
            >
              Start practicing <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              className="h-12 rounded-full border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20"
            >
              <Play className="mr-2 h-4 w-4" /> Watch demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-zinc-300">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <BrainCircuit className="h-4 w-4 text-cyan-300" />
              Adaptive questioning
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <Mic className="h-4 w-4 text-fuchsia-300" />
              Voice-first sessions
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <ShieldCheck className="h-4 w-4 text-emerald-300" />
              Instant coaching
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-xl">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-fuchsia-500/20 to-transparent blur-3xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-zinc-950/80 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-zinc-400">
                    Live interview simulation
                  </p>

                  <p className="text-xl font-semibold text-white">
                    Senior Product Designer
                  </p>
                </div>

                <div className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300">
                  94% match
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-zinc-400">Interviewer</p>

                  <p className="mt-2 text-base leading-7 text-zinc-100">
                    “Walk me through how you would redesign onboarding to
                    improve retention in a B2B SaaS product.”
                  </p>
                </div>

                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
                  <p className="text-sm text-cyan-200">AI coach insight</p>

                  <p className="mt-2 text-base leading-7 text-cyan-50">
                    Strong structure. You can sharpen your answer by adding a
                    measurable success metric and a clearer tradeoff discussion.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-zinc-400">Response quality</p>

                  <p className="mt-1 text-2xl font-semibold text-white">
                    8.7/10
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-zinc-400">Confidence boost</p>

                  <p className="mt-1 text-2xl font-semibold text-white">
                    +31%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

