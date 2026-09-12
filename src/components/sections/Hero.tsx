"use client";

import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/Button";
import { MESSAGES } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import { useEffect, useRef } from "react";

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleScroll = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - rect.top) / window.innerHeight, 0), 1);
      const translate = progress * -20;
      el.style.transform = `translateY(${translate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-cream-50">
      {/* Background decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[600px] w-[600px] rounded-full bg-tangerine-50 blur-[100px] opacity-60" />
        <div className="absolute top-[40%] left-[-15%] h-[500px] w-[500px] rounded-full bg-emerald-50 blur-[80px] opacity-70" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
        <div className="grid min-h-[88vh] grid-cols-1 items-center gap-12 pb-16 pt-28 md:min-h-[90vh] md:pb-20 md:pt-32 lg:grid-cols-12 lg:gap-8 lg:pb-12">
          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <Badge variant="tangerine" className="mb-6">
                <span className="size-1.5 rounded-full bg-tangerine-500 animate-pulse" />
                Now accepting orders via WhatsApp
              </Badge>
            </Reveal>

            <div className="relative">
              <Reveal delay={200}>
                <h1 className="font-display text-[44px] font-[700] leading-[0.9] tracking-[-0.04em] text-charcoal-900 md:text-[64px] lg:text-[84px]">
                  <span className="block overflow-hidden">
                    <span className="block">Your</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block font-[800]">Foodstuff.</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block italic font-[400] tracking-[-0.03em] text-emerald-900">Delivered.</span>
                  </span>
                </h1>
              </Reveal>

              {/* Decorative line */}
              <Reveal delay={350} className="absolute -right-8 top-[58%] hidden lg:block">
                <div className="h-px w-24 bg-tangerine-500/40" />
              </Reveal>
            </div>

            <Reveal delay={400}>
              <p className="mt-6 max-w-[52ch] text-[17px] md:text-[18px] leading-[1.6] tracking-[-0.01em] text-charcoal-600 text-balance">
                D-Connect delivers bulk foodstuff, groceries and provisions directly to your doorstep. 
                <span className="text-charcoal-900 font-medium"> Rice, garri, beans, oils, spices</span> — ordered conveniently via WhatsApp, prepared with care.
              </p>
            </Reveal>

            <Reveal delay={500}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppButton message={MESSAGES.general} size="lg" className="w-full sm:w-auto">
                  Order on WhatsApp
                </WhatsAppButton>
                <a
                  href="#products"
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-charcoal-900/15 bg-transparent px-8 text-[15px] font-medium tracking-[-0.01em] text-charcoal-900 transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 sm:w-auto"
                >
                  Browse Products
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={600}>
              <div className="mt-10 flex items-center gap-6 border-t border-charcoal-900/10 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="size-8 rounded-full border-2 border-cream-50 bg-charcoal-100 overflow-hidden"
                    >
                      <Image
                        src={`https://images.unsplash.com/photo-${i === 1 ? "1494790108377-be9c29b29330" : i === 2 ? "1507003211169-0a1dd7228f2d" : "1438761681033-6461ffad8d80"}?q=80&w=100&auto=format&fit=crop`}
                        alt=""
                        width={32}
                        height={32}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-[13px] leading-[1.4] text-charcoal-600">
                  <span className="font-semibold text-charcoal-900">Bulk-friendly</span> • Doorstep delivery<br />
                  <span className="text-charcoal-500">Convenient ordering via WhatsApp</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-5 lg:h-[680px]">
            <Reveal delay={300} direction="scale" className="relative h-full">
              <div ref={imageRef} className="relative will-change-transform">
                {/* Main image card */}
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[28px] bg-emerald-900 shadow-large lg:aspect-[4/5] lg:rounded-[36px]">
                  <Image
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop"
                    alt="Assorted Nigerian foodstuff - rice, grains, and provisions in bulk"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-emerald-900/10 to-transparent" />
                  
                  {/* Floating info card */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-cream-50/95 p-4 backdrop-blur-md shadow-soft">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-charcoal-600">Available</p>
                        <p className="mt-1 font-display text-[15px] font-semibold tracking-[-0.01em] text-charcoal-900">Rice, Garri, Beans, Oils & More</p>
                      </div>
                      <div className="flex size-9 items-center justify-center rounded-full bg-tangerine-500 text-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary floating cards */}
                <div className="absolute -left-4 top-[12%] hidden rounded-2xl bg-white p-3 shadow-medium md:flex items-center gap-3">
                  <div className="size-12 overflow-hidden rounded-xl bg-cream-100">
                    <Image
                      src="https://images.unsplash.com/photo-1583524505974-6facd53f4597?q=80&w=200&auto=format&fit=crop"
                      alt="Beans"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-500">Bulk</p>
                    <p className="text-[13px] font-semibold text-charcoal-900">Honey Beans</p>
                  </div>
                </div>

                <div className="absolute -right-6 bottom-[28%] hidden rounded-2xl bg-white p-3 shadow-medium md:flex items-center gap-3">
                  <div className="size-12 overflow-hidden rounded-xl bg-cream-100">
                    <Image
                      src="https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=200&auto=format&fit=crop"
                      alt="Palm oil"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-charcoal-500">Pure</p>
                    <p className="text-[13px] font-semibold text-charcoal-900">Palm Oil</p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="pointer-events-none absolute -right-10 top-0 hidden size-24 rounded-full border border-tangerine-500/20 lg:block" />
                <div className="pointer-events-none absolute -left-8 bottom-20 hidden size-16 rounded-full bg-tangerine-500/10 lg:block" />
              </div>
            </Reveal>

            {/* Background shape */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-gradient-to-br from-emerald-50 to-cream-100 opacity-60 blur-2xl lg:block hidden" />
          </div>
        </div>

        {/* Marquee / Trust bar */}
        <div className="relative border-y border-charcoal-900/10 py-4 overflow-hidden">
          <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap will-change-transform">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-8 pr-8">
                {[
                  "Bulk Foodstuff Delivery",
                  "•",
                  "Rice & Grains",
                  "•",
                  "Garri & Cassava",
                  "•",
                  "Provisions",
                  "•",
                  "Doorstep Delivery",
                  "•",
                  "WhatsApp Ordering",
                  "•",
                  "Nigerian Food Culture",
                  "•",
                ].map((text, i) => (
                  <span
                    key={`${groupIndex}-${i}`}
                    className={cn(
                      "text-[13px] tracking-[0.08em] uppercase",
                      text === "•" ? "text-tangerine-500/60" : "font-medium text-charcoal-600"
                    )}
                  >
                    {text}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
