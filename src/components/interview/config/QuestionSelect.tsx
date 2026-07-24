"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { QUESTION_COUNTS } from "@/constants/questionCounts";

interface Props {
  value: number;
  onChange: (value: number) => void;
}

export default function QuestionSelect({
  value,
  onChange,
}: Props) {
  return (
    <div className="space-y-2">

      <label className="text-sm font-medium text-white">
        Number of Questions
      </label>

      <Select
        value={String(value)}
        onValueChange={(v) =>
          onChange(Number(v))
        }
      >
        <SelectTrigger className="bg-slate-800 border-slate-700 text-white">
          <SelectValue />
        </SelectTrigger>

        <SelectContent className="bg-slate-900 border-slate-700 text-white">

          {QUESTION_COUNTS.map((count) => (
            <SelectItem
              key={count}
              value={String(count)}
              className="text-white"
            >
              {count}
            </SelectItem>
          ))}

        </SelectContent>

      </Select>

    </div>
  );
}