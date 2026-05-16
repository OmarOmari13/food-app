import ServicesSection from "@/components/aboutus"
import PopularMenu from "@/components/favmenue"
import FoodLandingPage from "@/components/food/landing"
import NavBar from "@/components/food/Navbar"
import Footer from "@/components/footer"
import MobileAppSection from "@/components/mobileApp"
import SpecialOffers from "@/components/spacialOffers"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-bl from-[#ffede6] via-[#fff4ef] to-[#ffe3d7] dark:from-[#0f0f0f] dark:via-[#161616] dark:to-[#1f1f1f] transition-colors duration-500">

      <div className="absolute w-full rounded-full bg-[#ff5a5f]/20 blur-3xl" />

      <div className="absolute w-full rounded-full bg-[#f7b733]/20 blur-3xl" />
      <NavBar/>
      <FoodLandingPage />
      <SpecialOffers />
      <ServicesSection />
      <PopularMenu/>
      <MobileAppSection/>
      <Footer/>
    </div>
  )
}
