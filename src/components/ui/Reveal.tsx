"use client";

import { cn } from "@/lib/cn";
import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  duration?: number;
  once?: boolean;
  threshold?: number;
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
  once = true,
  threshold = 0.15,
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getInitialStyles = () => {
    switch (direction) {
      case "up":
        return "translate-y-8 opacity-0";
      case "down":
        return "-translate-y-8 opacity-0";
      case "left":
        return "translate-x-8 opacity-0";
      case "right":
        return "-translate-x-8 opacity-0";
      case "scale":
        return "scale-[0.96] opacity-0";
      case "none":
        return "opacity-0";
      default:
        return "translate-y-8 opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "will-change-transform",
        !isVisible && getInitialStyles(),
        isVisible && "translate-y-0 translate-x-0 scale-100 opacity-100",
        className
      )}
      style={{
        transitionProperty: "transform, opacity",
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

export function Stagger({
  children,
  stagger = 80,
  className,
}: {
  children: React.ReactNode[];
  stagger?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <Reveal delay={index * stagger} key={index}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 100,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;
        return (
          <div
            key={index}
            className={cn(
              "transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform",
              !isVisible && "translate-y-6 opacity-0",
              isVisible && "translate-y-0 opacity-100"
            )}
            style={{
              transitionDelay: isVisible ? `${index * stagger}ms` : "0ms",
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
