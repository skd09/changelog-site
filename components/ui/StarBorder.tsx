"use client";

interface StarBorderProps {
  children: React.ReactNode;
  color?: string;
  speed?: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  [key: string]: unknown;
}

export default function StarBorder({
  children,
  color = "#BD93F9",
  speed = "6s",
  className = "",
  as: Component = "a",
  ...rest
}: StarBorderProps) {
  return (
    <>
      {/* @ts-ignore dynamic element */}
      <Component className={`star-border ${className}`} {...rest}>
        <div
          className="star-border__gradient star-border__gradient--bottom"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        />
        <div
          className="star-border__gradient star-border__gradient--top"
          style={{
            background: `radial-gradient(circle, ${color}, transparent 10%)`,
            animationDuration: speed,
          }}
        />
        <div className="star-border__inner">{children}</div>
      </Component>
      <style>{`
        .star-border {
          display: inline-block;
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          padding: 1px;
          text-decoration: none;
          color: inherit;
        }
        .star-border__gradient {
          position: absolute;
          width: 300%;
          height: 50%;
          opacity: 0.7;
          border-radius: 50%;
          z-index: 0;
        }
        .star-border__gradient--bottom {
          bottom: -12px;
          right: -250%;
          animation: star-bottom linear infinite alternate;
        }
        .star-border__gradient--top {
          top: -12px;
          left: -250%;
          animation: star-top linear infinite alternate;
        }
        .star-border__inner {
          position: relative;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 12px 20px;
          z-index: 1;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        @keyframes star-bottom {
          0% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(-100%); opacity: 0; }
        }
        @keyframes star-top {
          0% { transform: translateX(0%); opacity: 1; }
          100% { transform: translateX(100%); opacity: 0; }
        }
      `}</style>
    </>
  );
}
