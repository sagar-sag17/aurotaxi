import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="prose-neutral mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Terms &amp; Conditions
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Placeholder content — replace with terms reviewed by your legal counsel before launch.
        </p>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-neutral-700">
          <p>
            By booking a ride with Auro Taxi, you agree to provide accurate pickup, destination
            and contact details so we can confirm and complete your trip.
          </p>
          <p>
            Fares quoted at the time of booking are honoured barring changes to the route or
            trip requested by the customer after confirmation.
          </p>
          <p>
            For questions about a booking or these terms, contact us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-brand-blue hover:underline">
              {CONTACT.email}
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
