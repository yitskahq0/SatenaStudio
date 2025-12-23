import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProjectPage() {
  const projects = [
    { title: "Cafe Interior", slug: "cafe-interior", img: "/Project1.png" },
    { title: "House Renovations", slug: "house-renovation", img: "/Project2.png" },
    { title: "Luxury Bedroom", slug: "luxury-bedroom", img: "/Project6.jpg" },
    { title: "Kitchen Concept", slug: "kitchen-concept", img: "/Project4.png" },
  ];

  return (
    <div className="pt-32 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-center mb-16">
        Our Projects
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((item) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to={`/projects/${item.slug}`}
              className="block rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-72 w-full object-cover transition-transform duration-500 hover:scale-110"
              />

              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
