"use client";

import { CATEGORIES } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";

export function Categories() {
  return (
    <Section id="products" className="bg-white">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeader
              eyebrow="Categories"
              title={
                <>
                  Everything you need,
                  <br />
                  <span className="italic font-normal text-emerald-800">in bulk</span>
                </>
              }
              description="From staple grains to everyday provisions. Browse our foodstuff categories and order conveniently via WhatsApp. Availability confirmed on request."
            />
          </Reveal>

          <Reveal delay={200}>
            <a
              href={getWhatsAppUrl(MESSAGES.browseProducts)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-charcoal-900 hover-underline self-start md:self-auto"
            >
              View all products
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        <StaggerContainer stagger={90} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {CATEGORIES.map((cat, index) => {
            // Make first and last larger for visual interest
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge ? "lg:col-span-5" : index === 1 ? "lg:col-span-7" : "lg:col-span-4";

            return (
              <a
                key={cat.id}
                href={getWhatsAppUrl(MESSAGES.category(cat.name))}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[24px] md:rounded-[28px] bg-cream-50 border border-charcoal-900/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-medium hover:-translate-y-1 hover:border-charcoal-900/10 ${colSpan}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} - Nigerian foodstuff and provisions`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-charcoal-900/10 to-transparent" />

                  {/* Top badge */}
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <span className="inline-flex h-7 items-center rounded-full bg-white/90 px-3 text-[11px] font-semibold tracking-wide uppercase text-charcoal-900 backdrop-blur-md">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-white/90 text-charcoal-900 backdrop-blur-md transition-all duration-300 group-hover:bg-tangerine-500 group-hover:text-white">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:rotate-45">
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="relative p-5 md:p-6">
                  <h3 className="font-display text-[20px] md:text-[22px] font-semibold leading-[1.1] tracking-[-0.02em] text-charcoal-900">
                    {cat.name}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-[1.5] text-charcoal-600 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="mt-4 flex items-center gap-2 text-[12px] font-medium text-charcoal-900">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-900 px-3 py-1.5 text-cream-50 transition-colors group-hover:bg-emerald-900">
                      Enquire on WhatsApp
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-charcoal-400">• Bulk available</span>
                  </div>
                </div>
              </a>
            );
          })}
        </StaggerContainer>

        <Reveal>
          <div className="rounded-[20px] border border-dashed border-charcoal-900/15 bg-cream-50/50 px-6 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <p className="text-[13px] leading-[1.5] text-charcoal-600">
              <span className="font-semibold text-charcoal-900">Note:</span> Products shown are visual examples. Stock and availability confirmed via WhatsApp. No prices are listed until verified by D-Connect.
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-emerald-800 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Prototype catalogue
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
