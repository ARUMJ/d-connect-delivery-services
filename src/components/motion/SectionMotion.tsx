"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import * as React from "react";

type SectionMotionProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  direction?: "up" | "down" | "left" | "right" | "mixed";
  delay?: number;
};

// Staggered entrance with alternating directions for premium feel
export function StaggerMotion({
  children,
  className,
  stagger = 80,
  direction = "up",
  delay = 0,
}: SectionMotionProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.1, once: true });
  const prefersReducedMotion = useReducedMotion();

  const getInitialTransform = (index: number) => {
    if (prefersReducedMotion) return "translateY(0) translateX(0)";

    switch (direction) {
      case "up":
        return `translateY(${24 + index * 2}px)`;
      case "down":
        return `translateY(${-24 - index * 2}px)`;
      case "left":
        return `translateX(${32 + index * 4}px)`;
      case "right":
        return `translateX(${-32 - index * 4}px)`;
      case "mixed":
        if (index % 4 === 0) return `translateY(${28}px) translateX(${-8}px)`;
        if (index % 4 === 1) return `translateY(${20}px) translateX(${8}px)`;
        if (index % 4 === 2) return `translateY(${32}px)`;
        return `translateY(${24}px) translateX(${-6}px)`;
      default:
        return `translateY(24px)`;
    }
  };

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const isVisible = isInView;
        const initialTransform = getInitialTransform(index);

        return (
          <div
            key={index}
            className="will-change-transform"
            style={{
              transform: !isVisible ? initialTransform : "translateY(0) translateX(0)",
              opacity: !isVisible ? 0 : 1,
              transitionProperty: "transform, opacity",
              transitionDuration: "800ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: isVisible ? `${delay + index * stagger}ms` : "0ms",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Progressive reveal for How It Works - each step builds on previous
export function ProcessMotion({
  children,
  className,
  stagger = 120,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <div ref={ref} className={cn("relative", className)}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-tangerine-500/50 via-tangerine-500/20 to-transparent hidden lg:block"
        style={{
          height: isInView ? "100%" : "0%",
          transitionProperty: "height",
          transitionDuration: "1200ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "300ms",
        }}
      />

      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        return (
          <div
            key={index}
            className="will-change-transform"
            style={{
              transform: !isInView ? `translateY(${32 + index * 8}px) scale(0.98)` : "translateY(0) scale(1)",
              opacity: !isInView ? 0 : 1,
              transitionProperty: "transform, opacity",
              transitionDuration: "700ms",
              transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              transitionDelay: isInView ? `${index * stagger}ms` : "0ms",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// Editorial motion for Value Props - text from left, cards from right with stagger
export function EditorialMotion({
  text,
  content,
  className,
}: {
  text: React.ReactNode;
  content: React.ReactNode;
  className?: string;
}) {
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const { ref: contentRef, isInView: contentInView } = useInView<HTMLDivElement>({ threshold: 0.15, once: true });

  return (
    <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10", className)}>
      <div
        ref={textRef}
        className="lg:col-span-5 will-change-transform"
        style={{
          transform: !textInView ? "translateX(-24px)" : "translateX(0)",
          opacity: !textInView ? 0 : 1,
          transitionProperty: "transform, opacity",
          transitionDuration: "900ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {text}
      </div>
      <div
        ref={contentRef}
        className="lg:col-span-7 will-change-transform"
        style={{
          transform: !contentInView ? "translateX(24px)" : "translateX(0)",
          opacity: !contentInView ? 0 : 1,
          transitionProperty: "transform, opacity",
          transitionDuration: "900ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "120ms",
        }}
      >
        {content}
      </div>
    </div>
  );
}

// Cinematic motion for Delivery - image mask + text independent
export function CinematicMotion({
  image,
  text,
  className,
}: {
  image: React.ReactNode;
  text: React.ReactNode;
  className?: string;
}) {
  const { ref: imageRef, isInView: imageInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const { ref: textRef, isInView: textInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });

  return (
    <div className={cn("grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12 items-center", className)}>
      <div
        ref={imageRef}
        className="lg:col-span-6 will-change-[clip-path,transform]"
        style={{
          clipPath: !imageInView ? "inset(0 20% 0 0)" : "inset(0 0 0 0)",
          transform: !imageInView ? "scale(0.94) translateX(-20px)" : "scale(1) translateX(0)",
          opacity: !imageInView ? 0 : 1,
          transitionProperty: "clip-path, transform, opacity",
          transitionDuration: "1100ms",
          transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
        }}
      >
        {image}
      </div>
      <div
        ref={textRef}
        className="lg:col-span-6 will-change-transform"
        style={{
          transform: !textInView ? "translateY(32px)" : "translateY(0)",
          opacity: !textInView ? 0 : 1,
          transitionProperty: "transform, opacity",
          transitionDuration: "800ms",
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: "200ms",
        }}
      >
        {text}
      </div>
    </div>
  );
}
