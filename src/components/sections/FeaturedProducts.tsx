import { FEATURED_PRODUCTS } from "@/lib/constants";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Reveal, StaggerContainer } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";

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
                description="A curated preview of foodstuff and provisions that D-Connect can source. Browse products to understand what is available, then enquire via WhatsApp."
              />
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={180}>
              <div className="rounded-[16px] bg-white border border-charcoal-900/[0.06] p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:rounded-[18px] md:p-5">
                <div className="flex items-start gap-3">
                  <div className="flex size-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 flex-shrink-0 border border-emerald-100">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-charcoal-900">Browse first, order second</p>
                    <p className="mt-1 text-[12px] leading-[1.5] text-charcoal-600">
                      View product details to understand what D-Connect offers before enquiring via WhatsApp. No prices until verified.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <StaggerContainer stagger={60} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.slug}`}
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

                <div className="absolute left-2.5 top-2.5">
                  <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] uppercase text-charcoal-700 backdrop-blur-md shadow-sm border border-white/20">
                    {product.category}
                  </span>
                </div>

                <div className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-charcoal-900 text-white opacity-0 translate-y-1 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-3.5 md:p-4">
                <h3 className="font-display text-[16px] font-semibold leading-[1.25] tracking-[-0.01em] text-charcoal-900 md:text-[17px]">
                  {product.name}
                </h3>
                <p className="mt-1 line-clamp-2 text-[12.5px] leading-[1.5] text-charcoal-600">{product.description}</p>
                <div className="mt-auto flex items-center justify-between pt-3.5">
                  <span className="text-[10.5px] font-medium uppercase tracking-[0.06em] text-charcoal-500">View product</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cream-100 px-2.5 py-1 text-[11px] font-medium text-charcoal-700 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Details
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </StaggerContainer>

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 rounded-[18px] bg-white border border-charcoal-900/[0.06] px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:rounded-[20px] md:px-6">
            <div className="flex items-center gap-3.5">
              <div className="hidden size-10 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 md:flex">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3m3-3h1.5m-1.5 0 1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="font-display text-[15px] font-semibold tracking-[-0.01em] md:text-[16px]">Want to see all products?</p>
                <p className="text-[12.5px] leading-[1.4] text-charcoal-600 md:text-[13px]">
                  Browse the full catalogue of foodstuff and provisions available through D-Connect.
                </p>
              </div>
            </div>
            <Link
              href="/products"
              className="inline-flex h-10 w-full items-center justify-center rounded-full bg-charcoal-900 px-6 text-[13px] font-[600] text-cream-50 transition-colors hover:bg-emerald-900 md:w-auto"
            >
              Browse catalogue
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
