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
        padded && "py-14 md:py-20 lg:py-24 xl:py-28",
        className
      )}
    >
      <div className={cn("mx-auto w-full max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10", containerClassName)}>
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
        "max-w-[48rem]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="mb-3.5 inline-flex items-center gap-2.5 md:mb-4">
          <span className="h-px w-7 bg-tangerine-500 md:w-8" aria-hidden="true" />
          <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-tangerine-600 md:text-[11px]">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="font-display text-[28px] font-[600] leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[50px]">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 max-w-[52ch] text-[15px] leading-[1.6] text-charcoal-600 text-balance md:mt-4 md:text-[16px]">
          {description}
        </p>
      )}
    </div>
  );
}
