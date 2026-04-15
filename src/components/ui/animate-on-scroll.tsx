"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  /** Extra Tailwind classes for the wrapper element */
  className?: string;
  /** Delay in ms before the transition starts — use for staggered grids */
  delay?: number;
  /** IntersectionObserver threshold (0–1). Default 0.12. */
  threshold?: number;
}

/**
 * Wraps children in a div that fades in + slides up when it enters the
 * viewport. Triggers once per element (no replay on scroll-up).
 *
 * Animation is gated inside `@media (prefers-reduced-motion: no-preference)`
 * in globals.css, so users who opt out of motion see content immediately.
 */
export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.unobserve(el); // trigger once only
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn("animate-on-scroll", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
