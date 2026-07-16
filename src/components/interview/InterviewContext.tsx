"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

import {
  InterviewConfig,
  InterviewQuestion,
} from "@/types/interview";

import { AnswerEvaluation } from "@/types/evaluation";

interface InterviewContextType {
  config: InterviewConfig;
  setConfig: Dispatch<SetStateAction<InterviewConfig>>;

  questions: InterviewQuestion[];
  setQuestions: Dispatch<SetStateAction<InterviewQuestion[]>>;

  answers: string[];
  setAnswers: Dispatch<SetStateAction<string[]>>;

  evaluations: AnswerEvaluation[];
  setEvaluations: Dispatch<SetStateAction<AnswerEvaluation[]>>;
}

const defaultConfig: InterviewConfig = {
  role: "",
  skills: "",
  difficulty: "Medium",
  type: "Technical",
  questions: 10,
  estimatedTime: 20,
  experience: "Fresher",
};

const InterviewContext =
  createContext<InterviewContextType | null>(null);

export function InterviewProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [config, setConfig] =
    useState<InterviewConfig>(defaultConfig);

  const [questions, setQuestions] =
    useState<InterviewQuestion[]>([]);

  const [answers, setAnswers] =
    useState<string[]>([]);

  const [evaluations, setEvaluations] =
    useState<AnswerEvaluation[]>([]);

  return (
    <InterviewContext.Provider
      value={{
        config,
        setConfig,

        questions,
        setQuestions,

        answers,
        setAnswers,

        evaluations,
        setEvaluations,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  const context = useContext(InterviewContext);

  if (!context) {
    throw new Error(
      "useInterview must be used inside InterviewProvider"
    );
  }

  return context;
}