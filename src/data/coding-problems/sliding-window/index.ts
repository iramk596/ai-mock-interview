import { CodingProblem } from "../types";

export const slidingWindowProblems: CodingProblem[] = [
  {
    id: "maximum-subarray-size-k",
    title: "Maximum Sum Subarray of Size K",
    difficulty: "Medium",
    description:
      "Given an array and an integer k, find the maximum sum of any contiguous subarray of size k.",
    starterCode: `function maxSumSubarray(nums: number[], k: number): number {
  // Write your solution here
  return 0;
}

console.log(maxSumSubarray([2,1,5,1,3,2], 3));`,
  },

  {
    id: "smallest-subarray-given-sum",
    title: "Smallest Subarray with a Given Sum",
    difficulty: "Medium",
    description:
      "Find the length of the smallest contiguous subarray whose sum is greater than or equal to the target.",
    starterCode: `function smallestSubarray(target: number, nums: number[]): number {
  // Write your solution here
  return 0;
}

console.log(smallestSubarray(7, [2,1,5,2,3,2]));`,
  },
];