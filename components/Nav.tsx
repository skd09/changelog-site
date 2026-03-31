"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const links = [
    { href: "/#features", label: "Features" },
    { href: "/#about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ];

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 200,
        transition: "background 0.3s, border-color 0.3s, backdrop-filter 0.3s",
        background: scrolled ? "rgba(13,14,20,0.94)" : "rgba(13,14,20,0.5)",
        backdropFilter: scrolled ? "blur(24px)" : "blur(8px)",
        borderBottom: `1px solid ${scrolled ? "rgba(189,147,249,0.12)" : "transparent"}`,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="The Changelog — return to homepage"
          style={{
            fontFamily: "var(--font-mono)",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.28em",
            textDecoration: "none",
            color: "var(--neon)",
            textShadow: "0 0 20px var(--glow-neon)",
          }}
        >
          THE <span style={{ color: "var(--magenta)", textShadow: "0 0 20px var(--glow-mag)" }}>CHANGELOG</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary navigation" style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <ul
            role="list"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              listStyle: "none",
              marginRight: 24,
            }}
            className="desktop-nav"
          >
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    color: "var(--txt-dim)",
                    padding: "6px 14px",
                    borderRadius: 6,
                    display: "block",
                    transition: "color 0.2s, background 0.2s",
                  }}
                  className="nav-link"
                >
                  {l.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="hamburger"
            style={{
              background: "none",
              border: "1px solid rgba(189,147,249,0.2)",
              borderRadius: 8,
              cursor: "pointer",
              padding: "9px 10px",
              color: "var(--neon)",
              display: "none",
            }}
          >
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
              {menuOpen ? (
                <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M0 1H18M0 7H18M0 13H18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        style={{
          display: menuOpen ? "block" : "none",
          background: "rgba(13,14,20,0.98)",
          borderTop: "1px solid rgba(189,147,249,0.1)",
          padding: "20px 32px 28px",
        }}
      >
        <ul role="list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 4 }}>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  letterSpacing: "0.16em",
                  color: "var(--txt-dim)",
                  padding: "12px 0",
                  display: "block",
                  borderBottom: "1px solid rgba(189,147,249,0.06)",
                  transition: "color 0.2s",
                }}
              >
                {l.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        .nav-link:hover { color: var(--neon) !important; background: rgba(189,147,249,0.06) !important; }
        .download-btn:hover { background: rgba(189,147,249,0.12) !important; box-shadow: 0 0 20px var(--glow-neon) !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
