export interface AnswerEvaluation {
  score: number;

  feedback: string;

  strengths: string[];

  improvements: string[];

  idealAnswer: string;
}