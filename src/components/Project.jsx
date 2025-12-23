import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";

export default function Project() {
  const projects = [
    { title: "Cafe Interior", img: "/Project1.png", slug: "cafe-interior" },
    { title: "House Renovation", img: "/Project2.png", slug: "house-renovation" },
    { title: "Luxury Bedroom", img: "/Project6.jpg", slug: "luxury-bedroom" },
    { title: "Kitchen Concept", img: "/Project4.png", slug: "kitchen-concept" },
  ];

  return (
    <div className="w-full py-16 bg-white mt-24">
      {/* JUDUL → HALAMAN PROJECT */}
      <Link to="/projects">
        <h2 className="text-center font-montserrat font-bold text-3xl mb-10 hover:text-[#93bda9] cursor-pointer transition">
          Our Project
        </h2>
      </Link>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="px-6"
      >
        {projects.map((item) => (
          <SwiperSlide key={item.slug}>
            {/* CARD → DETAIL PROJECT */}
            <Link to={`/projects/${item.slug}`}>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                <div className="relative group">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>

              <h3 className="mt-4 text-center font-montserrat font-semibold text-xl">
                {item.title}
              </h3>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
