import ChoosePlan from "@/components/home/ChoosePlan";
import CustomerCarousel from "@/components/home/CustomerCarousel";
import DiscoverMore from "@/components/home/DiscoverMore";
import FeaturedServices from "@/components/home/FeaturedServices";
import HeroSection from "@/components/home/HeroSection";
import OurProject from "@/components/home/OurProject";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import TopServices from "@/components/home/TopServices";
import WhoWeAre from "@/components/home/WhoWeAre";
import WhyChooseUs from "@/components/home/WhyChooseUs";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <CustomerCarousel />
      <WhoWeAre />
      <FeaturedServices />
      <Stats />
      <WhyChooseUs />
      <ChoosePlan />
      <DiscoverMore />
      <TopServices />
      <OurProject />
      <Testimonials />
    </div>
  );
}
