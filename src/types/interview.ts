export type Difficulty = "Easy" | "Medium" | "Hard";

export type InterviewType =
  | "Technical"
  | "Behavioral"
  | "Mixed"
  | "HR";

export interface InterviewConfig {
  role: string;
  skills: string;
  difficulty: Difficulty;
  type: InterviewType;
  questions: number;
  estimatedTime: number;
}

export interface InterviewQuestion {
  id: number;
  question: string;
  expectedAnswer?: string;
}

export interface InterviewSession {
  id: string;

  status:
    | "draft"
    | "ready"
    | "in_progress"
    | "completed";

  config: InterviewConfig;

  questions: InterviewQuestion[];

  currentQuestion: number;

  score?: number;

  startedAt?: Date;

  completedAt?: Date;
}