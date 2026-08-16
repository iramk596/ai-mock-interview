import { CodingProblem } from "../types";

export const TWO_POINTER_PROBLEMS: CodingProblem[] = [
  {
    id: "pair-with-target-sum",
    title: "Pair with Target Sum",
    difficulty: "Easy",
    description: "Find two numbers in a sorted array that add up to the target value and return their indices.",
    exampleInput: "arr = [1, 2, 3, 4, 6], target = 6",
    exampleOutput: "[1, 3]",
    starterCode: {
      typescript: `function pairWithTargetSum(arr: number[], target: number): number[] {
  // Write your solution here
  return [];
}`,
      javascript: `function pairWithTargetSum(arr, target) {
  // Write your solution here
  return [];
}`,
      python: `def pairWithTargetSum(arr, target):
    # Write your solution here
    return []`,
      java: `import java.util.*;

class Solution {
    public int[] pairWithTargetSum(int[] arr, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> pairWithTargetSum(vector<int>& arr, int target) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates",
    difficulty: "Easy",
    description: "Remove duplicates from a sorted array in-place and return the new length.",
    exampleInput: "nums = [1,1,2,2,3]",
    exampleOutput: "3",
    starterCode: {
      typescript: `function removeDuplicates(nums: number[]): number {
  // Write your solution here
  return 0;
}`,
      javascript: `function removeDuplicates(nums) {
  // Write your solution here
  return 0;
}`,
      python: `def removeDuplicates(nums):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int removeDuplicates(int[] nums) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Write your solution here
        return 0;
    }
};`,
    },
  },
  {
    id: "squares-of-sorted-array",
    title: "Squares of Sorted Array",
    difficulty: "Easy",
    description: "Return the squares of a sorted array in sorted order.",
    exampleInput: "nums = [-4,-1,0,3,10]",
    exampleOutput: "[0,1,9,16,100]",
    starterCode: {
      typescript: `function sortedSquares(nums: number[]): number[] {
  // Write your solution here
  return [];
}`,
      javascript: `function sortedSquares(nums) {
  // Write your solution here
  return [];
}`,
      python: `def sortedSquares(nums):
    # Write your solution here
    return []`,
      java: `class Solution {
    public int[] sortedSquares(int[] nums) {
        // Write your solution here
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sortedSquares(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
  {
    id: "triplet-sum-to-zero",
    title: "Triplet Sum to Zero",
    difficulty: "Medium",
    description: "Find all unique triplets in the array whose sum is equal to zero.",
    exampleInput: "nums = [-1,0,1,2,-1,-4]",
    exampleOutput: "[[-1,-1,2],[-1,0,1]]",
    starterCode: {
      typescript: `function threeSum(nums: number[]): number[][] {
  // Write your solution here
  return [];
}`,
      javascript: `function threeSum(nums) {
  // Write your solution here
  return [];
}`,
      python: `def threeSum(nums):
    # Write your solution here
    return []`,
      java: `import java.util.*;

class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    description: "Find the maximum area of water that can be contained between two lines.",
    exampleInput: "height = [1,8,6,2,5,4,8,3,7]",
    exampleOutput: "49",
    starterCode: {
      typescript: `function maxArea(height: number[]): number {
  // Write your solution here
  return 0;
}`,
      javascript: `function maxArea(height) {
  // Write your solution here
  return 0;
}`,
      python: `def maxArea(height):
    # Write your solution here
    return 0`,
      java: `class Solution {
    public int maxArea(int[] height) {
        // Write your solution here
        return 0;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    int maxArea(vector<int>& height) {
        // Write your solution here
        return 0;
    }
};`,
    },
  },
];
