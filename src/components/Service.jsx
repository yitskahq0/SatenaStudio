export default function Service() {
  const services = [
    {
      title: "Perencanaan & Desain",
      subtitle: "Design & Planning",
      img: "/Service1.png",
      desc: "Mulai dari konsep awal, penataan ruang, hingga desain final yang siap dieksekusi.",
    },
    {
      title: "Pelaksanaan Konstruksi",
      subtitle: "Build & Construction",
      img: "/Service2.png",
      desc: "Pembangunan dengan pengawasan ketat untuk memastikan kualitas, waktu, dan anggaran terpenuhi.",
    },
    {
      title: "Furnitur Kustom",
      subtitle: "Custom Furniture",
      img: "/Service3.png",
      desc: "Pembuatan furnitur khusus sesuai kebutuhan dan karakter ruang Anda.",
    },
  ];

  return (
    <div className="w-full py-20 bg-white mt-24">
      <h2 className="text-center font-montserrat font-bold text-3xl mb-12">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8 md:px-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-3xl shadow-md hover:shadow-xl transition-shadow bg-[#f9f9f9]"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-60 h-60 object-contain mb-6"
            />

            <h3 className="text-2xl font-bold font-montserrat text-[#826c57]">
              {service.title}
            </h3>

            <p className="text-[#93bda9] font-medium mt-1">
              {service.subtitle}
            </p>

            <p className="text-gray-600 mt-4 leading-relaxed font-montserrat">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
