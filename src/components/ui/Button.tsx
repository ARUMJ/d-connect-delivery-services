import { cn } from "@/lib/cn";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Link from "next/link";
import * as React from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-tangerine-500 text-white hover:bg-tangerine-600 active:bg-tangerine-600 shadow-[0_8px_24px_rgba(255,107,24,0.24)] hover:shadow-[0_12px_32px_rgba(255,107,24,0.32)]",
  secondary:
    "bg-emerald-900 text-cream-50 hover:bg-emerald-800 active:bg-emerald-950 shadow-soft",
  ghost:
    "bg-transparent text-charcoal-900 hover:bg-charcoal-900/[0.06] active:bg-charcoal-900/[0.08]",
  outline:
    "bg-transparent border border-charcoal-900/15 text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[13px] rounded-full",
  md: "h-11 px-6 text-[14px] rounded-full",
  lg: "h-[52px] px-8 text-[15px] rounded-full",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 font-medium tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:pointer-events-none",
    "whitespace-nowrap",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export function WhatsAppButton({
  message,
  children,
  variant = "primary",
  size = "md",
  className,
}: {
  message?: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  const url = getWhatsAppUrl(message);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 font-medium tracking-[-0.01em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full whitespace-nowrap",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tangerine-500 focus-visible:ring-offset-2",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span className="inline-flex items-center justify-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38a9.806 9.806 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.87-6.99Zm-7.01 15.24h-.01a8.167 8.167 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.178 8.178 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z"
            fill="currentColor"
          />
        </svg>
      </span>
      {children}
    </a>
  );
}
