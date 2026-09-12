"use client";

import { HOW_IT_WORKS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-emerald-950 text-cream-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative">
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2">
                  <span className="h-px w-8 bg-tangerine-400" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-300">Process</span>
                </div>
                <h2 className="font-display text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[0.95] tracking-[-0.03em] text-cream-50 text-balance">
                  Simple ordering,
                  <br />
                  <span className="italic font-normal text-tangerine-300">reliable delivery</span>
                </h2>
                <p className="mt-4 text-[16px] md:text-[17px] leading-[1.6] text-cream-100/70 text-balance">
                  No complicated checkout. Just WhatsApp, quality sourcing, and doorstep delivery for your foodstuff needs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="hidden md:flex items-center gap-3 text-[12px] tracking-wide uppercase text-cream-100/50">
                <span>4 steps</span>
                <span className="h-px w-12 bg-cream-100/20" />
                <span>WhatsApp first</span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-[1px] overflow-hidden rounded-[28px] bg-white/10 p-[1px] md:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((item, index) => (
              <Reveal key={item.step} delay={index * 120} className="h-full">
                <div className="group relative flex h-full flex-col bg-emerald-900 p-7 md:p-8 transition-colors duration-500 hover:bg-emerald-800">
                  {/* Step number */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[56px] font-[700] leading-none tracking-[-0.04em] text-cream-50/10 group-hover:text-cream-50/20 transition-colors duration-500">
                      {item.step}
                    </span>
                    <div className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/60 transition-all duration-500 group-hover:bg-tangerine-500 group-hover:border-tangerine-500 group-hover:text-white">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-500 group-hover:translate-x-0.5">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-auto pt-16">
                    <h3 className="font-display text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] text-cream-50">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-cream-100/70">
                      {item.description}
                    </p>
                  </div>

                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-tangerine-500 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={400}>
            <div className="flex flex-col items-start gap-4 rounded-[20px] bg-white/5 border border-white/10 px-6 py-5 md:flex-row md:items-center md:justify-between">
              <p className="text-[13px] leading-[1.6] text-cream-100/60 max-w-2xl">
                Wording and process steps are easy to adjust once the actual business workflow is confirmed. This layout is built to evolve with verified information.
              </p>
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-tangerine-300">
                <span className="size-1.5 rounded-full bg-tangerine-400 animate-pulse" />
                WhatsApp conversion focused
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
