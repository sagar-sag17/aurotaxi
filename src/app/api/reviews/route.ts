import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase/server";
import type { Review } from "@/lib/types";

type ReviewRow = {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  avatar_initial: string | null;
};

function toReview(row: ReviewRow): Review {
  return {
    id: row.id,
    name: row.name,
    rating: row.rating as Review["rating"],
    text: row.text,
    date: row.date,
    avatarInitial: row.avatar_initial ?? undefined,
  };
}

export async function GET() {
  const { data, error } = await supabaseServer
    .from("reviews")
    .select("id, name, rating, text, date, avatar_initial")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: "Failed to load reviews." }, { status: 500 });
  }

  return NextResponse.json({ reviews: (data as ReviewRow[]).map(toReview) });
}

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, rating, text } = body as Record<string, unknown>;

  if (typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (typeof rating !== "number" || rating < 1 || rating > 5) {
    return NextResponse.json({ error: "Please select a rating between 1 and 5." }, { status: 400 });
  }
  if (typeof text !== "string" || text.trim().length < 10) {
    return NextResponse.json(
      { error: "Please share a few more details in your review." },
      { status: 400 },
    );
  }

  const trimmedName = name.trim();
  const { data, error } = await supabaseServer
    .from("reviews")
    .insert({
      name: trimmedName,
      rating,
      text: text.trim(),
      avatar_initial: trimmedName.charAt(0).toUpperCase(),
    })
    .select("id, name, rating, text, date, avatar_initial")
    .single();

  if (error) {
    return NextResponse.json({ error: "Failed to save your review." }, { status: 500 });
  }

  return NextResponse.json({ review: toReview(data as ReviewRow) }, { status: 201 });
}
