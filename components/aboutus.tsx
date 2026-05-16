"use client";

import Image from "next/image";

export default function MultiServiceSection() {
  return (
    <section id="aboutus" className="relative">

      {/* Top Right Decoration */}
      <div className="absolute top-0 right-0 opacity-70">
        <Image
          src="/leaf.png"
          alt="leaf"
          width={120}
          height={120}
          className="w-16 sm:w-24 lg:w-32 h-auto"
        />
      </div>

      {/* Left Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-[#ffb84d]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="relative flex justify-center">

            {/* Circle Background */}
            <div className="absolute w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] rounded-full border-[10px] border-[#ffd9cb] dark:border-[#2a2a2a]" />

            {/* Dashed Circle */}
            <div className="absolute w-[290px] sm:w-[350px] lg:w-[420px] h-[290px] sm:h-[350px] lg:h-[420px] rounded-full border border-dashed border-[#f7b733] opacity-50 animate-spin-slow" />

            {/* Chef Image */}
            <Image
              src="/chef.png"
              alt="chef"
              width={500}
              height={500}
              className="relative z-30 w-[240px] sm:w-[320px] lg:w-[340px] h-auto object-contain"
            />

            {/* Food Image */}
        

            {/* Small Herbs */}
            
          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center lg:text-left">

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-black dark:text-white">
              We are <span className="text-[#ff5a5f]">more than</span>
              <br />

              <span className="text-[#f7b733]">multiple</span> service
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              This is a type of restaurant which typically serves food and
              drink, in addition to light refreshments such as baked goods or
              snacks. The term comes from the French word meaning food.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-y-5 gap-x-10 mt-10 text-left">

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  🍽
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Online Order
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  ⏰
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  24/7 Service
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  📅
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Pre-Reservation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  🏪
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Organized Foodhut Place
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  👨‍🍳
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Super Chef
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#fff0ea] dark:bg-[#1f1f1f] flex items-center justify-center text-[#ff5a5f] text-xs">
                  🧼
                </div>

                <span className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                  Clean Kitchen
                </span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-10 bg-[#ff5a5f] hover:bg-[#ff4348] transition-colors text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 duration-300">
              About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}