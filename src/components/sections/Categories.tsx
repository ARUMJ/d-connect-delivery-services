import { CATEGORIES } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";

export function Categories() {
  return (
    <Section id="products" className="bg-white">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
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

          <Reveal delay={180}>
            <a
              href={getWhatsAppUrl(MESSAGES.browseProducts)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 self-start rounded-full border border-charcoal-900/10 bg-cream-50 px-5 py-2.5 text-[13.5px] font-medium text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 md:self-auto"
            >
              View all products
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </Reveal>
        </div>

        {/* Refined balanced grid: 6+6, 4+4+4, 6+6 = 7 items */}
        <StaggerContainer stagger={70} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {CATEGORIES.map((cat, index) => {
            // Balanced layout
            const getColSpan = () => {
              if (index === 0 || index === 1) return "lg:col-span-6"; // First row 6+6
              if (index >= 2 && index <= 4) return "lg:col-span-4"; // Second row 4+4+4
              return "lg:col-span-6"; // Last row 6+6
            };

            return (
              <a
                key={cat.id}
                href={getWhatsAppUrl(MESSAGES.category(cat.name))}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col overflow-hidden rounded-[20px] md:rounded-[24px] bg-cream-50 border border-charcoal-900/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:border-charcoal-900/10 ${getColSpan()}`}
              >
                <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3]">
                  <Image
                    src={cat.image}
                    alt={`${cat.name} - Nigerian foodstuff and provisions`}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/55 via-charcoal-900/5 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top meta */}
                  <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
                    <span className="inline-flex h-6 items-center rounded-full bg-white/90 px-2.5 text-[10px] font-semibold tracking-[0.08em] uppercase text-charcoal-800 backdrop-blur-md shadow-sm border border-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="hidden sm:inline-flex h-6 items-center rounded-full bg-charcoal-900/80 px-2.5 text-[10px] font-medium tracking-wide text-cream-50 backdrop-blur-md">
                      Bulk available
                    </span>
                  </div>

                  {/* Arrow */}
                  <div className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full bg-white/90 text-charcoal-900 backdrop-blur-md shadow-sm border border-white/20 transition-all duration-300 group-hover:bg-tangerine-500 group-hover:text-white group-hover:border-tangerine-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:rotate-45"
                    >
                      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                <div className="relative flex flex-1 flex-col p-4 md:p-5">
                  <h3 className="font-display text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-charcoal-900 md:text-[19px]">
                    {cat.name}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-[13px] leading-[1.5] text-charcoal-600">
                    {cat.description}
                  </p>
                  <div className="mt-auto flex items-center gap-2 pt-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-900 px-3 py-1.5 text-[11px] font-medium text-cream-50 transition-colors group-hover:bg-emerald-900">
                      Enquire on WhatsApp
                      <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </StaggerContainer>

        <Reveal>
          <div className="flex flex-col gap-3 rounded-[16px] border border-dashed border-charcoal-900/12 bg-cream-50/60 px-5 py-4 md:flex-row md:items-center md:justify-between md:rounded-[18px] md:px-6">
            <p className="text-[12.5px] leading-[1.55] text-charcoal-600 md:text-[13px]">
              <span className="font-semibold text-charcoal-900">Note:</span> Products shown are visual examples. Stock and availability confirmed via WhatsApp. No prices listed until verified.
            </p>
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.06em] text-emerald-800 border border-emerald-100 whitespace-nowrap">
              <span className="size-1.5 rounded-full bg-emerald-500" /> Prototype catalogue
            </span>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
