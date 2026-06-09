import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const WA = `https://wa.me/6281228078419?text=${encodeURIComponent("Halo, saya ingin konsultasi pembangunan dengan Tim Satena.")}`;

const projects = [
  { title: "Cafe Interior", slug: "cafe-interior", img: "/Project1.png", category: "Commercial Interior", location: "Jakarta", year: "2024" },
  { title: "House Renovation", slug: "house-renovation", img: "/Project2.png", category: "Residential", location: "Jakarta", year: "2024" },
  { title: "Luxury Bedroom", slug: "luxury-bedroom", img: "/Project6.jpg", category: "Interior Design", location: "Jakarta", year: "2024" },
  { title: "Kitchen Concept", slug: "kitchen-concept", img: "/Project4.png", category: "Interior Design", location: "Bekasi", year: "2023" },
];

const categories = ["Semua", ...new Set(projects.map((p) => p.category))];

export default function ProjectPage() {
  const [active, setActive] = useState("Semua");

  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <div style={{ background: "white", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{
        paddingTop: "9rem", paddingBottom: "5rem",
        background: "linear-gradient(135deg, #1c1814 0%, #2d2926 100%)",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", right: "-5rem", top: "-5rem",
          width: "400px", height: "400px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,125,82,0.2) 0%, transparent 70%)"
        }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="label" style={{ color: "#4a9d6f", display: "block", marginBottom: "0.75rem" }}>Portofolio</span>
            <h1 className="display-lg" style={{ color: "white", marginBottom: "1rem" }}>
              Proyek Nyata,<br />
              <span style={{ color: "#4a9d6f" }}>Hasil Terbukti</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem", lineHeight: 1.75, maxWidth: "480px", marginBottom: "2rem" }}>
              Setiap foto adalah bukti nyata komitmen kami. Lihat karya kami dan bayangkan ruang impian Anda.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer" id="projects-page-wa-cta" className="btn btn-green">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Konsultasi Proyek Saya
            </a>
          </motion.div>
        </div>
        {/* Wave */}
        <svg style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }} viewBox="0 0 1440 40" preserveAspectRatio="none" fill="white">
          <path d="M0,40 C480,0 960,0 1440,40 L1440,40 L0,40 Z" />
        </svg>
      </section>

      {/* Filter + Grid */}
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>

        {/* Filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", marginBottom: "3rem" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              id={`filter-${cat}`}
              onClick={() => setActive(cat)}
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: "0.85rem", fontWeight: 600,
                padding: "0.5rem 1.25rem", borderRadius: "100px",
                border: "2px solid",
                borderColor: active === cat ? "#2E7D52" : "#e8e2da",
                background: active === cat ? "#2E7D52" : "white",
                color: active === cat ? "white" : "#7a7069",
                cursor: "pointer", transition: "all 0.2s"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.75rem" }}>
          {filtered.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link to={`/projects/${item.slug}`} id={`projects-card-${item.slug}`} style={{ display: "block" }}>
                <div
                  style={{ borderRadius: "20px", overflow: "hidden", background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.09)", transition: "all 0.3s ease" }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.14)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.09)"; }}
                >
                  <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                    <img src={item.img} alt={item.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,24,20,0.75) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                      <span style={{
                        background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white", fontSize: "0.7rem", fontWeight: 700,
                        padding: "0.2rem 0.65rem", borderRadius: "100px"
                      }}>{item.year}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem" }}>
                      <div style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em", color: "#4a9d6f", textTransform: "uppercase", marginBottom: "0.3rem" }}>
                        {item.category}
                      </div>
                      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.15rem", fontWeight: 700, color: "white" }}>
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "1.1rem 1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#7a7069", fontSize: "0.8rem" }}>📍 {item.location}</span>
                    <span style={{ color: "#2E7D52", fontSize: "0.82rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      Lihat Detail
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
