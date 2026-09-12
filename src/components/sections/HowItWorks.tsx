"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useEffect, useState } from "react";

function ProcessHeading() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <div
          className="mb-4 inline-flex items-center gap-2.5 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0)" : "translateX(-12px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="h-px w-8 bg-tangerine-400" />
          <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-300">Process</span>
        </div>
        <h2 className="font-display text-[30px] font-semibold leading-[0.95] tracking-[-0.03em] text-cream-50 text-balance sm:text-[34px] md:text-[42px] lg:text-[48px]">
          <span className="block overflow-hidden">
            <span
              className="block will-change-transform"
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100%)",
                transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.77,0,0.175,1)",
                transitionDelay: "80ms",
              }}
            >
              Simple ordering,
            </span>
          </span>
          <span className="block overflow-hidden">
            <span
              className="block italic font-normal text-tangerine-300 will-change-transform"
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100%)",
                transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.77,0,0.175,1)",
                transitionDelay: "160ms",
              }}
            >
              reliable delivery
            </span>
          </span>
        </h2>
        <p
          className="mt-4 max-w-[52ch] text-[15px] leading-[1.6] text-cream-100/65 text-balance md:text-[16px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "240ms",
          }}
        >
          No complicated checkout. Just WhatsApp, quality sourcing, and doorstep delivery for your foodstuff needs.
        </p>
      </div>

      <div
        className="hidden items-center gap-3 text-[11px] tracking-[0.08em] uppercase text-cream-100/40 md:flex will-change-transform"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(8px)",
          transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: "320ms",
        }}
      >
        <span>4 steps</span>
        <span className="h-px w-10 bg-cream-100/15" />
        <span>WhatsApp first</span>
      </div>
    </div>
  );
}

function ProcessStep({ item, index }: { item: (typeof HOW_IT_WORKS)[number]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3, once: true });
  const prefersReducedMotion = useReducedMotion();
  const [lineProgress, setLineProgress] = useState(0);

  useEffect(() => {
    if (isInView && !prefersReducedMotion) {
      const timer = setTimeout(() => setLineProgress(100), 400 + index * 100);
      return () => clearTimeout(timer);
    }
  }, [isInView, prefersReducedMotion, index]);

  return (
    <div
      ref={ref}
      className="group relative flex h-full min-h-[260px] flex-col bg-emerald-900 p-6 transition-colors duration-500 hover:bg-emerald-800 md:min-h-[300px] md:p-7 will-change-transform"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : `translateY(${32 + index * 6}px) scale(0.98)`,
        transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <div className="flex items-start justify-between">
        <div className="overflow-hidden">
          <span
            className="font-display text-[48px] font-[700] leading-none tracking-[-0.04em] text-cream-50/[0.12] transition-colors duration-500 group-hover:text-cream-50/[0.18] md:text-[52px] block will-change-transform"
            style={{
              transform: isInView ? "translateY(0)" : "translateY(100%)",
              transition: prefersReducedMotion ? "none" : "transform 600ms cubic-bezier(0.77,0,0.175,1)",
              transitionDelay: `${200 + index * 80}ms`,
            }}
          >
            {item.step}
          </span>
        </div>
        <div
          className="flex size-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/50 transition-all duration-500 group-hover:bg-tangerine-500 group-hover:border-tangerine-500 group-hover:text-white group-hover:scale-105 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "scale(1) rotate(0deg)" : "scale(0.8) rotate(-10deg)",
            transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${300 + index * 80}ms`,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      <div className="mt-auto pt-12 md:pt-16">
        <h3
          className="font-display text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] text-cream-50 md:text-[20px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(12px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${250 + index * 80}ms`,
          }}
        >
          {item.title}
        </h3>
        <p
          className="mt-2.5 text-[13.5px] leading-[1.6] text-cream-100/65 md:text-[14px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(8px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${320 + index * 80}ms`,
          }}
        >
          {item.description}
        </p>
      </div>

      {/* Progress line that builds as steps appear */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-white/10">
        <div
          className="h-px w-full bg-gradient-to-r from-tangerine-500 to-tangerine-400 origin-left"
          style={{
            transform: `scaleX(${isInView ? lineProgress / 100 : 0})`,
            transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${400 + index * 80}ms`,
          }}
        />
      </div>

      {/* Connecting dot */}
      <div
        className="absolute -top-1 left-1/2 -translate-x-1/2 size-2 rounded-full bg-tangerine-500 hidden lg:block will-change-transform"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0)",
          transition: prefersReducedMotion ? "none" : "opacity 400ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: `${index * 120}ms`,
        }}
      />
    </div>
  );
}

export function HowItWorks() {
  const { ref: sectionRef, isInView: sectionInView } = useInView<HTMLDivElement>({ threshold: 0.05, once: true });

  return (
    <Section id="how-it-works" className="bg-emerald-950 text-cream-50 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: "36px 36px" }} />
      </div>
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-emerald-800/30 blur-[80px] will-change-transform"
        style={{
          transform: sectionInView ? "scale(1)" : "scale(0.8)",
          opacity: sectionInView ? 1 : 0,
          transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1), opacity 1000ms ease",
        }}
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-tangerine-500/10 blur-[80px] will-change-transform"
        style={{
          transform: sectionInView ? "scale(1)" : "scale(0.8)",
          opacity: sectionInView ? 1 : 0,
          transition: "transform 1200ms cubic-bezier(0.16,1,0.3,1) 200ms, opacity 1000ms ease 200ms",
        }}
      />

      <div ref={sectionRef} className="relative">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
          <ProcessHeading />

          <div className="relative grid grid-cols-1 gap-px overflow-hidden rounded-[20px] bg-white/10 p-px sm:grid-cols-2 lg:grid-cols-4 md:rounded-[24px]">
            {/* Progress track for desktop */}
            <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden lg:block -translate-y-1/2" />

            {HOW_IT_WORKS.map((item, index) => (
              <ProcessStep key={item.step} item={item} index={index} />
            ))}
          </div>

          <div
            className="flex flex-col items-start gap-3 rounded-[14px] bg-white/[0.04] border border-white/[0.08] px-5 py-4 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:rounded-[16px] will-change-transform"
            style={{
              opacity: sectionInView ? 1 : 0,
              transform: sectionInView ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "600ms",
            }}
          >
            <p className="max-w-2xl text-[12.5px] leading-[1.6] text-cream-100/50 md:text-[13px]">Wording and process steps are easy to adjust once the actual business workflow is confirmed. Built to evolve with verified information.</p>
            <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-tangerine-300/80">
              <span className="size-1.5 rounded-full bg-tangerine-400 animate-pulse" />
              WhatsApp conversion focused
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
