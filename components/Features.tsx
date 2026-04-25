"use client";

import { useEffect, useRef } from "react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const features = [
  {
    icon: "⚡",
    color: "#FFB86C",
    glow: "rgba(255,184,108,0.15)",
    title: "10-Second Stories",
    body: "Every article distilled to its essence by AI. Read the signal, skip the noise.",
    stat: "<10s",
    statLabel: "per story",
  },
  {
    icon: "🔒",
    color: "#50FA7B",
    glow: "rgba(80,250,123,0.15)",
    title: "Zero Data Collected",
    body: "No account. No email. Anonymous device ID only — nothing tied to your identity.",
    stat: "0",
    statLabel: "data collected",
  },
  {
    icon: "↔",
    color: "#BD93F9",
    glow: "rgba(189,147,249,0.15)",
    title: "Swipe to Navigate",
    body: "Left to skip, right to read. One gesture, instant signal.",
    stat: "2",
    statLabel: "gestures total",
  },
  {
    icon: "📡",
    color: "#8BE9FD",
    glow: "rgba(139,233,253,0.15)",
    title: "10 Live Channels",
    body: "AI, Security, Crypto, Science, Space, Gaming, and more. Pick your channels.",
    stat: "10",
    statLabel: "channels",
  },
  {
    icon: "🔥",
    color: "#FF79C6",
    glow: "rgba(255,121,198,0.15)",
    title: "Reading Streaks",
    body: "Track your daily streak, session stats, and rank up from Rookie to Legend.",
    stat: "7",
    statLabel: "rank tiers",
  },
  {
    icon: "🔔",
    color: "#F1FA8C",
    glow: "rgba(241,250,140,0.15)",
    title: "Daily Digest",
    body: "Set your notification time. Get briefed at 7am, lunch, or whenever suits you.",
    stat: "1",
    statLabel: "tap to read",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-labelledby="features-heading"
      className="features-section"
    >
      {/* Atmospheric glow */}
      <div className="features-glow" aria-hidden="true" />

      {/* Section header */}
      <div className="reveal" style={{ textAlign: "center", marginBottom: 80 }}>
        <div className="badge" style={{ marginBottom: 24, width: "fit-content", margin: "0 auto 24px" }}>
          <span className="badge-dot" aria-hidden="true" />
          FEATURES
        </div>
        <h2
          id="features-heading"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 48px)",
            letterSpacing: "-0.01em",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          BUILT DIFFERENT.
          <br />
          <span style={{ color: "var(--neon)", textShadow: "0 0 30px var(--glow-neon)" }}>
            READING DONE RIGHT.
          </span>
        </h2>
        <p style={{ color: "var(--txt-dim)", fontSize: 17, maxWidth: 480, margin: "0 auto", lineHeight: 1.8 }}>
          Every design decision starts with one question: does this respect your time?
        </p>
      </div>

      {/* Feature grid — bento-style */}
      <div className="features-grid stagger">
        {features.map((f, i) => (
          <SpotlightCard
            key={f.title}
            className={`reveal feat-card feat-card--${i}`}
            spotlightColor={f.glow}
          >
            <article aria-labelledby={`feat-${f.title.replace(/\s/g, "-").toLowerCase()}`}>
              {/* Stat corner */}
              <div className="feat-stat" style={{ color: f.color }}>
                <span className="feat-stat__value">{f.stat}</span>
                <span className="feat-stat__label">{f.statLabel}</span>
              </div>

              {/* Icon */}
              <div
                className="feat-icon"
                style={{
                  background: f.glow,
                  border: `1px solid ${f.color}30`,
                  boxShadow: `0 0 24px ${f.glow}`,
                }}
                aria-hidden="true"
              >
                {f.icon}
              </div>

              <h3
                id={`feat-${f.title.replace(/\s/g, "-").toLowerCase()}`}
                className="feat-title"
                style={{
                  color: f.color,
                  textShadow: `0 0 16px ${f.glow}`,
                }}
              >
                {f.title.toUpperCase()}
              </h3>

              <p className="feat-body">{f.body}</p>

              {/* Decorative accent line */}
              <div className="feat-accent" style={{ background: `linear-gradient(90deg, ${f.color}, transparent)` }} aria-hidden="true" />
            </article>
          </SpotlightCard>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="reveal" style={{ textAlign: "center", marginTop: 72 }}>
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 13,
          letterSpacing: "0.12em",
          color: "var(--txt-muted)",
          marginBottom: 20,
        }}>
          AND IT&apos;S COMPLETELY FREE. NO PAYWALLS. NO SUBSCRIPTIONS.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
          <a href="https://apps.apple.com/us/app/the-changelog/id6759820812" target="_blank" rel="noopener noreferrer" className="store-btn" aria-label="Download on the App Store">
            <svg width="16" height="19" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M20.317 14.578c-.037-3.444 2.81-5.097 2.939-5.176-1.601-2.339-4.09-2.661-4.976-2.695-2.112-.215-4.14 1.248-5.21 1.248-1.072 0-2.71-1.22-4.462-1.186-2.283.033-4.4 1.337-5.573 3.374-2.386 4.13-.609 10.243 1.71 13.592 1.141 1.64 2.49 3.47 4.259 3.404 1.72-.068 2.366-1.102 4.444-1.102 2.076 0 2.674 1.102 4.478 1.065 1.845-.033 3.008-1.659 4.14-3.305 1.308-1.888 1.845-3.722 1.872-3.815-.042-.014-3.587-1.374-3.621-5.404z" fill="currentColor"/><path d="M16.893 4.638c.946-1.148 1.586-2.738 1.412-4.32-1.365.055-3.013.908-3.993 2.057-.878 1.012-1.648 2.641-1.44 4.196 1.52.117 3.072-.77 4.021-1.933z" fill="currentColor"/></svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em" }}>APP STORE</span>
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.sharvari.changelog" target="_blank" rel="noopener noreferrer" className="store-btn" aria-label="Get it on Google Play">
            <svg width="16" height="17" viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="M1.5 0.5C0.9 0.9 0.5 1.6 0.5 2.5v21c0 .9.4 1.6 1 2l.1.1 11.7-11.7v-.3L1.5.5z" fill="#8BE9FD"/><path d="M17.4 17.5l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FF79C6"/><path d="M17.5 17.4L13.3 13 1.5 24.8c.4.5 1.1.5 2 .1l14-7.5" fill="#BD93F9"/><path d="M17.5 8.6L3.5 1.1C2.6.6 1.9.7 1.5 1.2L13.3 13l4.2-4.4z" fill="#50FA7B"/></svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.12em" }}>GOOGLE PLAY</span>
          </a>
        </div>
      </div>

      <style>{`
        .features-section {
          padding: 120px 24px;
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
        }
        .features-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(189,147,249,0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .feat-card {
          position: relative;
          overflow: hidden;
        }
        .feat-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          margin-bottom: 18px;
        }
        .feat-stat {
          position: absolute;
          top: 24px;
          right: 24px;
          text-align: right;
        }
        .feat-stat__value {
          display: block;
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 28px;
          line-height: 1;
        }
        .feat-stat__label {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.15em;
          opacity: 0.5;
          text-transform: uppercase;
        }
        .feat-title {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }
        .feat-body {
          color: var(--txt-dim);
          font-size: 14px;
          line-height: 1.7;
        }
        .feat-accent {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .feat-card:hover .feat-accent { opacity: 1; }
        @media (max-width: 900px) {
          .features-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .features-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
