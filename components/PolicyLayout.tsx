import Link from "next/link";

interface PolicyLayoutProps {
  title: string;
  updated: string;
  children: React.ReactNode;
}

export default function PolicyLayout({ title, updated, children }: PolicyLayoutProps) {
  return (
    <>
      <div className="grid-bg" aria-hidden="true" />

      {/* Minimal nav for policy pages */}
      <header
        role="banner"
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 200,
          background: "rgba(13,14,20,0.94)",
          backdropFilter: "blur(24px)",
          borderBottom: "1px solid rgba(189,147,249,0.1)",
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
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
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.16em",
              color: "var(--txt-dim)",
              transition: "color 0.2s",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
            className="back-link"
          >
            ← HOME
          </Link>
        </div>
      </header>

      <main
        id="main-content"
        style={{
          paddingTop: 120,
          paddingBottom: 100,
          paddingLeft: 24,
          paddingRight: 24,
          minHeight: "100vh",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: 780, margin: "0 auto" }}>

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: 40 }}>
            <ol role="list" style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--txt-muted)",
              padding: 0,
            }}>
              <li><Link href="/" style={{ color: "var(--txt-dim)", textDecoration: "none" }}>HOME</Link></li>
              <li aria-hidden="true" style={{ color: "var(--txt-muted)" }}>›</li>
              <li aria-current="page" style={{ color: "var(--neon)" }}>{title.toUpperCase()}</li>
            </ol>
          </nav>

          {/* Title block */}
          <div style={{ marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 24, width: "fit-content" }}>
              <span className="badge-dot" aria-hidden="true" />
              LEGAL
            </div>
            <h1
              style={{
                fontFamily: "var(--font-mono)",
                fontWeight: 700,
                fontSize: "clamp(28px, 5vw, 52px)",
                letterSpacing: "-0.01em",
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              {title.split(" ").map((word, i) => (
                <span key={i} style={{ color: i === 0 ? "var(--txt)" : "var(--neon)", textShadow: i === 0 ? "none" : "0 0 30px var(--glow-neon)" }}>
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              color: "var(--txt-muted)",
            }}>
              LAST UPDATED: {updated}
            </p>
          </div>

          {/* Policy content */}
          <div className="policy-content">
            {children}
          </div>

          {/* Back link */}
          <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(189,147,249,0.1)" }}>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: "0.16em",
                color: "var(--neon)",
                padding: "12px 24px",
                border: "1px solid rgba(189,147,249,0.25)",
                borderRadius: 10,
                background: "rgba(189,147,249,0.04)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              className="back-btn"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer
        role="contentinfo"
        style={{
          borderTop: "1px solid rgba(189,147,249,0.08)",
          padding: "24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          letterSpacing: "0.12em",
          color: "var(--txt-muted)",
        }}>
          © {new Date().getFullYear()} THE CHANGELOG ·{" "}
          <a
            href="https://sharvari.dev"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "var(--neon)" }}
          >
            SHARVARI.DEV
          </a>
          {" "}· CRAFTED WITH ♥ BY SHARVARI
        </p>
      </footer>

      <style>{`
        .back-link:hover { color: var(--neon) !important; }
        .back-btn:hover { background: rgba(189,147,249,0.1) !important; box-shadow: 0 0 20px var(--glow-neon); }
      `}</style>
    </>
  );
}
