import React from "react";
import { Link } from "react-router-dom";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

const footerLinks = [
  { to: "/", label: "Beranda" },
  { to: "/projects", label: "Proyek Kami" },
  { to: "/about", label: "Tentang Kami" },
];

const services = [
  "Desain & Perencanaan",
  "Pelaksanaan Konstruksi",
  "Furnitur Kustom",
  "Konsultasi Gratis",
];

const contacts = [
  { icon: "📍", text: "Jl. Cipayung Barat 1 No.69a,\nJakarta Timur, DKI Jakarta" },
  { icon: "📱", text: "+62 812-2807-8419", href: "tel:+6281228078419" },
  { icon: "✉️", text: "SatenaStud@gmail.com", href: "mailto:SatenaStud@gmail.com" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/satenabuild/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
  {
    label: "WhatsApp",
    href: WA,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    )
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "#1c1814", color: "white" }}>

      {/* ── Pre-footer CTA strip ── */}
      <div style={{
        background: "linear-gradient(90deg, #2E7D52 0%, #1f5c3b 100%)",
        padding: "1.5rem 0"
      }}>
        <div className="container" style={{
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center", gap: "1rem"
        }}>
          <div style={{ color: "white" }}>
            <div style={{ fontWeight: 700, fontSize: "1rem" }}>
              💬 Masih ragu? Tanya dulu, gratis!
            </div>
            <div style={{ opacity: 0.8, fontSize: "0.85rem", marginTop: "2px" }}>
              Tim kami siap jawab pertanyaan Anda — tanpa tekanan, tanpa biaya.
            </div>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            id="footer-cta-wa"
            className="btn btn-white"
            style={{ fontSize: "0.85rem", padding: "0.7rem 1.5rem", flexShrink: 0 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#2E7D52">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span style={{ color: "#2E7D52", fontWeight: 700 }}>Chat WhatsApp</span>
          </a>
        </div>
      </div>

      {/* ── Main Footer ── */}
      <div className="container" style={{ padding: "4rem 1.5rem 3rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "3rem"
        }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 2" }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.25rem" }}>
              <img src="/Logo.png" alt="Logo" style={{ height: "48px", width: "48px", objectFit: "contain" }} />
              <span style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.3rem", fontWeight: 700
              }}>
                <span style={{ color: "#4a9d6f" }}>BUILD</span>
                <span style={{ color: "white" }}>ForU</span>
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.88rem", lineHeight: 1.8, maxWidth: "260px", marginBottom: "1.5rem" }}>
              Konsultan desain & konstruksi profesional di Jakarta.
              Kami hadir mendampingi setiap tahap pembangunan Anda.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: "0.6rem" }}>
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: "38px", height: "38px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.65)",
                    transition: "all 0.2s"
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2E7D52"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Navigasi
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#4a9d6f"}
                    onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.65)"}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Layanan
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {services.map((s, i) => (
                <li key={i} style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem" }}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem" }}>
              Kontak
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contacts.map((c, i) => (
                <li key={i}>
                  {c.href ? (
                    <a href={c.href} style={{ display: "flex", gap: "0.6rem", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6, textDecoration: "none", transition: "color 0.2s" }}
                      onMouseEnter={e => e.currentTarget.style.color = "#4a9d6f"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
                    >
                      <span style={{ flexShrink: 0 }}>{c.icon}</span>
                      <span>{c.text}</span>
                    </a>
                  ) : (
                    <div style={{ display: "flex", gap: "0.6rem", color: "rgba(255,255,255,0.65)", fontSize: "0.85rem", lineHeight: 1.6 }}>
                      <span style={{ flexShrink: 0 }}>{c.icon}</span>
                      <span style={{ whiteSpace: "pre-line" }}>{c.text}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="container" style={{
          padding: "1.25rem 1.5rem",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center", gap: "0.5rem"
        }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} SatenaStudio. All Rights Reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.78rem" }}>
            Konsultan Desain & Konstruksi Jakarta
          </p>
        </div>
      </div>
    </footer>
  );
}
