import { NextResponse } from "next/server";

export function GET(req) {
  return NextResponse.json({ id: 5 }, { status: 200 });
}
