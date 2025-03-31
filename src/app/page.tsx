import Cards from "@/components/ui/sections/cards";
import HeroSection from "@/components/ui/sections/hero-section";
import IntegrationCards from "@/components/ui/sections/integration-card";
import Navbar from "@/components/ui/sections/Navbar";
import PricingSection from "@/components/ui/sections/pricing-section";
const page = () => {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Cards />
      <IntegrationCards />
      <PricingSection />
    </>
  );
};

export default page;
