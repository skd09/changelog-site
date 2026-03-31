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
            Stay Ahead of<br />
            <span className="hero-h1__accent">Tech in 10 Seconds</span>
          </h1>

          <p className="hero-reveal hero-sub" style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.7s ease" }}>
            AI-powered summaries from 50+ trusted sources. Swipe through cards, read what matters, skip the noise. No account needed.
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

        {/* ── Right: phone + feature callouts ── */}
        <div className="hero-reveal hero-right" style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.9s ease" }} aria-hidden="true">
          <div className="hero-phone-wrapper">

            {/* Phone */}
            <div className="hero-phone">
              <div className="hero-phone__frame">
                <div className="hero-phone__screen">
                  <div className="phone-status">
                    <span>9:41</span>
                    <div className="phone-notch" />
                    <div className="phone-status__icons">
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="none"><path d="M1 8.5C3.5 3 10.5 3 13 8.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><path d="M3 7C4.8 4 9.2 4 11 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/><circle cx="7" cy="8" r="1" fill="currentColor"/></svg>
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><rect x="0.5" y="1" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2.5" width="7" height="5" rx="0.5" fill="#50FA7B"/><rect x="13" y="3.5" width="2" height="3" rx="0.5" fill="currentColor"/></svg>
                    </div>
                  </div>
                  <div className="phone-header">
                    <span className="phone-header__title">THE CHANGELOG</span>
                  </div>
                  <div className="phone-cards">
                    <div className="phone-card phone-card--back">
                      <div className="phone-card__img" style={{ background: "linear-gradient(135deg, rgba(255,184,108,0.1), rgba(189,147,249,0.06))" }}>
                        <span className="phone-card__pill" style={{ color: "#FFB86C", borderColor: "rgba(255,184,108,0.3)" }}>CRYPTO</span>
                      </div>
                      <div className="phone-card__body">
                        <div className="phone-card__source">COINDESK</div>
                        <div className="skel" /><div className="skel skel--short" />
                      </div>
                    </div>
                    <div className="phone-card phone-card--front">
                      <div className="phone-card__img" style={{ background: "linear-gradient(135deg, rgba(80,250,123,0.12), rgba(139,233,253,0.08))" }}>
                        <div className="phone-card__img-grid" />
                        <span className="phone-card__pill" style={{ color: "#50FA7B", borderColor: "rgba(80,250,123,0.35)" }}>AI</span>
                        <div className="phone-card__votes">
                          <div className="vote-btn vote-btn--up"><svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M14 9V5a3 3 0 0 0-6 0v4H5l1.5 11h11L19 9h-5z" stroke="#50FA7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                          <div className="vote-btn vote-btn--down"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ transform: "rotate(180deg)" }}><path d="M14 9V5a3 3 0 0 0-6 0v4H5l1.5 11h11L19 9h-5z" stroke="rgba(248,248,242,0.3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                        </div>
                      </div>
                      <div className="phone-card__body">
                        <div className="phone-card__meta">
                          <span className="phone-card__source">TECHCRUNCH</span>
                          <span className="phone-card__time">12M AGO</span>
                        </div>
                        <div className="phone-card__headline">OpenAI Launches GPT-5 With Real-Time Reasoning</div>
                        <div className="phone-card__divider" />
                        <div className="phone-card__summary">OpenAI unveiled GPT-5 with native reasoning capabilities, processing queries in real-time.</div>
                        <div className="phone-card__actions">
                          <div className="action-icon"><svg width="11" height="13" viewBox="0 0 10 14" fill="none"><path d="M1 1h8v12L5 10 1 13V1z" stroke="rgba(248,248,242,0.3)" strokeWidth="1.2"/></svg></div>
                          <div className="action-icon"><svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 8V10H10V8M6 1V8M6 1L3 4M6 1L9 4" stroke="rgba(248,248,242,0.3)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                          <span className="action-spacer" />
                          <div className="action-cta"><span>READ ARTICLE</span><span className="action-cta__arrow">↗</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="phone-tab-bar">
                    <div className="phone-tab phone-tab--active"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg><span>FEED</span></div>
                    <div className="phone-tab"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg><span>DISCOVER</span></div>
                    <div className="phone-tab"><svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg><span>SETTINGS</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature callout cards */}
            <div className="callout callout--1">
              <div className="callout__icon" style={{ background: "rgba(80,250,123,0.1)", borderColor: "rgba(80,250,123,0.25)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#50FA7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="callout__title" style={{ color: "#50FA7B" }}>10-Second Stories</div>
                <div className="callout__desc">AI distills every article to its core</div>
              </div>
            </div>

            <div className="callout callout--2">
              <div className="callout__icon" style={{ background: "rgba(139,233,253,0.1)", borderColor: "rgba(139,233,253,0.25)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#8BE9FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="callout__title" style={{ color: "#8BE9FD" }}>No Data Collected</div>
                <div className="callout__desc">Anonymous device ID only</div>
              </div>
            </div>

            <div className="callout callout--3">
              <div className="callout__icon" style={{ background: "rgba(255,121,198,0.1)", borderColor: "rgba(255,121,198,0.25)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" stroke="#FF79C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#FF79C6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <div>
                <div className="callout__title" style={{ color: "#FF79C6" }}>Daily Digest</div>
                <div className="callout__desc">Get briefed at your preferred time</div>
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
        .hero-phone-wrapper { position: relative; padding: 20px 80px 20px 40px; }

        .hero-phone { animation: floatA 6s ease-in-out infinite; }
        .hero-phone__frame {
          width: 270px; background: #0A0B10; border-radius: 42px; padding: 7px;
          border: 1px solid rgba(189,147,249,0.1);
        }
        .hero-phone__screen {
          border-radius: 36px; overflow: hidden; background: #0D0E14;
          display: flex; flex-direction: column; height: 540px;
        }

        /* Phone internals */
        .phone-status {
          display: flex; justify-content: space-between; align-items: center;
          padding: 12px 22px 0; font-family: var(--font-mono); font-size: 11px;
          font-weight: 600; color: rgba(248,248,242,0.5); position: relative; z-index: 2;
        }
        .phone-notch {
          width: 76px; height: 20px; background: #0A0B10;
          border-radius: 0 0 14px 14px; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
        }
        .phone-status__icons { display: flex; gap: 6px; align-items: center; color: rgba(248,248,242,0.4); }
        .phone-header { text-align: center; padding: 14px 0 10px; }
        .phone-header__title {
          font-family: var(--font-mono); font-size: 9px; font-weight: 700;
          letter-spacing: 0.3em; color: var(--neon);
        }

        .phone-cards { flex: 1; position: relative; margin: 0 10px; }
        .phone-card {
          position: absolute; inset: 0; border-radius: 16px; overflow: hidden;
          display: flex; flex-direction: column; border: 1px solid rgba(189,147,249,0.06);
        }
        .phone-card--back { transform: scale(0.92) translateY(10px); opacity: 0.3; background: #1A1B25; }
        .phone-card--front { background: #16171F; border-color: rgba(189,147,249,0.12); z-index: 1; }
        .phone-card__img { height: 34%; position: relative; overflow: hidden; }
        .phone-card__img-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(80,250,123,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(80,250,123,0.04) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .phone-card__pill {
          position: absolute; bottom: 8px; left: 10px;
          font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.15em;
          background: rgba(13,14,20,0.88); padding: 3px 9px; border-radius: 99px; border: 1px solid;
        }
        .phone-card__votes { position: absolute; bottom: 8px; right: 10px; display: flex; gap: 4px; }
        .vote-btn { width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
        .vote-btn--up { background: rgba(80,250,123,0.08); border: 1px solid rgba(80,250,123,0.25); }
        .vote-btn--down { background: rgba(98,114,164,0.08); border: 1px solid rgba(98,114,164,0.15); }

        .phone-card__body { flex: 1; padding: 10px 12px; display: flex; flex-direction: column; }
        .phone-card__meta { display: flex; justify-content: space-between; margin-bottom: 8px; }
        .phone-card__source { font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.15em; color: rgba(248,248,242,0.3); }
        .phone-card__time { font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.1em; color: var(--neon); opacity: 0.5; }
        .phone-card__headline { font-family: var(--font-mono); font-size: 13px; font-weight: 700; color: #F8F8F2; line-height: 1.35; margin-bottom: 8px; }
        .phone-card__divider { height: 1px; background: rgba(189,147,249,0.08); margin-bottom: 8px; }
        .phone-card__summary { font-size: 10.5px; color: rgba(248,248,242,0.35); line-height: 1.6; }
        .skel { height: 9px; background: rgba(248,248,242,0.1); border-radius: 3px; margin-bottom: 5px; }
        .skel--short { width: 65%; }
        .phone-card__actions { display: flex; align-items: center; gap: 6px; margin-top: auto; padding-top: 10px; }
        .action-icon { width: 28px; height: 28px; border-radius: 50%; background: rgba(98,114,164,0.06); border: 1px solid rgba(98,114,164,0.12); display: flex; align-items: center; justify-content: center; }
        .action-spacer { flex: 1; }
        .action-cta {
          display: flex; align-items: center; gap: 4px;
          background: rgba(189,147,249,0.05); border: 1px solid rgba(189,147,249,0.2);
          border-radius: 99px; padding: 6px 12px;
          font-family: var(--font-mono); font-size: 7px; letter-spacing: 0.12em; color: var(--neon);
        }
        .action-cta__arrow { font-size: 9px; }

        .phone-tab-bar {
          display: flex; justify-content: space-around; padding: 8px 14px 14px;
          border-top: 1px solid rgba(189,147,249,0.05); background: rgba(13,14,20,0.95);
        }
        .phone-tab {
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          color: rgba(248,248,242,0.18); font-family: var(--font-mono); font-size: 6px; letter-spacing: 0.1em;
        }
        .phone-tab--active { color: var(--neon); }

        /* ── Callout cards ── */
        .callout {
          position: absolute;
          display: flex; align-items: center; gap: 12px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 14px 18px;
          backdrop-filter: blur(12px);
          animation: floatB 7s ease-in-out infinite;
          white-space: nowrap;
        }
        .callout--1 { top: 60px; right: -40px; animation-delay: 0s; }
        .callout--2 { top: 230px; right: -60px; animation-delay: -2s; }
        .callout--3 { bottom: 100px; right: -30px; animation-delay: -4s; }
        .callout__icon {
          width: 34px; height: 34px; border-radius: 10px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          border: 1px solid;
        }
        .callout__title {
          font-family: var(--font-mono); font-size: 11px; font-weight: 700;
          letter-spacing: 0.06em; margin-bottom: 2px;
        }
        .callout__desc { font-size: 11px; color: var(--txt-dim); }

        /* ── Responsive ── */
        @media (max-width: 1100px) {
          .callout { display: none !important; }
          .hero-phone-wrapper { padding: 20px; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .hero-left { align-items: center; }
          .hero-sub { margin-left: auto; margin-right: auto; }
          .hero-cta-row { justify-content: center; }
          .hero-download { justify-content: center; }
          .hero-right { display: none !important; }
        }
      `}</style>
    </section>
  );
}
