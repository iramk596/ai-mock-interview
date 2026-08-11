"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";

const BOILERPLATES = {
  javascript: `function solve(input) {
  // Write your solution here
  return null;
}

console.log(solve());`,

  typescript: `function solve(input: any): any {
  // Write your solution here
  return null;
}

console.log(solve(null));`,

  python: `def solve(input):
    # Write your solution here
    return None

print(solve(None))`,

  java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(solve());
    }

    static Object solve() {
        // Write your solution here
        return null;
    }
}` ,

  cpp: `#include <iostream>
using namespace std;

int solve() {
    // Write your solution here
    return 0;
}

int main() {
    cout << solve();
    return 0;
}` ,
};

type Language = keyof typeof BOILERPLATES;

export default function CodingPage() {
  const [language, setLanguage] = useState<Language>("javascript");
  const [code, setCode] = useState(BOILERPLATES.javascript);

  const [customInput, setCustomInput] = useState("");
  const [output, setOutput] = useState(
    "Run your code to see output..."
  );

  const handleLanguageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const lang = e.target.value as Language;
    setLanguage(lang);
    setCode(BOILERPLATES[lang]);
  };

  const handleRun = () => {
    setOutput(`Language: ${language}

  Custom Input:
  ${customInput || "(empty)"}

  Code execution will be integrated soon 🚀`);
  };

  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Header */}
        <div className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Coding Interview Practice
            </h1>
            <p className="mt-2 text-slate-400">
              Solve DSA problems in a real coding interview environment.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <select
              value={language}
              onChange={handleLanguageChange}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-white outline-none focus:border-violet-500"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="cpp">C++</option>
            </select>

            <button
              onClick={handleRun}
              className="rounded-xl bg-violet-600 px-5 py-2 font-semibold text-white transition hover:bg-violet-500"
            >
              Run / Submit
            </button>
          </div>
        </div>

        {/* Split Screen */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Problem Panel */}
          <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-3xl font-bold text-violet-300">Two Sum</h2>

            <p className="mt-5 leading-8 text-slate-200">
              Given an array of integers <code className="text-violet-300">nums</code>
              and an integer <code className="text-violet-300">target</code>,
              return indices of the two numbers such that they add up to
              <code className="text-violet-300"> target</code>.
            </p>

            <div className="mt-6 rounded-2xl bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">Example 1</h3>
              <pre className="mt-3 overflow-x-auto whitespace-pre-wrap text-sm leading-7 text-slate-200">{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]`}</pre>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">Constraints</h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-200">
                <li>2 ≤ nums.length ≤ 10⁴</li>
                <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                <li>Exactly one valid answer exists.</li>
              </ul>
            </div>

            <div className="mt-6 rounded-2xl bg-slate-800/70 p-5">
              <h3 className="text-lg font-semibold text-white">Hint</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Try solving it in <code className="text-violet-300">O(n)</code>
                time using a hash map instead of checking every pair.
              </p>
            </div>
          </section>

          {/* Editor Panel */}
          <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60">
            <div className="border-b border-slate-800 px-5 py-3 text-sm text-slate-400">
              {language.toUpperCase()} Editor
            </div>

            <Editor
              height="75vh"
              language={language === "cpp" ? "cpp" : language}
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                fontSize: 14,
                minimap: { enabled: false },
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: "on",
                fontFamily: "JetBrains Mono, monospace",
                padding: { top: 16 },
              }}
                        />

            {/* Test Case Panel */}
            <div className="border-t border-slate-800 bg-slate-900/70 p-5 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Custom Test Case
              </h3>

              <div className="grid gap-4 md:grid-cols-2">
                {/* Input */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-300">
                    Input
                  </p>

                  <textarea
                    value={customInput}
                    onChange={(e) => setCustomInput(e.target.value)}
                    placeholder={`nums = [2,7,11,15]
target = 9`}
                    className="h-32 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-white outline-none focus:border-violet-500"
                  />
                </div>

                {/* Output */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-slate-300">
                    Output
                  </p>

                  <div className="h-32 overflow-auto rounded-xl border border-slate-700 bg-slate-950 p-3 text-sm text-slate-200 whitespace-pre-wrap">
                    {output}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}