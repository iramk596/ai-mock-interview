import { CodingProblem } from "../types";

export const TWO_POINTER_PROBLEMS: CodingProblem[] = [
  {
    id: "pair-with-target-sum",
    title: "Pair with Target Sum",
    difficulty: "Easy",
    description:
      "Find two numbers in a sorted array that add up to the target value and return their indices.",
    exampleInput: "arr = [1, 2, 3, 4, 6], target = 6",
    exampleOutput: "[1, 3]",
    starterCode: `function pairWithTargetSum(arr: number[], target: number): number[] {
  // Write your code here
  return [];
}

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));`,
  },

  {
    id: "remove-duplicates",
    title: "Remove Duplicates",
    difficulty: "Easy",
    description:
      "Remove duplicates from a sorted array in-place and return the new length.",
    exampleInput: "nums = [1,1,2,2,3]",
    exampleOutput: "3",
    starterCode: `function removeDuplicates(nums: number[]): number {
  // Write your code here
  return 0;
}

console.log(removeDuplicates([1,1,2,2,3]));`,
  },

  {
    id: "squares-of-sorted-array",
    title: "Squares of Sorted Array",
    difficulty: "Easy",
    description:
      "Return the squares of a sorted array in sorted order.",
    exampleInput: "nums = [-4,-1,0,3,10]",
    exampleOutput: "[0,1,9,16,100]",
    starterCode: `function sortedSquares(nums: number[]): number[] {
  // Write your code here
  return [];
}

console.log(sortedSquares([-4,-1,0,3,10]));`,
  },

  {
    id: "triplet-sum-to-zero",
    title: "Triplet Sum to Zero",
    difficulty: "Medium",
    description:
      "Find all unique triplets in the array whose sum is equal to zero.",
    exampleInput: "nums = [-1,0,1,2,-1,-4]",
    exampleOutput: "[[-1,-1,2],[-1,0,1]]",
    starterCode: `function threeSum(nums: number[]): number[][] {
  // Write your code here
  return [];
}

console.log(threeSum([-1,0,1,2,-1,-4]));`,
  },

  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    description:
      "Find the maximum area of water that can be contained between two lines.",
    exampleInput: "height = [1,8,6,2,5,4,8,3,7]",
    exampleOutput: "49",
    starterCode: `function maxArea(height: number[]): number {
  // Write your code here
  return 0;
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]));`,
  },
];