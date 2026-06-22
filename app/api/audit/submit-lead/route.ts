import { NextResponse } from "next/server";

export const runtime = "edge";

export async function POST() {
  return NextResponse.json(
    {
      error: "This retired audit endpoint is disabled in the Sentinel healthcare redesign preview.",
    },
    { status: 410 },
  );
}
