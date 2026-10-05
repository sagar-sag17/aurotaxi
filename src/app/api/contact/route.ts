import { NextRequest, NextResponse } from "next/server";

// Booking/contact requests land here. Swap the body of this handler for a
// real integration (send email, push to CRM, insert into a database) — the
// request/response contract for the frontend form stays the same.
export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, pickup, destination } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (typeof phone !== "string" || phone.trim().length < 7) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }
  if (typeof pickup !== "string" || pickup.trim().length < 2) {
    return NextResponse.json({ error: "Please enter a pickup location." }, { status: 400 });
  }
  if (typeof destination !== "string" || destination.trim().length < 2) {
    return NextResponse.json({ error: "Please enter a destination." }, { status: 400 });
  }

  return NextResponse.json({ success: true }, { status: 201 });
}
