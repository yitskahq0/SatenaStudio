import React from "react";
import { motion } from "framer-motion";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

const services = [
  {
    icon: "📐",
    number: "01",
    title: "Perencanaan & Desain",
    subtitle: "Design & Planning",
    desc: "Dari konsep ruang, denah teknis, 3D visualisasi, hingga gambar kerja yang siap dieksekusi. Kami pastikan Anda tahu persis seperti apa hasilnya sebelum dibangun.",
    features: ["Konsep & Moodboard", "Denah 2D & 3D", "Estimasi Biaya Awal", "Gambar Kerja Detail"],
    img: "/Service1.png",
    color: "#2E7D52",
  },
  {
    icon: "🏗️",
    number: "02",
    title: "Pelaksanaan Konstruksi",
    subtitle: "Build & Construction",
    desc: "Pembangunan sesuai standar teknis dengan tim terlatih. Progress dilaporkan setiap hari. Budget dan timeline dikontrol ketat agar tidak ada kejutan.",
    features: ["Manajemen Proyek", "Laporan Harian via WA", "Quality Control Ketat", "Tepat Waktu & Budget"],
    img: "/Service2.png",
    color: "#c8962e",
    featured: true,
  },
  {
    icon: "🛋️",
    number: "03",
    title: "Furnitur Kustom",
    subtitle: "Custom Furniture",
    desc: "Furnitur dibuat khusus sesuai ukuran, karakter, dan kebutuhan ruang Anda. Material pilihan, finishing rapi, dan tahan lama.",
    features: ["Desain Custom", "Material Premium", "Finishing Halus", "Pemasangan Profesional"],
    img: "/Service3.png",
    color: "#826c57",
  },
];

export default function Service() {
  return (
    <section className="section" style={{ background: "#faf7f2" }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <span className="label">Layanan Kami</span>
          <h2 className="display-lg" style={{ color: "#1c1814" }}>
            Satu Tim untuk<br />Semua Kebutuhan Bangunan
          </h2>
          <div className="divider" />
          <p style={{ marginTop: "1rem", color: "#7a7069", fontSize: "1rem", maxWidth: "480px", margin: "1rem auto 0", lineHeight: 1.8 }}>
            Tidak perlu mengurus banyak vendor. Kami handle semuanya —
            dari desain sampai furnitur — dalam satu atap.
          </p>
        </div>

        {/* Service Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                background: "white",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: s.featured
                  ? "0 8px 40px rgba(46,125,82,0.15)"
                  : "0 4px 24px rgba(0,0,0,0.07)",
                border: s.featured ? `2px solid ${s.color}` : "1px solid #e8e2da",
                position: "relative",
              }}
            >
              {/* Featured ribbon */}
              {s.featured && (
                <div style={{
                  position: "absolute", top: "1.25rem", right: "1.25rem", zIndex: 2,
                  background: s.color, color: "white",
                  fontSize: "0.7rem", fontWeight: 800, letterSpacing: "0.1em",
                  padding: "0.3rem 0.8rem", borderRadius: "100px"
                }}>
                  ★ PALING DIMINATI
                </div>
              )}

              {/* Image side */}
              <div style={{ position: "relative", minHeight: "260px", overflow: "hidden" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "260px" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(135deg, ${s.color}CC 0%, rgba(28,24,20,0.5) 100%)`
                }} />
                {/* Service number */}
                <div style={{
                  position: "absolute", bottom: "1.5rem", left: "1.5rem",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "4rem", fontWeight: 800,
                  color: "rgba(255,255,255,0.2)",
                  lineHeight: 1
                }}>
                  {s.number}
                </div>
                <div style={{
                  position: "absolute", top: "1.5rem", left: "1.5rem",
                  fontSize: "2.2rem"
                }}>
                  {s.icon}
                </div>
              </div>

              {/* Content side */}
              <div style={{ padding: "2.25rem" }}>
                <div style={{
                  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em",
                  textTransform: "uppercase", color: s.color, marginBottom: "0.6rem"
                }}>
                  {s.subtitle}
                </div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.55rem", fontWeight: 700,
                  color: "#1c1814", marginBottom: "0.85rem"
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.92rem", color: "#7a7069", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  {s.desc}
                </p>

                {/* Feature list */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.75rem" }}>
                  {s.features.map((f, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#2d2926" }}>
                      <div style={{
                        width: "18px", height: "18px", borderRadius: "50%",
                        background: s.color, display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      </div>
                      <span style={{ fontWeight: 500 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={`service-cta-${i}`}
                  className="btn"
                  style={{
                    background: s.color,
                    color: "white",
                    boxShadow: `0 4px 20px ${s.color}44`,
                    fontSize: "0.85rem",
                    padding: "0.75rem 1.5rem"
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Tanya Lebih Lanjut
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
