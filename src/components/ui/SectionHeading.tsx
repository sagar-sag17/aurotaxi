type Align = "left" | "center";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
}) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="text-sm font-semibold uppercase tracking-wider text-brand-orange">
          {eyebrow}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-neutral-900 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-neutral-600 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
