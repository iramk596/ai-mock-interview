import { Bot, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const advantages = [
  {
    title: "Always Available",
    description: "Practice anytime without waiting for a recruiter, coach, or booking calendar.",
    icon: Clock3,
  },
  {
    title: "Personalized Coaching",
    description: "Responses adapt to your experience level, role, and communication style.",
    icon: Sparkles,
  },
  {
    title: "Safe Practice Space",
    description: "Make mistakes freely, iterate quickly, and build confidence without pressure.",
    icon: ShieldCheck,
  },
  {
    title: "Instant Insights",
    description: "Get actionable suggestions as soon as the conversation ends to refine your approach.",
    icon: Bot,
  },
];

export default function AIAdvantages() {
  return (
    <section className="bg-white px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
            Why AI Interviews Work
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Better prep, faster growth, less friction.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.title} className="border border-slate-200/80 bg-slate-50/80 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70">
                <CardHeader className="pb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/15 to-violet-500/15 text-slate-950">
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <CardTitle className="text-lg text-slate-950">{item.title}</CardTitle>
                  <p className="text-sm leading-7 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
