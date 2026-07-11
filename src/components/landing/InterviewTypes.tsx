import {
  BrainCircuit,
  Briefcase,
  Code2,
  MessageSquareText,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const interviews = [
  {
    title: "Technical",
    description: "Deep-dive into system design, debugging, and architecture conversations.",
    icon: BrainCircuit,
  },
  {
    title: "HR",
    description: "Practice clarity, professionalism, and polished responses for people-focused rounds.",
    icon: Briefcase,
  },
  {
    title: "Behavioral",
    description: "Refine STAR stories, leadership examples, and impactful self-presentation.",
    icon: MessageSquareText,
  },
  {
    title: "Coding",
    description: "Warm up for whiteboard-style coding interviews with guided problem solving.",
    icon: Code2,
  },
  {
    title: "System Design",
    description: "Train for scalable architecture discussions and high-level tradeoff conversations.",
    icon: Workflow,
  },
];

export default function InterviewTypes() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Interview Types
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Practice the interviews that matter most.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Simulate the conversations you’ll actually face, from engineering rounds to leadership discussions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {interviews.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="group border border-slate-200/80 bg-slate-50/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70">
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-white transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardTitle className="text-xl text-slate-950">{item.title}</CardTitle>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                  <Button variant="outline" className="rounded-full border-slate-300 px-4 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950">
                    Practice now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
