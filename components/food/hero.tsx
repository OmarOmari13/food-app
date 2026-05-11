"use client";

import Image from "next/image";

export default function FoodHero() {
  return (
    <section className="overflow-hidden px-4">
      <div className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[550px] lg:max-w-[700px] aspect-square mx-auto">

        {/* Decorative Circles */}
        <div className="absolute top-6 right-0 w-24 h-24 border border-orange-200 rounded-full opacity-40" />
        <div className="absolute top-10 right-6 w-16 h-16 border border-orange-200 rounded-full opacity-40" />

        {/* Main Red Circle */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[72%] h-[72%] rounded-full bg-[#ff4b4b]" />
        </div>

        {/* White Ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[84%] h-[84%] rounded-full border-[12px] md:border-[18px] border-white/70" />
        </div>

        {/* Main Girl Image */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <Image
            src="/girl.png"
            alt="Girl eating pizza"
            width={500}
            height={700}
            className="object-contain w-[62%] sm:w-[60%] md:w-[58%] drop-shadow-2xl"
          />
        </div>

        {/* Fire Emoji */}
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 text-3xl md:text-5xl z-40">
          🔥
        </div>

        {/* Left Pizza Card */}
        <div className="absolute top-[20%] left-[-2%] sm:left-[2%] bg-white rounded-2xl shadow-lg px-2 py-2 sm:px-3 sm:py-3 flex items-center gap-2 z-40">

          <Image
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500&auto=format&fit=crop"
            alt="Pizza"
            width={60}
            height={60}
            className="rounded-xl object-cover w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
          />

          <div>
            <h3 className="font-semibold text-[10px] sm:text-sm">
              Italian Pizza
            </h3>

            <p className="text-yellow-500 text-[8px] sm:text-xs">
              ★★★★★
            </p>

            <p className="font-bold text-[10px] sm:text-sm mt-1">
              $9.50
            </p>
          </div>
        </div>

        {/* Right Customer Card */}
        <div className="absolute top-[24%] right-[-4%] sm:right-[2%] bg-white rounded-2xl shadow-lg px-2 py-2 sm:px-3 sm:py-3 flex items-center gap-2 z-40">

          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-300 flex items-center justify-center text-lg sm:text-xl">
            😊
          </div>

          <div>
            <h3 className="font-semibold text-[10px] sm:text-sm">
              Happy Customer
            </h3>

            <p className="text-gray-500 text-[8px] sm:text-xs">
              ⭐ 4.9 Reviews
            </p>
          </div>
        </div>

        {/* Food Left */}
        <div className="absolute bottom-[24%] left-[-2%] sm:left-[2%] z-30">
          <Image
            src="https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=600&auto=format&fit=crop"
            alt="Food"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-2xl border-4 border-white w-[75px] h-[75px] sm:w-[110px] sm:h-[110px]"
          />
        </div>

        {/* Food Bottom Left */}
        <div className="absolute bottom-[4%] left-[24%] z-30">
          <Image
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop"
            alt="Food"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-2xl border-4 border-white w-[75px] h-[75px] sm:w-[110px] sm:h-[110px]"
          />
        </div>

        {/* Food Bottom Right */}
        <div className="absolute bottom-[4%] right-[18%] z-30">
          <Image
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=600&auto=format&fit=crop"
            alt="Food"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-2xl border-4 border-white w-[75px] h-[75px] sm:w-[110px] sm:h-[110px]"
          />
        </div>

        {/* Food Right */}
        <div className="absolute bottom-[24%] right-[-2%] sm:right-[2%] z-30">
          <Image
            src="https://images.unsplash.com/photo-1529042410759-befb1204b468?q=80&w=600&auto=format&fit=crop"
            alt="Food"
            width={130}
            height={130}
            className="rounded-full object-cover shadow-2xl border-4 border-white w-[75px] h-[75px] sm:w-[110px] sm:h-[110px]"
          />
        </div>

        {/* Decorations */}
        <div className="hidden md:block absolute top-[12%] right-[20%] text-3xl z-40">
          🌿
        </div>

        <div className="absolute top-[28%] left-[35%] text-yellow-400 text-xl md:text-3xl rotate-12 z-40">
          ✨
        </div>

        <div className="absolute top-[30%] right-[34%] text-yellow-400 text-xl md:text-3xl -rotate-12 z-40">
          ✨
        </div>
      </div>
    </section>
  );
}