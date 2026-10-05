import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { ArrowRightIcon, CarIcon, PlaneIcon, RouteIcon, RefreshIcon, BriefcaseIcon } from "@/components/ui/icons";
import { buildWhatsAppLink } from "@/lib/config";
import type { ComponentType } from "react";

const SERVICES: {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
}[] = [
  {
    title: "Local Taxi",
    description: "Comfortable rides for getting around the city, any time of day.",
    icon: CarIcon,
  },
  {
    title: "Airport Transfers",
    description: "Reliable pickup and drop-off services for stress-free airport travel.",
    icon: PlaneIcon,
  },
  {
    title: "Outstation Trips",
    description: "Convenient long-distance taxi services for weekend trips and longer journeys.",
    icon: RouteIcon,
  },
  {
    title: "One-Way Trips",
    description: "Easy and comfortable one-way travel between destinations.",
    icon: ArrowRightIcon,
  },
  {
    title: "Round Trips",
    description: "Flexible taxi options for return journeys, planned around your schedule.",
    icon: RefreshIcon,
  },
  {
    title: "Corporate Travel",
    description: "Professional transportation solutions for business travellers and teams.",
    icon: BriefcaseIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Services"
          title="Ride With Confidence"
          description="Whatever the journey, Auro Taxi has a ride built for it — pick a service below or book directly on WhatsApp."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, description, icon: Icon }) => (
            <Card key={title} className="flex flex-col gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue-light text-brand-blue">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-neutral-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
              <a
                href={buildWhatsAppLink(`Hi, I'd like to book ${title}. Please share the available options.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange hover:text-brand-orange-dark"
              >
                Book Now <ArrowRightIcon />
              </a>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
