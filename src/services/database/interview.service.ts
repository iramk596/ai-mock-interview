import { prisma } from "@/lib/prisma";

import { InterviewConfig } from "@/types/interview";
import { AnswerEvaluation } from "@/types/evaluation";

interface SaveInterviewInput {
  userId: string;

  config: InterviewConfig;

  questions: string[];

  answers: string[];

  evaluations: AnswerEvaluation[];
}

export async function saveInterview({
  userId,
  config,
  questions,
  answers,
  evaluations,
}: SaveInterviewInput) {
  const averageScore =
    evaluations.length === 0
      ? 0
      : evaluations.reduce(
          (sum, item) => sum + item.score,
          0
        ) / evaluations.length;

  return prisma.interview.create({
    data: {
      userId,

      role: config.role,
      skills: config.skills,

      difficulty: config.difficulty,
      type: config.type,

      experience: config.experience,

      score: averageScore,

      totalQuestions: questions.length,

      questions: {
        create: questions.map((question, index) => ({
          question,

          answer: answers[index] ?? "",

          score:
            evaluations[index]?.score ?? 0,

          feedback:
            evaluations[index]?.feedback ?? "",

          strengths:
            evaluations[index]?.strengths ?? [],

          improvements:
            evaluations[index]?.improvements ?? [],

          idealAnswer:
            evaluations[index]?.idealAnswer ?? "",
        })),
      },
    },
    include: {
      questions: true,
    },
  });
}