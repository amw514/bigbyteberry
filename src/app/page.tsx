import ContactSection from "@/components/ContactSection";
import FeaturesListSection from "@/components/FeatureListSection";
import { HeroSection } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesListSection />
      <WhyChooseUs />
      <ContactSection />
    </div>
  );
}
