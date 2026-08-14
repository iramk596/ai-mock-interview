import Link from "next/link";

function Node({ label }: { label: string }) {
  return (
    <div className="min-w-[180px] rounded-2xl border border-violet-500/30 bg-slate-900 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-violet-500/10 transition-all duration-200 hover:-translate-y-1 hover:border-violet-400 hover:shadow-violet-500/20">
      {label}
    </div>
  );
}

function Connector({
  width = 120,
  height = 40,
}: {
  width?: number;
  height?: number;
}) {
  return (
    <svg width={width} height={height} className="overflow-visible">
      <path
        d={`M ${width / 2} 0 V ${height / 2} H ${width} `}
        stroke="#64748b"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-slate-950 p-6 text-white">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold">DSA Learning Roadmap</h1>
              <p className="mt-2 text-slate-400">
                Follow this roadmap to master the most important DSA patterns
                in the right order for coding interviews.
              </p>
            </div>

            <Link
              href="/dashboard/dsa-sheet"
              className="rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-violet-500 hover:text-white"
            >
              ← Back to DSA Sheet
            </Link>
          </div>
        </div>

        {/* Roadmap */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 md:p-12">
          <div className="flex flex-col items-center gap-8">
            {/* Root */}
            <Node label="Arrays & Hashing" />

            {/* Level 1 */}
            <div className="flex flex-col items-center">
              <svg width="320" height="60">
                <path
                  d="M160 0 V20 M40 20 H280 M40 20 V60 M280 20 V60"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="flex flex-wrap justify-center gap-8">
                <Node label="Two Pointers" />
                <Node label="Stack" />
              </div>
            </div>

            {/* Level 2 */}
            <div className="flex flex-col items-center">
              <svg width="560" height="70">
                <path
                  d="M280 0 V20 M80 20 H480 M80 20 V70 M280 20 V70 M480 20 V70"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="grid gap-6 md:grid-cols-3">
                <Node label="Binary Search" />
                <Node label="Sliding Window" />
                <Node label="Linked List" />
              </div>
            </div>

            {/* Trees */}
            <div className="flex flex-col items-center gap-4">
              <svg width="2" height="36">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="36"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <Node label="Trees" />
            </div>

            {/* Level 3 */}
            <div className="flex flex-col items-center">
              <svg width="760" height="70">
                <path
                  d="M380 0 V20 M120 20 H640 M120 20 V70 M380 20 V70 M640 20 V70"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="grid gap-6 md:grid-cols-3">
                <Node label="Tries" />
                <Node label="Heap / Priority Queue" />
                <Node label="Backtracking" />
              </div>
            </div>

            {/* Level 4 */}
            <div className="flex flex-col items-center">
              <svg width="420" height="70">
                <path
                  d="M210 0 V20 M70 20 H350 M70 20 V70 M350 20 V70"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="grid gap-6 md:grid-cols-2">
                <Node label="Graphs" />
                <Node label="1-D DP" />
              </div>
            </div>

            {/* Level 5 */}
            <div className="flex flex-col items-center">
              <svg width="620" height="70">
                <path
                  d="M310 0 V20 M110 20 H510 M110 20 V70 M310 20 V70 M510 20 V70"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>

              <div className="grid gap-6 md:grid-cols-3">
                <Node label="Advanced Graphs" />
                <Node label="2-D DP" />
                <Node label="Bit Manipulation" />
              </div>
            </div>

            {/* Final */}
            <div className="flex flex-col items-center gap-4">
              <svg width="2" height="36">
                <line
                  x1="1"
                  y1="0"
                  x2="1"
                  y2="36"
                  stroke="#94a3b8"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <Node label="Math & Geometry" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}