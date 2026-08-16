import { TWO_POINTER_PROBLEMS } from "./two-pointers";
import { FAST_SLOW_PROBLEMS } from "./fast-slow-pointers";
import { HASH_MAP_PROBLEMS } from "./hash-maps";
import { slidingWindowProblems } from "./sliding-window";

export const CODING_PROBLEMS = [
  ...TWO_POINTER_PROBLEMS,
  ...FAST_SLOW_PROBLEMS,
  ...slidingWindowProblems,
  ...HASH_MAP_PROBLEMS,
];
