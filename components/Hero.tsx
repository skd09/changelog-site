"use client";

import { useEffect, useRef } from "react";
import DecryptedText from "@/components/ui/DecryptedText";
import CountUp from "@/components/ui/CountUp";
import StarBorder from "@/components/ui/StarBorder";

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
    <section id="hero" ref={sectionRef} aria-labelledby="hero-heading" className="hero-section">
      {/* Atmospheric glow */}
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-grid">

        {/* ── Left: copy ── */}
        <div className="hero-left">
          <div className="hero-reveal hero-badge" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
            <span className="badge-dot" aria-hidden="true" />
            NOW ON IOS {"&"} ANDROID
          </div>

          <h1 id="hero-heading" className="hero-reveal hero-h1" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            <DecryptedText text="Tech news." speed={40} maxIterations={8} animateOn="view" sequential revealDirection="start" className="hero-h1__char" encryptedClassName="hero-h1__char--encrypted" />
            <br />
            <span className="hero-h1__accent">
              <DecryptedText text="No noise." speed={40} maxIterations={8} animateOn="view" sequential revealDirection="start" className="hero-h1__char" encryptedClassName="hero-h1__char--encrypted" />
            </span>
          </h1>

          <p className="hero-reveal hero-sub" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            The fastest way to read tech news. Every story distilled to its core — swipe through 10 live channels in under 10 seconds each.
          </p>

          {/* Download buttons */}
          <div className="hero-reveal hero-download" role="group" aria-label="Download options" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            <StarBorder as="a" href="https://apps.apple.com/us/app/the-changelog/id6759820812" target="_blank" rel="noopener noreferrer" color="#BD93F9" speed="5s" aria-label="Download on the App Store">
              <svg width="18" height="22" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M20.317 14.578c-.037-3.444 2.81-5.097 2.939-5.176-1.601-2.339-4.09-2.661-4.976-2.695-2.112-.215-4.14 1.248-5.21 1.248-1.072 0-2.71-1.22-4.462-1.186-2.283.033-4.4 1.337-5.573 3.374-2.386 4.13-.609 10.243 1.71 13.592 1.141 1.64 2.49 3.47 4.259 3.404 1.72-.068 2.366-1.102 4.444-1.102 2.076 0 2.674 1.102 4.478 1.065 1.845-.033 3.008-1.659 4.14-3.305 1.308-1.888 1.845-3.722 1.872-3.815-.042-.014-3.587-1.374-3.621-5.404z" fill="currentColor"/><path d="M16.893 4.638c.946-1.148 1.586-2.738 1.412-4.32-1.365.055-3.013.908-3.993 2.057-.878 1.012-1.648 2.641-1.44 4.196 1.52.117 3.072-.77 4.021-1.933z" fill="currentColor"/></svg>
              <span>
                <span className="hero-dl-btn__label">Download on the</span>
                <span className="hero-dl-btn__store">App Store</span>
              </span>
            </StarBorder>
            <StarBorder as="a" href="https://play.google.com/store/apps/details?id=com.sharvari.changelog" target="_blank" rel="noopener noreferrer" color="#50FA7B" speed="7s" aria-label="Get it on Google Play">
              <svg width="18" height="20" viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="M1.5 0.5C0.9 0.9 0.5 1.6 0.5 2.5v21c0 .9.4 1.6 1 2l.1.1 11.7-11.7v-.3L1.5.5z" fill="#8BE9FD"/><path d="M17.4 17.5l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FF79C6"/><path d="M17.5 17.4L13.3 13 1.5 24.8c.4.5 1.1.5 2 .1l14-7.5" fill="#BD93F9"/><path d="M17.5 8.6L3.5 1.1C2.6.6 1.9.7 1.5 1.2L13.3 13l4.2-4.4z" fill="#50FA7B"/></svg>
              <span>
                <span className="hero-dl-btn__label">Get it on</span>
                <span className="hero-dl-btn__store">Google Play</span>
              </span>
            </StarBorder>
          </div>

          {/* Quick stats */}
          <div className="hero-reveal hero-stats" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s ease" }}>
            <div className="hero-stat">
              <span className="hero-stat__value"><CountUp to={50} duration={1.5} suffix="+" /></span>
              <span className="hero-stat__label">SOURCES</span>
            </div>
            <div className="hero-stat__divider" />
            <div className="hero-stat">
              <span className="hero-stat__value">&lt;<CountUp to={10} duration={1} />s</span>
              <span className="hero-stat__label">PER STORY</span>
            </div>
            <div className="hero-stat__divider" />
            <div className="hero-stat">
              <span className="hero-stat__value">0</span>
              <span className="hero-stat__label">DATA COLLECTED</span>
            </div>
          </div>
        </div>

        {/* ── Right: real app screenshot ── */}
        <div className="hero-reveal hero-right" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.9s ease" }} aria-hidden="true">
          <div className="hero-phone">
            <div className="hero-phone__frame">
              <img
                src="/app-screenshot.png"
                alt="The Changelog app showing a news card"
                className="hero-phone__screenshot"
                width={280}
                height={607}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px 80px;
          position: relative;
          overflow: hidden;
          z-index: 1;
        }
        .hero-glow {
          position: absolute;
          top: -200px;
          left: -100px;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(189,147,249,0.08) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-grid {
          max-width: 1100px;
          width: 100%;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 32px;
          align-items: center;
        }
        .hero-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        /* ── Decrypted text ── */
        .hero-h1__char { transition: color 0.1s; }
        .hero-h1__char--encrypted {
          color: var(--txt-muted);
          font-family: var(--font-mono);
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 10px;
          letter-spacing: 0.28em;
          color: var(--neon);
          padding: 6px 18px;
          border: 1px solid rgba(189,147,249,0.25);
          border-radius: 99px;
          background: rgba(189,147,249,0.05);
        }

        /* ── Typography ── */
        .hero-h1 {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: clamp(40px, 5vw, 64px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          margin: 16px 0 12px;
          color: var(--txt);
        }
        .hero-h1__accent {
          color: var(--neon);
          text-shadow: 0 0 40px var(--glow-neon);
        }
        .hero-sub {
          font-size: 16px;
          color: var(--txt-dim);
          max-width: 420px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* ── Download buttons ── */
        .hero-download {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .hero-download .star-border:hover {
          transform: translateY(-2px);
          transition: transform 0.25s ease;
        }
        .hero-dl-btn__label {
          display: block;
          font-family: var(--font-mono);
          font-size: 9px;
          letter-spacing: 0.12em;
          color: var(--txt-dim);
          margin-bottom: 1px;
        }
        .hero-dl-btn__store {
          display: block;
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        /* ── Quick stats ── */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .hero-stat__value {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 24px;
          color: var(--txt);
          line-height: 1;
        }
        .hero-stat__label {
          font-family: var(--font-mono);
          font-size: 8px;
          letter-spacing: 0.2em;
          color: var(--txt-muted);
          margin-top: 4px;
        }
        .hero-stat__divider {
          width: 1px;
          height: 32px;
          background: var(--border);
        }

        /* ── Phone ── */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .hero-phone {
          animation: floatA 6s ease-in-out infinite;
        }
        .hero-phone__frame {
          width: 280px;
          background: #0A0B10;
          border-radius: 42px;
          padding: 8px;
          border: 1px solid rgba(189,147,249,0.15);
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.6),
            0 40px 80px rgba(0,0,0,0.5),
            0 0 60px rgba(189,147,249,0.06);
        }
        .hero-phone__screenshot {
          width: 100%;
          height: auto;
          border-radius: 36px;
          display: block;
        }

        /* ── Responsive: Tablet ── */
        @media (max-width: 1024px) {
          .hero-grid { gap: 32px; }
          .hero-phone__frame { width: 240px; border-radius: 36px; padding: 6px; }
          .hero-phone__screenshot { border-radius: 30px; }
        }

        /* ── Responsive: Mobile ── */
        @media (max-width: 768px) {
          .hero-section { padding: 100px 20px 48px; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }
          .hero-left { align-items: center; }
          .hero-sub { margin-left: auto; margin-right: auto; max-width: 360px; font-size: 15px; }
          .hero-download { justify-content: center; }
          .hero-stats { justify-content: center; }
          .hero-stat { align-items: center; }

          /* Show phone on mobile — smaller */
          .hero-right { order: -1; }
          .hero-phone__frame { width: 200px; border-radius: 32px; padding: 6px; }
          .hero-phone__screenshot { border-radius: 27px; }
          .hero-phone { animation: none; }
        }

        /* ── Responsive: Small phones ── */
        @media (max-width: 400px) {
          .hero-section { padding: 90px 16px 40px; }
          .hero-h1 { font-size: 36px; }
          .hero-dl-btn { padding: 10px 16px; }
          .hero-dl-btn__store { font-size: 12px; }
          .hero-stats { gap: 14px; }
          .hero-stat__value { font-size: 20px; }
          .hero-phone__frame { width: 180px; border-radius: 28px; }
          .hero-phone__screenshot { border-radius: 24px; }
        }
      `}</style>
    </section>
  );
}
