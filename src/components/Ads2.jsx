import React from "react";

export default function Ads2() {
  return (
    <section className="relative w-full mt-20">
      {/* Background Image */}
      <div className="w-full h-48 sm:h-64 md:h-72 lg:h-80 rounded-xl overflow-hidden shadow-lg mx-auto">
        <img 
          src="/Banner.jpg" 
          alt="CTA Banner" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
          Siap Wujudkan Bangunan Impian Anda?
        </h2>

        <p className="text-white text-sm sm:text-base md:text-lg mt-2 drop-shadow-lg">
          Konsultasikan kebutuhan Anda dengan tim profesional kami.
        </p>

        <a
            href="https://wa.me/6281228078419?text=Halo%20TimSatena,%20saya%20ingin%20konsultasi%20mengenai%20desain%20dan%20konstruksi."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-[#93bda9] hover:bg-[#82a897] text-white font-semibold px-6 md:px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
          >
        Konsultasi Sekarang
      </a>

      </div>
    </section>
  );
}
