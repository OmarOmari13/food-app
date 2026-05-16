"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const foods = [
  {
    id: 1,
    name: "Kebab",
    image:
      "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?q=80&w=800&auto=format&fit=crop",
    price: "10$",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Chicken Tikka",
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=800&auto=format&fit=crop",
    price: "15$",
    rating: "4.8",
  },
  {
    id: 3,
    name: "Desi Chowmein",
    image:
      "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=800&auto=format&fit=crop",
    price: "8$",
    rating: "4.2",
  },
  {
    id: 4,
    name: "Chicken Chargha",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?q=80&w=800&auto=format&fit=crop",
    price: "28$",
    rating: "5.0",
  },
];

export default function SpecialOffers() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % foods.length);
  const prev = () => setIndex((p) => (p - 1 + foods.length) % foods.length);

  return (
    <section id="spacialOffers" className="min-h-screen overflow-hidden relative py-24">

      {/* decorative */}
      {/* <div className="absolute left-6 top-24 h-24 w-24 rotate-12 rounded-full border-[10px] border-pink-200 opacity-40" /> */}

      <div className="mx-auto max-w-7xl px-6">

        {/* HEADING */}
        <div className="mx-auto mb-20 max-w-2xl text-center relative z-20">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Today <span className="text-red-500">Special</span> Offers
          </h2>

          <p className="mt-6 text-sm leading-8 text-gray-500 dark:text-gray-300">
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
            Industry. Lorem Ipsum Has Been The Industry&apos;s Standard Dummy Text
            Ever Since The 1500s.
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-10">
          {foods.map((food) => (
            <div
              key={food.id}
              className="group relative rounded-[30px] bg-[#fff2f1] px-6 pb-8 pt-16 text-center shadow-sm"
            >
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative h-32 w-32 rounded-full border-[8px] border-[#ffcfb8] bg-white shadow-lg">
                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="rounded-full object-cover"
                  />

                  <div className="absolute bottom-2 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb84d] text-white font-bold">
                    {food.price}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#ff5b5b] mt-12">
                {food.name}
              </h3>

              <p className="mt-4 text-sm text-gray-500">
                Delicious food made fresh every day
              </p>

              <button className="mt-8 rounded-full bg-[#ff5b5b] px-7 py-3 text-white font-semibold">
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* MOBILE SLIDER */}
        <div className="sm:hidden relative flex items-center justify-center">

          {/* Prev */}
          <button
            onClick={prev}
            className="absolute left-0 z-30 bg-white shadow-lg px-4 py-2 rounded-full"
          >
            ‹
          </button>

          <div className="w-full max-w-sm overflow-hidden relative z-20">

            <AnimatePresence mode="wait">
              <motion.div
                key={foods[index].id}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-[30px] bg-[#fff2f1] px-6 pb-10 pt-24 text-center shadow-lg"
              >

                {/* FIX: pushed DOWN so it never hits title */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-20">
                  <div className="relative h-32 w-32 rounded-full border-[8px] border-[#ffcfb8] bg-white shadow-lg">
                    <Image
                      src={foods[index].image}
                      alt={foods[index].name}
                      fill
                      className="rounded-full object-cover"
                    />

                    <div className="absolute bottom-2 right-0 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffb84d] text-white font-bold">
                      {foods[index].price}
                    </div>
                  </div>
                </div>

                {/* spacing FIXED */}
                <h3 className="text-xl font-bold text-[#ff5b5b] mt-16">
                  {foods[index].name}
                </h3>

                <p className="mt-6 text-sm leading-7 text-gray-500 px-2">
                  Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting
                  Industry
                </p>

                <div className="mt-4 text-yellow-500 font-semibold">
                  ★ {foods[index].rating}
                </div>

                <button className="mt-8 rounded-full bg-[#ff5b5b] px-7 py-3 text-white font-semibold">
                  Order Now
                </button>
              </motion.div>
            </AnimatePresence>

          </div>

          {/* Next */}
          <button
            onClick={next}
            className="absolute right-0 z-30 bg-white shadow-lg px-4 py-2 rounded-full"
          >
            ›
          </button>

        </div>
      </div>
    </section>
  );
}