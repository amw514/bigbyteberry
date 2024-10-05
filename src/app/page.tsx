// import { FeaturesSection } from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import FeaturesListSection from "@/components/FeatureListSection";
import { HeroSection } from "@/components/HeroSection";
import NavbarApp from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#030014]">
      <NavbarApp />
      <HeroSection />
      <ServicesSection />
      <FeaturesListSection />
      <WhyChooseUs />
      <ContactSection />
      {/* <FeaturesSection/> */}
    </div>
  );
}
