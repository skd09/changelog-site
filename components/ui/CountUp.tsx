"use client";

import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  delay?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({
  to,
  from = 0,
  duration = 2,
  delay = 0,
  className = "",
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !ref.current) return;

    const el = ref.current;
    const startTime = performance.now() + delay * 1000;
    const endTime = startTime + duration * 1000;

    const animate = (now: number) => {
      if (now < startTime) {
        el.textContent = `${from}${suffix}`;
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      el.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        el.textContent = `${to}${suffix}`;
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, from, to, duration, delay, suffix]);

  return (
    <span className={className} ref={ref}>
      {from}{suffix}
    </span>
  );
}
