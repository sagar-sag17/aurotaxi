"use client";

import { useEffect, useState } from "react";
import ReviewsSummary from "./ReviewsSummary";
import ReviewCard from "./ReviewCard";
import ReviewForm from "./ReviewForm";
import { SEED_REVIEWS } from "@/lib/reviews-data";
import type { Review } from "@/lib/types";

export default function ReviewsPageContent() {
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [loading, setLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    let ignore = false;

    async function fetchReviews() {
      try {
        const res = await fetch("/api/reviews", { cache: "no-store" });
        if (!res.ok) return;
        const data = await res.json();
        if (!ignore && Array.isArray(data.reviews)) setReviews(data.reviews);
      } catch {
        // Keep the seeded reviews visible if the API is unreachable.
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchReviews();
    return () => {
      ignore = true;
    };
  }, [refreshKey]);

  return (
    <div className="flex flex-col gap-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.5fr_1.5fr]">
        <ReviewsSummary reviews={reviews} />

        <div id="share" className="scroll-mt-24 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <h2 className="font-serif text-2xl font-semibold text-neutral-900">Share Your Experience</h2>
          <p className="mt-1.5 text-sm text-neutral-600">
            Your feedback helps other travellers book with confidence.
          </p>
          <div className="mt-6">
            <ReviewForm onSubmitted={() => setRefreshKey((k) => k + 1)} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-serif text-2xl font-semibold text-neutral-900">What Our Customers Say</h2>
        <div
          aria-live="polite"
          className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
        {loading && <p className="mt-4 text-sm text-neutral-400">Loading latest reviews…</p>}
      </div>
    </div>
  );
}
