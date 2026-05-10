import ServicesSection from "@/components/aboutus"
import PopularMenu from "@/components/favmenue"
import FoodLandingPage from "@/components/food/landing"
import Footer from "@/components/footer"
import MobileAppSection from "@/components/mobileApp"
import SpecialOffers from "@/components/spacialOffers"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden relative  bg-gradient-to-bl from-[#ffede6] via-[#fff4ef] to-[#ffe3d7] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1f1f1f] transition-colors duration-200">

      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-[#ff5a5f]/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#f7b733]/20 blur-3xl" />
      <FoodLandingPage />
      <SpecialOffers />
      <ServicesSection />
      <PopularMenu/>
      <MobileAppSection/>
      <Footer/>
    </div>
  )
}
