"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ContainerScroll } from "../acernity/container-scrool-animation";

const InteractiveHover = () => {
  const [hovering, setHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [counter, setCounter] = useState(576);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    setHovering(true);
    setCounter(counter + 1);
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCounter(counter - 1);
  };

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center"
      style={{
        cursor: hovering ? "none" : "auto", // Hide the cursor when hovering
      }}
    >
      {/* Hover Component */}
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Image
          height={500}
          width={500}
          className="md:hidden"
          alt="Hero section image of the site"
          src={"/images/Rectangle.png"}
        />
        <div className="flex flex-col overflow-hidden pt-10">
          <ContainerScroll titleComponent={<></>}>
            <Image
              height={1000}
              width={1000}
              className="hidden md:block"
              alt="Hero section image of the site"
              src={"/images/hero-section.png"}
            />
          </ContainerScroll>
        </div>
        <div className="flex items-center justify-end relative -top-5 md:top-20 right-10">
          <div className="border-2 flex items-center justify-center border-[#02B64E] h-50 w-50 rounded-full px-4 py-2 gap-3 text-white">
            <div className="h-3 w-3 bg-[#02B64E] rounded-full"></div>
            <p className="font-bold"> {counter} Online</p>
          </div>
        </div>
      </div>

      {hovering && (
        <div
          className="absolute text-lg text-black pointer-events-none pt-20 pl-10 rouned-full"
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="1"
            viewBox="0 0 16 16"
            className={`h-4 w-4 text-green-500 transform transition-all ${
              hovering
                ? "-rotate-[70deg] -translate-x-[12px] -translate-y-[10px] stroke-green-600 scale-150"
                : "stroke-sky-600"
            }`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
          </svg>

          <div className="border rounded-full px-4 text-black bg-white">
            Manu
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveHover;
