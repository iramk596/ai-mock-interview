"use client";

import { useEffect, useState } from "react";
import {
  InterviewQuestion,
  InterviewStatus,
} from "@/types/interview";

export function useInterviewSession(
  questions: InterviewQuestion[]
) {
  const [status, setStatus] =
    useState<InterviewStatus>("ready");

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [elapsedTime, setElapsedTime] =
    useState(0);

  const [transcript, setTranscript] =
    useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTranscript("");
    } else {
      setStatus("completed");
    }
  };

  const skipQuestion = () => {
    nextQuestion();
  };

  const updateTranscript = (value: string) => {
    setTranscript(value);
  };

  return {
    status,
    setStatus,

    currentQuestion,

    current: questions[currentQuestion],

    elapsedTime,

    transcript,

    updateTranscript,

    nextQuestion,

    skipQuestion,
  };
}