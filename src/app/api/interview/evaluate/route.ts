import { NextRequest, NextResponse } from "next/server";

import { groq } from "@/services/ai/groq.service";
import { ANSWER_EVALUATION_PROMPT } from "@/services/ai/prompts";

export async function POST(req: NextRequest) {
  try {
    const { question, answer } = await req.json();

    const completion =
      await groq.chat.completions.create({
        model: "llama-3.3-70b-versatile",

        temperature: 0.3,

        messages: [
          {
            role: "system",
            content: ANSWER_EVALUATION_PROMPT,
          },
          {
            role: "user",
            content: `
Interview Question:

${question}

Candidate Answer:

${answer}
            `,
          },
        ],
      });

    const response =
      completion.choices[0].message.content ?? "{}";

    const cleaned = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return NextResponse.json({
      success: true,
      data: JSON.parse(cleaned),
    });
  } catch (error) {
    console.error("Groq Evaluation Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to evaluate answer.",
      },
      {
        status: 500,
      }
    );
  }
}