import { FEATURED_PRODUCTS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";

export function FeaturedProducts() {
  return (
    <Section id="featured" className="bg-cream-50">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
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
            <Reveal delay={180}>
              <div className="rounded-[16px] bg-white border border-charcoal-900/[0.06] p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:rounded-[18px] md:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-tangerine-50 text-tangerine-600 flex-shrink-0 border border-tangerine-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal-900">No prices fabricated</p>
                    <p className="mt-1 text-[12px] leading-[1.5] text-charcoal-600">
                      Price-free prototype. Real pricing, weights, and stock levels added once verified by the business.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <StaggerContainer stagger={60} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <a
              key={product.id}
              href={getWhatsAppUrl(MESSAGES.product(product.name))}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white border border-charcoal-900/[0.06] p-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] hover:border-charcoal-900/10 md:rounded-[22px]"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-cream-100 md:rounded-[16px]">
                <Image
                  src={product.image}
                  alt={`${product.name} - Nigerian foodstuff`}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Category tag - refined */}
                <div className="absolute left-2.5 top-2.5">
                  <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] uppercase text-charcoal-700 backdrop-blur-md shadow-sm border border-white/20">
                    {product.category}
                  </span>
                </div>

                {/* Quick action - WhatsApp icon */}
                <div className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-charcoal-900 text-white opacity-0 translate-y-1 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38a9.806 9.806 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.87-6.99Zm-7.01 15.24h-.01a8.167 8.167 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.178 8.178 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <h3 className="font-display text-[16px] font-semibold leading-[1.25] tracking-[-0.01em] text-charcoal-900 md:text-[17px]">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[12.5px] leading-[1.5] text-charcoal-600">
                  {product.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-3.5">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.06em] text-charcoal-500">
                    Enquire for availability
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-medium text-charcoal-700 transition-colors group-hover:bg-tangerine-500 group-hover:text-white">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Order
                  </span>
                </div>
              </div>
            </a>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 rounded-[18px] bg-emerald-900 px-5 py-5 text-cream-50 shadow-[0_8px_24px_rgba(14,51,39,0.15)] md:flex-row md:items-center md:rounded-[20px] md:px-6">
            <div className="flex items-center gap-3.5">
              <div className="hidden size-10 items-center justify-center rounded-full bg-white/10 border border-white/10 md:flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3m3-3h1.5m-1.5 0 1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-[15px] font-semibold tracking-[-0.01em] md:text-[16px]">Need a custom bulk list?</p>
                <p className="text-[12.5px] leading-[1.4] text-cream-100/70 md:text-[13px]">
                  Send your full foodstuff list via WhatsApp for a tailored quote.
                </p>
              </div>
            </div>
            <a
              href={getWhatsAppUrl(MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-cream-50 px-6 text-[13px] font-[600] text-emerald-900 transition-colors hover:bg-white md:w-auto"
            >
              Send bulk list
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
