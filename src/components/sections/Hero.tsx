"use client";

import { Badge } from "@/components/ui/Badge";
import { WhatsAppButton } from "@/components/ui/Button";
import { MESSAGES } from "@/lib/whatsapp";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isLoaded, setIsLoaded] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const floating1Ref = useRef<HTMLDivElement>(null);
  const floating2Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  // Cinematic entrance on load
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Scroll-driven motion - hero responds visibly to scroll
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const viewportHeight = window.innerHeight;
        
        // Content moves slightly up and fades
        if (contentRef.current) {
          const progress = Math.min(scrollY / (viewportHeight * 0.6), 1);
          const translateY = progress * -24;
          const opacity = 1 - progress * 0.3;
          const scale = 1 - progress * 0.02;
          contentRef.current.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
          contentRef.current.style.opacity = `${opacity}`;
        }

        // Main image parallax - moves at different rate
        if (imageRef.current) {
          const rect = imageRef.current.getBoundingClientRect();
          const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
          const parallaxY = (progress - 0.5) * -30;
          const scale = 1 + progress * 0.03;
          const rotate = (progress - 0.5) * 1;
          imageRef.current.style.transform = `translate3d(0, ${parallaxY}px, 0) scale(${scale}) rotate(${rotate}deg)`;
        }

        // Floating elements independent movement
        if (floating1Ref.current) {
          const translateY = scrollY * -0.12;
          const translateX = scrollY * 0.04;
          const rotate = scrollY * 0.02;
          floating1Ref.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
        }

        if (floating2Ref.current) {
          const translateY = scrollY * -0.18;
          const translateX = scrollY * -0.06;
          const rotate = scrollY * -0.015;
          floating2Ref.current.style.transform = `translate3d(${translateX}px, ${translateY}px, 0) rotate(${rotate}deg)`;
        }

        // Background blobs subtle movement
        if (backgroundRef.current) {
          const translateY = scrollY * 0.08;
          backgroundRef.current.style.transform = `translate3d(0, ${translateY}px, 0)`;
        }

        ticking = false;
      });

      ticking = true;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  return (
    <section id="home" className="relative overflow-hidden bg-cream-50">
      {/* Background decorative - with entrance motion */}
      <div ref={backgroundRef} className="pointer-events-none absolute inset-0 will-change-transform">
        <div
          className="absolute -top-32 right-[-12%] h-[640px] w-[640px] rounded-full bg-tangerine-50 blur-[120px] will-change-transform"
          style={{
            opacity: isLoaded ? 0.5 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.8)",
            transition: prefersReducedMotion ? "none" : "opacity 1200ms cubic-bezier(0.16,1,0.3,1), transform 1200ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "200ms",
          }}
        />
        <div
          className="absolute top-[38%] left-[-18%] h-[520px] w-[520px] rounded-full bg-emerald-50 blur-[90px] will-change-transform"
          style={{
            opacity: isLoaded ? 0.6 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.85)",
            transition: prefersReducedMotion ? "none" : "opacity 1200ms cubic-bezier(0.16,1,0.3,1), transform 1200ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "400ms",
          }}
        />
        <div
          className="absolute bottom-[-10%] right-[20%] h-[400px] w-[400px] rounded-full bg-cream-200 blur-[80px] will-change-transform"
          style={{
            opacity: isLoaded ? 0.4 : 0,
            transform: isLoaded ? "scale(1)" : "scale(0.9)",
            transition: prefersReducedMotion ? "none" : "opacity 1000ms cubic-bezier(0.16,1,0.3,1), transform 1000ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "600ms",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
        <div className="grid min-h-[82vh] grid-cols-1 items-center gap-10 pb-14 pt-24 md:min-h-[84vh] md:gap-12 md:pb-16 md:pt-28 lg:min-h-[88vh] lg:grid-cols-12 lg:gap-8 lg:pb-12 lg:pt-28">
          {/* Content - with scroll fade */}
          <div ref={contentRef} className="lg:col-span-7 will-change-transform">
            {/* Eyebrow - scale entrance */}
            <div
              className="will-change-transform"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0) scale(1)" : "translateY(16px) scale(0.96)",
                transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "300ms",
              }}
            >
              <Badge variant="tangerine" className="mb-5 md:mb-6">
                <span className="size-1.5 rounded-full bg-tangerine-500 animate-pulse" />
                Now accepting orders via WhatsApp
              </Badge>
            </div>

            {/* H1 - staggered reveal, each line masked */}
            <div className="relative">
              <h1 className="font-display text-[38px] font-[700] leading-[0.92] tracking-[-0.04em] text-charcoal-900 sm:text-[42px] md:text-[60px] lg:text-[68px] xl:text-[76px]">
                <span className="block overflow-hidden">
                  <span
                    className="block font-[500] tracking-[-0.03em] will-change-transform"
                    style={{
                      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                      transition: prefersReducedMotion ? "none" : "transform 900ms cubic-bezier(0.77,0,0.175,1)",
                      transitionDelay: "500ms",
                    }}
                  >
                    Your
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="block font-[800] tracking-[-0.04em] will-change-transform"
                    style={{
                      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                      transition: prefersReducedMotion ? "none" : "transform 900ms cubic-bezier(0.77,0,0.175,1)",
                      transitionDelay: "620ms",
                    }}
                  >
                    Foodstuff.
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="block italic font-[400] tracking-[-0.03em] text-emerald-900 will-change-transform"
                    style={{
                      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                      transition: prefersReducedMotion ? "none" : "transform 900ms cubic-bezier(0.77,0,0.175,1)",
                      transitionDelay: "740ms",
                    }}
                  >
                    Delivered.
                  </span>
                </span>
              </h1>

              <div
                className="absolute -right-6 top-[58%] hidden xl:block will-change-transform"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: prefersReducedMotion ? "none" : "opacity 600ms ease, transform 800ms cubic-bezier(0.77,0,0.175,1)",
                  transitionDelay: "1100ms",
                }}
              >
                <div className="h-px w-20 bg-gradient-to-r from-tangerine-500/50 to-transparent" />
              </div>
            </div>

            {/* Paragraph */}
            <div
              className="will-change-transform"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "860ms",
              }}
            >
              <p className="mt-5 max-w-[48ch] text-[16px] leading-[1.65] tracking-[-0.01em] text-charcoal-600 text-balance md:mt-6 md:max-w-[52ch] md:text-[17px]">
                D-Connect delivers bulk foodstuff, groceries and provisions directly to your doorstep.{" "}
                <span className="font-medium text-charcoal-900">Rice, garri, beans, oils, spices</span> — ordered conveniently via WhatsApp, prepared with care.
              </p>
            </div>

            {/* CTAs - staggered */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-8">
              <div
                className="will-change-transform w-full sm:w-auto"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
                  transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "980ms",
                }}
              >
                <WhatsAppButton message={MESSAGES.general} size="lg" className="w-full sm:w-auto shadow-[0_10px_28px_rgba(255,107,24,0.28)]">
                  Order on WhatsApp
                </WhatsAppButton>
              </div>
              <div
                className="will-change-transform w-full sm:w-auto"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
                  transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "1080ms",
                }}
              >
                <Link
                  href="/products"
                  className="group inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full border border-charcoal-900/12 bg-white/60 px-8 text-[14.5px] font-medium tracking-[-0.01em] text-charcoal-900 backdrop-blur-sm transition-all hover:bg-charcoal-900 hover:text-cream-50 hover:border-charcoal-900 sm:w-auto"
                >
                  Browse Products
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Social proof */}
            <div
              className="will-change-transform"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(16px)",
                transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
                transitionDelay: "1200ms",
              }}
            >
              <div className="mt-8 flex items-center gap-5 border-t border-charcoal-900/[0.08] pt-5 md:mt-10 md:gap-6 md:pt-6">
                <div className="flex -space-x-2.5">
                  {["/images/products/long-grain-rice.jpg", "/images/products/honey-beans.jpg", "/images/products/garri-ijebu.jpg"].map((src, i) => (
                    <div
                      key={i}
                      className="size-9 rounded-full border-[2.5px] border-cream-50 bg-charcoal-100 overflow-hidden shadow-sm will-change-transform"
                      style={{
                        transform: isLoaded ? "scale(1)" : "scale(0)",
                        transition: prefersReducedMotion ? "none" : "transform 500ms cubic-bezier(0.16,1,0.3,1)",
                        transitionDelay: `${1300 + i * 100}ms`,
                      }}
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
            </div>
          </div>

          {/* Visual - masked reveal + parallax */}
          <div className="relative lg:col-span-5 lg:h-[640px] xl:h-[680px]">
            <div className="relative h-full">
              <div
                ref={imageRef}
                className="relative will-change-transform"
                style={{
                  clipPath: isLoaded ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
                  transform: isLoaded ? "scale(1)" : "scale(0.96)",
                  transition: prefersReducedMotion ? "none" : "clip-path 1200ms cubic-bezier(0.77,0,0.175,1), transform 1200ms cubic-bezier(0.77,0,0.175,1)",
                  transitionDelay: "600ms",
                }}
              >
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] overflow-hidden rounded-[28px] bg-emerald-900 shadow-[0_20px_60px_rgba(14,51,39,0.18)] md:max-w-[400px] lg:aspect-[4/5] lg:rounded-[32px] xl:max-w-[420px] xl:rounded-[36px]">
                  <div
                    className="absolute inset-0 will-change-transform"
                    style={{
                      transform: isLoaded ? "scale(1)" : "scale(1.1)",
                      transition: prefersReducedMotion ? "none" : "transform 1400ms cubic-bezier(0.16,1,0.3,1)",
                      transitionDelay: "600ms",
                    }}
                  >
                    <Image
                      src="/images/hero-foodstuff.jpg"
                      alt="Assorted Nigerian foodstuff - rice, beans, garri, palm oil and provisions in bulk"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/70 via-emerald-900/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-emerald-950/20" />

                  <div
                    className="absolute bottom-3.5 left-3.5 right-3.5 rounded-[16px] bg-cream-50/95 p-3.5 backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-white/20 md:bottom-4 md:left-4 md:right-4 md:rounded-2xl md:p-4 will-change-transform"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0)" : "translateY(12px)",
                      transition: prefersReducedMotion ? "none" : "opacity 600ms cubic-bezier(0.16,1,0.3,1), transform 600ms cubic-bezier(0.16,1,0.3,1)",
                      transitionDelay: "1200ms",
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-semibold tracking-[0.1em] uppercase text-charcoal-500">Available</p>
                        <p className="mt-1 font-display text-[14px] font-semibold leading-[1.2] tracking-[-0.01em] text-charcoal-900 md:text-[15px]">Rice, Garri, Beans, Oils & More</p>
                      </div>
                      <div className="flex size-8 items-center justify-center rounded-full bg-tangerine-500 text-white shadow-sm md:size-9">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating cards with independent entrance + scroll parallax */}
                <div
                  ref={floating1Ref}
                  className="absolute left-0 top-[10%] hidden rounded-[14px] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-charcoal-900/[0.04] md:flex items-center gap-3 lg:left-2 xl:-left-2 will-change-transform"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateX(0) translateY(0) rotate(0deg)" : "translateX(-24px) translateY(12px) rotate(-3deg)",
                    transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: "1000ms",
                  }}
                >
                  <div className="size-11 overflow-hidden rounded-[10px] bg-cream-100">
                    <Image src="/images/products/honey-beans.jpg" alt="Honey Beans" width={44} height={44} className="h-full w-full object-cover" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-charcoal-500">Bulk</p>
                    <p className="text-[12.5px] font-semibold leading-tight text-charcoal-900">Honey Beans</p>
                  </div>
                </div>

                <div
                  ref={floating2Ref}
                  className="absolute right-0 bottom-[26%] hidden rounded-[14px] bg-white p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border border-charcoal-900/[0.04] md:flex items-center gap-3 lg:right-2 xl:-right-2 will-change-transform"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateX(0) translateY(0) rotate(0deg)" : "translateX(24px) translateY(12px) rotate(2deg)",
                    transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1)",
                    transitionDelay: "1150ms",
                  }}
                >
                  <div className="size-11 overflow-hidden rounded-[10px] bg-cream-100">
                    <Image src="/images/products/palm-oil.jpg" alt="Palm oil" width={44} height={44} className="h-full w-full object-cover" />
                  </div>
                  <div className="pr-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-charcoal-500">Pure</p>
                    <p className="text-[12.5px] font-semibold leading-tight text-charcoal-900">Palm Oil</p>
                  </div>
                </div>

                <div className="pointer-events-none absolute -right-8 top-4 hidden size-20 rounded-full border border-tangerine-500/15 lg:block will-change-transform" style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "scale(1)" : "scale(0.8)",
                  transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "1300ms",
                }} />
                <div className="pointer-events-none absolute -left-6 bottom-24 hidden size-14 rounded-full bg-tangerine-500/[0.06] lg:block will-change-transform" style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "scale(1)" : "scale(0.8)",
                  transition: "opacity 800ms ease, transform 800ms cubic-bezier(0.16,1,0.3,1)",
                  transitionDelay: "1400ms",
                }} />
              </div>

              <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden h-[110%] w-[125%] -translate-x-1/2 -translate-y-1/2 rounded-[40px] bg-gradient-to-br from-emerald-50/80 to-cream-100/80 opacity-50 blur-2xl lg:block" />
            </div>
          </div>
        </div>

        <div
          className="relative border-y border-charcoal-900/[0.07] py-3.5 overflow-hidden md:py-4 will-change-transform"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(8px)",
            transition: prefersReducedMotion ? "none" : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1)",
            transitionDelay: "1500ms",
          }}
        >
          <div className="flex animate-[marquee_45s_linear_infinite] whitespace-nowrap will-change-transform">
            {[...Array(2)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center gap-6 pr-6 md:gap-8 md:pr-8">
                {["Bulk Foodstuff Delivery", "•", "Rice & Grains", "•", "Garri & Cassava", "•", "Doorstep Delivery", "•", "WhatsApp Ordering", "•"].map((text, i) => (
                  <span
                    key={`${groupIndex}-${i}`}
                    className={text === "•" ? "text-[10px] text-tangerine-500/50" : "text-[11px] font-medium tracking-[0.12em] uppercase text-charcoal-500 md:text-[12px]"}
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
