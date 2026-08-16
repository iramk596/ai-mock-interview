import { CodingProblem } from "../types";

export const slidingWindowProblems: CodingProblem[] = [
  {
    id: "maximum-subarray-size-k",
    title: "Maximum Sum Subarray of Size K",
    difficulty: "Medium",
    description: "Given an array and an integer k, find the maximum sum of any contiguous subarray of size k.",
    exampleInput: "nums = [2,1,5,1,3,2]\nk = 3",
    exampleOutput: "9",
    starterCode: {
      typescript: `function maxSumSubarray(nums: number[], k: number): number {
  // Write your solution here
  return 0;
}`,
      javascript: `function maxSumSubarray(nums, k) {
  // Write your solution here
  return 0;
}`,
      python: `def maxSumSubarray(nums, k):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int maxSumSubarray(int[] nums, int k) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxSumSubarray(vector<int>& nums, int k) {
        // Write your solution here
        return 0;
    }
};`,
    },
  },
  {
    id: "smallest-subarray-given-sum",
    title: "Smallest Subarray with a Given Sum",
    difficulty: "Medium",
    description: "Find the length of the smallest contiguous subarray whose sum is greater than or equal to the target.",
    exampleInput: "target = 7\nnums = [2,1,5,2,3,2]",
    exampleOutput: "2",
    starterCode: {
      typescript: `function smallestSubarray(target: number, nums: number[]): number {
  // Write your solution here
  return 0;
}`,
      javascript: `function smallestSubarray(target, nums) {
  // Write your solution here
  return 0;
}`,
      python: `def smallestSubarray(target, nums):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int smallestSubarray(int target, int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int smallestSubarray(int target, vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
    },
  },
];
