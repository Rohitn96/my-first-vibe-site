"use client";

import * as React from "react";

import { cn } from "@/lib/cn";

export function FadeInOnScroll({
  children,
  className,
  delayMs = 0
}: {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={cn(
        "opacity-0 translate-y-3 transition-all duration-700 ease-out will-change-transform",
        visible && "opacity-100 translate-y-0",
        className
      )}
    >
      {children}
    </div>
  );
}

