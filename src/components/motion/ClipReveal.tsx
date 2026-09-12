"use client";

import { cn } from "@/lib/cn";
import { useInView } from "@/hooks/useInView";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import * as React from "react";

type ClipDirection = "left" | "right" | "up" | "down" | "center";

type ClipRevealProps = {
  children: React.ReactNode;
  className?: string;
  direction?: ClipDirection;
  delay?: number;
  duration?: number;
  once?: boolean;
  threshold?: number;
  scale?: boolean; // adds subtle scale from 0.94 to 1
};

export function ClipReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 900,
  once = true,
  threshold = 0.15,
  scale = false,
}: ClipRevealProps) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold, once, rootMargin: "0px 0px -5% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const getClipPath = (visible: boolean) => {
    if (prefersReducedMotion) return "inset(0 0 0 0)";

    if (!visible) {
      switch (direction) {
        case "left":
          return "inset(0 100% 0 0)";
        case "right":
          return "inset(0 0 0 100%)";
        case "up":
          return "inset(0 0 100% 0)";
        case "down":
          return "inset(100% 0 0 0)";
        case "center":
          return "inset(10% 10% 10% 10%)";
        default:
          return "inset(0 0 100% 0)";
      }
    }
    return "inset(0 0 0 0)";
  };

  return (
    <div
      ref={ref}
      className={cn("will-change-[clip-path,transform] overflow-hidden", className)}
      style={{
        clipPath: getClipPath(isInView),
        transform: !isInView && scale && !prefersReducedMotion ? "scale(0.94)" : "scale(1)",
        opacity: !isInView && !prefersReducedMotion ? 0 : 1,
        transitionProperty: "clip-path, transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        style={{
          transform: !isInView && !prefersReducedMotion ? (direction === "left" ? "translateX(-20px)" : direction === "right" ? "translateX(20px)" : "translateY(12px)") : "translateX(0) translateY(0)",
          transitionProperty: "transform",
          transitionDuration: `${duration}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay + 80}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}

export function MaskedImageReveal({
  children,
  className,
  delay = 0,
  duration = 1100,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.2, once: true });
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className={cn("relative overflow-hidden will-change-[clip-path,transform]", className)}
      style={{
        clipPath: !isInView && !prefersReducedMotion ? "inset(0 0 100% 0)" : "inset(0 0 0 0)",
        transform: !isInView && !prefersReducedMotion ? "scale(0.96)" : "scale(1)",
        transitionProperty: "clip-path, transform",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <div
        className="will-change-transform"
        style={{
          transform: !isInView && !prefersReducedMotion ? "scale(1.08)" : "scale(1)",
          transitionProperty: "transform",
          transitionDuration: `${duration + 200}ms`,
          transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
