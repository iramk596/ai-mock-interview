export type Difficulty = "Easy" | "Medium" | "Hard";

export type InterviewType =
  | "Technical"
  | "Behavioral"
  | "Mixed"
  | "HR";

export type ExperienceLevel =
  | "Fresher"
  | "0-2 Years"
  | "2-5 Years"
  | "5+ Years";

export interface InterviewConfig {
  role: string;
  skills: string;
  difficulty: Difficulty;
  type: InterviewType;
  questions: number;
  estimatedTime: number;
  experience: ExperienceLevel;
}

export interface InterviewQuestion {
  id: number;
  question: string;

  expectedAnswer?: string;

  userAnswer?: string;

  score?: number;

  feedback?: string;
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