import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { UsersIcon, LuggageIcon } from "@/components/ui/icons";
import { buildWhatsAppLink } from "@/lib/config";

const FLEET: {
  name: string;
  description: string;
  passengers: string;
  luggage: string;
  features: string[];
  image: string;
  bg: string;
}[] = [
  {
    name: "Sedan",
    description: "Comfortable for individuals and small groups.",
    passengers: "4 passengers",
    luggage: "2 bags",
    features: ["AC", "Fuel-efficient", "City & short trips"],
    image: "/images/sedan-car-1.png",
    bg: "bg-brand-blue-light",
  },
  {
    name: "SUV",
    description: "Spacious travel for families and groups.",
    passengers: "6–7 passengers",
    luggage: "4 bags",
    features: ["Extra legroom", "Great for outstation", "AC"],
    image: "/images/innova.png",
    bg: "bg-brand-orange-light",
  },
  {
    name: "Premium",
    description: "A more comfortable option for business and special occasions.",
    passengers: "4 passengers",
    luggage: "3 bags",
    features: ["Premium interiors", "Professional chauffeur", "Corporate travel"],
    image: "/images/luxury-carrr.webp",
    bg: "bg-neutral-100",
  },
];

export default function Fleet() {
  return (
    <section className="bg-neutral-canvas py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Fleet"
          title="A Vehicle for Every Journey"
          description="Choose the category that fits your trip — every vehicle in our fleet is clean, inspected and driven by a trained chauffeur."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FLEET.map(({ name, description, passengers, luggage, features, image, bg }) => (
            <Card key={name} className="flex flex-col gap-5 p-0 overflow-hidden">
              <div className={`relative h-64 ${bg}`}>
                <Image src={image} alt={`${name} taxi`} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-2" />
              </div>
              <div className="flex flex-1 flex-col gap-4 px-6 pb-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold text-neutral-900">{name}</h3>
                  <p className="mt-1 text-sm text-neutral-600">{description}</p>
                </div>

                <div className="flex items-center gap-5 text-sm text-neutral-700">
                  <span className="flex items-center gap-1.5">
                    <UsersIcon className="h-4 w-4 text-brand-blue" /> {passengers}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <LuggageIcon className="h-4 w-4 text-brand-blue" /> {luggage}
                  </span>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <li key={feature} className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600">
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  href={buildWhatsAppLink(`Hi, I'd like to book a ${name} taxi. Please share the available options.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  className="mt-auto"
                >
                  Book This
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
