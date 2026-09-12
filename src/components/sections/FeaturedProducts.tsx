"use client";

import { FEATURED_PRODUCTS } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useParallaxLayer } from "@/hooks/useParallax";
import Image from "next/image";
import Link from "next/link";

function FeaturedHeading() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end lg:gap-8">
      <div className="lg:col-span-7">
        <div className="max-w-[48rem]">
          <div
            className="mb-3.5 inline-flex items-center gap-2.5 will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(-12px)",
              transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <span className="h-px w-7 bg-tangerine-500 md:w-8" />
            <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-tangerine-600 md:text-[11px]">Featured</span>
          </div>
          <h2 className="font-display text-[28px] font-[600] leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[50px]">
            <span className="block overflow-hidden">
              <span
                className="block will-change-transform"
                style={{
                  transform: isInView ? "translateY(0)" : "translateY(100%)",
                  transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.77,0,0.175,1)",
                  transitionDelay: "80ms",
                }}
              >
                Real Nigerian
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="block will-change-transform"
                style={{
                  transform: isInView ? "translateY(0)" : "translateY(100%)",
                  transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.77,0,0.175,1)",
                  transitionDelay: "160ms",
                }}
              >
                foodstuff selection
              </span>
            </span>
          </h2>
          <p
            className="mt-3.5 max-w-[52ch] text-[15px] leading-[1.6] text-charcoal-600 text-balance md:mt-4 md:text-[16px] will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(16px)",
              transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "240ms",
            }}
          >
            A curated preview of foodstuff and provisions that D-Connect can source. Browse products to understand what is available, then enquire via WhatsApp.
          </p>
        </div>
      </div>
      <div className="lg:col-span-5">
        <div
          className="rounded-[16px] bg-white border border-charcoal-900/[0.06] p-4 shadow-[0_2px_16px_rgba(0,0,0,0.04)] md:rounded-[18px] md:p-5 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
            transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "320ms",
          }}
        >
          <div className="flex items-start gap-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 flex-shrink-0 border border-emerald-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-charcoal-900">Browse first, order second</p>
              <p className="mt-1 text-[12px] leading-[1.5] text-charcoal-600">View product details to understand what D-Connect offers before enquiring via WhatsApp. No prices until verified.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, index }: { product: (typeof FEATURED_PRODUCTS)[number]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const prefersReducedMotion = useReducedMotion();
  const parallaxRef = useParallaxLayer<HTMLDivElement>(0.08 + (index % 3) * 0.02);

  // Alternate entrance: even up, odd down slightly
  const getInitialTransform = () => {
    if (prefersReducedMotion) return "translateY(0) scale(1)";
    const isEven = index % 2 === 0;
    return isEven ? `translateY(${32 + (index % 4) * 4}px) scale(0.94)` : `translateY(${24 + (index % 4) * 6}px) scale(0.94)`;
  };

  return (
    <div
      ref={ref}
      className="will-change-transform"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) scale(1)" : getInitialTransform(),
        clipPath: isInView ? "inset(0 0 0 0)" : "inset(0 0 20% 0)",
        transitionProperty: "opacity, transform, clip-path",
        transitionDuration: "900ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${index * 70}ms`,
      }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white border border-charcoal-900/[0.06] p-2 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] hover:border-charcoal-900/10 md:rounded-[22px]"
      >
        <div ref={parallaxRef} className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-cream-100 md:rounded-[16px] will-change-transform">
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: isInView ? "scale(1)" : "scale(1.08)",
              transition: prefersReducedMotion ? "none" : "transform 1100ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 70 + 100}ms`,
            }}
          >
            <Image src={product.image} alt={`${product.name} - Nigerian foodstuff`} fill className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]" sizes="400px" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/15 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-2.5 top-2.5">
            <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold tracking-[0.04em] uppercase text-charcoal-700 backdrop-blur-md shadow-sm border border-white/20">{product.category}</span>
          </div>

          <div className="absolute right-2.5 top-2.5 flex size-7 items-center justify-center rounded-full bg-charcoal-900 text-white opacity-0 translate-y-1 shadow-sm transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-3.5 md:p-4">
          <h3
            className="font-display text-[16px] font-semibold leading-[1.25] tracking-[-0.01em] text-charcoal-900 md:text-[17px] will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 70 + 200}ms`,
            }}
          >
            {product.name}
          </h3>
          <p
            className="mt-1 line-clamp-2 text-[12.5px] leading-[1.5] text-charcoal-600 will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 70 + 260}ms`,
            }}
          >
            {product.description}
          </p>
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
    </div>
  );
}

export function FeaturedProducts() {
  const { ref: sectionRef, isInView: sectionInView } = useInView<HTMLDivElement>({ threshold: 0.05, once: true });

  return (
    <Section id="featured" className="bg-cream-50">
      <div ref={sectionRef} className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <FeaturedHeading />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div
          className="flex flex-col items-start justify-between gap-4 rounded-[18px] bg-white border border-charcoal-900/[0.06] px-5 py-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] md:flex-row md:items-center md:rounded-[20px] md:px-6 will-change-transform"
          style={{
            opacity: sectionInView ? 1 : 0,
            transform: sectionInView ? "translateY(0) scale(1)" : "translateY(24px) scale(0.98)",
            transition: "opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "600ms",
          }}
        >
          <div className="flex items-center gap-3.5">
            <div className="hidden size-10 items-center justify-center rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 md:flex">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3m3-3h1.5m-1.5 0 1.5-1.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <p className="font-display text-[15px] font-semibold tracking-[-0.01em] md:text-[16px]">Want to see all products?</p>
              <p className="text-[12.5px] leading-[1.4] text-charcoal-600 md:text-[13px]">Browse the full catalogue of foodstuff and provisions available through D-Connect.</p>
            </div>
          </div>
          <Link href="/products" className="inline-flex h-10 w-full items-center justify-center rounded-full bg-charcoal-900 px-6 text-[13px] font-[600] text-cream-50 transition-colors hover:bg-emerald-900 md:w-auto">
            Browse catalogue
          </Link>
        </div>
      </div>
    </Section>
  );
}
