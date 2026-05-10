"use client";

import Image from "next/image";

const foods = [
  {
    id: 1,
    name: "Kebab",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Pizza",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Meat Balls",
    image:
      "https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cheese Burger",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Chicken",
    image:
      "https://images.unsplash.com/photo-1604908176997-431221e2b47d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Fried Rice",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = [
  "Ramen",
  "Breakfast",
  "Lunch",
  "Dinner",
  "Mexican",
  "Italian",
  "Desserts",
  "Drinks",
];

export default function PopularMenu() {
  return (
    <section className="relative py-24">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-20">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-black leading-tight text-black dark:text-white">
            Menu That <span className="text-[#ff5a5f]">Always</span> Make You
            <br />
            Fall In <span className="text-[#f7b733]">Love</span>
          </h2>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">

          {categories.map((item, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full border text-sm transition-all duration-300
              ${
                index === 0
                  ? "bg-[#ff5a5f] text-white border-[#ff5a5f]"
                  : "border-gray-300 dark:border-[#333] text-gray-700 dark:text-gray-300 hover:bg-[#ff5a5f] hover:text-white hover:border-[#ff5a5f]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-20">

          {foods.map((food) => (
            <div
              key={food.id}
              className="relative bg-[#fff1f0] dark:bg-[#1a1a1a] rounded-[35px] pt-24 pb-8 px-6 text-center shadow-md hover:-translate-y-2 transition-all duration-300"
            >

              {/* Top Arc */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[170px] h-[85px] border-t-[10px] border-x-[10px] border-[#ffd2c4] rounded-t-full" />

              {/* Food Image */}
              <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 z-20">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden shadow-xl border-[6px] border-white dark:border-[#222]">

                  <Image
                    src={food.image}
                    alt={food.name}
                    fill
                    className="object-cover"
                  />

                  {/* Price */}
                  <div className="absolute bottom-1 right-1 w-10 h-10 rounded-full bg-[#f7b733] text-white text-xs font-bold flex items-center justify-center shadow-lg">
                    10$
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="flex items-center justify-center gap-3 mt-4">

                <div className="flex -space-x-2">
                  <img
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1a1a1a]"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1a1a1a]"
                  />

                  <img
                    src="https://randomuser.me/api/portraits/women/45.jpg"
                    alt="user"
                    className="w-7 h-7 rounded-full border-2 border-white dark:border-[#1a1a1a]"
                  />
                </div>

                <div className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300">
                  <span className="text-yellow-400">★</span>
                  (4.5)
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-bold text-[#ff5a5f]">
                {food.name}
              </h3>

              {/* Description */}
              <p className="mt-4 text-sm leading-7 text-gray-500 dark:text-gray-400">
                Lorem Ipsum Is Simply Dummy Text Of The Printing And
                Typesetting Industry
              </p>

              {/* Button */}
              <button className="mt-8 bg-[#ff5a5f] hover:bg-[#ff4348] transition-colors text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg hover:scale-105 duration-300">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}