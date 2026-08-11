"use client";

import { useState } from "react";

import MonacoCodeEditor from "@/components/coding/MonacoCodeEditor";
import ProblemPanel from "@/components/coding/ProblemPanel";
import { languageTemplates } from "@/lib/coding/templates";
import { Button } from "@/components/ui/button";

export default function CodingPage() {
  const [language, setLanguage] = useState("javascript");

  const [code, setCode] = useState(
    languageTemplates["javascript"]
  );

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    setCode(languageTemplates[newLanguage]);
  };

  const handleReset = () => {
    setCode(languageTemplates[language]);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Coding Interview Practice</h1>
            <p className="mt-2 text-slate-400">
              Solve DSA problems in a real coding interview environment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-indigo-500"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>

            <Button variant="outline" onClick={handleReset}>
              Reset
            </Button>

            <Button onClick={() => console.log(code)}>
              Run / Submit
            </Button>
          </div>
        </div>

        {/* Split Screen Layout */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Side - Problem */}
          <div className="h-[75vh]">
            <ProblemPanel />
          </div>

          {/* Right Side - Editor */}
          <div className="h-[75vh]">
            <MonacoCodeEditor
              language={language}
              value={code}
              onChange={setCode}
            />
          </div>
        </div>
      </div>
    </main>
  );
}