import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "../components/Navbar";
import AreasOfSpecialization from "@/components/AreasOfSpecialization";
import HomeServices from "@/components/HomeServices";
import HomeAbout from "@/components/HomeAbout";
import HomePlan from "@/components/HomePlan";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col overflow-hidden">
      <div className=" w-full">
        <Navbar />
        <Hero />
        <HomeServices />
        <HomeAbout />
        <HomePlan />
        <AreasOfSpecialization />
        <Footer />
      </div>
    </main>
  );
}
