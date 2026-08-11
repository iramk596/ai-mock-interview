export const languageTemplates: Record<string, string> = {
  javascript: `function solve(input) {
  // Write your solution here
  return null;
}

console.log(solve());`,

  typescript: `function solve(input: unknown): unknown {
  // Write your solution here
  return null;
}

console.log(solve(null));`,

  python: `def solve(input_data):
    # Write your solution here
    return None

print(solve(None))`,

  java: `import java.util.*;

public class Main {
    public static void main(String[] args) {
        // Write your solution here
    }
}`,

  cpp: `#include <bits/stdc++.h>
using namespace std;

int main() {
    // Write your solution here
    return 0;
}`,
};