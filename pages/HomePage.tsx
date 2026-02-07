import TechStackMarquee from "@/components/custom/tech-stack-marquee";
import { FeaturedSection } from "@/components/sections/FeaturedSection";
import { HeroSection } from "@/components/sections/HeroSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <TechStackMarquee></TechStackMarquee>
      <FeaturedSection></FeaturedSection>
    </div>
  );
};
export default HomePage;
