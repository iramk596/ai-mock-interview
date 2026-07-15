import { NextRequest, NextResponse } from "next/server";

import { groq } from "@/services/ai/groq.service";
import { QUESTION_GENERATION_PROMPT } from "@/services/ai/prompts";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("========== AI QUESTION REQUEST ==========");
    console.log(body);

    const {
      role,
      skills,
      difficulty,
      type,
      experience,
      questions,
    } = body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      temperature: 0.7,

      messages: [
        {
          role: "system",
          content: QUESTION_GENERATION_PROMPT,
        },
        {
          role: "user",
          content: `
Role: ${role}

Skills: ${skills}

Difficulty: ${difficulty}

Interview Type: ${type}

Experience: ${experience}

Generate ${questions} interview questions.

Return ONLY a JSON array.
          `,
        },
      ],
    });

    const response =
      completion.choices[0].message.content ?? "[]";

    console.log("========== RAW GROQ RESPONSE ==========");
    console.log(response);

    const cleaned = response
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    console.log("========== CLEANED RESPONSE ==========");
    console.log(cleaned);

    let parsedQuestions;

    try {
      parsedQuestions = JSON.parse(cleaned);
    } catch (parseError) {
      console.error("========== JSON PARSE ERROR ==========");
      console.error(parseError);
      console.error(cleaned);

      return NextResponse.json(
        {
          success: false,
          message: "Groq returned invalid JSON.",
          raw: cleaned,
        },
        {
          status: 500,
        }
      );
    }

    console.log("========== PARSED QUESTIONS ==========");
    console.log(parsedQuestions);

    return NextResponse.json({
      success: true,
      data: parsedQuestions,
    });

  } catch (error: any) {
    console.error("========== GROQ ERROR ==========");
    console.error(error);

    if (error?.response) {
      console.error("Response Status:");
      console.error(error.response.status);

      console.error("Response Data:");
      console.error(error.response.data);
    }

    return NextResponse.json(
      {
        success: false,
        message: "Failed to generate interview questions.",
        error: error?.message ?? "Unknown Error",
      },
      {
        status: 500,
      }
    );
  }
}