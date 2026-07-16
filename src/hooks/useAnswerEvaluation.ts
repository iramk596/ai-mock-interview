"use client";

import { useState } from "react";

import { evaluateAnswer } from "@/services/interview/evaluate.service";

import { InterviewEvaluation } from "@/types/report";

export function useAnswerEvaluation() {
  const [loading, setLoading] = useState(false);

  const evaluate = async (
    question: string,
    answer: string
  ): Promise<InterviewEvaluation> => {
    setLoading(true);

    try {
      return await evaluateAnswer(question, answer);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    evaluate,
  };
}