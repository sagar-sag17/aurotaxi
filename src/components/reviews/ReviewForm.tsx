"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import FormField, { fieldInputClasses } from "@/components/ui/FormField";

type Errors = Partial<Record<"name" | "rating" | "text", string>>;

export default function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [text, setText] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name.";
    if (rating < 1) next.rating = "Please select a star rating.";
    if (text.trim().length < 10) next.text = "Please share a few more details (at least 10 characters).";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    setServerError("");

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), email: email.trim() || undefined, rating, text: text.trim() }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setRating(0);
      setText("");
      onSubmitted?.();
    } catch (err) {
      setStatus("error");
      setServerError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-blue-light bg-brand-blue-light p-8 text-center">
        <p className="font-serif text-xl font-semibold text-brand-blue">
          Thank you for sharing your experience!
        </p>
        <p className="mt-2 text-sm text-neutral-600">Your review helps other travellers choose with confidence.</p>
        <Button variant="outline" className="mt-6 !text-brand-blue !border-brand-blue hover:!bg-brand-blue hover:!text-white" onClick={() => setStatus("idle")}>
          Write Another Review
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <FormField label="Full Name" htmlFor="review-name" required error={errors.name}>
        <input
          id="review-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={fieldInputClasses(!!errors.name)}
          placeholder="Your name"
        />
      </FormField>

      <FormField label="Email (optional)" htmlFor="review-email">
        <input
          id="review-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={fieldInputClasses()}
          placeholder="you@example.com"
        />
      </FormField>

      <FormField label="Rating" htmlFor="review-rating" required error={errors.rating}>
        <div id="review-rating" role="radiogroup" aria-label="Rating" className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              role="radio"
              aria-checked={rating === star}
              aria-label={`${star} star${star > 1 ? "s" : ""}`}
              className="p-0.5 text-brand-orange"
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            >
              <svg viewBox="0 0 20 20" className="h-8 w-8">
                <path
                  d="M10 1.5l2.6 5.4 5.9.7-4.3 4.2 1 5.9L10 14.9l-5.2 2.8 1-5.9-4.3-4.2 5.9-.7L10 1.5z"
                  fill={(hoverRating || rating) >= star ? "currentColor" : "none"}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          ))}
        </div>
      </FormField>

      <FormField label="Review" htmlFor="review-text" required error={errors.text}>
        <textarea
          id="review-text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          className={fieldInputClasses(!!errors.text)}
          placeholder="Tell us about your ride..."
        />
      </FormField>

      {serverError && (
        <p role="alert" className="text-sm text-red-600">
          {serverError}
        </p>
      )}

      <Button type="submit" variant="secondary" size="lg" disabled={status === "submitting"} className="w-fit">
        {status === "submitting" ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}
