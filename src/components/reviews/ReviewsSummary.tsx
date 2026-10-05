import StarRating from "@/components/ui/StarRating";
import { getAverageRating, getRatingDistribution } from "@/lib/reviews-data";
import type { Review } from "@/lib/types";

export default function ReviewsSummary({ reviews }: { reviews: Review[] }) {
  const average = getAverageRating(reviews);
  const distribution = getRatingDistribution(reviews);

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-neutral-100 bg-white p-8 shadow-sm">
      <div className="flex flex-col items-center gap-1.5 border-b border-neutral-100 pb-6">
        <p className="font-serif text-5xl font-semibold text-neutral-900">{average} / 5</p>
        <StarRating rating={average} size="lg" id="summary-average" />
        <p className="text-sm text-neutral-500">Based on {reviews.length} customer reviews</p>
      </div>

      <div className="space-y-2">
        {distribution.map(({ star, count, percent }) => (
          <div key={star} className="flex items-center gap-3 text-sm">
            <span className="w-10 shrink-0 text-neutral-600">{star} star</span>
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-neutral-100">
              <div className="h-full rounded-full bg-brand-orange" style={{ width: `${percent}%` }} />
            </div>
            <span className="w-6 shrink-0 text-right text-neutral-500">{count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
