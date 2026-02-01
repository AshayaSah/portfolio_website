import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { FloatingDockDemo } from "@/components/sections/FloatingDock";
import { HeroSection } from "@/components/sections/HeroSection";
import Navbar from "@/components/sections/Navbar";
import { NavbarAnimated } from "@/components/sections/NavbarAnimated";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      {/* <NavbarAnimated></NavbarAnimated> */}
      <HeroSection></HeroSection>
      <FeaturedProject></FeaturedProject>
      <FloatingDockDemo></FloatingDockDemo>
    </>
  );
}
