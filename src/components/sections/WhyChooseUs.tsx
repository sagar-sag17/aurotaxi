import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { ShieldIcon, SparkleIcon, ClockIcon, TagIcon, HeadsetIcon, CarIcon } from "@/components/ui/icons";
import type { ComponentType } from "react";

const BENEFITS: { title: string; description: string; icon: ComponentType<{ className?: string }> }[] = [
  {
    title: "Experienced Drivers",
    description: "Trained, background-verified drivers who know the routes well.",
    icon: ShieldIcon,
  },
  {
    title: "Clean & Comfortable Cars",
    description: "Every vehicle is inspected and cleaned before it comes to you.",
    icon: SparkleIcon,
  },
  {
    title: "On-Time Service",
    description: "We track pickup times closely so you're never left waiting.",
    icon: ClockIcon,
  },
  {
    title: "Transparent Pricing",
    description: "The fare you're quoted is the fare you pay — no hidden charges.",
    icon: TagIcon,
  },
  {
    title: "24/7 Customer Support",
    description: "Reach us any time by phone or WhatsApp, day or night.",
    icon: HeadsetIcon,
  },
  {
    title: "Safe & Reliable Travel",
    description: "Well-maintained vehicles and safety-first driving on every trip.",
    icon: CarIcon,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-neutral-canvas py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A Taxi Service Built Around Trust"
          description="From the first booking message to the final drop-off, every detail is designed to make you feel looked after."
        />

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange-light text-brand-orange">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-serif text-base font-semibold text-neutral-900">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
