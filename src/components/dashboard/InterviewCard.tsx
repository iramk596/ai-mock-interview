import { ArrowRight } from "lucide-react";

interface Props {
  role: string;
  type: string;
  difficulty: string;
  status: string;
  score?: string;
  questions: string;
  date: string;
}

export default function InterviewCard({
  role,
  type,
  difficulty,
  status,
  score,
  questions,
  date,
}: Props) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-5 transition hover:shadow-lg">
      <div>
        <h3 className="text-lg font-semibold">{role}</h3>

        <p className="mt-1 text-sm text-slate-500">
          {type} • {difficulty}
        </p>

        <p className="mt-3 text-sm text-slate-500">
          {questions}
        </p>

        <p className="text-sm text-slate-400">{date}</p>
      </div>

      <div className="text-right">

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "Completed"
              ? "bg-green-100 text-green-700"
              : status === "In Progress"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {status}
        </span>

        {score && (
          <p className="mt-3 text-3xl font-bold text-indigo-600">
            {score}
          </p>
        )}

        <button className="mt-4 flex items-center gap-2 text-indigo-600 hover:gap-3 transition-all">
          View
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}