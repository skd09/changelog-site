"use client";

import { useEffect, useRef } from "react";

const features = [
  {
    icon: "⚡",
    color: "#FFB86C",
    glow: "rgba(255,184,108,0.2)",
    title: "30-Second Stories",
    body: "Every article distilled to its essence by AI. Read the signal, skip the noise. Understand what matters in the time it takes to sip your coffee.",
  },
  {
    icon: "🔒",
    color: "#50FA7B",
    glow: "rgba(80,250,123,0.2)",
    title: "Zero Tracking",
    body: "No account. No email. No ad profiles. We use a random anonymous device ID — nothing tied to your identity. Your reading is yours alone.",
  },
  {
    icon: "↔",
    color: "#BD93F9",
    glow: "rgba(189,147,249,0.2)",
    title: "Swipe to Navigate",
    body: "Left to skip, right to read the full article. One gesture, instant signal. The fastest way to stay informed ever built.",
  },
  {
    icon: "📡",
    color: "#8BE9FD",
    glow: "rgba(139,233,253,0.2)",
    title: "10 Live Channels",
    body: "Technology, AI, Security, Science, Business, Crypto, Gaming, Space, and more. Pick your channels. We pull the freshest stories continuously.",
  },
  {
    icon: "📊",
    color: "#FF79C6",
    glow: "rgba(255,121,198,0.2)",
    title: "Reader Rank",
    body: "Track your reading streak, session stats, and rank up from Rookie to Legend. Knowledge has a scoreboard.",
  },
  {
    icon: "🆓",
    color: "#50FA7B",
    glow: "rgba(80,250,123,0.2)",
    title: "Free Forever",
    body: "Supported by non-personalised ads. No paywalls, no premium tiers, no subscriptions. Quality tech journalism, accessible to everyone.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      aria-labelledby="features-heading"
      style={{
        padding: "120px 24px",
        position: "relative",
        zIndex: 1,
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Section header */}
      <div
        className="reveal"
        style={{ textAlign: "center", marginBottom: 72 }}
      >
        <div className="badge" style={{ marginBottom: 24, width: "fit-content", margin: "0 auto 24px" }}>
          <span className="badge-dot" aria-hidden="true" />
          FEATURES
        </div>
        <h2
          id="features-heading"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: "clamp(28px, 4vw, 52px)",
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
        <p style={{ color: "var(--txt-dim)", fontSize: 17, maxWidth: 520, margin: "0 auto" }}>
          Every design decision in The Changelog starts with one question: does this respect your time?
        </p>
      </div>

      {/* Feature grid */}
      <ul
        role="list"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          listStyle: "none",
          padding: 0,
        }}
        className="stagger"
      >
        {features.map((f) => (
          <li key={f.title} className="reveal">
            <article
              className="feat-card"
              aria-labelledby={`feat-${f.title.replace(/\s/g, "-").toLowerCase()}`}
            >
              {/* Icon */}
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: `${f.glow}`,
                  border: `1px solid ${f.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  marginBottom: 20,
                  boxShadow: `0 0 20px ${f.glow}`,
                }}
                aria-hidden="true"
              >
                {f.icon}
              </div>

              <h3
                id={`feat-${f.title.replace(/\s/g, "-").toLowerCase()}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: 15,
                  letterSpacing: "0.08em",
                  color: f.color,
                  marginBottom: 12,
                  textShadow: `0 0 16px ${f.glow}`,
                }}
              >
                {f.title.toUpperCase()}
              </h3>

              <p style={{ color: "var(--txt-dim)", fontSize: 15, lineHeight: 1.75 }}>
                {f.body}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
