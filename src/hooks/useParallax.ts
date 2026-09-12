"use client";

import { useEffect, useRef } from "react";
import { useScrollProgress } from "./useScrollProgress";
import { useReducedMotion } from "./useReducedMotion";

type ParallaxOptions = {
  speed?: number; // -1 to 1, negative moves opposite scroll
  offset?: number;
  disabledOnMobile?: boolean;
};

export function useParallax<T extends HTMLElement = HTMLDivElement>(options: ParallaxOptions = {}) {
  const { speed = 0.2, offset = 0, disabledOnMobile = false } = options;
  const ref = useRef<T>(null);
  const scrollY = useScrollProgress();
  const prefersReducedMotion = useReducedMotion();
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion) return;
    if (disabledOnMobile && isMobile) return;

    const rect = el.getBoundingClientRect();
    const elementTop = rect.top + scrollY;
    const viewportHeight = window.innerHeight;

    // Calculate parallax based on element position in viewport
    const distanceFromCenter = scrollY + viewportHeight / 2 - (elementTop + rect.height / 2);
    const parallaxValue = distanceFromCenter * speed + offset;

    el.style.transform = `translate3d(0, ${parallaxValue}px, 0)`;
  }, [scrollY, speed, offset, prefersReducedMotion, isMobile, disabledOnMobile]);

  return ref;
}

// More advanced: element moves at different rate based on its own position
export function useParallaxLayer<T extends HTMLElement = HTMLDivElement>(speed: number = 0.15) {
  const ref = useRef<T>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion) return;

    let rafId: number;
    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      const translate = (progress - 0.5) * speed * 100;
      
      el.style.transform = `translate3d(0, ${translate}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        rafId = requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [speed, prefersReducedMotion]);

  return ref;
}
