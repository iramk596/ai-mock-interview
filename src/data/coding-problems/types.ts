export type SupportedLanguage =
  | "javascript"
  | "typescript"
  | "python"
  | "java"
  | "cpp";

export type StarterCode = Record<SupportedLanguage, string>;

export interface CodingProblem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  exampleInput: string;
  exampleOutput: string;
  starterCode: StarterCode;
}
