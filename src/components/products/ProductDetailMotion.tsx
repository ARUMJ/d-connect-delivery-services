"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import type { FEATURED_PRODUCTS, CATEGORIES } from "@/lib/constants";

type Product = (typeof FEATURED_PRODUCTS)[number];
type Category = (typeof CATEGORIES)[number];

export function ProductImageMotion({ product }: { product: Product }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="flex flex-col gap-4">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white border border-charcoal-900/[0.06] p-2 md:rounded-[28px] will-change-transform"
        style={{
          clipPath: prefersReducedMotion ? undefined : isInView ? "inset(0 0 0 0 round 28px)" : "inset(0 0 20% 0 round 28px)",
          opacity: isInView ? 1 : 0,
          transform: isInView ? "scale(1)" : "scale(0.96)",
          transition: prefersReducedMotion ? "none" : "clip-path 900ms cubic-bezier(0.77,0,0.175,1), opacity 700ms ease, transform 900ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="relative h-full w-full overflow-hidden rounded-[16px] md:rounded-[20px] bg-cream-100">
          <Image
            src={product.image}
            alt={`${product.name} - ${product.category} - Nigerian foodstuff`}
            fill
            className="object-cover will-change-transform"
            sizes="(max-width: 1024px) 100vw, 60vw"
            priority
            style={{
              transform: isInView ? "scale(1)" : "scale(1.08)",
              transition: prefersReducedMotion ? "none" : "transform 1100ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "100ms",
            }}
          />
        </div>
        <div
          className="absolute left-5 top-5 flex gap-2 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(-8px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "300ms",
          }}
        >
          <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-charcoal-800 backdrop-blur-md shadow-sm border border-white/20">
            {product.category}
          </span>
          <span className="inline-flex rounded-full bg-emerald-900/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-cream-50 backdrop-blur-md shadow-sm">Prototype</span>
        </div>
      </div>

      <div
        className="rounded-[14px] border border-dashed border-charcoal-900/10 bg-cream-100/50 px-4 py-3 flex gap-3 will-change-transform"
        style={{
          opacity: isInView ? 1 : 0,
          transform: isInView ? "translateY(0)" : "translateY(12px)",
          transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: "400ms",
        }}
      >
        <div className="size-8 rounded-full bg-white border border-charcoal-900/10 flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <p className="text-[12px] leading-[1.5] text-charcoal-600">
          <span className="font-semibold text-charcoal-900">Image note:</span> Temporary prototype image that clearly represents {product.name}. Will be replaced with client&apos;s real product photograph. No prices, weights or stock levels invented.
        </p>
      </div>
    </div>
  );
}

