"use client";

import { CATEGORIES } from "@/lib/constants";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import Link from "next/link";

function CategoryHeading() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
      <div className="max-w-3xl">
        <div
          className="mb-3.5 inline-flex items-center gap-2.5 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateX(0)" : "translateX(-16px)",
            transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="h-px w-7 bg-tangerine-500 md:w-8" />
          <span className="text-[10.5px] font-semibold tracking-[0.14em] uppercase text-tangerine-600 md:text-[11px]">Categories</span>
        </div>
        <h2
          className="font-display text-[28px] font-[600] leading-[0.95] tracking-[-0.03em] text-charcoal-900 text-balance sm:text-[32px] md:text-[40px] lg:text-[46px] xl:text-[50px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(24px)",
            transition: prefersReducedMotion ? "none" : "opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.77,0,0.175,1)",
            transitionDelay: "80ms",
          }}
        >
          Everything you need,
          <br />
          <span className="italic font-normal text-emerald-800">in bulk</span>
        </h2>
        <p
          className="mt-3.5 max-w-[52ch] text-[15px] leading-[1.6] text-charcoal-600 text-balance md:mt-4 md:text-[16px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(16px)",
            transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "160ms",
          }}
        >
          From staple grains to everyday provisions. Browse our foodstuff categories and explore products before ordering via WhatsApp.
        </p>
      </div>

      <div
        className="will-change-transform self-start md:self-auto"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0) scale(1)" : "translateY(12px) scale(0.98)",
          transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: "240ms",
        }}
      >
        <Link
          href="/products"
          className="group inline-flex items-center gap-2 self-start rounded-full border border-charcoal-900/10 bg-cream-50 px-5 py-2.5 text-[13.5px] font-medium text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 md:self-auto"
        >
          View all products
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
            <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

function CategoryCard({ cat, index }: { cat: (typeof CATEGORIES)[number]; index: number }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.12, once: true });
  const prefersReducedMotion = useReducedMotion();

  const getColSpan = () => {
    if (index === 0 || index === 1) return "lg:col-span-6";
    if (index >= 2 && index <= 4) return "lg:col-span-4";
    return "lg:col-span-6";
  };

  // Mixed direction stagger - same as Phase 3B intent
  const getInitialTransform = () => {
    if (prefersReducedMotion) return "translateY(0) translateX(0) scale(1)";
    if (index % 4 === 0) return `translateY(28px) translateX(-8px) scale(0.98)`;
    if (index % 4 === 1) return `translateY(20px) translateX(8px) scale(0.98)`;
    if (index % 4 === 2) return `translateY(32px) translateX(0) scale(0.98)`;
    return `translateY(24px) translateX(-6px) scale(0.98)`;
  };

  const isLeft = index % 2 === 0;
  const clipDirection = isLeft ? "inset(0 100% 0 0)" : "inset(0 0 0 100%)";

  return (
    <div
      ref={ref}
      className={`will-change-transform ${getColSpan()}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0) translateX(0) scale(1)" : getInitialTransform(),
        transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${index * 90}ms`,
      }}
    >
      <Link
        href={`/products?category=${cat.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[20px] md:rounded-[24px] bg-cream-50 border border-charcoal-900/[0.06] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] hover:-translate-y-[2px] hover:border-charcoal-900/10"
      >
        {/* Image container - robust pattern like FeaturedProducts, no ClipReveal inner wrapper */}
        <div
          className="relative aspect-[16/10] overflow-hidden sm:aspect-[4/3] bg-cream-100 will-change-[clip-path,transform]"
          style={{
            clipPath: prefersReducedMotion ? undefined : isInView ? "inset(0 0 0 0)" : clipDirection,
            transform: isInView ? "scale(1)" : "scale(0.96)",
            transition: prefersReducedMotion ? "none" : "clip-path 800ms cubic-bezier(0.77,0,0.175,1), transform 800ms cubic-bezier(0.77,0,0.175,1)",
            transitionDelay: `${index * 20}ms`,
          }}
        >
          {/* Inner image with scale + translate for polished reveal */}
          <div
            className="absolute inset-0 will-change-transform"
            style={{
              transform: isInView
                ? "scale(1) translateX(0) translateY(0)"
                : `scale(1.08) ${isLeft ? "translateX(-16px)" : "translateX(16px)"} translateY(8px)`,
              transition: prefersReducedMotion ? "none" : "transform 900ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 20 + 80}ms`,
            }}
          >
            <Image
              src={cat.image}
              alt={`${cat.name} - Nigerian foodstuff and provisions`}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/55 via-charcoal-900/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-charcoal-900/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="absolute left-3.5 top-3.5 flex items-center gap-2">
            <span className="inline-flex h-6 items-center rounded-full bg-white/90 px-2.5 text-[10px] font-semibold tracking-[0.08em] uppercase text-charcoal-800 backdrop-blur-md shadow-sm border border-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="hidden sm:inline-flex h-6 items-center rounded-full bg-charcoal-900/80 px-2.5 text-[10px] font-medium tracking-wide text-cream-50 backdrop-blur-md">
              Bulk available
            </span>
          </div>

          <div className="absolute right-3.5 top-3.5 flex size-8 items-center justify-center rounded-full bg-white/90 text-charcoal-900 backdrop-blur-md shadow-sm border border-white/20 transition-all duration-300 group-hover:bg-emerald-900 group-hover:text-white group-hover:border-emerald-900">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:rotate-45">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col p-4 md:p-5">
          <h3
            className="font-display text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-charcoal-900 md:text-[19px] will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 90 + 200}ms`,
            }}
          >
            {cat.name}
          </h3>
          <p
            className="mt-1.5 line-clamp-2 text-[13px] leading-[1.5] text-charcoal-600 will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 90 + 260}ms`,
            }}
          >
            {cat.description}
          </p>
          <div className="mt-auto flex items-center gap-2 pt-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-900 px-3 py-1.5 text-[11px] font-medium text-cream-50 transition-colors group-hover:bg-emerald-900">
              Browse {cat.name}
              <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Categories() {
  return (
    <Section id="products" className="bg-white">
      <div className="flex flex-col gap-10 md:gap-12 lg:gap-14">
        <CategoryHeading />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {CATEGORIES.map((cat, index) => (
            <CategoryCard key={cat.id} cat={cat} index={index} />
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col gap-3 rounded-[16px] border border-dashed border-charcoal-900/12 bg-cream-50/60 px-5 py-4 md:flex-row md:items-center md:justify-between md:rounded-[18px] md:px-6">
            <p className="text-[12.5px] leading-[1.55] text-charcoal-600 md:text-[13px]">
              <span className="font-semibold text-charcoal-900">Note:</span> Products shown use temporary prototype imagery that clearly represents each foodstuff. Real product photos will replace these once provided.
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
