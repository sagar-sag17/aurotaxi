import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Fleet from "@/components/sections/Fleet";
import Destinations from "@/components/sections/Destinations";
import AboutPreview from "@/components/sections/AboutPreview";
import ReviewsTeaser from "@/components/sections/ReviewsTeaser";
import CtaBanner from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Auro Taxi | Local, Airport & Outstation Taxi Booking",
  description:
    "Book a reliable taxi near you with Auro Taxi. Local rides, airport transfers and outstation trips with transparent pricing and 24/7 support.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Fleet />
      <Destinations />
      <AboutPreview />
      <ReviewsTeaser />
      <CtaBanner />
    </>
  );
}
