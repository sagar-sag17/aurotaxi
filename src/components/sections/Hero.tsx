import Image from "next/image";
import Container from "@/components/ui/Container";
import BookTaxiButton from "@/components/ui/BookTaxiButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-blue-light to-white">
      <Container className="grid grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-blue shadow-sm">
            Trusted Local &amp; Outstation Taxi Service
          </span>

          <h1 className="font-serif text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl lg:text-[3.25rem]">
            Your Journey.
            <br />
            Our Responsibility.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-neutral-600">
            Reliable, comfortable and convenient taxi services for every journey — from
            airport transfers and local rides to outstation travel.
          </p>

          <div className="pt-2">
            <BookTaxiButton size="lg" />
          </div>

          <dl className="mt-4 grid grid-cols-3 gap-4 border-t border-neutral-200 pt-6 sm:max-w-md">
            <div>
              <dt className="sr-only">Availability</dt>
              <dd className="font-serif text-3xl font-semibold text-brand-blue sm:text-4xl">24/7</dd>
              <p className="mt-1 text-sm text-neutral-500">Availability</p>
            </div>
            <div>
              <dt className="sr-only">Trips completed</dt>
              <dd className="font-serif text-3xl font-semibold text-brand-blue sm:text-4xl">10,000+</dd>
              <p className="mt-1 text-sm text-neutral-500">Trips Completed</p>
            </div>
            <div>
              <dt className="sr-only">Average rating</dt>
              <dd className="font-serif text-3xl font-semibold text-brand-blue sm:text-4xl">4.9★</dd>
              <p className="mt-1 text-sm text-neutral-500">Customer Rating</p>
            </div>
          </dl>
        </div>

        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-brand-blue-light shadow-lg">
          <Image
            src="/images/taxi-1.png"
            alt="Auro Taxi vehicle ready for a ride"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-8"
          />
        </div>
      </Container>
    </section>
  );
}
