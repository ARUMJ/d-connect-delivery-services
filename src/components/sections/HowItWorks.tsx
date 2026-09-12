import { HOW_IT_WORKS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-emerald-950 text-cream-50 relative overflow-hidden">
      {/* Background pattern - more subtle */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-emerald-800/30 blur-[80px]" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-[400px] w-[400px] rounded-full bg-tangerine-500/10 blur-[80px]" />

      <div className="relative">
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2.5">
                  <span className="h-px w-8 bg-tangerine-400" />
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-300">Process</span>
                </div>
                <h2 className="font-display text-[30px] font-semibold leading-[0.95] tracking-[-0.03em] text-cream-50 text-balance sm:text-[34px] md:text-[42px] lg:text-[48px]">
                  Simple ordering,
                  <br />
                  <span className="italic font-normal text-tangerine-300">reliable delivery</span>
                </h2>
                <p className="mt-4 max-w-[52ch] text-[15px] leading-[1.6] text-cream-100/65 text-balance md:text-[16px]">
                  No complicated checkout. Just WhatsApp, quality sourcing, and doorstep delivery for your foodstuff needs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="hidden items-center gap-3 text-[11px] tracking-[0.08em] uppercase text-cream-100/40 md:flex">
                <span>4 steps</span>
                <span className="h-px w-10 bg-cream-100/15" />
                <span>WhatsApp first</span>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[20px] bg-white/10 p-px sm:grid-cols-2 lg:grid-cols-4 md:rounded-[24px]">
            {HOW_IT_WORKS.map((item, index) => (
              <Reveal key={item.step} delay={index * 80} className="h-full">
                <div className="group relative flex h-full min-h-[260px] flex-col bg-emerald-900 p-6 transition-colors duration-500 hover:bg-emerald-800 md:min-h-[300px] md:p-7">
                  {/* Step number - more visible */}
                  <div className="flex items-start justify-between">
                    <span className="font-display text-[48px] font-[700] leading-none tracking-[-0.04em] text-cream-50/[0.12] transition-colors duration-500 group-hover:text-cream-50/[0.18] md:text-[52px]">
                      {item.step}
                    </span>
                    <div className="flex size-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.04] text-white/50 transition-all duration-500 group-hover:bg-tangerine-500 group-hover:border-tangerine-500 group-hover:text-white group-hover:scale-105">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </div>
                  </div>

                  <div className="mt-auto pt-12 md:pt-16">
                    <h3 className="font-display text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] text-cream-50 md:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-[1.6] text-cream-100/65 md:text-[14px]">{item.description}</p>
                  </div>

                  {/* Progress line */}
                  <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-tangerine-500 to-tangerine-400 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="flex flex-col items-start gap-3 rounded-[14px] bg-white/[0.04] border border-white/[0.08] px-5 py-4 backdrop-blur-sm md:flex-row md:items-center md:justify-between md:rounded-[16px]">
              <p className="max-w-2xl text-[12.5px] leading-[1.6] text-cream-100/50 md:text-[13px]">
                Wording and process steps are easy to adjust once the actual business workflow is confirmed. Built to evolve with verified information.
              </p>
              <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-tangerine-300/80">
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
