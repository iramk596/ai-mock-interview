export interface InterviewEvaluation {
  score: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
  idealAnswer: string;
}

export interface InterviewAnswer {
  questionId: number;
  question: string;
  answer: string;
  evaluation: InterviewEvaluation;
}

export interface InterviewReport {
  overallScore: number;
  totalQuestions: number;
  averageScore: number;
  strengths: string[];
  weaknesses: string[];
  recommendation: string;
}