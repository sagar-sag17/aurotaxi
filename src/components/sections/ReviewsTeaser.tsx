import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ReviewsSummary from "@/components/reviews/ReviewsSummary";
import ReviewCard from "@/components/reviews/ReviewCard";
import ReviewForm from "@/components/reviews/ReviewForm";
import { SEED_REVIEWS } from "@/lib/reviews-data";

export default function ReviewsTeaser() {
  const featured = SEED_REVIEWS.slice(0, 3);

  return (
    <section className="bg-neutral-canvas py-16 sm:py-24">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="Trusted by Travellers Like You"
          description="Real feedback from riders who booked local, airport and outstation trips with Auro Taxi."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-[0.5fr_1.5fr]">
          <ReviewsSummary reviews={SEED_REVIEWS} />

          <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <h3 className="font-serif text-2xl font-semibold text-neutral-900">Share Your Experience</h3>
            <p className="mt-1 text-sm text-neutral-600">
              Tell us how your ride went and help other travellers choose with confidence.
            </p>
            <div className="mt-6">
              <ReviewForm />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button href="/reviews" variant="primary">
            Read All Reviews
          </Button>
          <Link href="/reviews#share" className="text-sm font-semibold text-brand-orange hover:text-brand-orange-dark">
            Share Your Experience →
          </Link>
        </div>
      </Container>
    </section>
  );
}
