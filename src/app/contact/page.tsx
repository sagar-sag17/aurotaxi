import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";
import Button from "@/components/ui/Button";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon } from "@/components/ui/icons";
import { CONTACT, buildWhatsAppLink } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Auro Taxi by phone, WhatsApp or email, or request a ride with pickup, destination and timing details.",
  alternates: { canonical: "/contact" },
};

const INFO_ITEMS = [
  { icon: PhoneIcon, label: "Phone", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { icon: MailIcon, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: PinIcon, label: "Address", value: CONTACT.address },
  { icon: ClockIcon, label: "Operating Hours", value: CONTACT.hours },
];

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
              Contact
            </span>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-neutral-900 sm:text-5xl">
              Let&apos;s Get You Moving
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
              Have a question, or want to book directly? Reach us any way that&apos;s
              convenient for you.
            </p>
          </div>

          <ul className="flex flex-col gap-5">
            {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-blue-light text-brand-blue">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-neutral-600 hover:text-brand-blue">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-neutral-600">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <Button href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" variant="whatsapp" size="lg" className="w-fit">
            Chat on WhatsApp
          </Button>
        </div>

        <div className="rounded-2xl border border-neutral-100 bg-white p-6 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
