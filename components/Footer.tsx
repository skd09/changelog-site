import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(189,147,249,0.1)",
        background: "rgba(13,14,20,0.8)",
        backdropFilter: "blur(12px)",
        padding: "60px 24px 40px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Top row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 40,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: 15,
                letterSpacing: "0.28em",
                color: "var(--neon)",
                textShadow: "0 0 20px var(--glow-neon)",
                marginBottom: 12,
              }}
            >
              THE <span style={{ color: "var(--magenta)", textShadow: "0 0 20px var(--glow-mag)" }}>CHANGELOG</span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.1em",
                color: "var(--txt-muted)",
                maxWidth: 260,
                lineHeight: 1.7,
              }}
            >
              TECH NEWS. NO NOISE.
              <br />
              AVAILABLE ON IOS &amp; ANDROID.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation">
            <ul
              role="list"
              style={{
                listStyle: "none",
                display: "flex",
                flexWrap: "wrap",
                gap: "12px 32px",
                padding: 0,
              }}
            >
              {[
                { href: "/#features", label: "Features" },
                { href: "/#about", label: "About" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
                { href: "mailto:hello@thechangelog.app", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      color: "var(--txt-dim)",
                      transition: "color 0.2s",
                    }}
                    className="footer-link"
                  >
                    {l.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Store buttons */}
          <div
            style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            role="group"
            aria-label="Download the app"
          >
            <a
              href="https://apps.apple.com/us/app/the-changelog/id6759820812"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download on the App Store"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                border: "1px solid rgba(189,147,249,0.2)",
                borderRadius: 12,
                background: "rgba(189,147,249,0.04)",
                transition: "all 0.2s",
                color: "var(--txt)",
              }}
              className="footer-store"
            >
              <svg width="16" height="19" viewBox="0 0 24 28" fill="none" aria-hidden="true">
                <path d="M20.317 14.578c-.037-3.444 2.81-5.097 2.939-5.176-1.601-2.339-4.09-2.661-4.976-2.695-2.112-.215-4.14 1.248-5.21 1.248-1.072 0-2.71-1.22-4.462-1.186-2.283.033-4.4 1.337-5.573 3.374-2.386 4.13-.609 10.243 1.71 13.592 1.141 1.64 2.49 3.47 4.259 3.404 1.72-.068 2.366-1.102 4.444-1.102 2.076 0 2.674 1.102 4.478 1.065 1.845-.033 3.008-1.659 4.14-3.305 1.308-1.888 1.845-3.722 1.872-3.815-.042-.014-3.587-1.374-3.621-5.404z" fill="currentColor"/>
                <path d="M16.893 4.638c.946-1.148 1.586-2.738 1.412-4.32-1.365.055-3.013.908-3.993 2.057-.878 1.012-1.648 2.641-1.44 4.196 1.52.117 3.072-.77 4.021-1.933z" fill="currentColor"/>
              </svg>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}>APP STORE</span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sharvari.changelog"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get it on Google Play"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 18px",
                border: "1px solid rgba(189,147,249,0.2)",
                borderRadius: 12,
                background: "rgba(189,147,249,0.04)",
                transition: "all 0.2s",
                color: "var(--txt)",
              }}
              className="footer-store"
            >
              <svg width="16" height="17" viewBox="0 0 24 26" fill="none" aria-hidden="true">
                <path d="M1.5 0.5C0.9 0.9 0.5 1.6 0.5 2.5v21c0 .9.4 1.6 1 2l.1.1 11.7-11.7v-.3L1.5.5z" fill="#8BE9FD"/>
                <path d="M17.4 17.5l-3.9-3.9v-.3l3.9-3.9.1.1 4.6 2.6c1.3.7 1.3 1.9 0 2.7l-4.7 2.7z" fill="#FF79C6"/>
                <path d="M17.5 17.4L13.3 13 1.5 24.8c.4.5 1.1.5 2 .1l14-7.5" fill="#BD93F9"/>
                <path d="M17.5 8.6L3.5 1.1C2.6.6 1.9.7 1.5 1.2L13.3 13l4.2-4.4z" fill="#50FA7B"/>
              </svg>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em" }}>GOOGLE PLAY</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(189,147,249,0.2), transparent)",
          marginBottom: 28,
        }} aria-hidden="true" />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "var(--txt-muted)",
            }}
          >
            © {year} THE CHANGELOG. ALL RIGHTS RESERVED.
          </p>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.12em",
              color: "var(--txt-muted)",
            }}
          >
            © <a
              href="https://sharvari.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--neon)", transition: "text-shadow 0.2s" }}
              className="footer-credit"
              aria-label="sharvari.dev — Sharvari's website"
            >
              SHARVARI.DEV
            </a>
            {" "}· CRAFTED WITH{" "}
            <span aria-label="love" role="img">♥</span>
            {" "}BY SHARVARI
          </p>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--neon) !important; }
        .footer-store:hover { background: rgba(189,147,249,0.1) !important; border-color: rgba(189,147,249,0.3) !important; }
        .footer-credit:hover { text-shadow: 0 0 16px var(--glow-neon); }
      `}</style>
    </footer>
  );
}
