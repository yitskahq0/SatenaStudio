import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

const values = [
  {
    icon: "🎯",
    title: "Berangkat dari Kebutuhan Nyata",
    desc: "Kami tidak menawarkan solusi instan. Setiap proyek dimulai dari pemahaman mendalam terhadap kebutuhan, karakter, dan anggaran klien.",
  },
  {
    icon: "🔍",
    title: "Proses yang Transparan",
    desc: "RAB terbuka, jadwal jelas, laporan harian. Anda tahu persis ke mana setiap rupiah digunakan.",
  },
  {
    icon: "🌱",
    title: "Nilai Jangka Panjang",
    desc: "Bangunan kami dirancang bukan hanya indah hari ini, tapi kuat dan relevan untuk puluhan tahun ke depan.",
  },
];

const achievements = [
  { num: "50+", label: "Proyek Selesai" },
  { num: "8+", label: "Tahun Berpengalaman" },
  { num: "3", label: "Layanan Unggulan" },
  { num: "100%", label: "Klien Puas" },
];

const faqs = [
  {
    q: "Berapa biaya konsultasi awal?",
    a: "Konsultasi awal 100% GRATIS. Tidak ada biaya apapun. Kami hanya ingin memahami kebutuhan Anda terlebih dahulu sebelum memberikan estimasi.",
  },
  {
    q: "Berapa lama proses pembangunan berlangsung?",
    a: "Tergantung skala proyek. Renovasi kecil bisa 2–4 minggu. Bangun baru rumah tinggal biasanya 3–6 bulan. Kami selalu memberikan timeline yang realistis di awal.",
  },
  {
    q: "Apakah ada garansi pekerjaan?",
    a: "Ya. Kami memberikan garansi atas kualitas pekerjaan. Jika ada kerusakan akibat kesalahan pengerjaan dalam periode garansi, kami perbaiki tanpa biaya tambahan.",
  },
  {
    q: "Apakah bisa cicil atau pembayaran bertahap?",
    a: "Bisa. Kami menyediakan sistem pembayaran termin sesuai progress pekerjaan, sehingga Anda tidak perlu mengeluarkan semua biaya sekaligus di awal.",
  },
  {
    q: "Area mana saja yang dilayani?",
    a: "Kami melayani Jakarta, Bekasi, Depok, Tangerang, dan sekitarnya. Untuk proyek di luar area tersebut, silakan hubungi kami terlebih dahulu.",
  },
];

