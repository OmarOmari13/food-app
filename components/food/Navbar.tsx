"use client";

import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="relative z-50">

      <div className="flex items-center justify-between px-5 lg:px-20 py-4">

        {/* LOGO */}
        <div className="flex items-center">
          <Image
            alt="logo"
            src="/logo.png"
            height={120}
            width={120}
            className="w-24 h-auto"
          />
        </div>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-gray-700 dark:text-gray-300">
          <a href="#specialOffers" className="hover:text-[#ff5a5f] transition">
            Today Special Offers
          </a>
          <a href="#aboutus" className="hover:text-[#ff5a5f] transition">
            Why FoodHut
          </a>
          <a href="#menu" className="hover:text-[#ff5a5f] transition">
            Our Menu
          </a>
          <a href="#popular" className="hover:text-[#ff5a5f] transition">
            Popular Food
          </a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DARK MODE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full bg-white dark:bg-[#1c1c1c] border flex items-center justify-center text-[#ff5a5f] transition hover:scale-110"
          >
            <span className="transition">
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </button>

          {/* DOWNLOAD */}
          <button className="hidden sm:block bg-[#ff5a5f] text-white px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition">
            Download App
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-xl text-gray-800 dark:text-white transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`${menuOpen ? "rotate-180" : "rotate-0"} transition-transform duration-300`}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full bg-white dark:bg-black shadow-xl transform transition-all duration-300 ease-in-out
        ${menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"}`}
      >

        <div className="px-6 py-6 space-y-5 text-gray-700 dark:text-gray-300">

          <a
            href="#specialOffers"
            onClick={handleLinkClick}
            className="block hover:text-[#ff5a5f] transition transform hover:translate-x-2"
          >
            Today Special Offers
          </a>

          <a
            href="#aboutus"
            onClick={handleLinkClick}
            className="block hover:text-[#ff5a5f] transition transform hover:translate-x-2"
          >
            Why FoodHut
          </a>

          <a
            href="#menu"
            onClick={handleLinkClick}
            className="block hover:text-[#ff5a5f] transition transform hover:translate-x-2"
          >
            Our Menu
          </a>

          <a
            href="#popular"
            onClick={handleLinkClick}
            className="block hover:text-[#ff5a5f] transition transform hover:translate-x-2"
          >
            Popular Food
          </a>

          <button
            onClick={handleLinkClick}
            className="w-full bg-[#ff5a5f] text-white py-3 rounded-full mt-4 hover:scale-105 transition"
          >
            Download App
          </button>

        </div>
      </div>

    </header>
  );
};

export default NavBar;