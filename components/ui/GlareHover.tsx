"use client";

interface GlareHoverProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  glareOpacity?: number;
  borderColor?: string;
  borderRadius?: string;
}

export default function GlareHover({
  children,
  className = "",
  glareColor = "#BD93F9",
  glareOpacity = 0.12,
  borderColor = "var(--border)",
  borderRadius = "16px",
}: GlareHoverProps) {
  const hex = glareColor.replace("#", "");
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  const rgba = `rgba(${r}, ${g}, ${b}, ${glareOpacity})`;

  return (
    <>
      <div
        className={`glare-hover ${className}`}
        style={{
          "--gh-rgba": rgba,
          "--gh-border": borderColor,
          "--gh-br": borderRadius,
        } as React.CSSProperties}
      >
        {children}
      </div>
      <style>{`
        .glare-hover {
          background: var(--surface);
          border-radius: var(--gh-br);
          border: 1px solid var(--gh-border);
          overflow: hidden;
          position: relative;
        }
        .glare-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            -45deg,
            hsla(0,0%,0%,0) 60%,
            var(--gh-rgba) 70%,
            hsla(0,0%,0%,0),
            hsla(0,0%,0%,0) 100%
          );
          transition: 650ms ease;
          background-size: 250% 250%, 100% 100%;
          background-repeat: no-repeat;
          background-position: -100% -100%, 0 0;
          pointer-events: none;
          z-index: 1;
        }
        .glare-hover:hover::before {
          background-position: 100% 100%, 0 0;
        }
      `}</style>
    </>
  );
}
