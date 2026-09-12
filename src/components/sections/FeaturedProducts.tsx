"use client";

import { FEATURED_PRODUCTS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";

export function FeaturedProducts() {
  return (
    <Section id="featured" className="bg-cream-50">
      <div className="flex flex-col gap-10 md:gap-14">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeader
                eyebrow="Featured"
                title={
                  <>
                    Real Nigerian
                    <br />
                    foodstuff selection
                  </>
                }
                description="A curated preview of foodstuff and provisions that D-Connect can source. Presented as a visual prototype — availability and details confirmed via WhatsApp."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={200}>
              <div className="rounded-[20px] bg-white border border-charcoal-900/10 p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-tangerine-50 text-tangerine-600 flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal-900">No prices fabricated</p>
                    <p className="mt-1 text-[12.5px] leading-[1.5] text-charcoal-600">
                      This section is intentionally price-free. Real pricing, weights, and stock levels will be added once verified by the business.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <StaggerContainer stagger={80} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={getWhatsAppUrl(MESSAGES.product(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[24px] bg-white border border-charcoal-900/[0.06] p-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-medium hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-cream-100">
                <Image
                  src={product.image}
                  alt={`${product.name} - Nigerian foodstuff`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Category tag */}
                <div className="absolute left-3 top-3">
                  <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-wide uppercase text-charcoal-700 backdrop-blur-md">
                    {product.category}
                  </span>
                </div>

                {/* Quick action */}
                <div className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full bg-charcoal-900 text-white opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="font-display text-[17px] font-semibold leading-[1.2] tracking-[-0.01em] text-charcoal-900">
                  {product.name}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.5] text-charcoal-600">
                  {product.description}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.06em] text-charcoal-500">
                    Enquire for availability
                  </span>
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-cream-100 text-charcoal-600 group-hover:bg-tangerine-500 group-hover:text-white transition-colors">
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-[24px] bg-emerald-900 px-6 py-6 text-cream-50 md:flex-row md:px-8">
            <div className="flex items-center gap-4">
              <div className="hidden size-12 items-center justify-center rounded-full bg-white/10 md:flex">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3m3-3h1.5m-1.5 0 1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-[16px] font-semibold tracking-[-0.01em]">Need a custom bulk list?</p>
                <p className="text-[13px] text-cream-100/70">Send your full foodstuff list via WhatsApp for a tailored quote.</p>
              </div>
            </div>
            <a
              href={getWhatsAppUrl(MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center justify-center rounded-full bg-cream-50 px-6 text-[13px] font-medium text-emerald-900 transition-colors hover:bg-white w-full md:w-auto"
            >
              Send bulk list
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
