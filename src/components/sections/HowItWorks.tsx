import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const STEPS = [
  {
    number: "01",
    title: "Book Your Ride",
    description: "Contact us through the website, phone or WhatsApp.",
  },
  {
    number: "02",
    title: "Get Confirmation",
    description: "Receive your ride details and driver information.",
  },
  {
    number: "03",
    title: "Meet Your Driver",
    description: "Your driver arrives at the agreed pickup location.",
  },
  {
    number: "04",
    title: "Enjoy Your Journey",
    description: "Sit back and travel comfortably.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How It Works" title="Booking a Taxi Takes Minutes" />

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute top-6 left-0 right-0 hidden h-px bg-neutral-200 lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <div key={step.number} className="relative flex flex-col items-start gap-3 lg:items-center lg:text-center">
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue font-serif text-lg font-semibold text-white">
                {step.number}
              </span>
              <h3 className="font-serif text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
