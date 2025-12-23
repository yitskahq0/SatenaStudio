import { useParams, Link } from "react-router-dom";

const projects = [
  {
    title: "Cafe Interior",
    slug: "cafe-interior",
    category: "Commercial Interior",
    location: "Jakarta",
    year: "2024",
    images: ["/Project1.png", "/kopken4.jpeg", "/Kopken.jpeg", "/kopken2.jpeg"],
    desc: `
    Proyek interior cafe ini dirancang dengan pendekatan modern dan sentuhan
    industrial. Fokus utama desain adalah menciptakan suasana yang nyaman,
    hangat, dan efisien untuk mendukung pengalaman pengunjung serta
    memperkuat identitas visual brand.
    `,
  },
  {
    title: "House Renovation",
    slug: "house-renovation",
    category: "Residential",
    location: "Jakarta",
    year: "2024",
    images: ["/Project2.png", "/rmhjatiwarna 1.jpeg", "/rmhjatiwarna2.jpeg", "/rmhjatiwarna5.jpeg"],
    desc: `
    Konsep Desain Hunian ini mengusung konsep Modern-Contemporary 
    Tropis yang memadukan garis arsitektur tegas dengan material hangat. 
    Fokus utama proyek ini adalah menciptakan ruang tinggal yang fungsional namun mewah melalui 
    permainan tekstur kayu, palet warna monokromatik (abu-abu gelap dan putih), serta sistem pencahayaan indirect lighting yang dramatis.
    `,
  },
 
  
  {
    title: "Luxury Bedroom",
    slug: "luxury-bedroom",
    category: "Interior",
    location: "Jakarta",
    year: "2024",
    images: ["/rumhtebet.jpeg", "/rumhtebet2.jpeg"],
    desc: `
    Kamar tidur dengan konsep luxury modern yang mengutamakan
    kenyamanan, detail desain elegan, dan material berkualitas tinggi.
    `,
  },
  {
    title: "Kitchen Concept",
    slug: "kitchen-concept",
    category: "Interior",
    location: "Bekasi",
    year: "2023",
    images: ["/kichensetbks.jpeg", "/kitchensetbks2.jpeg","/kichensetclgs.jpeg","/kitchensetclgs2.jpeg"],
    desc: `
    Konsep dapur modern dengan desain ergonomis dan efisien,
    disesuaikan dengan kebutuhan aktivitas memasak sehari-hari
    serta estetika jangka panjang.
    `,
  },
];

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="pt-32 text-center">Project tidak ditemukan</div>;
  }

  return (
    <div className="pt-32 px-6 md:px-24 max-w-6xl mx-auto">
      {/* BACK */}
      <Link to="/projects" className="text-[#93bda9] hover:underline">
        ← Kembali ke Project
      </Link>

      {/* TITLE */}
      <h1 className="text-4xl font-bold mt-6">{project.title}</h1>

      {/* META INFO */}
      <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">
          {project.category}
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">
          {project.location}
        </span>
        <span className="bg-gray-100 px-3 py-1 rounded-full">
          {project.year}
        </span>
      </div>

      {/* GALLERY */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {project.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={project.title}
            className="w-full h-80 object-cover rounded-2xl"
          />
        ))}
      </div>

      {/* DESCRIPTION */}
      <div className="mt-12 max-w-3xl">
        <h2 className="text-2xl font-semibold mb-4">
          Project Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {project.desc}
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 bg-[#93bda9] text-white rounded-2xl p-10 text-center">
        <h3 className="text-2xl font-bold mb-4">
          Tertarik dengan desain seperti ini?
        </h3>
        <p className="mb-6">
          Hubungi kami untuk konsultasi dan wujudkan ruang impian Anda bersama tim profesional kami.
        </p>
        <a
         href={`https://wa.me/6281228078419?text=${encodeURIComponent('Halo, saya tertarik dengan layanan Tim Satena. Bisa dibantu?')}`}
          target="_blank"
          className="inline-block bg-white text-[#93bda9] font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Hubungi Kami
        </a>
      </div>
    </div>
  );
}
