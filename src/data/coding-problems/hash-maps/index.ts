import { CodingProblem } from "../types";

export const HASH_MAP_PROBLEMS: CodingProblem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    description: "Return indices of two numbers that add up to the target.",
    exampleInput: `nums = [2,7,11,15]
target = 9`,
    exampleOutput: "[0,1]",
    starterCode: {
      typescript: `function twoSum(nums: number[], target: number): number[] {
  // Write your solution here
  return [];
}`,
      javascript: `function twoSum(nums, target) {
  // Write your solution here
  return [];
}`,
      python: `def twoSum(nums, target):
    # Write your solution here
    return []`,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your solution here
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    description: "Check whether two strings are anagrams.",
    exampleInput: 's = "anagram"\nt = "nagaram"',
    exampleOutput: "true",
    starterCode: {
      typescript: `function isAnagram(s: string, t: string): boolean {
  // Write your solution here
  return false;
}`,
      javascript: `function isAnagram(s, t) {
  // Write your solution here
  return false;
}`,
      python: `def isAnagram(s, t):
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isAnagram(String s, String t) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <string>
using namespace std;

class Solution {
public:
    bool isAnagram(string s, string t) {
        // Write your solution here
        return false;
    }
};`,
    },
  },
  {
    id: "group-anagrams",
    title: "Group Anagrams",
    difficulty: "Medium",
    description: "Group strings that are anagrams of each other.",
    exampleInput: 'strs = ["eat","tea","tan","ate","nat","bat"]',
    exampleOutput: '[["bat"],["nat","tan"],["ate","eat","tea"]]',
    starterCode: {
      typescript: `function groupAnagrams(strs: string[]): string[][] {
  // Write your solution here
  return [];
}`,
      javascript: `function groupAnagrams(strs) {
  // Write your solution here
  return [];
}`,
      python: `def groupAnagrams(strs):
    # Write your solution here
    return []`,
      java: `import java.util.*;

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        // Write your solution here
        return new ArrayList<>();
    }
}`,
      cpp: `#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    description: "Check whether the array contains duplicate values.",
    exampleInput: "nums = [1,2,3,1]",
    exampleOutput: "true",
    starterCode: {
      typescript: `function containsDuplicate(nums: number[]): boolean {
  // Write your solution here
  return false;
}`,
      javascript: `function containsDuplicate(nums) {
  // Write your solution here
  return false;
}`,
      python: `def containsDuplicate(nums):
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your solution here
        return false;
    }
};`,
    },
  },
  {
    id: "top-k-frequent-elements",
    title: "Top K Frequent Elements",
    difficulty: "Medium",
    description: "Return the k most frequent elements in the array.",
    exampleInput: "nums = [1,1,1,2,2,3]\nk = 2",
    exampleOutput: "[1,2]",
    starterCode: {
      typescript: `function topKFrequent(nums: number[], k: number): number[] {
  // Write your solution here
  return [];
}`,
      javascript: `function topKFrequent(nums, k) {
  // Write your solution here
  return [];
}`,
      python: `def topKFrequent(nums, k):
    # Write your solution here
    return []`,
      java: `import java.util.*;

class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        // Write your solution here
        return new int[0];
    }
}`,
      cpp: `#include <vector>
using namespace std;

class Solution {
public:
    vector<int> topKFrequent(vector<int>& nums, int k) {
        // Write your solution here
        return {};
    }
};`,
    },
  },
];
