"use client";

/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, useRef } from "react";

// Global scroll progress with RAF throttling - single listener shared
let globalScrollY = 0;
let ticking = false;
const listeners = new Set<(y: number) => void>();

function updateScroll() {
  globalScrollY = window.scrollY;
  listeners.forEach((cb) => cb(globalScrollY));
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateScroll);
    ticking = true;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("scroll", onScroll, { passive: true });
}

export function useScrollProgress() {
  const [scrollY, setScrollY] = useState(globalScrollY);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    reducedMotionRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    const cb = (y: number) => {
      if (!reducedMotionRef.current) {
        setScrollY(y);
      }
    };
    
    listeners.add(cb);
    // Set initial
    setScrollY(window.scrollY);
    
    return () => {
      listeners.delete(cb);
    };
  }, []);

  return scrollY;
}

export function useScrollProgressValue() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const cb = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      setProgress(p);
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          cb();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    cb();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progress;
}
