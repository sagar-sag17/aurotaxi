import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { CONTACT } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="prose-neutral mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-neutral-500">
          Placeholder content — replace with a policy reviewed by your legal counsel before launch.
        </p>

        <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-neutral-700">
          <p>
            Auro Taxi collects only the information needed to arrange and confirm your ride,
            such as your name, phone number, email address, pickup location and destination.
          </p>
          <p>
            We do not sell your personal information. Details you submit through our contact,
            booking or review forms are used solely to respond to your request and improve our
            service.
          </p>
          <p>
            For any questions about how your data is handled, contact us at{" "}
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
