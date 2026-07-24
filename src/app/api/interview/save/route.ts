import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { saveInterview } from "@/services/database/interview.service";

export async function POST(req: Request) {
  try {
    console.log("========== SAVE API CALLED ==========");

    const authData = await auth();

    console.log("AUTH DATA:", authData);

    const { userId } = authData;

    if (!userId) {
      console.log("No authenticated user found.");

      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const body = await req.json();

    console.log("Received body:", body);

    const interview = await saveInterview({
      userId,
      config: body.config,
      questions: body.questions,
      answers: body.answers,
      evaluations: body.evaluations,
    });

    console.log("Interview saved successfully.");

    return NextResponse.json({
      success: true,
      data: interview,
    });
  } catch (error) {
    console.error("========== SAVE API ERROR ==========");

    if (error instanceof Error) {
      console.error("Message:", error.message);
      console.error("Stack:", error.stack);
    } else {
      console.error(error);
    }

    return NextResponse.json(
      {
        success: false,
        error: "Failed to save interview.",
      },
      {
        status: 500,
      }
    );
  }
}