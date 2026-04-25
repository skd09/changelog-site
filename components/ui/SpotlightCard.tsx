"use client";

import { useRef } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(189,147,249,0.15)",
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    ref.current.style.setProperty("--spotlight-color", spotlightColor);
  };

  return (
    <>
      <div ref={ref} onMouseMove={handleMouseMove} className={`spotlight-card ${className}`}>
        {children}
      </div>
      <style>{`
        .spotlight-card {
          position: relative;
          overflow: hidden;
          --mouse-x: 50%;
          --mouse-y: 50%;
          --spotlight-color: rgba(189,147,249,0.1);
        }
        .spotlight-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            var(--spotlight-color),
            transparent 40%
          );
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }
        .spotlight-card:hover::before {
          opacity: 1;
        }
      `}</style>
    </>
  );
}
