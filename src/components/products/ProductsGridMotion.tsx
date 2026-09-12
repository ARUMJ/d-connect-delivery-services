"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import type { FEATURED_PRODUCTS } from "@/lib/constants";

type Product = (typeof FEATURED_PRODUCTS)[number];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { ref, isInView } = useInView<HTMLAnchorElement>({ threshold: 0.12, once: true });
  const prefersReducedMotion = useReducedMotion();

  const isEven = index % 2 === 0;

  return (
    <Link
      ref={ref}
      href={`/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-[20px] bg-white border border-charcoal-900/[0.06] p-2 transition-all duration-300 hover:shadow-[0_10px_28px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] hover:border-charcoal-900/10 will-change-transform"
      style={{
        opacity: isInView ? 1 : 0,
        clipPath: prefersReducedMotion ? undefined : isInView ? "inset(0 0 0 0 round 20px)" : "inset(0 0 15% 0 round 20px)",
        transform: isInView
          ? "translateY(0) scale(1)"
          : `translateY(${isEven ? 24 : 16}px) scale(0.96)`,
        transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), clip-path 800ms cubic-bezier(0.77,0,0.175,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-cream-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03] will-change-transform"
          sizes="400px"
          style={{
            transform: isInView ? "scale(1)" : "scale(1.06)",
            transition: prefersReducedMotion ? "none" : "transform 900ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${index * 60 + 100}ms`,
          }}
        />
        <div className="absolute left-2.5 top-2.5">
          <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase text-charcoal-700 backdrop-blur-md shadow-sm border border-white/20">
            {product.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-3.5">
        <h3
          className="font-display text-[16px] font-semibold leading-[1.25] tracking-[-0.01em] text-charcoal-900 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(8px)",
            transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: `${index * 60 + 180}ms`,
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
            transitionDelay: `${index * 60 + 220}ms`,
          }}
        >
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3.5">
          <span className="text-[10.5px] font-medium uppercase tracking-[0.06em] text-charcoal-500">View details</span>
          <span className="inline-flex size-7 items-center justify-center rounded-full bg-cream-100 text-charcoal-700 transition-colors group-hover:bg-emerald-900 group-hover:text-white">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProductsGridMotion({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  );
}

export function ProductsHeroMotion({ children }: { children: React.ReactNode }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        transition: prefersReducedMotion ? "none" : "opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}
