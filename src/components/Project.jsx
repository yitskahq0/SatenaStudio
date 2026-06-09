import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { title: "Cafe Interior", category: "Commercial Interior", img: "/Project1.png", slug: "cafe-interior", location: "Jakarta" },
  { title: "House Renovation", category: "Residential", img: "/Project2.png", slug: "house-renovation", location: "Jakarta" },
  { title: "Luxury Bedroom", category: "Interior Design", img: "/Project6.jpg", slug: "luxury-bedroom", location: "Jakarta" },
  { title: "Kitchen Concept", category: "Interior Design", img: "/Project4.png", slug: "kitchen-concept", location: "Bekasi" },
];

export default function Project() {
  return (
    <section className="section" style={{ background: "white" }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="label" style={{ display: "block", marginBottom: "0.6rem" }}>Portofolio Kami</span>
            <h2 className="display-md" style={{ color: "#1c1814" }}>Hasil Nyata yang<br />Bisa Anda Lihat</h2>
            <div className="divider" style={{ margin: "0.75rem 0 0" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
          >
            <Link to="/projects" id="home-see-all-projects" className="btn btn-outline-green">
              Lihat Semua Proyek
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </div>

        {/* Swiper */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop
            breakpoints={{
              640:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: "3rem" }}
          >
            {projects.map((item) => (
              <SwiperSlide key={item.slug}>
                <Link
                  to={`/projects/${item.slug}`}
                  id={`home-project-${item.slug}`}
                  style={{ display: "block" }}
                  className="group"
                >
                  <div style={{
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.09)",
                    background: "white",
                    transition: "all 0.3s ease"
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.14)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.09)"; }}
                  >
                    {/* Image */}
                    <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                      <img
                        src={item.img}
                        alt={item.title}
                        style={{
                          width: "100%", height: "100%", objectFit: "cover",
                          transition: "transform 0.6s ease"
                        }}
                        onMouseEnter={e => e.target.style.transform = "scale(1.08)"}
                        onMouseLeave={e => e.target.style.transform = "scale(1)"}
                      />
                      <div style={{
                        position: "absolute", inset: 0,
                        background: "linear-gradient(to top, rgba(28,24,20,0.7) 0%, transparent 50%)"
                      }} />
                      <div style={{
                        position: "absolute", bottom: "1rem", left: "1rem",
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        color: "white",
                        fontSize: "0.7rem", fontWeight: 700,
                        padding: "0.25rem 0.7rem",
                        borderRadius: "100px"
                      }}>
                        📍 {item.location}
                      </div>
                    </div>

                    {/* Info */}
                    <div style={{ padding: "1.25rem 1.25rem 1.5rem" }}>
                      <div style={{
                        fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.14em",
                        textTransform: "uppercase", color: "#2E7D52",
                        marginBottom: "0.4rem"
                      }}>
                        {item.category}
                      </div>
                      <div style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: "1.15rem", fontWeight: 700, color: "#1c1814"
                      }}>
                        {item.title}
                      </div>
                      <div style={{
                        display: "flex", alignItems: "center", gap: "0.4rem",
                        marginTop: "0.75rem",
                        color: "#2E7D52", fontSize: "0.82rem", fontWeight: 600
                      }}>
                        Lihat Detail
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
