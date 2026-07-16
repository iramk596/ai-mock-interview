import { AnswerEvaluation } from "@/types/evaluation";

export async function evaluateAnswer(
  question: string,
  answer: string
): Promise<AnswerEvaluation> {
  const response = await fetch(
    "/api/interview/evaluate",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        question,
        answer,
      }),
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.data;
}