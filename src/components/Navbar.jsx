import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`w-full z-50 transition-all duration-300 ${
        scrolled
          ? "fixed top-0 bg-white/40 backdrop-blur-md shadow-none"
          : "bg-white shadow"
      }`}
    >
      <div className="flex justify-between items-center px-4 py-3 sm:py-2 h-16 sm:h-20 md:h-24">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 flex-1 justify-center md:justify-start">
          <img
            src="/Logo.png"
            alt="Logo"
            className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 object-contain"
          />
          <span className="font-montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">
            <span className="text-[#93bda9]">BUILD</span>
            <span className="text-[#826c57]">ForU</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 font-montserrat text-lg lg:text-xl items-center">
          <li className="hover:text-[#93bda9] cursor-pointer transition"><Link to="/">HOME</Link></li>
          <li className="hover:text-[#93bda9] cursor-pointer transition"><Link to="/projects">OUR PROJECT</Link></li>
          <li className="hover:text-[#93bda9] cursor-pointer transition"><Link to="/about">ABOUT US</Link></li>
          <li>
            <a
              href={`https://wa.me/6281228078419?text=${encodeURIComponent('Halo, saya tertarik dengan layanan Tim Satena. Bisa dibantu?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#93bda9] rounded px-4 py-2 flex items-center space-x-2 hover:bg-[#93bda9] hover:text-white transition"
            >
              <span>📞</span>
              <span>Hubungi Kami</span>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 bg-[#93bda9] text-white rounded text-lg font-montserrat"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 py-3 bg-gray-50 font-montserrat text-lg">
          <li className="hover:text-[#93bda9] cursor-pointer py-2">
            <Link to="/" onClick={() => setIsOpen(false)}>HOME</Link>
          </li>
          <li className="hover:text-[#93bda9] cursor-pointer py-2">
            <Link to="/projects" onClick={() => setIsOpen(false)}>OUR PROJECT</Link>
          </li>
          <li className="hover:text-[#93bda9] cursor-pointer py-2">
            <Link to="/about" onClick={() => setIsOpen(false)}>ABOUT US</Link>
          </li>
          <li>
            <a
              href={`https://wa.me/6281228078419?text=${encodeURIComponent('Halo, saya tertarik dengan layanan Tim Satena. Bisa dibantu?')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="border-2 border-[#93bda9] rounded px-4 py-2 flex items-center space-x-2 hover:bg-[#93bda9] hover:text-white transition"
            >
              <span>📞</span>
              <span>Hubungi Kami</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}