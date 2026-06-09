import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena. Bisa dibantu?")}`;

const trustBadges = [
  { icon: "🏆", text: "50+ Proyek Selesai" },
  { icon: "⭐", text: "Klien Puas" },
  { icon: "📋", text: "Garansi Kualitas" },
];

const stats = [
  { num: "50+", label: "Proyek Selesai", sub: "Residensial & Komersial" },
  { num: "8+", label: "Tahun Pengalaman", sub: "Terpercaya Sejak 2016" },
  { num: "100%", label: "Kepuasan Klien", sub: "Tanpa Komplain Besar" },
  { num: "3", label: "Layanan Unggulan", sub: "Desain · Bangun · Furnit" },
];

export default function Ads1() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <>
      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#0f1310" }}>

        {/* Background Image */}
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src="/value.jpg"
            alt="Satena Studio"
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, transform: "scale(1.05)" }}
          />
          <div className="hero-overlay" style={{ position: "absolute", inset: 0 }} />
        </div>

        {/* Green glow bottom-right */}
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: "50%", height: "60%",
          background: "radial-gradient(ellipse at bottom right, rgba(46,125,82,0.25) 0%, transparent 65%)",
          pointerEvents: "none"
        }} />

        {/* Content */}
        <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "6rem", paddingBottom: "5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", maxWidth: "780px" }}>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}
            >
              {trustBadges.map((b, i) => (
                <span key={i} style={{
                  display: "inline-flex", alignItems: "center", gap: "0.4rem",
                  background: "rgba(255,255,255,0.12)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "white",
                  fontSize: "0.78rem", fontWeight: 600,
                  padding: "0.35rem 0.9rem", borderRadius: "100px",
                }}>
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={loaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.22 }}
            >
              <h1 className="display-xl" style={{ color: "white", marginBottom: "1.5rem" }}>
                Bangun Rumah &<br />
                Ruang Impian Anda<br />
                <span style={{
                  color: "transparent",
                  background: "linear-gradient(90deg, #4a9d6f, #c8962e)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                }}>Bersama Ahlinya.</span>
              </h1>

              <p style={{
                fontSize: "1.1rem", lineHeight: 1.8,
                color: "rgba(255,255,255,0.72)",
                maxWidth: "540px",
                marginBottom: "2.25rem"
              }}>
                Konsultasi <strong style={{ color: "white" }}>GRATIS</strong> dengan tim berpengalaman kami.
                Dari desain, konstruksi, hingga furnitur — kami tangani semuanya agar Anda tenang.
              </p>

              {/* CTA Row */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="hero-wa-cta"
                  className="btn btn-green"
                  style={{ fontSize: "0.95rem", padding: "0.95rem 1.8rem" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Konsultasi GRATIS Sekarang
                </a>
                <Link to="/projects" id="hero-portfolio-cta" className="btn btn-outline-white">
                  Lihat Hasil Karya
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>

              {/* Micro proof */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginTop: "1.6rem" }}>
                <div style={{ display: "flex" }}>
                  {["👤","👤","👤","👤","👤"].map((_, i) => (
                    <div key={i} style={{
                      width: "30px", height: "30px", borderRadius: "50%",
                      background: `hsl(${140+i*15}, 40%, ${55+i*5}%)`,
                      border: "2px solid rgba(255,255,255,0.3)",
                      marginLeft: i > 0 ? "-8px" : 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "0.8rem"
                    }}>👤</div>
                  ))}
                </div>
                <div style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>
                  <span style={{ color: "white", fontWeight: 700 }}>50+ klien</span> sudah mempercayai kami
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll arrow */}
        <div style={{
          position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.4)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px",
          fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase"
        }}>
          <span>Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════
          STATS BAR
      ══════════════════════════════════ */}
      <section style={{ background: "white", borderBottom: "1px solid #e8e2da" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            padding: "2.5rem 0",
            gap: "1rem"
          }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  textAlign: "center",
                  padding: "1.25rem 1rem",
                  borderRight: i < stats.length - 1 ? "1px solid #e8e2da" : "none"
                }}
              >
                <div className="trust-stat-value">{s.num}</div>
                <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#2d2926", marginTop: "0.25rem" }}>{s.label}</div>
                <div style={{ fontSize: "0.72rem", color: "#7a7069", marginTop: "0.2rem" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          HOW IT WORKS — 3 STEPS
      ══════════════════════════════════ */}
      <section className="section" style={{ background: "#faf7f2" }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Cara Kerja Kami</span>
            <h2 className="display-lg" style={{ color: "#1c1814" }}>Mulai Proyek Anda<br />dalam 3 Langkah Mudah</h2>
            <div className="divider" />
            <p style={{ marginTop: "1rem", color: "#7a7069", fontSize: "1rem", lineHeight: 1.75, maxWidth: "500px", margin: "1rem auto 0" }}>
              Tidak perlu bingung mulai dari mana. Kami pandu Anda dari awal sampai bangunan jadi.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2rem",
            position: "relative"
          }}>
            {[
              {
                step: "01",
                title: "Hubungi & Konsultasi",
                desc: "Chat WhatsApp kami — ceritakan kebutuhan, lahan, dan budget Anda. GRATIS, tanpa komitmen.",
                icon: "💬",
                cta: "Chat Sekarang",
                href: WA,
                color: "#2E7D52"
              },
              {
                step: "02",
                title: "Desain & Perencanaan",
                desc: "Tim kami menyusun konsep desain, estimasi biaya, dan timeline proyek yang transparan.",
                icon: "📐",
                cta: null,
                color: "#c8962e"
              },
              {
                step: "03",
                title: "Eksekusi & Serah Terima",
                desc: "Pembangunan dikerjakan tim terlatih dengan pengawasan ketat. Anda terima kunci tepat waktu.",
                icon: "🏠",
                cta: null,
                color: "#2E7D52"
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "2.25rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  position: "relative",
                  border: i === 0 ? "2px solid #2E7D52" : "1px solid #e8e2da"
                }}
              >
                {i === 0 && (
                  <div style={{
                    position: "absolute", top: "-12px", left: "1.5rem",
                    background: "#2E7D52", color: "white",
                    fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
                    padding: "0.2rem 0.75rem", borderRadius: "100px"
                  }}>MULAI DI SINI</div>
                )}

                {/* Step number */}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "3.5rem", fontWeight: 800,
                  color: step.color, opacity: 0.15,
                  lineHeight: 1, marginBottom: "0.75rem"
                }}>{step.step}</div>

                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{step.icon}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.3rem", fontWeight: 700,
                  color: "#1c1814", marginBottom: "0.75rem"
                }}>{step.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#7a7069", lineHeight: 1.75 }}>{step.desc}</p>

                {step.cta && (
                  <a
                    href={step.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="step-cta-wa"
                    className="btn btn-green"
                    style={{ marginTop: "1.5rem", fontSize: "0.82rem", padding: "0.65rem 1.3rem" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {step.cta}
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}