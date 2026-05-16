"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaSearch, FaPlay, FaMoon, FaSun } from "react-icons/fa";
import FoodHero from "./hero";

export default function FoodLandingPage() {

 
  return (
    <main className="mt-[-40px]">
      
     
      

      
      <section  className="relative z-10 px-10 lg:px-20 pt-8 pb-16">
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