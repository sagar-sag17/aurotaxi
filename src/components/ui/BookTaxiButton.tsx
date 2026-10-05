import Button from "./Button";
import { buildWhatsAppLink } from "@/lib/config";

const BOOKING_MESSAGE =
  "Hi, I'd like to book a taxi. Please share the available options.";

type Variant = "primary" | "secondary" | "outline";
type Size = "md" | "lg";

// Central place where the "Book a Taxi" interaction is decided. Today it
// opens WhatsApp with a pre-filled message; swap the onClick body for a
// booking modal/flow once a booking backend exists, and every CTA across
// the site updates automatically.
export default function BookTaxiButton({
  variant = "secondary",
  size = "md",
  className = "",
  label = "Book a Taxi",
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
  label?: string;
}) {
  return (
    <Button
      href={buildWhatsAppLink(BOOKING_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      variant={variant}
      size={size}
      className={className}
    >
      {label}
    </Button>
  );
}
