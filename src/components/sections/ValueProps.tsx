"use client";

import { VALUE_PROPS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const icons: Record<string, React.ReactNode> = {
  clock: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  ),
  shield: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  package: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  ),
  truck: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.5m-15 0h1.5m1.5 0a1.5 1.5 0 0 1 3 0m-3 0a1.5 1.5 0 0 0 3 0M15 12h3.75m-3.75 0V6.75m0 5.25v-1.5m0 1.5h-1.5m1.5 0H21M3.75 6.75h1.5m-1.5 0V18m0-11.25V6a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 16.5 6v.75m-11.25 0h9" />
    </svg>
  ),
};

export function ValueProps() {
  return (
    <Section id="about" className="bg-white border-y border-charcoal-900/10">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <Reveal>
            <div className="sticky top-28">
              <div className="mb-4 inline-flex items-center gap-2">
                <span className="h-px w-8 bg-tangerine-500" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-600">Why D-Connect</span>
              </div>
              <h2 className="font-display text-[32px] md:text-[40px] font-semibold leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance">
                Built for
                <br />
                Nigerian households
                <br />
                <span className="italic font-normal text-emerald-800">who buy in bulk</span>
              </h2>
              <p className="mt-4 max-w-[44ch] text-[15px] leading-[1.6] text-charcoal-600 text-balance">
                D-Connect focuses on what matters: convenient ordering, reliable sourcing, and doorstep delivery for your foodstuff and provisions. No market stress.
              </p>

              <div className="mt-8 hidden lg:block">
                <div className="rounded-[20px] bg-cream-50 border border-charcoal-900/10 p-5">
                  <p className="text-[13px] font-medium text-charcoal-900">Factual & general claims only</p>
                  <p className="mt-1.5 text-[12.5px] leading-[1.5] text-charcoal-600">
                    We keep value propositions honest. No invented statistics, awards, or testimonials — just clear benefits you can verify.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-[1px] overflow-hidden rounded-[24px] bg-charcoal-900/10 p-[1px] sm:grid-cols-2">
            {VALUE_PROPS.map((prop, index) => (
              <Reveal key={prop.title} delay={index * 100}>
                <div className="group relative flex h-full flex-col bg-cream-50 p-6 md:p-7 transition-colors duration-500 hover:bg-white">
                  <div className="flex size-10 items-center justify-center rounded-full bg-charcoal-900 text-cream-50 transition-all duration-500 group-hover:bg-emerald-900 group-hover:scale-105">
                    {icons[prop.icon]}
                  </div>
                  <h3 className="mt-6 font-display text-[20px] font-semibold tracking-[-0.01em] text-charcoal-900">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-charcoal-600">
                    {prop.description}
                  </p>

                  {/* Hover accent */}
                  <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-tangerine-500 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>

          {/* Extra context */}
          <Reveal delay={400}>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-900 px-5 py-4 text-cream-50">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-cream-100/60">Ordering</p>
                <p className="mt-1 font-display text-[15px] font-medium leading-[1.2]">Via WhatsApp — familiar & quick</p>
              </div>
              <div className="rounded-2xl bg-tangerine-50 border border-tangerine-100 px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-tangerine-600/70">Focus</p>
                <p className="mt-1 font-display text-[15px] font-medium leading-[1.2] text-charcoal-900">Foodstuff & provisions, not cooked meals</p>
              </div>
              <div className="rounded-2xl bg-charcoal-900 px-5 py-4 text-cream-50">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-cream-100/60">Experience</p>
                <p className="mt-1 font-display text-[15px] font-medium leading-[1.2]">Premium, modern Nigerian delivery brand</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
