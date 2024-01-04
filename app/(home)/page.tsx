import CustomerCarousel from "@/components/home/CustomerCarousel";
import FeaturedServices from "@/components/home/FeaturedServices";
import HeroSection from "@/components/home/HeroSection";
import Stats from "@/components/home/Stats";
import WhoWeAre from "@/components/home/WhoWeAre";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CustomerCarousel />
      <WhoWeAre />
      <FeaturedServices />
      <Stats />
    </div>
  );
}
