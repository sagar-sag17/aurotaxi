# Auro Taxi

Marketing website for Auro Taxi — local, airport and outstation taxi booking. Built with Next.js (App Router), TypeScript and Tailwind CSS v4.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Business details live in one place: [`src/lib/config.ts`](src/lib/config.ts).

- `WHATSAPP_NUMBER` — the number used for every WhatsApp link on the site (floating button, "Book a Taxi" CTAs, service cards). Digits only, with country code, no `+` or spaces.
- `CONTACT` — phone, email, address and operating hours shown in the header, footer and Contact page.
- `SOCIAL` — Instagram / Facebook / Google Business Profile links in the footer.
- `COMPANY_STATS` — placeholder trust numbers on the About page; replace with real, verified figures before launch.

## Structure

- `src/app` — routes: home, `/about`, `/reviews`, `/contact`, plus `sitemap.ts` / `robots.ts` for SEO and `api/reviews`, `api/contact` route handlers.
- `src/components/sections` — homepage sections (Hero, Services, Fleet, Destinations, etc.).
- `src/components/reviews`, `src/components/contact` — the review and booking forms.
- `src/components/ui` — reusable primitives (Button, Card, FormField, StarRating, icons).
- `src/lib` — config, shared types, and the seed review data.

## Reviews & booking data

`src/app/api/reviews/route.ts` reads/writes a Supabase `reviews` table via `src/lib/supabase/server.ts` (service-role key, server-only). Run `supabase/schema.sql` once in the Supabase SQL editor to create the table, and set `SUPABASE_URL` / `SUPABASE_SERVICE_ROLE_KEY` in `.env.local` (see `.env.example`).

`src/app/api/contact/route.ts` still stores/validates data in memory as a stand-in for a database — swapping in a real data layer there only requires changing that route handler, not the UI.

## Assets

Brand logo and icons live in `public/images` and `public/icons`. The hero/fleet vehicle graphics are original inline SVG illustrations (`src/components/graphics`, `src/components/ui/icons.tsx`) rather than stock photography — swap in real photography there once available.
