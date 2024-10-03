// import { FeaturesSection } from "@/components/FeaturesSection";
import FeaturesListSection from "@/components/FeatureListSection";
import { Navbar } from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#030014]">
      <Navbar />
      <ServicesSection/>
      <FeaturesListSection/>
      <WhyChooseUs/>
      {/* <FeaturesSection/> */}
    </div>
  );
}
