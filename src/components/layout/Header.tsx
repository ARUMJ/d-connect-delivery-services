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
      setIsScrolled(window.scrollY > 20);
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
            ? "border-charcoal-900/10 bg-cream-50/80 backdrop-blur-xl supports-[backdrop-filter]:bg-cream-50/70 py-3"
            : "border-transparent bg-transparent py-5",
        )}
      >
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 md:px-8 lg:px-10">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-3"
            aria-label="D-Connect Delivery Services - Home"
          >
            <div className="relative flex size-9 items-center justify-center rounded-full bg-emerald-900 text-cream-50 transition-transform duration-300 group-hover:scale-105">
              <span className="font-display text-[18px] font-bold tracking-[-0.02em]">D</span>
              <span className="absolute -right-0.5 -top-0.5 size-2.5 rounded-full bg-tangerine-500 ring-2 ring-cream-50" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-[16px] font-bold tracking-[-0.02em] text-charcoal-900">
                D-CONNECT
              </span>
              <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-charcoal-600">
                Delivery Services
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-[13.5px] font-medium tracking-[-0.01em] text-charcoal-800 transition-colors hover:text-charcoal-900"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-charcoal-900 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <WhatsAppButton message={MESSAGES.general} size="md">
              Order on WhatsApp
            </WhatsAppButton>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <WhatsAppButton message={MESSAGES.general} size="sm" className="h-9 px-4">
              Order
            </WhatsAppButton>
            <Button
              variant="ghost"
              size="sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="size-9 p-0 rounded-full border border-charcoal-900/10"
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

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-0 z-40 flex flex-col bg-cream-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMenuOpen}
      >
        <div className="flex flex-1 flex-col px-6 pb-10 pt-24 md:px-8">
          <nav className="flex flex-col" aria-label="Mobile">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between border-b border-charcoal-900/10 py-6 transition-colors"
                style={{
                  transitionDelay: `${i * 40}ms`,
                  opacity: isMenuOpen ? 1 : 0,
                  transform: isMenuOpen ? "translateY(0)" : "translateY(12px)",
                  transitionProperty: "opacity, transform",
                  transitionDuration: "500ms",
                  transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <span className="font-display text-[28px] font-medium tracking-[-0.02em] text-charcoal-900 group-hover:text-emerald-900 transition-colors">
                  {link.label}
                </span>
                <span className="text-charcoal-400 group-hover:text-charcoal-900 group-hover:translate-x-1 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-4 pt-8">
            <div className="rounded-3xl bg-emerald-900 p-6 text-cream-50">
              <p className="font-display text-[20px] leading-[1.1] tracking-[-0.02em] text-balance">
                Ready to stock up on foodstuff and provisions?
              </p>
              <p className="mt-2 text-[14px] leading-[1.5] text-cream-100/80">
                Order conveniently via WhatsApp. Bulk-friendly, doorstep delivery.
              </p>
              <WhatsAppButton
                message={MESSAGES.general}
                className="mt-5 w-full bg-cream-50 text-emerald-900 hover:bg-white"
                size="lg"
              >
                Order on WhatsApp
              </WhatsAppButton>
            </div>

            <div className="flex items-center justify-between px-1 text-[12px] text-charcoal-600">
              <span>© {new Date().getFullYear()} D-Connect</span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" /> Available for orders
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
