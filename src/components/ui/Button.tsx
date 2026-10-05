import type { ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "outline" | "whatsapp";
type Size = "md" | "lg";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-brand-blue text-white hover:bg-brand-blue-dark focus-visible:outline-brand-blue",
  secondary:
    "bg-brand-orange text-white hover:bg-brand-orange-dark focus-visible:outline-brand-orange",
  outline:
    "border-2 border-white/70 text-white hover:bg-white hover:text-brand-blue focus-visible:outline-white",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark focus-visible:outline-whatsapp",
};

const SIZE_CLASSES: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-lg font-semibold font-sans transition-colors duration-150 outline-offset-2 focus-visible:outline focus-visible:outline-2 cursor-pointer";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
};

type AsButton = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

type AsLink = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export default function Button(props: AsButton | AsLink) {
  const { children, variant = "primary", size = "md", className = "", icon } = props;
  const classes = `${BASE} ${VARIANT_CLASSES[variant]} ${SIZE_CLASSES[size]} ${className}`;

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  const { type = "button", onClick, disabled } = props as AsButton;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={(props as AsButton)["aria-label"]}
      className={classes}
    >
      {icon}
      {children}
    </button>
  );
}
