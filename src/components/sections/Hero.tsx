"use client";

import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/Button";
import { MESSAGES } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import Image from "next/image";
import Link from "next/link";
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
      const translate = progress * -16;
      el.style.transform = `translateY(${translate}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-cream-50">
      {/* Background decorative - more subtle */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-[-12%] h-[640px] w-[640px] rounded-full bg-tangerine-50 blur-[120px] opacity-50" />
        <div className="absolute top-[38%] left-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-50 blur-[90px] opacity-60" />
        <div className="absolute bottom-[-10%] right-[20%] h-[400px] w-[400px] rounded-full bg-cream-200 blur-[80px] opacity-40" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
        <div className="grid min-h-[82vh] grid-cols-1 items-center gap-10 pb-14 pt-24 md:min-h-[84vh] md:gap-12 md:pb-16 md:pt-28 lg:min-h-[88vh] lg:grid-cols-12 lg:gap-8 lg:pb-12 lg:pt-28">
          {/* Content */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <Badge variant="tangerine" className="mb-5 md:mb-6">
                <span className="size-1.5 rounded-full bg-tangerine-500 animate-pulse" />
                Now accepting orders via WhatsApp
              </Badge>
            </Reveal>

            <div className="relative">
              <Reveal delay={160}>
                <h1 className="font-display text-[38px] font-[700] leading-[0.92] tracking-[-0.04em] text-charcoal-900 sm:text-[42px] md:text-[60px] lg:text-[68px] xl:text-[76px]">
                  <span className="block overflow-hidden">
                    <span className="block font-[500] tracking-[-0.03em]">Your</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block font-[800] tracking-[-0.04em]">Foodstuff.</span>
                  </span>
                  <span className="block overflow-hidden">
                    <span className="block italic font-[400] tracking-[-0.03em] text-emerald-900">Delivered.</span>
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={300} className="absolute -right-6 top-[58%] hidden xl:block">
                <div className="h-px w-20 bg-gradient-to-r from-tangerine-500/50 to-transparent" />
              </Reveal>
            </div>

            <Reveal delay={320}>
              <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.65] tracking-[-0.01em] text-charcoal-600 text-balance md:mt-6 md:max-w-[52ch] md:text-[17px]">
                D-Connect delivers bulk foodstuff, groceries and provisions directly to your doorstep.{" "}
                <span className="font-medium text-charcoal-900">Rice, garri, beans, oils, spices</span> — ordered conveniently via WhatsApp, prepared with care.
              </p>
            </Reveal>

            <Reveal delay={420}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
                <WhatsAppButton message={MESSAGES.general} size="lg" className="w-full sm:w-auto shadow-[0_10px_28px_rgba(255,107,24,0.28)]">
                  Order on WhatsApp
                </WhatsAppButton>
                <Link
                  href="/products"
                  className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-charcoal-900/12 bg-white/60 px-8 text-[14.5px] font-medium tracking-[-0.01em] text-charcoal-900 backdrop-blur-sm transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 sm:w-auto"
                >
                  Browse Products
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={520}>
              <div className="mt-8 flex items-center gap-5 border-t border-charcoal-900/[0.08] pt-5 md:mt-10 md:gap-6 md:pt-6">
                <div className="flex -space-x-2.5">
                  {[
                    "/images/products/long-grain-rice.jpg",
                    "/images/products/honey-beans.jpg",
                    "/images/products/garri-ijebu.jpg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="size-9 rounded-full border-[2.5px] border-cream-50 bg-charcoal-100 overflow-hidden shadow-sm"
                    >
                      <Image src={src} alt="" width={36} height={36} className="h-full w-full object-cover" />
                    </div>
                  ))}
                </div>
                <p className="text-[12.5px] leading-[1.45] text-charcoal-600 md:text-[13px]">
                  <span className="font-semibold text-charcoal-900">Bulk-friendly</span> • Doorstep delivery
                  <br />
                  <span className="text-charcoal-500">Convenient ordering via WhatsApp</span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <div className="relative lg:col-span-5 lg:h-[640px] xl:h-[680px]">
            <Reveal delay={260} direction="scale" className="relative h-full">
              <div ref={imageRef} className="relative will-change-transform">
                {/* Main image card - fixed to foodstuff */}
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[28px] bg-emerald-900 shadow-[0_20px_60px_rgba(14,51,39,0.18)] md:max-w-[400px] lg:aspect-[4/5] lg:rounded-[32px] xl:max-w-[420px] xl:rounded-[36px]">
                  <Image
                    src="/images/hero-foodstuff.jpg"
                    alt="Assorted Nigerian foodstuff - rice, beans, garri, palm oil and provisions in bulk"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-900/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-950/20" />

                  <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-[16px] bg-cream-50/95 p-3.5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-white/20 md:bottom-4 md:left-4 md:right-4 md:rounded-2xl md:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-charcoal-500">Available</p>
                        <p className="mt-1 font-display text-[14px] font-semibold leading-[1.2] tracking-[-0.01em] text-charcoal-900 md:text-[15px]">
                          Rice, Garri, Beans, Oils & More
                        </p>
                      </div>
                      <div className="flex size-8 items-center justify-center rounded-full bg-tangerine-500 text-white shadow-sm md:size-9">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary floating cards - fixed images */}
                <div className="absolute left-0 top-[10%] hidden rounded-[14px] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-charcoal-900/[0.04] md:flex items-center gap-3 lg:left-2 xl:-left-2">
                  <div className="size-11 overflow-hidden rounded-[10px] bg-cream-100">
                    <Image src="/images/products/honey-beans.jpg" alt="Honey Beans" width={44} height={44} className="h-full w-full object-cover" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-charcoal-500">Bulk</p>
                    <p className="text-[12.5px] font-semibold leading-tight text-charcoal-900">Honey Beans</p>
                  </div>
                </div>

                <div className="absolute right-0 bottom-[26%] hidden rounded-[14px] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-charcoal-900/[0.04] md:flex items-center gap-3 lg:right-2 xl:-right-2">
                  <div className="size-11 overflow-hidden rounded-[10px] bg-cream-100">
                    <Image src="/images/products/palm-oil.jpg" alt="Palm oil" width={44} height={44} className="h-full w-full object-cover" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-charcoal-500">Pure</p>
                    <p className="text-[12.5px] font-semibold leading-tight text-charcoal-900">Palm Oil</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-8 top-4 hidden size-20 rounded-full border border-tangerine-500/15 lg:block" />
                <div className="pointer-events-none absolute -left-6 bottom-24 hidden size-14 rounded-full bg-tangerine-500/[0.06] lg:block" />
              </div>
            </Reveal>

            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[110%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-gradient-to-br from-emerald-50/80 to-cream-100/80 opacity-50 blur-2xl lg:block" />
          </div>
        </div>

        <div className="relative border-y border-charcoal-900/[0.07] py-3.5 overflow-hidden md:py-4">
          <div className="flex animate-[marquee_45s_linear_infinite] whitespace-nowrap will-change-transform">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-6 pr-6 md:gap-8 md:pr-8">
                {[
                  "Bulk Foodstuff Delivery",
                  "•",
                  "Rice & Grains",
                  "•",
                  "Garri & Cassava",
                  "•",
                  "Doorstep Delivery",
                  "•",
                  "WhatsApp Ordering",
                  "•",
                ].map((text, i) => (
                  <span
                    key={`${groupIndex}-${i}`}
                    className={
                      text === "•"
                        ? "text-[10px] text-tangerine-500/50"
                        : "text-[11px] font-medium tracking-[0.12em] uppercase text-charcoal-500 md:text-[12px]"
                    }
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
