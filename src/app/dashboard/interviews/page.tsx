"use client";

import { useEffect, useState } from "react";
import { Trash2, Eye } from "lucide-react";
import { useRouter } from "next/navigation";

interface InterviewHistoryItem {
  id: string;
  role: string;
  skills: string;
  score: number;
  totalQuestions: number;
  createdAt: string;
}

export default function InterviewHistoryPage() {
  const [interviews, setInterviews] = useState<InterviewHistoryItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetchHistory();
  }, []);

  async function fetchHistory() {
    const res = await fetch("/api/interview/history");
    const data = await res.json();

    setInterviews(data);
  }

  async function handleDelete(id: string) {
    const confirmed = window.confirm(
      "Delete this interview permanently?"
    );

    if (!confirmed) return;

    const res = await fetch(`/api/interview/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setInterviews((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  }

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-bold">
          Interview History
        </h1>

        <div className="space-y-4">
          {interviews.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <div>
                <h2 className="text-xl font-semibold">
                  {item.role}
                </h2>

                <p className="text-slate-400">
                  {item.skills}
                </p>

                <p className="text-sm text-slate-500">
                  {new Date(item.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-2xl font-bold text-emerald-400">
                    {item.score.toFixed(1)}/10
                  </p>

                  <p className="text-sm text-slate-400">
                    {item.totalQuestions} questions
                  </p>
                </div>

                <button
                  onClick={() =>
                    router.push(`/dashboard/interviews/${item.id}`)
                  }
                  className="rounded-lg bg-indigo-600 p-3 hover:bg-indigo-700"
                >
                  <Eye className="h-5 w-5" />
                </button>

                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-lg bg-red-600 p-3 hover:bg-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
