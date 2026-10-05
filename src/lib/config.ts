// Central place for business details used across the site.
// Replace placeholder values with real business data before launch.

export const SITE_URL = "https://www.aurotaxi.com";

export const BRAND = {
  name: "Auro Taxi",
  tagline: "Your Journey. Our Responsibility.",
  logo: "/images/logo.svg",
};

// Digits-only, with country code, no "+" or spaces — used to build wa.me links.
export const WHATSAPP_NUMBER = "919999999999";

export const CONTACT = {
  phoneDisplay: "+91 99999 99999",
  phoneHref: "tel:+919999999999",
  whatsappDisplay: "+91 99999 99999",
  email: "hello@aurotaxi.com",
  address: "123 MG Road, Auroville, Tamil Nadu 605101, India",
  hours: "Available 24/7 — every day of the year",
};

export const SOCIAL = {
  instagram: "https://instagram.com/aurotaxi",
  facebook: "https://facebook.com/aurotaxi",
  google: "https://g.page/aurotaxi",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi, I'd like to book a taxi. Please share the available options.";

export function buildWhatsAppLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Placeholder trust stats — replace with real, verified figures.
export const COMPANY_STATS = [
  { value: "5+", label: "Years of Experience" },
  { value: "10,000+", label: "Trips Completed" },
  { value: "500+", label: "Happy Customers" },
  { value: "24/7", label: "Customer Support" },
];
