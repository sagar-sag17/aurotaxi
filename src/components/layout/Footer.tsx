import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { BRAND, CONTACT, NAV_LINKS, SOCIAL, buildWhatsAppLink } from "@/lib/config";

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
                <a href={CONTACT.phoneHref} className="hover:text-brand-orange">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
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

            <div className="mt-5 flex items-center gap-4">
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-neutral-400 hover:text-brand-orange">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 2.06.25 2.5.42.63.24 1.08.53 1.55 1a4.2 4.2 0 011 1.55c.17.44.36 1.3.42 2.5.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 2.06-.42 2.5a4.2 4.2 0 01-1 1.55 4.2 4.2 0 01-1.55 1c-.44.17-1.3.36-2.5.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-2.06-.25-2.5-.42a4.2 4.2 0 01-1.55-1 4.2 4.2 0 01-1-1.55c-.17-.44-.36-1.3-.42-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-2.06.42-2.5a4.2 4.2 0 011-1.55 4.2 4.2 0 011.55-1c.44-.17 1.3-.36 2.5-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.15 0-3.52 0-4.77.07-1.03.05-1.6.22-1.97.36a2.4 2.4 0 00-.9.58 2.4 2.4 0 00-.58.9c-.14.37-.31.94-.36 1.97C3.35 8.48 3.35 8.85 3.35 12s0 3.52.07 4.77c.05 1.03.22 1.6.36 1.97.13.34.29.58.55.84.26.26.5.42.85.55.37.14.94.31 1.97.36 1.25.07 1.62.07 4.77.07s3.52 0 4.77-.07c1.03-.05 1.6-.22 1.97-.36.34-.13.58-.29.84-.55.26-.26.42-.5.55-.85.14-.37.31-.94.36-1.97.07-1.25.07-1.62.07-4.77s0-3.52-.07-4.77c-.05-1.03-.22-1.6-.36-1.97a2.4 2.4 0 00-.58-.9 2.4 2.4 0 00-.9-.58c-.37-.14-.94-.31-1.97-.36C15.52 4 15.15 4 12 4zm0 3.4a4.6 4.6 0 110 9.2 4.6 4.6 0 010-9.2zm0 1.8a2.8 2.8 0 100 5.6 2.8 2.8 0 000-5.6zm4.8-2a1.08 1.08 0 110 2.15 1.08 1.08 0 010-2.15z" /></svg>
              </a>
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-neutral-400 hover:text-brand-orange">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M13.5 21.9v-8.1h2.72l.4-3.15h-3.12V8.7c0-.91.25-1.53 1.56-1.53h1.67V4.35c-.29-.04-1.28-.12-2.43-.12-2.4 0-4.05 1.47-4.05 4.16v2.32H7.5v3.15h2.75v8.1h3.25z" /></svg>
              </a>
              <a href={SOCIAL.google} target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="text-neutral-400 hover:text-brand-orange">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M21.6 12.23c0-.68-.06-1.36-.19-2.02H12v3.83h5.4a4.63 4.63 0 01-2 3.04v2.5h3.24c1.9-1.75 3-4.33 3-7.35z" /><path d="M12 22c2.7 0 4.97-.89 6.63-2.42l-3.24-2.5c-.9.6-2.06.96-3.39.96-2.6 0-4.8-1.76-5.59-4.12H3.06v2.58A10 10 0 0012 22z" /><path d="M6.41 13.92a5.99 5.99 0 010-3.84V7.5H3.06a10 10 0 000 8.99l3.35-2.57z" /><path d="M12 5.98c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.96 9.96 0 0012 2a10 10 0 00-8.94 5.5l3.35 2.58c.79-2.36 2.99-4.1 5.59-4.1z" /></svg>
              </a>
            </div>
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
