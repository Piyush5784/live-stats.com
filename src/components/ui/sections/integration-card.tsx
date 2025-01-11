import React from "react";
import { FaReact, FaAngular, FaVuejs } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJquery } from "react-icons/si";
import { BorderBeam } from "../border-beam";

const IntegrationCards = () => {
  return (
    <div>
      <div className="pt-10">
        <p className="text-center font-bold text-2xl pb-5 ">
          Seamless SDKs for <br /> Modern Framework
        </p>
      </div>
      {/* <div className="relative h-[200px] w-[200px] rounded-xl">
   
  </div> */}
      <div className="flex items-center justify-center pb-10">
        <div className="md:w-[43.5%] flex flex-wrap md:border border-green-600 rounded-xl items-center relative  justify-center">
          {/* <div className="hidden lg:block"> */}
          <BorderBeam
            colorFrom="#80EC8A"
            colorTo="#02B64E"
            size={250}
            className="hidden lg:block"
            duration={12}
            delay={9}
          />
          {/* </div> */}
          <div className="border p-10 border-green-500 md:border-none">
            <FaReact
              size={50}
              className="animate-spin [animation-duration:5s]"
            />
          </div>
          <div className="border p-10 border-green-500 md:border-none">
            <RiNextjsFill size={50} />
          </div>
          <div className="border p-10 border-green-500 md:border-none">
            <FaAngular size={50} />
          </div>{" "}
          <div className="border p-10 border-green-500  md:border-none">
            <FaVuejs size={50} />
          </div>{" "}
          <div className="border p-10 border-green-500 md:border-none">
            <SiJquery size={50} />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default IntegrationCards;
