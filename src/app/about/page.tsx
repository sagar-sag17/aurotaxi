import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import BookTaxiButton from "@/components/ui/BookTaxiButton";
import TrustStats from "@/components/sections/TrustStats";
import { ShieldIcon, TagIcon, HeadsetIcon, UsersIcon, SparkleIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Auro Taxi's mission to make every journey safer, simpler and more comfortable for tourists, families, business travellers and locals.",
  alternates: { canonical: "/about" },
};

const VALUES = [
  { title: "Reliability", description: "You can count on us to show up on time, every time.", icon: ShieldIcon },
  { title: "Safety", description: "Well-maintained vehicles and safety-first driving on every trip.", icon: TagIcon },
  { title: "Customer First", description: "Every decision starts with what makes your journey easier.", icon: UsersIcon },
  { title: "Transparency", description: "Clear pricing and honest communication, with no surprises.", icon: SparkleIcon },
  { title: "Professionalism", description: "Trained drivers and courteous service from booking to drop-off.", icon: HeadsetIcon },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-b from-brand-blue-light to-white py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-5 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            About Auro Taxi
          </span>
          <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            Driven by Service. Trusted by Customers.
          </h1>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Our Story
            </span>
            <h2 className="font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
              Built Around Dependable Travel
            </h2>
            <p className="text-base leading-relaxed text-neutral-600">
              Auro Taxi was founded to solve a problem every traveller knows well: finding a
              taxi you can genuinely rely on. We started with a small fleet and a simple
              promise — clean cars, professional drivers and honest pricing — and grew that
              promise into a service trusted by tourists, families, business travellers and
              locals across the region.
            </p>
            <p className="text-base leading-relaxed text-neutral-600">
              Today, whether it&apos;s a quick city ride, an early airport transfer or a
              multi-day outstation trip, our focus hasn&apos;t changed: make every journey
              comfortable, safe and easy to book.
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/about-taxi.jpg"
              alt="Auro Taxi fleet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-neutral-canvas py-16 sm:py-24">
        <Container className="flex flex-col items-center gap-4 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            Our Mission
          </span>
          <p className="max-w-2xl font-serif text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl">
            &ldquo;To make every journey safer, simpler and more comfortable.&rdquo;
          </p>
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Our Values" title="What Guides Every Ride" />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map(({ title, description, icon: Icon }) => (
              <div key={title} className="flex flex-col items-center gap-3 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-serif text-base font-semibold text-neutral-900">{title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-neutral-canvas py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="By the Numbers" title="Why Customers Trust Us" />
          <div className="mt-12">
            <TrustStats />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Experience the Auro Taxi Difference
          </h2>
          <BookTaxiButton size="lg" />
        </Container>
      </section>
    </div>
  );
}
