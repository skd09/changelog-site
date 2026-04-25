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
        (el as HTMLElement).style.transform = "translateY(0) rotate(0deg)";
      }, i * 120);
    });
  }, []);

  return (
    <section id="hero" ref={sectionRef} aria-labelledby="hero-heading" className="hero-section">
      <div className="hero-grid">

        {/* ── Left ── */}
        <div className="hero-left">
          <div className="hero-reveal badge" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.6s ease" }}>
            <span className="badge-dot" aria-hidden="true" />
            NOW AVAILABLE ON IOS {"&"} ANDROID
          </div>

          <h1 id="hero-heading" className="hero-reveal hero-h1" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            Tech news.<br />
            <span className="hero-h1__accent">No noise.</span>
          </h1>

          <p className="hero-reveal hero-sub" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            The fastest way to read tech news. Every story distilled to its core — swipe through 10 live channels in under 10 seconds each.
          </p>

          {/* Download buttons */}
          <div className="hero-reveal hero-download" id="download-buttons" role="group" aria-label="Download options" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            <a href="https://apps.apple.com/us/app/the-changelog/id6759820812" target="_blank" rel="noopener noreferrer" className="hero-dl-btn" aria-label="Download on the App Store">
              <svg width="18" height="22" viewBox="0 0 24 28" fill="none" aria-hidden="true"><path d="M20.317 14.578c-.037-3.444 2.81-5.097 2.939-5.176-1.601-2.339-4.09-2.661-4.976-2.695-2.112-.215-4.14 1.248-5.21 1.248-1.072 0-2.71-1.22-4.462-1.186-2.283.033-4.4 1.337-5.573 3.374-2.386 4.13-.609 10.243 1.71 13.592 1.141 1.64 2.49 3.47 4.259 3.404 1.72-.068 2.366-1.102 4.444-1.102 2.076 0 2.674 1.102 4.478 1.065 1.845-.033 3.008-1.659 4.14-3.305 1.308-1.888 1.845-3.722 1.872-3.815-.042-.014-3.587-1.374-3.621-5.404z" fill="currentColor"/><path d="M16.893 4.638c.946-1.148 1.586-2.738 1.412-4.32-1.365.055-3.013.908-3.993 2.057-.878 1.012-1.648 2.641-1.44 4.196 1.52.117 3.072-.77 4.021-1.933z" fill="currentColor"/></svg>
              <span>
                <span className="hero-dl-btn__label">Download on the</span>
                <span className="hero-dl-btn__store">App Store</span>
              </span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.sharvari.changelog" target="_blank" rel="noopener noreferrer" className="hero-dl-btn" aria-label="Get it on Google Play">
              <svg width="18" height="20" viewBox="0 0 24 26" fill="none" aria-hidden="true"><path d="M1.5 0.5C0.9 0.9 0.5 1.6 0.5 2.5v21c0 .9.4 1.6 1 2l.1.1 11.7-11.7v-.3L1.5.5z" fill="#8BE9FD"/><path d="M17.4 17.5l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FF79C6"/><path d="M17.5 17.4L13.3 13 1.5 24.8c.4.5 1.1.5 2 .1l14-7.5" fill="#BD93F9"/><path d="M17.5 8.6L3.5 1.1C2.6.6 1.9.7 1.5 1.2L13.3 13l4.2-4.4z" fill="#50FA7B"/></svg>
              <span>
                <span className="hero-dl-btn__label">Get it on</span>
                <span className="hero-dl-btn__store">Google Play</span>
              </span>
            </a>
          </div>
        </div>

        {/* ── Right: real app screenshot ── */}
        <div className="hero-reveal hero-right" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.9s ease" }} aria-hidden="true">
          <div className="hero-phone-wrapper">
            <div className="hero-phone">
              <div className="hero-phone__frame">
                <img
                  src="/app-screenshot.png"
                  alt="The Changelog app showing a news card"
                  className="hero-phone__screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh; display: flex; align-items: center; justify-content: center;
          padding: 100px 24px 80px; position: relative; overflow: hidden; z-index: 1;
        }
        .hero-grid {
          max-width: 1200px; width: 100%; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1.1fr; gap: 40px; align-items: center;
        }
        .hero-left { display: flex; flex-direction: column; align-items: flex-start; }

        /* ── Typography ── */
        .hero-h1 {
          font-family: var(--font-body); font-weight: 600;
          font-size: clamp(36px, 4.5vw, 60px);
          line-height: 1.15; letter-spacing: -0.02em;
          margin: 20px 0 16px; color: var(--txt);
        }
        .hero-h1__accent { color: var(--neon); text-shadow: 0 0 40px var(--glow-neon); }
        .hero-sub {
          font-size: 16px; color: var(--txt-dim); max-width: 420px; line-height: 1.75; margin-bottom: 32px;
        }

        /* ── Download buttons ── */
        .hero-download { display: flex; gap: 12px; flex-wrap: wrap; }
        .hero-dl-btn {
          display: flex; align-items: center; gap: 12px;
          padding: 12px 20px; border-radius: 14px;
          background: var(--surface); border: 1px solid var(--border);
          color: var(--txt); text-decoration: none;
          transition: all 0.25s ease;
        }
        .hero-dl-btn:hover {
          border-color: rgba(189,147,249,0.35);
          background: rgba(189,147,249,0.06);
          transform: translateY(-2px);
        }
        .hero-dl-btn__label {
          display: block; font-family: var(--font-mono); font-size: 9px;
          letter-spacing: 0.12em; color: var(--txt-dim); margin-bottom: 1px;
        }
        .hero-dl-btn__store {
          display: block; font-family: var(--font-mono); font-size: 14px;
          font-weight: 700; letter-spacing: 0.04em;
        }

        /* ── Right side ── */
        .hero-right { display: flex; justify-content: center; align-items: center; }
        .hero-phone-wrapper { position: relative; padding: 20px; }

        .hero-phone { animation: floatA 6s ease-in-out infinite; }
        .hero-phone__frame {
          width: 280px; background: #0A0B10; border-radius: 42px; padding: 8px;
          border: 1px solid rgba(189,147,249,0.15);
          box-shadow: 0 0 0 1px rgba(0,0,0,0.6), 0 50px 100px rgba(0,0,0,0.5), 0 0 80px rgba(189,147,249,0.06);
        }
        .hero-phone__screenshot {
          width: 100%; border-radius: 36px; display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .hero-left { align-items: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-download { justify-content: center; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
