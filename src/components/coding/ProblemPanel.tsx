export default function ProblemPanel() {
  return (
    <div className="h-full overflow-y-auto rounded-xl border border-slate-700 bg-slate-900/60 p-6 text-white">
      <h1 className="text-2xl font-bold text-indigo-300">
        Two Sum
      </h1>

      <p className="mt-4 text-slate-300 leading-7">
        Given an array of integers <code>nums</code> and an integer
        <code>target</code>, return indices of the two numbers such that they
        add up to <code>target</code>.
      </p>

      <div className="mt-6 space-y-4">
        <div className="rounded-lg bg-slate-800 p-4">
          <p className="font-semibold text-slate-200">Example 1</p>
          <pre className="mt-2 whitespace-pre-wrap text-sm text-slate-300">
{`Input: nums = [2,7,11,15], target = 9
Output: [0,1]`}
          </pre>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="font-semibold text-slate-200">Constraints</p>
          <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
            <li>2 ≤ nums.length ≤ 10⁴</li>
            <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
            <li>Exactly one valid answer exists.</li>
          </ul>
        </div>

        <div className="rounded-lg bg-slate-800 p-4">
          <p className="font-semibold text-slate-200">Hint</p>
          <p className="mt-2 text-sm text-slate-300">
            Try solving it in O(n) time using a hash map instead of checking
            every pair.
          </p>
        </div>
      </div>
    </div>
  );
}