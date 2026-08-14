export type Difficulty = "Easy" | "Medium" | "Hard";

export type Question = {
  id: string;
  title: string;
  difficulty: Difficulty;
};

export type Pattern = {
  slug: string;
  questions: Question[];
};

export const DSA_PATTERNS: Pattern[] = [
  {
    slug: "Two Pointers",
    questions: [
      {
        id: "two-sum",
        title: "Two Sum",
        difficulty: "Easy",
      },
      {
        id: "pair-with-target-sum",
        title: "Pair with Target Sum",
        difficulty: "Easy",
      },
      {
        id: "remove-duplicates",
        title: "Remove Duplicates",
        difficulty: "Easy",
      },
      {
        id: "rearrange-0-and-1",
        title: "Rearrange 0 and 1",
        difficulty: "Medium",
      },
      {
        id: "container-with-most-water",
        title: "Container With Most Water",
        difficulty: "Medium",
      },
    ],
  },

  {
    slug: "Fast & Slow Pointers",
    questions: [
      {
        id: "linked-list-cycle",
        title: "Linked List Cycle",
        difficulty: "Easy",
      },
      {
        id: "start-of-linked-list-cycle",
        title: "Start of Linked List Cycle",
        difficulty: "Medium",
      },
      {
        id: "happy-number",
        title: "Happy Number",
        difficulty: "Easy",
      },
      {
        id: "middle-of-linked-list",
        title: "Middle of Linked List",
        difficulty: "Easy",
      },
      {
        id: "palindrome-linked-list",
        title: "Palindrome Linked List",
        difficulty: "Medium",
      },
    ],
  },

  {
    slug: "Sliding Window",
    questions: [
      {
        id: "maximum-subarray-size-k",
        title: "Maximum Sum Subarray of Size K",
        difficulty: "Medium",
      },
      {
        id: "smallest-subarray-given-sum",
        title: "Smallest Subarray with a Given Sum",
        difficulty: "Medium",
      },
      {
        id: "longest-substring-k-distinct",
        title: "Longest Substring with K Distinct Characters",
        difficulty: "Medium",
      },
      {
        id: "fruits-into-baskets",
        title: "Fruits Into Baskets",
        difficulty: "Medium",
      },
      {
        id: "permutation-in-string",
        title: "Permutation in String",
        difficulty: "Hard",
      },
    ],
  },

  {
    slug: "Kadane Pattern",
    questions: [
      {
        id: "maximum-subarray",
        title: "Maximum Subarray",
        difficulty: "Easy",
      },
      {
        id: "maximum-product-subarray",
        title: "Maximum Product Subarray",
        difficulty: "Medium",
      },
      {
        id: "circular-subarray-sum",
        title: "Circular Subarray Sum",
        difficulty: "Medium",
      },
      {
        id: "best-time-buy-sell-stock",
        title: "Best Time to Buy and Sell Stock",
        difficulty: "Easy",
      },
      {
        id: "maximum-sum-rectangle",
        title: "Maximum Sum Rectangle",
        difficulty: "Hard",
      },
    ],
  },

  {
    slug: "Stack",
    questions: [
      {
        id: "valid-parentheses",
        title: "Valid Parentheses",
        difficulty: "Easy",
      },
      {
        id: "min-stack",
        title: "Min Stack",
        difficulty: "Medium",
      },
      {
        id: "next-greater-element",
        title: "Next Greater Element",
        difficulty: "Medium",
      },
      {
        id: "daily-temperatures",
        title: "Daily Temperatures",
        difficulty: "Medium",
      },
      {
        id: "largest-rectangle-histogram",
        title: "Largest Rectangle in Histogram",
        difficulty: "Hard",
      },
    ],
  },

  {
    slug: "Hash Maps",
    questions: [
      {
        id: "contains-duplicate",
        title: "Contains Duplicate",
        difficulty: "Easy",
      },
      {
        id: "valid-anagram",
        title: "Valid Anagram",
        difficulty: "Easy",
      },
      {
        id: "group-anagrams",
        title: "Group Anagrams",
        difficulty: "Medium",
      },
      {
        id: "top-k-frequent-elements",
        title: "Top K Frequent Elements",
        difficulty: "Medium",
      },
      {
        id: "subarray-sum-equals-k",
        title: "Subarray Sum Equals K",
        difficulty: "Medium",
      },
    ],
  },

  {
    slug: "Binary Search",
    questions: [
      {
        id: "binary-search",
        title: "Binary Search",
        difficulty: "Easy",
      },
      {
        id: "first-and-last-position",
        title: "Find First and Last Position",
        difficulty: "Medium",
      },
      {
        id: "search-in-rotated-array",
        title: "Search in Rotated Sorted Array",
        difficulty: "Medium",
      },
      {
        id: "find-minimum-rotated-array",
        title: "Find Minimum in Rotated Sorted Array",
        difficulty: "Medium",
      },
      {
        id: "median-of-two-sorted-arrays",
        title: "Median of Two Sorted Arrays",
        difficulty: "Hard",
      },
    ],
  },

  {
    slug: "Heap Pattern",
    questions: [
      {
        id: "kth-largest-element",
        title: "Kth Largest Element",
        difficulty: "Medium",
      },
      {
        id: "top-k-frequent-words",
        title: "Top K Frequent Words",
        difficulty: "Medium",
      },
      {
        id: "merge-k-sorted-lists",
        title: "Merge K Sorted Lists",
        difficulty: "Hard",
      },
      {
        id: "find-median-from-data-stream",
        title: "Find Median from Data Stream",
        difficulty: "Hard",
      },
      {
        id: "task-scheduler",
        title: "Task Scheduler",
        difficulty: "Medium",
      },
    ],
  },

  {
    slug: "Tree Pattern",
    questions: [
      {
        id: "maximum-depth-binary-tree",
        title: "Maximum Depth of Binary Tree",
        difficulty: "Easy",
      },
      {
        id: "invert-binary-tree",
        title: "Invert Binary Tree",
        difficulty: "Easy",
      },
      {
        id: "same-tree",
        title: "Same Tree",
        difficulty: "Easy",
      },
      {
        id: "validate-binary-search-tree",
        title: "Validate Binary Search Tree",
        difficulty: "Medium",
      },
      {
        id: "binary-tree-level-order-traversal",
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
      },
    ],
  },

  {
    slug: "Graphs",
    questions: [
      {
        id: "number-of-islands",
        title: "Number of Islands",
        difficulty: "Medium",
      },
      {
        id: "clone-graph",
        title: "Clone Graph",
        difficulty: "Medium",
      },
      {
        id: "course-schedule",
        title: "Course Schedule",
        difficulty: "Medium",
      },
      {
        id: "rotting-oranges",
        title: "Rotting Oranges",
        difficulty: "Medium",
      },
      {
        id: "word-ladder",
        title: "Word Ladder",
        difficulty: "Hard",
      },
    ],
  },

  {
    slug: "Dynamic Programming",
    questions: [
      {
        id: "climbing-stairs",
        title: "Climbing Stairs",
        difficulty: "Easy",
      },
      {
        id: "house-robber",
        title: "House Robber",
        difficulty: "Medium",
      },
      {
        id: "coin-change",
        title: "Coin Change",
        difficulty: "Medium",
      },
      {
        id: "longest-increasing-subsequence",
        title: "Longest Increasing Subsequence",
        difficulty: "Medium",
      },
      {
        id: "edit-distance",
        title: "Edit Distance",
        difficulty: "Hard",
      },
    ],
  },
];