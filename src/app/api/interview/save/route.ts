import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

import { saveInterview } from "@/services/database/interview.service";

export async function POST(req: Request) {
  try {
    console.log("========== SAVE API CALLED ==========");

    const { userId } = await auth();

    console.log("Authenticated user:", userId);

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await req.json();

    console.log("Request body received");

    const interview = await saveInterview({
      userId,
      config: body.config,
      questions: body.questions,
      answers: body.answers,
      evaluations: body.evaluations,
    });

    console.log(
      "Interview saved successfully:",
      interview.id
    );

    return NextResponse.json({
      success: true,
      interviewId: interview.id,
    });
  } catch (error) {
    console.error("SAVE API ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}