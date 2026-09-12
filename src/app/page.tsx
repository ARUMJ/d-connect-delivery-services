import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Categories } from "@/components/sections/Categories";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { ValueProps } from "@/components/sections/ValueProps";
import { DeliverySection, FinalCTA } from "@/components/sections/DeliverySection";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Categories />
        <HowItWorks />
        <FeaturedProducts />
        <ValueProps />
        <DeliverySection />
        <FinalCTA />
      </main>
      <Footer />

      {/* JSON-LD for Organization + Delivery Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "D-Connect Delivery Services",
            description:
              "Bulk foodstuff and provisions delivery service. Nigerian foodstuff including rice, garri, beans, oils, spices and household provisions delivered conveniently via WhatsApp ordering.",
            url: "https://dconnectdelivery.com",
            logo: "https://dconnectdelivery.com/icon-512.png",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: "English",
                url: "https://wa.me/2348147400129",
              },
            ],
            areaServed: {
              "@type": "Country",
              name: "Nigeria",
            },
          }),
        }}
      />
    </div>
  );
}
