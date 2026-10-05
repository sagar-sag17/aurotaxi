import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ReviewsPageContent from "@/components/reviews/ReviewsPageContent";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Read verified customer reviews for Auro Taxi's local, airport and outstation taxi services, and share your own experience.",
  alternates: { canonical: "/reviews" },
};

export default function ReviewsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Reviews
          </span>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-neutral-900 sm:text-5xl">
            Customer Reviews
          </h1>
          <p className="mt-4 text-base leading-relaxed text-neutral-600">
            See what riders are saying about their trips with Auro Taxi, and share your own
            experience below.
          </p>
        </div>

        <div className="mt-14">
          <ReviewsPageContent />
        </div>
      </Container>
    </div>
  );
}
