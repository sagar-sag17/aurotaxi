function Star({ filled, half = false, gradientId }: { filled: boolean; half?: boolean; gradientId: string }) {
  return (
    <svg viewBox="0 0 20 20" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId}>
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>
      <path
        d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5z"
        fill={half ? `url(#${gradientId})` : filled ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function StarRating({
  rating,
  size = "md",
  className = "",
  id,
}: {
  rating: number;
  size?: "sm" | "md" | "lg";
  className?: string;
  id: string;
}) {
  const dimension = size === "sm" ? "h-3.5 w-3.5" : size === "lg" ? "h-6 w-6" : "h-4 w-4";
  const stars = [1, 2, 3, 4, 5];
  const uid = id;

  return (
    <div
      className={`flex items-center gap-0.5 text-brand-orange ${className}`}
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {stars.map((star) => {
        const filled = rating >= star;
        const half = !filled && rating >= star - 0.5;
        return (
          <span key={star} className={dimension}>
            <Star filled={filled} half={half} gradientId={`${uid}-half-${star}`} />
          </span>
        );
      })}
    </div>
  );
}
