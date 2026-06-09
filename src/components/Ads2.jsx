import React from "react";
import { motion } from "framer-motion";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Pemilik Cafe di Jakarta",
    quote: "Satena mengubah ruang kosong jadi cafe yang ramai! Desainnya jauh melebihi ekspektasi saya. Tim sangat responsif dan tepat waktu.",
    rating: 5,
    avatar: "BS",
    color: "#2E7D52",
    project: "Cafe Interior"
  },
  {
    name: "Ibu Riana W.",
    role: "Pemilik Rumah di Jatiwarna",
    quote: "Renovasi rumah selesai sesuai budget dan tepat jadwal. Hasilnya elegan banget, setiap tamu yang datang pasti langsung komentar positif!",
    rating: 5,
    avatar: "RW",
    color: "#c8962e",
    project: "House Renovation"
  },
  {
    name: "Pak Denny H.",
    role: "Owner Properti, Bekasi",
    quote: "Kitchen set custom dari Satena kualitasnya premium. Dikerjakan rapi, finishingnya bersih. Saya sudah rekomendasikan ke 3 teman saya.",
    rating: 5,
    avatar: "DH",
    color: "#826c57",
    project: "Kitchen Concept"
  },
];

const whyUs = [
  { icon: "✅", title: "Konsultasi Gratis", desc: "Tidak ada biaya apapun untuk konsultasi awal. Ceritakan kebutuhan Anda." },
  { icon: "📊", title: "Estimasi Transparan", desc: "RAB detail diberikan di awal. Tidak ada biaya tersembunyi." },
  { icon: "⏱️", title: "Tepat Waktu", desc: "Kontrak berisi jadwal yang jelas. Kami komitmen terhadap timeline." },
  { icon: "🛡️", title: "Garansi Pekerjaan", desc: "Kami tanggung jawab penuh atas kualitas dan keawetan hasil kerja." },
  { icon: "📱", title: "Update Harian", desc: "Foto & video progress dikirim setiap hari via WhatsApp." },
  { icon: "🏅", title: "Tim Berpengalaman", desc: "8+ tahun, 50+ proyek, tim multidisiplin yang terlatih profesional." },
];

export default function Ads2() {
  return (
    <>
      {/* ══════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════ */}
      <section className="section" style={{ background: "#1c1814" }}>
        <div className="container">
          <div className="section-header">
            <span className="label" style={{ color: "#4a9d6f" }}>Kata Klien Kami</span>
            <h2 className="display-lg" style={{ color: "white" }}>Mereka Sudah<br />Merasakan Manfaatnya</h2>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "2rem",
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <span key={j} style={{ color: "#c8962e", fontSize: "1rem" }}>★</span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem"
                }}>
                  "{t.quote}"
                </p>

                {/* Project tag */}
                <div style={{
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(46,125,82,0.2)",
                  color: "#4a9d6f",
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                  padding: "0.2rem 0.7rem", borderRadius: "100px",
                  marginBottom: "1.25rem"
                }}>
                  📁 {t.project}
                </div>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, fontSize: "0.85rem", color: "white",
                    flexShrink: 0
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: "white", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.78rem" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════════ */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}
            className="md:grid-cols-2 grid-cols-1">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>Mengapa Satena?</span>
              <h2 className="display-lg" style={{ color: "#1c1814", marginBottom: "1rem" }}>
                Kami Bukan Sekadar<br />
                <span style={{ color: "#2E7D52" }}>Kontraktor Biasa</span>
              </h2>
              <p style={{ color: "#7a7069", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1rem" }}>
                Kami adalah mitra pembangunan yang peduli dengan hasil akhir dan kepuasan Anda.
                Setiap proyek ditangani seperti proyek sendiri — serius, detail, dan bertanggung jawab.
              </p>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                id="why-us-cta"
                className="btn btn-green"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Tanya Tim Kami Sekarang
              </a>
            </motion.div>

            {/* Right — grid of reasons */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {whyUs.map((w, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  style={{
                    background: "#faf7f2",
                    borderRadius: "16px",
                    padding: "1.5rem 1.25rem",
                  }}
                >
                  <div style={{ fontSize: "1.6rem", marginBottom: "0.6rem" }}>{w.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1c1814", marginBottom: "0.4rem" }}>{w.title}</div>
                  <div style={{ fontSize: "0.78rem", color: "#7a7069", lineHeight: 1.65 }}>{w.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
          FINAL CTA BANNER
      ══════════════════════════════════ */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="/Banner.jpg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, rgba(46,125,82,0.95) 0%, rgba(28,24,20,0.85) 100%)"
          }} />
        </div>

        <div className="container" style={{ position: "relative", zIndex: 2, padding: "5rem 1.5rem", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              color: "white",
              fontSize: "0.78rem", fontWeight: 700,
              padding: "0.4rem 1rem", borderRadius: "100px",
              marginBottom: "1.5rem"
            }}>
              🎁 Konsultasi 100% GRATIS — Tidak Ada Biaya Tersembunyi
            </div>

            <h2 className="display-lg" style={{ color: "white", marginBottom: "1rem" }}>
              Siap Bangun Rumah atau<br />Ruang Impian Anda?
            </h2>

            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: "520px", margin: "0 auto 2.5rem" }}>
              Jangan tunda lagi. Chat WhatsApp kami sekarang dan dapatkan
              konsultasi + estimasi biaya <strong style={{ color: "white" }}>GRATIS</strong> dari tim ahli kami.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                id="final-cta-wa"
                className="btn btn-white"
                style={{ fontSize: "1rem", padding: "1rem 2.25rem" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#2E7D52">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span style={{ color: "#2E7D52" }}>💬 Chat WhatsApp Sekarang</span>
              </a>
              <a
                href="tel:+6281228078419"
                id="final-cta-tel"
                className="btn btn-outline-white"
                style={{ fontSize: "0.9rem" }}
              >
                📞 +62 812-2807-8419
              </a>
            </div>

            {/* Micro assurance */}
            <div style={{ marginTop: "2rem", display: "flex", flexWrap: "wrap", gap: "1.5rem", justifyContent: "center" }}>
              {["✓ Gratis Konsultasi", "✓ Estimasi Transparan", "✓ Tidak Ada Paksaan"].map((t, i) => (
                <span key={i} style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
