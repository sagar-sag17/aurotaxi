import StarRating from "@/components/ui/StarRating";
import type { Review } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue font-serif text-base font-semibold text-white">
          {review.avatarInitial ?? review.name.charAt(0).toUpperCase()}
        </span>
        <div>
          <p className="text-sm font-semibold text-neutral-900">{review.name}</p>
          <p className="text-xs text-neutral-500">{formatDate(review.date)}</p>
        </div>
      </div>

      <StarRating rating={review.rating} id={`review-${review.id}`} />

      <p className="text-sm leading-relaxed text-neutral-700">&ldquo;{review.text}&rdquo;</p>
    </article>
  );
}
