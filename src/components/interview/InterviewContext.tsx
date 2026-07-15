"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import {
  InterviewConfig,
  InterviewQuestion,
} from "@/types/interview";

interface InterviewContextType {
  config: InterviewConfig;
  setConfig: (config: InterviewConfig) => void;

  questions: InterviewQuestion[];
  setQuestions: (questions: InterviewQuestion[]) => void;
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

  return (
    <InterviewContext.Provider
      value={{
        config,
        setConfig,
        questions,
        setQuestions,
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