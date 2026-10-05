import type { Review } from "./types";

// Placeholder seed reviews. In production this list is served by GET /api/reviews.
export const SEED_REVIEWS: Review[] = [
  {
    id: "r1",
    name: "Rahul",
    rating: 5,
    text: "Very professional driver and a comfortable ride. The airport pickup was perfectly on time.",
    date: "2026-08-14",
    avatarInitial: "R",
  },
  {
    id: "r2",
    name: "Priya Menon",
    rating: 5,
    text: "Booked an outstation trip for a family weekend getaway. Clean car, careful driving, and transparent pricing with no surprises.",
    date: "2026-07-30",
    avatarInitial: "P",
  },
  {
    id: "r3",
    name: "Arjun Iyer",
    rating: 4,
    text: "Reliable local taxi service. I use them for my daily office commute — always on time and easy to book on WhatsApp.",
    date: "2026-07-18",
    avatarInitial: "A",
  },
  {
    id: "r4",
    name: "Sara Thomas",
    rating: 5,
    text: "Our corporate account uses Auro Taxi for all client transfers. Drivers are punctual and well presented every time.",
    date: "2026-06-22",
    avatarInitial: "S",
  },
  {
    id: "r5",
    name: "Karthik R",
    rating: 5,
    text: "Round trip to the hill station was smooth and safe. The driver knew the routes well and made great stops along the way.",
    date: "2026-06-05",
    avatarInitial: "K",
  },
  {
    id: "r6",
    name: "Meera Nair",
    rating: 4,
    text: "Good experience overall. Car was clean and the fare matched exactly what was quoted on WhatsApp.",
    date: "2026-05-19",
    avatarInitial: "M",
  },
];

export function getAverageRating(reviews: Review[]) {
  if (reviews.length === 0) return 0;
  const total = reviews.reduce((sum, r) => sum + r.rating, 0);
  return Math.round((total / reviews.length) * 10) / 10;
}

export function getRatingDistribution(reviews: Review[]) {
  const counts = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
  }));
  const max = Math.max(...counts.map((c) => c.count), 1);
  return counts.map((c) => ({ ...c, percent: Math.round((c.count / max) * 100) }));
}
