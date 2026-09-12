import { cn } from "@/lib/cn";

export function Badge({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: "default" | "emerald" | "tangerine" | "cream";
  className?: string;
}) {
  const variants = {
    default: "bg-charcoal-900 text-cream-50",
    emerald: "bg-emerald-900 text-cream-50",
    tangerine: "bg-tangerine-50 text-tangerine-600 border border-tangerine-100",
    cream: "bg-cream-100 text-charcoal-800 border border-cream-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export function Dot() {
  return <span className="inline-block size-1.5 rounded-full bg-tangerine-500 animate-pulse" aria-hidden="true" />;
}
