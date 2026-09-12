import { FEATURED_PRODUCTS, CATEGORIES } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { getWhatsAppUrl, MESSAGES } from "@/lib/whatsapp";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return FEATURED_PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = FEATURED_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return { title: "Product not found" };

  return {
    title: `${product.name} | D-Connect Delivery Services`,
    description: product.longDescription || product.description,
    openGraph: {
      title: `${product.name} - ${product.category} | D-Connect`,
      description: product.description,
      images: [{ url: product.image, width: 800, height: 600, alt: product.name }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = FEATURED_PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  const category = CATEGORIES.find((c) => c.slug === product.categorySlug);
  const related = FEATURED_PRODUCTS.filter((p) => p.categorySlug === product.categorySlug && p.slug !== product.slug).slice(0, 3);

  return (
    <div className="flex min-h-screen flex-col bg-cream-50">
      <Header />
      <main className="flex-1">
        <Section className="pt-28 md:pt-32 !pb-6">
          <div className="flex items-center gap-2 text-[12px] text-charcoal-500">
            <Link href="/" className="hover:text-charcoal-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-charcoal-900 transition-colors">
              Products
            </Link>
            <span>/</span>
            <Link href={`/products?category=${product.categorySlug}`} className="hover:text-charcoal-900 transition-colors">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-charcoal-900 font-medium">{product.name}</span>
          </div>
        </Section>

        <Section className="!pt-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white border border-charcoal-900/[0.06] p-2 md:rounded-[28px] lg:aspect-[4/3]">
                <div className="relative h-full w-full overflow-hidden rounded-[16px] md:rounded-[20px] bg-cream-100">
                  <Image src={product.image} alt={`${product.name} - ${product.category} - Nigerian foodstuff`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" priority />
                </div>
                <div className="absolute left-5 top-5 flex gap-2">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-charcoal-800 backdrop-blur-md shadow-sm border border-white/20">
                    {product.category}
                  </span>
                  <span className="inline-flex rounded-full bg-emerald-900/90 px-3 py-1.5 text-[11px] font-medium tracking-wide text-cream-50 backdrop-blur-md shadow-sm">
                    Prototype
                  </span>
                </div>
              </div>

              <div className="mt-4 rounded-[14px] border border-dashed border-charcoal-900/10 bg-cream-100/50 px-4 py-3 flex gap-3">
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

            {/* Details */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-28">
                <div className="flex flex-col gap-6">
                  <div>
                    {category && (
                      <Link href={`/products?category=${category.slug}`} className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] uppercase text-tangerine-600 hover:text-tangerine-700 transition-colors">
                        <span className="h-px w-6 bg-tangerine-500" />
                        {category.name}
                      </Link>
                    )}
                    <h1 className="mt-3 font-display text-[32px] font-bold leading-[0.95] tracking-[-0.03em] text-charcoal-900 md:text-[40px]">{product.name}</h1>
                    <p className="mt-3 text-[15px] leading-[1.6] text-charcoal-600">{product.longDescription || product.description}</p>
                  </div>

                  <div className="rounded-[16px] bg-white border border-charcoal-900/[0.06] p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                    <h3 className="text-[12px] font-semibold tracking-[0.06em] uppercase text-charcoal-500">What you should know</h3>
                    <ul className="mt-3 space-y-2.5 text-[13.5px] leading-[1.5] text-charcoal-700">
                      <li className="flex gap-2.5">
                        <span className="mt-1 size-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>Bulk-friendly — suitable for household stocking</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="mt-1 size-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>Quality-checked sourcing from trusted suppliers</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="mt-1 size-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span>Availability and details confirmed via WhatsApp</span>
                      </li>
                      <li className="flex gap-2.5">
                        <span className="mt-1 size-1.5 rounded-full bg-tangerine-500 flex-shrink-0" />
                        <span>No prices listed until verified by D-Connect</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3">
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
                    <div className="rounded-[14px] bg-cream-100 border border-cream-200 p-4 flex gap-3">
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
            </div>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <div className="mt-16 md:mt-20">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-[20px] font-semibold tracking-[-0.02em] text-charcoal-900 md:text-[22px]">More from {product.category}</h2>
                <Link href={`/products?category=${product.categorySlug}`} className="text-[13px] font-medium text-charcoal-900 hover-underline">
                  View all
                </Link>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {related.map((r) => (
                  <Link key={r.id} href={`/products/${r.slug}`} className="group flex gap-3 rounded-[14px] bg-white border border-charcoal-900/[0.06] p-3 hover:border-charcoal-900/10 hover:shadow-sm transition-all">
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
          )}
        </Section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.longDescription || product.description,
            category: product.category,
            image: product.image,
            brand: { "@type": "Brand", name: "D-Connect Delivery Services" },
            offers: { "@type": "Offer", availability: "https://schema.org/InStock", priceCurrency: "NGN" },
          }),
        }}
      />
    </div>
  );
}
