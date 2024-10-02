// import { FeaturesSection } from "@/components/FeaturesSection";
import FeaturesListSection from "@/components/FeatureListSection";
import { Navbar } from "@/components/Navbar";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div className="bg-[#030014]">
      <Navbar />
      <ServicesSection/>
      <FeaturesListSection/>
      {/* <FeaturesSection/> */}
    </div>
  );
}
