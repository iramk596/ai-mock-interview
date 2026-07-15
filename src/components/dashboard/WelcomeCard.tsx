"use client";

import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import {
  Sparkles,
  ArrowRight,
  FileText,
  Award,
  Code2,
  Flame,
  Hand,
} from "lucide-react";

export default function WelcomeCard() {
  const { user } = useUser();

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  const stats = [
    {
      title: "Interviews",
      value: "18",
      subtitle: "↑ 12% this week",
      icon: FileText,
      color: "text-cyan-300",
    },
    {
      title: "Average Score",
      value: "87%",
      subtitle: "Excellent",
      icon: Award,
      color: "text-yellow-300",
    },
    {
      title: "Coding Sessions",
      value: "12",
      subtitle: "3 completed today",
      icon: Code2,
      color: "text-green-300",
    },
    {
      title: "Current Streak",
      value: "7 Days",
      subtitle: "Keep Going!",
      icon: Flame,
      color: "text-orange-400",
    },
  ];

  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-3xl
      min-h-[430px]
      bg-gradient-to-br
      from-[#141B3A]
      via-[#182B57]
      to-[#3B3A8F]
      p-10
      md:p-12
      shadow-2xl
      shadow-slate-900/30
    "
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="relative grid gap-10 lg:grid-cols-[2fr_1fr] items-center">
        {/* LEFT SIDE */}
        <div className="max-w-2xl pr-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-blue-100 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            AI Powered Dashboard
          </div>

          <h1 className="mt-8 text-4xl md:text-[48px] font-bold leading-tight tracking-tight text-white">
            {greeting},
            <br />
            {user?.firstName ?? "Developer"}
            <Hand className="ml-2 inline h-9 w-9 text-yellow-300" />
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-8 text-slate-200">
            Continue improving your interview skills with AI-powered mock
            interviews, coding challenges, resume analysis, personalized
            feedback, and real interview simulations.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/interview"
              className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-8
              py-4
              font-semibold
              text-slate-900
              transition-all
              duration-300
              hover:-translate-y-1
              hover:scale-[1.02]
              hover:shadow-xl
            "
            >
              Start Interview
              <ArrowRight className="h-5 w-5" />
            </Link>

            <Link
              href="/coding"
              className="
              rounded-xl
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-white/20
              hover:border-white/40
              hover:shadow-lg
            "
            >
              Coding Practice
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:bg-white/10
                hover:border-indigo-300/40
                hover:shadow-2xl
              "
              >
                <Icon className={`mb-4 h-7 w-7 ${stat.color}`} />

                <p className="text-sm text-blue-100">{stat.title}</p>

                <h3 className="mt-2 text-4xl font-bold text-white">
                  {stat.value}
                </h3>

                <p className={`mt-3 text-sm font-semibold ${stat.color}`}>
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}