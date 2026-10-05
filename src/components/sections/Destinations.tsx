import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { PinIcon } from "@/components/ui/icons";

// Easy to customize: add, remove or rename destinations here.
const DESTINATIONS = [
  "Airport",
  "City Centre",
  "Railway Station",
  "Hotels",
  "Tourist Attractions",
  "Nearby Cities",
  "Outstation Destinations",
  "Bus Terminus",
];

export default function Destinations() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Service Areas"
          title="Wherever You're Going, We're Ready to Take You There."
          description="Auro Taxi covers all the places you need — from everyday errands to trips well outside the city."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {DESTINATIONS.map((place) => (
            <div
              key={place}
              className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white px-4 py-4 shadow-sm"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                <PinIcon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-neutral-800">{place}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
