import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const solidBg = !isHome || scrolled;

  const linkClass = (to) =>
    `text-sm font-semibold transition-all duration-200 px-3 py-1.5 rounded-lg ${
      pathname === to || (to !== "/" && pathname.startsWith(to))
        ? "text-green-600"
        : solidBg
        ? "text-[#2d2926] hover:text-[#2E7D52]"
        : "text-white/90 hover:text-white"
    }`;

  return (
    <>
      {/* ── Main Bar ── */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "all 0.35s ease",
          background: solidBg ? "rgba(255,255,255,0.97)" : "transparent",
          backdropFilter: solidBg ? "blur(20px)" : "none",
          boxShadow: solidBg ? "0 2px 24px rgba(0,0,0,0.09)" : "none",
          borderBottom: solidBg ? "1px solid #e8e2da" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "76px" }}>
          
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/Logo.png" alt="Satena Studio" style={{ height: "44px", width: "44px", objectFit: "contain" }} />
            <div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                lineHeight: 1,
                color: solidBg ? "#1c1814" : "white",
                transition: "color 0.3s"
              }}>
                <span style={{ color: "#2E7D52" }}>BUILD</span>
                <span>ForU</span>
              </div>
              <div style={{
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                color: solidBg ? "#7a7069" : "rgba(255,255,255,0.65)",
                textTransform: "uppercase",
                marginTop: "1px",
                transition: "color 0.3s"
              }}>
                Konsultan & Konstruksi
              </div>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: "flex", alignItems: "center", gap: "4px", listStyle: "none" }} className="hidden md:flex">
            {[
              { to: "/", label: "Beranda" },
              { to: "/projects", label: "Proyek" },
              { to: "/about", label: "Tentang Kami" },
              { to: "/kalkulator", label: "Estimasi Biaya" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className={linkClass(to)}>{label}</Link>
              </li>
            ))}
            <li style={{ marginLeft: "12px" }}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                id="nav-wa-btn"
                className="btn btn-green"
                style={{ padding: "0.65rem 1.4rem", fontSize: "0.82rem" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi Gratis
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <button
            id="mobile-nav-toggle"
            className="md:hidden"
            onClick={() => setOpen(!open)}
            style={{
              width: "42px", height: "42px",
              borderRadius: "12px",
              background: solidBg ? "#f3ede4" : "rgba(255,255,255,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: solidBg ? "#2d2926" : "white",
              border: "none",
              transition: "all 0.2s"
            }}
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div style={{
          maxHeight: open ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "white",
          borderTop: open ? "1px solid #e8e2da" : "none",
        }} className="md:hidden">
          <div style={{ padding: "1rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "4px" }}>
            {[
              { to: "/", label: "Beranda" },
              { to: "/projects", label: "Proyek" },
              { to: "/about", label: "Tentang Kami" },
              { to: "/kalkulator", label: "Estimasi Biaya" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                style={{
                  padding: "0.75rem 1rem",
                  borderRadius: "12px",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: pathname === to ? "#2E7D52" : "#2d2926",
                  background: pathname === to ? "#eaf4ef" : "transparent",
                  transition: "all 0.2s"
                }}
              >
                {label}
              </Link>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
              style={{ marginTop: "0.75rem", justifyContent: "center" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Konsultasi Gratis via WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        id="wa-float-btn"
        className="wa-float"
        style={{ position: "fixed", bottom: "1.75rem", right: "1.75rem", zIndex: 999 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>Konsultasi Gratis</span>
        <span className="wa-dot" />
      </a>
    </>
  );
}