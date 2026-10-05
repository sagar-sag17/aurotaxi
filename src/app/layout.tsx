import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloatButton from "@/components/layout/WhatsAppFloatButton";
import { SITE_URL, CONTACT, BRAND } from "@/lib/config";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auro Taxi | Reliable Taxi & Cab Service",
    template: "%s | Auro Taxi",
  },
  description:
    "Auro Taxi offers reliable local taxi, airport transfer and outstation cab services. Book a taxi near you on WhatsApp or online — safe, on-time, transparent pricing.",
  keywords: [
    "taxi service",
    "cab service",
    "airport taxi",
    "local taxi",
    "outstation taxi",
    "taxi booking",
    "taxi service near me",
  ],
  openGraph: {
    title: "Auro Taxi | Reliable Taxi & Cab Service",
    description:
      "Reliable, comfortable and convenient taxi services for every journey — airport transfers, local rides and outstation travel.",
    url: SITE_URL,
    siteName: "Auro Taxi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auro Taxi | Reliable Taxi & Cab Service",
    description:
      "Reliable, comfortable and convenient taxi services for every journey — airport transfers, local rides and outstation travel.",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: BRAND.name,
  description:
    "Local taxi, airport transfer and outstation cab service with transparent pricing and 24/7 support.",
  url: SITE_URL,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address,
  },
  areaServed: "Local & outstation",
  openingHours: "Mo-Su 00:00-23:59",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${notoSerif.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatButton />
      </body>
    </html>
  );
}
