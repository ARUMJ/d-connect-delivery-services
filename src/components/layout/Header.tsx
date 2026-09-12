"use client";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/cn";
import { WhatsAppButton, Button } from "@/components/ui/Button";
import { MESSAGES } from "@/lib/whatsapp";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 16);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 w-full border-b transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
          isScrolled
            ? "border-charcoal-900/[0.08] bg-cream-50/90 backdrop-blur-2xl supports-[backdrop-filter]:bg-cream-50/80 py-3 shadow-[0_1px_20px_rgba(0,0,0,0.04)]"
            : "border-transparent bg-transparent py-4 md:py-5"
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-8 lg:px-10">
          {/* Logo - refined premium */}
          <Link
            href="#home"
            className="group flex items-center gap-3"
            aria-label="D-Connect Delivery Services - Home"
          >
            <div className="relative flex size-10 items-center justify-center rounded-full bg-emerald-900 text-cream-50 shadow-[0_2px_12px_rgba(14,51,39,0.15)] transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_4px_16px_rgba(14,51,39,0.2)]">
              <span className="font-display text-[19px] font-bold tracking-[-0.02em]">D</span>
              <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-tangerine-500 ring-[2.5px] ring-cream-50" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[16.5px] font-bold tracking-[-0.02em] text-charcoal-900">
                D-CONNECT
              </span>
              <span className="text-[10px] font-semibold tracking-[0.13em] uppercase text-charcoal-600">
                Delivery Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav - refined spacing */}
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-1 text-[13.5px] font-[500] tracking-[-0.01em] text-charcoal-700 transition-colors hover:text-charcoal-900"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-charcoal-900 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA - refined */}
          <div className="hidden items-center gap-3 lg:flex">
            <WhatsAppButton message={MESSAGES.general} size="md" className="shadow-[0_4px_16px_rgba(255,107,24,0.2)]">
              Order on WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Actions - improved touch targets */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <WhatsAppButton message={MESSAGES.general} size="sm" className="h-10 px-4 text-[13px] font-[600]">
              Order
            </WhatsAppButton>
            <Button
              variant="ghost"
              size="sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="size-10 p-0 rounded-full border border-charcoal-900/[0.08] bg-white/60 backdrop-blur-sm hover:bg-white"
            >
              <span className="relative flex size-4 flex-col items-center justify-center">
                <span
                  className={cn(
                    "absolute h-0.5 w-4 bg-charcoal-900 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isMenuOpen ? "rotate-45" : "-translate-y-1.5"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-4 bg-charcoal-900 transition-all duration-300",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute h-0.5 w-4 bg-charcoal-900 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                    isMenuOpen ? "-rotate-45" : "translate-y-1.5"
                  )}
                />
              </span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - refined */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-cream-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-1 flex-col px-6 pb-8 pt-24 md:px-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between border-b border-charcoal-900/[0.06] py-[22px] transition-colors"
                style={{
                  transitionDelay: `${i * 35}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span className="font-display text-[26px] font-[500] tracking-[-0.02em] text-charcoal-900 transition-colors group-hover:text-emerald-900">
                  {link.label}
                </span>
                <span className="flex size-8 items-center justify-center rounded-full bg-charcoal-900/[0.04] text-charcoal-400 transition-all group-hover:bg-charcoal-900 group-hover:text-cream-50 group-hover:translate-x-0.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pt-6">
            <div className="rounded-[24px] bg-emerald-900 p-6 text-cream-50 shadow-[0_12px_32px_rgba(14,51,39,0.18)]">
              <p className="font-display text-[19px] font-[600] leading-[1.15] tracking-[-0.02em] text-balance">
                Ready to stock up on foodstuff and provisions?
              </p>
              <p className="mt-2.5 text-[13.5px] leading-[1.5] text-cream-100/75">
                Order conveniently via WhatsApp. Bulk-friendly, doorstep delivery.
              </p>
              <WhatsAppButton
                message={MESSAGES.general}
                className="mt-5 w-full bg-cream-50 text-emerald-900 hover:bg-white shadow-none"
                size="lg"
              >
                Order on WhatsApp
              </WhatsAppButton>
            </div>

            <div className="flex items-center justify-between px-1 text-[11.5px] text-charcoal-500">
              <span>© {new Date().getFullYear()} D-Connect</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-800 border border-emerald-100">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" /> Available for orders
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
