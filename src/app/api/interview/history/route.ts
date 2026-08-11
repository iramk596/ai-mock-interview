import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const interviews = await prisma.interview.findMany({
      where: { userId },

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,
        role: true,
        skills: true,
        score: true,
        totalQuestions: true,
        createdAt: true,
      },
    });

    return NextResponse.json(interviews);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch interviews" },
      { status: 500 }
    );
  }
}

