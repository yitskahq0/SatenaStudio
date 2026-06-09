import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft, FaWhatsapp, FaMapMarkerAlt, FaCalendarAlt, FaTag, FaTimes } from "react-icons/fa";

const WA_LINK = `https://wa.me/6281228078419?text=${encodeURIComponent(
  "Halo, saya tertarik dengan layanan Tim Satena. Bisa dibantu?"
)}`;

const projects = [
  {
    title: "Cafe Interior",
    slug: "cafe-interior",
    category: "Commercial Interior",
    location: "Jakarta",
    year: "2024",
    images: ["/Project1.png", "/kopken4.jpeg", "/Kopken.jpeg", "/kopken2.jpeg"],
    desc: `Proyek interior cafe ini dirancang dengan pendekatan modern dan sentuhan industrial. Fokus utama desain adalah menciptakan suasana yang nyaman, hangat, dan efisien untuk mendukung pengalaman pengunjung serta memperkuat identitas visual brand.`,
    highlights: ["Desain modern industrial", "Tata cahaya dramatis", "Area duduk ergonomis"],
  },
  {
    title: "House Renovation",
    slug: "house-renovation",
    category: "Residential",
    location: "Jakarta",
    year: "2024",
    images: ["/Project2.png", "/rmhjatiwarna 1.jpeg", "/rmhjatiwarna2.jpeg", "/rmhjatiwarna5.jpeg"],
    desc: `Konsep Desain Hunian ini mengusung konsep Modern-Contemporary Tropis yang memadukan garis arsitektur tegas dengan material hangat. Fokus utama proyek adalah menciptakan ruang tinggal yang fungsional namun mewah melalui permainan tekstur kayu, palet warna monokromatik, serta sistem pencahayaan indirect lighting yang dramatis.`,
    highlights: ["Konsep tropis modern", "Indirect lighting system", "Material kayu premium"],
  },
  {
    title: "Luxury Bedroom",
    slug: "luxury-bedroom",
    category: "Interior Design",
    location: "Jakarta",
    year: "2024",
    images: ["/rumhtebet.jpeg", "/rumhtebet2.jpeg"],
    desc: `Kamar tidur dengan konsep luxury modern yang mengutamakan kenyamanan, detail desain elegan, dan material berkualitas tinggi. Setiap elemen dirancang untuk memberikan pengalaman istirahat yang maksimal.`,
    highlights: ["Material premium", "Desain elegan minimalis", "Kenyamanan maksimal"],
  },
  {
    title: "Kitchen Concept",
    slug: "kitchen-concept",
    category: "Interior Design",
    location: "Bekasi",
    year: "2023",
    images: ["/kichensetbks.jpeg", "/kitchensetbks2.jpeg", "/kichensetclgs.jpeg", "/kitchensetclgs2.jpeg"],
    desc: `Konsep dapur modern dengan desain ergonomis dan efisien, disesuaikan dengan kebutuhan aktivitas memasak sehari-hari serta estetika jangka panjang yang tidak lekang oleh waktu.`,
    highlights: ["Layout ergonomis", "Kitchen set custom", "Finishing premium"],
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxImg, setLightboxImg] = useState(null);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <div className="text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <h2 className="font-display text-3xl font-semibold text-[#1a1814] mb-3">Proyek Tidak Ditemukan</h2>
          <p className="font-body text-[#8a7e72] mb-6">Proyek yang Anda cari tidak tersedia.</p>
          <Link to="/projects" className="btn-primary">← Kembali ke Proyek</Link>
        </div>
      </div>
    );
  }

  const [mainImg, ...rest] = project.images;

  return (
    <div className="bg-white min-h-screen">

      {/* ── Top Hero ── */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src={mainImg}
          alt={project.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1814] via-[#1a1814]/30 to-transparent" />

        {/* Back button */}
        <div className="absolute top-28 left-6 md:left-16 z-10">
          <Link
            to="/projects"
            id="project-detail-back"
            className="flex items-center gap-2 font-body text-sm font-medium text-white/80 hover:text-[#93bda9] transition-colors bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full"
          >
            <FaArrowLeft size={12} />
            Kembali ke Proyek
          </Link>
        </div>

        {/* Hero info overlay */}
        <div className="absolute bottom-10 left-6 md:left-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="flex items-center gap-1.5 font-body text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <FaTag size={10} /> {project.category}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <FaMapMarkerAlt size={10} /> {project.location}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full">
                <FaCalendarAlt size={10} /> {project.year}
              </span>
            </div>
            <h1
              className="font-display text-white font-semibold"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-16">

          {/* Left — Gallery & Description */}
          <div className="md:col-span-2">

            {/* Gallery grid */}
            {rest.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="grid grid-cols-2 gap-4 mb-12"
              >
                {rest.map((img, i) => (
                  <button
                    key={i}
                    id={`gallery-img-${i}`}
                    className="rounded-2xl overflow-hidden h-56 md:h-72 relative group cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#93bda9]"
                    onClick={() => setLightboxImg(img)}
                  >
                    <img
                      src={img}
                      alt={`${project.title} ${i + 2}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-3xl">🔍</span>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label">Tentang Proyek</span>
              <h2 className="font-display text-3xl font-semibold text-[#1a1814] mb-4">
                Project Overview
              </h2>
              <div className="divider-sage mb-6" />
              <p className="font-body text-[#8a7e72] text-base leading-[1.9]">{project.desc}</p>
            </motion.div>
          </div>

          {/* Right — Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="space-y-6"
          >
            {/* Info card */}
            <div className="bg-[#f8f5f0] rounded-3xl p-7">
              <h3 className="font-display text-xl font-semibold text-[#1a1814] mb-5">Info Proyek</h3>
              <ul className="space-y-4">
                {[
                  { icon: <FaTag />, label: "Kategori", value: project.category },
                  { icon: <FaMapMarkerAlt />, label: "Lokasi", value: project.location },
                  { icon: <FaCalendarAlt />, label: "Tahun", value: project.year },
                ].map(({ icon, label, value }) => (
                  <li key={label} className="flex items-center gap-3">
                    <span className="text-[#93bda9] text-sm">{icon}</span>
                    <div>
                      <div className="font-body text-xs text-[#8a7e72]">{label}</div>
                      <div className="font-body text-sm font-semibold text-[#1a1814]">{value}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights card */}
            {project.highlights && (
              <div className="bg-[#1a1814] rounded-3xl p-7">
                <h3 className="font-display text-xl font-semibold text-white mb-5">Highlights</h3>
                <ul className="space-y-3">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-3 font-body text-sm text-white/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#93bda9] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Card */}
            <div
              className="rounded-3xl p-7 text-white text-center"
              style={{ background: "linear-gradient(135deg, #93bda9 0%, #7aaa94 100%)" }}
            >
              <h3 className="font-display text-xl font-semibold mb-3">Tertarik?</h3>
              <p className="font-body text-white/85 text-sm leading-relaxed mb-5">
                Konsultasikan proyek Anda bersama tim profesional kami.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                id="project-detail-cta"
                className="btn-dark w-full justify-center text-sm"
              >
                <FaWhatsapp />
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 backdrop-blur-sm"
          onClick={() => setLightboxImg(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition"
            onClick={() => setLightboxImg(null)}
          >
            <FaTimes />
          </button>
          <img
            src={lightboxImg}
            alt="Preview"
            className="max-h-[85vh] max-w-full rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
