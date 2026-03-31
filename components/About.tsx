"use client";

import { useEffect, useRef } from "react";

const stats = [
  { value: "10",  label: "Live Channels", color: "var(--neon)" },
  { value: "50+", label: "Sources", color: "var(--magenta)" },
  { value: "0",   label: "Data Collected", color: "var(--green)" },
  { value: "∞",   label: "Free Forever", color: "var(--cyan)" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      aria-labelledby="about-heading"
      style={{
        padding: "120px 24px",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* Background accent */}
      <div aria-hidden="true" style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, transparent 0%, rgba(189,147,249,0.03) 50%, transparent 100%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Stats row */}
        <ul
          role="list"
          className="reveal stagger"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 2,
            marginBottom: 96,
            listStyle: "none",
            padding: 0,
            background: "var(--border)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {stats.map((s) => (
            <li
              key={s.label}
              style={{
                background: "var(--surface)",
                padding: "36px 24px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  fontSize: "clamp(36px, 4vw, 56px)",
                  color: s.color,
                  textShadow: `0 0 30px ${s.color}60`,
                  lineHeight: 1,
                  marginBottom: 8,
                }}
                aria-label={`${s.value} ${s.label}`}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  color: "var(--txt-dim)",
                }}
                aria-hidden="true"
              >
                {s.label.toUpperCase()}
              </div>
            </li>
          ))}
        </ul>

        {/* Two-column content */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "start",
          }}
          className="about-grid"
        >
          <div>
            <div className="badge reveal" style={{ marginBottom: 24, width: "fit-content" }}>
              <span className="badge-dot" aria-hidden="true" />
              ABOUT
            </div>

            <h2
              id="about-heading"
              className="reveal"
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "clamp(26px, 3.5vw, 46px)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                marginBottom: 32,
              }}
            >
              BUILT FOR
              <br />
              <span style={{ color: "var(--magenta)", textShadow: "0 0 30px var(--glow-mag)" }}>
                SIGNAL HUNTERS.
              </span>
            </h2>

            <div
              className="reveal"
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <p style={{ color: "var(--txt-dim)", fontSize: 16, lineHeight: 1.8 }}>
                The Changelog was built out of frustration. Tech news had become a noise machine — 
                long-form padding, clickbait headlines, and apps that track your every tap to sell ads.
              </p>
              <p style={{ color: "var(--txt-dim)", fontSize: 16, lineHeight: 1.8 }}>
                We built something different: an AI-powered news reader that strips every story 
                to its core, delivers it in a card you can read in 10 seconds, and asks absolutely 
                nothing from you in return.
              </p>
              <p style={{ color: "var(--txt-dim)", fontSize: 16, lineHeight: 1.8 }}>
                No account creation. No email. No personality profiling. A random anonymous device 
                ID is all we know about you — and we like it that way.
              </p>
            </div>
          </div>

          {/* Right: principles */}
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {[
              { title: "Privacy by design", body: "Anonymous device IDs only. No PII ever collected. Built on DigitalOcean + Neon — your data never touches ad networks.", color: "var(--green)" },
              { title: "AI-powered summaries", body: "Every article processed by Claude (Anthropic) server-side. Only article text goes to the API — never your data.", color: "var(--neon)" },
              { title: "Radically simple UX", body: "One swipe to skip, one swipe to read. No algorithmic feed manipulation. Chronological. Clean. Fast.", color: "var(--magenta)" },
              { title: "Open feedback loop", body: "Found a bug? Have a channel suggestion? In-app feedback goes straight to us. No email required.", color: "var(--cyan)" },
            ].map((p) => (
              <div
                key={p.title}
                style={{
                  padding: "22px 24px",
                  background: "var(--surface)",
                  borderRadius: 16,
                  border: "1px solid var(--border)",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  transition: "border-color 0.3s",
                }}
                className="about-item"
              >
                <div style={{
                  width: 4, minHeight: 40, borderRadius: 2,
                  background: p.color, flexShrink: 0, marginTop: 2,
                  boxShadow: `0 0 10px ${p.color}80`,
                }} aria-hidden="true" />
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12, letterSpacing: "0.12em",
                    color: p.color, marginBottom: 8,
                  }}>
                    {p.title.toUpperCase()}
                  </h3>
                  <p style={{ color: "var(--txt-dim)", fontSize: 14, lineHeight: 1.7 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .about-grid { @media (max-width: 900px) { grid-template-columns: 1fr !important; } }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          ul[style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          ul[style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .about-item:hover { border-color: rgba(189,147,249,0.25) !important; }
      `}</style>
    </section>
  );
}
