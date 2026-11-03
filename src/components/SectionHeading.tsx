interface SectionHeadingProps {
  number?: string;
  label: string;
  title: string;
  italicWord?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  number,
  label,
  title,
  italicWord,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-4xl"
      } ${className}`}
    >
      <div className="flex items-center gap-2 mb-3">
        {number && (
          <span className="font-mono text-[11px] text-accent tracking-eyebrow font-medium">
            {number} /
          </span>
        )}
        <span className="font-mono text-[11px] text-muted tracking-eyebrow uppercase font-medium">
          {label}
        </span>
      </div>

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-ink leading-[1.12]">
        {title}{" "}
        {italicWord && (
          <em className="font-serif italic font-normal text-ink">
            {italicWord}
          </em>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-muted leading-relaxed max-w-2xl font-sans">
          {subtitle}
        </p>
      )}
    </div>
  );
}