export function ProductDetailsMotion({ product, category }: { product: Product; category?: Category }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div ref={ref} className="lg:sticky lg:top-28">
      <div className="flex flex-col gap-6">
        <div>
          {category && (
            <div
              className="will-change-transform"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateX(0)" : "translateX(-12px)",
                transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <Link href={`/products?category=${category.slug}`} className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase text-tangerine-600 hover:text-tangerine-700 transition-colors">
                <span className="h-px w-6 bg-tangerine-500" />
                {category.name}
              </Link>
            </div>
          )}
          <h1 className="mt-3 font-display text-[32px] font-bold leading-[0.95] tracking-[-0.03em] text-charcoal-900 md:text-[40px] overflow-hidden">
            <span
              className="block will-change-transform"
              style={{
                transform: isInView ? "translateY(0)" : "translateY(100%)",
                transition: prefersReducedMotion ? "none" : "transform 800ms cubic-bezier(0.77,0,0.175,1)",
                transitionDelay: "80ms",
              }}
            >
              {product.name}
            </span>
          </h1>
          <p
            className="mt-3 text-[15px] leading-[1.6] text-charcoal-600 will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(12px)",
              transition: prefersReducedMotion ? "none" : "opacity 700ms ease, transform 700ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "180ms",
            }}
          >
            {product.longDescription || product.description}
          </p>
        </div>

        <div
          className="rounded-[16px] bg-white border border-charcoal-900/[0.06] p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "260ms",
          }}
        >
          <h3 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-charcoal-500">What you should know</h3>
          <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.5] text-charcoal-700">
            {[
              "Bulk-friendly — suitable for household stocking",
              "Quality-checked sourcing from trusted suppliers",
              "Availability and details confirmed via WhatsApp",
              "No prices listed until verified by D-Connect",
            ].map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 will-change-transform"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? "translateX(0)" : "translateX(-8px)",
                  transition: prefersReducedMotion ? "none" : "opacity 500ms ease, transform 500ms cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: `${320 + i * 60}ms`,
                }}
              >
                <span className={`mt-1 size-1.5 rounded-full flex-shrink-0 ${i === 3 ? "bg-tangerine-500" : "bg-emerald-500"}`} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="flex flex-col gap-3 will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(12px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "560ms",
          }}
        >
          <a
            href={getWhatsAppUrl(MESSAGES.product(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-tangerine-500 px-8 text-[15px] font-[600] text-white shadow-[0_8px_24px_rgba(255,107,24,0.28)] transition-all hover:bg-tangerine-600 hover:shadow-[0_12px_32px_rgba(255,107,24,0.32)]"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.26-1.38a9.806 9.806 0 0 0 4.69 1.19h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.87-6.99Zm-7.01 15.24h-.01a8.167 8.167 0 0 1-4.16-1.14l-.3-.18-3.12.82.83-3.04-.2-.31a8.178 8.178 0 0 1-1.26-4.39c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.26 8.23Zm4.52-6.17c-.25-.12-1.47-.73-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.65.81-.8.97-.15.17-.3.19-.55.07-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.75.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.29Z"
                fill="currentColor"
              />
            </svg>
            Order {product.name} on WhatsApp
          </a>
          <Link
            href="/products"
            className="inline-flex h-[48px] w-full items-center justify-center gap-2 rounded-full border border-charcoal-900/10 bg-white px-6 text-[14px] font-medium text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-cream-50"
          >
            Back to catalogue
          </Link>
          <p className="text-center text-[11px] text-charcoal-500">View first → Order second • Fast WhatsApp response</p>
        </div>

        {category && (
          <div
            className="rounded-[14px] bg-cream-100 border border-cream-200 p-4 flex gap-3 will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(8px)",
              transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "640ms",
            }}
          >
            <div className="size-12 overflow-hidden rounded-[10px] bg-white flex-shrink-0">
              <Image src={category.image} alt={category.name} width={48} height={48} className="h-full w-full object-cover" />
            </div>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-500">Category</p>
              <p className="font-display text-[14px] font-semibold text-charcoal-900">{category.name}</p>
              <p className="text-[12px] leading-[1.4] text-charcoal-600">{category.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function RelatedProductsMotion({ products, categoryName, categorySlug }: { products: Product[]; categoryName: string; categorySlug: string }) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  const prefersReducedMotion = useReducedMotion();

  if (products.length === 0) return null;

  return (
    <div ref={ref} className="mt-16 md:mt-20">
      <div className="flex items-center justify-between">
        <h2
          className="font-display text-[20px] font-semibold tracking-[-0.02em] text-charcoal-900 md:text-[22px] will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(12px)",
            transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 600ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          More from {categoryName}
        </h2>
        <Link
          href={`/products?category=${categorySlug}`}
          className="text-[13px] font-medium text-charcoal-900 hover-underline will-change-transform"
          style={{
            opacity: isInView ? 1 : 0,
            transition: prefersReducedMotion ? "none" : "opacity 600ms ease",
            transitionDelay: "100ms",
          }}
        >
          View all
        </Link>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {products.map((r, index) => (
          <Link
            key={r.id}
            href={`/products/${r.slug}`}
            className="group flex gap-3 rounded-[14px] bg-white border border-charcoal-900/[0.06] p-3 hover:border-charcoal-900/10 hover:shadow-sm transition-all will-change-transform"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(16px)",
              transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: `${index * 80 + 120}ms`,
            }}
          >
            <div className="size-16 overflow-hidden rounded-[10px] bg-cream-100 flex-shrink-0">
              <Image src={r.image} alt={r.name} width={64} height={64} className="h-full w-full object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-display text-[14px] font-semibold leading-[1.2] text-charcoal-900 truncate">{r.name}</p>
              <p className="mt-1 text-[12px] leading-[1.4] text-charcoal-600 line-clamp-2">{r.description}</p>
              <p className="mt-1.5 text-[11px] font-medium text-emerald-800 group-hover:text-emerald-900">View →</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
