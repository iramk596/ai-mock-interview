import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await params;

    const interview = await prisma.interview.findUnique({
      where: { id },
    });

    if (!interview || interview.userId !== userId) {
      return NextResponse.json(
        { error: "Interview not found" },
        { status: 404 }
      );
    }

    await prisma.interview.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete interview" },
      { status: 500 }
    );
  }
}
