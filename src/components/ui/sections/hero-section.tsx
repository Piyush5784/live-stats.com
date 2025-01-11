import React from "react";
import { Button } from "../button";
import InteractiveHover from "../custom/hover-card";
import AnimatedShinyText from "../animated-shiny-text";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <>
      {" "}
      <div className="h-[60rem] whitespace-pre-wrap w-full bg-black bg-dot-white/[0.15] md:bg-dot-white/[0.156] inset-0 relative pt-10">
        <div className="absolute  pointer-events-none flex items-center justify-center bg-black/[0.1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex items-center flex-col justify-center w-full">
          <div className="text-center">
            <div className="z-10 flex py-4 items-center justify-center">
              <div
                className={cn(
                  "group rounded-full border border-black/5 bg-black transition-all ease-in hover:cursor-pointer "
                )}
              >
                <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out  hover:duration-300 ">
                  <span className="text-sm">✨ Introducing LiveStats</span>
                  <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedShinyText>
              </div>
            </div>

            <p className="font-bold text-2xl md:text-5xl text-white ">
              Track Real-Time Visitors on <br />
              Your Website
            </p>
            <p className="text-[#a0a0a0] font-light ">
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

          <InteractiveHover />

          {/* Decorative elements */}
          <div className="h-[80px] duration-500 w-[80px] blur-3xl top-24 right-10 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>

          <div className="h-[80px] duration-500 w-[80px] blur-3xl top-64 left-20 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>
          <div className="h-[80px] w-[80px] blur-3xl top-64 left-20 opacity-90 absolute rounded-full bg-[#80EC8A]"></div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
