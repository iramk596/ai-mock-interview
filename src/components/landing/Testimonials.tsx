import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The coaching felt sharper than most mock interviews I’ve paid for. It helped me land my product role confidently.",
    name: "Ava Chen",
    role: "Product Designer",
  },
  {
    quote:
      "I used it before a senior engineering round and the realism was remarkable. The feedback was practical and immediate.",
    name: "Marcus Lee",
    role: "Software Engineer",
  },
  {
    quote:
      "It made my prep feel structured and calm. I went into the interview with much better clarity and energy.",
    name: "Priya Nair",
    role: "Operations Lead",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trusted by professionals preparing for their next move.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="space-y-5 p-6">
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm leading-8 text-slate-300">“{item.quote}”</p>
                <div>
                  <p className="font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
