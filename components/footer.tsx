"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative  pt-20 pb-10">

      {/* Top Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#ff5a5f]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">

          {/* FOODHUT */}
          <div>

            <h2 className="text-3xl font-black">
              Food<span className="text-[#ff5a5f]">Hut</span>
            </h2>

            <p className="mt-6 text-gray-400 leading-8 text-sm">
              FoodHut is one of the best food delivery and restaurant
              platforms that brings delicious meals right to your doorstep.
              Fast delivery, fresh food, and amazing service every day.
            </p>

            {/* Social Icons */}
            <div className="flex items-center text-white gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#ff5a5f] transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#ff5a5f] transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#ff5a5f] transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1d1d1d] hover:bg-[#ff5a5f] transition-all duration-300 flex items-center justify-center"
              >
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* ABOUT US */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              About Us
            </h3>

            <ul className="space-y-5 text-gray-400 text-sm">

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                About Us
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Company
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Services
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>

          {/* PARTNERSHIP */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Partnership
            </h3>

            <ul className="space-y-5 text-gray-400 text-sm">

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Business
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Franchise
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Restaurant Partner
              </li>

              <li className="hover:text-[#ff5a5f] transition-colors cursor-pointer">
                Affiliate Program
              </li>
            </ul>
          </div>

          {/* GET IN TOUCH */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Get In Touch
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              Subscribe to our newsletter and get updates about offers and
              delicious food.
            </p>

            {/* Form */}
            <form className="mt-8 flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-full bg-[#1d1d1d] border border-[#2b2b2b] outline-none focus:border-[#ff5a5f] text-white placeholder:text-gray-500"
              />

              <button
                type="submit"
                className="bg-[#ff5a5f] hover:bg-[#ff4348] transition-all duration-300 py-4 rounded-full font-semibold shadow-lg hover:scale-[1.02]"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#2a2a2a] mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2026 FoodHut. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">

            <a href="#" className="hover:text-[#ff5a5f] transition-colors">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-[#ff5a5f] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}