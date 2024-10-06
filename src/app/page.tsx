import ContactSection from "@/components/ContactSection";
import FeaturesListSection from "@/components/FeatureListSection";
import { HeroSection } from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import { Testimonials } from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <FeaturesListSection />
      <WhyChooseUs />
      <Testimonials/>
      <ContactSection />
    </div>
  );
}
