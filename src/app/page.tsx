import IntegrationCards from "@/components/ui/custom/integration-cards";
import Cards from "@/components/ui/sections/cards";
import HeroSection from "@/components/ui/sections/hero-section";
import Navbar from "@/components/ui/sections/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <Navbar />
      <HeroSection />
      <Cards />
      <div className="pt-10">
        <p className="text-center font-bold text-2xl pb-5">
          Seamless SDKs for <br /> modern framework
        </p>
      </div>
    </>
  );
};

export default page;
