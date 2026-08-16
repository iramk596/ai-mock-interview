import { CodingProblem } from "../types";

export const FAST_SLOW_PROBLEMS: CodingProblem[] = [
  {
    id: "linked-list-cycle",
    title: "Linked List Cycle",
    difficulty: "Easy",
    description: "Detect if a linked list contains a cycle.",
    exampleInput: "head = [3,2,0,-4]\npos = 1",
    exampleOutput: "true",
    starterCode: {
      typescript: `function hasCycle(head: any): boolean {
  // Write your solution here
  return false;
}`,
      javascript: `function hasCycle(head) {
  // Write your solution here
  return false;
}`,
      python: `def hasCycle(head):
    # Write your solution here
    return False`,
      java: `import java.util.*;

class Solution {
    public boolean hasCycle(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool hasCycle(ListNode* head) {
        // Write your solution here
        return false;
    }
};`,
    },
  },
  {
    id: "start-of-linked-list-cycle",
    title: "Start of Linked List Cycle",
    difficulty: "Medium",
    description: "Find the node where the cycle begins.",
    exampleInput: "head = [3,2,0,-4]\npos = 1",
    exampleOutput: "2",
    starterCode: {
      typescript: `function detectCycle(head: any): any {
  // Write your solution here
  return null;
}`,
      javascript: `function detectCycle(head) {
  // Write your solution here
  return null;
}`,
      python: `def detectCycle(head):
    # Write your solution here
    return None`,
      java: `import java.util.*;

class Solution {
    public ListNode detectCycle(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
      cpp: `class Solution {
public:
    ListNode* detectCycle(ListNode* head) {
        // Write your solution here
        return nullptr;
    }
};`,
    },
  },
  {
    id: "happy-number",
    title: "Happy Number",
    difficulty: "Easy",
    description: "Determine whether a number is a happy number.",
    exampleInput: "n = 19",
    exampleOutput: "true",
    starterCode: {
      typescript: `function isHappy(n: number): boolean {
  // Write your solution here
  return false;
}`,
      javascript: `function isHappy(n) {
  // Write your solution here
  return false;
}`,
      python: `def isHappy(n):
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isHappy(int n) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isHappy(int n) {
        // Write your solution here
        return false;
    }
};`,
    },
  },
  {
    id: "middle-of-linked-list",
    title: "Middle of Linked List",
    difficulty: "Easy",
    description: "Return the middle node of a linked list.",
    exampleInput: "head = [1,2,3,4,5]",
    exampleOutput: "3",
    starterCode: {
      typescript: `function middleNode(head: any): any {
  // Write your solution here
  return null;
}`,
      javascript: `function middleNode(head) {
  // Write your solution here
  return null;
}`,
      python: `def middleNode(head):
    # Write your solution here
    return None`,
      java: `class Solution {
    public ListNode middleNode(ListNode head) {
        // Write your solution here
        return null;
    }
}`,
      cpp: `class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        // Write your solution here
        return nullptr;
    }
};`,
    },
  },
  {
    id: "palindrome-linked-list",
    title: "Palindrome Linked List",
    difficulty: "Easy",
    description: "Check whether a linked list is a palindrome.",
    exampleInput: "head = [1,2,2,1]",
    exampleOutput: "true",
    starterCode: {
      typescript: `function isPalindrome(head: any): boolean {
  // Write your solution here
  return false;
}`,
      javascript: `function isPalindrome(head) {
  // Write your solution here
  return false;
}`,
      python: `def isPalindrome(head):
    # Write your solution here
    return False`,
      java: `class Solution {
    public boolean isPalindrome(ListNode head) {
        // Write your solution here
        return false;
    }
}`,
      cpp: `class Solution {
public:
    bool isPalindrome(ListNode* head) {
        // Write your solution here
        return false;
    }
};`,
    },
  },
];
