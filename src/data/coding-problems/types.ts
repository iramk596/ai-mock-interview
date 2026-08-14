export interface CodingProblem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  exampleInput?: string;
  exampleOutput?: string;
  starterCode: string;
}