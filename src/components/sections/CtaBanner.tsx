import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BookTaxiButton from "@/components/ui/BookTaxiButton";
import { buildWhatsAppLink } from "@/lib/config";

export default function CtaBanner() {
  return (
    <section className="bg-brand-blue py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-2xl font-serif text-3xl font-semibold text-white sm:text-4xl">
          Ready for a Comfortable, Reliable Ride?
        </h2>
        <p className="max-w-xl text-base text-white/85">
          Book in minutes on WhatsApp, or send us your trip details and we&apos;ll confirm your ride shortly.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <BookTaxiButton size="lg" />
          <Button href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="outline" size="lg">
            WhatsApp Us
          </Button>
        </div>
      </Container>
    </section>
  );
}
