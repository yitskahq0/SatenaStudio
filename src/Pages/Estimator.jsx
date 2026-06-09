import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Estimator() {
  const [type, setType] = useState("bangun-baru");
  const [area, setArea] = useState(100);
  const [quality, setQuality] = useState("standar");
  const [total, setTotal] = useState(0);

  // Pricing Logic (Mockup for illustration)
  // Per meter square costs
  const rates = {
    "bangun-baru": {
      standar: 4500000,
      menengah: 6000000,
      mewah: 8500000,
    },
    "renovasi": {
      standar: 2500000,
      menengah: 3500000,
      mewah: 5000000,
    },
    "interior": {
      standar: 2000000,
      menengah: 3500000,
      mewah: 5500000,
    }
  };

  useEffect(() => {
    const rate = rates[type][quality];
    setTotal(rate * area);
  }, [type, area, quality]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(number);
  };

  const handleWA = () => {
    const message = `Halo Satena Studio, saya menggunakan Kalkulator Estimasi di website dan ingin diskusi lebih lanjut.

*Detail Estimasi:*
• Layanan: ${type.replace("-", " ").toUpperCase()}
• Luas Area: ${area} m²
• Kualitas Material: ${quality.toUpperCase()}
• *Estimasi Kasar: ${formatRupiah(total)}*

Mohon panduannya untuk proses selanjutnya. Terima kasih.`;
    
    window.open(`https://wa.me/6281228078419?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div style={{ background: "#faf7f2", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "5rem" }}>
      <div className="container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          
          <div className="section-header" style={{ marginBottom: "2.5rem" }}>
            <span className="label">Fitur Baru</span>
            <h1 className="display-md" style={{ color: "#1c1814" }}>Kalkulator Estimasi Biaya</h1>
            <div className="divider" />
            <p style={{ marginTop: "1rem", color: "#7a7069", fontSize: "0.95rem" }}>
              Hitung perkiraan awal biaya proyek Anda. Angka ini adalah estimasi kasar dan bisa disesuaikan dengan desain akhir.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card"
            style={{ padding: "2.5rem" }}
          >
            
            {/* 1. Tipe Proyek */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "block", fontWeight: 700, color: "#1c1814", marginBottom: "0.75rem", fontSize: "1.05rem" }}>
                1. Jenis Layanan
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                {[
                  { id: "bangun-baru", label: "Bangun Baru", icon: "🏗️" },
                  { id: "renovasi", label: "Renovasi Rumah", icon: "🔨" },
                  { id: "interior", label: "Desain Interior", icon: "🛋️" }
                ].map(t => (
                  <button
                    key={t.id}
                    onClick={() => setType(t.id)}
                    style={{
                      background: type === t.id ? "#eaf4ef" : "white",
                      border: `2px solid ${type === t.id ? "#2E7D52" : "#e8e2da"}`,
                      borderRadius: "16px", padding: "1.25rem 1rem",
                      cursor: "pointer", transition: "all 0.2s",
                      textAlign: "center"
                    }}
                  >
                    <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{t.icon}</div>
                    <div style={{ fontWeight: 600, color: type === t.id ? "#2E7D52" : "#7a7069", fontSize: "0.9rem" }}>{t.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Luas Area */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", fontWeight: 700, color: "#1c1814", marginBottom: "0.75rem", fontSize: "1.05rem" }}>
                <span>2. Luas Bangunan / Area (m²)</span>
                <span style={{ fontSize: "1.5rem", color: "#2E7D52" }}>{area} m²</span>
              </label>
              <input 
                type="range" 
                min="20" 
                max="1000" 
                step="5" 
                value={area} 
                onChange={(e) => setArea(Number(e.target.value))}
                style={{
                  width: "100%", height: "8px",
                  background: "linear-gradient(90deg, #2E7D52, #93bda9)",
                  borderRadius: "10px", outline: "none",
                  WebkitAppearance: "none", cursor: "pointer"
                }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", color: "#7a7069", fontSize: "0.75rem", marginTop: "0.5rem" }}>
                <span>20 m²</span>
                <span>1000 m²</span>
              </div>
            </div>

            {/* 3. Kualitas Material */}
            <div style={{ marginBottom: "2.5rem" }}>
              <label style={{ display: "block", fontWeight: 700, color: "#1c1814", marginBottom: "0.75rem", fontSize: "1.05rem" }}>
                3. Kualitas Material / Finishing
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "1rem" }}>
                {[
                  { id: "standar", label: "Standar", desc: "Ekonomis & Awet" },
                  { id: "menengah", label: "Menengah", desc: "Material Kelas Atas" },
                  { id: "mewah", label: "Premium / Mewah", desc: "Custom & Eksklusif" }
                ].map(q => (
                  <button
                    key={q.id}
                    onClick={() => setQuality(q.id)}
                    style={{
                      background: quality === q.id ? "#f5e6c3" : "white",
                      border: `2px solid ${quality === q.id ? "#c8962e" : "#e8e2da"}`,
                      borderRadius: "16px", padding: "1.25rem 1rem",
                      cursor: "pointer", transition: "all 0.2s",
                      textAlign: "center"
                    }}
                  >
                    <div style={{ fontWeight: 700, color: quality === q.id ? "#9a6e18" : "#2d2926", fontSize: "0.95rem", marginBottom: "0.2rem" }}>{q.label}</div>
                    <div style={{ color: quality === q.id ? "#8a6215" : "#7a7069", fontSize: "0.75rem" }}>{q.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Result Box */}
            <div style={{ 
              background: "linear-gradient(135deg, #1c1814 0%, #2d2926 100%)", 
              borderRadius: "20px", padding: "2rem", color: "white",
              textAlign: "center"
            }}>
              <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                Estimasi Biaya Kasar
              </div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "#4a9d6f", marginBottom: "0.5rem" }}>
                {formatRupiah(total)}
              </div>
              <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>
                *Biaya aktual dapat lebih rendah atau lebih tinggi tergantung tingkat kesulitan desain, lokasi, dan fluktuasi harga material.
              </p>
              
              <button onClick={handleWA} className="btn btn-green" style={{ width: "100%", justifyContent: "center", padding: "1rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Konsultasi & Diskusikan Estimasi Ini
              </button>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
