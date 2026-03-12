"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hero-reveal");
    if (!els) return;
    els.forEach((el, i) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = "1";
        (el as HTMLElement).style.transform = "translateY(0)";
      }, i * 120);
    });
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      aria-labelledby="hero-heading"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "100px 24px 80px",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* Atmospheric glows */}
      <div aria-hidden="true" style={{
        position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)",
        width: 800, height: 800, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(189,147,249,0.1) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-10%", right: "-5%",
        width: 500, height: 500, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,121,198,0.08) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", top: "30%", left: "-5%",
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(139,233,253,0.04) 0%, transparent 65%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200,
        width: "100%",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
      }} className="hero-grid">

        {/* ── Left: copy ── */}
        <div>
          <div
            className="hero-reveal badge"
            style={{ opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease", marginBottom: 32, width: "fit-content" }}
          >
            <span className="badge-dot" aria-hidden="true" />
            NOW AVAILABLE ON IOS &amp; ANDROID
          </div>

          <h1
            id="hero-heading"
            className="hero-reveal"
            style={{
              opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease",
              fontFamily: "var(--font-mono)",
              fontWeight: 700,
              fontSize: "clamp(38px, 5.5vw, 80px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 8,
            }}
          >
            <span>TECH NEWS.</span>
            <br />
            <span style={{ color: "var(--neon)", textShadow: "0 0 40px var(--glow-neon)" }}>NO NOISE.</span>
          </h1>

          <p
            className="hero-reveal"
            style={{
              opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease",
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(12px, 1.4vw, 15px)",
              letterSpacing: "0.12em",
              color: "var(--txt-dim)",
              marginBottom: 24,
            }}
          >
            STAY AHEAD IN UNDER 30 SECONDS PER STORY
          </p>

          <p
            className="hero-reveal"
            style={{
              opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease",
              fontSize: 17,
              color: "var(--txt-dim)",
              marginBottom: 48,
              maxWidth: 440,
              lineHeight: 1.75,
            }}
          >
            AI-summarized tech news served in a swipeable card feed.
            No account. No tracking. No subscription. Just signal.
          </p>

          {/* Store buttons */}
          <div
            className="hero-reveal stagger"
            style={{
              opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease",
              display: "flex", flexWrap: "wrap", gap: 14,
            }}
            role="group"
            aria-label="Download options"
          >
            <a
              href="https://apps.apple.com/us/app/the-changelog/id6759820812"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn"
              aria-label="Download on the App Store for iPhone and iPad"
            >
              {/* Apple icon */}
              <svg width="24" height="28" viewBox="0 0 24 28" fill="none" aria-hidden="true" focusable="false">
                <path d="M20.317 14.578c-.037-3.444 2.81-5.097 2.939-5.176-1.601-2.339-4.09-2.661-4.976-2.695-2.112-.215-4.14 1.248-5.21 1.248-1.072 0-2.71-1.22-4.462-1.186-2.283.033-4.4 1.337-5.573 3.374-2.386 4.13-.609 10.243 1.71 13.592 1.141 1.64 2.49 3.47 4.259 3.404 1.72-.068 2.366-1.102 4.444-1.102 2.076 0 2.674 1.102 4.478 1.065 1.845-.033 3.008-1.659 4.14-3.305 1.308-1.888 1.845-3.722 1.872-3.815-.042-.014-3.587-1.374-3.621-5.404z" fill="currentColor"/>
                <path d="M16.893 4.638c.946-1.148 1.586-2.738 1.412-4.32-1.365.055-3.013.908-3.993 2.057-.878 1.012-1.648 2.641-1.44 4.196 1.52.117 3.072-.77 4.021-1.933z" fill="currentColor"/>
              </svg>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em", color: "var(--txt-dim)", marginBottom: 2 }}>DOWNLOAD ON THE</span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 16, letterSpacing: "0.05em" }}>App Store</span>
              </span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.sharvari.changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="store-btn"
              aria-label="Get it on Google Play for Android"
            >
              {/* Play Store icon */}
              <svg width="24" height="26" viewBox="0 0 24 26" fill="none" aria-hidden="true" focusable="false">
                <path d="M1.5 0.5C0.9 0.9 0.5 1.6 0.5 2.5v21c0 .9.4 1.6 1 2l.1.1 11.7-11.7v-.3L1.5.5z" fill="#8BE9FD"/>
                <path d="M17.4 17.5l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FF79C6"/>
                <path d="M17.5 17.4L13.3 13 1.5 24.8c.4.5 1.1.5 2 .1l14-7.5" fill="#BD93F9"/>
                <path d="M17.5 8.6L3.5 1.1C2.6.6 1.9.7 1.5 1.2L13.3 13l4.2-4.4z" fill="#50FA7B"/>
              </svg>
              <span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em", color: "var(--txt-dim)", marginBottom: 2 }}>GET IT ON</span>
                <span style={{ display: "block", fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 16, letterSpacing: "0.05em" }}>Google Play</span>
              </span>
            </a>
          </div>

          {/* Trust line */}
          <p
            className="hero-reveal"
            style={{
              opacity: 0, transform: "translateY(28px)", transition: "all 0.7s ease",
              marginTop: 32,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.12em",
              color: "var(--txt-muted)",
              display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap",
            }}
          >
            <span>✦ FREE FOREVER</span>
            <span>✦ NO ACCOUNT</span>
            <span>✦ NO TRACKING</span>
          </p>
        </div>

        {/* ── Right: phone mockups ── */}
        <div
          className="hero-reveal phone-showcase"
          style={{
            opacity: 0, transform: "translateY(28px)", transition: "all 0.9s ease",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            gap: 20,
            position: "relative",
          }}
          aria-hidden="true"
        >
          {/* Back phone */}
          <div
            style={{
              animation: "floatB 7s ease-in-out infinite",
              marginBottom: 40,
              opacity: 0.75,
              flexShrink: 0,
            }}
          >
            <div className="phone-frame" style={{ width: 180 }}>
              <div className="phone-screen" style={{ height: 360, background: "var(--surface)" }}>
                {/* Article card mockup */}
                <div style={{ padding: "48px 14px 14px", height: "100%" }}>
                  <div style={{
                    background: "linear-gradient(135deg, #1C1D29, #21222C)",
                    borderRadius: 14,
                    padding: 14,
                    border: "1px solid rgba(189,147,249,0.1)",
                    height: "100%",
                  }}>
                    <div style={{ height: 80, background: "rgba(139,233,253,0.08)", borderRadius: 10, marginBottom: 12 }} />
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--cyan)", letterSpacing: "0.2em", marginBottom: 8 }}>TECHNOLOGY</div>
                    <div style={{ height: 10, background: "rgba(248,248,242,0.2)", borderRadius: 4, marginBottom: 6, width: "90%" }} />
                    <div style={{ height: 10, background: "rgba(248,248,242,0.2)", borderRadius: 4, marginBottom: 6, width: "75%" }} />
                    <div style={{ height: 8, background: "rgba(98,114,164,0.3)", borderRadius: 4, marginBottom: 4 }} />
                    <div style={{ height: 8, background: "rgba(98,114,164,0.3)", borderRadius: 4, marginBottom: 4, width: "80%" }} />
                    <div style={{ height: 8, background: "rgba(98,114,164,0.3)", borderRadius: 4, marginBottom: 4, width: "65%" }} />
                    <div style={{
                      marginTop: 16,
                      background: "rgba(189,147,249,0.12)",
                      border: "1px solid rgba(189,147,249,0.3)",
                      borderRadius: 8,
                      padding: "8px 12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, color: "var(--neon)", letterSpacing: "0.15em" }}>FULL ARTICLE ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Front phone */}
          <div
            style={{
              animation: "floatA 6s ease-in-out infinite",
              flexShrink: 0,
            }}
          >
            <div className="phone-frame" style={{ width: 210 }}>
              <div className="phone-screen" style={{ height: 420, background: "var(--bg)" }}>
                <div style={{ padding: "48px 14px 14px", height: "100%" }}>
                  {/* Header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, padding: "0 4px" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.25em", color: "var(--neon)" }}>THE CHANGELOG</span>
                    <div style={{ width: 22, height: 22, borderRadius: "50%", border: "1px solid rgba(189,147,249,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px solid var(--neon)" }} />
                    </div>
                  </div>
                  {/* Article image */}
                  <div style={{
                    height: 130,
                    borderRadius: 14,
                    background: "linear-gradient(135deg, rgba(139,233,253,0.15), rgba(189,147,249,0.15))",
                    border: "1px solid rgba(189,147,249,0.15)",
                    marginBottom: 14,
                    position: "relative",
                    overflow: "hidden",
                  }}>
                    <div style={{ position: "absolute", inset: 0, background: "repeating-linear-gradient(45deg, rgba(189,147,249,0.03) 0px, rgba(189,147,249,0.03) 1px, transparent 1px, transparent 12px)" }} />
                    <div style={{ position: "absolute", bottom: 10, left: 10 }}>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, letterSpacing: "0.2em", color: "var(--neon)", background: "rgba(13,14,20,0.8)", padding: "3px 8px", borderRadius: 99, border: "1px solid rgba(189,147,249,0.3)" }}>⬡ AI</span>
                    </div>
                  </div>
                  {/* Source + time */}
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, color: "var(--txt-dim)", letterSpacing: "0.12em" }}>TECHCRUNCH</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 7, color: "var(--txt-muted)", letterSpacing: "0.1em" }}>12M AGO</span>
                  </div>
                  <div style={{ height: 11, background: "rgba(248,248,242,0.85)", borderRadius: 3, marginBottom: 6 }} />
                  <div style={{ height: 11, background: "rgba(248,248,242,0.85)", borderRadius: 3, marginBottom: 6, width: "80%" }} />
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 5 }}>
                    {[1,0.7,0.5].map((op, i) => (
                      <div key={i} style={{ height: 8, background: `rgba(98,114,164,${op * 0.5})`, borderRadius: 3, width: i === 2 ? "60%" : "100%" }} />
                    ))}
                  </div>
                  {/* CTA */}
                  <div style={{
                    marginTop: 16,
                    background: "linear-gradient(135deg, var(--neon), var(--magenta))",
                    borderRadius: 10,
                    padding: "9px",
                    textAlign: "center",
                  }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 8, fontWeight: 700, letterSpacing: "0.18em", color: "#0D0E14" }}>FULL ARTICLE ↗</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glow under phones */}
          <div style={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            width: 300,
            height: 100,
            background: "radial-gradient(ellipse, rgba(189,147,249,0.2) 0%, transparent 70%)",
            pointerEvents: "none",
            filter: "blur(20px)",
          }} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 60px !important; text-align: center; }
          .hero-grid .badge { margin: 0 auto 32px !important; }
          .hero-grid p[style*="maxWidth"] { margin: 0 auto 48px !important; }
          .hero-grid div[role="group"] { justify-content: center; }
          .hero-grid p[style*="marginTop: 32"] { justify-content: center; }
          .phone-showcase { display: none !important; }
        }
      `}</style>
    </section>
  );
}
