import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  containerClassName,
  padded = true,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  padded?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-clip",
        padded && "py-16 md:py-24 lg:py-28",
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1280px] px-6 md:px-8 lg:px-10", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-4 inline-flex items-center gap-2">
          <span className="h-px w-8 bg-tangerine-500" aria-hidden="true" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-600">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] font-[600] leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-charcoal-600 text-balance">
          {description}
        </p>
      )}
    </div>
  );
}