export default function About() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ background: "white" }}>

      {/* ── HERO ── */}
      <section style={{
        paddingTop: "9rem", paddingBottom: "6rem",
        background: "linear-gradient(135deg, #1c1814 0%, #2d2926 100%)",
        position: "relative", overflow: "hidden"
      }}>
        {/* Glow */}
        <div style={{
          position: "absolute", right: "-80px", top: "-80px",
          width: "500px", height: "500px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,125,82,0.2) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <span className="label" style={{ color: "#4a9d6f", display: "block", marginBottom: "0.75rem" }}>Tentang Kami</span>
            <h1 className="display-xl" style={{ color: "white", marginBottom: "1.25rem", maxWidth: "700px" }}>
              Studio Konsultan yang<br />
              <span style={{
                color: "transparent",
                background: "linear-gradient(90deg, #4a9d6f, #c8962e)",
                WebkitBackgroundClip: "text", backgroundClip: "text"
              }}>Peduli pada Detail.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: "520px", marginBottom: "2.5rem" }}>
              Satena lahir dari keyakinan bahwa setiap ruang yang dibangun harus
              memberikan nilai nyata bagi penghuninya — bukan sekadar bangunan fisik.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" id="about-hero-wa" className="btn btn-green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Konsultasi Gratis
              </a>
              <Link to="/projects" id="about-hero-projects" className="btn btn-outline-white">
                Lihat Portofolio
              </Link>
            </div>
          </motion.div>
        </div>
        <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 50" preserveAspectRatio="none" fill="white">
          <path d="M0,50 C480,0 960,0 1440,50 L1440,50 L0,50 Z" />
        </svg>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "white", borderBottom: "1px solid #e8e2da" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", padding: "2.5rem 0", gap: "1rem" }}>
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                style={{
                  textAlign: "center", padding: "1rem",
                  borderRight: i < achievements.length - 1 ? "1px solid #e8e2da" : "none"
                }}
              >
                <div className="trust-stat-value">{a.num}</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2d2926", marginTop: "0.2rem" }}>{a.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem", alignItems: "center" }}>

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              style={{ position: "relative" }}
            >
              <div style={{ borderRadius: "24px", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
                <img src="/ownerpp.png" alt="Founder Satena" style={{ width: "100%", height: "520px", objectFit: "cover" }} />
              </div>
              {/* Floating card */}
              <div style={{
                position: "absolute", bottom: "2rem", left: "-1.5rem",
                background: "white", borderRadius: "20px",
                padding: "1.25rem 1.5rem",
                boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                minWidth: "220px"
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1rem", fontWeight: 700, color: "#1c1814" }}>
                  Han Lois Herlambang
                </div>
                <div style={{ fontSize: "0.78rem", color: "#2E7D52", fontWeight: 600, marginTop: "3px" }}>
                  Founder & Operation Director
                </div>
                <div style={{ marginTop: "0.75rem", paddingTop: "0.75rem", borderTop: "1px solid #e8e2da", fontSize: "0.78rem", color: "#7a7069" }}>
                  8+ tahun membangun ruang bagi orang Indonesia
                </div>
              </div>
              {/* Deco block */}
              <div style={{
                position: "absolute", top: "-1.5rem", right: "-1.5rem",
                width: "80px", height: "80px", borderRadius: "20px",
                background: "linear-gradient(135deg, #2E7D52, #4a9d6f)",
                zIndex: -1, opacity: 0.6
              }} />
            </motion.div>

            {/* Story text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              <span className="label" style={{ display: "block", marginBottom: "0.75rem" }}>Cerita Kami</span>
              <h2 className="display-md" style={{ color: "#1c1814", marginBottom: "1rem" }}>
                Dari Garasi ke Studio<br />yang Dipercaya Puluhan Klien
              </h2>
              <div className="divider" style={{ margin: "0 0 1.75rem" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
                {[
                  "Satena berawal dari perjalanan personal sang pendiri yang tertarik pada bagaimana sebuah ruang dapat memengaruhi cara manusia beraktivitas. Mulai dari proyek kecil, kami tumbuh dengan cara yang paling penting: dari mulut ke mulut.",
                  "Setiap proyek mengajarkan kami hal baru. Bukan hanya soal teknis — tapi soal bagaimana mendengar klien, memahami kekhawatiran mereka, dan memberikan hasil yang melebihi ekspektasi.",
                  "Hari ini, Satena hadir sebagai studio yang mendampingi klien secara menyeluruh — dari konsep awal, perencanaan teknis, hingga furnitur akhir — dengan satu komitmen: kepuasan Anda adalah prioritas kami.",
                ].map((p, i) => (
                  <p key={i} style={{ fontSize: "0.95rem", color: "#7a7069", lineHeight: 1.85 }}>{p}</p>
                ))}
              </div>

              <a href={WA} target="_blank" rel="noopener noreferrer" id="about-story-wa" className="btn btn-green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Mulai Berkolaborasi
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section" style={{ background: "#faf7f2" }}>
        <div className="container">
          <div className="section-header">
            <span className="label">Filosofi</span>
            <h2 className="display-md" style={{ color: "#1c1814" }}>Nilai yang Mendasari<br />Setiap Proyek Kami</h2>
            <div className="divider" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ background: "white", borderRadius: "20px", padding: "2rem", boxShadow: "0 4px 20px rgba(0,0,0,0.06)", border: "1px solid #e8e2da" }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.2rem", fontWeight: 700, color: "#1c1814", marginBottom: "0.65rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "#7a7069", lineHeight: 1.8 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="section-header">
              <span className="label">FAQ</span>
              <h2 className="display-md" style={{ color: "#1c1814" }}>Pertanyaan yang<br />Sering Ditanyakan</h2>
              <div className="divider" />
              <p style={{ marginTop: "0.85rem", color: "#7a7069", fontSize: "0.95rem" }}>
                Masih ada pertanyaan lain? Langsung tanya via WhatsApp — gratis!
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                  style={{
                    border: `1px solid ${openFaq === i ? "#2E7D52" : "#e8e2da"}`,
                    borderRadius: "16px",
                    overflow: "hidden",
                    transition: "border-color 0.2s"
                  }}
                >
                  <button
                    id={`faq-${i}`}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", textAlign: "left",
                      padding: "1.25rem 1.5rem",
                      background: openFaq === i ? "#eaf4ef" : "white",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      gap: "1rem", cursor: "pointer", border: "none",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700, fontSize: "0.95rem", color: "#1c1814",
                      transition: "background 0.2s"
                    }}
                  >
                    <span>{faq.q}</span>
                    <span style={{
                      width: "28px", height: "28px", borderRadius: "50%",
                      background: openFaq === i ? "#2E7D52" : "#f3ede4",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, transition: "all 0.25s",
                      color: openFaq === i ? "white" : "#7a7069",
                      transform: openFaq === i ? "rotate(45deg)" : "none"
                    }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M12 5v14M5 12h14"/>
                      </svg>
                    </span>
                  </button>
                  <div style={{
                    maxHeight: openFaq === i ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease"
                  }}>
                    <p style={{ padding: "0 1.5rem 1.25rem", fontSize: "0.9rem", color: "#7a7069", lineHeight: 1.8 }}>
                      {faq.a}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Still have questions */}
            <div style={{
              marginTop: "3rem", textAlign: "center",
              background: "#faf7f2", borderRadius: "20px", padding: "2.5rem",
              border: "1px solid #e8e2da"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>💬</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#1c1814", marginBottom: "0.5rem" }}>
                Masih ada pertanyaan?
              </h3>
              <p style={{ fontSize: "0.88rem", color: "#7a7069", marginBottom: "1.5rem" }}>
                Tim kami siap menjawab pertanyaan Anda langsung via WhatsApp — cepat & ramah.
              </p>
              <a href={WA} target="_blank" rel="noopener noreferrer" id="faq-wa-cta" className="btn btn-green">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat Sekarang
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
