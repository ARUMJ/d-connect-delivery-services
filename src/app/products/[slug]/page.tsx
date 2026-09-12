import { FEATURED_PRODUCTS, CATEGORIES } from "@/lib/constants";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductImageMotion, ProductDetailsMotion, RelatedProductsMotion } from "@/components/products/ProductDetailMotion";

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
            <div className="lg:col-span-7">
              <ProductImageMotion product={product} />
            </div>

            <div className="lg:col-span-5">
              <ProductDetailsMotion product={product} category={category} />
            </div>
          </div>

          <RelatedProductsMotion products={related} categoryName={product.category} categorySlug={product.categorySlug} />
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
