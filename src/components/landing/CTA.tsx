import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_35%),linear-gradient(135deg,_#0f172a_0%,_#111827_100%)] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-[2rem] border border-white/10 bg-white/10 px-8 py-14 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:px-10 lg:px-16">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <Sparkles className="h-6 w-6 text-cyan-300" />
        </div>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
          Prepare like a pro and walk into every interview with calm confidence.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Join thousands of candidates using AI-driven mock interviews to sharpen their stories, improve their delivery, and land more opportunities.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button className="rounded-full bg-white px-6 text-sm font-semibold text-slate-950 hover:bg-slate-100">
            Start for free <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full border-white/20 bg-white/10 px-6 text-sm font-semibold text-white hover:bg-white/20">
            View demo
          </Button>
        </div>
      </div>
    </section>
  );
}
