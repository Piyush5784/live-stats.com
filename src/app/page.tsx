import { Button } from "@/components/ui/button";
import InteractiveHover from "@/components/ui/custom/hover-card";
import Navbar from "@/components/ui/sections/Navbar";
import { AlignJustify } from "lucide-react";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="h-[60rem] w-full bg-black bg-dot-white/[0.2] relative pt-24">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black/[0.3] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex items-center flex-col justify-center w-full">
          <div className="text-center">
            <p className="font-bold text-2xl md:text-4xl ">
              Track Real-Time Visitors on <br />
              Your Website
            </p>
            <p className="text-[#a0a0a0] font-light">
              Get live updates on the number of <br /> users visiting your site{" "}
              <br />
              using our simple, secure, and scalable <br />
              integration
            </p>

            <div className="flex gap-2 items-center justify-center pt-7">
              <Button className="text-white">Try Now</Button>
              <Button
                variant={"outline"}
                className="border-green-600 hover:bg-green-300 hover:bg-opacity-10"
              >
                Learn More
              </Button>
            </div>
          </div>
          {/* <div>
            <Image
              height={500}
              width={500}
              alt="Hero section image of the site"
              src={"/images/Rectangle.png"}
            />
            <div className="flex items-center justify-end relative -top-5 right-10">
              <div className="border-2 flex items-center justify-center border-[#02B64E] h-50 w-50 rounded-full px-4 py-2 gap-3 text-white">
                <div className="h-3 w-3 bg-[#02B64E] rounded-full"></div>
                <p className="font-bold"> 567 Online</p>
              </div>
            </div> */}
          <InteractiveHover />
          {/* </div> */}

          {/* Decorative elements */}
          <div className="h-[80px] duration-500 w-[80px] blur-3xl top-24 right-10 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>

          <div className="h-[80px] duration-500 w-[80px] blur-3xl top-64 left-20 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>
          <div className="h-[80px] w-[80px] blur-3xl top-64 left-20 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>
        </div>
      </div>
    </>
  );
};

export default page;
