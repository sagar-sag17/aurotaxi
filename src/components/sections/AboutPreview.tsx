import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/ui/icons";

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-blue-light lg:order-1">
          <Image
            src="/images/swift-car.webp"
            alt="Auro Taxi vehicle"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-contain p-8"
          />
        </div>

        <div className="order-1 flex flex-col gap-5 lg:order-2">
          <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
            About Auro Taxi
          </span>
          <h2 className="font-serif text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
            More Than Just a Ride
          </h2>
          <p className="text-base leading-relaxed text-neutral-600">
            Auro Taxi started with a simple idea: getting from one place to another should
            be dependable, comfortable and stress-free. Whether it&apos;s an early airport
            run, a daily commute or a long outstation trip, our drivers and vehicles are
            prepared to make every journey feel easy — for tourists, families, business
            travellers and locals alike.
          </p>
          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-1.5 font-semibold text-brand-blue hover:text-brand-blue-dark"
          >
            About Us <ArrowRightIcon />
          </Link>
        </div>
      </Container>
    </section>
  );
}
