import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] mt-20 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-3">
            <img 
              src="/Logo.png"
              alt="Logo"
              className="h-16 w-16 object-contain"
            />
            <span className="font-montserrat font-bold text-2xl">
              <span className="text-[#93bda9]">BUILD</span>
              <span className="text-[#826c57]">ForU</span>
            </span>
          </div>
          <p className="mt-3 text-gray-600 text-center md:text-left">
            Solusi konstruksi terpercaya untuk kebutuhan bangunan Anda.
          </p>
        </div>

        {/* Address */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-3">Alamat Kantor</h3>
          <p className="text-gray-700 leading-relaxed">
            Jl. Cipayung Barat 1 No.69 a, Cipayung, Kec. Cipayung,
            Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta
          </p>
        </div>

        {/* Contact & Social Media */}
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl mb-3">Hubungi Kami</h3>

          <div className="space-y-2 text-gray-700">
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaEnvelope /> <span>SatenaStud@gmail.com</span>
            </p>
            <p className="flex items-center justify-center md:justify-start space-x-2">
              <FaWhatsapp /> <span>+62 812-2807-8419</span>
            </p>
          </div>

          <h3 className="font-bold text-xl mt-5 mb-3">Sosial Media</h3>

          <div className="flex justify-center md:justify-start space-x-4 text-2xl">
            <a href="#" className="hover:text-[#93bda9] transition"><FaFacebookF /></a>
            <a href="https://www.instagram.com/satenabuild/" className="hover:text-[#93bda9] transition"><FaInstagram /></a>
            <a href="https://wa.me/6281228078419?text=Halo%20TimSatena,%20saya%20ingin%20konsultasi%20mengenai%20desain%20dan%20konstruksi." className="hover:text-[#93bda9] transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} SatenaStudio. All Rights Reserved.
      </div>
    </footer>
  );
}
