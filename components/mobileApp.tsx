"use client";

import Image from "next/image";

export default function MobileAppSection() {
  return (
    <section className="relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#ffb84d]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl font-black leading-tight text-black dark:text-white">

              It&apos;s Now{" "}
              <span className="text-[#ff5a5f]">More Easy</span> to{" "}
              <span className="text-[#f7b733]">Order</span>

              <br />

              by Our Mobile{" "}
              <span className="text-[#ff5a5f]">App</span>
            </h2>

            {/* Description */}
            <p className="mt-8 text-gray-600 dark:text-gray-400 leading-8 text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
              All you need to do is download one of the best delivery apps,
              make an order and most companies are opting for mobile app
              development for food delivery.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-5 mt-10">

              {/* Google Play */}
              <button className="flex items-center gap-3 bg-black hover:scale-105 transition-transform text-white px-5 py-3 rounded-xl shadow-lg w-[210px]">

                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  width={180}
                  height={60}
                  className="w-full h-auto"
                />
              </button>

              {/* App Store */}
              <button className="flex items-center gap-3 bg-black hover:scale-105 transition-transform text-white px-5 py-3 rounded-xl shadow-lg w-[210px]">

                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width={180}
                  height={60}
                  className="w-full h-auto"
                />
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center order-1 lg:order-2">

            {/* Decorative Circle */}
            <div className="absolute w-[280px] sm:w-[360px] lg:w-[430px] h-[280px] sm:h-[360px] lg:h-[430px] rounded-full border-[12px] border-[#ffd9cb] dark:border-[#2a2a2a]" />

            {/* Dashed Circle */}
            <div className="absolute w-[320px] sm:w-[400px] lg:w-[470px] h-[320px] sm:h-[400px] lg:h-[470px] rounded-full border border-dashed border-[#f7b733] opacity-50 animate-spin-slow" />

            {/* Chef Image */}
            <div className="relative z-20 rounded-full overflow-hidden shadow-2xl border-[8px] border-white dark:border-[#1f1f1f]">

              <Image
                src="/chef-2.png"
                alt="chef"
                width={450}
                height={450}
                className="w-[260px] sm:w-[340px] lg:w-[450px] h-[260px] sm:h-[340px] lg:h-[450px] object-cover"
              />
            </div>

            {/* Floating Food */}
            <div className="absolute bottom-0 right-0 z-30">

              <Image
                src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop"
                alt="food"
                width={140}
                height={140}
                className="w-[90px] sm:w-[120px] lg:w-[140px] h-[90px] sm:h-[120px] lg:h-[140px] rounded-full object-cover border-[5px] border-white dark:border-[#1f1f1f] shadow-2xl"
              />
            </div>

            {/* Herbs */}
            <div className="absolute -bottom-6 left-0 z-20">

              <Image
                src="https://pngimg.com/d/parsley_PNG40.png"
                alt="herb"
                width={160}
                height={160}
                className="w-[100px] sm:w-[130px] lg:w-[160px] h-auto"
              />
            </div>

            {/* Floating Spices */}
            <div className="absolute top-0 right-0 z-10 hidden sm:block">

              <div className="grid grid-cols-4 gap-3 opacity-70">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full bg-[#7a4b2c]"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}