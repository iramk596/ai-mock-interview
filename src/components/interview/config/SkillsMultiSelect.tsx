"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SKILLS } from "@/constants/skills";

interface Props {
  value: string[];
  onChange: (skills: string[]) => void;
}

export default function SkillsMultiSelect({
  value,
  onChange,
}: Props) {
  function toggle(skill: string) {
    if (value.includes(skill)) {
      onChange(value.filter((s) => s !== skill));
    } else {
      onChange([...value, skill]);
    }
  }

  return (
    <div className="space-y-3">

      <label className="text-sm font-medium text-white">
        Skills
      </label>

      <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-700 bg-slate-800 p-4">

        {SKILLS.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-3"
          >
            <Checkbox
              checked={value.includes(skill)}
              onCheckedChange={() => toggle(skill)}
            />

            <span className="text-white">
              {skill}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}