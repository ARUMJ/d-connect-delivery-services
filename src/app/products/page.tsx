import { CATEGORIES, FEATURED_PRODUCTS } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ProductsGridMotion, ProductsHeroMotion } from "@/components/products/ProductsGridMotion";

export const metadata: Metadata = {
  title: "Foodstuff & Provisions Catalogue",
  description:
    "Browse the foodstuff and provisions available through D-Connect Delivery Services. Rice, garri, beans, oils, spices and household provisions — bulk-friendly, doorstep delivery via WhatsApp.",
  openGraph: {
    title: "Foodstuff & Provisions Catalogue | D-Connect Delivery Services",
    description:
      "Browse rice, garri, beans, oils, spices and provisions available through D-Connect. Bulk foodstuff delivery via WhatsApp.",
  },
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const activeCategory = params.category;

  const filteredProducts = activeCategory
    ? FEATURED_PRODUCTS.filter((p) => p.categorySlug === activeCategory)
    : FEATURED_PRODUCTS;

  const activeCategoryData = activeCategory ? CATEGORIES.find((c) => c.slug === activeCategory) : null;

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <Header />
      <main className="flex-1">
        <Section className="bg-cream-50 !pb-8 pt-28 md:pt-32">
          <ProductsHeroMotion>
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2.5">
                <span className="h-px w-8 bg-tangerine-500" />
                <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-tangerine-600">Catalogue</span>
              </div>
              <h1 className="font-display text-[36px] font-[700] leading-[0.9] tracking-[-0.04em] text-charcoal-900 md:text-[52px] lg:text-[60px]">
                Foodstuff
                <br />
                <span className="italic font-[400] text-emerald-900">& Provisions</span>
              </h1>
              <p className="mt-4 max-w-[52ch] text-[16px] leading-[1.6] text-charcoal-600 text-balance md:text-[17px]">
                Browse the foodstuff and provisions available through D-Connect. From bulk rice and garri to oils, spices and household essentials. View products first, then enquire via WhatsApp — no prices until verified.
              </p>
            </div>
          </ProductsHeroMotion>
        </Section>

        <Section className="!py-8 md:!py-10 bg-white border-y border-charcoal-900/[0.06]">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-[18px] font-semibold tracking-[-0.01em] text-charcoal-900 md:text-[20px]">Browse by category</h2>
              {activeCategory && (
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 rounded-full bg-charcoal-900 px-3.5 py-1.5 text-[12px] font-medium text-cream-50"
                >
                  Clear filter
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </Link>
              )}
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
              <Link
                href="/products"
                className={`group flex flex-col items-center gap-2.5 rounded-[16px] border p-3 transition-all md:p-4 ${
                  !activeCategory
                    ? "bg-emerald-900 border-emerald-900 text-cream-50"
                    : "bg-cream-50 border-charcoal-900/[0.06] hover:border-charcoal-900/15 hover:bg-white"
                }`}
              >
                <span className="font-display text-[13px] font-semibold">All</span>
                <span className={`text-[11px] ${!activeCategory ? "text-cream-100/70" : "text-charcoal-500"}`}>
                  {FEATURED_PRODUCTS.length} items
                </span>
              </Link>
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.slug}`}
                  className={`group flex flex-col gap-2.5 rounded-[16px] border p-3 transition-all md:p-4 ${
                    activeCategory === cat.slug
                      ? "bg-emerald-900 border-emerald-900 text-cream-50 shadow-soft"
                      : "bg-cream-50 border-charcoal-900/[0.06] hover:border-charcoal-900/15 hover:bg-white hover:shadow-sm"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-white">
                    <Image src={cat.image} alt={cat.name} fill className="object-cover" sizes="120px" />
                  </div>
                  <div className="text-left w-full">
                    <p className="font-display text-[12.5px] font-semibold leading-[1.2] md:text-[13px]">{cat.name}</p>
                    <p className={`mt-0.5 text-[10.5px] leading-[1.3] line-clamp-2 ${activeCategory === cat.slug ? "text-cream-100/70" : "text-charcoal-500"}`}>
                      {cat.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {activeCategoryData && (
              <div className="rounded-[14px] bg-emerald-50 border border-emerald-100 px-4 py-3 flex items-center gap-3">
                <div className="size-8 rounded-full bg-emerald-900 text-cream-50 flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-emerald-900">{activeCategoryData.name}</p>
                  <p className="text-[12px] text-emerald-700/70">{activeCategoryData.description} • Showing {filteredProducts.length} products</p>
                </div>
              </div>
            )}
          </div>
        </Section>

        <Section className="bg-cream-50">
          <div className="flex flex-col gap-6">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-charcoal-900 md:text-[22px]">
                {activeCategory ? `${activeCategoryData?.name || "Products"}` : "All products"}
                <span className="ml-2 text-[13px] font-normal text-charcoal-500">({filteredProducts.length})</span>
              </h2>
              <p className="hidden text-[12px] text-charcoal-500 md:block">View first → Order second</p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="rounded-[20px] bg-white border border-charcoal-900/[0.06] p-12 text-center">
                <p className="font-display text-[18px] font-semibold text-charcoal-900">No products in this category yet</p>
                <p className="mt-2 text-[13px] text-charcoal-600">This category is being stocked. Check back or browse all products.</p>
                <Link href="/products" className="mt-6 inline-flex h-10 items-center justify-center rounded-full bg-charcoal-900 px-6 text-[13px] font-medium text-cream-50">
                  Browse all
                </Link>
              </div>
            ) : (
              <ProductsGridMotion products={filteredProducts} />
            )}

            <div className="mt-8 rounded-[16px] border border-dashed border-charcoal-900/12 bg-white/60 px-5 py-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <p className="text-[12.5px] leading-[1.5] text-charcoal-600">
                <span className="font-semibold text-charcoal-900">Prototype catalogue:</span> Images are temporary and clearly represent each foodstuff. Real product photos, prices, weights and availability will be added once verified by D-Connect.
              </p>
              <Link href="/" className="inline-flex h-9 items-center justify-center rounded-full bg-cream-50 border border-charcoal-900/10 px-4 text-[12px] font-medium text-charcoal-900 hover:bg-charcoal-900 hover:text-cream-50 transition-colors shrink-0">
                Back to home
              </Link>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
