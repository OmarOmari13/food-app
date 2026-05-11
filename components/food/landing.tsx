"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaPlay, FaMoon, FaSun } from "react-icons/fa";
import FoodHero from "./hero";

export default function FoodLandingPage() {

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="">
      
      {/* NAVBAR */}
      <header className="relative z-20 flex items-center justify-between px-10 lg:px-20 ">
        
        <div className="text-3xl font-black italic text-black dark:text-white">
          <Image
            alt="logo"
            src="/logo.png"
            height={150}
            width={150}
          />
        </div>

        <div className="">
          <Image
            src="/Vector 2.png"
            alt="dashedline"
            height={150}
            width={150}
            className="relative top-28 right-35"
          />

          <Image
            src="/Arrow 1 (Stroke).png"
            alt="dashedline"
            height={15}
            width={15}
            className="relative top-28 right-[-2]"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-12 text-[15px] font-medium text-gray-700 dark:text-gray-300">
          
          <a
            href="#"
            className="hover:text-[#ff5a5f] transition-colors"
          >
            Today Special Offers
          </a>

          <a
            href="#"
            className="hover:text-[#ff5a5f] transition-colors"
          >
            Why FoodHut
          </a>

          <a
            href="#"
            className="hover:text-[#ff5a5f] transition-colors"
          >
            Our Menu
          </a>

          <a
            href="#"
            className="hover:text-[#ff5a5f] transition-colors"
          >
            Our Popular Food
          </a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* DARK MODE BUTTON */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-12 h-12 rounded-full bg-white dark:bg-[#1c1c1c] border border-gray-200 dark:border-[#2c2c2c] flex items-center justify-center shadow-lg text-[#ff5a5f] transition-all duration-300"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* DOWNLOAD BUTTON */}
          <button className="bg-[#ff5a5f] text-white px-7 py-3 rounded-full text-sm font-semibold shadow-xl hover:scale-105 transition-transform">
            Download App
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 px-10 lg:px-20 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-[#ff5a5f]" />

              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                People Trust us
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight text-black dark:text-white">
              We&apos;re{" "}
              <span className="text-[#ff5a5f]">
                Serious
              </span>{" "}
              For <br />

              <span className="text-[#ff5a5f]">
                Food
              </span>{" "}
              &{" "}
              <span className="text-[#f7b733]">
                Delivery.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-9 text-gray-600 dark:text-gray-400 max-w-xl">
              Best cooks and best delivery guys all at your service.
              Hot tasty food will reach you in 60 minutes.
            </p>

            {/* SEARCH */}
            <div className="mt-10 flex items-center border border-[#e9d8d2] dark:border-[#2b2b2b] rounded-full px-6 py-4 max-w-xl bg-white/70 dark:bg-[#1d1d1d]/80 backdrop-blur-md">

              <FaSearch className="text-gray-400 text-lg" />

              <input
                type="text"
                placeholder="Search food"
                className="flex-1 px-4 outline-none bg-transparent text-gray-700 dark:text-white placeholder:text-gray-400"
              />

              <button className="w-11 h-11 rounded-full bg-[#f7b733] flex items-center justify-center text-white">
                <FaSearch />
              </button>
            </div>

            {/* BUTTONS */}
            <div className="flex items-center gap-8 mt-10">

              <button className="bg-[#ff5a5f] text-white px-8 py-4 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform">
                Download App
              </button>

              <div className="flex items-center gap-4 cursor-pointer">

                <div className="w-14 h-14 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-[#ff5a5f] shadow-lg bg-white dark:bg-[#1c1c1c]">
                  <FaPlay className="ml-1" />
                </div>

                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Watch Video
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <FoodHero/>
        </div>
      </section>
    </main>
  );
}