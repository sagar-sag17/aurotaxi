import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { BRAND, CONTACT, NAV_LINKS, buildWhatsAppLink } from "@/lib/config";

const SERVICE_LINKS = [
  { label: "Local Taxi", href: "/#services" },
  { label: "Airport Transfer", href: "/#services" },
  { label: "Outstation", href: "/#services" },
  { label: "Corporate Travel", href: "/#services" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src={BRAND.logo}
              alt={`${BRAND.name} logo`}
              width={140}
              height={41}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Reliable, comfortable and convenient taxi services for every journey — local
              rides, airport transfers and outstation travel.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-brand-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-neutral-400 hover:text-brand-orange">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-neutral-400">
              <li>
                <a
                  href={buildWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-orange"
                >
                  WhatsApp: {CONTACT.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-brand-orange">
                  {CONTACT.email}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 text-sm text-neutral-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-brand-orange">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-orange">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
